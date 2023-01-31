import React, { useRef } from "react";
import { SignUpForm, SignupFormValues } from "../src/SignUpForm/SignUpForm";

export default function SignUpPage () {

    const signupFormRef = useRef(null)

    const handleSubmit = async (data: SignupFormValues) => {
        console.log("handle submit ready data", data)
        const httpResponse = await fetch('/api/sign-up',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
        const jsonResponse = await httpResponse.json()
        if ( !jsonResponse.success ) {
            console.log("time to set an error in the form", jsonResponse.errors)
            //how to change SignUpForm
            signupFormRef.current.setErrors(jsonResponse.errors)
        }
        console.log(jsonResponse)
    }

    return (
        <SignUpForm
            ref={signupFormRef} 
            onSubmitReady={handleSubmit}
        />
    )
}