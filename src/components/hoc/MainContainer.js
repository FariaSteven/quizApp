import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { hocStylesConfig } from '../../stylesConfig/hocStylesConfig'

const MainContainer = (props) => {
  const name = localStorage.getItem("name");
  const corrects = localStorage.getItem("corrects")
  const {showResults} = props

  const useStyles = makeStyles(hocStylesConfig())
  const classes = useStyles()

  return (
    <div className={classes.mainContainerWrapper}> 
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={11} sm={11} md={11} lg={12} xl={7}>
          <Paper className={classes.mainCard}>
            <div style={{display: "flex", gap: "30px"}}>
              <Typography className={classes.text}>{name}</Typography>
              {showResults && <Typography className={classes.text}>{"acertos " + corrects}</Typography>}
            </div>
            {props.children}
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default MainContainer
