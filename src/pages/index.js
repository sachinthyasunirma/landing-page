import React, { Suspense } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import SyncLoader from "react-spinners/SyncLoader";
import Link from "next/link";
import { BsArrowDownCircle } from "react-icons/bs";

const PaintingGallery = React.lazy(() =>
  import("@/components/gallery/PaintingGallery")
);

const inter = Inter({ subsets: ["latin"] });

export default function Home({ gallery, arts }) {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className="art-gallery mb-4">
          <Suspense fallback={<SyncLoader color="#36d7b7" />}>
            <PaintingGallery data={gallery} />
          </Suspense>
        </section>
        <section className="text-area p-1 mb-4">
        <div className="row p-0 m-0">
          <div className="col-sm-5 d-flex py-2 px-lg-5 px-md-3 px-sm-2 justify-content-sm-end justify-content-center">
            <div className="text_content">
              <div className={styles.text_title}>Children of</div>
              <div className={styles.text_title_main}>
                forgotten
                <br /> god
              </div>
            </div>
          </div>
          <div className="col-sm-5 d-flex py-2 justify-content-center align-items-center">
            <Link className="text-black text-decoration-none" href={"#"}>
              <div className={styles.text_more}>
                explore more artworks
                <BsArrowDownCircle fontSize={"1.7rem"} />
              </div>
            </Link>
          </div>
          <div className="col-sm-2 py-2 px-0 d-flex align-items-center align-items-sm-end flex-column justify-content-end">
            <button className={styles.text_btn}>START BIDDING</button>
          </div>
        </div>
      </section>
        <section className="art-gallery mb-4">
          <Suspense fallback={<SyncLoader color="#36d7b7" />}>
            <PaintingGallery data={arts} />
          </Suspense>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const { art } = await import("../data/PaintingData.json");
  const { art_spe } = await import("../data/PaintingData.json");
  return {
    props: {
      gallery: art,
      arts: art_spe,
    },
  };
}
