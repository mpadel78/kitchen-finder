import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { deepOrange, green, deepPurple, blueGrey } from "@mui/material/colors";
import SinkSide from "../Images/SinkSide.jpg";
import StoveSide from "../Images/StoveSide.jpg";

function Location() {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  return (
    <>
      <Grid container direction="row" spacing={1}>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{
            backgroundColor: `${green[300]}`,
            width: "90%",
            margin: "3vw",
          }}
        >
          <Typography>
            <strong>Check image below to find out where it is</strong>
          </Typography>
        </Grid>

        {/*Here starts the items and location
         */}

        <Grid item xs={12}>
          <p>
            The location of your requested item is at{" "}
            <strong>{state.place}</strong>
          </p>{" "}
          <Link to="/">
            {" "}
            <p>Find next item</p>
          </Link>
          {state.place.includes("Stoveside") ? (
            <img src={StoveSide} style={{ maxWidth: "100%" }} />
          ) : (
            <img src={SinkSide} style={{ maxWidth: "100%" }} />
          )}
        </Grid>
        <br />
      </Grid>
    </>
  );
}

export default Location;
