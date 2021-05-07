import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;
const Content = styled.div``;
const Image = styled.img`
  width: 100%;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 15px;
  color: #555555;
`;

const Visit = ({
  lists = [
    {
      src: '//via.placeholder.com/350x200',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      src: '//via.placeholder.com/350x200',
      text:
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      src: '//via.placeholder.com/350x200',
      text:
        "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      src: '//via.placeholder.com/350x200',
      text:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
  ],
}) => {
  return (
    <Wrapper>
      {lists.map(({ src, text }, index) => (
        <Content key={index}>
          <Image src="//via.placeholder.com/350x200" alt="Menu" />
          <Text>{text}</Text>
        </Content>
      ))}
    </Wrapper>
  );
};

export default React.memo(Visit);
