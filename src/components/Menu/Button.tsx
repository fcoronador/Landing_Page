import { Link } from "react-router-dom"

export const Button = ({ option }:any) => {

    return (
        <Link to={option.route}>
            <div className={`w-${option.pad} pr-10 pl-4 mt-1 rounded-md bg-slate-300 hover:bg-slate-100 cursor-pointer`}>

                {option.name}
            </div>
        </Link>
    )
}