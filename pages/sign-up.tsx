import React from "react";
import { SignUpForm, SignupFormValues } from "../src/SignUpForm/SignUpForm";

export default function SignUpPage () {

    const handleSubmit = async (data: SignupFormValues) => {
        console.log("handle submit ready data", data)
        const httpResponse = await fetch('/api/sign-up',{
            method: "POST",
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
        const jsonResponse = await httpResponse.json()
        console.log(jsonResponse)
    }

    return (
        <SignUpForm 
            onSubmitReady={handleSubmit}
        />
    )
}