import React from 'react';
import styled from 'styled-components';
import PlusImage from '../../assets/plus.png';

const ColumnCreatorWrapper = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 84px;
  border: 4px solid #2385f8;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
`;

interface Props {
  handleOpenModal: () => void;
}

function ColumnCreator(props: Props) {
  const { handleOpenModal } = props;
  return (
    <ColumnCreatorWrapper type="button" onClick={handleOpenModal}>
      <img src={PlusImage} width={28} height={28} alt="" />
    </ColumnCreatorWrapper>
  );
}

export default ColumnCreator;
