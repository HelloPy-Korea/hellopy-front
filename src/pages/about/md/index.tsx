import BanngerImg from "@/assets/img/md/img_goods.png";

import { AboutSection, AboutSectionTitle } from "@/components/AboutSection";
import { History } from "@/components/History";
import { useGetMds } from "@/quries/useGetMds.ts";
import { MD } from "@/types/common.ts";
import { Container } from "@/components/Container";

const AboutMd = () => {
  const { data: mdData } = useGetMds();
  const mdList: MD[] = mdData?.data ?? [];

  return (
    <div className="align-center flex flex-col">
      <AboutSection>
        <Container>
          <AboutSectionTitle
            title={"MD 한눈에 보기"}
            subtitle={"MD Overview"}
            description={[]}
          />
          <History items={mdList} />
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
