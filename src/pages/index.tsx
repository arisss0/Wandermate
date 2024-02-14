import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';
import { Box, Button, Card, CardContent, Container, Grid, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    router.push("/profile");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    // Call fetchData when the component mounts
    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>WanderMate</title>
        <meta name="description" content="Ανακαλύψτε τον κόσμο με την WanderMate!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{background: 'url(/bg.jpg)', backgroundSize: 'cover', height: '100vh', overflow: 'hidden'}}>
        <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <Card variant="elevation">
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6}>
                      <Image src="/logo.png" alt="WanderMate logo" width={400} height={400} />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h2" gutterBottom>
                        Ανακαλύψτε τον κόσμο με την WanderMate!
                      </Typography>
                      <Typography variant="body1">
                        Η WanderMate σας συνδέει με ταξιδιώτες που μοιράζονται το πάθος σας για εξερεύνηση.
                        Βρείτε τον τέλειο σύντροφο για πεζοπορία, backpacking, road trip, city break και πολλά
                        άλλα!
                      </Typography>
                      <Box display="flex" justifyContent="flex-end" mt={2}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => setShowForm(true)}
                        >
                          Εγγραφείτε τώρα!
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            {showForm && (
              <Grid item xs={12}>
                <Card variant="outlined">
                  <CardContent>
                    <form>
                      <TextField
                        margin="normal"
                        fullWidth
                        label="Όνομα"
                        required
                      />
                      <TextField
                        margin="normal"
                        fullWidth
                        label="Email"
                        type="email"
                        required
                      />
                      <TextField
                        margin="normal"
                        fullWidth
                        label="Κωδικός πρόσβασης"
                        type="password"
                        required
                      />
                      <Button variant="contained" type="submit" color="primary" onClick={handleClick}>
                        Εγγραφή
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </Grid>
        </Container>
      </main>
    </>
  );
}
