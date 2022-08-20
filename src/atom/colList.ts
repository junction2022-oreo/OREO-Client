import { atom } from 'recoil';

export const modalColListState = atom({
  key: 'modalColListState',
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

export const colListState = atom({
  key: 'colListState',
  default: ['SLACK'] as string[]
});

export const possibleColListState = atom({
  key: 'possibleColListState',
  default: ['SLACK', 'JIRA'] as string[]
});
