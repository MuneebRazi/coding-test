import User from './components/Users';
import styled from 'styled-components';
const MainStyle = styled.div`
  width: 100%;
  align-content: center;
`;
function App() {
  return (
    <div >
      <MainStyle>
        <User />
      </MainStyle>
    </div>
  );
}

export default App;
