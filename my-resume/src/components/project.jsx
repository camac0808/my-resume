import { Box, Paper, Button } from "@mui/material";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { indigo } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Carousel from "react-material-ui-carousel";

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
  },
});

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 50px;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.div`
  display: flex;
  gap: 5px;
  width: 150px;
  height: 30px;
  font-size: 1.2rem;
`;
const P = styled.p`
  padding-top: 2px;
`;
const Description = styled.p`
  padding-bottom: 20px;
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.3;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export default function Project({ item }) {
  // ? image does not show up when first loaded => because images were only 2 pages.. need 3 pages

  return (
    <Box>
      <Title>
        <h1 style={{ fontSize: "2rem" }}>{item.title}</h1>
        <h3 style={{ color: "gray" }}>{item.date}</h3>
      </Title>

      <Main>
        {/* Image */}
        <Box sx={{ width: 600, height: "500px" }}>
          <Carousel
            sx={{
              height: "100%",
              width: "100%",
            }}
            autoPlay={false}
            animation={"fade"}
            navButtonsAlwaysVisible={false}
            navButtonsProps={{
              // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
              style: {
                display: "none",
              },
            }}
            inifiteLoop={true}
          >
            {item.image.map((image, i) => (
              <Paper key={i} elevation={0} sx={{ width: 600, height: "400px" }}>
                <img
                  src={image}
                  className="project-image"
                  alt="project-image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Paper>
            ))}
          </Carousel>
          
          <ThemeProvider theme={theme}>
            <ButtonContainer>
              <Button
                variant="contained"
                size="large"
                color="primary"
                startIcon={<FontAwesomeIcon icon={faLink} />}
                style={{ marginTop: "-50px" }}
                onClick={() => window.open(item.link)}
              >
                Live Web
              </Button>
            </ButtonContainer>
          </ThemeProvider>
        </Box>

        <Paper elevation={3} sx={{ padding: 2, paddingTop: 4, width: 600, height: "400px" }}>
          <Section>
            <Subtitle>
              <svg
                fill="rgb(31, 76, 161)"
                width="25px"
                height="25px"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                />
              </svg>
              <P>주요기능</P>
            </Subtitle>
            <Description>{item.description[0]}</Description>
          </Section>

          <Section>
            <Subtitle>
              <svg
                fill="rgb(31, 76, 161)"
                width="25px"
                height="25px"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                />
              </svg>
              Frontend
            </Subtitle>
            <Description>{item.description[1]}</Description>
          </Section>

          <Section>
            <Subtitle>
              <svg
                fill="rgb(31, 76, 161)"
                width="25px"
                height="25px"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                />
              </svg>
              Backend
            </Subtitle>
            <Description>{item.description[2]}</Description>
          </Section>

          <Section>
            <Subtitle>
              <svg
                fill="rgb(31, 76, 161)"
                width="25px"
                height="25px"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                />
              </svg>
              Description
            </Subtitle>
            <Description>{item.description[3]}</Description>
          </Section>
        </Paper>
      </Main>
    </Box>
  );
}
