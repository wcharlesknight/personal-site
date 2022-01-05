import { useForm, SubmitHandler } from "react-hook-form";

function Home() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<{ comment: string }>();

    return (
        <div className="flex flex-col h-screen ml-40 mt-10 border-l-2 border-gray-300">
            <div className="ml-6">
                <div className="flex mb-4">Charlie Knight's Personal Site</div>
                <form className="flex flex-col">
                    <textarea
                        className="rounded-md border border-gray-500 p-2"
                        {...register("comment")}
                        style={{ backgroundColor: "white", width: 100, height: 100, resize: "both" }}></textarea>
                    <input className="w-20 mt-4" type="submit" />
                </form>
            </div>
        </div>
    );
}

export default Home;
