import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';

export interface Answers {
  activities: string;
  travelTypes: string;
  idealExperience: string;
  expectations: string;
  languages: string;
  gender: string;
  name: string;
}

export default function Profile() {
  const router = useRouter();

  const [answers, setAnswers] = useState<Answers>({
    gender: '',
    name: '',
    activities: '',
    travelTypes: '',
    idealExperience: '',
    expectations: '',
    languages: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(answers);

    // Αποθήκευση δεδομένων στο Local Storage
    localStorage.setItem("answers", JSON.stringify(answers));
    router.push("/home");

    // TODO: Εμφάνιση μηνύματος επιτυχίας ή ανακατεύθυνση σε άλλη σελίδα
  };

  return (
    <>
      <main style={{background: 'url(/bg.jpg)', backgroundSize: 'cover', height: '100vh'}}>
        <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <Card variant="elevation">
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12}>
                      <Typography variant="h2" gutterBottom>
                        Δημιουργία προφίλ WanderMate
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant="body1">Φύλο:</Typography>
                    <Box sx={{ mt: 1 }}>
                      <FormControl>
                        <RadioGroup
                          name="gender"
                          value={answers.gender}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Άνδρας"
                          />
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Γυναίκα"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    fullWidth
                    label="Όνομα"
                    name="name"
                    value={answers.name}
                    onChange={handleChange}
                  />
                </Grid>
                    <Grid item xs={12}>
                      <TextField
                        margin="normal"
                        fullWidth
                        label="Ποιες είναι οι αγαπημένες σας δραστηριότητες και ενδιαφέροντα;"
                        name="activities"
                        value={answers.activities}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        margin="normal"
                        fullWidth
                        label="Ποιους τύπους ταξιδιών προτιμάτε;"
                        name="travelTypes"
                        value={answers.travelTypes}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        margin="normal"
                        fullWidth
                        label="Ποια είναι η ιδανική εμπειρία ταξιδιού για εσάς;"
                        name="idealExperience"
                        value={answers.idealExperience}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        margin="normal"
                        fullWidth
                        label="Ποιες είναι οι προσδοκίες σας από έναν σύντροφο ταξιδιού;"
                        name="expectations"
                        value={answers.expectations}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        margin="normal"
                        fullWidth
                        label="Ποιες γλώσσες μιλάτε;"
                        name="languages"
                        value={answers.languages}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box display="flex" justifyContent="flex-end" mt={2}>
                      <Button variant="contained" type="submit" color="primary" onClick={handleSubmit}>
                          Αποθήκευση
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};
