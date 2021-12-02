import { Grid, InputBase, InputLabel, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainContainer from "../../components/hoc/MainContainer";
import { landingStylesConfig } from "../../stylesConfig/landingStylesConfig";

const Landing = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e);
    console.log(name);
  };

  const saveName = () => {
    localStorage.setItem("name", name);
  };

  const useStyles = makeStyles(landingStylesConfig());
  const classes = useStyles();
  return (
    <MainContainer>
      <Grid container spacing={3}>
        <Grid item xs={11} sm={12} md={12} lg={12} xl={12}>
          <Typography className={classes.landingLabel}>
            Insira seu nome para iniciar
          </Typography>
        </Grid>
        <Grid item xs={11} sm={12} md={12} lg={12} xl={4}>
          <InputBase
            fullWidth
            onChange={(e) => handleChange(e.target.value)}
            className={classes.landingInput}
          />
          <Link to="/quiz"  onClick={() => saveName()}>
            <button className={classes.landingButton}>Iniciar</button>
          </Link>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default Landing;
