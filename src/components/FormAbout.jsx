import { Button, TextField, FormGroup, FormControlLabel, Checkbox  } from "@mui/material";
import { useForm } from "react-hook-form";
import "./Form.css";
import axios from 'axios';

import PropTypes from 'prop-types';

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

const FormAbout = ({change}) => {
  function toggleForm() {
    change();
  }
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

      for (let i=0;i < 11; i++){
        if (event["Check" + i.toString()] == ''){
          event["Check" + i.toString()] = 0;
        }
      }

      const response = await axios.post("http://shaktimahotsav.ch.amrita.edu/php/team.php", event, 
      {headers: headers, 
      maxBodyLength: 100,
          maxContentLength: 100
        });
      console.log(response);
      SuccessMessage();
      toggleForm();
    } catch (error) {
      console.error(error);
      ErrorMessage("There was an error submitting your data.");
    }
  };
  return (
    <div className=" popup">
      <div>
        <div className="close-btn" onClick={toggleForm}>
            X
        </div>
      <div elevation={3} className="paper" >
        <h4 className="title">
          Register
        </h4>
        <form className="form" onSubmit={handleSubmit(Submit)}>
            <div className="input">
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                {...register('name', { required: true })}
              />
              {errors.name && <span className="error">Name is required</span>}
            </div>
            <div className="input">
              <TextField
                label="Roll Number"
                variant="outlined"
                fullWidth
                {...register('rollNumber', { required: true , validate:{
                  minLength: (v) => v.length >= 5,
                  matchPattern: (v) => /^CH.EN.U4+/.test(v),
                }})}
              />
              {errors.rollNumber?.type === "required" && (
    <small>Roll Number is required</small>
  )}
              {errors.rollNumber?.type === "matchPattern" && (
    <small>Username should start with CH.EN.U4...</small>
  )}
            </div>
          <div className="input">
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                {...register('email', { required: "Email is required" , validate: {
                  maxLength: (v) =>
                    v.length <= 50 || "The email should have at most 50 characters",
                  matchPattern: (v) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                    "Email address must be a valid address",
                }})}
              />
              {errors.email?.message && (
    <small>{errors.email.message}</small>
  )}
            </div>
            <div className="input">
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                {...register('phoneNumber', { required: "Phone Number is required", validate:{
                  maxLength: (v) =>
    v.length <= 10 || "The Phone number should have 10 digits",
    minLength: (v) =>
    v.length >= 10 || "The Phone number should have 10 digits",
                } })}
              />
              {errors.phoneNumber?.message && (
    <small>{errors.phoneNumber.message}</small>
  )}
            </div>
          <div className="checkboxes">
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Garba / Dandiya" {...register('Check1')}/>
              <FormControlLabel control={<Checkbox />} label="Lalita Sahasranama" {...register('Check2')}/>
              <FormControlLabel control={<Checkbox />} label="Discipline Commitee" {...register('Check3')}/>
              <FormControlLabel control={<Checkbox />} label="Volutneers" {...register('Check4')}/>
              <FormControlLabel control={<Checkbox />} label="Another one idk" {...register('Check5')}/>
            </FormGroup>
          </div>
          <Button variant="contained" style={{marginTop :"20px"}} type="submit" className="btn">
            Submit
          </Button>
        </form>
        </div>
        </div>
    </div>
  );
};

export default FormAbout;

