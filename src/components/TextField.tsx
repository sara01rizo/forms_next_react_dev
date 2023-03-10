import React from 'react'
import { Input } from 'react-daisyui'
import { RefCallBack } from 'react-hook-form'


interface TextFieldProps {
    id: string
    label: string
    error?: string
    inputProps?: {
        onChange?: (ev: any) => unknown;
        onBlur?: (ev: any) => unknown;
        ref?: RefCallBack;
        name?: string;
        min?: string | number;
        max?: string | number;
        maxLength?: number;
        minLength?: number;
        pattern?: string;
        required?: boolean;
        disabled?: boolean;
    }
    type?: 'password' | 'text' | 'phone-number'
}

export const TextField = (props: TextFieldProps) => {
  return (
    <div className="form-control w-full max-w-xs">
        <label htmlFor={props.id} className="label">
            <span className="label-text">{props.label}</span>
        </label>            
        <Input 
            style={{
                backgroundColor: "white",
            }}
            color={"ghost"}
            id={props.id}
            type={props.type ?? "text"}
            { ...(props.inputProps ?? {})}
        />
        {
            props.error ? (<span className="label-text text-error">{props.error}</span>) : null
        }
    </div>
  )
}