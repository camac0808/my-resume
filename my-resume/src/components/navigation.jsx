import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.nav`
  background-color: transparent;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  color: white;
  transition: all 0.5s ease-in-out;
  z-index: 100;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  height: 60px;
  transition: all 0.5s ease-in-out;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
`;

const NavItem = styled.li`
  text-decoration: none;
  font-weight: 500;
  font-size: 1.3rem;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  transition: all 0.5s ease-in-out;
`;

export default function Navigation() {
  // section click
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
    }
  };

  // navigation scroll event
  const scrollEvent = () => {
    const header = document.querySelector("nav");
    const h1 = document.querySelector("h1");
    const navLinks = document.querySelectorAll("li");
    const container = document.querySelector(".container");

    if (window.scrollY > 0) {
      header.style.backgroundColor = "#fff";
      navLinks.forEach((navLink) => {
        navLink.style.color = "#525e6b";
      });
      h1.style.color = "#525e6b";
      container.style.height = "40px";
    } else {
      header.style.backgroundColor = "transparent";
      h1.style.color = "#fff";
      navLinks.forEach((navLink) => {
        navLink.style.color = "#fff";
      });
      container.style.height = "60px";
    }
  };

  // inline hover style for nav item
  const navItems = document.querySelectorAll(".navlinks li");
  navItems.forEach((navItem) => {
    navItem.style.position = "relative";
    navItem.style.paddingBottom = "2px";
    const underline = document.createElement("span");
    underline.style.position = "absolute";
    underline.style.bottom = "0";
    underline.style.left = "0";
    underline.style.width = "0";
    underline.style.height = "2px";
    underline.style.backgroundColor = "white"; // 원하는 색상으로 변경하세요
    underline.style.transition = "all 0.3s"; // 애니메이션 효과를 위한 transition 설정
    navItem.appendChild(underline);
    // if hover style make underline
    navItem.addEventListener("mouseover", () => {
      underline.style.width = "100%";
    });
    // if hover out style remove underline
    navItem.addEventListener("mouseout", () => {
      underline.style.width = "0";
    });
  });

  window.addEventListener("scroll", scrollEvent);
  return (
    <>
      <Wrapper>
        <Container className="container">
          <div style={{ display: "flex" }}>
            {/* vite svg */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="iconify iconify--logos"
              width="31.88"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 256 257"
            >
              <defs>
                <linearGradient
                  id="IconifyId1813088fe1fbc01fb466"
                  x1="-.828%"
                  x2="57.636%"
                  y1="7.652%"
                  y2="78.411%"
                >
                  <stop offset="0%" stopColor="#41D1FF"></stop>
                  <stop offset="100%" stopColor="#BD34FE"></stop>
                </linearGradient>
                <linearGradient
                  id="IconifyId1813088fe1fbc01fb467"
                  x1="43.376%"
                  x2="50.316%"
                  y1="2.242%"
                  y2="89.03%"
                >
                  <stop offset="0%" stopColor="#FFEA83"></stop>
                  <stop offset="8.333%" stopColor="#FFDD35"></stop>
                  <stop offset="100%" stopColor="#FFA800"></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#IconifyId1813088fe1fbc01fb466)"
                d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
              ></path>
              <path
                fill="url(#IconifyId1813088fe1fbc01fb467)"
                d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
              ></path>
            </svg>
            <Title style={{ marginLeft: "10px" }}>CHS Resume</Title>
          </div>
          {/* navbar */}
          <NavLinks className='navlinks'>
            <NavItem className="intro" onClick={() => scrollToSection("#intro")}>
              Intro
            </NavItem>
            <NavItem className="about" onClick={() => scrollToSection("#about")}>
              About Me
            </NavItem>
            <NavItem className="skills" onClick={() => scrollToSection("#skills")}>
              Skills
            </NavItem>
            <NavItem className="projects" onClick={() => scrollToSection("#projects")}>
              Projects
            </NavItem>
            <NavItem to="/login" disabled>Login</NavItem>
          </NavLinks>
        </Container>
      </Wrapper>
      {/* home */}
      <Outlet />
    </>
  );
}
