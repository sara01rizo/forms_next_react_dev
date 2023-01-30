import React from 'react'
import { Input } from 'react-daisyui'

interface TextFieldProps {
    id: string
    label: string
    error?: string
    inputProps?: unknown
    type?: 'password' | 'text' | 'phone-number'
}

export const TextField = (props: TextFieldProps) => {
  return (
    <div className="form-control w-full max-w-xs">
        <label htmlFor={props.id} className="label">
            <span className="label-text">{props.label}</span>
        </label>            
        <Input 
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