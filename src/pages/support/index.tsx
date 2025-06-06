import BgImg from "@/assets/img/support/support_banner.png";

import { HeaderBanner } from "@/components/HeaderBanner";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AboutSection, AboutSectionTitle } from "@/components/AboutSection";
import SupportCards from '../../components/SupportCards/SupportCards';


const Support = () => {

  return (
    <div className="align-center flex flex-col">
      <HeaderBanner
        backgroundImage={BgImg}
        className={"dark"}
        title={"HelloPY SUPPORT"}
        description={`여러분의 후원은 HelloPY 커뮤니티 활동을 지속적으로 활성화하고 더 많은 주니어 개발자들의 커뮤니티 활동 양성에 큰 도움이 됩니다.<br/>많은 관심과 참여부탁드립니다.`}
      >
        <Breadcrumb
          children={[
            <a href="/">Home</a>,
            <a href="/support">SUPPORT</a>
          ]}
        />
      </HeaderBanner>

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
