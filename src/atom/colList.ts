import { atom } from 'recoil';

export const colListState = atom({
  key: 'colListState',
  default: [
    { title: 'Slack', selected: true },
    { title: 'Jira', selected: false },
    { title: 'Outlook', selected: false },
    { title: 'Excel', selected: false },
    { title: 'Powerpoint', selected: false },
    { title: 'Figma', selected: false },
    { title: 'Notion', selected: false },
    { title: 'Wiki', selected: false }
  ]
});

export const possibleColListState = atom({
  key: 'possibleColListState',
  default: [] as string[]
});
