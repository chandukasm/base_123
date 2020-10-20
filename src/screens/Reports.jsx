import { Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";

const Reports = () => {
  useEffect(() => {
    const { id } = this.props.match.params;
    console.log(id);
  }, []);

  return (
    <div>
      <Grid container>
        <Typography variant="h1">this is the reports</Typography>
      </Grid>
    </div>
  );
};

export default Reports;
