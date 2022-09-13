
export const NavTabs = ({ degree, styles, setActiveTab }: any) => {



    const handleNavs = (text: string) => {
        setActiveTab(text)
    }



    return (
        <div className={styles}
            onClick={(e) => { 
                const navname:string = (e.target as HTMLElement).textContent ?? '' 
                handleNavs(navname) }}>
            {degree.name}
        </div>
    )
}