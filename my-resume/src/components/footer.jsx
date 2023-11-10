import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  line-height: 100px;
`;

export default function Footer() {
  return (
    <Wrapper>
      <p>2023. Choi Hyunsik. React Portfolio Project</p>
    </Wrapper>
  );
}
