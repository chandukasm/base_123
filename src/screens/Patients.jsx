import {
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import FingerprintRoundedIcon from "@material-ui/icons/FingerprintRounded";
import PeopleAltTwoToneIcon from "@material-ui/icons/PeopleAltTwoTone";
import { useSelector, useDispatch } from "react-redux";
import { get_patientsfromDb } from "../redux/actions";
import { PatientContext } from "../contexts/PatientContext";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: 10,
  },
  button: {
    marginLeft: 10,
  },
}));

function Patients(props) {
  const [patients, setPatients] = useContext(PatientContext);

  const classes = useStyles();
  const [res, setRes] = useState([]);

  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [tri, setTri] = useState("");

  //async function are not allowed directly in a function so create a function in the
  //effect hook and call it inside the effect hook
  // useEffect(() => {
  //   if (state.patients.length === 0) {
  //     dispatch(get_patientsfromDb());
  //   }
  // }, []);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const serachByID = (e) => {
    setOne(e.currentTarget.value);

    let searchInput = e.currentTarget.value.replace(
      /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
      ""
    );
    console.log(e.currentTarget.name);
    let reg = new RegExp("^" + searchInput, "i"); //i for caseinsensitive look regx at test/resx
    //^mathces the start
    let res = patients.filter((patient) => reg.test(patient.id));

    if (two.length > 0) {
      let reg = new RegExp("^" + two, "i");
      res = res.filter((patient) => reg.test(patient.f_name));
    }
    if (tri.length > 0) {
      let reg = new RegExp("^" + tri, "i");
      res = res.filter((patient) => reg.test(patient.l_name));
    }
    if (one.length == 0 && two.length == 0 && tri.length == 0) {
      setRes([]);
    }
    setRes(res);
    console.log(res);
  };
  const serachByFirst = (e) => {
    setTwo(e.currentTarget.value);
    let searchInput = e.currentTarget.value.replace(
      /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
      ""
    );
    let reg = new RegExp("^" + searchInput, "i");
    let res = patients.filter((patient) => reg.test(patient.f_name));
    if (one.length > 0) {
      let reg = new RegExp("^" + one, "i");
      res = res.filter((patient) => reg.test(patient.id));
    }

    if (tri.length > 0) {
      let reg = new RegExp("^" + tri, "i");
      res = res.filter((patient) => reg.test(patient.l_name));
    }
    if (one.length == 0 && two.length == 0 && tri.length == 0) {
      setRes([]);
    }

    setRes(res);
  };

  const serachByLast = (e) => {
    setTri(e.currentTarget.value);
    let searchInput = e.currentTarget.value.replace(
      /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
      ""
    );
    let reg = new RegExp("^" + searchInput, "i"); //i for caseinsensitive look regx at test/resx
    //^mathces the start
    let res = patients.filter((patient) => reg.test(patient.l_name));
    if (one.length > 0) {
      let reg = new RegExp("^" + one, "i");
      res = res.filter((patient) => reg.test(patient.id));
    }
    if (two.length > 0) {
      let reg = new RegExp("^" + two, "i");
      res = res.filter((patient) => reg.test(patient.f_name));
    }
    if (one.length == 0 && two.length == 0 && tri.length == 0) {
      setRes([]);
    }
    setRes(res);
    console.log(res);
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className={classes.root} style={{ overflow: "hidden" }}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">
              <strong>Search patient</strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Enter Patient's ID"
              variant="outlined"
              name="id"
              fullWidth="true"
              type="number"
              onChange={(e) => serachByID(e)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FingerprintRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Enter Patient's First Name"
              variant="outlined"
              fullWidth="true"
              name="first"
              onChange={(e) => serachByFirst(e)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Enter Patient's Last Name"
              variant="outlined"
              fullWidth="true"
              name="last"
              onChange={(e) => serachByLast(e)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PeopleAltTwoToneIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          {res.length > 0 ? (
            <TableContainer component={Paper} style={{ marginBottom: 10 }}>
              <Grid
                container
                spacing={2}
                style={{
                  alignItems: "center",
                }}
              >
                <Grid item xs={12} md={4}>
                  <Typography variant="h6">
                    {/* {searchPressed && searchReasults.length === 0
                        ? "No Patient With This Name"
                        : ""} */}
                  </Typography>
                </Grid>
              </Grid>

              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Tel.</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Reports</TableCell>
                    <TableCell>Upload</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {res.map((p) => (
                    <TableRow key={p.id}>
                      <TableCell component="th" scope="row">
                        {p.id}
                      </TableCell>
                      <TableCell>
                        {/* <Link
                            to={`/patients/records/${p.id}`}
                            style={{ color: "white" }}
                          > */}
                        {p.f_name}
                        {/* </Link> */}
                      </TableCell>
                      <TableCell>{p.l_name}</TableCell>
                      <TableCell>{p.gender}</TableCell>
                      <TableCell>{p.tel}</TableCell>

                      <TableCell>{p.address}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          size="small"
                          component={Link}
                          to={{
                            pathname: `/patients/reports/${p.index}`,
                            payload: p,
                          }}
                        >
                          Reports
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          size="small"
                          // color="primary"
                          component={Link}
                          style={{
                            textDecoration: "inherit",
                          }}
                          to={{
                            pathname: `/patients/upload/${p.id}`,
                            payload: p,
                          }}
                        >
                          Upload
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Grid item alignContent="center" xs={12}>
              <Typography variant="h5">Find the Patients here</Typography>
            </Grid>
          )}
        </Grid>
      </Paper>
    </div>
  );
}

export default Patients;
