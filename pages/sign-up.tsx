import React from "react";
import { SignUpForm } from "../src/SignUpForm/SignUpForm";

export default function SignUpPage () {

    return (
        <SignUpForm 
            onSubmitReady={(data) => {
            console.log("handle submit ready data", data)
        }}
        />
    )
}