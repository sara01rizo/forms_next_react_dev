import React from "react";
import { SignUpForm } from "../src/SignUpForm/SignUpForm";

export default function SignUpPage () {

    const handleSubmit = async (data: unknown) => {
        console.log("handle submit ready data", data)
    }

    return (
        <SignUpForm 
            onSubmitReady={handleSubmit}
        />
    )
}