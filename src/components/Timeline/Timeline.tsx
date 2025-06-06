import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AboutSectionTitle } from '../AboutSection';

const Timeline = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  const events = [
    {
      year: 24,
      month: 'SEP',
      title: 'HelloPY 탄생',
      description: '파이몬 생일\nDiscord, Instagram, Youtube 개설',
      position: 'right'
    },

    {
      year: 24,
      month: 'OCT',
      title: '컨퍼런스 & 파이콘',
      description: 'HelloPY 컨퍼런스 VOL.1\n파이콘 한국 2024 부스 운영\nDiscord User 100명 달성',
      position: 'left'
    },
    {
      year: 24,
      month: 'NOV',
      title: '제1회 OnOFF 모각클',
      description: "'모여서 각자 작업하는 모임'\n매주 2회 대면/비대면 활동 개최",
      position: 'right'
    },
    {
      year: 24,
      month: 'DEC',
      title: '파이콘 공유회',
      description: '월드와이드 파이콘 공유회\nLinkedIn 개설',
      position: 'left'
    },
    {
      year: 25,
      month: 'MAR',
      title: '홈페이지 리뉴얼',
      description: 'HelloPY 공식 홈페이지 제작',
      position: 'right'
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) { // md breakpoint
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize(); // 초기 설정
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : events.length - slidesToShow));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev < events.length - slidesToShow ? prev + 1 : 0));
  };

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide >= events.length - slidesToShow;

  return (
    <div className="relative w-full overflow-hidden">
      <div className="bg-purple-7 w-full h-[900px] absolute left-0 top-0"></div>
      <div className="container mx-auto relative px-4 py-8">
        <AboutSectionTitle
          subtitle={"HelloPY History"}
          title={" Our Journey"}
          description={[]}
        />

        {/* Timeline Events Container */}
        <div className="relative w-full mt-32">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
            >
              {events.map((event, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
                  style={{ 
                    marginLeft: event.position === 'right' ? 'auto' : '0',
                    marginRight: event.position === 'left' ? 'auto' : '0'
                  }}
                >
                  <div className="flex flex-row gap-3.5 items-start justify-start w-full">
                    <div className="bg-purple-4 shrink-0 w-2 h-[98px] relative"></div>
                    <div className="flex flex-col gap-[30px] items-start justify-start shrink-0 w-full relative">
                      <div className="flex flex-col gap-1 items-start justify-start self-stretch shrink-0 relative">
                        <div className="text-purple-2 text-left font-['Pretendard-Bold',_sans-serif] text-2xl md:text-3xl font-bold relative self-stretch" style={{ letterSpacing: '-0.02em' }}>
                          {event.year}.{event.month}
                        </div>
                        <div className="text-black-1 text-left font-['Pretendard-Medium',_sans-serif] text-xl md:text-2xl leading-tight font-medium relative w-full" style={{ letterSpacing: '-0.02em' }}>
                          {event.title}
                        </div>
                      </div>
                      <div className="text-black text-left text-base leading-[130%] font-light relative self-stretch whitespace-pre-line">
                        {event.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevSlide}
              disabled={isFirstSlide}
              className={`w-12 h-12 md:w-[66px] md:h-[66px] flex items-center justify-center rounded-full transition-colors ${
                isFirstSlide 
                  ? 'invisible' 
                  : 'bg-white/10 hover:bg-white/20 cursor-pointer'
              }`}
              aria-label="Previous"
            >
              <IoIosArrowBack className="w-6 h-6 md:w-8 md:h-8 text-purple-2" />
            </button>
            <button
              onClick={handleNextSlide}
              disabled={isLastSlide}
              className={`w-12 h-12 md:w-[66px] md:h-[66px] flex items-center justify-center rounded-full transition-colors ${
                isLastSlide 
                  ? 'invisible' 
                  : 'bg-white/10 hover:bg-white/20 cursor-pointer'
              }`}
              aria-label="Next"
            >
              <IoIosArrowForward className="w-6 h-6 md:w-8 md:h-8 text-purple-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline; 