import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = PropsWithChildren<{
  onClick: () => void;
}>;

const Button = styled.button`
  all: unset;
  display: block;
  cursor: pointer;
`;

function Item(props: Props) {
  const { children, onClick } = props;
  return (
    <Button type="button" onClick={onClick}>
      <input type="checkbox" />
      여기에 아이템 내용이 들어갈 것임 {children}
    </Button>
  );
}

export default Item;
