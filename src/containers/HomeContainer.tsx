import React, { useState } from 'react';
import styled from 'styled-components';
import Column from '../components/Home/Column';
import ColumnCreator from '../components/Home/ColumnCreator';
import Modal from '../components/Home/Modal';

const CATEGORY_LIST = ['slack', 'jira'];

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
      {CATEGORY_LIST.map((category) => (
        <Column category={category} />
      ))}
      <ColumnCreator handleOpenModal={() => setShow(true)} />
      <Modal isShow={isShow} handleCloseModal={() => setShow(false)} />
    </Container>
  );
}

export default HomeContainer;
