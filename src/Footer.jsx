function FooterCard(props) {
    return(
        <div className="font-Poppins text-white capitalize">
            <h1 className="text-lg lg:text-xl font-semibold">{props.Header}</h1>
            <p className="text-base lg:text-lg font-normal">{props.row1}</p>
            <p className="text-base lg:text-lg font-normal">{props.row2}</p>
            <p className="text-base lg:text-lg font-normal">{props.row3}</p>
            <p className="text-base lg:text-lg font-normal">{props.row4}</p>
        </div>
    )
}
export default FooterCard