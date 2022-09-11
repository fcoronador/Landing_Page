import { Content } from "./Content"

const generateId = () => {
    return Math.random().toString(20).substr(2);
}

export const Tab = ({ degreeSelected }) => {

    return (
        <div className="mx-auto mt-5 text-center col-span-5 text-xl">
            {degreeSelected.map((con) => {
                return <Content key={generateId()} content={con} />
            })}

        </div>
    )
}