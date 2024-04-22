"use server"
import * as z from "zod"
import SignupSchema from "@/schemas/SignupSchema"
import axios from "axios";

export const signup = async (values : z.infer<typeof SignupSchema>, role: "STUDENT" | "TEACHER") => {
    const valid = SignupSchema.safeParse(values);
    if(!valid.success) {
        return { error : "Invalid Credentials" }
    }

    const {name, photo, email, password} = valid.data;
    const res = await axios({
        method : "POST",
        url : "http://localhost:3010/auth/register",
        data : {name, photo, email, password, role},
        headers : { "Content-Type" : "application/json" }

    });
    const data = await res.data;
    if(data.error) {
        return { error : data.error.message }
    }
    return { success : "Account created successfully" }
}