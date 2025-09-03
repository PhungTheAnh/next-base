import { IResponseLogin } from "@/interfaces/IResponseLogin";
import { apiClient } from "../apiClient";

export function authLogin(phone: string): Promise<IResponseLogin> {
    return apiClient("/auth/login2", {
        method: "POST",
        data: { phone, phone_country: "VN" },
    });
}

export function authResend(phone: string): Promise<IResponseLogin> {
    return apiClient("/auth/verify/resend/otp", {
        method: "POST",
        data: { phone, phone_country: "VN" },
    });
}


export function authVerifyOtp(userId: string, code: string): Promise<IResponseLogin> {
    return apiClient("/auth/verify/otp", {
        method: "POST",
        data: {
            "user_id": userId,
            "otp_code": code
        },
    });
}
