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

const Form = ({change}) => {
  function toggleForm() {
    change();
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {day1}
  });

  const Submit = async(event) => {
    try {
      const headers = {
        'Content-Type': 'application/json; charset=UTF-8',
      }
      for (let i=0;i < 11; i++){
        if (event["day" + i.toString()] == ''){
          event["day" + i.toString()] = 0;
        }
      }
      const response = await axios.post("http://shaktimahotsav.ch.amrita.edu/php/submit.php", event, 
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
        <form className="form" onSubmit={handleSubmit(Submit)} id="FormRegister">
        <div className="input">
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                {...register('name', { required: true })}
              />
              {errors.name && <small className="error">Name is required</small>}
            </div>
            <div className="input">
              <TextField
                label="Roll Number"
                variant="outlined"
                fullWidth
                {...register('rollNumber', { required: "Roll Number is required" , validate:{
                  matchPattern: (v) => /^CH.EN.U4+/.test(v) || "Username should start with CH.EN.U4...",
                }})}
              />
              {errors.rollNumber?.message && (
    <small>{errors.rollNumber?.message}</small>
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
              <FormControlLabel control={<Checkbox />} label="Day 1" {...register('day1')}/>
              <FormControlLabel control={<Checkbox />} label="Day 2" {...register('day2')}/>
              <FormControlLabel control={<Checkbox />} label="Day 3" {...register('day3')}/>
              <FormControlLabel control={<Checkbox />} label="Day 4" {...register('day4')}/>
              <FormControlLabel control={<Checkbox />} label="Day 5" {...register('day5')}/>
              <FormControlLabel control={<Checkbox />} label="Day 6" {...register('day6')}/>
              <FormControlLabel control={<Checkbox />} label="Day 7" {...register('day7')}/>
              <FormControlLabel control={<Checkbox />} label="Day 8" {...register('day8')}/>
              <FormControlLabel control={<Checkbox />} label="Day 9" {...register('day9')}/>
              <FormControlLabel control={<Checkbox />} label="Day 10" {...register('day10')}/>
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

export default Form;
