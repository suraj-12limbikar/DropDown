import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
const options = [
  { label: "Reactjs", value: "reactjs" },
  { label: "Nodejs", value: "nodejs" },
  {
    label: "Javascipt",
    value: "javascipt",
  },
];

const Dropdown = () => {
  const [selected, setSelected] = useState([]);

  return (
    <Grid container>
      {/* <Card
        container
        style={{  boxShadow: "1px 1px 3px 3px #ccc" }}
      > */}
      <Grid item xs={12}>
        <h1>Multi Select Subject</h1>
        <pre>{JSON.stringify(selected)}</pre>
      </Grid>
      <Grid item xs={12}>
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
        />
      </Grid>
      {/* </Card> */}
    </Grid>
  );
};

export default Dropdown;
