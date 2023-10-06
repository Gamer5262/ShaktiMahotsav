import styled from "styled-components";
import { useState } from 'react';
import { Link } from "react-router-dom";

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;


const H2 = styled.h2`
  font-size: 25px;
  color: #ff6611; 
  margin-left: 20px;
  font-family: 'Kaushan Script', cursive;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  font-family: 'Cabin', sans-serif;
  display: inline-block;
  position: relative;
  color: #f1f1f1;
  &:hover {
    color: #ff5533;
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  &:hover::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #0087ca;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled.button`
  font-family: 'Cabin', sans-serif;
  padding: 10px 15px;
  background-color: #ff6611;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`; 

const Navbar = ({ change }) => {
  const [value, setNewValue] = useState("");
   function handleChange(event) {
      let value = event.target.value;
      setNewValue(value);
      change(value);
   }
  return (
    <Section>
      <Container>
        <Links>
          <H2 >ShakthiMahotsav</H2>
          <List>
            <Link to="/"><ListItem>Home</ListItem></Link>
            <Link to="/about"><ListItem>About</ListItem></Link>
            <Link to="/team"><ListItem>Team</ListItem></Link>
          </List>
        </Links>
        <Icons>
          <Button onClick={handleChange}>Register</Button>
        </Icons> 
      </Container>
    </Section>
  );
};

export default Navbar;
