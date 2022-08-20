import React, { , useState } from 'react';
import { useRecoilValue,  } from 'recoil';
import styled from 'styled-components';
import { colListState,  } from '../atom/colList';
import Column from '../components/Home/Column';
import ColumnCreator from '../components/Home/ColumnCreator';
import Modal from '../components/Home/Modal';

const Container = styled.div`
  padding: 60px;
  overflow-y: scroll;
  display: flex;
  gap: 30px;
`;

function HomeContainer() {
  const [isShow, setShow] = useState(false);
  const colList = useRecoilValue(colListState);

  return (
    <Container>
      {colList.map((category) => (
        <Column category={category} />
      ))}
      <ColumnCreator handleOpenModal={() => setShow(true)} />
      <Modal isShow={isShow} handleCloseModal={() => setShow(false)} />
    </Container>
  );
}

export default HomeContainer;
