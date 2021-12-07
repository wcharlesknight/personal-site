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

// fetch("http://localhost:8080/api/v1/users", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ username: data.username, password: data.password }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

export async function call<Type>(
    method: "GET" | "POST" | "PUT" | "DELETE",
    path: string,
    headers?: Record<string, any>,
    request_body?: Record<string, any>,
    queryParams?: Record<string, any>
) {
    const config = {
        url: `http://localhost:8080/api/v1/${path}`,
        method: method,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
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
