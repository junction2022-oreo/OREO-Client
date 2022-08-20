import React from 'react';
import styled from 'styled-components';
import PlusImage from '../../assets/plus.png';

const ColumnCreatorWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 84px;
  border: 4px solid #0ac765;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  background-color: #fff;
  & > button {
    all: unset;
    cursor: pointer;
  }
`;

function ColumnCreator() {
  return (
    <ColumnCreatorWrapper>
      <button type="button">
        <img src={PlusImage} width={28} height={28} alt="" />
      </button>
    </ColumnCreatorWrapper>
  );
}

export default ColumnCreator;
