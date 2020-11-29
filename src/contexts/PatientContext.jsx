import axios from "axios";
import React, { Component, createContext, useEffect, useState } from "react";

export const PatientContext = createContext();

export const PatientContextProvider = (props) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    let progress = 0;

    const dbPatients = async () => {
      const res = await axios.get("http://localhost:3000/api/patient/all");
      setPatients(res.data);
    };
    dbPatients();
    // axios.get("http://localhost:3000/api/patient/all", {
    //   onDownloadProgress: (e) => {
    //     progress;
    //     console.log(progress);
    //   },
    // });
  }, []);

  return (
    <PatientContext.Provider value={[patients, setPatients]}>
      {props.children}
    </PatientContext.Provider>
  );
};
