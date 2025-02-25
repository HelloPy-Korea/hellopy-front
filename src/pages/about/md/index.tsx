import BackImg from "@/assets/img/md/img_banner.png";
import BanngerImg from "@/assets/img/md/img_goods.png";

import { HeaderBanner } from "@/components/HeaderBanner";
import {Breadcrumb} from "@/components/Breadcrumb";
import {AboutSection, AboutSectionTitle} from "@/components/AboutSection";
import {Gallery} from "@/components/Gallery";

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const photos = Array.from({ length: 7 }, (_, index) => ({
    image: {
        url: `https://picsum.photos/${getRandomInt(200, 800)}/${getRandomInt(
            200,
            800
        )}?random=${index}`,
        alt: `Image ${index}`,
    },
    title: `Title ${index}`,
    description: `Description ${index}`,
}))

const AboutMd = () => {
    return (
        <div className="flex flex-col align-center ">
            <HeaderBanner
                backgroundImage={BackImg}
                title="HelloPY MD"
                description={`저희 대표 캐릭터 파이몬으로 만든 귀여운 스티커들과 키링들..<br/>앞으로 더 많아질 굿즈들을 기대해 주세요!!`}
            >
                <Breadcrumb children={[<a href="/">Home</a>, <a href="/about">ABOUT</a>, "MD"]}/>
            </HeaderBanner>

            <AboutSection>
                <AboutSectionTitle title={"MD 한눈에 보기"} subtitle={"MD Overview"} description={[]}/>
                <Gallery items={photos}/>
            </AboutSection>

            <div className="w-[1600px] relative">
                <img src={BanngerImg} className="w-full h-auto object-cover" alt="Intro Shape"/>
            </div>
        </div>
    );
}

export default AboutMd;