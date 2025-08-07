import * as React from "react";
import HellopyImg from "@/assets/img/logo/img_hellopy_new_logo.svg";
import DiscordImg from "@/assets/img/logo/img_discord.png";
import YoutubeImg from "@/assets/img/logo/img_youtube.png";
import InstagramImg from "@/assets/img/logo/img_instagram.png";
import { Container } from "@/components/Container";

const Footer: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center bg-main-purple">
      <Container className="flex w-full flex-col items-center justify-between gap-y-8 px-4 py-12 md:flex-row">
        <div className="order-2 flex flex-col items-center md:order-1 md:items-start">
          <img 
            className="h-[80px] w-[145px] object-contain" 
            src={HellopyImg} 
            alt="logo" 
          />
          <div className="mt-4 flex gap-4">
            <img className="h-[40px] w-[40px]" src={YoutubeImg} alt="youtube"  onClick={() => {
                  window.open("https://www.youtube.com/@HelloPY-2024");
                }} />
            <img className="h-[40px] w-[40px]" src={DiscordImg} alt="discord" onClick={() => {
                  window.open("https://discord.gg/EV62Xyyw");
                }} />
            <img
              className="h-[40px] w-[40px]"
              src={InstagramImg}
              alt="instagram"
              onClick={() => {
                window.open("https://www.instagram.com/hello_py_/");
              }}
            />
          </div>
          <div className="mt-6 text-sm text-[#FDFAFE]">
            ⓒ 2025. HelloPY. All rights reserved.
          </div>
        </div>

        <div className="order-1 mt-8 flex w-full flex-col overflow-hidden md:order-2 md:mt-0 md:w-1/2">
          <div className="flex w-full flex-col gap-8 md:flex-row">
            <p className="line-clamp-8 w-full text-base leading-[1.6] text-hellopy-purple-600 md:w-1/2">
              HelloPY는 모두에게 열린 공간입니다. HelloPY의 모든 참여자가
              존중받고, 차별 없이 협력할 수 있는 포용적인 상호작용을 지향합니다.
              부적절한 언행, 혐오 표현, 폭력적인 행동은 허용되지 않습니다. 함께
              더 나은 커뮤니티를 만들어갑시다!
            </p>
            <p className="line-clamp-8 w-full text-base leading-[1.6] text-hellopy-purple-600 md:w-1/2">
              HelloPY is an open space for everyone. We strive to create an
              inclusive environment where all participants are treated with
              respect and can collaborate without discrimination. Inappropriate
              language, hate speech, and violent behavior are not tolerated.
              Let's build a better community together!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
