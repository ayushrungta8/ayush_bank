import styled from "styled-components";
export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  span {
    cursor: pointer;
    text-decoration: none;
    text-align: end;
    margin: 0.5em 0;
    :visited {
      color: #444;
    }
  }
`;
export const IconContainer = styled.button`
  color: white;
  display: flex;
  align-items: center;

  background-color: #29384e;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  margin: auto;
  padding: 1em;
  cursor: pointer;
  border: 1px solid #444;
  transition: all 0.3s;
  :hover {
    background-color: #679436;
    border: 1px solid #679436;
  }
`;
export const InputContainer = styled.div`
  position: relative;
  margin: 1em 0;
  display: flex;
  align-items: stretch;
`;
export const Button = styled.button`
  width: 100%;
  background-color: #29384e;
  color: #fff;
  margin: 1em 0;
  padding: 1em;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
  :hover {
    background-color: #679436;
  }
`;
export const Input = styled.input`
  /* margin: 1em 0; */
  width: 100%;
  color: #444;
  display: block;
  padding: 1em;
  padding-right: 4em;
  font-size: 1.2rem;
  border: none;
  border: 1px solid #444;
  border-radius: 4px;
  transition: border 0.3s;
  :focus {
    outline: none;
    border: 1px solid #679436;
  }
`;

export const Form = styled.form`
  margin: 1em 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;
export const Heading = styled.div`
  padding: 0.5em 0;
  font-size: 2rem;
  font-weight: 500;
  color: #444;
`;
export const Label = styled.label`
  color: #444;
  display: block;
`;
export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em 0;
`;

export const SubHeading = styled.div`
  color: #444;
`;
export const HeadingContainer = styled.div`
  margin: 2em 0;
`;
