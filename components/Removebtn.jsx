"use client"


import Link from "next/link";
import { useRouter } from "next/navigation";

import { HiOutlineTrash } from "react-icons/hi"

const Removebtn = ({ id }) => {
    const API = process.env.API_URL;
    const router = useRouter();

    const deleteFun = async () => {
     
        const r = confirm("Are you confirm!")
        if (r) {
            try {
                const res = await fetch(`/api/topics?id=${id}`, {
                    method: "DELETE"
                });
                if(res.ok){
                    window.location.reload();
                }
                

            } catch (error) {
                console.log(error);
            }
        }
        
    }

    return (
        <>
            <button onClick={deleteFun}>
                <HiOutlineTrash size={24} color="#a34040" />
            </button>
        </>
    )
}

export default Removebtn;