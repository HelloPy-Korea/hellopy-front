import MainBanner from "@/components/MainBanner/MainBanner.tsx";
import { HomeCard } from "@/components/HomeCard";

import HomeImg from "@/assets/img/home/img_home.png";
import CalendarImg from "@/assets/img/home/img_this_calendar.png";
import ActiveImg from "@/assets/img/home/img_active.png";
import DiscordImg from "@/assets/img/home/img_discord.png";
import { TextCircleGroup } from "@/components/TextCircle";
import { Container } from "@/components/Container";

export const Home = () => {
  return (
    <div className="align-center flex flex-col">
      <MainBanner
        backgroundImage={HomeImg}
        title="HelloPY"
        description={`
                        파이썬을 사용하는 모든 이들을 위한 <br/>
                        따뜻하고 포용적인 커뮤니티, 헬로파이입니다
                    `}
      />
      <Container>
        <div className="mb-[106px] mt-[180px] flex flex-col items-center justify-start gap-2">
          <div className="self-stretch text-center text-[20px] font-bold text-hellopy-purple-200">
            HelloPY COC(Code of Conduct)
          </div>
          <div className="self-stretch text-center text-[28px] font-bold text-black">
            어떤 행동이 행동 규범의 적용 범위에 속하는지 확실치 않은 경우,{" "}
            <br /> COC 원칙 본문을 보고하실 것을 권장합니다.
          </div>
        </div>
      </Container>

      <Container className="align-center mb-[180px] flex justify-center">
        <TextCircleGroup
          textList={[
            "누구나 편안하게 참여할 수 있는\n커뮤니티를 지향합니다",
            "서로 다름을 인정하고 존중하는\n분위기를 지향합니다.",
            "서로 환영하는 분위기를\n독려합니다",
          ]}
          size={355}
          overlap={6}
        />
      </Container>

      <HomeCard
        backgroundImage={CalendarImg}
        title="이달의 달력"
        subtitle="Wallpaper"
        description={`
                        HelloPY는 매달 새로운 달력을 제작하여 무료로 배포합니다.<br/>
                        지금 바로 최신 파이몬 달력을 다운로드해보세요!
                    `}
        buttonText="전체 이미지 보기 →"
        textPosition="left"
        buttonUrl="/about/identity"
      />

      <HomeCard
        backgroundImage={ActiveImg}
        title="활동 갤러리"
        subtitle="Activity"
        description={`
                        HelloPY는 세미나, 스터디, 모각작 등 다양한 활동을 운영하고 있습니다.<br/>
                        활동 갤러리에서 지난 활동의 생생한 모습을 확인해보세요!
                    `}
        buttonText="전체 활동 보기 →"
        textPosition="right"
        buttonUrl="/news"
      />

      <HomeCard
        backgroundImage={DiscordImg}
        title="HelloPY Discord"
        subtitle="Community"
        description={`
                        HelloPY는 디스코드 채널을 기반으로 커뮤니티가 형성되어 있습니다. <br/>
                        지금 바로 디스코드에 참여하여 주니어들과 함께 성장해보세요!
                    `}
        buttonText="Discord 바로가기 →"
        textPosition="left"
        buttonUrl=""
      />
    </div>
  );
};

export default Home;
