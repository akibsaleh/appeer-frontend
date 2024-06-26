export interface User {
    id: string;
    email: string;
    password: string;
    role: string;
    accessToken: string;
    refreshToken: string;
    refreshTokenExpiresAt: Date;
}