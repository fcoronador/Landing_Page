
export const NavTabs = ({ degree, styles, setActiveTab }) => {



    const handleNavs = (text) => {
        setActiveTab(text)
    }



    return (
        <div className={styles}
            onClick={(e) => { handleNavs(e.target.textContent) }}>
            {degree.name}
        </div>
    )
}