import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "../views/products";
import useSWR from "swr";
import fetcher from "../utils/swr/fetcher";

const Kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const { push } = useRouter();
  // const [products, setProducts] = useState([]);

  // console.log("products", products);

  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  // Cek data, error, dan isLoading
  // console.log("data:", data);
  // console.log("error:", error);
  // console.log("isLoading:", isLoading);

  return (
    <div>
      <TampilanProduk 
        products={data?.data || []}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default Kategori;