import { EnvironmentOutlined } from '@ant-design/icons';
import React from 'react';
import { InfoIcon, InfoWrapper } from './Share';

const Address = ({ children }) => {
  return (
    <InfoWrapper>
      <InfoIcon>
        <EnvironmentOutlined />
      </InfoIcon>
      <div>{children}</div>
    </InfoWrapper>
  );
};

export default React.memo(Address);
