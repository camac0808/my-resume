import "./intro.css";
import TypeIt from "typeit-react";


export default function Intro() {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title">
        <h2>최현식</h2>
        <h3>개발자 포트폴리오</h3>
        <TypeIt
          className="typeit"
          options={{
            strings: ["Front end Developer", "Back end Developer"],
            speed: 120,
            breakLines: false,
            waitUntilVisible: true,
            loop: true,
          }}
        ></TypeIt>
      </div>
      <svg
        style={{ cursor: "pointer" }}
        onClick={() => {
          const about = document.querySelector("#about");
          if (about) {
            window.scrollTo({ top: about.offsetTop, behavior: "smooth" });
          }
        }}
        className="arrow-down"
        width="30px"
        height="30px"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </>
  );
}
