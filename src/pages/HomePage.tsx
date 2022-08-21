import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import TitleImage from '../assets/mention-zip.png';
import switchState from '../atom/switch';
import HomeContainer from '../containers/HomeContainer';
import {
  HeaderProfileWrapper,
  HeaderWrapper,
  HomePageWrapper,
  LeftWrapper,
  RadioDot,
  RadioInput,
  RadioLabel,
  RadioWrapper,
  RightWrapper,
  SwitchWrapper,
  TitleImageWrapper
} from './style';
import GidImage from '../assets/gid.png';

export default function HomePage() {
  // const [selectedDate, setSelectedDate] = useState<SelectedDate>('daily');

  const selectedDate = useRecoilValue(switchState);
  const setSelectedDate = useSetRecoilState(switchState);

  return (
    <HomePageWrapper>
      <HeaderWrapper>
        <LeftWrapper>
          <TitleImageWrapper>
            <img src={TitleImage} alt="MentionZip" />
          </TitleImageWrapper>

          <SwitchWrapper>
            <RadioWrapper onClick={() => setSelectedDate('daily')}>
              <RadioInput type="radio" name="dateType" checked={selectedDate === 'daily'} />
              <RadioLabel className="date-radio-label">
                <RadioDot />
              </RadioLabel>
              <div>Day</div>
            </RadioWrapper>
            <RadioWrapper onClick={() => setSelectedDate('weekly')}>
              <RadioInput type="radio" name="dateType" checked={selectedDate === 'weekly'} />
              <RadioLabel className="date-radio-label">
                <RadioDot />
              </RadioLabel>
              <div>Week</div>
            </RadioWrapper>
          </SwitchWrapper>
        </LeftWrapper>
        <RightWrapper>
          <HeaderProfileWrapper>
            <img src={GidImage} alt="" />
          </HeaderProfileWrapper>
          <span>내 정보</span>
        </RightWrapper>
      </HeaderWrapper>
      <HomeContainer />
    </HomePageWrapper>
  );
}
