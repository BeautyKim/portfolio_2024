// 프로젝트 목록
const projects = [
  {
    id: 4,
    title: "2024년 포트폴리오",
    date: "2024.05.",
    cover: "./cover/portfolio.png",
    image:
      "https://github.com/BeautyKim/portfolio_2024/raw/main/public/view.gif",
    description:
      "React18 연습 및 2024년까지의 프로젝트를 한번에 정리하기 위하여 개발",
    tack: "useState(), useRef(), useEffect() 및 map()을 활용한 UI",
    env: "React18, Node.js v20, Scss",
    gitUrl: "https://github.com/BeautyKim/portfolio_2024",
    notionUrl:
      "https://ahreumi.notion.site/2024-7c770cbd52f84127801f50d2459add1c",
    url: "https://www.beauty-kim.site",
  },
  {
    id: 3,
    title: "영화 랜딩페이지(Everything Everywhere All At Once)",
    date: "2023.09.",
    cover: "./cover/landingpage.png",
    image:
      "https://github.com/BeautyKim/EEAaO-landing/raw/master/images/readme/%ED%99%94%EB%A9%B4.gif",
    description:
      "HTML, CSS 및 JavaScript를 복습하기 위해 최소한으로 외부 라이브러리 사용해 개발",
    tack: "Carousel, Scroll snap, 가로 마우스휠 스크롤이벤트, keyframes, lottiefiles",
    env: "JavaScript, HTML, CSS",
    gitUrl: "https://github.com/BeautyKim/EEAaO-landing",
    notionUrl:
      "https://ahreumi.notion.site/Everything-Everywhere-All-At-Once-c7e12e0f85f74454bef5e3b9f45a64a5",
    url: "https://ee-aa-o-landing.vercel.app/",
  },
  {
    id: 2,
    title: "Notion API 블로그",
    date: "2023.08. ~ 2023.09.",
    cover: "./cover/notion.png",
    image: "./cover/notion.png",
    description:
      "주로 사용하는 기록용 프로그램인 Notion API를 사용해 블로그 개발",
    tack: "Notion API",
    env: "Next.js13",
    gitUrl: "https://github.com/BeautyKim/beauty-kim-app",
    notionUrl:
      "https://ahreumi.notion.site/Notion-API-0d58f07c855d42ff88e093d006e12761",
    url: "",
  },
  {
    id: 1,
    title: "readvice(팀 북적북적 프로젝트)",
    date: "",
    cover: "./cover/readvice.png",
    image: "./cover/readvice.gif",
    description:
      "개인 맞춤 사서인 챗봇, 자동 독서 기록, 이미지 검색 서비스를 제공하는 개인 독서 사이트",
    tack: "Front-end: React.js, Redux, Redux-Toolkit, Redux-Saga, Tailwindcss, Axios",
    env: "TypeScript, Next.js, Django, AWS, Ubuntu",
    gitUrl: "https://github.com/BeautyKim/readvice-next-collabo",
    notionUrl:
      "https://ahreumi.notion.site/Readvice-7b4977c0959c4fc8bdeaf845dbd5bfcb?pvs=74",
    url: "",
  },
];

export { projects };
