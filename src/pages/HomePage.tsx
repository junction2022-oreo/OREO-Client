import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import TitleImage from '../assets/mention-zip.png';
import switchState from '../atom/switch';
import HomeContainer from '../containers/HomeContainer';
import { HeaderWrapper, HomePageWrapper, RadioDot, RadioInput, RadioLabel, RadioWrapper, SwitchWrapper, TitleImageWrapper } from './style';

export default function HomePage() {
  // const [selectedDate, setSelectedDate] = useState<SelectedDate>('daily');

  const selectedDate = useRecoilValue(switchState);
  const setSelectedDate = useSetRecoilState(switchState);

  return (
    <HomePageWrapper>
      <HeaderWrapper>
        <TitleImageWrapper>
          <img src={TitleImage} alt="MentionZip" />
        </TitleImageWrapper>

        <SwitchWrapper>
          <RadioWrapper onClick={() => setSelectedDate('daily')}>
            <RadioInput type="radio" name="dateType" checked={selectedDate === 'daily'} />
            <RadioLabel className="date-radio-label">
              <RadioDot />
            </RadioLabel>
            <div>Daily</div>
          </RadioWrapper>
          <RadioWrapper onClick={() => setSelectedDate('weekly')}>
            <RadioInput type="radio" name="dateType" checked={selectedDate === 'weekly'} />
            <RadioLabel className="date-radio-label">
              <RadioDot />
            </RadioLabel>
            <div>Weekly</div>
          </RadioWrapper>
        </SwitchWrapper>
      </HeaderWrapper>
      <HomeContainer />
    </HomePageWrapper>
  );
}
