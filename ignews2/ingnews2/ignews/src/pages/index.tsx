import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import { stripe } from "../services/stripe";
import { formatPrice } from "../services/formatPrice";

import girlCodingImg from "/public/images/avatar.svg";
import { SubscribeButton } from "../components/SubscribeButton";

import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
    descriptionProduct: {
      description: string;
    };
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
            {/* <p>{product.descriptionProduct.description}</p> */}
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <Image src={girlCodingImg} alt='Girl coding' />
      </main>
    </>
  );
}

//function SSR so funciona em pagina e se quiser acessar alguma informação em um component
// tem que passar via props para o component
// export const getServerSideProps: GetServerSideProps = async () => {
//   const price = await stripe.prices.retrieve("price_1JNlZOFh90upBGI50srgSBhg", {
//     expand: ["product"],
//   });

//   const product = {
//     priceId: price.id,
//     amount: formatPrice("en-US", "USD", price.unit_amount / 100),
//     descriptionProduct: price.product,
//   };

//   return {
//     props: {
//       product,
//     },
//   };
// };

//chamada static com SSG
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1JNlZOFh90upBGI50srgSBhg", {
    expand: ["product"],
  });

  const product = {
    priceId: price.id,
    amount: formatPrice("en-US", "USD", price.unit_amount / 100),
    descriptionProduct: price.product,
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24hours
  };
};
