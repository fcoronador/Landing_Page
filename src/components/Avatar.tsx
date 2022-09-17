import { useState } from 'react'
import foto from '../assets/img/perfil1.jpg'

export const Avatar = () => {

    const [showContact, setShowContact] = useState(false)

    return (
        <div className='flex'>
            <div className='mx-auto md:p-8 self-center'>
                <img className='mx-auto rounded-full object-fill w-20 md:w-44' src={foto} alt="me_picture" />
                <div className='mt-3  globo iV izquierda-arriba '>
                    {showContact ? (
                        <div className='flex flex-col text-sm md:text-base p-1 text-center font-["Archivo"]'>
                            <div > +57 312-415-27-87 </div>
                            <div> ing.ambfredycoronado@gmail.com </div>
                            <div> <a href="https://drive.google.com/file/d/1fYY07hUxIVQ4r95eO7ZGkCkX3VvAv1-C/view?usp=sharing">
                                <span>Download CV</span>
                            </a>
                            </div>
                            <div><span className='font-["BreeSerif"] hover:underline cursor-pointer' onClick={() => setShowContact(false)}>Hide</span> </div>
                        </div>) : (
                        <div className=' p-1 text-center font-["BreeSerif"] md:text-xl hover:underline cursor-pointer' onClick={() => setShowContact(true)} >Hi, world click me...</div>)
                    }
                </div>
            </div>
        </div>)
}