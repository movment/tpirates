import { CaretDownOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { InfoIcon, InfoWrapper } from './Share';

const days = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
];

const Day = () => {
  const day = new Date().getDay();
  const [clicked, setClicked] = useState(false);

  const onClick = useCallback(() => {
    setClicked(true);
  }, []);

  return (
    <InfoWrapper>
      <InfoIcon>
        <FieldTimeOutlined />
      </InfoIcon>
      <div>
        {days.map((_, index) => {
          const i = (day + index) % 7;
          let str = days[i];

          if (index === 0) {
            str += ' (오늘)';
          } else if (index === 1) {
            str += ' (내일)';
          } else if (index === 2) {
            str += ' (모레)';
          }
          return (
            <SDay key={index} visible={clicked || index < 3}>
              {str}
            </SDay>
          );
        })}
        {!clicked && (
          <SButton onClick={onClick}>
            더 보기 <CaretDownOutlined />
          </SButton>
        )}
      </div>
    </InfoWrapper>
  );
};

const SDay = styled.div`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  & + & {
    margin-top: 5px;
  }
`;
const SButton = styled.div`
  cursor: pointer;
  margin-top: 5px;
`;

export default Day;
