import Layout from "../components/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* Next.js는 index.js의 getServerSideProps함수를 실행시켜 pageProps에 넣어줌 -> Home의 props처럼 들어오게 됨 */}
      <Component {...pageProps} />
    </Layout>
  );
}
