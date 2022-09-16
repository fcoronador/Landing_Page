import { Header } from "../components/Header"
import { Avatar } from "../components/Avatar"
import { NavTabs } from "../components/Degrees/NavTabs"
import { Tab } from "../components/Degrees/Tab"
import {  contentsDB  } from "../assets/db/degrees"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Degrees = () => {


    type uniqueConten = {
        title: string,
        date: string,
        center: string,
        location: string
    }

    interface Icontents {
        [key: string]: Array<uniqueConten>;
    }

    const degrees = [
        { 'name': 'University Degrees' },
        { 'name': 'Technical Degrees' },
        { 'name': 'Certificate Programs' },
        { 'name': 'Short Courses' },
        { 'name': 'High School' },
    ]

    const contents:Icontents = contentsDB

    const [activeTab, setActiveTab] = useState('University Degrees')
    const [degreeSelected, setDegreeSelected] = useState(contents[activeTab])

    useEffect(() => {
        setDegreeSelected(contents[activeTab])
    }, [activeTab])

    const generateId = () => {
        return Math.random().toString(20).substr(2);
    }

    return (
        <div className=" h-screen">
            {/* row1 */}
            <div className="flex justify-between my-5">
                <Header />
                <Avatar />
            </div>
            <div className="ml-10 text-white">
                <Link to={'/'}>        <span className="hover:underline">Home /</span> </Link>
                <Link to={'/profile'}> <span className="hover:underline">Profile /</span> </Link>
                <Link to={'/projects'}><span className="hover:underline">Projects /</span> </Link>
            </div>
            <div className="text-center text-white">
                <span className="font-['BreeSerif'] text-4xl">Degrees</span>
            </div>

            <div className="w-full mx-auto mt-5 px-20 font-['Archivo']">
                <div className="pb-2 rounded-md sm:flex  md:grid  md:grid-cols-5 gap-2  ">
                    {/* Tab selector */}
                    {
                        degrees.map((degree) => {
                            const styles = degree.name === activeTab ?
                                " text-center md:rounded-md border-b-2 md:border-r-2  border-slate-500 font-['BreeSerif'] cursor-pointer text-xl bg-slate-300" :
                                " text-center md:rounded-md font-['BreeSerif'] cursor-pointer text-xl hover:bg-slate-200 hover:underline bg-slate-100"

                            return <NavTabs
                                key={generateId()}
                                degree={degree}
                                setActiveTab={setActiveTab}
                                styles={styles}
                            />
                        })
                    }
                    
                    {/* Content */}
                    <Tab degreeSelected={degreeSelected} />
                </div>
            </div>
        </div>

    )
}