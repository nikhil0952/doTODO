"use client"
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import Removebtn from "./Removebtn";
import { useContext, useEffect, useState } from "react";
import { Mycontext } from "@/context/Mycontext";



const Topiclist = () => {
    const{dark} = useContext(Mycontext);
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const singleData = await fetch(`/api/topics`, { cache: "no-store" });
            if (singleData.ok) {
                const { values } = await singleData.json();

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
        <div className={`${dark ? "dark" : ""}`}>
            {data.map((topic) => (
                <div key={topic._id} className=" dark:bg-white border p-5 mt-3 rounded-xl flex justify-between">
                    <div>
                        <h1 className=" mb-1 w-fit p-1 pr-2 pl-2 text-lg font-bold bg-[#570303] ">{topic.title}</h1>
                        <p className="p-1 dark:text-black">{topic.description}</p>
                    </div>
                    <div className="flex items-start gap-5">
                        <Removebtn id={topic._id} />
                        <Link href={`/editTodo/${topic._id}`}>
                            <HiPencilAlt className="dark:text-black" size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Topiclist;