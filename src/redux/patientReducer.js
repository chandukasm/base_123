const { GET_PATIENTS, SEARCH_RESULTS } = require("./actionTypes");

const initialState = {
  description: "",
  patients: [],
  filtered: [],

  searchPressed: false,
};

const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PATIENTS: {
      // console.log(action.payload);
      return {
        ...state,
        patients: action.payload,
      };
    }

    default:
      return state;
  }
};

export default patientReducer;
