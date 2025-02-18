import * as React from "react";
import HellopyImg from "@/assets/img/logo/img_hellopy.png"
import DiscordImg from "@/assets/img/logo/img_discord.png"
import YoutubeImg from "@/assets/img/logo/img_youtube.png"
import InstagramImg from "@/assets/img/logo/img_instagram.png"

const Footer: React.FC = () => {
    return (
        <div className="relative bg-[#2D003D] w-full h-[356px] flex justify-center items-center">
            <div className="w-[1280px] h-[78px] flex items-center justify-between ">
            <div className="flex flex-col items-start">
                <img
                    className="w-[145px] h-[80px]"
                    src={HellopyImg}
                    alt="logo"
                />
                <div className="flex gap-4 mt-4">
                    <img
                        className="w-[40px] h-[40px]"
                        src={YoutubeImg}
                        alt="youtube"
                    />
                    <img
                        className="w-[40px] h-[40px]"
                        src={DiscordImg}
                        alt="discord"
                    />
                    <img
                        className="w-[40px] h-[40px]"
                        src={InstagramImg}
                        alt="instagram"
                    />
                </div>
                <div className="text-[#FDFAFE] text-sm mt-6">
                    ⓒ 2025. HelloPY. All rights reserved.
                </div>
            </div>

            <div className="flex flex-col w-1/2">
                <div className="flex gap-8 w-full">
                    <p className="text-sm text-[#CCCCCC] leading-[1.6] w-1/2">
                        HelloPY는 모두에게 열린 공간입니다. HelloPY의 모든
                        참여자가 존중받고, 차별 없이 협력할 수 있는 포용적인
                        상호작용을 지향합니다. 부적절한 언행, 혐오 표현, 폭력
                        적인 행동은 허용되지 않습니다. 함께 더 나은 커뮤니티
                        를 만들어갑시다!
                    </p>
                    <p className="text-sm text-[#CCCCCC] leading-[1.6] w-1/2">
                        HelloPY is an open space for everyone. We strive to create
                        an inclusive environment where all participants are treated
                        with respect and can collaborate without discrimination.
                        Inappropriate language, hate speech, and violent behavior
                        are not tolerated. Let's build a better community together!
                    </p>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Footer;