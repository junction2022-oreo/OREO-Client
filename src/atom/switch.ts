import { atom } from 'recoil';

type DateType = 'daily' | 'weekly';

const switchState = atom({
  key: 'switchState',
  default: 'daily' as DateType
});

export default switchState;
