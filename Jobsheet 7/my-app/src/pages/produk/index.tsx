import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number | string;
  size: string;
  kategori: string;
};

const kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const [push] = useRouter();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  // }, []);

  const fetchProducts = () => {
    setIsLoading(true);
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        if (!responsedata.status) {
          console.error("API error:", responsedata.message);
          setProducts([]);
          return;
        }

        console.log("Data produk:", responsedata.data);
        setProducts(responsedata.data ?? []);
      })
      .catch((error) => {
        console.error("Error fetching produk:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
      <button
        onClick={fetchProducts}
        disabled={isLoading}
        style={{
          padding: "8px 16px",
          marginBottom: "16px",
          backgroundColor: isLoading ? "#ccc" : "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: isLoading ? "not-allowed" : "pointer",
        }}
      >
        {isLoading ? "Loading..." : "Refresh Data"}
      </button>
      <div>
        {products.length === 0 ? (
          <p>Data produk kosong atau gagal dimuat.</p>
        ) : (
          products.map((product: ProductType) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>Kategori: {product.kategori}</p>
              <p>Harga: {product.price}</p>
              <p>Ukuran: {product.size}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default kategori;