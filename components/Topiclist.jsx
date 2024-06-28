"use client"
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import Removebtn from "./Removebtn";
import { useEffect, useState } from "react";



const Topiclist = () => {
    const[data,setData]=useState([]);
    useEffect(() => {
        const getData = async () => {
            const singleData = await fetch(`/api/topics`, {cache:"no-store"});
            if (singleData.ok) {
                const {values} = await singleData.json();
                
                setData(values);
                
            } else {
                throw new Error("Errorr in fetching single data!");
            }
        };
        getData()
    }, [])

    if (!data) {
        return <p>Error in fetching data!</p>;
    }

    return (
        <>
            {data.map((topic) => (
                <div key={topic._id} className="border p-5 mt-2 flex justify-between">
                    <div>
                        <h1>{topic.title}</h1>
                        <p>{topic.description}</p>
                    </div>
                    <div className="flex items-start gap-5">
                        <Removebtn id={topic._id} />
                        <Link href={`/editTodo/${topic._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Topiclist;