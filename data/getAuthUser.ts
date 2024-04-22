import axios from "axios"

const getAuthUser = async (name: string, email: string, photo: string, id_token: string, role: "STUDENT" | "TEACHER") => {
    const res = await axios({
        method: "POST",
        url: "http://localhost:3010/auth/oauthentication",
        data: {name, email, photo, id_token, role},
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await res.data;
    return data;
}

export default getAuthUser;