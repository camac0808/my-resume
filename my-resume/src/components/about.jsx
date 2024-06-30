import styled from "styled-components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FaceIcon from "@mui/icons-material/Face";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #f5f5f5;
  color: #212529;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  border-bottom: 2px solid lightgray;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  width: 75%;
  padding: 60px 55px;
`;
const Description = styled.p`
  font-size: 20px;
  line-height: 30px;
  text-align: center;
`;

const Item = styled.div``;

const Name = styled.p`
  font-size: 24px;
  margin-left: 5px;
`;
const Span = styled.span`
  font-size: 20px;
  margin-left: 30px;
  margin-top: 20px;
`;
export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Wrapper>
      {/* data-aos="fade-left" aos를 쓸 경우 */}
      <Title data-aos="fade-left">ABOUT ME</Title>
      <Container>
        <Description data-aos="fade-right">
          안녕하세요!
          <br />
          프론트엔드 개발자를 꿈꾸는 최현식입니다.
          <br />
          새로운 기술과 언어를 배우는 것을 즐깁니다.
          <br />
          동료와 함께 같은 목표를 바라보며 성장하겠습니다.
        </Description>
        <Box data-aos="fade-left">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <Box sx={{ display: "flex", fontWeight: "600", marginBottom: "5px", alignItems: "center" }}>
                  <FaceIcon />
                  <Name>이름</Name>
                </Box>
                <Span>최현식</Span>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Box sx={{ display: "flex", fontWeight: "600", marginBottom: "5px", alignItems: "center" }}>
                  <PlaceIcon />
                  <Name>주소지</Name>
                </Box>
                <Span>대전광역시 유성구 전민동</Span>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Box sx={{ display: "flex", fontWeight: "600", marginBottom: "5px", alignItems: "center" }}>
                  <EmailIcon />
                  <Name>이메일</Name>
                </Box>
                <Span>gomgom_@naver.com</Span>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Box sx={{ display: "flex", fontWeight: "600", marginBottom: "5px", alignItems: "center"}}>
                  <PhoneIcon />
                  <Name>연락처</Name>
                </Box>
                <Span>010-2479-3514</Span>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Wrapper>
  );
}
