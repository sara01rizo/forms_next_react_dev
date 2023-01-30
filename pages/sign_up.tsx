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
                    errors.email?.message ? (<span className="label-text text-error">{errors.email?.message as string}</span>) : null
                }
            </div>

            <div className="form-control w-full max-w-xs">
                <label htmlFor={'password'} className="label">
                    <span className="label-text">password</span>
                </label>
                    
                <Input 
                    color={"ghost"}
                    id={"password"}
                    type={"password"}
                    { ... register("password", { required: "Please type your password here" })}
                />
                {
                    errors.password?.message ? (<span className="label-text text-error">{errors.password?.message as string}</span>) : null
                }
            </div>

            <div className="form-control w-full max-w-xs">
                <label htmlFor={'confirm password'} className="label">
                    <span className="label-text">confirm password</span>
                </label>
                    
                <Input 
                    color={"ghost"}
                    id={"confirm password"}
                    type={"password"}
                    { ... register("confirm password", { required: "Please confirm your password here" })}
                />
                {
                    errors.confirmPassword?.message ? (<span className="label-text text-error">{errors.confirmPassword?.message as string}</span>) : null
                }
            </div>

            <button>Submit</button>
        </form>
    )
}