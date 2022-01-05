import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "../services/api/login";
import { createUser, getUsers } from "../services/api/users";

type Inputs = {
    name: string;
    password: string;
};

export default function Login() {
    const [inputs, setInputs] = useState<Inputs>();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        // const res = await createUser({ name: data.name, password: data.password });
        const res = await login({ name: data.name, password: data.password });
        if (!res) {
            console.log("bad request");
            return;
        }

        console.log(res);
    };

    const createLogin = async (data: Inputs) => {
        const res = await login({ name: data.name, password: data.password });
        console.log(res);
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
                    <div className="flex flex-row">
                        <input className="w-20" type="submit" />
                        <div
                            className="w-20 bg-gray-100 ml-1"
                            onClick={() => {
                                // createLogin();
                            }}>
                            Create Login
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
