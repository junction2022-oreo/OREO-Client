import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Item from '../Item';
import SlackImage from '../../../assets/slack.png';
import JiraImage from '../../../assets/jira.png';
import OutlookImage from '../../../assets/outlook.png';

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
import { changeItemStatus, getItems, ItemType } from '../../../apis/item';
import switchState from '../../../atom/switch';

// const ITEMS: ItemType[] = [
//   {
//     id: 1,
//     title: 'Oreo UX PM 채널',
//     contents:
//       '@seungmi 와이어프레임 작업 부탁드려요, 오늘 오후까지 부탁드립니다.와이어프레임 작업 부탁드려요, 오늘 오후까지 부탁드립니다.@seungmi 와이어프레임 작업 부탁드려요, 오늘 오후까지 부탁드립니다.와이어프레임 작업 부탁드려요, 오늘 오후까지 부탁드립니다.@seungmi 와이어프레임 작업 부탁드려요, 오늘 오후까지 부탁드립니다.와이어프레임 작업 부탁드려요, 오늘 오후까지 부탁드립니다.@seungmi 와이어프레임 작업 부탁드려요, 오늘 오후까지 부탁드립니다.와이어프레임 작업 부탁드려요, 오늘 오후까지 부탁드립니다.',
//     status: 'todo'
//   },
//   { id: 2, title: '타이틀입니다.', contents: 'hh2', status: 'todo' },
//   { id: 3, title: '타이틀입니다.', contents: 'hh3', status: 'todo' },
//   { id: 4, title: '타이틀입니다.', contents: 'hh4', status: 'todo' },
//   { id: 5, title: '타이틀입니다.', contents: 'hh5', status: 'done' },
//   { id: 6, title: '타이틀입니다.', contents: 'hh6', status: 'done' },
//   { id: 7, title: '타이틀입니다.', contents: 'hh7', status: 'done' },
//   { id: 8, title: '타이틀입니다.', contents: 'hh8', status: 'done' },
//   { id: 9, title: '타이틀입니다.', contents: 'hh7', status: 'done' },
//   { id: 10, title: '타이틀입니다.', contents: 'hh8', status: 'done' },
//   { id: 11, title: '타이틀입니다.', contents: 'hh8', status: 'done' },
//   { id: 12, title: '타이틀입니다.', contents: 'hh8', status: 'done' },
//   { id: 13, title: '타이틀입니다.', contents: 'hh8', status: 'done' },
//   { id: 14, title: '타이틀입니다.', contents: 'hh8', status: 'done' }
// ];

interface Props {
  category: string;
}

function getIconByName(name: string) {
  switch (name) {
    case 'Slack':
      return SlackImage;
    case 'OutLook':
      return OutlookImage;
    default:
      return JiraImage;
  }
}

function Column(props: Props) {
  const { category } = props;
  const [todoItems, setTodoItems] = useState<ItemType[]>([]);
  const [doneItems, setDoneItems] = useState<ItemType[]>([]);
  const selectedDate = useRecoilValue(switchState);

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    fetchItems(category);
  }, [category, selectedDate]);

  async function fetchItems(categoryName: string) {
    let [startDate, endDate] = ['20220819', '20220820'];
    if (selectedDate === 'weekly') {
      startDate = '20220813';
      endDate = '20220820';
    }
    const {
      info: { todoList, doneList }
    } = await getItems(categoryName, startDate, endDate);

    setTodoItems(todoList);
    setDoneItems(doneList);
  }

  const handleChangeStatus = async (type: 'todo' | 'done', feedId: number) => {
    const items = type === 'todo' ? todoItems : doneItems;
    const setItemsForRemove = type === 'todo' ? setTodoItems : setDoneItems;
    const setItemsForAdd = type === 'todo' ? setDoneItems : setTodoItems;

    const foundItem = items.find((item) => item.feedId === feedId);

    if (!foundItem) {
      return;
    }

    try {
      const { returnCode } = await changeItemStatus(foundItem.feedId, !foundItem.status);

      if (returnCode !== '0000') {
        return;
      }

      setItemsForRemove((prev) => prev.filter((item) => item.feedId !== feedId));
      setItemsForAdd((prev) =>
        prev.concat({ ...foundItem, status: !foundItem.status }).sort((a, b) => new Date(a.writeDate).getTime() - new Date(b.writeDate).getTime())
      );
    } catch (e) {
      console.debug(e);
    }
  };

  return (
    <ColumnWrapper>
      <ColumnBody className="column-body">
        <TodoColumnWrapper className="top-box">
          <ColumnTitle className="column-title">
            <img src={getIconByName(category)} alt="" />
            {category.slice(0, 1).toUpperCase() + category.slice(1)}
          </ColumnTitle>
          <ColumnContentWrapper className="column-content">
            <ColumnStatusTitle>
              TO DO
              <Badge color="#EB4D36">{todoItems.length}</Badge>
            </ColumnStatusTitle>
            <ItemsWrapper>
              {todoItems.map((item) => (
                <Item key={item.feedId} item={item} onClick={() => handleChangeStatus('todo', item.feedId)} />
              ))}
            </ItemsWrapper>
          </ColumnContentWrapper>
        </TodoColumnWrapper>
        <DoneColumnWrapper className="bottom-box">
          <ColumnContentWrapper>
            <ColumnStatusTitle>
              DONE
              <Badge color="#2385F8">{doneItems.length}</Badge>
            </ColumnStatusTitle>
            <ItemsWrapper>
              {doneItems.map((item) => (
                <Item key={item.feedId} item={item} onClick={() => handleChangeStatus('done', item.feedId)} />
              ))}
            </ItemsWrapper>
          </ColumnContentWrapper>
        </DoneColumnWrapper>
      </ColumnBody>
    </ColumnWrapper>
  );
}

export default Column;
