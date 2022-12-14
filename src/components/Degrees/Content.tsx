export const Content = ({ content }: any) => {

    const { title, center, date, location } = content

    return (
        <>
            <div className="font-['BreeSerif'] text-2xl">{title}</div>
            <div className="font-['BreeSerif'] text-2xl">{center}</div>
            <div className="font-['Archivo']">{date}</div>
            <div className="border-b-2 font-['Archivo']">{location}</div>
        </>
    )
}