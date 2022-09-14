import { Header } from "../components/Header"
import { Avatar } from "../components/Avatar"
import { Link } from "react-router-dom"

export const Projects = () => {
    return (
        <div className="h-screen">
            {/* row1 */}
            <div className="flex justify-between my-5">
                <Header />
                <Avatar />
            </div>
            <div className="ml-10 text-white">
                <Link to={'/'}>        <span className="hover:underline">Home /</span> </Link>
                <Link to={'/profile'}> <span className="hover:underline">Profile /</span> </Link>
                <Link to={'/degrees'}> <span className="hover:underline">Degrees /</span> </Link>
            </div>
            <div className="text-center text-white">
                <span className="font-['BreeSerif'] text-4xl">Projects</span>
            </div>

            <div className="w-full mx-auto mt-5 px-20 font-['Archivo'] text-center">
                <div className="py-2 rounded-md grid grid-cols-2 gap-2 bg-slate-100 ">
                    <div className="font-['BreeSerif'] text-xl">Project : To Do</div>
                    <div className="grid grid-cols-1">
                        <div>
                            <p>
                                This project allows you to organize pending and completed tasks in the browser.
                            </p>
                        </div>
                        <div className="justify-self-center">
                            <a className="" href="https://github.com/fcoronador/Todo_react">
                                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-slate-900"><path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div className="font-['BreeSerif'] text-xl">Project : Heroes</div>
                    <div className="grid grid-cols-1">
                        <div>
                            <p>
                                This project allows you to see the history of the Marvel and DC heroes.
                            </p>
                        </div>
                        <a className="justify-self-center" href="https://github.com/fcoronador/heroes_react">
                            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-slate-900"><path  d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg>
                        </a>
                    </div>
                    <div className="font-['BreeSerif'] text-xl">Project : Weather</div>
                    <div className="grid grid-cols-1">
                        <div>
                            <p>
                                This project allows you to view weather conditions and forecasts in different cities.
                            </p>
                        </div>
                        <a className="justify-self-center" href="https://github.com/fcoronador/climate_api_react">
                            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-slate-900"><path  d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg>
                        </a>
                    </div>
                    <div className="font-['BreeSerif'] text-xl">Project : Landing Page</div>
                    <div className="grid grid-cols-1">
                        <div>
                            <p>
                                This project this same landing page.
                            </p>
                        </div>
                        <a className="justify-self-center" href="https://github.com/fcoronador/Landing_Page">
                            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-slate-900"><path  d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>


        </div>
    )
}