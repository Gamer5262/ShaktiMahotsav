/* import { useRef, useState } from "react"; */
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  background-color: #1a1a1a;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Title = styled.h1`
  font-weight: 200;
  color: #fff;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #ff6611;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;


const Contact = () => {
  /* const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
 */
    /* emailjs
      .sendForm(
        "service_id",
        "template_id",
        ref.current,
        "public_key"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      ); 
      };
    */
  
  return (
    <Section id="contact">
      <Container>
        <Form  >
            <Title>Suggestion</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Phone Number" name="phone_number" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
        </Form>
        <footer>
        </footer>
      </Container>
    </Section>
  );
};

export default Contact;
