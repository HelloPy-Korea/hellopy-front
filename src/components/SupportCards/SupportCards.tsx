import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import financialIcon from '@/assets/img/support/support_process_group1.svg';
import materialIcon from '@/assets/img/support/support_process_group2.svg';

interface SupportCardProps {
  subtitle: string;
  title: string;
  description: string[];
  icon: string;
}

const SupportCard: React.FC<SupportCardProps> = ({ subtitle, title, description, icon }) => (
  <div className="w-full lg:w-[617px] h-auto lg:h-[304px] relative">
    <div className="bg-white-1 rounded-3xl border-solid border-purple-5 border w-full h-full absolute left-0 top-0" />
    <div className="flex flex-col lg:flex-row items-start justify-between w-full h-full relative p-6 lg:p-0">
      <div className="flex flex-col gap-6 lg:gap-[60px] items-start justify-start w-full lg:w-[388px] lg:absolute lg:left-[70px] lg:top-[52px]">
        <div className="flex flex-col gap-0.5 items-start justify-start self-stretch shrink-0 relative">
          <div className="text-purple-2 text-left font-['Pretendard-SemiBold',_sans-serif] text-base leading-normal font-semibold relative self-stretch">
            {subtitle}
          </div>
          <div className="text-black-1 text-left font-['Pretendard-SemiBold',_sans-serif] text-2xl lg:text-[28px] leading-[130%] font-semibold relative self-stretch">
            {title}
          </div>
        </div>
        <div className="text-gray-3 text-left font-['Pretendard-Light',_sans-serif] text-base lg:text-lg leading-normal font-light relative self-stretch">
          {description.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < description.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="w-[100px] h-[100px] lg:w-[150px] lg:h-[115px] relative lg:absolute lg:right-[70px] lg:top-[19px] overflow-hidden mt-4 lg:mt-0">
        <img
          className="w-full h-full object-contain"
          src={icon}
          alt={`${title} icon`}
        />
      </div>
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
        "여러분의 소중한 후원은 큰 힘이 됩니다."
      ],
      icon: financialIcon
    },
    {
      subtitle: "나누는 기쁨",
      title: "물품 기부",
      description: [
        "도서 및 이벤트 상품 등 다양한 물품 기부를 받습니다.",
        "기부 물품을 구체적으로 작성해주시면,",
        "이메일로 절차를 안내해 드리겠습니다."
      ],
      icon: materialIcon
    }
  ];

  const handleApplicationClick = () => {
    window.open('https://forms.gle/your-google-form-id', '_blank');
  };

  return (
    <div className="flex flex-col gap-6 lg:gap-10 items-start justify-start relative w-full">
      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[43px] items-start justify-start w-full">
        {supportCards.map((card, index) => (
          <SupportCard key={index} {...card} />
        ))}
      </div>

      {/* Application Card */}
      <div 
        className="w-full h-auto lg:h-[200px] relative cursor-pointer transition-transform hover:scale-[1.02]"
        onClick={handleApplicationClick}
      >
        <div
          className="rounded-3xl border-solid border-purple-5 border w-full h-full absolute left-0 top-0"
          style={{
            background: 'linear-gradient(92.54deg, rgba(209, 97, 246, 1) 0%, rgba(137, 31, 189, 1) 100%)'
          }}
        />
        <div className="flex flex-col gap-4 lg:gap-[15px] items-center justify-center w-full lg:w-[500px] relative lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 p-6 lg:p-0">
          <div className="text-purple-8 text-center font-['Pretendard-SemiBold',_sans-serif] text-2xl lg:text-[28px] leading-[130%] font-semibold relative self-stretch">
            후원 신청하기
          </div>
          <div className="text-gray-5 text-center font-['Pretendard-Light',_sans-serif] text-base lg:text-lg leading-normal font-light relative self-stretch">
            아래 구글폼을 통해 후원에 필요한 정보를 입력해 주세요.
            <br />
            제출하신 정보는 내부 검토 후, 후원 방법에 대해 안내드리겠습니다.
          </div>
        </div>
        <div className="hidden lg:block absolute right-[70px] top-1/2 -translate-y-1/2">
          <IoIosArrowForward className="w-[60px] h-[60px] text-white" />
        </div>
      </div>
    </div>
  );
};

export default SupportCards; 