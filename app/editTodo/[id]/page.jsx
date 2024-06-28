"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const editTodoList = ({ params }) => {


    const [updateTitle, setTitle] = useState("");
    const [updateDescription, setDescription] = useState("");
    const router = useRouter();

    useEffect(() => {
        const getData = async () => {
            const singleData = await fetch(`http://localhost:3000/api/topics/${params.id}`);
            if (singleData.ok) {
                const {value} = await singleData.json();
                console.log(value);
                setTitle(value.title);
                setDescription(value.description);
                
            } else {
                throw new Error("Errorr in fetching single data!");
            }
        };
        getData()
    }, [])

    



    const updateValues = async (event) => {

        event.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/topics/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ updateTitle, updateDescription })
            })
            if (res.ok) {
                router.replace("/");
                router.refresh();
            } else {
                throw new Error("error in updating values in client side?");
            }
        } catch (error) {
            console.log(error);
        }
    }




    return (
        <>
            <form
                onSubmit={updateValues}
                className="flex rounded border mt-2 flex-col p-5 gap-5 text-black text-lg">
                <input
                    onChange={e => setTitle(e.target.value)}
                    value={updateTitle}
                    type="text" placeholder="Todo Title"
                    className=" h-14 p-2"
                />


                <input
                    onChange={e => setDescription(e.target.value)}
                    value={updateDescription}
                    type="text" placeholder="Todo Description"
                    className=" h-14 p-2"
                />
                <button
                    type="submit"
                    className=" text-white bg-green-900 w-fit p-3 rounded text-xl">
                    Update Todo
                </button>
            </form>
        </>
    )
}
export default editTodoList;