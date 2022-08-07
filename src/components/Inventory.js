import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { deepOrange, green, deepPurple, blueGrey } from "@mui/material/colors";

function Inventory() {
  const records = [
    {
      item: "Turmeric Besar",
      location: "Stoveside 2",
    },
    {
      item: "Regular masala",
      location: "Stoveside 2",
    },
    {
      item: "Salt nun",
      location: "Stoveside 2",
    },
    {
      item: "Oil tel",
      location: "Pantry",
    },
    {
      item: "Cumin Jeera",
      location: "Stoveside 2",
    },
    {
      item: "Tea Chiyapatti",
      location: "Stoveside 3",
    },
    {
      item: "Coffee",
      location: "Stoveside 3",
    },
    {
      item: "Eggs",
      location: "Stoveside ",
    },
    {
      item: "Rice Chamal",
      location: "Pantry",
    },
    {
      item: "Lentils Dal",
      location: "Pantry",
    },
    {
      item: "Beans Bodi",
      location: "Pantry",
    },
    {
      item: "Plates",
      location: "Stoveside 1",
    },
    {
      item: "Chowmein spaghetti",
      location: "Pantry",
    },
    {
      item: "Sugar chini",
      location: "Stoveside 3",
    },
    {
      item: "Masala backup",
      location: "Sinkside 1",
    },
    {
      item: "Masala special",
      location: "Sinkside 2",
    },
  ];

  //using UseEffect hooks

  const [info, setInfo] = React.useState(records);

  React.useEffect(() => {
    setInfo(records);
    // eslint-disable-next-line
  }, []);

  const requestSearch = (searchedVal) => {
    const filteredRows = info.filter((row) => {
      return row.item.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setInfo(filteredRows);
    console.log(info);
  };

  const cancelSearch = (searchedVal) => {
    setInfo(records);
  };

  return (
    <div>
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
            <strong>Sandeep, Manish and Abhishek's apt no. 158</strong>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{ height: "10vh", width: "90%", margin: "3vw" }}
        >
          <div style={{ width: "90%", margin: "3vw" }}>
            <form>
              <input
                type="text"
                placeholder="Search the kitchen items here!"
                name="search"
                autoFocus
                style={{
                  width: "90%",
                  margin: "3vw",
                  height: "6vh",
                  width: "80vw",
                  borderRadius: "30x",
                  textAlign: "center",
                  boxShadow: "2px 2px 2px 2px #0078AE",
                }}
                onKeyUp={(event) => {
                  event.target.value == ""
                    ? cancelSearch(event.target.value)
                    : requestSearch(event.target.value);
                }}
              ></input>
            </form>
          </div>
        </Grid>

        {/*Here starts the items and location
         */}

        <Grid item xs={12}>
          <Paper style={{ width: "90%", margin: "3vw" }}>
            <TableContainer>
              <Table>
                <TableHead style={{ backgroundColor: `${green[300]}` }}>
                  <TableRow>
                    <TableCell>Items</TableCell>
                    <TableCell align="center">Location</TableCell>
                    <TableCell align="center">Where is this</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {info.map((res) => (
                    <TableRow>
                      <TableCell component="th" scope="rh">
                        {res.item}
                      </TableCell>
                      <TableCell align="center">{res.location}</TableCell>
                      <Link to="/location" state={{ place: `${res.location}` }}>
                        <TableCell align="center">Find</TableCell>
                      </Link>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Inventory;
