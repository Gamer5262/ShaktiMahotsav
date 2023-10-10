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
      const response = await axios.post("http://shaktimahotsav.ch.amrita.edu/php/team.php", event, 
      {headers: headers, 
      maxBodyLength: 100,
          maxContentLength: 100
        });
      console.log(response);
      SuccessMessage();
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
                {...register('rollNumber', { required: true })}
              />
              {errors.rollNumber && <span className="error">Roll Number is required</span>}
            </div>
          <div className="input">
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                {...register('email', { required: true })}
              />
              {errors.email && <span className="error">Email is required</span>}
            </div>
            <div className="input">
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                {...register('phoneNumber', { required: true })}
              />
              {errors.phoneNumber && <span className="error">Phone Number is required</span>}
            </div>
          <div className="checkboxes">
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Garba / Dandiya" {...register('Garba / Dandiya')}/>
              <FormControlLabel control={<Checkbox />} label="Lalita Sahasranama" {...register('Lalita Sahasranama')}/>
              <FormControlLabel control={<Checkbox />} label="Discipline Commitee" {...register('Discipline Commitee')}/>
              <FormControlLabel control={<Checkbox />} label="Volutneers" {...register('Volutneers')}/>
              <FormControlLabel control={<Checkbox />} label="Another one idk" {...register('Another one idk')}/>
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

