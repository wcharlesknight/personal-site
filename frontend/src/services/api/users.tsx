import * as CharlieApi from ".";

export type User = { name: string; password: string };

export async function createUser(request_body: { name: string; password: string }) {
    const response = await CharlieApi.call<User>("POST", "users", undefined, request_body);
    return response;
}

export async function deleteUser(id: string) {
    const response = await CharlieApi.call("DELETE", `users/${id}`, undefined, undefined);
    return response;
}

export async function getUsers() {
    const response = await CharlieApi.call("GET", `users`, undefined, undefined);
    return response;
}