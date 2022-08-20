import React from 'react';
import styled from 'styled-components';
import Column from '../components/Home/Column';
import ColumnCreator from '../components/Home/ColumnCreator';

const COLUMN_LIST = [1, 2, 3, 4, 5];

const Container = styled.div`
  padding: 60px;
  overflow-y: scroll;
  display: flex;
  gap: 30px;
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
