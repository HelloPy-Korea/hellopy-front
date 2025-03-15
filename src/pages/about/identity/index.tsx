import BackImg from "@/assets/img/about/img_identity.png";
import introShape from "@/assets/img/about/intro_shape.png";
import TypoImg from "@/assets/img/about/typography.png";
import PurpleImg from "@/assets/img/about/img_purple.png";
import YellowImg from "@/assets/img/about/img_yellow.png";
import PymonImg1 from "@/assets/img/about/img_type1.png";
import PymonImg2 from "@/assets/img/about/img_type2.png";
import PymonImg3 from "@/assets/img/about/img_type3.png";

import { HeaderBanner } from "@/components/HeaderBanner";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AboutSection, AboutSectionTitle } from "@/components/AboutSection";
import { TextCircleGroup } from "@/components/TextCircle";
import * as React from "react";
import {
  LogoBanner,
  LogoBannerImage,
  LogoBannerLink,
  LogoBannerTitle,
} from "@/components/LogoBanner";
import { SelectBox } from "@/components/SelectBox";
import { PymonCalendar } from "@/components/PymonCalendar/PymonCalendar.tsx";
import { useEffect, useState } from "react";
import { SelectValue } from "@/types/common.ts";
import { Container } from "@/components/Container";

const keywordList = [
  ["Neat", "깔끔"],
  ["Warm", "따뜻"],
  ["Embrace", "포용"],
  ["Relief", "안전"],
  ["Growth", "성장"],
].map(([text, subText]) => (
  <React.Fragment key={text}>
    <p className="text-lg font-light">{text}</p>
    <p className="text-2xl">{subText}</p>
  </React.Fragment>
));

const calendarData = [
  {
    year: 2025,
    month: 1,
    description: "2025년 1월 달력입니다",
    link: "https://picsum.photos/301/201?random=1",
  },
  {
    year: 2025,
    month: 2,
    description: "2025년 2월 달력입니다",
    link: "https://picsum.photos/302/202?random=2",
  },
  {
    year: 2025,
    month: 1,
    description: "2025년 1월 달력입니다",
    link: "https://picsum.photos/301/201?random=1",
  },
  {
    year: 2025,
    month: 2,
    description: "2025년 2월 달력입니다",
    link: "https://picsum.photos/302/202?random=2",
  },
  {
    year: 2025,
    month: 1,
    description: "2025년 1월 달력입니다",
    link: "https://picsum.photos/301/201?random=1",
  },
  {
    year: 2025,
    month: 2,
    description: "2025년 2월 달력입니다",
    link: "https://picsum.photos/302/202?random=2",
  },
];

const hellopyUiList = [
  { name: "HelloPY Purple", img: PurpleImg },
  { name: "HelloPY Yellow", img: YellowImg },
];

const selectedOptions = [
  { label: "2023년", value: "2023" },
  { label: "2024년", value: "2024" },
  { label: "2025년", value: "2025" },
];

