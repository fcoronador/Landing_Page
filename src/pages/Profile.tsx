import { Header } from "../components/Header"
import { Avatar } from "../components/Avatar"
import { Link } from "react-router-dom"
import html from '../assets/img/lang/html5_icon.svg'
import css from '../assets/img/lang/css3_icon.svg'
import js from '../assets/img/lang/javascript_icon.svg'
import php from '../assets/img/lang/php_icon.svg'
import python from '../assets/img/lang/python_icon.svg'
import mysql from '../assets/img/db/mysql_icon.svg'
import postsql from '../assets/img/db/postgresql.png'
import bigquery from '../assets/img/cloud/bq.png'
import docker from '../assets/img/cloud/docker_icon.svg'
import gc from '../assets/img/cloud/google_cloud.png'
import django from '../assets/img/frameworks/django.png'
import laravel from '../assets/img/frameworks/laravel_icon.svg'
import vue from '../assets/img/frameworks/vuejs.png'
import ml from '../assets/img/libraries/machine_learning_icon.svg'
import react from '../assets/img/libraries/react_icon.svg'
import node from '../assets/img/libraries/node_icon.svg'

export const Profile = () => {
    return (
        <div className=" h-screen">
            {/* row1 */}
            <div className="flex justify-between mt-4">
                <Header />
                <Avatar />
            </div>
            {/* row2 */}
            <div className="ml-10 text-white">
                <Link to={'/'}>         <span className="hover:underline">Home /</span> </Link>
                <Link to={'/degrees'}>  <span className="hover:underline">Degrees /</span> </Link>
                <Link to={'/projects'}> <span className="hover:underline">Projects /</span> </Link>
            </div>
            <div className="flex flex-wrap sm:flex-wrap md:flex-nowrap">
                <div className="flex flex-col md:w-1/2">
                    <div className="text-center text-white">
                        <span className="font-['BreeSerif'] text-4xl">Profile</span>
                    </div>
                    <div className="mx-auto mt-5 px-20">
                        <p className="bg-slate-300 px-10 py-3 rounded-md font-['Archivo']">
                            Hi, I am an Environmental Engineer and Software Technician.
                            <br />
                            <span className="font-bold">E</span><span className=""> from Environmental and <span className="font-bold" >Data</span> from BigData and as a result I am an <span className="font-bold">E-Data Engineer </span> .</span>
                            <br />
                            I quickly learn the key components of a business and its technology needs to create or improve algorithms that process high volumes of data to solve them.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:w-1/2">
                    <div className="text-center text-white font-['BreeSerif'] text-4xl">
                        <span className="">Professional Experience</span>
                    </div>
                    <div className="w-full mx-auto mt-5 px-20 font-['Archivo']">
                        <div className="py-2 rounded-md grid grid-cols-2 gap-2 bg-slate-300">
                            <div className="m-auto px-3 row-span-2 font-bold">Data Engineer 🚀</div>
                            <div>OMD Colombia SAS</div>
                            <div>2022-01-03 - Today</div>
                            <div className="m-auto px-3 row-span-2 font-bold">Developer Web ✨</div>
                            <div>Cerobox SAS</div>
                            <div>2020-10-27 - 2021-12-01 </div>
                            <div className="m-auto px-3 row-span-2 font-bold">Developer Web 🌄</div>
                            <div>Quick Help SAS</div>
                            <div>2020-01-01 - 2020-09-01</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* row3 */}

            <div className="flex flex-col mx-auto px-20 py-10 text-white">
                <div className="text-center text-white ">
                    <span className="font-['BreeSerif'] text-4xl">Languages</span>
                </div>
                <div className="mx-auto grid grid-cols-3 gap-4 mt-5">
                    <img className='mx-auto  w-44' src={html} alt="html_icon" />
                    <img className='mx-auto  w-44' src={css} alt="css_icon" />
                    <img className='mx-auto  w-44' src={js} alt="js_icon" />
                    <img className='mx-auto  w-44 bg-slate-300 rounded-full object-scale-down' src={php} alt="php_icon" />
                    <div></div>
                    <img className='mx-auto  w-44 bg-slate-300 rounded-full object-scale-down' src={python} alt="python_icon" />
                    <img className='mx-auto  w-44 bg-slate-300 rounded-full object-scale-down' src={mysql} alt="mysql_icon" />
                    <img className='mx-auto  w-44 bg-slate-300 rounded-full object-scale-down' src={postsql} alt="sql_icon" />
                    <img className='m-auto  w-44 px-4 py-1 bg-slate-300 rounded-full object-scale-down' src={bigquery} alt="gc" />
                    <img className='m-auto  w-44 bg-slate-300 rounded-full object-scale-down' src={gc} alt="gc" />
                    <div></div>
                    <img className='mx-auto  w-44 bg-slate-300 rounded-full object-scale-down' src={docker} alt="docker_icon" />
                    <img className='mx-auto  w-44 bg-slate-300 rounded-full object-scale-down' src={django} alt="php_icon" />
                    <img className='mx-auto  w-44 pl-2 bg-slate-300 rounded-full object-scale-down' src={laravel} alt="php_icon" />
                    <img className='m-auto   w-44 px-4 py-1 bg-slate-300 rounded-full object-scale-down' src={vue} alt="php_icon" />
                    <img className='mx-auto  w-44 rounded-full bg-slate-300 ' src={ml} alt="html_icon" />
                    <img className='mx-auto  w-44 rounded-full bg-slate-300 ' src={react} alt="html_icon" />
                    <img className='m-auto   w-44 px-4 rounded-full bg-slate-300 ' src={node} alt="html_icon" />
                </div>

            </div>
        </div>
    )
}