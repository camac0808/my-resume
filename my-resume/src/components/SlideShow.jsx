import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
};
const Wrapper = styled.div`
 
`;

export default function SlideShow() {
  return (
    <Wrapper>
      <Slider {...settings}>
        {/* {image.map((item, i) => {
          return (
            <div key={i}>
              <img src={item} alt="project" />
            </div>
          );
        })} */}
          <img src="./포트폴리오1.png" alt="project" />
          <img src="./포트폴리오2.png" alt="project" />
          <img src="./포트폴리오3.png" alt="project" />
      </Slider>
    </Wrapper>
  );
}
