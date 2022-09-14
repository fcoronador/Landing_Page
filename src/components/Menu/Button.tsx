import { Link } from "react-router-dom"

export const Button = ({ option }: any) => {

    return (
        <Link to={option.route}>
            <div className="w-48 mb-1 pb-1 pr-1  mt-1 rounded-md bg-slate-300 hover:bg-slate-100 cursor-pointer">
                <span>{option.name}</span>
            </div>
        </Link>
    )
}