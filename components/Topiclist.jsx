"use client"
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import Removebtn from "../components/Removebtn";

const Topiclist = ({ topics }) => {
  return (
    <>
      {topics?.map((topic) => (
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

export async function getServerSideProps() {
  const API_URL = process.env.API_URL;
  let topics = [];

  try {
    const response = await fetch(`${API_URL}/api/topics`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Error in fetching data!");
    }
    topics = await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
  }

  return { props: { topics } };
}

export default Topiclist;