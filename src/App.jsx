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
  @media (max-width: 1000px) {
    width: 40%;
  }
  @media (max-width: 800px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  width: 60%;
  background: url("/hero.jpg");
  background-position: center;
  background-size: cover;
`;

const Right = styled.div`
  @media (max-width: 1200px) {
    padding: 1em;
  }
  @media (max-width: 1000px) {
    width: 60%;
    padding: 1em;
  }
  @media (max-width: 800px) {
    width: 100%;
    padding: 1em;
  }
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
