import { useRouter } from "next/router";

const Produk = () => {
  const { push } = useRouter();

  const handleLogout = () => {
    // Hapus data login dari localStorage
    localStorage.removeItem("isLogin");
    // Redirect ke halaman login
    push("/auth/login");
  };

  return (
    <div>
      <h1>Produk User Page</h1>
      <p>Selamat datang di halaman produk!</p>
      <button onClick={handleLogout} style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}>
        Logout
      </button>
    </div>
  );
};

export default Produk;