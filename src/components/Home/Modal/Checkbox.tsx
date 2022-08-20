import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  selected: boolean;
  localColList: { title: string; selected: boolean }[];
  setLocalColList(param: { title: string; selected: boolean }[]): void;
}

const Container = styled.div`
  width: 50%;
`;

const CheckboxWrapper = styled.div`
  display: flex;
`;

const Title = styled.div``;

const Label = styled.label`
  width: 20px;
  min-width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #b9b9b9;
  border-radius: 50%;
  margin-right: 6px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #f1f4f6;
`;

const CheckboxInput = styled.input`
  display: none;
  &:checked + .tool-checkbox-label {
    border: none;
    background-color: #2385f8;
    .tool-checkbox-label-dot {
      background-color: #fff;
    }
  }
`;

function Checkbox(props: Props) {
  const { title, selected, localColList, setLocalColList } = props;
  const [checked, setChecked] = useState(selected);

  const handleClick = () => {
    const newChecked = !checked;

    const selectedCols = localColList.filter((col) => col.selected);
    if (selectedCols.length === 1 && selectedCols[0].title === title && !newChecked) {
      return;
    }

    setLocalColList(
      localColList.map((el) => {
        if (el.title === title) {
          return { ...el, selected: newChecked };
        }
        return el;
      })
    );

    setChecked(newChecked);
  };

  return (
    <Container>
      <CheckboxWrapper onClick={handleClick}>
        <CheckboxInput type="checkbox" checked={checked} />
        <Label className="tool-checkbox-label">
          <Dot className="tool-checkbox-label-dot" />
        </Label>
        <Title>{title}</Title>
      </CheckboxWrapper>
    </Container>
  );
}

export default Checkbox;
