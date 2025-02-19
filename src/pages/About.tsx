import Header from "@/components/Header/Header.tsx";
import {HomeCard} from "@/components/HomeCard";
import Footer from "@/components/Footer/Footer";

import AboutImg from "@/assets/img/about/img_about.png";
import CalendarImg from "@/assets/img/home/img_this_calendar.png";
import ActiveImg from "@/assets/img/home/img_active.png";
import DiscordImg from "@/assets/img/home/img_discord.png";

import { TextCircleGroup } from "@/components/TextCircle";

import { HeaderBanner } from "@/components/HeaderBanner";

import { ProgramInfo } from "@/components/ProgramInfo";
import ProgramImg from '@/assets/img/about/img_program.png'; // 이미지 경로는 실제 경로로 변경


export function About() {
    return (
        <div>
            <Header 
                backgroundColor="bg-[#FFEEA4]"
                textColor="text-black"
            />
            <div className="flex flex-col align-center">
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
                            redirectUrl: ""
                        }
                    ]}
                    textPosition="left"
                />


                <div className="flex mt-[180px] mb-[106px] flex-col justify-start items-center gap-2">
                    <div className="self-stretch text-center text-[#aa3efd] text-[20px] font-bold">
                        HelloPY COC(Code of Conduct)
                        </div>
                    <div className="self-stretch text-center text-black text-[28px] font-bold">
                        어떤 행동이 행동 규범의 적용 범위에 속하는지 확실치 않은 경우, <br/> COC 원칙 본문을 보고하실 것을 권장합니다.
                    </div>
                </div>

                <div className="w-full mb-[180px] flex align-center justify-center">
                    <TextCircleGroup
                        textList={[
                            "누구나 편안하게 참여할 수 있는\n커뮤니티를 지향합니다", 
                            "서로 다름을 인정하고 존중하는\n분위기를 지향합니다.", 
                            "서로 환영하는 분위기를\n독려합니다"
                        ]}
                        size={355}  
                        overlap={6}
                    />
                </div>
                

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
                    buttonUrl=""
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
                    buttonUrl=""
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

            <Footer>
                
            </Footer>
        </div>
    );
}
