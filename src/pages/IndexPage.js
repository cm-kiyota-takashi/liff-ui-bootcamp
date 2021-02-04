import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//
import NavigationBar from "../components/NavigationBar";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  content: {
    display: "flex",
    height: "calc(100% - 56px)",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: "72px",
  },
  navigationBar: {
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
});

export default function IndexPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.text}>🏠</div>
      </div>
      <div className={classes.navigationBar}>
        <NavigationBar currentValue="home" />
      </div>
    </div>
  );
}
