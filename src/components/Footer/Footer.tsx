import * as React from "react";

const Footer: React.FC = () => {
    return (
        <div className="relative bg-[#2D003D] w-full h-[356px] flex justify-center items-center">
            <div className="w-[1280px] h-[78px] flex items-center justify-between ">
            <div className="flex flex-col items-start">
                <img
                    className="w-[145px] h-[80px]"
                    src="https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6324be2c-a8b1-4af8-b50e-19249d994d67%2Ffa28ddd3-ea28-4898-990c-2f1934ae80cf%2FKakaoTalk_Photo_2024-09-23-02-35-01_004.png&blockId=1091cd0c-2cb8-80dd-9743-e68459de2ac4&width=256"
                    alt="logo"
                />
                <div className="flex gap-4 mt-4">
                    <img
                        className="w-[40px] h-[40px]"
                        src="https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6324be2c-a8b1-4af8-b50e-19249d994d67%2Ffa28ddd3-ea28-4898-990c-2f1934ae80cf%2FKakaoTalk_Photo_2024-09-23-02-35-01_004.png&blockId=1091cd0c-2cb8-80dd-9743-e68459de2ac4&width=256"
                        alt="youtube"
                    />
                    <img
                        className="w-[40px] h-[40px]"
                        src="https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6324be2c-a8b1-4af8-b50e-19249d994d67%2Ffa28ddd3-ea28-4898-990c-2f1934ae80cf%2FKakaoTalk_Photo_2024-09-23-02-35-01_004.png&blockId=1091cd0c-2cb8-80dd-9743-e68459de2ac4&width=256"
                        alt="discord"
                    />
                    <img
                        className="w-[40px] h-[40px]"
                        src="https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6324be2c-a8b1-4af8-b50e-19249d994d67%2Ffa28ddd3-ea28-4898-990c-2f1934ae80cf%2FKakaoTalk_Photo_2024-09-23-02-35-01_004.png&blockId=1091cd0c-2cb8-80dd-9743-e68459de2ac4&width=256"
                        alt="instagram"
                    />
                </div>
                <div className="text-[#FDFAFE] text-sm mt-6">
                    ⓒ 2025. HelloPY. All rights reserved.
                </div>
            </div>

            <div className="flex flex-col w-1/2">
                <h2 className="text-xl font-medium mb-4">COC</h2>
                <div className="flex gap-8 w-full">
                    <p className="text-sm text-[#CCCCCC] leading-[1.6] w-1/2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </p>
                    <p className="text-sm text-[#CCCCCC] leading-[1.6] w-1/2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </p>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Footer;