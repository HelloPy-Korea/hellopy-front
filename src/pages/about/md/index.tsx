import BackImg from "@/assets/img/md/img_banner.png";
import BanngerImg from "@/assets/img/md/img_goods.png";

import { HeaderBanner } from "@/components/HeaderBanner";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AboutSection, AboutSectionTitle } from "@/components/AboutSection";
import { Gallery } from "@/components/Gallery";
import { useGetMds } from "@/quries/useGetMds.ts";
import { MD } from "@/types/common.ts";
import { Container } from "@/components/Container";

const AboutMd = () => {
  const { data: mdData } = useGetMds();
  const mdList: MD[] = mdData?.data ?? [];

  return (
    <div className="align-center flex flex-col">
      <HeaderBanner
        backgroundImage={BackImg}
        title="HelloPY MD"
        description={`저희 대표 캐릭터 파이몬으로 만든 귀여운 스티커들과 키링들..<br/>앞으로 더 많아질 굿즈들을 기대해 주세요!!`}
      >
        <Breadcrumb
          children={[<a href="/">Home</a>, <a href="/about">ABOUT</a>, "MD"]}
        />
      </HeaderBanner>

      <AboutSection>
        <Container>
          <AboutSectionTitle
            title={"MD 한눈에 보기"}
            subtitle={"MD Overview"}
            description={[]}
          />
          <Gallery items={mdList} />
        </Container>
      </AboutSection>
      <div className="relative">
        <img
          src={BanngerImg}
          className="h-auto w-full object-cover"
          alt="Intro Shape"
        />
      </div>
    </div>
  );
};

export default AboutMd;
