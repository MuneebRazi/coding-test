import { useState } from 'react';
import styled from 'styled-components';
import CreateUser from './CreateUser';
import UserList from './UserList';

const StyledUser = styled.div`
  display: flex;
  flexDirection: column;
  width: 300px;
  border: 2px solid #AAA;
  border-color: Black;
  margin: 50px;
  padding: 40px;
  border-radius: 25px;
  text-align: center;
`;

const StyledUserList = styled.div`
  display: flex;
  flexDirection: column;
  width: 900px;
  border: 1px solid #AAA;
  border-color: Black;
  margin: 50px;
  padding: 30px;
  border-radius: 25px;
  align-content: center;
`;

function User() {
  const [user, setUser] = useState({})
  return (
    <div>
      <StyledUser >
        <CreateUser user={user} setUser={setUser}/>
      </StyledUser>
      <StyledUserList >
        <UserList setUser={setUser}/>
      </StyledUserList>
    </div>
  );
};

export default User;
