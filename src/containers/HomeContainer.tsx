import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
`;

function HomeContainer() {
  return (
    <Container>
      <h4>여기는 Container 컴포넌트입니다. Container 컴포넌트는 실제 화면을 그리는 컴포넌트로 사용됩니다. Page 컴포넌트의 자식으로 부릅니다.</h4>
    </Container>
  );
}

export default HomeContainer;
