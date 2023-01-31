import React from "react";
import { useForm } from "react-hook-form";
import { TextField } from "../components/TextField";
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

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

type SignupFormValue = z.infer<typeof SignupSchema>

interface SignUpFormProps {
    onSubmitReady: (data: unknown) => void
}

export const SignUpForm = (props: SignUpFormProps ) => {

    const { register, handleSubmit, formState: { errors } } = useForm<SignupFormValue>({
        resolver: zodResolver(SignupSchema),
    });
   
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
            onSubmit={handleSubmit(props.onSubmitReady)}
        >         
            <h2>Sign Up 🧭</h2>
            <TextField 
                id='email'
                label='email'
                inputProps={register("email")}
                error={errors.email?.message as string}
            />

            <TextField 
                id='password'
                label='password'
                type='password'
                inputProps={register("password")}
                error={errors.password?.message as string}
            />

            <TextField 
                id='confirm-password'
                label='confirm-password'
                type='password'
                inputProps={register("confirmPassword")}
                error={errors.confirmPassword?.message as string}
            />

            <button>Submit</button>
        </form>
    )
}