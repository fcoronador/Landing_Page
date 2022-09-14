import { useState } from 'react'
import foto from '../assets/img/perfil1.jpg'

export const Avatar = () => {

    const [showContact, setShowContact] = useState(false)

    return (
        <div className='flex'>
            <div className='mx-auto p-8 self-center'>
                <img className='mx-auto rounded-full object-fill w-44' src={foto} alt="me_picture" />
                <div className='mt-3  globo iV izquierda-arriba '>
                    {showContact ? (
                        <div className='flex flex-col justify-center text-center font-["Archivo"] text-base'>
                            <span>+57 312-415-27-87</span>
                            <span>ing.ambfredycoronado@gmail.com</span>
                            <a href="https://drive.google.com/file/d/1fYY07hUxIVQ4r95eO7ZGkCkX3VvAv1-C/view?usp=sharing">
                                <span>Download CV</span>
                            </a>
                            <span>Redes Sociales</span>
                            <span className='font-["BreeSerif"] hover:underline cursor-pointer'  onClick={() => setShowContact(false)}>Hide</span>
                        </div>) : (
                        <div className=' text-center font-["BreeSerif"] text-xl hover:underline cursor-pointer' onClick={() => setShowContact(true)} >Hi, world click me...</div>)
                    }
                </div>
            </div>
        </div>)
}