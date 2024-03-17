// import firstImg from "/public/Pexels Photo by Katerina Holmes.png"
// import secImg from "/public/Frame 10.png"
// import thirdImg from "/public/girl.png"
// import furImg from "/public/boy.png"
// import fifthImg from "/public/image 3.png"
// import sixImg from "/public/image 4.png"
// import sevImg from "/public/image 5.png"
function HeroImage() {

    return(
        <div className="pb-10 pt-7">
        <div className="capitalize flex flex-col gap-3">
          <p className="font-Poppins text-base lg:text-lg font-normal text-[#0065FF]">Unleash Your Potential with the Perfect Online Teacher Match</p>
          <h1 className="font-Gabriela text-3xl lg:text-5xl font-medium">Locate the Ideal Teacher for Your Kid</h1>
          <p className="font-Poppins font-normal text-sm lg:text-base">We assist you in locating the ideal tutor for individual or group teaching.</p>
          <div className="flex flex-col sm:flex-row gap-5 w-full h-fit">
            <button id="button" className="type1 capitalize py-3 px-5  w-fit rounded-[50px] font-medium font-Poppins">
                <p className="btn-txt">get started</p>
            </button>
            <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 11C0 4.925 4.925 0 11 0C17.075 0 22 4.925 22 11C22 17.075 17.075 22 11 22C4.925 22 0 17.075 0 11ZM11 1.5C8.48044 1.5 6.06408 2.50089 4.28249 4.28249C2.50089 6.06408 1.5 8.48044 1.5 11C1.5 13.5196 2.50089 15.9359 4.28249 17.7175C6.06408 19.4991 8.48044 20.5 11 20.5C13.5196 20.5 15.9359 19.4991 17.7175 17.7175C19.4991 15.9359 20.5 13.5196 20.5 11C20.5 8.48044 19.4991 6.06408 17.7175 4.28249C15.9359 2.50089 13.5196 1.5 11 1.5Z" fill="#0065FF"/>
                        <path d="M8 14.6672V7.49917C8.00015 7.40948 8.02442 7.32149 8.07026 7.24441C8.11611 7.16733 8.18184 7.104 8.26057 7.06105C8.33931 7.01811 8.42814 6.99713 8.51777 7.00032C8.6074 7.0035 8.69452 7.03074 8.77 7.07917L14.346 10.6622C14.4166 10.7074 14.4747 10.7697 14.5149 10.8432C14.5552 10.9168 14.5763 10.9993 14.5763 11.0832C14.5763 11.167 14.5552 11.2495 14.5149 11.3231C14.4747 11.3967 14.4166 11.4589 14.346 11.5042L8.77 15.0882C8.69452 15.1366 8.6074 15.1638 8.51777 15.167C8.42814 15.1702 8.33931 15.1492 8.26057 15.1063C8.18184 15.0633 8.11611 15 8.07026 14.9229C8.02442 14.8458 8.00015 14.7579 8 14.6682V14.6672Z" fill="#0065FF"/>
                    </svg>
                </div>
                <p className="pl-2 w-fit text-black font-medium font-Poppins">see how it works</p>
            </div>
          </div>
        </div>
        {/* <div id="imageGrid" className="grid">
          <div className="relative">
            <img className="z-[2] absolute top-0" src={firstImg} alt="" />
            <img className="z-[0] relative bottom-20 right-10" src={sixImg} alt="" />
          </div>
          <div>
            <img src={secImg} alt="" />
            <img src={fifthImg} alt="" />
          </div>
          <div>
            <img src={thirdImg} alt="" />
          </div>
          <div className="relative">
            <img className="z-[2] absolute top-0" src={furImg} alt="" />
            <img className="z-[0] relative top-2 left-10" src={sevImg} alt="" />
          </div>
        </div> */}
      </div>
    )
}
export default HeroImage