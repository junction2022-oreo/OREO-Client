import React, { SyntheticEvent, useState } from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import HomeContainer from '../containers/HomeContainer';
import { HeaderWrapper, HomePageWrapper, SwitchWrapper } from './style';

const IOSSwitch = styled((props: SwitchProps) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(({ theme }) => ({
  width: 65,
  height: 31,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(34px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#0AC765',
        opacity: 1,
        border: 0
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#0AC765',
      border: '6px solid #fff'
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600]
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 27,
    height: 27
  },
  '& .MuiSwitch-track': {
    borderRadius: 15.5,
    backgroundColor: '#B9B9B9',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    })
  }
}));

type SelectedDate = 'weekly' | 'daily';

export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState<SelectedDate>('daily');

  const handleChangeDaily = (e: SyntheticEvent<Element, Event>, checked: boolean) => {
    if (selectedDate === 'weekly' && checked) {
      setSelectedDate('daily');
      return;
    }
    setSelectedDate('weekly');
  };

  const handleChangeWeekly = (e: SyntheticEvent<Element, Event>, checked: boolean) => {
    if (selectedDate === 'daily' && checked) {
      setSelectedDate('weekly');
      return;
    }
    setSelectedDate('daily');
  };

  return (
    <HomePageWrapper>
      <HeaderWrapper>
        <h1>Menti@nzip</h1>
        <SwitchWrapper>
          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} checked={selectedDate === 'daily'} />} label="Daily" onChange={handleChangeDaily} />
          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} checked={selectedDate === 'weekly'} />} label="Weekly" onChange={handleChangeWeekly} />
        </SwitchWrapper>
      </HeaderWrapper>
      <HomeContainer />
    </HomePageWrapper>
  );
}
