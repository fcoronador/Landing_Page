import { Content } from "./Content"

const generateId = () => {
    return Math.random().toString(20).substr(2);
}

export const Tab = ({ degreeSelected }:any ) => {

    return (
        <div className="mx-auto rounded-md  py-3 w-full border-t-2  border-slate-500 bg-white text-center col-span-5 text-xl">
            {degreeSelected.map((con:any) => {
                return <Content key={generateId()} content={con} />
            })}

        </div>
    )
}