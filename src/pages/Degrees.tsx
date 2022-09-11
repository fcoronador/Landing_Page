import { Header } from "../components/Header"
import { Avatar } from "../components/Avatar"
import { NavTabs } from "../components/Degrees/NavTabs"
import { Tab } from "../components/Degrees/Tab"
import perfil1 from '../assets/img/perfil1.jpg'
import perfil2 from '../assets/img/perfil2.jpg'
import { useEffect, useState } from "react"

export const Degrees = () => {

    const degrees = [
        { 'name': 'University Degrees' },
        { 'name': 'Technical Degrees' },
        { 'name': 'Certificate Programs' },
        { 'name': 'Short Courses' },
        { 'name': 'High School' },
    ]

    const contents = {
        'University Degrees': [
            {
                'title': 'Environmental Engineer',
                'date': '2017-10-30',
                'center': 'University Central',
                'location': 'Bogotá, Colombia'
            }
        ]
        ,
        'Technical Degrees': [
            {
                'title': 'Software development technician',
                'date': '2020-11-30',
                'center': 'SENA',
                'location': 'Bogotá, Colombia'
            }
        ],
        'Certificate Programs': [
            {
                'title': 'Front-end development with React JS',
                'date': '2022-09-30',
                'center': 'Fundación Internacional Maria Luisa de Moreno (FIMLM)',
                'location': 'Bogotá, Colombia'
            },
            {
                'title': 'PCAP: Programming Essentials in Python',
                'date': '2022-10-19',
                'center': 'Python Institute',
                'location': 'Bogotá, Colombia'
            },
        ],
        'Short Courses': [
            {
                'title': 'Big data fundamentals',
                'date': '2021-10-01',
                'center': 'Python Institute',
                'location': 'Bogotá, Colombia'
            },
            {
                'title': 'Learn data science: Basic concepts',
                'date': '2020-12-09',
                'center': 'LinkedIn Learning',
                'location': 'Bogotá, Colombia'
            },
            {
                'title': 'Scrum Foundations Professional Certificate (SFPC) - (Spanish)',
                'date': '2020-11-09',
                'center': 'CertiProf',
                'location': 'Bogotá, Colombia'
            },
            {
                'title': 'Web Development With PHP',
                'date': '2019-10-17',
                'center': 'SENA',
                'location': 'Bogotá, Colombia'
            },
        ],
        'High School': [
            {
                'title': 'High School',
                'date': '2010-12-03',
                'center': 'Colegio I.E.D Julio Garavito Armero',
                'location': 'Bogotá, Colombia'
            },
        ],
    }

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
            <div className="text-center text-white">
                <span className="font-['BreeSerif'] text-4xl">Degrees</span>
            </div>

            <div className="w-full mx-auto mt-5 px-20 font-['Archivo']">
                <div className="py-2 rounded-md grid grid-cols-5 gap-2 bg-slate-100 ">
                    {/* Tab selector */}
                    {
                        degrees.map((degree) => {
                            const styles = degree.name === activeTab ?
                                "mx-auto font-['BreeSerif'] cursor-pointer text-xl hover:bg-slate-300 underline" :
                                "mx-auto font-['BreeSerif'] cursor-pointer text-xl hover:bg-slate-200 "

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