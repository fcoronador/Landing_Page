import foto from '../assets/img/perfil1.jpg'

export const Avatar = () => {
    return (
        <div className='flex'>
            <div className='mx-auto p-8 self-center'>
                <img className='mx-auto rounded-full object-fill w-44' src={foto} alt="me_picture" />
            </div>
        </div>)
}