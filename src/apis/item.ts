export type ItemType = {
  status: boolean;
  feedId: number;
  imgUrl: string;
  name: string;
  subject: string;
  text: string;
  writeDate: string;
};

export const getItems = (
  category: string,
  startDate: string,
  endDate: string
): Promise<{
  info: {
    todoList: ItemType[];
    doneList: ItemType[];
  };
}> =>
  fetch(`https://donelist.ga/api/feed/${category}?startDate=${startDate}&endDate=${endDate}`, {
    method: 'GET',
    headers: {
      'X-MID': '5'
    }
  }).then((res) => res.json());

export const changeItemStatus = (
  feedId: number,
  check: boolean
): Promise<{
  returnCode: '4002' | '0000';
}> =>
  fetch(`https://donelist.ga/api/feed`, {
    method: 'PUT',
    headers: {
      'X-MID': '5',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      feedId,
      status: check
    })
  }).then((res) => res.json());
