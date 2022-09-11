import { Button } from "./Menu/Button"

export const Menu = () => {

    const options = [

        {
            'name': 'Profile',
            'w': '2/5',
            'route': '/profile'

        },
        {
            'name': 'Degrees',
            'w': '1/2',
            'route': '/degrees'
        },
        {
            'name': 'Projects',
            'w': '3/4',
            'route': '/projects'
        }
        , {
            'name': 'Contacts',
            'w': '3/4',
            'route': '/'
        }]

    const generateId = () => {
        return Math.random().toString(20).substr(2);
    }

    return (<div className='self-end font-["BreeSerif"] text-3xl p-8 text-right'>
        <div className='grid grid-cols-1 grid-rows-4 justify-items-end'>
            {options.map((option) => {

                return (<Button
                    key={generateId()}
                    option={option}
                />)
            })}

        </div>
    </div>)
}