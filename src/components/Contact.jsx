/* import { useRef, useState } from "react"; */
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from 'axios';
import PropTypes from 'prop-types';


const Section = styled.div`
  height: 100vh;
  width: 100%;
  margin-top: 40px 0px;
  background-color: #1a1a1ae1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

`;

const Title = styled.h1`
  font-weight: 100;
  font-family: "Cabin", sans-serif;
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



function SuccessMessage() {
  return (
    alert("Your data has been successfully saved!")
  );
}

function ErrorMessage(props) {
  return (
    <div className="error-message">
      <p>{props.message}</p>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

const Contact = ({change}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const Submit = async(event) => {
    try {
      const headers = {
        'Content-Type': 'application/json; charset=UTF-8',
      }
      const response = await axios.post("http://localhost/Form/contact.php", event, 
      {headers: headers, 
      maxBodyLength: 100,
          maxContentLength: 100
        });
      console.log(response);
      SuccessMessage();
      var form = document.getElementById("ContactForm");
      form.reset();
    } catch (error) {
      console.error(error);
      ErrorMessage("There was an error submitting your data.");
    }
  };
  
  return (
    <Section id="contact">
      <Container>
        <Form onSubmit={handleSubmit(Submit)} id="ContactForm">
            <Title>Suggestion</Title>
            <Input placeholder="Name" {...register('name', { required: true })}/>
            {errors.name && <span className="error">Name is required</span>}
            <Input placeholder="Phone Number" {...register('phone', { required: true })}/>
            {errors.phone && <span className="error">phone is required</span>}
            <TextArea
              placeholder="Write your message"
              rows={7}
              {...register('message', { required: true })}
            />
            {errors.message && <span className="error">Name is required</span>}
            <Button type="submit">Send</Button>
        </Form>
        <footer>
        </footer>
      </Container>
    </Section>
  );
};

export default Contact;
