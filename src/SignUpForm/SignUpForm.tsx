import React, { forwardRef, useRef } from "react";
import { useForm } from "react-hook-form";
import { TextField } from "../components/TextField";
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import { useImperativeHandle } from "react";
import { Button } from "react-daisyui";

const SignupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(24),
    confirmPassword: z.string().min(6).max(24),
    strip: z.any(),
}). refine(
    (form) => {
        return form.confirmPassword === form.password
    },
    {
        message: "Password must match",
        path: ["confirmPassword"]
    }
)

export type SignupFormValues = z.infer<typeof SignupSchema>

interface SignUpFormProps {
    onSubmitReady: (data: SignupFormValues) => Promise<void>
}

export interface SignUpApi {
    setErrors: (errors: Record<string, string>) => void
}

export const SignUpForm = forwardRef<SignUpApi, SignUpFormProps>((props, ref) => {

    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<SignupFormValues>({
        resolver: zodResolver(SignupSchema),
    });

    // useEffect(() => {
    //     setError('email', { type: 'custom', message: 'Type your email' });
    // }, [])
    const setErrorRef = useRef(setError)
    setErrorRef.current = setError
    useImperativeHandle(ref, () => {
        return {
          setErrors: (errors: Record<string, string>) => {
            console.log('setError', errors)
            Object.entries(errors).forEach(([key, value]) => {
                setErrorRef.current(key as "email" | "password" | "confirmPassword", {message: value})
            })
          }
        };
      }, []);
      
    return (
        <form
            style={{
                display: "flex",
                flexFlow: "column",
                gap: 15,
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: "#FAF0DC",
            }}
            onSubmit={handleSubmit(props.onSubmitReady)}
        >         
            <h2>Sign Up ????</h2>
            <TextField 
                id='email'
                label='Email'
                inputProps={register("email")}
                error={errors.email?.message as string}
            />

            <TextField 
                id='password'
                label='Password'
                type='password'
                inputProps={register("password")}
                error={errors.password?.message as string}
            />

            <TextField 
                id='confirm-password'
                label='Confirm Password'
                type='password'
                inputProps={register("confirmPassword")}
                error={errors.confirmPassword?.message as string}
            />

            <Button disabled={isSubmitting} color="secondary">
                {isSubmitting ? "Sending ..." : "Register"}
            </Button>
        </form>
    )
})

SignUpForm.displayName = 'ForwardRefSignUpForm'

//<button>{isSubmitting ? "Hold up" : "Submit"}</button>