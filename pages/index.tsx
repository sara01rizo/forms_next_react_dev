import React from "react"
import Link from "next/link"

export default function HomePage () {
    return (
        <div>
            <h1>Hi, lets go for it!! Sign up now!</h1>
            <Link href="/sign-up">
                Click Me
            </Link>
            <br/ >
            <h2>TypeScript it is working great</h2>
            <Link href="/sign-up">
                Sign up
            </Link>
        </div>
    )
}