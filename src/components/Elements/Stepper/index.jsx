import React from "react";
import { useContext, useState } from "react";
import { useTheme } from '@mui/material/styles';
import { ThemeContext } from '../../../context/ThemeContext';
import  MobileStepper  from '@mui/material/MobileStepper';
import  Button  from '@mui/material/Button';
import  KeyboardArrowLeft  from '@mui/icons-material/KeyboardArrowLeft';
import  KeyboardArrowRight  from '@mui/icons-material/KeyboardArrowRight';

// Penting: Properti yang diterima di komponen (desc) harus sama dengan nama 
// yang dikirim dari komponen induk (CardBalance). 
// Properti ini berisi array data yang akan digunakan untuk navigasi 
// dan menampilkan konten tiap langkah (activeStep).
// stepper itu titik bagian total balance itu 
const Stepper = (props) => {
    //Mendapatkan properti "desc" yang berisi array data, dengan default [] jika tidak diberikan
    const { desc } = props;

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((preActiveStep) => preActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((preActiveStep) => preActiveStep - 1);
    }

    const dataNum = desc.length;

    const { theme: themeMode } = useContext(ThemeContext);

  return (
    <>
    <div>{desc[activeStep]}</div>
    <MobileStepper
        variant="dots"
        steps={dataNum}
        position="static"
        activeStep={activeStep}
        sx={{ 
            maxWidth: "100%", 
            flexGrow: 1,
            "& .MuiMobileStepper-dot": {
                backgroundColor: "darkgray",
            },
            "& .MuiMobileStepper-dotActive": {
                backgroundColor: themeMode.color,
            } 
        }}
        nextButton={
            <Button 
            size="small" 
            onClick={handleNext}
            sx={{
                color: "black",
                fontWeight: "bold"
            }} 
            disabled={activeStep === dataNum - 1}
            >
                    Next
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
            </Button>  
        }

        backButton={
            <Button 
            size="small" 
            onClick={handleBack} 
            sx={{
                color: "black",
                fontWeight: "bold"
            }} 
            disabled={activeStep === 0}
            >
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}
                    Previous
            </Button>
        }
    />
    </>
    
  );
};

export default Stepper;