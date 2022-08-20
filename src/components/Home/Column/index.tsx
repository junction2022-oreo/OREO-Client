import React, { useState } from 'react';
import styled from 'styled-components';
import Item from '../Item';
import SlackImage from '../../../assets/slack.png';

type ItemType = {
  id: number;
  contents: string;
  status: 'done' | 'todo';
};

const ITEMS: ItemType[] = [
  {
    id: 1,
    contents: '@seungmi 와이어프레임 작업 부탁드려요, 오늘 오후까지 부탁드립니다.와이어프레임 작업 부탁드려요, 오늘 오후까지 부탁드립니다.',
    status: 'todo'
  },
  { id: 2, contents: 'hh2', status: 'todo' },
  { id: 3, contents: 'hh3', status: 'todo' },
  { id: 4, contents: 'hh4', status: 'todo' },
  { id: 5, contents: 'hh5', status: 'done' },
  { id: 6, contents: 'hh6', status: 'done' },
  { id: 7, contents: 'hh7', status: 'done' },
  { id: 8, contents: 'hh8', status: 'done' },
  { id: 9, contents: 'hh7', status: 'done' },
  { id: 10, contents: 'hh8', status: 'done' },
  { id: 11, contents: 'hh8', status: 'done' },
  { id: 12, contents: 'hh8', status: 'done' },
  { id: 13, contents: 'hh8', status: 'done' },
  { id: 14, contents: 'hh8', status: 'done' }
];

const ColumnWrapper = styled.div`
  width: 600px;
  height: 857px;
  padding: 30px;
  flex-shrink: 0;
  border: 1px solid red;
`;

const TodoColumnWrapper = styled.div`
  border: 1px solid black;
`;

const DoneColumnWrapper = styled.div`
  border: 1px solid black;
`;

const ColumnTitle = styled.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  & > img {
    width: 26px;
    height: 26px;
    margin-right: 8px;
  }
`;

const ColumnBody = styled.div``;

const ColumnContentWrapper = styled.div``;

const ColumnStatusTitle = styled.div`
  margin: 30px 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #121212;
`;

const ItemsWrapper = styled.div``;

const Badge = styled.span<{ color: string }>`
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

function Column() {
  const [items, setItems] = useState(ITEMS);

  const handleChangeStatus = (id: number) => {
    const newItems = items.map((e) => {
      if (e.id === id) {
        e.status = e.status === 'done' ? 'todo' : 'done';
      }
      return e;
    });
    setItems(newItems);
  };

  return (
    <ColumnWrapper>
      <ColumnTitle className="column-title">
        <img src={SlackImage} alt="툴 아이콘" />
        Slack
      </ColumnTitle>
      <ColumnBody className="column-body">
        <TodoColumnWrapper className="top-box">
          <ColumnContentWrapper className="column-content">
            <ColumnStatusTitle>
              TO DO
              <Badge color="#EB4D36">{ITEMS.filter((item) => item.status === 'todo').length}</Badge>
            </ColumnStatusTitle>
            <ItemsWrapper>
              {items
                .filter((item) => item.status === 'todo')
                .map((item) => (
                  <Item key={item.id} status={item.status} onClick={() => handleChangeStatus(item.id)}>
                    {item.contents}
                  </Item>
                ))}
            </ItemsWrapper>
          </ColumnContentWrapper>
        </TodoColumnWrapper>
        <DoneColumnWrapper className="bottom-box">
          <ColumnContentWrapper>
            <ColumnStatusTitle>
              DONE
              <Badge color="#0AC765">{ITEMS.filter((item) => item.status === 'done').length}</Badge>
            </ColumnStatusTitle>
            <ItemsWrapper>
              {items
                .filter((item) => item.status === 'done')
                .map((item) => (
                  <Item key={item.id} status={item.status} onClick={() => handleChangeStatus(item.id)}>
                    {item.contents}
                  </Item>
                ))}
            </ItemsWrapper>
          </ColumnContentWrapper>
        </DoneColumnWrapper>
      </ColumnBody>
    </ColumnWrapper>
  );
}

export default Column;
