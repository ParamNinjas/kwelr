import React from "react";
import { Container, Typography, Grid, TextField } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import image1 from "../../img/image1.jpg";
import image2 from "../../img/image2.jpg";
import image3 from "../../img/image3.jpg";
import image4 from "../../img/image4.jpg";
import image5 from "../../img/image5.jpg";
import image6 from "../../img/image6.jpg";
import image7 from "../../img/image7.jpg";
import image8 from "../../img/image8.jpg";
import image10 from "../../img/image10.jpg";
import logo from "../../img/kwelR.png"
import SimpleImageSlider from "react-simple-image-slider";
import "./Home.css"

const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
  const images = [
    { url: image4 },
    { url: image5 },
    { url: image6 },
    { url: image7 },
    { url: image8 },
    { url: image8 },
    { url: image10 },
  ]

const Home = () => {
    const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
    return(
        <div className="Home-con">
           
              <img
                className="logo"
                alt="logo"
                src={logo}
                href="/about"
                />
                <Grid container>
                    <Grid item xs={12} sm ={12} md={8} lg={8}>
                    <div className="form">
                        <Typography className="formHeader" variant="h4">Please FIll in the Form</Typography>
                            <div className="personalInfo">
                                <div className="name">
                                    <TextField
                                        variant="outlined"
                                        className="email"
                                        size="small"
                                        label="Full Name"
                                    />
                                </div>
                                <div className="email">
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        className="email"
                                        label="Email"
                                    />
                                </div>
                                <div className="number">
                                    <TextField
                                        variant="outlined"
                                        className="email"
                                        size="small"
                                        label="Phone Number"
                                    />
                                </div>
                            </div>
                            <div className="numbers">
                            
                                <div>
                                    <TextField
                                    variant="outlined"
                                    size="small"
                                    label="Card Number"
                                    />
                                </div>
                            </div>
                            <div className="resAdd">
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    style ={{width: '68%'}}
                                    label="Residential Address"
                                />
                            </div>
                            <div className="dropdowns">
                                <div className="Drop1">
                            <FormControl style={{minWidth: 250}}  className={classes.formControl}>
                                {/* <InputLabel id="demo-controlled-open-select-label">Average Monthly  cost</InputLabel> */}
                                <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                label="Average Monthly  cost"
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                className="dropdown"
                                // value={age}
                                // onChange={handleChange}
                                fullWidth
                                variant="outlined"
                                >
                                {/* <MenuItem value="">
                                    <em>None</em>
                                </MenuItem> */}
                                <MenuItem value={10}>R1000</MenuItem>
                                <MenuItem value={20}>R2000</MenuItem>
                                <MenuItem value={30}>R3000</MenuItem>
                                <MenuItem value={40}>R4000</MenuItem>
                                <MenuItem value={50}>R5000</MenuItem>
                                </Select>
                            </FormControl>
                            </div>
                            <div className="drop2">
                            <FormControl style={{minWidth: 250}}  className={classes.margin}>
                                {/* <InputLabel id="demo-customized-select-label">Business Unit</InputLabel> */}
                                <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                variant="outlined"
                                className="dropdown2"
                                //   value={age}
                                //   onChange={handleChange}
                                //   input={<BootstrapInput />}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                          
                            </div>
                           
                            </div>
                            <Button 
                                className="btnReg"
                                variant="outlined"
                            >
                                Register
                            </Button>
                        </div>

                    </Grid>
                    <Grid item xs={12} sm ={12} md={4} lg={4}>
                    <div className="imageSlider">
                                <SimpleImageSlider
                                    width={496}
                                    height={604}
                                    images={images}
                                    showBullets={false}
                                    autoPlay={true}
                                    showNavs={false}
                                />
                                </div>
                    </Grid>
                </Grid>
                 
                   
                       
         
        </div>
    )

}

export default Home