import { Header } from '../components/Header'
import { Avatar } from '../components/Avatar'
import { Menu } from '../components/Menu'

export const Intro = () => {
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-1 h-screen'>
            <Header />
            <Avatar />
            <Menu />
        </div>)
}