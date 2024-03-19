import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Loading from './pages/Loading';
import Login from './pages/Login';

const Container = styled.div`
  position: relative;
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
`;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const deplay = setTimeout(() => {
      setLoading(false);
    }, 3000); // 의도적으로 3초 로딩 설정

    return () => clearTimeout(deplay);
  }, []);

  return <Container>{loading ? <Loading /> : <Login />}</Container>;
}

export default App;
