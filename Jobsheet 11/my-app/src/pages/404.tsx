import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
        <meta name="description" content="Halaman yang Anda cari tidak tersedia atau telah dipindahkan" />
      </Head>
      <div className={styles.error}>
        <img
          src="/404.png"
          alt="404 Error Illustration"
          className={styles.error__image}
        />
        <h1>404 - Halaman Tidak Ditemukan</h1>
        <p>Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.</p>
        <p className={styles.error__description}>
          Silakan periksa kembali URL yang Anda masukkan atau kembali ke halaman utama.
        </p>
        <Link href="/" className={styles.error__button}>
          Kembali ke Home
        </Link>
      </div>
    </>
  );
};

export default Custom404;