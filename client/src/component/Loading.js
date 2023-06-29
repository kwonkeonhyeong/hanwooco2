// Loading.js
import React from 'react';
import styled from '@emotion/styled';

function LoadingComponent() {
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 3px;
`
const Img = styled.img`

`
;
  return (
    <Background>
      <Img src="/Spiner.gif" alt="로딩중" width="100px"></Img>
      <LoadingText>탄소배출량을 계산중입니다...</LoadingText>
    </Background>
  );
};


export default LoadingComponent