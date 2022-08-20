import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import checkImage from '../../assets/check.png';

type Props = PropsWithChildren<{
  title: string;
  status: 'todo' | 'done';
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

  img {
    display: none;
  }
`;

const Checkbox = styled.input`
  display: none;

  &:checked + .checkbox-label {
    border: none;
    background-color: #0ac765;

    img {
      display: inline;
    }
  }
`;

const ProfileWrapper = styled.div``;

const Profile = styled.div`
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
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ContentBodyTitle = styled.div`
  color: #121212;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
`;

const ContentBodyText = styled.div`
  color: #7a7a7a;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
`;

const ContentFooter = styled.div``;

const TagWrapper = styled.div``;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  text-align: left;

  background: #f1f4f6;
  border-radius: 4px;
  padding: 3px 6px;
`;

function Item(props: Props) {
  const { children, onClick, status, title } = props;
  return (
    <Button type="button" onClick={onClick}>
      <CheckboxWrapper>
        <Checkbox type="checkbox" checked={status === 'done'} />
        <Label className="checkbox-label">
          <img width={10} height={8.5} src={checkImage} alt="" />
        </Label>
      </CheckboxWrapper>
      <ProfileWrapper>
        <Profile />
      </ProfileWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Name>Hana</Name>
          <Time>08.20 6:52 PM</Time>
        </ContentHeader>
        <ContentBody>
          <ContentBodyTitle>{title}</ContentBodyTitle>
          <ContentBodyText>{children}</ContentBodyText>
        </ContentBody>
        <ContentFooter>
          <TagWrapper>
            <Tag># OREO UX PM 채널</Tag>
          </TagWrapper>
        </ContentFooter>
      </ContentWrapper>
    </Button>
  );
}

export default Item;
