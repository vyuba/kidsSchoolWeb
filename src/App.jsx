import Navber from "./NavBar";
import HeroImage from "./HeroImage";
import Count from "./CountCard";
import Benefit from "./BeneftsCard";
import FooterCard from "./Footer";
// import FirstFrame from "/public/Frame 13.png";

function App() {

  return (
    <>
      <Navber />
      <div className="px-10 pt-14 lg:px-20">
        <HeroImage/>
      </div>
      <div id="countSection" className="w-full bg-[#0065FF] py-7 md:py-[69px] grid">
        <Count 
          number="956"
          name="Professional Teacher"
        />
        <Count 
          number="15859"
          name="Hours of Teaching"
        />
        <Count 
          number="5783"
          name="Active Student"
        />
        <Count 
          number="214"
          name="Subject Tutored"
        />
      </div>
      <div id="thirdSection" className="px-10 py-[80px] lg:px-20">
        <h1 className="capitalize text-center font-Poppins text-xl pb-[55px] lg:text-3xl font-semibold">
          Benefit of Online Teaching Assistance with Us
        </h1>
        <div id="benefits">
          <Benefit
            header="Convenience"
            benefit="Online learning eliminates travel and lets students study at home. Parents and children may adapt timetables to their everyday routines."
          />
          <Benefit
            header="Recorded Sessions"
            benefit="Lots of internet sites let you record lessons. Students may replay sessions to learn and parents can track their child's development."
          />
          <Benefit
            header="Instant Feedback"
            benefit="Online communication solutions allow professors to provide quick feedback, promoting dynamic learning and helping students remedy errors."
          />
          <Benefit
            header="Trial and Error"
            benefit="Parents may simply research instructors and instructional methods to discover the greatest match for their kid. This versatility may improve learning and enjoyment."
          />
        </div>
      </div>
        {/* <div id="fourthSection" className="px-10 lg:px-20">
          <div className="grid md:grid-cols-2 grid-rows-1">
            <img className="md:w-[472px] md:[419px]" src={FirstFrame} alt="" />
            <div className="text-left font-Poppins grid gap-4 md:gap-2">
              <h1 className="text-xl md:text-2xl font-semibold">Do you have A pupil who you want to Improve their Learning Skill?</h1>
              <p className="text-base md:text-lg">At our learning center, we understand that every child is unique, with their own strengths, weaknesses, and learning style. thats why we have created an innovative learning method that is meticulously crafted to offer personalized and effective support to each and every student. Our approach is designed to cultivate not only academic excellence but also a genuine passion for learning in every child.</p>
              <p className="py-3 px-5 bg-[#0065FF] w-fit rounded-[50px] text-white font-medium font-Poppins">get started</p>
            </div>
          </div>
        </div> */}
      <div id="newsLetter" className="w-full h-fit font-Poppins grid place-items-center gap-3 bg-[#0065FF] px-10 text-center py-14 md:py-32">
        <h1 className=" text-white text-3xl font-medium">Join Our Newslatter</h1>
        <p className=" text-white font-normal">Are you ready to embark on an exciting journey of growth, discovery, and success? Look no further! By joining our newsletter, you will gain exclusive access to a world of invaluable resources, empowering insights, and exciting opportunities that will enrich your student experience like never before.</p>
        <input className="outline-none h-[50px] w-full rounded-3xl placeholder:text-black placeholder:font-normal placeholder:pl-2 md:w-[800px]" type="text" placeholder="Email" />
      </div>
      <div id="reviews" className="px-10 lg:px-20 font-Poppins text-center pt-10  md:pt-[100px] pb-[80px]">
        <h1 className="text-xl md:text-2xl font-medium">What our Students Says about us </h1>
        <p className="font-normal text-base md:text-lg">As a transfer student, I was initially nervous about starting at a new school. However, the warm and welcoming environment at School Name quickly put my fears to rest. The sense of community and belonging here is truly unmatched, and I'm grateful for the friendships, memories, and lessons that I've gained during my time at this incredible institution</p>
      </div>
      <div
        id="footer"
        className="px-10 py-8 lg:px-20 w-full bg-[#231F20] h-fit grid gap-5"
      >
        <div id="logoFooter">
          <div
            id="logoContainer"
            className="flex w-32 items-center justify-between bg-transparent"
          >
            <svg
              width="35"
              height="20"
              viewBox="0 0 35 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.1526 19.9028H31.1477L11.3422 0.0971985H3.34705L23.1526 19.9028Z"
                fill="#7476ED"
              />
              <path
                d="M15.4497 0.0971995L34.5419 19.1894V0.0971985H29.3752V6.12496L23.3474 0.0971985L15.4497 0.0971995Z"
                fill="#E56F8C"
              />
              <path
                d="M0 0.760223V19.9027H5.16667V13.8749L11.1944 19.9027H19.1425L0 0.760223Z"
                fill="#64C2DB"
              />
            </svg>
            <h1 className="font-Poppins font-medium text-white">Kids world</h1>
          </div>
          <p className="font-Poppins font-normal text-base text-white lg:text-lg">Empowering Minds, Illuminating Futures</p>
        </div>
        <FooterCard
           Header="company"
           row1="About us"
           row2="Our story"
           row3="Programs"
           row4="comunity"
        />
        <FooterCard
           Header="help"
           row1="FAQ"
           row2="join us"
           row3="contact us"
           row4="donate"
        />
        <FooterCard
           Header="terms"
           row1="privacy"
           row2="terms of use"
           row3="accessibility"
        />
      </div>
    </>
  );
}

export default App;
