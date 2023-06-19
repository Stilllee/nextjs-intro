import Seo from "../../components/Seo";
import { useRouter } from "next/router";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      {/* router.query.title은 유저가 홈페이지에서 상세페이지로 넘어올때에만 존재 */}
      {/* 그래서 시크릿 모드로 들어가면 Loading...이 뜸 */}
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
