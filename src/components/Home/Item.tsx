import dayjs from 'dayjs';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { ItemType } from '../../apis/item';
import checkImage from '../../assets/check.png';

type Props = PropsWithChildren<{
  item: ItemType;
  onClick: () => void;
}>;

const Button = styled.button`
  all: unset;
  display: flex;
  gap: 8px;
  cursor: pointer;

  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CheckboxWrapper = styled.div``;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid #b9b9b9;
  border-radius: 4px;
  margin-top: 8px;
  cursor: pointer;

  img {
    display: none;
  }
`;

const Checkbox = styled.input`
  display: none;

  &:checked + .checkbox-label {
    border: none;
    background-color: #2385f8;

    img {
      display: inline;
    }
  }
`;

const ProfileWrapper = styled.div``;

const Profile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: skyblue;
`;

const ContentWrapper = styled.div``;

const ContentHeader = styled.div`
  display: flex;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: left;
  margin-right: 4px;
`;

const Time = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  color: #7a7a7a;
`;

const ContentBody = styled.div`
  margin: 2px 0 6px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
  width: 100%;
  max-height: 60px;
`;

const LineClampText = styled.div<{ lineClamp: number }>`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.lineClamp};
  -webkit-box-orient: vertical;
  box-sizing: border-box;
  word-break: break-all;
  text-overflow: ellipsis;
  text-align: left;
  overflow-wrap: break-word;
  line-height: 1.2;
  text-align: left;
`;

const ContentBodyTitle = styled(LineClampText)`
  color: #121212;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
`;

const ContentBodyText = styled(LineClampText)`
  color: #7a7a7a;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
`;

function Item(props: Props) {
  const { onClick, item } = props;
  const { subject, text, status, name, writeDate, imgUrl, redirectUrl } = item;

  const handleClick = () => {
    // eslint-disable-next-line no-restricted-globals
    if (!status) {
      window.open(redirectUrl || 'https://oreo-2om8401.slack.com/archives/C03UJVAJB52/p1661044054936519');
    }
    onClick();
  };

  return (
    <Button type="button">
      <CheckboxWrapper>
        <Checkbox type="checkbox" checked={status} />
        <Label className="checkbox-label" onClick={onClick}>
          <img width={10} height={8.5} src={checkImage} alt="" />
        </Label>
      </CheckboxWrapper>
      <ProfileWrapper>
        <Profile src={imgUrl} />
      </ProfileWrapper>
      <ContentWrapper onClick={handleClick}>
        <ContentHeader>
          <Name>{name}</Name>
          <Time>{dayjs(writeDate).format('MM DD HH:mm A')}</Time>
        </ContentHeader>
        <ContentBody>
          <ContentBodyTitle lineClamp={1}>{subject}</ContentBodyTitle>
          <ContentBodyText lineClamp={2}>{text}</ContentBodyText>
        </ContentBody>
      </ContentWrapper>
    </Button>
  );
}

export default Item;
