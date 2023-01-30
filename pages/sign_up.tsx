import React from "react";
import { useCallback } from "react";
import { Input } from "react-daisyui";
import { useForm } from "react-hook-form";

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

            <div className="form-control w-full max-w-xs">
                <label htmlFor={'email'} className="label">
                    <span className="label-text">email</span>
                </label>
                    
                <Input 
                    color={"ghost"}
                    id={"email"}
                    type={"text"}
                    { ... register("email", { required: "Please type your email here" })}
                />
                {
                    errors.email?.message ? (<span className="label-text text-error">An error message</span>) : null
                }
            </div>
            <button>Submit</button>
        </form>
    )
}