const AboutIdentity = () => {
  const [yearList, setYearList] = useState<SelectValue[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(2025);

  useEffect(() => {
    setYearList(
      selectedOptions.map(
        (option) =>
          ({
            ...option,
            checked: option.value === String(selectedYear),
          }) as SelectValue,
      ),
    );
  }, []);

  const onSelectYear = (value: string) => {
    setSelectedYear(Number(value));
    setYearList(
      selectedOptions.map(
        (option) =>
          ({ ...option, checked: option.value === value }) as SelectValue,
      ),
    );
  };

  return (
    <div className="align-center flex flex-col">
      <HeaderBanner
        backgroundImage={BackImg}
        title={"HelloPY IDENTITY"}
        className={"dark"}
        description={`HelloPY는 주니어 개발자들에게 더욱 따뜻한 공간이 되기 위해 성장하고 있습니다.<br/>우리는 발표와 나눔, 공유와 협력을 통해 함께 성장하는 커뮤니티를 만들어가고자 합니다.<br/>이제, HelloPY의 아이덴티티를 구성하는 요소들을 만나보세요!`}
      >
        <Breadcrumb
          className={"dark"}
          children={[
            <a href="/">Home</a>,
            <a href="/about">ABOUT</a>,
            "Identity",
          ]}
        />
      </HeaderBanner>
      <AboutSection>
        <AboutSectionTitle
          title={"HelloPY 키워드"}
          subtitle={"Identity Keywords"}
          description={[]}
        />
        <TextCircleGroup textList={keywordList} size={238} overlap={5} />
      </AboutSection>

      <div className={"bg-[#FCF7FF]"}>
        <Container>
          <img
            src={introShape}
            className="h-auto w-full object-cover"
            alt="Intro Shape"
          />
        </Container>
      </div>

      <AboutSection>
        <AboutSectionTitle
          title={"HelloPY 로고"}
          subtitle={"LOGO"}
          description={[
            "HelloPY는 Hello, Python을 합친 것으로 파이썬 입문자 수준의 주니어 커뮤니티를 의미합니다.",
            "가운데 파이썬 로고를 넣어 파이썬 커뮤니티임을 직관적으로 표현합니다.",
          ]}
        />
        <div className="flex w-full justify-between gap-10">
          <LogoBanner>
            <LogoBannerTitle>HelloPY Main Logo</LogoBannerTitle>
            <LogoBannerImage src="https://placehold.co/480x250" />
            <LogoBannerLink href="https://placehold.co/480x250">
              메인로고 다운받기
            </LogoBannerLink>
          </LogoBanner>
          <LogoBanner>
            <LogoBannerTitle>HelloPY 3D Logo</LogoBannerTitle>
            <LogoBannerImage src="https://placehold.co/480x250" />
            <LogoBannerLink href="https://placehold.co/480x250">
              3D로고 다운받기
            </LogoBannerLink>
          </LogoBanner>
        </div>
      </AboutSection>

      <div className={"bg-[#FCF7FF]"}>
        <AboutSection>
          <AboutSectionTitle
            title={"HelloPY UI"}
            subtitle={"UI Elements"}
            description={[]}
          />
          <div className="flex w-full flex-col gap-10">
            <LogoBanner>
              <div className="relative flex shrink-0 flex-col items-start justify-start gap-[59px] self-stretch">
                <div className="relative flex w-full shrink-0 flex-col items-start justify-start gap-2">
                  <div className="text-black-1 relative self-stretch text-left text-xl font-semibold leading-normal">
                    Typography
                  </div>
                  <div
                    className="border-gray-2 relative h-0 shrink-0 self-stretch border-b-[0] border-l-[0] border-r-[0] border-t border-solid"
                    style={{ marginTop: "-1px" }}
                  ></div>
                </div>
                <img
                  className="relative w-full shrink-0 self-stretch"
                  style={{ objectFit: "cover" }}
                  src={TypoImg}
                />
              </div>
            </LogoBanner>
            <LogoBanner>
              <LogoBannerTitle>Color</LogoBannerTitle>
              <div className="relative flex items-center justify-start gap-24 self-stretch md:flex-row">
                {hellopyUiList.map((item: { name: string; img: string }) => (
                  <div className="relative flex w-full flex-col items-start justify-start gap-7">
                    <div className="relative flex w-full flex-col items-start justify-start gap-[9px]">
                      <div className="text-black-1 relative self-stretch text-left text-xl font-normal leading-normal">
                        {item.name}
                      </div>
                    </div>
                    <img
                      className="w-full self-stretch overflow-scroll"
                      style={{ objectFit: "cover" }}
                      src={item.img}
                    />
                  </div>
                ))}
              </div>
            </LogoBanner>
          </div>
        </AboutSection>
      </div>

      <AboutSection>
        <AboutSectionTitle
          title={"PYMON"}
          subtitle={"Character"}
          description={[
            "파이몬은 Python의 Py가 아닌 π 모양을 한 캐릭터로, 2024년 9월 21일에 태어났습니다. 🥳",
            "사람과 커뮤니티를 좋아하고, 블루베리 파이를 좋아한다고 합니다. 🫐🥧",
          ]}
        />
        <div className="relative flex flex-wrap items-center justify-center gap-6 md:gap-[52px]">
          {[PymonImg1, PymonImg2, PymonImg3].map((pymon, index) => (
            <img
              key={index}
              className="relative h-[386px] max-h-full w-[254px] max-w-full sm:h-[300px] sm:w-[200px] md:h-[330px] md:w-[220px] lg:h-[386px] lg:w-[254px]"
              style={{ objectFit: "cover" }}
              src={pymon}
            />
          ))}
        </div>
      </AboutSection>

      <div className={"bg-[#FCF7FF]"}>
        <AboutSection>
          <AboutSectionTitle
            title={"월간 PYMON"}
            subtitle={"Wallpaper"}
            description={[
              "PYMON👾 달력 배경화면을 준비했습니다! 💜 누구나 이미지 다운로드 후 사용하실 수 있습니다😆",
              "이미지를 꾸욱 누르면 열리는 팝업에서 “내 폰에 저장” 혹은 “사진 다운로드”를 선택해주세요!",
              "헬로파이에서는 매달 새로운 달력을 디자인해서 공유하고 있어요. 다음 달의 달력도 기대해 주세요! ☘️",
            ]}
          />
          <SelectBox options={yearList} onSelect={onSelectYear} />
          <PymonCalendar calendar={calendarData} selectedYear={selectedYear} />
        </AboutSection>
      </div>
    </div>
  );
};

export default AboutIdentity;
