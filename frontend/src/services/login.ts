import * as CharlieApi from ".";
import { User } from "./users";

export async function login(request_body: { name: string; password: string }) {
    const response = await CharlieApi.call<User>("POST", "login", undefined, request_body);
    return response;
}
