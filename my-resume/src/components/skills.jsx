import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  border-bottom: 2px solid lightgray;
  margin-bottom: 50px;
`;
const Item = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  text-align: center;
  width: 300px;
  color: black;
  font-size: 2rem;
  font-weight: bold;
  padding: 15px 0;
  &:hover {
    scale: 1.05;
    transition: all 0.5s ease-in-out;
  }
  
`;
const Divider = styled.div`
  border-bottom: 2px solid lightgray;
  margin: 10px 10px;
`;
const Image = styled.img`
  max-width: 400px;
  height: 80px;
  margin: 0 10px;
`;
export default function Skills() {

  return (
    <Wrapper>
      <Title data-aos="fade-left">SKILLS</Title>
      <Box>
        <Stack spacing={5} direction="row">
          <Item data-aos="fade-right">
            Frontend
            <Divider />
            {/* public folder => ./{image}.png */}
            <Image src="./html.png" alt="html"></Image>
            <Image src="./reactjs.png" alt="reactjs"></Image>
            <Image src="./vite.png" alt="vite"></Image>
          </Item>
          <Item data-aos="fade-left">
            Backend
            <Divider />
            <Image src="./nodejs.png" alt="nodejs"></Image>
            <Image src="./expressjs.png" alt="expressjs"></Image>
            <br />
            <Image src="./mongodb.png" alt="mongodb"></Image>
            <Image src="./firebase.png" alt="firebase"></Image>
          </Item>
        </Stack>
      </Box>
    </Wrapper>
  );
}
