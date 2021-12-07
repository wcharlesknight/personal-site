import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { createUser } from "../services/users";

type Inputs = {
    username: string;
    password: string;
};

export default function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        // const res = await createUser({ username: data.username, password: data.password });
        fetch("http://localhost:8080/api/v1/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: data.username, password: data.password }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
        // console.log(res, "response");
    };

    console.log(watch("username")); // watch input value by passing the name of it

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
                <input className="border border-gray-500 w-44 mb-2 p-1" placeholder="username" {...register("username")} />
                {errors.username && <>You must enter a username</>}
                <hr className="border border-gray-400 mb-2 w-44" />
                <input className="border border-gray-500 w-44 mb-2 p-1" placeholder="password" {...register("password")} />
                <hr className="border border-gray-400 mb-2 w-44" />
                <input className="w-20" type="submit" />
            </form>
        </div>
    );
}
