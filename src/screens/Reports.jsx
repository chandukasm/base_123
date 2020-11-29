import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { get_patientsfromDb } from "../redux/actions";

// address: "9880 Brown Lane"
// created: "2020-10-18T15:22:57.589Z"
// dob: "1994-02-15T18:30:00.000Z"
// f_name: "Donelle"
// gender: "Female"
// id: "9785335038"
// index: 224
// l_name: "Pettisall"
// tel: "+63 784 684 7673"

const Reports = (props) => {
  // const [patient, setPatient] = useState({});
  // const [reports, setReports] = useState([]);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // const classes = useStyles();
  const [patients, setPatients] = useState(state.patients);

  useEffect(() => {
    // const { id } = props.location.payload.id;
    // const fetchData = async () => {
    //   try {
    //     const { data: reports } = await axios.get(
    //       `http://localhost:3000/api/patient/${id}`
    //     );
    //     setReports(reports);
    //     console.log(reports);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchData();
    dispatch(get_patientsfromDb());

  }, [props]);

  return (
    <div>
      <Grid container>
        <Typography variant="h1">these are the patients</Typography>
        {state.patients.length === 0 ? (
          <Typography variant="h1">these are the patients</Typography>
        ) : (
          state.patients.map((p) => <li>{p.f_name}</li>)
        )}
      </Grid>
    </div>
  );
};

export default Reports;
