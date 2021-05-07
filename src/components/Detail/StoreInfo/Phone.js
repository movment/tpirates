import { PhoneOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';
import { InfoIcon, InfoWrapper } from './Share';

const Phone = ({ phones = ['010-1234-1234', '02-123-1234'] }) => {
  return (
    <InfoWrapper>
      <InfoIcon>
        <PhoneOutlined />
      </InfoIcon>
      <BPhoneWrapper>
        {phones.map((phone, index) => (
          <BPhone key={index}>{phone}</BPhone>
        ))}
      </BPhoneWrapper>
    </InfoWrapper>
  );
};

const BPhoneWrapper = styled.div`
  display: flex;
`;
const BPhone = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3px;
  color: #1c79bc;
  background-color: #ffffff;
  height: 30px;
  padding: 5px 10px;
  & + & {
    margin-left: 5px;
  }
`;

export default React.memo(Phone);
