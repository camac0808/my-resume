import styled from "styled-components";
import Project from "./project";
import { Box, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(31, 76, 161);
  height: 100%;
  width: 100%;
  padding: 80px 0;
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  border-bottom: 2px solid lightgray;
`;

export default function Projects() {
  var items = [
    {
      title: "포트폴리오 웹사이트 - REACT",
      date: "2023.10 (1인프로젝트)",
      image: ["./포트폴리오1.png", "./포트폴리오5.png"],
      description: [
        "자기소개, 간단한 인적사항, 기술스택, 프로젝트 소개",
        "Vite, React, Material-UI, HeroIcons, FontAwesome",
        "Firebase(준비중)",
        "해당 웹사이트는 포트폴리오 및 자기소개를 위해 제작되었습니다. 다른 개발자분들이 제작한 수준급 포트폴리오 웹사이트를 보고 영감을 받아 직접 React와 라이브러리를 사용하여 제작하였습니다.",
      ],
      link: "https://my-resume-ab043.web.app"
    },
    {
      title: "Firebase Twitter Project",
      date: "2023.09 (1인프로젝트)",
      image: ["./포트폴리오2.png", "./포트폴리오3.png"],
      description: [
        "로그인 회원가입 기능, 프로필 등록, 댓글 CRUD",
        "Vite, React",
        "Firebase",
        "해당 사이트는 트위터를 모티브로 제작되었습니다. Firebase를 사용하여 로그인, 회원가입, 프로필 등록, 댓글 CRUD 기능을 구현하였습니다.",
      ],
      link: "https://twitter-firebase-674a8.web.app"
    },
    {
      title: "React RAWG Game Project",
      date: "2022.09 (1인프로젝트)",
      image: ["./rawg-project1.png", "./rawg-project2.png"],
      description: [
        "게임 검색 기능, 사이드 메뉴 구현, 로그인 화면 및 상세 메뉴 화면",
        "React, Bootstrap, AOS, Font-Awesome",
        "RAWG gaming api",
        "해당 사이트는 게임 사이트를 모티브로 제작되었습니다. React와 RAWG 무료 api를 사용하여 로그인 화면, 최신 게임, 게임 검색 기능 등 게임 검색 사이트와 흡사하게 구현하도록 노력했습니다.",
      ],
      link: "https://camac0808.github.io/React-project/"
    },
    {
      title: "USINSA Project",
      date: "2022.08 (팀프로젝트 도중 해체되어 1인프로젝트 전환)",
      image: ["./usinsa1.png", "./usinsa2.png"],
      description: [
        "회원가입 및 로그인 기능, 회원별 상품 CRUD 기능, ADMIN 페이지 분리",
        "React, Font-Awesome, Material-UI, Styled-Components",
        "MongoDb, ExpressJs, Admin계정 admin@naver.com / 000000",
        "해당 프로젝트는 무신사 클론코딩 팀 프로젝트로 시작하였으나 해체되어서 개인 프로젝트로 전환되었습니다. MERN 스택을 사용하여 백엔드와 프론트엔드를 동시에 구현해보았으며, 시간이 너무 지체되어 간단한 기능만 구현하였기 때문에 프론트엔드에 조금더 집중을 하지 못해서 아쉬움이 남았지만 백엔드를 다뤄볼 수 있는 좋은 경험이었습니다.",
      ],
      link: "https://mern-project-92f0a.web.app"
    },
  ];

  return (
    <Wrapper>
      <Title data-aos="fade-left">PROJECTS</Title>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "60px",
          // Box 내부의 요소들에 대한 스타일을 지정
          "& > :not(style)": {
            m: 1,
            minWidth: 1350,
            minHeight: 700,
            padding: 5,
          },
        }}
      >
        <Paper>
            <Carousel
              sx={{
                height: "100%",
                width: "100%",
                paddingBottom: "10px",
              }}
              autoPlay={false}
              cycleNavigation={true}
              navButtonsAlwaysVisible={true}
              fullHeightHover={true}
              animation='slide'
              navButtonsProps={{
                // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                },
              }}
            >
              {items.map((item, i) => (
                <Project key={i} item={item} />
              ))}
            </Carousel>
        </Paper>
      </Box>
    </Wrapper>
  );
}
