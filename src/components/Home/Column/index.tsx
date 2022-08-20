import React, { useState } from 'react';
import Item from '../Item';
import SlackImage from '../../../assets/slack.png';
import {
  Badge,
  ColumnBody,
  ColumnContentWrapper,
  ColumnStatusTitle,
  ColumnTitle,
  ColumnWrapper,
  DoneColumnWrapper,
  ItemsWrapper,
  TodoColumnWrapper
} from './style';

type ItemType = {
  id: number;
  title: string;
  contents: string;
  status: 'done' | 'todo';
};

const ITEMS: ItemType[] = [
  {
    id: 1,
    title: 'Oreo UX PM 채널',
    contents:
      '@seungmi 와이어프레임 작업 부탁드려요, 오늘 오후까지 부탁드립니다.와이어프레임 작업 부탁드려요, 오늘 오후까지 부탁드립니다.@seungmi 와이어프레임 작업 부탁드려요, 오늘 오후까지 부탁드립니다.와이어프레임 작업 부탁드려요, 오늘 오후까지 부탁드립니다.@seungmi 와이어프레임 작업 부탁드려요, 오늘 오후까지 부탁드립니다.와이어프레임 작업 부탁드려요, 오늘 오후까지 부탁드립니다.@seungmi 와이어프레임 작업 부탁드려요, 오늘 오후까지 부탁드립니다.와이어프레임 작업 부탁드려요, 오늘 오후까지 부탁드립니다.',
    status: 'todo'
  },
  { id: 2, title: '타이틀입니다.', contents: 'hh2', status: 'todo' },
  { id: 3, title: '타이틀입니다.', contents: 'hh3', status: 'todo' },
  { id: 4, title: '타이틀입니다.', contents: 'hh4', status: 'todo' },
  { id: 5, title: '타이틀입니다.', contents: 'hh5', status: 'done' },
  { id: 6, title: '타이틀입니다.', contents: 'hh6', status: 'done' },
  { id: 7, title: '타이틀입니다.', contents: 'hh7', status: 'done' },
  { id: 8, title: '타이틀입니다.', contents: 'hh8', status: 'done' },
  { id: 9, title: '타이틀입니다.', contents: 'hh7', status: 'done' },
  { id: 10, title: '타이틀입니다.', contents: 'hh8', status: 'done' },
  { id: 11, title: '타이틀입니다.', contents: 'hh8', status: 'done' },
  { id: 12, title: '타이틀입니다.', contents: 'hh8', status: 'done' },
  { id: 13, title: '타이틀입니다.', contents: 'hh8', status: 'done' },
  { id: 14, title: '타이틀입니다.', contents: 'hh8', status: 'done' }
];

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
      <ColumnBody className="column-body">
        <TodoColumnWrapper className="top-box">
          <ColumnTitle className="column-title">
            <img src={SlackImage} alt="툴 아이콘" />
            Slack
          </ColumnTitle>
          <ColumnContentWrapper className="column-content">
            <ColumnStatusTitle>
              TO DO
              <Badge color="#EB4D36">{ITEMS.filter((item) => item.status === 'todo').length}</Badge>
            </ColumnStatusTitle>
            <ItemsWrapper>
              {items
                .filter((item) => item.status === 'todo')
                .map((item) => (
                  <Item key={item.id} title={item.title} status={item.status} onClick={() => handleChangeStatus(item.id)}>
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
                  <Item key={item.id} title={item.title} status={item.status} onClick={() => handleChangeStatus(item.id)}>
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
