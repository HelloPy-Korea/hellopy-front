import MainBanner from "@/components/MainBanner/MainBanner.tsx";
import { HomeCard } from "@/components/HomeCard";

import HomeImg from "@/assets/img/home/img_home.jpeg";
import CalendarImg from "@/assets/img/home/img_this_calendar.png";
import ActiveImg from "@/assets/img/home/img_active.png";
import DiscordImg from "@/assets/img/home/img_discord.png";
const DISCORD_URL: string = import.meta.env.VITE_DISCORD_URL;
export const Home = () => {
  return (
    <div className="align-center flex flex-col">
      <MainBanner backgroundImage={HomeImg} title="" description={``} />
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
        buttonUrl="/history"
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
        buttonUrl={DISCORD_URL}
      />
    </div>
  );
};

export default Home;
