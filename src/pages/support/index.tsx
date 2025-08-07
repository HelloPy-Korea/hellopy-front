import { AboutSection, AboutSectionTitle } from "@/components/AboutSection";
import SupportCards from "../../components/SupportCards/SupportCards";

const Support = () => {
  return (
    <div className="align-center flex flex-col">
      <AboutSection>
        <AboutSectionTitle
          title={"후원 신청 절차"}
          subtitle={"Support process"}
          description={[
            "HelloPY는 주니어 개발자들에게 파이썬 교육과 네트워킹 기회를 제공하는 커뮤니티로, 더욱 원활한 활동을 위해 다양한 형태의 후원을 받고 있습니다.",
          ]}
        />
        <SupportCards />
      </AboutSection>
    </div>
  );
};

export default Support;
