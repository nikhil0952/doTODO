import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi"
import Removebtn from "./Removebtn";

const getData = async () => {
    try {
        const values = await fetch(`${process.env.API_URL}/api/topics`, { cache: "no-store" });

        if (!values.ok) {
            throw new Error("Errro in fetching data!");

        }
        return await values.json();
    } catch (error) {
        console.log(error);
    }
}

const Topiclist = async () => {
    const resvalue = await getData();
    if (resvalue) {
        const {values} = resvalue;
        
        return (
            <>
                {
                    values?.map((v) => {
                        return (

                            <div key={v._id} className=" border p-5 mt-2 flex justify-between">
                                <div className="">
                                    <h1>{v.title}</h1>
                                    <p>
                                        {v.description}
                                    </p>
                                </div>
                                <div className="flex items-start gap-5">
                                    <Removebtn id={v._id} />
                                    <Link href={`/editTodo/${v._id}`}>
                                        <HiPencilAlt size={24} />
                                    </Link>
                                </div>
                            </div>

                        )
                    })
                }

            </>
        )
    }else{
        return(
            <>
            </>
        )
    }



}

export default Topiclist;