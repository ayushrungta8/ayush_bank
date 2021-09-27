import styled from "styled-components";
import Login from "./components/login/Login";

function App() {
  return (
    <Container className="App">
      <Left>
        <LogoContainer href="/">
          <img src="/logo.png" alt="logo" />
        </LogoContainer>
      </Left>
      <Right>
        <Login />
      </Right>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Left = styled.div`
  width: 60%;
  height: 100%;
  background: url("/hero.jpg");
  background-size: cover;
`;

const Right = styled.div`
  width: 40%;
  height: 100%;
  padding: 4em;
  display: flex;
  justify-content: center;
`;
const LogoContainer = styled.a`
  margin: 1em;
  display: inline-block;
`;
export default App;
