import { Answers } from '@/pages/profile';
import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const ProfileDetails = () => {
  const router = useRouter();

  const [answers, setAnswers] = useState<Answers>({
    activities: "",
    travelTypes: "",
    idealExperience: "",
    expectations: "",
    languages: "",
    gender: "",
    name: "",
  });

  useEffect(() => {
    const storedAnswers = localStorage.getItem("answers");
    const parsedAnswers = storedAnswers ? JSON.parse(storedAnswers) : {};
    console.log('test')

    setAnswers(parsedAnswers);
  }, []);

  const goBack = () => {
    router.push("/profile");
  };

  const onHandleStart = ()=> {

  }

  return (
    <main style={{background: 'url(/bg.jpg)', backgroundSize: 'cover', height: '100vh'}}>
        <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <Card variant="elevation">
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12}>
                      <Typography variant="h2" gutterBottom>
                        Λεπτομέρειες προφίλ WanderMate
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">Όνομα:</Typography>
                      <Typography variant="body2">{answers.name}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">Φύλο:</Typography>
                      <Typography variant="body2">{answers.gender}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">Αγαπημένες δραστηριότητες και ενδιαφέροντα:</Typography>
                      <Typography variant="body2">{answers.activities}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">Προτιμώμενοι τύποι ταξιδιών:</Typography>
                      <Typography variant="body2">{answers.travelTypes}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">Ιδανική εμπειρία ταξιδιού:</Typography>
                      <Typography variant="body2">{answers.idealExperience}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">Προσδοκίες από έναν σύντροφο ταξιδιού:</Typography>
                      <Typography variant="body2">{answers.expectations}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">Γλώσσες:</Typography>
                      <Typography variant="body2">{answers.languages}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container justifyContent='end'>
                  <Grid item xs={2}>
                      <Box display="flex" justifyContent="flex-end" mt={2}>
                      <Button variant="contained" type="submit" color="secondary" onClick={goBack}>
                          Πισω
                        </Button>
                      </Box>
                    </Grid>
                    <Grid item xs={2}>
                      <Box display="flex" justifyContent="flex-end" mt={2}>
                      <Button variant="contained" type="submit" color="primary" onClick={onHandleStart}>
                          Παμε
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
  );
};

export default ProfileDetails;
