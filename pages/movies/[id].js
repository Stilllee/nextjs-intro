import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  return (
    <div>
      {/* router.query.title은 유저가 홈페이지에서 상세페이지로 넘어올때에만 존재 */}
      {/* 그래서 시크릿 모드로 들어가면 Loading...이 뜸 */}
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
}
