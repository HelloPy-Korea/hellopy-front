import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import financialIcon from "@/assets/img/support/support_process_group1.svg";
import materialIcon from "@/assets/img/support/support_process_group2.svg";

interface SupportCardProps {
  subtitle: string;
  title: string;
  description: string[];
  icon: string;
}

const SupportCard: React.FC<SupportCardProps> = ({
  subtitle,
  title,
  description,
  icon,
}) => (
  <div className="relative h-auto w-full lg:h-[304px] lg:w-[617px]">
    <div className="bg-white-1 border-purple-5 absolute left-0 top-0 h-full w-full rounded-3xl border border-solid" />
    <div className="relative flex h-full w-full flex-col items-start justify-between p-6 lg:flex-row lg:p-0">
      <div className="flex w-full flex-col items-start justify-start gap-6 lg:absolute lg:left-[70px] lg:top-[52px] lg:w-[388px] lg:gap-[60px]">
        <div className="relative flex shrink-0 flex-col items-start justify-start gap-0.5 self-stretch">
          <div className="text-purple-2 relative self-stretch text-left font-['Pretendard-SemiBold',_sans-serif] text-base font-semibold leading-normal">
            {subtitle}
          </div>
          <div className="text-black-1 relative self-stretch text-left font-['Pretendard-SemiBold',_sans-serif] text-2xl font-semibold leading-[130%] lg:text-[28px]">
            {title}
          </div>
        </div>
        <div className="text-gray-3 relative self-stretch text-left font-['Pretendard-Light',_sans-serif] text-base font-light leading-normal lg:text-lg">
          {description.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < description.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>
      {/*<div className="relative mt-4 h-[100px] w-[100px] overflow-hidden lg:absolute lg:right-[70px] lg:top-[19px] lg:mt-0 lg:h-[115px] lg:w-[150px]">
        <img
          className="h-full w-full object-contain"
          src={icon}
          alt={`${title} icon`}
        />
      </div>*/}
    </div>
  </div>
);

const SupportCards = () => {
  const supportCards = [
    {
      subtitle: "작은 나눔 큰 변화",
      title: "금전적 후원",
      description: [
        "계좌이체를 통해 후원금을 입금하실 수 있습니다.",
        "여러분의 소중한 후원은 큰 힘이 됩니다.",
      ],
      icon: financialIcon,
    },
    {
      subtitle: "나누는 기쁨",
      title: "물품 기부",
      description: [
        "도서 및 이벤트 상품 등 다양한 물품 기부를 받습니다.",
        "기부 물품을 구체적으로 작성해주시면,",
        "이메일로 절차를 안내해 드리겠습니다.",
      ],
      icon: materialIcon,
    },
  ];

  const handleApplicationClick = () => {
    window.open("https://forms.gle/n2zRTm77aatFUg9k7", "_blank");
  };

  return (
    <div className="relative flex w-full flex-col items-start justify-start gap-6 lg:gap-10">
      {/* Cards Container */}
      <div className="flex w-full flex-col items-start justify-start gap-6 lg:flex-row lg:gap-[43px]">
        {supportCards.map((card, index) => (
          <SupportCard key={index} {...card} />
        ))}
      </div>

      {/* Application Card */}
      <div
        className="relative h-auto w-full cursor-pointer transition-transform hover:scale-[1.02] lg:h-[200px]"
        onClick={handleApplicationClick}
      >
        <div
          className="border-purple-5 absolute left-0 top-0 h-full w-full rounded-3xl border border-solid"
          style={{
            background:
              "linear-gradient(92.54deg, rgba(214, 201, 254, 1) 0%, rgba(169, 148, 255, 1) 100%)",
          }}
        />
        <div className="relative flex w-full flex-col items-center justify-center gap-4 p-6 lg:absolute lg:left-1/2 lg:top-1/2 lg:w-[500px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:gap-[15px] lg:p-0">
          <div className="relative self-stretch text-center font-['Pretendard-SemiBold',_sans-serif] text-2xl font-semibold leading-[130%] text-black lg:text-[28px]">
            후원 신청하기
          </div>
          <div className="relative self-stretch text-center font-['Pretendard-Light',_sans-serif] text-base font-light leading-normal text-black lg:text-lg">
            아래 구글폼을 통해 후원에 필요한 정보를 입력해 주세요.
            <br />
            제출하신 정보는 내부 검토 후, 후원 방법에 대해 안내드리겠습니다.
          </div>
        </div>
        <div className="absolute right-[70px] top-1/2 hidden -translate-y-1/2 lg:block">
          <IoIosArrowForward className="h-[60px] w-[60px] text-black" />
        </div>
      </div>
    </div>
  );
};

export default SupportCards;
