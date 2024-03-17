function BenefitCard(props) {
    return(
        <div className="border-2 rounded-lg p-5 font-Poppins">
              <h1 className="text-lg lg:text-xl  font-semibold">{props.header}</h1>
              <p className="text-sm lg:text-base">{props.benefit}</p>
        </div>
    )
}
export default BenefitCard