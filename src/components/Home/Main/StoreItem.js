import { CommentOutlined } from '@ant-design/icons';
import { useCallback } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const StoreItem = ({ store }) => {
  const {
    description,
    label,
    tags,
    thumbnail,
    market,
    state,
    uri,
    summary: { comments, rating },
  } = store;
  const history = useHistory();
  const onClick = useCallback(() => {
    history.push(uri);
  }, [uri, history]);

  return (
    <Wrapper onClick={onClick}>
      <Left>
        <Image src={thumbnail} />
        {tags.map((tag, index) => {
          let str = '';
          if (tag === 'today-price') str = '오늘시세';
          else return null;

          return <Tag key={index}>{str}</Tag>;
        })}
      </Left>
      <Right>
        <RTop>
          <Title>
            <Label>{label}</Label>
            <Market>{market}</Market>
          </Title>
          <Description>{description}</Description>
        </RTop>
        <RBottom>
          <Summary>
            <div>★ {rating}</div>
            <div>
              <CommentOutlined /> {comments}
            </div>
          </Summary>
          <State>{state === 'OPEN' ? '영업중' : '영업종료'}</State>
        </RBottom>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex: 1;
  margin: 5px 0;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  cursor: pointer;
`;
const Left = styled.div`
  display: flex;
  width: 130px;
  position: relative;
`;
const Image = styled.img`
  width: 130px;
  height: 130px;
`;
const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 22px;
  margin-left: 5px;
  border-radius: 3px;
  padding: 0px 5px;
  background-color: #de2222;
  font-size: 12px;
  color: #ffffff;
  position: absolute;
  bottom: 10px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 130px);
  padding: 10px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled.div`
  color: #555555;
  font-weight: 600;
`;

const Market = styled.div`
  font-size: 13px;
  margin-left: 5px;
  color: #777777;
`;
const RTop = styled.div``;
const RBottom = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 13px;
`;
const Description = styled.div`
  height: 20px;
  margin-top: 1px;
  font-size: 13px;
  color: #999999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Summary = styled.div`
  display: flex;

  & > :first-child {
    color: #ff9300;
  }
  & > :last-child {
    margin-left: 8px;
    color: #999999;
  }
`;
const State = styled.div`
  color: #1c79bc;
`;

export default StoreItem;
