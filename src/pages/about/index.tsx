import AboutImg from "@/assets/img/about/img_about.png";

import { HeaderBanner } from "@/components/HeaderBanner";

import { ProgramInfo } from "@/components/ProgramInfo";
import ProgramImg from "@/assets/img/about/img_program.png";
import VisualSection from "@/components/VisualSection/VisualSection";

import DiscordBtn from "@/assets/img/about/btn_discord.png";
import InstagramBtn from "@/assets/img/about/btn_instagram.png";
import LinkedinBtn from "@/assets/img/about/btn_linkedin.png";
import YoutubeBtn from "@/assets/img/about/btn_youtube.png";
import PymonMacImg from "@/assets/img/about/img_pymon_mac.png";
import { ProfileCard } from "@/components/ProfileCard";
import { AboutSection, AboutSectionTitle } from "@/components/AboutSection";

const About = () => {
  return (
    <div className="align-center flex flex-col">
      <HeaderBanner
        backgroundImage={AboutImg}
        title="파이썬을 사랑하는 모든 이들을 위한"
        subTitle="따뜻하고 포용적인 커뮤니티"
        description={`
                        명함이 없어도 좋습니다!! <br/>
                        취업 준비생부터 3년차 이하 개발자까지, 파이썬에 관심 있는 주니어라면 누구나 환영합니다. <br/>
                        자유롭게 의견을 나누고, 평가받지 않는 발표의 장을 지향합니다. 같이 공부하고, 함께 성장해요!
                    `}
      />
      <div className="relative w-[1920px]">
        <ProgramInfo
          backgroundImage={ProgramImg}
          programDetails={[
            {
              title: "세미나",
              description:
                "상반기 & 하반기로 총 2번 진행합니다. <br/> 발표, 나눔, 네트워킹, 멘토링, 커리어빌gv딩, 핸즈온 등 여러 세션을 준비 중입니다.",
            },
            {
              title: "스터디",
              description:
                "HelloPY는 개발자의 성장을 응원합니다. 필요에 따라 스터디를 자유롭게 <br/> 오픈, 참여할 수 있습니다. 모각코, 줌각코 등 다양한 형태로 모여 공부합니다.",
            },
            {
              title: "멘토링",
              description:
                "HelloPY는 시니어 파이써니스타와 주니어 파이써니스타의 활발한 멘토링을 <br/> 지향합니다. HelloPY는 3년차 이하 파이썬 주니어 유저들을 위한 모임이에요. <br/> 경력 3년 이상이시라면, 멘토로 함께해주세요! ",
              buttonText: "멘토로 참여하기 ->",
              redirectUrl: "",
            },
          ]}
          textPosition="left"
        />
      </div>

      <div className="relative w-[1920px]">
        <VisualSection />
      </div>

      <div
        className="flex w-[1920px] items-center bg-[#FCF7FF] bg-cover bg-center px-[156px] py-16"
        style={{ backgroundImage: `url(${PymonMacImg})` }}
      >
        <div className="flex w-full flex-row justify-between gap-10 px-[160px]">
          <div className="inline-flex flex-col gap-5">
            {/* 타이틀 */}
            <div className="flex flex-col gap-0.5">
              <div className="text-xl font-semibold text-[#bc1df2]">
                SNS channel
              </div>
              <div className="text-[32px] font-semibold text-[#2c003c]">
                SNS 채널
              </div>
            </div>

            {/* 설명 */}
            <div className="flex flex-col gap-1 text-lg font-light text-[#2c003c]">
              {[
                " HelloPY는 공식 홈페이지 외에도 다양한 SNS 채널을 통해 소식을",
                "쉽게 접할 수 있습니다. 원하는 플랫폼에서 편하게 소식을 받아보고,",
                "커뮤니티와 함께 소통하세요!",
              ].map((text, index) => (
                <span key={index}>{text}</span>
              ))}
            </div>
          </div>
          <div className="grid w-1/2 grid-cols-2 gap-8">
            <img
              src={DiscordBtn}
              alt="Discord"
              className="h-auto w-full rounded-xl"
            />
            <img
              src={YoutubeBtn}
              alt="YouTube"
              className="h-auto w-full rounded-xl"
            />
            <img
              src={InstagramBtn}
              alt="Instagram"
              className="h-auto w-full rounded-xl"
            />
            <img
              src={LinkedinBtn}
              alt="LinkedIn"
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </div>

      {/*<div className="w-[1920px] relative">

                <div
                    className="w-full flex items-center bg-cover bg-center bg-[#FCF7FF]"
                    style={{backgroundImage: `url(${PymonMacImg})`}}
                >
                    <div
                        className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between mx-auto p-6 gap-10">
                         왼쪽 텍스트 & 이미지
                        <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left space-y-4">
                        <p className="text-[#bc1df2] text-[20px] font-medium">SNS channel</p>
                            <h2 className="text-[#2D003D] text-[32px] font-semibold">SNS 채널</h2>
                            <p className="text-[#2D003D] text-[18px] font-light">
                                HelloPY는 공식 홈페이지 외에도 다양한 SNS 채널을 통해 소식을 <br/>
                                쉽게 접할 수 있습니다. 원하는 플랫폼에서 편하게 소식을 받아보고, <br/>
                                커뮤니티와 함께 소통하세요!
                            </p>
                        </div>

                         오른쪽 SNS 아이콘 박스
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-1/2">
                            <img src={DiscordBtn} alt="Discord" className="w-full h-auto rounded-xl"/>
                            <img src={YoutubeBtn} alt="YouTube" className="w-full h-auto rounded-xl"/>
                            <img src={InstagramBtn} alt="Instagram" className="w-full h-auto rounded-xl"/>
                            <img src={LinkedinBtn} alt="LinkedIn" className="w-full h-auto rounded-xl"/>
                        </div>
                    </div>
                </div>
            </div>*/}
      <AboutSection>
        <AboutSectionTitle
          title={"HelloPY 운영진"}
          subtitle={"Organizing Committee"}
          description={["print.hello.py@gmail.com"]}
        />
        <div className="ml-[15%] grid grid-cols-4 gap-3">
          <ProfileCard
            name="홍길동"
            position="Frontend"
            links={{
              email: "hong@example.com",
              linkedin: "https://www.linkedin.com/in/hong",
              github: "https://github.com/hong",
            }}
            image="https://example.com/path/to/profile-image.jpg"
          />

          <ProfileCard
            name="홍길동"
            position="Frontend"
            links={{
              email: "hong@example.com",
              linkedin: "https://www.linkedin.com/in/hong",
              github: "https://github.com/hong",
            }}
            image="https://example.com/path/to/profile-image.jpg"
          />

          <ProfileCard
            name="홍길동"
            position="Frontend"
            links={{
              email: "hong@example.com",
              linkedin: "https://www.linkedin.com/in/hong",
              github: "https://github.com/hong",
            }}
            image="https://example.com/path/to/profile-image.jpg"
          />

          <ProfileCard
            name="홍길동"
            position="Frontend"
            links={{
              email: "hong@example.com",
              linkedin: "https://www.linkedin.com/in/hong",
              github: "https://github.com/hong",
            }}
            image="https://example.com/path/to/profile-image.jpg"
          />
        </div>
      </AboutSection>
      {/*<div className="w-[1920px] relative">
                <div className="w-full flex items-center bg-cover bg-center bg-[#FCF7FF]">
                    <div
                        className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between mx-auto p-6 gap-10">
                         왼쪽 텍스트 & 이미지
                        <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left space-y-4">
                            <p className="text-[#bc1df2] text-[20px] font-medium">Organizing Committee</p>
                            <h2 className="text-[#2D003D] text-[32px] font-semibold">HelloPY 운영진</h2>
                            <p className="text-[#2D003D] text-[18px] font-light">
                                print.hello.py@gmail.com
                            </p>
                        </div>

                         오른쪽 SNS 아이콘 박스
                        <div className="grid grid-cols-3 gap-6 w-full mt-[15%]">

                            <ProfileCard
                                name="홍길동"
                                position="Frontend"
                                links={{
                                    email: "hong@example.com",
                                    linkedin: "https://www.linkedin.com/in/hong",
                                    github: "https://github.com/hong",
                                }}
                                image="https://example.com/path/to/profile-image.jpg"/>

                            <ProfileCard
                                name="홍길동"
                                position="Frontend"
                                links={{
                                    email: "hong@example.com",
                                    linkedin: "https://www.linkedin.com/in/hong",
                                    github: "https://github.com/hong",
                                }}
                                image="https://example.com/path/to/profile-image.jpg"/>

                            <ProfileCard
                                name="홍길동"
                                position="Frontend"
                                links={{
                                    email: "hong@example.com",
                                    linkedin: "https://www.linkedin.com/in/hong",
                                    github: "https://github.com/hong",
                                }}
                                image="https://example.com/path/to/profile-image.jpg"/>

                            <ProfileCard
                                name="홍길동"
                                position="Frontend"
                                links={{
                                    email: "hong@example.com",
                                    linkedin: "https://www.linkedin.com/in/hong",
                                    github: "https://github.com/hong",
                                }}
                                image="https://example.com/path/to/profile-image.jpg"/>

                        </div>
                    </div>
                </div>
            </div>*/}
    </div>
  );
};

export default About;
