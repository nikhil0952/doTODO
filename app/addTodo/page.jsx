"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const AddTodoList = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    const formBtn = async (event) => {
        event.preventDefault();

        try{
            const dataTodo = await fetch(`/api/topics`,{
                method:"POST",
                headers:{
                    "Content-type": "application/json"
                },
                body : JSON.stringify({title,description}),
            });
            if(dataTodo.ok){
                router.replace("/");
                router.refresh();
            }else{
                throw new Error("Error while adding data!");
            }
            
        }catch(error){
            console.log(error);
        }

    }

    return (
        <>
            <form
                onSubmit={formBtn}
                className="flex border mt-2 rounded flex-col p-5 gap-5 text-black text-lg">
                <input
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    type="text" placeholder="Todo Title"
                    className=" h-14 p-2"
                />


                <input
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    type="text" placeholder="Todo Description"
                    className=" h-14 p-2"
                />


                <button
                    type="submit"
                    className=" text-white bg-green-900 w-fit p-3 rounded text-xl">
                    Add Todo
                </button>
            </form>
        </>
    )
}
export default AddTodoList;