"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Intro() {
  const [showTitle, setShowTitle] = useState(false);
  const [showP, setShowP] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 1000);
    setTimeout(() => {
      setShowP(true);
    }, 2500);
    setTimeout(() => {
      setShowButton(true);
    }, 4000);
  }, []);

  const titleStyles = {
    opacity: showTitle ? 1 : 0,
    transform: `translateY(${showTitle ? 0 : "20px"})`,
    transition: "opacity 1s ease-in-out, transform 1.5s ease-in-out",
  };
  const pStyles = {
    opacity: showP ? 1 : 0,
    transform: `translateY(${showP ? 0 : "20px"})`,
    transition: "opacity 1s ease-in-out, transform 1.5s ease-in-out",
  };

  const buttonStyles = {
    opacity: showButton ? 1 : 0,
    transform: `translateY(${showButton ? 0 : "20px"})`,
    transition: "opacity 1s ease-in-out, transform 1.5s ease-in-out",
  };

  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 style={titleStyles} className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mb-5">
          열정이 넘치고, 항상 도전하는
          <br className="hidden lg:inline-block" />
          프론트엔드 개발자, 정훈석입니다.
        </h1>
        <div style={pStyles} className="mb-8 leading-relaxed">
          - <b>사용자 중심의 개발 역량</b>
          <div className="ml-5 mb-3">
            개발자로서, 웹 사이트의 UX(사용자 경험)에 대한 깊은 이해와 관심을 바탕으로 사용자 중심의 소프트웨어 개발을 추구합니다.
          </div>
          - <b>비전과 목표 지향적인 태도</b>
          <div className="ml-5 mb-3">
            단순히 현재의 이익만을 추구하는 것이 아니라, 보다 의미 있는 목표와 비전에 집중하는 것이 중요하다고 생각합니다.
          </div>
          - <b>완수력과 끈기</b>
          <div className="ml-5 mb-3">
            한 번 시작한 일은 결코 중도에 포기하지 않고 최선을 다하여 끝까지 이루어냅니다.
          </div>
          - <b>문제 해결 및 개선 능력</b>
          <div className="ml-5 mb-3">
            부족한 점이나 문제점이 발견되면 적극적으로 그 부분을 개선하기 위해 노력합니다.
          </div>
          - <b>적응력과 유연성</b>
          <div className="ml-5 mb-3">
            어떤 환경에서든 적응력이 뛰어나며, 어려움을 극복하며 잘 적응합니다.
          </div>
        </div>
        <div className="flex justify-center">
          <Link style={buttonStyles} href="/projects" className="btn-project">프로젝트 보러가기</Link>
        </div>
      </div>
    </>
  );
}
