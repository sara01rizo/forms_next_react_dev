import React, { useRef } from "react";
import { SignUpForm, SignupFormValues, SignUpApi } from "../src/SignUpForm/SignUpForm";

export default function SignUpPage () {

    const signupFormRef = useRef<SignUpApi>(null)

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
            //how to change SignUpForm
            signupFormRef.current?.setErrors(jsonResponse.errors)
            return
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