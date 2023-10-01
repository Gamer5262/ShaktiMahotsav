import React from "react";
import { Button, Paper, Typography, TextField, FormGroup, FormControlLabel, Checkbox  } from "@mui/material";
import { useForm } from "react-hook-form";
import "./Form.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container-form">
      <Paper elevation={3} className="paper" style={{ maxWidth: "70vw", minWidth: "60vw", padding: "50px", color: "#fff" }}>
        <Typography variant="h5" className="title">
          Register
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <div className="input">
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                {...register("name", { required: true })}
              />
              {errors.name && <span className="error">Name is required</span>}
            </div>
            <div className="input">
              <TextField
                label="Roll Number"
                variant="outlined"
                fullWidth
                {...register("rollNumber", { required: true })}
              />
              {errors.rollNumber && <span className="error">Roll Number is required</span>}
            </div>
          </div>
          <div className="input-container">
            <div className="input">
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                {...register("email", { required: true })}
              />
              {errors.email && <span className="error">Email is required</span>}
            </div>
            <div className="input">
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                {...register("phoneNumber", { required: true })}
              />
              {errors.phoneNumber && <span className="error">Phone Number is required</span>}
            </div>
          </div>
          <div >
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Day 1" />
              <FormControlLabel control={<Checkbox />} label="Day 2" />
              <FormControlLabel control={<Checkbox />} label="Day 3" />
              <FormControlLabel control={<Checkbox />} label="Day 4" />
              <FormControlLabel control={<Checkbox />} label="Day 5" />
              <FormControlLabel control={<Checkbox />} label="Day 6" />
              <FormControlLabel control={<Checkbox />} label="Day 7" />

            </FormGroup>
          </div>
          <Button variant="contained" style={{marginTop :"20px"}} type="submit" className="btn">
            Submit
          </Button>
        </form>
    </Paper>
    </div>
  );
};

export default Form;
