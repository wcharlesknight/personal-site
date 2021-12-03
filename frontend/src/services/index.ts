import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export interface CharlieApiResponse<Type> {
    data: {
        object: string;
        attributes: Type;
    };

    error?: CharlieApiError;
}

export interface CharlieDeleteResponse {
    success: string;
    error?: CharlieApiError;
}

export interface CharlieApiError {
    code: number;
    name: string;
    message: string;
}

export async function call<Type>(
    method: "get" | "post" | "put" | "delete",
    path: string,
    headers?: Record<string, any>,
    request_body?: Record<string, any>,
    queryParams?: Record<string, any>
) {
    const config: AxiosRequestConfig = {
        url: `http://localhost:8080/api/v1/${path}`,
        method: method,
        headers: {
            // ...(apiKey && { Authorization: `Bearer ${apiKey}` }),
            Accept: "application/json",
            "Access-Control-Request-Method": method,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            ...headers,
        },
        data: request_body,
        withCredentials: true,
        validateStatus: () => true,
        params: { ...queryParams },
    };

    const response = await axios.request<CharlieApiResponse<Type>>(config);
    return response.data;
}
