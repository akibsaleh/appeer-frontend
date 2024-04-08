"use server"
import * as z from "zod"
import SignupSchema from "@/schemas/SignupSchema"

export const signup = (values : z.infer<typeof SignupSchema>) => {
    const valid = SignupSchema.safeParse(values);
    if(!valid.success) {
        return { error : "Invalid Credentials" }
    }
    return { success : "Account created successfully" }
}