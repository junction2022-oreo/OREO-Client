import React, { useState } from 'react';
import styled from 'styled-components';
import Column from '../components/Home/Column';
import ColumnCreator from '../components/Home/ColumnCreator';
import Modal from '../components/Home/Modal';

const COLUMN_LIST = [1, 2, 3, 4, 5];

const Container = styled.div`
  padding: 60px;
  overflow-y: scroll;
  display: flex;
  gap: 30px;
`;

function HomeContainer() {
  const [isShow, setShow] = useState(false);

  return (
    <Container>
      {COLUMN_LIST.map(() => (
        <Column />
      ))}
      <ColumnCreator handleOpenModal={() => setShow(true)} />
      <Modal isShow={isShow} handleCloseModal={() => setShow(false)} />
    </Container>
  );
}

export default HomeContainer;
