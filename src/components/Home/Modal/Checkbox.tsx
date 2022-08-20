import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  selected: boolean;
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
    background-color: #0ac765;
    .tool-checkbox-label-dot {
      background-color: #fff;
    }
  }
`;

function Checkbox(props: Props) {
  const { title, selected } = props;

  return (
    <Container>
      <CheckboxWrapper>
        <CheckboxInput type="checkbox" checked={selected} />
        <Label className="tool-checkbox-label">
          <Dot className="tool-checkbox-label-dot" />
        </Label>
        <Title>{title}</Title>
      </CheckboxWrapper>
    </Container>
  );
}

export default Checkbox;
