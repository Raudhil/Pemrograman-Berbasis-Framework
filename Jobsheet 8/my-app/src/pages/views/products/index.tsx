import styles from "../../produk/product.module.scss";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const SkeletonItem = () => (
  <div className={styles.produk_content_item_skeleton}>
    <div className={styles.skeleton_image}></div>
    <div className={styles.skeleton_name}></div>
    <div className={styles.skeleton_category}></div>
    <div className={styles.skeleton_price}></div>
  </div>
);

const TampilanProduk = ({ 
  products, 
  isLoading,
  error
}: { 
  products: ProductType[]
  isLoading?: boolean
  error?: any
}) => {
  return (
    <div className={styles.product}>
      <h1 className={styles.produk_title}>Daftar Produk</h1>

      <div className={styles.produk_content}>
        {isLoading ? (
          // Tampilkan 4 skeleton item saat loading
          Array.from({ length: 4 }).map((_, i) => (
            <SkeletonItem key={i} />
          ))
        ) : error ? (
          <div className={styles.error_message}>
            <p>Gagal memuat data produk</p>
          </div>
        ) : products.length > 0 ? (
          // Tampilkan produk asli dengan animasi fade-in
          products.map((product: ProductType) => (
            <div
              key={product.id}
              className={styles.produk_content_item}
            >
              <img
                className={styles.produk_content_item_image}
                src={product.image}
                alt={product.name}
              />

              <h4 className={styles.produk_content_item_name}>
                {product.name}
              </h4>

              <p className={styles.produk_content_item_category}>
                {product.category}
              </p>

              <p className={styles.produk_content_item_price}>
                Rp {product.price.toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <div className={styles.empty_message}>
            <p>Tidak ada produk tersedia</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TampilanProduk;