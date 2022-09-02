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
import image9 from "../../img/image9.jpg";
import image10 from "../../img/image10.jpg";
import logo from "../../img/kwelR.png"
import { Carousel } from '@sefailyasoz/react-carousel'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import ImageGallery from 'react-image-gallery';
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
    // {
    //   original: image1,
    // //   thumbnail: image1,
    // },
    // {
    //     original: image2,
    // //   thumbnail: image2,
    // },
    // {
    //     original: image3,
    //     // thumbnail: image3,
    // },
    {
        original: image4,
        // thumbnail: image3,
    },
    {
        original: image5,
        // thumbnail: image3,
    },
    {
        original: image6,
        // thumbnail: image3,
    },
    {
        original: image7,
        // thumbnail: image3,
    },
    {
        original: image8,
        // thumbnail: image3,
    },
    {
        original: image9,
        // thumbnail: image3,
    },
    {
        original: image10,
        // thumbnail: image3,
    },
  ];

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
        <div>
            <Container>
              <img
                className="logo"
                alt="logo"
                src={logo}
                />
                <Typography className="formHeader" variant="h4">Please FIll in the Form</Typography>
                <Grid container spacing={2}>
             
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div className="form">
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Name"
                            />
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Surname"
                            />
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Card Number"
                            />
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Email"
                            />
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Phone Number"
                            />
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Residential Address"
                            />
                            <div className="dropdowns">
                                <div className="Drop1">
                            <FormControl style={{minWidth: 600}}  className={classes.formControl}>
                                <InputLabel id="demo-controlled-open-select-label">Average Monthly Transport cost</InputLabel>
                                <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
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
                            <FormControl style={{minWidth: 600}}  className={classes.margin}>
                                <InputLabel id="demo-customized-select-label">Business Unit</InputLabel>
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
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div className="imageSlider">
                        <ImageGallery style={{minHeight: 600}} autoPlay items={images} />
                        </div>
                        </Grid>
                </Grid>


            

            </Container>
        </div>
    )

}

export default Home