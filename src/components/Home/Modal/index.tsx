import React from 'react';
import styled from 'styled-components';
import CloseImage from '../../../assets/close.png';
import Checkbox from './Checkbox';

const Dimmed = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #000000;
  opacity: 0.5;
`;

const ModalContainer = styled.div`
  position: fixed;
  width: 312px;
  border-radius: 4px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
`;

const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  span {
    color: #121212;
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    text-align: left;
  }
`;

const CloseButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const ModalContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

const Button = styled.button`
  all: unset;
  display: block;
  width: 100%;
  margin-top: 26px;
  padding: 12px 0;
  background: #0ac765;
  color: #ffffff;
  border-radius: 4px;
  font-family: SF Pro Display;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  cursor: pointer;
`;

const TOOL_LIST = [
  { title: 'Slack', selected: true },
  { title: 'Jira', selected: true },
  { title: 'Outlook', selected: true },
  { title: 'Excel', selected: true },
  { title: 'Powerpoint', selected: true },
  { title: 'Figma', selected: true },
  { title: 'Notion', selected: true },
  { title: 'Wiki', selected: true }
];

interface Props {
  isShow: boolean;
  handleCloseModal: () => void;
}

function Modal(props: Props) {
  const { isShow, handleCloseModal } = props;
  return isShow ? (
    <>
      <Dimmed />
      <ModalContainer>
        <ModalTitle>
          <span>Tools setting</span>
          <CloseButton type="button" onClick={handleCloseModal}>
            <img src={CloseImage} width={16} height={16} alt="" />
          </CloseButton>
        </ModalTitle>
        <ModalContent>
          {TOOL_LIST.map((tool) => (
            <Checkbox title={tool.title} selected={tool.selected} />
          ))}
        </ModalContent>
        <Button>OK</Button>
      </ModalContainer>
    </>
  ) : null;
}

export default Modal;
