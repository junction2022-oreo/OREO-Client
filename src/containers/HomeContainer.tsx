import React from 'react';
import styled from 'styled-components';
import Column from '../components/Home/Column';
import ColumnCreator from '../components/Home/ColumnCreator';

const COLUMN_LIST = [1, 2, 3, 4, 5];

const Container = styled.div`
  border: 1px solid black;
`;

function HomeContainer() {
  return (
    <Container>
      {COLUMN_LIST.map(() => (
        <Column />
      ))}
      <ColumnCreator />
    </Container>
  );
}

export default HomeContainer;
