import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #0077cc;
`;

const Description = styled.p`
  font-size: 1.2rem;
`;

function App() {
    return (
        <Container>
            <Title>SWINGS 메인 페이지</Title>
            <Description>React 프로젝트가 성공적으로 실행되었습니다!</Description>
        </Container>
    );
}

export default App;
