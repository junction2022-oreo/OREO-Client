import styled from 'styled-components';

export const HeaderWrapper = styled.span`
  display: flex;
  align-items: center;
  margin: 65px 0 0 60px;
  gap: 30px;
`;

export const TitleImageWrapper = styled.div`
  width: 230px;

  img {
    width: 100%;
  }
`;

export const RadioWrapper = styled.div`
  all: unset;
  cursor: pointer;
  display: flex;

  &:first-child {
    margin-right: 30px;
  }
`;

export const RadioLabel = styled.label`
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

export const RadioDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #f1f4f6;
`;

export const RadioInput = styled.input`
  display: none;
  &:checked + .date-radio-label {
    border: none;
    background-color: #2385f8;
    .tool-checkbox-label-dot {
      background-color: #fff;
    }
  }
`;

export const HomePageWrapper = styled.div``;

export const SwitchWrapper = styled.div`
  display: flex;
`;
