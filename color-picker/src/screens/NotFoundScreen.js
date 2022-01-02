import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import NotFoundScreenStyles from "../styles/NotFoundScreenStyles";

const NotFoundScreen = ({ classes }) => {
  return (
    <div className={classes.root}>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/" className={classes.goBack}>
        Home
      </Link>
    </div>
  );
};

export default withStyles(NotFoundScreenStyles)(NotFoundScreen);
