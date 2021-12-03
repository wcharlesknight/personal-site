import * as CharlieApi from ".";

type User = { username: string; password: string };

export async function createUser(request_body: { username: string; password: string }) {
    const response = await CharlieApi.call<User>("post", "users", undefined, request_body);
    return response;
}
