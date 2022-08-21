import styled from 'styled-components';

export const HeaderWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 60px 60px 0 60px;
  gap: 30px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-top: 8px;
    text-align: center;
    font-family: SF Pro Display;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    color: #7a7a7a;
  }
`;

export const HeaderProfileWrapper = styled.div`
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: skyblue;
  }
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
  margin-left: 30px;
`;
