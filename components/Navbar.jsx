import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-around p-10 bg-[#2f3642]">
            <div className=" text-3xl ">
                <Link href={"/"}>doTODO</Link>
            </div>
            <div className=" text-3xl">
                <Link
                    className=" text-black bg-slate-300 p-3 rounded"
                    href={"/addTodo"}>Create Task</Link>
            </div>
        </nav>
    )
}

export default Navbar;