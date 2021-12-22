import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "../services/login";
import { createUser, getUsers } from "../services/users";

type Inputs = {
    name: string;
    password: string;
};

export default function Login() {
    const [userList, setUserList] = useState<string[]>([]);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await login({ name: data.name, password: data.password });

        console.log(res);
    };

    const listUsers = async () => {
        const res = await getUsers();
        console.log(res);
        // setUserList(res);
    };

    console.log(watch("name"));

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
                    <input className="border border-gray-500 w-44 mb-2 p-1" placeholder="name" {...register("name")} />
                    {errors.name && <>You must enter a name</>}
                    <hr className="border border-gray-400 mb-2 w-44" />
                    <input type="password" className="border border-gray-500 w-44 mb-2 p-1" placeholder="password" {...register("password")} />
                    <hr className="border border-gray-400 mb-2 w-44" />
                    <input className="w-20" type="submit" />
                </form>
                <div
                    className="text-gray-500 w-20 h-20"
                    onClick={() => {
                        listUsers();
                    }}>
                    GET USERS
                </div>
                {userList}
            </div>
        </>
    );
}
