import { CarOutlined } from '@ant-design/icons';
import React from 'react';
import SLi from '../../Layout/SLi';
import { InfoIcon, InfoWrapper } from './Share';

const Delivery = ({ deliveries = ['퀵서비스', '택배'] }) => {
  return (
    <InfoWrapper>
      <InfoIcon>
        <CarOutlined />
      </InfoIcon>
      <div>
        {deliveries.map((delivery, index) => (
          <SLi marginTop="5px" key={index}>
            {delivery}
          </SLi>
        ))}
      </div>
    </InfoWrapper>
  );
};

export default React.memo(Delivery);
