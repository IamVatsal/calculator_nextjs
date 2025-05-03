"use client";
import * as React from "react";
import styles from "./Calculator.module.css";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Calculator(){
    const [input, setInput] = React.useState<string>("");
    const [result, setResult] = React.useState<string>("");

    function handleButtonClick(value: string) {
        if (value === "CE" || (result && result === "Error")) {
            // Clear the input and result
            setInput("");
            setResult("");
        }else if (value === "Invalid Input") {
            // Handle invalid input case
            setResult("Invalid Input");
        }
        else if (value === "=") {
            try {
                const evaluatedResult = eval(input);
                setResult(evaluatedResult.toString());
            } catch (error) {
                setResult("Error");
            }
        }else if (result !== "") {
            setInput(result);
            setResult("");
        }
        else if (value === "C") {
            // Clear the last character from the input
            setInput(input.slice(0, -1));
        }
        else {
            // Update the input state with the clicked button value
            setInput((prev) => prev + value);
        }
    }
    
    function renderButton(label: string, value?: string) {
        return (
          <Button
            className={styles.button}
            variant="text"
            onClick={() => handleButtonClick(value ?? label)}
          >
            {label}
          </Button>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.calculator}>
            <TextField className={styles.textField}
            id="filled-basic" 
            label="Calculator" 
            variant="filled" 
            value={result !== "" ? result : input || ""}
            onChange={e => {
                setInput(e.target.value);
                setResult(""); // Clear result when user types
              }}
            onKeyDown={e => {
                if (e.key === "Enter") {
                  handleButtonClick("=");
                }else if(e.key === "Backspace"){
                    setInput(input.slice(0, -1)); // Remove last character from input{
                }else if(e.key === "Escape"){
                    setInput(""); // Clear input on Escape key
                }
            }}
            />
            <div className={styles.buttons}>
                <Stack spacing={2} direction="row">
                    {renderButton("(")}
                    {renderButton(")")}
                    {renderButton("CE")}
                    {renderButton("C")}
                </Stack>
                <Stack spacing={2} direction="row">
                    {renderButton("7")}
                    {renderButton("8")}
                    {renderButton("9")}
                    {renderButton("/")}
                </Stack>
                <Stack spacing={2} direction="row">
                    {renderButton("4")}
                    {renderButton("5")}
                    {renderButton("6")}
                    {renderButton("*")}
                </Stack>
                <Stack spacing={2} direction="row">
                    {renderButton("1")}
                    {renderButton("2")}
                    {renderButton("3")}
                    {renderButton("-")}
                </Stack>
                <Stack spacing={2} direction="row">
                    {renderButton("0")}
                    {renderButton(".")}
                    {renderButton("=")}
                    {renderButton("+")}
                </Stack>
            </div>
            </div>
        </div>
    );
}