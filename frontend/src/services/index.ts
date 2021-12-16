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
    method: "GET" | "POST" | "PUT" | "DELETE",
    path: string,
    headers?: Record<string, any>,
    request_body?: Type
    // queryParams?: Record<string, any>
) {
    const fetchCall = async () => {
        return fetch(`http://localhost:8080/api/v1/${path}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request_body),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "data res");
                return data;
            })
            .catch((err) => {
                console.log("Error with request", err);
            });
    };

    const res = await fetchCall();
    console.log(res, "response");
    return res;
}
