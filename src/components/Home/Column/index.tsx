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

const addedTodoList = [
  {
    feedId: 999,
    imgUrl: 'https://mentionzipstorage.blob.core.windows.net/newcontainer/hana.jpeg',
    name: 'Hana',
    status: false,
    subject: '#멘션집-프로젝트',
    text: '모바일 개발자님들께서  검증범위 작성하실 때 참고하시면 좋을 PC쪽 티켓 공유드립니다! :미소짓는_얼굴: PC_정책 변경> -> description 에 쓰셔도 되고 PC_서버 API 문서> -> 댓글에 쓰셔도 됩니다 :미소짓는_얼굴:',
    writeDate: '2022-08-21T10:07:00',
    redirectUrl: 'https://oreo-2om8401.slack.com/archives/C03UJVAJB52/p1661044054936519'
  },
  {
    feedId: 1000,
    imgUrl: 'https://mentionzipstorage.blob.core.windows.net/newcontainer/yangwon.png',
    name: 'Yangwon',
    status: false,
    subject: '#멘션집-프로젝트',
    text: '안녕하세요 혹시 모바일 API 조회할 때 예전꺼라 requirement 값이 없을 경우에는 어떻게 해야하는지 알 수 있을까요? (정책서나 관련 쓰레드를 찾아보려고 했는데, 잘 못찾고 있어서요 ㅜㅜ) 현재는 위와 같은 경우 info 값을 보게 하고 있는데, 값이 boolean이라 false일 때 “DENY”처럼 할 지, “NON_CHECKED” 처럼 할 지 잘 모르겠습니다!',
    writeDate: '2022-08-21T10:07:20',
    redirectUrl: 'https://oreo-2om8401.slack.com/archives/C03UJVAJB52/p1661044057226279'
  }
];

interface Props {
  category: string;
}

function getIconByName(name: string) {
  switch (name) {
    case 'Slack':
      return SlackImage;
    case 'Outlook':
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
    let [startDate, endDate] = ['20220820', '20220821'];
    if (selectedDate === 'weekly') {
      startDate = '20220814';
      endDate = '20220821';
    }
    const {
      info: { todoList, doneList }
    } = await getItems(categoryName, startDate, endDate);

    const newTodoList = todoList.map((e) => ({ ...e, redirectUrl: 'https://oreo-2om8401.slack.com/archives/C03UJVAJB52/p1661044054936519' }));

    setTodoItems(category === 'Slack' ? newTodoList.concat(...addedTodoList) : newTodoList);
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
      await changeItemStatus(foundItem.feedId, !foundItem.status);

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
