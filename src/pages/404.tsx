import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-hellopy-purple-200">404</h1>
        <p className="mb-2 text-2xl font-medium text-black">페이지를 찾을 수 없습니다</p>
        <p className="text-base text-gray-600">
          요청하신 페이지가 삭제되었거나 잘못된 경로입니다.
        </p>
      </div>
      <button
        onClick={() => navigate("/")}
        className="rounded-full bg-hellopy-purple-200 px-8 py-3 text-white transition-all hover:bg-hellopy-purple-300"
      >
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default NotFound; 