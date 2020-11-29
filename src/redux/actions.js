import axios from "axios";
import { GET_PATIENTS } from "./actionTypes";

export const get_patients = (patients) => {
  return {
    type: GET_PATIENTS,
    payload: patients,
  };
};

export const get_patientsfromDb = () => {
  return async function (dispatch) {
    try {
      const { data: patients } = await axios.get(
        "http://localhost:3000/api/patient/all"
      );

      dispatch(get_patients(patients));
    } catch (error) {
      console.log(error);
    }
  };
};
