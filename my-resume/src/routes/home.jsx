import styled from "styled-components";
import Intro from "../components/intro";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Footer from "../components/footer";
import ScrollOut from "scroll-out";


const Wrapper = styled.div`
  [data-scroll] {
    transition: opacity 1s;
  }
  [data-scroll="in"] {
    opacity: 1;
  }
  [data-scroll="out"] {
    opacity: 0;
  }
`;
const Section = styled.section`
  height: 100vh;
  border: 2px solid black;
  color: white;

  &:nth-child(1) {
    min-height: 1000px;
  }
  &:nth-child(2) {
    height: 500px;
  }
  &:nth-child(3) {
    height: 800px;
  }
  &:nth-child(4) {
    min-height: 1000px;
  }
  &:nth-child(5) {
    height: 100px;
  }
`;

export default function Home() {
  ScrollOut({
    /* options */
  });
  return (
    <Wrapper>
      {/* typeit, stars parallax */}
      <Section id="intro">
        <Intro />
      </Section>
      {/* scroll-out */}
      <Section id="about">
        <About />
      </Section>
      {/* relaxx parallax */}
      <Section id="skills">
        <Skills />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="footer">
        <Footer />
      </Section>
    </Wrapper>
  );
}
