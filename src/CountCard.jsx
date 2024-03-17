
function count(props) {
  

    return(
        <div className="font-Poppins text-white text-center ">
            <p className="text-xl lg:text-2xl font-bold">{props.number}</p>
            <p className="text-base lg:text-lg ">{props.name}</p>
        </div>
    )
}
export default count