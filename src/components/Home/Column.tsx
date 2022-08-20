import React, { useState } from 'react';
import Item from './Item';

type ItemType = {
  id: number;
  contents: string;
  status: 'done' | 'todo';
};

const ITEMS: ItemType[] = [
  { id: 1, contents: 'hh1', status: 'todo' },
  { id: 2, contents: 'hh2', status: 'todo' },
  { id: 3, contents: 'hh3', status: 'todo' },
  { id: 4, contents: 'hh4', status: 'todo' },
  { id: 5, contents: 'hh5', status: 'done' },
  { id: 6, contents: 'hh6', status: 'done' },
  { id: 7, contents: 'hh7', status: 'done' },
  { id: 8, contents: 'hh8', status: 'done' }
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
    <div>
      <div className="column-title">타이틀 입니다</div>
      <div className="column-content">
        <div>unread</div>
        <div>
          {items
            .filter((item) => item.status === 'todo')
            .map((item) => (
              <Item key={item.id} onClick={() => handleChangeStatus(item.id)}>
                {item.contents}
              </Item>
            ))}
        </div>
        <div>read</div>
        <div>
          {items
            .filter((item) => item.status === 'done')
            .map((item) => (
              <Item key={item.id} onClick={() => handleChangeStatus(item.id)}>
                {item.contents}
              </Item>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Column;
