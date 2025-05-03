"use client";
import * as React from "react";
import styles from "./Calculator.module.css";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Calculator(){
    return (
        <div className={styles.container}>
            <div className={styles.calculator}>
            <TextField className={styles.textField} id="filled-basic" label="Calculator" variant="filled" />
            <div className={styles.buttons}>
                <Stack spacing={2} direction="row">
                    <Button className={styles.button} variant="text">(</Button>
                    <Button className={styles.button} variant="text">)</Button>
                    <Button className={styles.button} variant="text">%</Button>
                    <Button className={styles.button} variant="text">CE</Button>
                </Stack>
                <Stack spacing={2} direction="row">
                    <Button className={styles.button} variant="text">7</Button>
                    <Button className={styles.button} variant="text">8</Button>
                    <Button className={styles.button} variant="text">9</Button>
                    <Button className={styles.button} variant="text">÷</Button>
                </Stack>
                <Stack spacing={2} direction="row">
                    <Button className={styles.button} variant="text">4</Button>
                    <Button className={styles.button} variant="text">5</Button>
                    <Button className={styles.button} variant="text">6</Button>
                    <Button className={styles.button} variant="text">×</Button>
                </Stack>
                <Stack spacing={2} direction="row">
                    <Button className={styles.button} variant="text">1</Button>
                    <Button className={styles.button} variant="text">2</Button>
                    <Button className={styles.button} variant="text">3</Button>
                    <Button className={styles.button} variant="text">−</Button>
                </Stack>
                <Stack spacing={2} direction="row">
                    <Button className={styles.button} variant="text">0</Button>
                    <Button className={styles.button} variant="text">.</Button>
                    <Button className={styles.button} variant="text">=</Button>
                    <Button className={styles.button} variant="text">+</Button>
                </Stack>
            </div>
            </div>
        </div>
    );
}