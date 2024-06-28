import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import Removebtn from "./Removebtn";

const getData = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/topics`);

    if (!response.ok) {
      throw new Error("Error in fetching data!");
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};

const Topiclist = async () => {
  const data = await getData();
  
  if (!data) {
    return <p>Error in fetching data!</p>;
  }

  return (
    <>
      {data?.map((topic) => (
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