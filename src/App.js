import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Shipping address", "Payment details", "Review your order"];

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isAutomatic, setIsAutomatic] = React.useState(false);
  const [isManual, setIsManual] = React.useState(true);

  const handleNext = () => {
    setActiveStep(3);
  };
  const sorteoFecha = () => {
    setActiveStep(1);
  };

  const sorteoSubscripcion = () => {
    setActiveStep(2);
  };

  const handleBack = () => {
    setActiveStep(0);
  };

  const handleAutomatic = () => {
    setIsAutomatic(!isAutomatic);
    isManual && setIsManual(!isManual);
  };
  const handleManual = () => {
    setIsManual(!isManual);
    isAutomatic && setIsAutomatic(!isAutomatic);
  };

  const OpcionesCompra = () => {
    return (
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          onClick={sorteoFecha}
          sx={{ mt: 3, ml: 25, mr: 25 }}
        >
          Ticket para sorteo de Hoy
        </Button>
        <Button
          variant="contained"
          onClick={sorteoFecha}
          sx={{ mt: 3, ml: 25, mr: 25 }}
        >
          Ticket para sorteo de otra fecha
        </Button>
        <Button
          variant="contained"
          onClick={sorteoSubscripcion}
          sx={{ mt: 3, ml: 25, mr: 25 }}
        >
          Subscripcion
        </Button>
      </Box>
    );
  };

  const OpcionesFecha = () => {
    return (
      <FormGroup>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox checked={isAutomatic} onChange={handleAutomatic} />
            }
            label="Automatico"
          />
          <FormControlLabel
            disabled={!isAutomatic}
            control={<Checkbox />}
            label="Revancha"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel
            control={<Checkbox checked={isManual} onChange={handleManual} />}
            label="Escoge tu numero"
          />
          <FormControlLabel
            disabled={!isManual}
            control={<Checkbox />}
            label="Revancha"
          />
        </div>
        {numberPicker()}
      </FormGroup>
    );
  };

  const numberPicker = () => {
    return (
      <Box
        style={{
          visibility: isAutomatic ? "hidden" : "",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
        }}
      >
        <TextField
          required
          id="cant"
          name="cant"
          label="Numero: "
          type="number"
          autoComplete="Numero"
          variant="standard"
          number
        />{" "}
        <TextField
          required
          id="cant"
          name="cant"
          label="Numero: "
          type="number"
          autoComplete="Numero"
          variant="standard"
          number
        />{" "}
        <TextField
          required
          id="cant"
          name="cant"
          label="Numero: "
          type="number"
          autoComplete="Numero"
          variant="standard"
          number
        />{" "}
        <TextField
          required
          id="cant"
          name="cant"
          label="Numero: "
          type="number"
          autoComplete="Numero"
          variant="standard"
          number
        />{" "}
        <TextField
          required
          id="cant"
          name="cant"
          label="Numero: "
          type="number"
          autoComplete="Numero"
          variant="standard"
          number
        />{" "}
        <TextField
          required
          id="cant"
          name="cant"
          label="SuperBall: "
          type="number"
          autoComplete="Numero"
          variant="standard"
          number
        />
      </Box>
    );
  };

  const OpcionesSubscripcion = () => {
    return (
      <FormGroup>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel control={<Checkbox />} label="Mes" />
          <FormControlLabel control={<Checkbox />} label="6 Meses" />
          <FormControlLabel control={<Checkbox />} label="Anual" />
        </div>
        <h2>Sorteos por semana:</h2>
        <FormControlLabel control={<Checkbox />} label="1" />
        <FormControlLabel control={<Checkbox />} label="2" />
        <h2>Tickets por sorteo:</h2>
        <TextField
          required
          id="cant"
          name="cant"
          label="Cantidad: "
          type="number"
          autoComplete="cantidad"
          variant="standard"
          number
        />
        <h2>Revancha:</h2>
        <FormControlLabel control={<Checkbox />} label="Si" />
        <h2>Automatico:</h2>
        <FormControlLabel
          control={
            <Checkbox checked={isAutomatic} onChange={handleAutomatic} />
          }
          label="Si"
        />
        {numberPicker()}
      </FormGroup>
    );
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <OpcionesCompra />;
      case 1:
        return <OpcionesFecha />;
      case 2:
        return <OpcionesSubscripcion />;
      default:
        throw new Error("Unknown step");
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Supper Lotto
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            COMPRA TU LOTERIA VIRTUAL
          </Typography>
          <br></br>
          <br></br>
          <br></br>
          {/* <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper> */}
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Gracias por tu orden.
              </Typography>
              <Typography variant="subtitle1">
                Tu orden con numero a sido creada #2001539. Te enviaremos un
                email a tu cuenta con la factura y el numero de confirmacion.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <>
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      {"Place order"}
                    </Button>
                  </>
                )}
              </Box>
              <br></br>
              <br></br>
              <br></br>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
