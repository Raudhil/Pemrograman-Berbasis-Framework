import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "../navbar";
import Footer from "../footer";

type AppShellProps = {
  children: React.ReactNode;
};

const disabledNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname, push } = useRouter();

  useEffect(() => {
    // Daftar halaman yang tidak memerlukan login (public routes)
    const publicRoutes = ["/auth/login", "/auth/register", "/", "/about"];
    const isPublicRoute = publicRoutes.includes(pathname);

    // Jika bukan public route, cek apakah user sudah login
    if (!isPublicRoute) {
      const isLogin = localStorage.getItem("isLogin");
      if (!isLogin) {
        push("/auth/login");
      }
    }
  }, [pathname, push]);

  return (
    <main>
      {!disabledNavbar.includes(pathname) && <Navbar />}
      {children}
      {!disabledNavbar.includes(pathname) && <Footer />}
    </main>
  );
};

export default AppShell;