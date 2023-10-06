import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 80%;
  scroll-snap-align: center;
  width: 98vw;
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 45vw;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    max-height: 80vw;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  color: #ff6611;
  font-family: 'Kaushan Script', cursive;
  max-width: 600px;
  @media only screen and (max-width: 768px) {
    font-size: 45px;
    text-align: center;
  }
`;

const Desc = styled.p`
  font-family: 'Inclusive Sans', sans-serif;
  text-align: justify;
  font-size: 20px;
  max-width: 500px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px 20px 40px 20px;
    min-width: 300px;
    width: 100%; 
    text-align: center;
  }
`;


const Right = styled.div`
  width: 40vw;
  @media only screen and (max-width: 768px) {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;


const Img = styled.img`
  width: 400px;
  height: auto;
  object-fit: contain;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 400px;
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>Shaktimahotsav</Title>
          <Desc>
            Join our Navratri celebrations and experience the spirit of devotion, music, and dance. Let&#39;s celebrate together!.
          </Desc>
        </Left>
        <Right>
            <Img src="./assets/hero-img.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
