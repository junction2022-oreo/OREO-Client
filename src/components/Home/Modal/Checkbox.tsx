import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { possibleColListState } from '../../../atom/colList';
import checkImage from '../../../assets/check.png';

type ColListType = { title: string; selected: boolean }[];

interface Props {
  title: string;
  selected: boolean;
  localColList: { title: string; selected: boolean }[];
  // eslint-disable-next-line no-unused-vars
  setLocalColList(value: ColListType): void;
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
  border-radius: 4px;
  margin-right: 6px;
`;

const CheckboxInput = styled.input`
  display: none;
  &:checked + .checkbox-label {
    border: none;
    background-color: #2385f8;
  }
`;

function Checkbox(props: Props) {
  const { title, selected, localColList, setLocalColList } = props;
  const possibleColList = useRecoilValue(possibleColListState);
  const [checked, setChecked] = useState(selected);

  const handleClick = () => {
    if (!possibleColList.includes(title)) {
      return;
    }
    const newChecked = !checked;
    const selectedCols = localColList.filter((col) => col.selected);
    if (selectedCols.length === 1 && selectedCols[0].title === title && !newChecked) {
      return;
    }
    const newColList = localColList.map((el) => {
      if (el.title === title) {
        return { ...el, selected: newChecked };
      }
      return el;
    });
    setLocalColList(newColList);

    setChecked(newChecked);
  };

  return (
    <Container>
      <CheckboxWrapper onClick={handleClick}>
        <CheckboxInput type="checkbox" checked={checked} />
        <Label className="checkbox-label">
          <img width={10} height={8.5} src={checkImage} alt="" />
        </Label>
        <Title>{title}</Title>
      </CheckboxWrapper>
    </Container>
  );
}

export default Checkbox;
