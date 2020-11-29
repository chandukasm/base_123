import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Upload = (props) => {
  const [file, setFile] = useState([]);
  const [loaded, setloaded] = useState(0);
  const [sender, setsender] = useState(3);
  const [patient, setpatient] = useState({});

  const notify = (msg, type) => {
    if (type === 1) {
      toast.error(msg, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
    if (type === 0) {
      toast.success(msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  useEffect(() => {
    try {
      const patient = props.location.payload;
      setpatient(patient);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleOnChange = (e) => {
    if (e.target.files.length > 3) {
      notify("3 files maximum", 1);
      setloaded(0);
      return;
    } else {
      setFile(e.target.files);
    }

    console.log(file.length);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let config = {
      headers: {
        sender,
        id: patient.index,
        // id: 8,
      },
    };
    const data = new FormData();

    for (let index = 0; index < file.length; index++) {
      data.append("file", file[index]);
      // console.log(file[index]);
    }
    // data.append("file", file);
    try {
      const res = await axios.post(
        `http://localhost:3000/api/patient/${patient.index}/upload`,
        data,
        config
      );
      notify(res.data, 0);
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data.message);
      notify(error.response.data.message, 1);
    }
  };
  return (
    <div>
      <ToastContainer />
      {/* Same as */}

      <Grid container justify="center">
        <Grid item xs={12} sm={8}>
          <div className="col-md-6">
            <form method="post" action="#" id="#" onSubmit={(e) => onSubmit(e)}>
              <div className="form-group files">
                <label>Upload Your File </label>
                <input
                  type="file"
                  className="form-control"
                  name="file"
                  multiple
                  onChange={(e) => handleOnChange(e)}
                />
              </div>

              <button
                type="submit"
                disabled={file.length == 0 || file.length > 3 ? true : false}
              >
                Upload
              </button>
            </form>
          </div>
        </Grid>
      </Grid>
      <ToastContainer />
    </div>
  );
};

export default Upload;
