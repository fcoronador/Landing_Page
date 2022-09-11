import { Content } from "./Content"

export const Tab = ({ degreeSelected }) => {

    return (
        <div className="mx-auto mt-5 text-center col-span-5 text-xl">
            {degreeSelected.map((con) => {
                return <Content content={con} />
            })}

        </div>
    )
}