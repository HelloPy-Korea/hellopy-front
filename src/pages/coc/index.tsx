import { Breadcrumb } from '@/components/Breadcrumb';
import React, { useState } from 'react';
import BanngrImg from "@/assets/img/md/img_banner.png";
import { Container } from '@/components/Container';

const renderContent = (activeTab:string) => {
    switch (activeTab) {
      case 'purpose':
        return (
            <div className="flex flex-col gap-[70px] items-start justify-start relative">
                <div
                    className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative"
                >
                    <div
                    className="text-black-1 text-left font-['Pretendard-SemiBold',_sans-serif] text-[28px] leading-[130%] font-semibold relative"
                    >
                    HelloPY는 모든 참가자를 포용합니다
                    </div>
                    <div
                    className="text-black-1 text-left font-['Pretendard-Light',_sans-serif] text-lg leading-normal font-light relative "
                    >
                    <span>
                        <span className="txt-13-span">
                        HelloPY 행동 강령(이하 행동 강령)은 누구도 배제되지 않는 파이썬
                        커뮤니티를 위해 구성원들이 지켜야 하는 최소한의 약속입니다.
                        <br />
                        <br />
                        HelloPY는:
                        <br />
                        </span>
                        <ul className="txt-13-span2">
                        <li>누구나 편안하게 참여할 수 있는 행사를 지향합니다.</li>
                        <li>서로 다름을 인정하고 존중하는 분위기를 지향합니다.</li>
                        <li>
                            성별, 성적 지향, 성 정체성, 국적, 인종, 지역, 종교, 나이, 사회적
                            신분, 학력, 지식 수준, 외모, 장애, 질병, 음식 선호 등과 관계 없이
                            모든 참가자가 동등한 컨퍼런스를 지향합니다.
                        </li>
                        <li>서로 환영하는 분위기를 독려합니다.</li>
                        </ul>
                    </span>
                    </div>
                </div>
                <div
                    className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative"
                >
                    <div
                    className="text-black-1 text-left font-['Pretendard-SemiBold',_sans-serif] text-[28px] leading-[130%] font-semibold relative"
                    >
                    모든 참가자를 포용하는 게 왜 중요한가요?
                    </div>
                    <div
                    className="text-black-1 text-left font-['Pretendard-Light',_sans-serif] text-lg leading-normal font-light relative "
                    >
                    HelloPY는 다양성을 존중하는 태도가 사회와 커뮤니티를 더 풍요롭게 만드는
                    원천이라고 믿습니다.
                    <br />
                    어려운 문제에 대한 해결책을 찾고, 커뮤니티가 계속 성장하여 세상에 긍정적인
                    변화를 불러오기 위해서는 다양한 경험과 관점이 필요합니다.
                    <br />
                    그리고 다양한 경험과 관점은 다양한 사람들을 모두 존중하고 포용하는
                    데에서부터 비롯됩니다.
                    </div>
                </div>
                <div
                    className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative"
                >
                    <div
                    className="text-black-1 text-left font-['Pretendard-SemiBold',_sans-serif] text-[28px] leading-[130%] font-semibold relative"
                    >
                    HelloPY는 차별과 괴롭힘을 용인하지 않습니다
                    </div>
                    <div
                    className="text-black-1 text-left font-['Pretendard-Light',_sans-serif] text-lg leading-normal font-light relative "
                    >
                    <span>
                        <span className="txt-33-span">
                        행동 강령에 따라 HelloPY 준비위원회는:
                        <br />
                        </span>
                        <ul className="txt-33-span2">
                        <li>
                            다른 참가자의 안전이 침해되거나 존중받지 못하는 상황이 발생했을 때
                            이를 중재 또는 제재할 수 있습니다.
                        </li>
                        <li>
                            필요한 경우 행동 강령을 위반한 참가자를 행사 공간(행사장, 공식 SNS,
                            행사 슬랙 등)에서 추방할 수 있습니다. 이 경우 참가비는 환불되지
                            않습니다.
                            <br />
                            (+) 이 외에도, HelloPY 정기 컨퍼런스의 경우 환불이 불가합니다.
                            (비정기 행사는 때에 따라 다름)
                        </li>
                        <li>필요 또는 요청에 따라 사법/의료 기관에 신고할 수 있습니다.</li>
                        </ul>
                    </span>
                    </div>
                </div>
                <div
                    className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative"
                >
                    <div
                    className="text-black-1 text-left font-['Pretendard-SemiBold',_sans-serif] text-[28px] leading-[130%] font-semibold relative"
                    >
                    행동 강령은 행사와 관련된 모든 상황에서 적용됩니다
                    </div>
                    <div
                    className="text-black-1 text-left font-['Pretendard-Light',_sans-serif] text-lg leading-normal font-light relative "
                    >
                    <span>
                        <span className="txt-43-span">
                        행동 강령은 파이썬 사용자 그룹이 진행하는 행사와 행사에 수반하는 과정
                        그리고 그 과정에 참여하는 모든 참가자에게 적용됩니다.
                        <br />
                        </span>
                        <ul className="txt-43-span2">
                        <li>
                            참가자(발표자, 협력 단체, 스폰서, 자원봉사자, 준비위원회 등을 포함한
                            모든 사람)에게 적용됩니다.
                        </li>
                        <li>
                            행사일을 포함하여 준비위원회에게 문의하는 모든 창구에 적용됩니다.
                        </li>
                        <li>
                            발표 컨텐츠, 행사장, 웹사이트, 책자, 메일, 소셜 네트워크, 회의, 코드
                            저장소 등 모든 장소 및 과정과 산출물에 적용됩니다.
                        </li>
                        </ul>
                    </span>
                    </div>
                </div>
                <div
                    className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative"
                >
                    <div
                    className="text-black-1 text-left font-['Pretendard-SemiBold',_sans-serif] text-[28px] leading-[130%] font-semibold relative"
                    >
                    주의 깊게 읽어주세요
                    </div>
                    <div
                    className="text-black-1 text-left font-['Pretendard-Light',_sans-serif] text-lg leading-normal font-light relative "
                    >
                    해서는 안 되는 일들의 전체 목록이 모두 여기에 담겨있지는 않습니다.
                    <br />
                    그보다는 이 행동 강령에 담긴 내용의 의도가 무엇인지 깊이 파악하고 서로에게
                    좀 더 잘 대할 수 있도록 해주는 가이드로 삼는 것이 중요합니다.
                    <br />
                    이 행동 강령을 문자 그대로 따르기보다 그 안에 담긴 의도를 파악하시고
                    행동해주실 것을 부탁드립니다.
                    </div>
                </div>
                </div>

        );
      case 'community':
        return (
            <div className="flex flex-col gap-[70px] items-start justify-start relative">
            <div className="flex flex-col gap-5 items-start justify-start shrink-0 relative">
              <div
                className="text-black-1 text-left font-['Pretendard-SemiBold',_sans-serif] text-[28px] leading-[130%] font-semibold relative"
              >
                환영하는 분위기를 만들어주세요
              </div>
              <div
                className="text-black-1 text-left font-['Pretendard-Light',_sans-serif] text-lg leading-normal font-light relative "
              >
                <span>
                  <span className="txt-13-span">
                    모든 참가자는 그들의 배경과 상관없이 환영받고 있다고 느껴야 합니다.
                    환영받지 못하거나 소외된다고 느끼는 사람은 커뮤니티 참여를 주저하게
                    됩니다.
                    <br />
                    환영하는 분위기를 조성해 파이썬 커뮤니티가 성장할 수 있도록
                    도와주세요.
                    <br />
                    <br />
                  </span>
                  <ul className="txt-13-span2">
                    <li>
                      초심자 혹은 행사에 처음 온 분들에게 친절하고 따뜻하게 대해주세요.
                    </li>
                    <li>용기를 내주세요.</li>
                  </ul>
                  <span className="txt-13-span3">
                    ◦ 듣거나 지켜보는 게 더 편안하다면 그대로도 괜찮습니다.
                    <br />
                    만약 대화에 참여하고 싶을 때 망설임이 생긴다면 옆에서 활발하게
                    대화하고
                    <br />
                    있는 사람들도 오늘 처음 만났을 수 있다는 걸 생각해주세요.
                    <br />
                  </span>
                  <ul className="txt-13-span4">
                    <li>반응해주세요.</li>
                  </ul>
                  <span className="txt-13-span5">
                    ◦ 당신에게 한 마디를 건네기 위해 상대방은 용기를 냈을지도 모릅니다.
                    <br />
                    ▪ 질문이나 도움을 구하는 요청에 친절하게 답해주세요.
                    <br />
                    ▪ 답변에는 감사를 표현해주세요.
                  </span>
                </span>
              </div>
            </div>
            <div
              className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative"
            >
              <div
                className="text-black-1 text-left font-['Pretendard-SemiBold',_sans-serif] text-[28px] leading-[130%] font-semibold relative"
              >
                안전한 HelloPY 커뮤니티를 만들어주세요
              </div>
              <div
                className="text-black-1 text-left font-['Pretendard-Light',_sans-serif] text-lg leading-normal font-light relative "
              >
                <span>
                  <span className="txt-23-span">
                    언제나 스스로의 말과 행동에 책임감을 가져주세요. HelloPY는 다양한
                    사람들이 함께하는 행사입니다.
                    <br />
                    모든 사람들이 안전하고 믿을 수 있는 커뮤니티라고 느낄 수 있도록, 다른
                    사람을 위협하거나 위험하게 만드는 언행을 해서는 안 됩니다.
                    <br />
                    <br />
                  </span>
                  <ul className="txt-23-span2">
                    <li>타인과 불필요한 신체 접촉을 하지 않도록 주의해주세요.</li>
                  </ul>
                  <span className="txt-23-span3">
                    ◦ 동의 없이 손을 잡거나 어깨동무하는 행위
                    <br />
                  </span>
                  <ul className="txt-23-span4">
                    <li>대화에 욕설/비속어/은어를 포함하지 마세요.</li>
                  </ul>
                  <span className="txt-23-span5">
                    ◦ 가까운 지인과 대화이더라도 주변 사람에게 불편함을 주거나 위협이 될
                    수 있습니다.
                    <br />
                  </span>
                  <ul className="txt-23-span6">
                    <li>
                      화를 내거나 과격한 몸짓, 언성을 높이는 행위 등으로 상대방을 위협하지
                      마세요.
                    </li>
                    <li>
                      상대방이 불쾌감을 느낄 수 있는 언어적 표현, 비언어적 행동, 일체의
                      성적 대상화를 하지 말아주세요.
                    </li>
                  </ul>
                  <span className="txt-23-span7">
                    ◦ “시커먼 남자들끼리만 있어서 칙칙했는데 여성분들 오니까 좋네~ 여기는
                    꽃밭이네~”
                    <br />
                    ◦ ‘앙 기O찌’를 감탄사로 사용하는 행위
                    <br />
                  </span>
                  <ul className="txt-23-span8">
                    <li>타인의 소지품을 동의 없이 만지지 말아주세요.</li>
                  </ul>
                  <span className="txt-23-span9">
                    ◦ 휴대폰, 노트북 등
                    <br />
                    ◦ 장애인 보조 기구 (보청기, 휠체어 등)
                    <br />
                  </span>
                  <ul className="txt-23-span10">
                    <li>위험한 물건을 소지하지 마세요.</li>
                  </ul>
                  <span className="txt-23-span11">
                    ◦ 야구 배트, 화학 물품류, 화기, 날카로운 물건 등
                    <br />
                  </span>
                  <ul className="txt-23-span12">
                    <li>법에 저촉되는 모든 폭력성을 띤 행위를 하지 말아주세요.</li>
                    <li>위의 모든 행위를 부추기거나 장려하는 행위를 하지 말아주세요.</li>
                  </ul>
                </span>
              </div>
            </div>
            <div
              className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative"
            >
              <div
                className="text-black-1 text-left font-['Pretendard-SemiBold',_sans-serif] text-[28px] leading-[130%] font-semibold relative"
              >
                서로 다름을 존중해주세요
              </div>
              <div
                className="text-black-1 text-left font-['Pretendard-Light',_sans-serif] text-lg leading-normal font-light relative "
              >
                <span>
                  <span className="txt-33-span">
                    성별, 성적 지향, 성 정체성, 국적, 인종, 지역, 종교, 나이, 사회적 신분,
                    학력, 지식 수준, 외모, 장애, 질병, 음식 선호 등에 상관없이 함께 즐길
                    수 있는 행사를 만들어주세요.
                    <br />
                    <br />
                  </span>
                  <ul className="txt-33-span2">
                    <li>
                      성별 고정관념에 기반한 언행을 자제해주세요.
                      <br />
                      ◦ “남자 / 여자들은 다 그렇죠.”
                      <br />
                      ◦ 여성 개발자에게 “프론트엔드 개발자시죠?”라고 넘겨짚는 행위
                      <br />
                      ◦ 상대방이 여성이라는 이유로 자신보다 지식 수준이 낮을 거라 생각하고
                      과도하게 설명하는 행위
                    </li>
                    <li>
                      성적 지향, 성 정체성, 성별 표현을 농담의 소재나 비하의 표현으로
                      사용하지 말아주세요.
                      <br />
                      ◦ “게이냐?”, “그렇게 머리가 짧으니 레즈 같다.”
                    </li>
                    <li>
                      나이, 사회적 신분, 연차에 의한 차별을 하지 말아주세요.
                      <br />
                      ◦ 나이가 어리다는 이유로 처음 보는 사람에게 반말하는 행위
                      <br />
                      ◦ “연차가 낮아서 잘 모르시겠지만…”
                    </li>
                    <li>
                      소득 및 재산 격차에 따라 다를 수 있는 내용을 단정지어 얘기하지
                      말아주세요.
                    </li>
                    <li>
                      인종을 비하하거나 지역 또는 국적 편견에 기반한 표현을 자제해주세요.
                      <br />
                      ◦ 쪽O리, 죠O징, 짱O 같은 국적에 따른 차별 발언
                      <br />
                      ◦ 흑형, 양키, 바나나와 같은 인종에 따른 차별 발언
                      <br />
                      ◦ 전OO언과 같은 지역에 따른 차별 발언
                    </li>
                    <li>
                      다른 사람의 종교나 지지 정당을 비하하거나 자신의 신념을 강요하지
                      말아주세요.
                      <br />
                      ◦ “OO교 사람들은 이래서 안 돼”
                      <br />
                      ◦ “OO당 사람들은 이래서 안 돼”
                    </li>
                    <li>
                      상대방의 외모에 대한 불필요한 평가나 차별 발언을 하지 않도록
                      주의해주세요.
                      <br />
                      ◦ “OO님은 개발자처럼 생기셨어요/안 생기셨어요”
                      <br />
                      ◦ (누군가를 특정할 때) “얼굴이 예쁘장했던 여자 개발자”
                    </li>
                    <li>
                      장애인을 도움이 필요한 대상으로 보고 편견에 기반한 행동을 하지
                      말아주세요.
                      <br />
                      ◦ 요청하지 않았는데 자신이 생각한 방식으로 행동하는 것은 방해입니다.
                      <br />
                      먼저 상대의 의사를 확인하고 상대가 요청하는 방식으로 편의 제공을
                      해야 합니다.
                    </li>
                    <li>
                      질병 또는 장애를 비하하지 마세요.
                      <br />
                      ◦ 장애를 비하하는 단어를 사용하지 말아주세요.
                      <br />
                      ◦ 장님, 애꾸눈, 귀머거리, 벙어리, 절름발이 등
                      <br />
                      ◦ “장애인이냐?”, “정신병자 같지 않아?”
                      <br />
                      ◦ “레거시 코드 때문에 암 걸릴 것 같아.”
                    </li>
                    <li>
                      다른 식습관을 강요하거나 무시하는 언행을 하지 말아주세요.
                      <br />
                      ◦ “술을 안 마시면 인생을 무슨 낙으로 살아요?”
                      <br />
                      ◦ “건강을 생각해서라도 고기를 먹어야지.”
                      <br />
                      ◦ 식습관에는 다른 사람이 납득할 만한 이유가 필요하지 않습니다.
                      <br />
                      이유를 묻거나 설명을 강요하지 말아주세요.
                    </li>
                    <li>
                      학력이나 전공에 따라 차별하는 발언을 하지 말아주세요.
                      <br />
                      ◦ “고졸이세요?”
                      <br />
                      ◦ &quot;비전공자면 이런 내용 모르시겠네요&quot;
                    </li>
                    <li>
                      위의 모든 편견과 차별을 부추기거나 장려하는 행위를 하지 말아주세요.
                    </li>
                  </ul>
                  <span className="txt-33-span3">
                    <br />
                    당신의 언행은 당신의 의도와 다르게 받아들여질 수 있습니다. 상대방이
                    불쾌하게 여긴다면 해당 언행을 중지해주세요.
                  </span>
                </span>
              </div>
            </div>
            <div
              className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative"
            >
              <div
                className="text-black-1 text-left font-['Pretendard-SemiBold',_sans-serif] text-[28px] leading-[130%] font-semibold relative"
              >
                HelloPY 한국 준비위원회 및 행사 스태프로 사칭하거나 허위 정보를 유포하지
                말아 주세요
              </div>
              <div
                className="text-black-1 text-left font-['Pretendard-Light',_sans-serif] text-lg leading-normal font-light relative "
              >
                <span>
                  <span className="txt-43-span">
                    스태프 사칭으로 인해 잘못된 정보로 참가자에게 혼란을 줄 수 있으며,
                    도움이 필요한 참가자가 제때 도움을 받지 못 할 수 있습니다.
                    <br />
                    HelloPY 한국 준비위원회는 공식적인 채널 외에 정보를 다른 곳에서
                    공개하거나 유포하지 않습니다.
                    <br />
                    이는 HelloPY 한국 참가자 간 정보 격차로 발생하는 불이익을 막기
                    위해서입니다.
                    <br />
                    <br />
                  </span>
                  <ul className="txt-43-span2">
                    <li>
                      행사 공간을 포함하여 행사 스태프로 오인될 수 있는 행위(스태프
                      프로필과 유사한 이미지 또는 닉네임 등)를 의도적으로 하지 말아
                      주세요.
                      <br />
                      ◦ 행사 진행에 방해된다고 판단될 시, 프로필 수정 요청 등의 조치를
                      취할 수 있습니다.
                    </li>
                    <li>
                      공식 정보(홈페이지, 공지, 공식 SNS, HelloPY 한국 이메일로 전송된
                      메일 등) 외 정보를 유포하지 말아주세요.
                      <br />
                      ◦ 예. &quot;내 친구/지인이 HelloPY 한국 준비위원회인데, 이렇게
                      이야기하던데?&quot;
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        );
      case 'communication':
        return (
            <div className="flex flex-col gap-[70px] items-start justify-start relative">
            <div
              className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative"
            >
              <div
                className="text-black-1 text-left font-['Pretendard-SemiBold',_sans-serif] text-[28px] leading-[130%] font-semibold relative"
              >
                발표할 때에는 발표자를 존중해주세요
              </div>
              <div
                className="text-black-1 text-left font-['Pretendard-Light',_sans-serif] text-lg leading-normal font-light relative "
              >
                <ul className="txt-13-span">
                  <li>
                    발표 중에는 발표자나 다른 청중들에게 방해되는 행동을 하거나 소음을
                    내지 말아주세요.
                  </li>
                  <li>
                    발표자가 분명한 의사를 표명하기 전까진 발표를 중간에 끊는 행위는
                    제한됩니다.
                    <br />
                    질문은 정해진 시간에 정해진 방법대로 해주세요.
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative"
            >
              <div
                className="text-black-1 text-left font-['Pretendard-SemiBold',_sans-serif] text-[28px] leading-[130%] font-semibold relative"
              >
                대화는 같이 하는 것입니다
              </div>
              <div
                className="text-black-1 text-left font-['Pretendard-Light',_sans-serif] text-lg leading-normal font-light relative "
              >
                <span>
                  <span className="txt-23-span">
                    열린 공간, HelloPY 인스타그램 및 유튜브 채널과 같은 다양한 곳에서 많은
                    사람들이 대화에 참여합니다.
                    <br />
                    나의 의견 만큼 다른 사람의 의견도 중요함을 항상 기억해주세요.
                    <br />
                    말을 끊고 방해하거나 언성을 높이는 일은 자제해주세요.
                    <br />
                    <br />
                  </span>
                  <ul className="txt-23-span2">
                    <li>
                      발언 기회를 소수가 과하게 점유하지 않도록 주의해주세요. 발언 기회를
                      골고루 가져요.
                    </li>
                    <li>상대와 갈등이 생기더라도 정중한 태도를 유지해주세요.</li>
                  </ul>
                </span>
              </div>
            </div>
            <div
              className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative"
            >
              <div
                className="text-black-1 text-left font-['Pretendard-SemiBold',_sans-serif] text-[28px] leading-[130%] font-semibold relative"
              >
                건설적인 토론을 해주세요
              </div>
              <div
                className="text-black-1 text-left font-['Pretendard-Light',_sans-serif] text-lg leading-normal font-light relative "
              >
                <span>
                  <span className="txt-33-span">
                    우리는 서로 다른 배경과 지식을 가지고 있습니다. 의견의 불일치는
                    자연스러운 일입니다.
                    <br />
                    <br />
                    비판과 비난은 다릅니다.
                    <br />
                    건설적인 비판은 커뮤니티와 구성원의 발전에 도움이 됩니다. 하지만 남을
                    깎아내리고 상처 주기 위한 목적의 비난은 금지됩니다.
                    <br />
                    상대방과 생각이 다르다면 정중하고 올바른 방법으로 의견을
                    이야기해주세요. 올바른 비판에는 관대하게 수용하는 자세를 가져주세요.
                    <br />
                    <br />
                  </span>
                  <ul className="txt-33-span2">
                    <li>정중한 표현을 사용해주세요.</li>
                  </ul>
                  <span className="txt-33-span3">
                    ◦ 그 언어/라이브러리/운영체제는 쓰레기야 X
                    <br />
                    ◦ 그 언어/라이브러리/운영체제는 OO한 단점이 있다고 생각해 O
                    <br />
                  </span>
                  <ul className="txt-33-span4">
                    <li>사람이 아닌 내용을 비판해주세요.</li>
                  </ul>
                  <span className="txt-33-span5">
                    ◦ OO 이론을 믿는 사람들은 멍청한 사람들이야 X
                    <br />
                    ◦ OO 이론은 근거가 부족한 이론이야 O
                    <br />
                  </span>
                  <ul className="txt-33-span6">
                    <li>결점이나 문제점이 아닌 대안에 집중해주세요.</li>
                    <li>내 지식을 과시하기 위해 다른 사람을 망신주지 마세요.</li>
                  </ul>
                </span>
              </div>
            </div>
            <div
              className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative"
            >
              <div
                className="text-black-1 text-left font-['Pretendard-SemiBold',_sans-serif] text-[28px] leading-[130%] font-semibold relative"
              >
                일방적인 선전이나 선동을 하지 말아주세요
              </div>
              <div
                className="text-black-1 text-left font-['Pretendard-Light',_sans-serif] text-lg leading-normal font-light relative "
              >
                <span>
                  <span className="txt-43-span">
                    개인의 생각과 정치적 성향은 존중되어야 합니다.
                    <br />
                    하지만 다른 참가자의 원활한 행사 참여를 방해하거나 문맥과 상관없는
                    일방적 선전이나 선동은 금지됩니다.
                    <br />
                    <br />
                  </span>
                  <ul className="txt-43-span2">
                    <li>발표 슬라이드에 정치적 구호를 담는 행위</li>
                    <li>부스 앞에서 집단으로 구호를 외치는 행위</li>
                    <li>
                      HelloPY 공식 SNS 댓글, HelloPY 인스타그램, HelloPY 유튜브 채널에서
                      반복적이고 지속적으로 선전하여 다른 사람의 의견을 보기 어렵게 하는
                      행위
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
          
        );
      case 'privacy':
        return (
            <div className="flex flex-col gap-[70px] items-start justify-start relative">
            <div
              className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative"
            >
              <div
                className="text-black-1 text-left font-['Pretendard-SemiBold',_sans-serif] text-[28px] leading-[130%] font-semibold relative"
              >
                사진과 영상을 촬영할 때 주의해주세요
              </div>
              <div
                className="text-black-1 text-left font-['Pretendard-Light',_sans-serif] text-lg leading-normal font-light relative "
              >
                <span>
                  <span className="txt-13-span">
                    사진과 영상을 찍을 때는 반드시 찍히는 인물의 의사를 존중해주세요.
                    사진과 영상에 찍히는 것을 원하지 않는 사람도 있을 수 있습니다.
                    <br />
                    <br />
                  </span>
                  <ul className="txt-13-span2">
                    <li>
                      HelloPY 준비위원회가 운영하는 모든 행사는 사진과 영상에 찍히는 것을
                      원하지 않는 사람들을 위한 방법이 마련됩니다.
                    </li>
                  </ul>
                  <span className="txt-13-span3">
                    ◦ 구체적인 의사 표현 방법은 각 행사마다 별도로 공지됩니다.
                    <br />
                  </span>
                  <ul className="txt-13-span4">
                    <li>온라인으로 진행되는 행사 공간에서는 아래와 같이 적용됩니다.</li>
                  </ul>
                  <span className="txt-13-span5">
                    ◦ 발표 영상을 무단으로 캡쳐하는 행위를 하지 말아주세요.
                  </span>
                </span>
              </div>
            </div>
            <div
              className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative"
            >
              <div
                className="text-black-1 text-left font-['Pretendard-SemiBold',_sans-serif] text-[28px] leading-[130%] font-semibold relative"
              >
                사적인 정보를 지켜주세요
              </div>
              <div
                className="text-black-1 text-left font-['Pretendard-Light',_sans-serif] text-lg leading-normal font-light relative "
              >
                <span>
                  <ul className="txt-23-span">
                    <li>
                      발표에 당사자의 허락 없이 상대를 특정할 수 있는 정보를 담지
                      말아주세요.
                    </li>
                    <li>
                      대화 상대의 동의 없이 대화 메시지 또는 프로필을 포함한 개인 정보를
                      캡쳐하거나 유포하지 말아주세요.
                    </li>
                    <li>
                      상대방이 질문에 대답하기를 원하지 않는다면, 재차 묻지 말아 주세요.
                      다른 사람의 의사를 존중해주세요.
                    </li>
                    <li>
                      나에겐 알려져도 문제가 없는 정보라도 다른 사람에게는 그렇지 않을 수
                      있음을 이해해주세요.
                    </li>
                    <li>어떠한 질문은 그 자체로 큰 실례가 되기도 합니다.</li>
                  </ul>
                  <span className="txt-23-span2">
                    ◦ “나이가 어떻게 되세요?”
                    <br />
                    ◦ “결혼하셨어요?”, “아이가 있으세요?”, “애인 있으세요?”
                    <br />
                    ◦ “드시는 약은 어떤 약인가요?”
                    <br />
                    ◦ “어떻게 하다가 장애를 갖게 되셨나요?”
                  </span>
                </span>
              </div>
            </div>
          </div>
          
        );
      default:
        return null;
    }
  };

const CoC: React.FC = () => {
  const [activeTab, setActiveTab] = useState('purpose');

  
  const tabs = [
    { label: '의도와 목적', value: 'purpose' },
    { label: '커뮤니티', value: 'community' },
    { label: '의사소통', value: 'communication' },
    { label: '프라이버시', value: 'privacy' },
  ];

  return (
    <div className="align-center flex flex-col">

    <Container className="px-16 py-16">
        <div className="flex flex-wrap gap-4 items-center justify-start">
        {tabs.map((tab) => (
          <div
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`cursor-pointer pt-2 pb-2 flex items-center justify-start ${
              activeTab === tab.value
                ? 'border-b-2 border-black text-black'
                : 'text-gray-400'
            }`}
          >
            <div className="text-left font-semibold text-2xl">
              {tab.label}
            </div>
          </div>
        ))}
        </div>
        <div className="mt-8">
            {renderContent(activeTab)}
        </div>
    </Container>
  </div>
    
  );
};

export default CoC;