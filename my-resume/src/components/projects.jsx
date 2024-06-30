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
      title: "React RAWG Game Project",
      date: "2022.09 (1인프로젝트)",
      image: ["./rawg-project1.png", "./rawg-project2.png"],
      description: [
        "게임 검색 기능, 사이드 메뉴 구현, 로그인 화면 및 상세 메뉴 화면",
        "React, Bootstrap, AOS, Font-Awesome",
        "RAWG gaming api",
        "해당 사이트는 게임 사이트를 모티브로 제작되었습니다. React와 RAWG 무료 api를 사용하여 로그인 화면, 최신 게임, 게임 검색 기능 등 게임 검색 사이트와 흡사하게 구현하도록 노력했습니다.",
      ],
      link: "https://camac0808.github.io/React-project/",
    },
    {
      title: "포트폴리오 웹사이트 - REACT",
      date: "2023.10 (1인프로젝트)",
      image: ["./포트폴리오1.png", "./포트폴리오5.png"],
      description: [
        "자기소개, 간단한 인적사항, 기술스택, 프로젝트 소개",
        "Vite, React, Material-UI, HeroIcons, FontAwesome",
        "Firebase Hosting",
        "해당 웹사이트는 포트폴리오 및 자기소개를 위해 제작되었습니다. 다른 개발자분들이 제작한 수준급 포트폴리오 웹사이트를 보고 영감을 받아 직접 React와 라이브러리를 사용하여 제작하였습니다.",
      ],
      link: "https://my-resume-ab043.web.app",
    },
    {
      itle: "Movie Table App",
      date: "2023.11 (1인프로젝트)",
      image: ["./movie1.png", "./movie2.png"],
      description: [
        "자기소개, 간단한 인적사항, 기술스택, 프로젝트 소개",
        "Next.js, React-query, Material-UI, Embla Carousel, Swiper",
        "Vercel Hosting",
        "Next.js를 사용하여 빠르고 반응성 있는 웹 영화 소개 사이트를 제작하였습니다. React-query를 사용하여 데이터를 불러오고, Embla Carousel과 Swiper를 사용하여 이미지 슬라이드를 구현하였습니다.",
      ],
      link: "https://next-movie-app-umber.vercel.app/",
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
      link: "https://twitter-firebase-674a8.firebaseapp.com",
    },
  ];

  return (
    <Wrapper>
      <Title data-aos="fade-left">PROJECTS</Title>
      <Box
        sx={{
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
            animation="slide"
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
