import React from "react";
import { useCallback } from "react";
import { Input } from "react-daisyui";
import { useForm } from "react-hook-form";
import { TextField } from "../src/components/TextField";

export default function SignUpPage () {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onValid = useCallback((data: unknown) => {
        console.log(`onValid`, data)
    }, [])

    console.log('Render sign-up runing function', errors)
    
    return (
        <form
            style={{
                display: "flex",
                flexFlow: "column",
                gap: 15,
                alignItems: "center",
                justifyContent: "center",
                height: "100vh"
            }}
            onSubmit={handleSubmit(onValid)}
        >         

            <TextField 
                id='email'
                label='email'
                inputProps={register("email", {required: "Please type your email" })}
                error={errors.email?.message as string}
            />

            <TextField 
                id='password'
                label='password'
                type='password'
                inputProps={register("password", {required: "Please type your password" })}
                error={errors.password?.message as string}
            />

            <TextField 
                id='confirm-password'
                label='confirm-password'
                type='password'
                inputProps={register("confirmPassword", {required: "Please tyoe your email" })}
                error={errors.confirmPassword?.message as string}
            />

            <button>Submit</button>
        </form>
    )
}