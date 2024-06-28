import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex rounded-sm justify-around p-10 bg-[#2f3642]">
            <div className=" font-serif font-bold flex justify-center items-center max-sm:text-lg al text-3xl ">
                <Link href={"/"}>doTODO</Link>
            </div>
            <div className=" text-3xl">
                <Link
                    className=" max-sm:text-sm max-sm:p-2 text-black bg-slate-300 p-3 rounded"
                    href={"/addTodo"}>Create Task</Link>
            </div>
        </nav>
    )
}

export default Navbar;