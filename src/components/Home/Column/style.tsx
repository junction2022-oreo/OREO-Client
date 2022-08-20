import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  width: 600px;
  flex-shrink: 0;
`;

export const ColumnBody = styled.div``;

export const TodoColumnWrapper = styled.div`
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 10px 40px 0 rgba(0, 0, 0, 0.1);
  border-radius: 20px 20px 0px 0px;
`;

export const DoneColumnWrapper = styled.div`
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 4px 40px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0 0 20px 20px;
`;

export const ColumnTitle = styled.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  margin-bottom: 30px;
  & > img {
    width: 26px;
    height: 26px;
    margin-right: 8px;
  }
`;

export const ColumnContentWrapper = styled.div``;

export const ColumnStatusTitle = styled.div`
  margin-bottom: 30px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #121212;
`;

export const ItemsWrapper = styled.div`
  max-height: 360px;
  overflow: scroll;
`;

export const Badge = styled.span<{ color: string }>`
  margin-left: 8px;
  background-color: ${(props) => props.color};
  color: #fff;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  padding: 2px 6px;
  border-radius: 30px;
`;
