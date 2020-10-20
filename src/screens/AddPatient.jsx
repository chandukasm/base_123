import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";

function AddPatient() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      f_name: f_name,
      l_name: l_name,
      gender: gender,
      dob: `${yy}-${mm}-${dd}`,
      address: address,
      id: id,
      tel: tel,
    };
    console.log(data);
    try {
      const res = axios.post("http://localhost:3000/api/patient", data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    button: {
      marginLeft: 10,
    },
  }));
  const classes = useStyles();
  const [id, setid] = useState("");
  const [f_name, setf_name] = useState("");
  const [l_name, setl_name] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [yy, setyy] = useState("");
  const [mm, setmm] = useState("");
  const [dd, setdd] = useState("");
  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant="h2" display="block">
                Add Patient
              </Typography>
              <Divider variant="middle" />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth="true"
                id="id"
                label="Patinet ID Number"
                name="id"
                // error={id.length < 10 ? true : false}
                autoFocus
                onChange={(e) => setid(e.currentTarget.value)}
              />

              <TextField
                variant="outlined"
                margin="normal"
                // required
                fullWidth="true"
                id="f_name"
                label="Patinet First Name"
                name="firstName"
                onChange={(e) => setf_name(e.currentTarget.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                // required
                fullWidth="true"
                id="l_name"
                label="Patinet Last Name"
                name="l_Name"
                onChange={(e) => setl_name(e.currentTarget.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                // required
                fullWidth="true"
                id="tel"
                label="Patinet Telephone"
                name="tel"
                onChange={(e) => setTel(e.currentTarget.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                // required
                fullWidth="true"
                id="address"
                label="Patinet Address"
                name="address"
                onChange={(e) => setAddress(e.currentTarget.value)}
              />

              <Typography align="left" style={{ marginBottom: -18 }}>
                DOB
              </Typography>

              <Grid container spacing={1} direction="row">
                <Grid item xs={4}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    // required
                    fullWidth="true"
                    id="yyyy"
                    label="YYYY"
                    name="YYYY"
                    type="number"
                    onChange={(e) => setyy(e.currentTarget.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    // required
                    fullWidth="true"
                    id="mm"
                    name="MM"
                    label="MM"
                    type="number"
                    onChange={(e) => setmm(e.currentTarget.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="DD"
                    variant="outlined"
                    margin="normal"
                    // required
                    fullWidth="true"
                    id="dd"
                    name="DD"
                    type="number"
                    onChange={(e) => setdd(e.currentTarget.value)}
                  />
                </Grid>

                <Grid item xs={2}>
                  <Typography align="left">Gender :</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography align="left">{gender}</Typography>
                </Grid>
                <Grid item xs={8} align="left">
                  <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    onClick={() => setGender("Male")}
                  >
                    male
                  </Button>{" "}
                  <Button
                    color="secondary"
                    variant="contained"
                    size="large"
                    style={{ marginLeft: 10 }}
                    onClick={() => setGender("Female")}
                  >
                    female
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Divider variant="fullWidth='true'" />
                  <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    style={{ margin: 20 }}
                  >
                    SUBMIT
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default AddPatient;
