import { Header } from "../components/Header"
import { Avatar } from "../components/Avatar"


export const Projects = () => {
    return (
        <div className="h-screen">
            {/* row1 */}
            <div className="flex justify-between my-5">
                <Header />
                <Avatar />
            </div>
            <div className="text-center text-white">
                <span className="font-['BreeSerif'] text-4xl">Projects</span>
            </div>

            <div className="w-full mx-auto mt-5 px-20 font-['Archivo'] text-center">
                <div className="py-2 rounded-md grid grid-cols-2 gap-2 bg-slate-100 ">
                    <div>col1</div>
                    <div>Project : To Do</div>
                    <div>col1</div>
                    <div>Project : Heroes</div>
                    <div>col1</div>
                    <div>Project : Weater</div>
                    <div>col1</div>
                    <div>Project : Landing Page</div>
                </div>
            </div>


        </div>
    )
}