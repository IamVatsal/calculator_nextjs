"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



export default function Home() {
  return (
    <div className={styles.page}>
      <Container maxWidth="sm" className={styles.container}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '70vh' }} />
        <div className={styles.text}>
        <TextField className={styles.textField} id="standard-basic" label="Standard" variant="standard" InputProps={{
            style: { color: "#444" }
          }}
          />
          </div>
      </Container>
    </div>
  );
}
