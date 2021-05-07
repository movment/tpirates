import { useEffect, useState } from 'react';
import styled from 'styled-components';
import StoreItem from './StoreItem';
import { storeData } from '../../../json/demo_data';

const throtle = (callback, ms) => {
  let loading = false;
  return () => {
    if (!loading) {
      loading = setTimeout(() => {
        callback();
        loading = false;
      }, ms);
    }
  };
};

const StoreList = () => {
  const [lists, setLists] = useState(storeData.slice(0, 10));

  useEffect(() => {
    const onScroll = throtle(() => {
      if (
        window.pageYOffset + document.documentElement.clientHeight >
          document.documentElement.scrollHeight - 200 &&
        lists.length < storeData.length
      ) {
        setLists(
          lists.concat(storeData.slice(lists.length, lists.length + 10)),
        );
      }
    }, 500);

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [lists]);

  return (
    <Wrapper>
      {lists.map((store) => (
        <StoreItem key={store.id} store={store} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default StoreList;
