import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="sticky"
        color="red"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Base Hospitle Dambulla
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="/add"
              className={classes.link}
            >
              Add
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="reports"
              className={classes.link}
            >
              Reports
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="/stats"
              className={classes.link}
            >
              Stats
            </Link>
          </nav>
          <Button
            href="/login"
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Footer */}
      {/* <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container> */}
      {/* End footer */}
    </React.Fragment>
  );
}

// import React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import Box from "@material-ui/core/Box";
// import Container from "@material-ui/core/Container";
// import { Grid } from "@material-ui/core";

// function ElevationScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 1,
//   });
// }

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default function NavBar(props) {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <ElevationScroll {...props}>
//         <AppBar style={{ background: "black" }}>
//           <Toolbar>
//             <Grid container>
//               <Grid item xs={4}>
//                 <Typography variant="h6"> Base Hospitle Dambulla</Typography>
//               </Grid>

//               <Grid container xs={7} justify="flex-end">
//                 <Grid item xs={1}>
//                   <Typography align="right">Add</Typography>
//                 </Grid>
//                 <Grid item xs={1}>
//                   <Typography align="right"> Search</Typography>
//                 </Grid>
//                 <Grid item xs={1}>
//                   <Typography align="right"> Stats</Typography>
//                 </Grid>
//               </Grid>
//               <Grid item xs={1}></Grid>
//             </Grid>
//           </Toolbar>
//         </AppBar>
//       </ElevationScroll>
//       <Toolbar />
//     </React.Fragment>
//   );
// }
