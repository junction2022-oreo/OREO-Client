import React from 'react';
import HomeContainer from '../containers/HomeContainer';

function HomePage() {
  return (
    <div>
      <h3>여기는 Page 컴포넌트입니다. Page 컴포넌트는 라우팅 대상 컴포넌트로 사용됩니다. Container 컴포넌트를 자식으로 부릅니다.</h3>
      <HomeContainer />
    </div>
  );
}

export default HomePage;
