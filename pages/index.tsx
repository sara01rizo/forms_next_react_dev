import React from "react"
import Link from "next/link"

export default function HomePage () {
    return (
        <div>
            <h1>Hi, lets go for it!! Sign up now!</h1>
            <Link href="/sign-up">
                Click Me
            </Link>
        </div>
    )
}