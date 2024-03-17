import Navber from "./NavBar";
import HeroImage from "./HeroImage";
import Count from "./CountCard";
import Benefit from "./BeneftsCard";
import FooterCard from "./Footer";
import FirstFrame from "/public/Frame 13.png";
import SecFrame from "/public/woman 1.png";
import ThirdFrame from "/public/woman 2.png";

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
        <div id="fourthSection" className="px-10 grid gap-20 lg:px-20 pb-10 lg:pb-20">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10 justify-center">
            <img className="md:w-[472px] md:[419px]" src={FirstFrame} alt="" />
            <div className="text-left font-Poppins flex flex-col gap-4 lg:gap-10">
              <h1 className="text-xl md:text-2xl font-semibold">Do you have A pupil who you want to Improve their Learning Skill?</h1>
              <p className="text-base md:text-lg">At our learning center, we understand that every child is unique, with their own strengths, weaknesses, and learning style. thats why we have created an innovative learning method that is meticulously crafted to offer personalized and effective support to each and every student. Our approach is designed to cultivate not only academic excellence but also a genuine passion for learning in every child.</p>
              <button id="button" className="type1 capitalize py-3 px-5  w-fit rounded-[50px] font-medium font-Poppins">
                  <p className="btn-txt">get started</p>
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-4 lg:gap-10 justify-center">
            <div className="relative w-fit h-fit">
            <img className="lg:w-[50rem] absolute bottom-5 left-6 -z-10" src={SecFrame} alt="" />
            <img className="lg:w-[50rem]" src={ThirdFrame} alt="" />
            </div>
            <div className="text-left font-Poppins flex flex-col gap-4 lg:gap-10">
              <h1 className="text-xl md:text-2xl font-semibold">Are you a qualified teacher who wants to show the world what you have got?</h1>
              <p className="text-base md:text-lg">Worry no more! Join our community of passionate educators and unlock the platform that celebrates your expertise and dedication. Empower minds, inspire growth, and let your teaching brilliance shine! Explore endless possibilities as you redefine education with us.</p>
              <button id="button" className="type1 capitalize py-3 px-5  w-fit rounded-[50px] font-medium font-Poppins">
                  <p className="btn-txt">get started</p>
              </button>
            </div>
          </div>
        </div>
      <div id="newsLetter" className="w-full h-fit font-Poppins grid place-items-center gap-3 bg-[#0065FF] px-10 text-center py-14 md:py-32">
        <h1 className=" text-white text-3xl font-medium">Join Our Newslatter</h1>
        <p className=" text-white font-normal">Are you ready to embark on an exciting journey of growth, discovery, and success? Look no further! By joining our newsletter, you will gain exclusive access to a world of invaluable resources, empowering insights, and exciting opportunities that will enrich your student experience like never before.</p>
        <input className="outline-none h-[50px] w-full rounded-3xl placeholder:text-black placeholder:font-normal placeholder:pl-2 lg:w-[800px]" type="text" placeholder="Email" />
      </div>
      <div id="reviews" className="px-10 lg:px-20 font-Poppins text-center pt-10  md:pt-[100px] pb-[80px]">
        <h1 className="text-xl md:text-2xl font-medium">What our Students Says about us </h1>
        <p className="font-normal text-base md:text-lg">As a transfer student, I was initially nervous about starting at a new school. However, the warm and welcoming environment at School Name quickly put my fears to rest. The sense of community and belonging here is truly unmatched, and I am grateful for the friendships, memories, and lessons that I have gained during my time at this incredible institution</p>
      </div>
      <div
        id="footer"
        className="px-10 py-8 lg:px-20 w-full bg-[#231F20] h-fit grid gap-5"
      >
        <div id="logoFooter" className="grid gap-2">
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
          <div className="flex gap-2 items-center">
            <svg width="20" height="18" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M26.1638 25L16.1672 10.4295L16.1843 10.4432L25.1976 0H22.1856L14.8431 8.5L9.0122 0H1.11273L10.4455 13.6034L10.4444 13.6023L0.601257 25H3.61329L11.7765 15.5432L18.2643 25H26.1638ZM7.81876 2.27272L21.8446 22.7273H19.4577L5.42054 2.27272H7.81876Z" fill="white"/>
            </svg>

            <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.3364 0C15.7988 0.0038998 16.5411 0.0116994 17.182 0.0298985L17.4342 0.038998C17.7253 0.0493974 18.0126 0.0623967 18.3597 0.0779959C19.7428 0.142993 20.6866 0.361382 21.5146 0.682465C22.3726 1.01265 23.0954 1.45983 23.8181 2.18129C24.4791 2.83112 24.9906 3.61718 25.317 4.48477C25.638 5.31283 25.8564 6.25658 25.9214 7.64101C25.937 7.98679 25.95 8.27408 25.9604 8.56656L25.9682 8.81875C25.9877 9.45832 25.9955 10.2006 25.9981 11.663L25.9994 12.6328V14.3357C26.0026 15.2838 25.9926 16.232 25.9695 17.1799L25.9617 17.4321C25.9513 17.7246 25.9383 18.0119 25.9227 18.3577C25.8577 19.7421 25.6367 20.6845 25.317 21.5139C24.9916 22.382 24.48 23.1682 23.8181 23.8174C23.1681 24.4782 22.3821 24.9896 21.5146 25.3162C20.6866 25.6373 19.7428 25.8557 18.3597 25.9207C18.0513 25.9352 17.7427 25.9482 17.4342 25.9597L17.182 25.9675C16.5411 25.9857 15.7988 25.9948 14.3364 25.9974L13.3667 25.9987H11.6651C10.7164 26.0019 9.76783 25.992 8.8195 25.9688L8.56731 25.961C8.25872 25.9493 7.9502 25.9359 7.64176 25.9207C6.25863 25.8557 5.31488 25.6373 4.48552 25.3162C3.61803 24.9904 2.83229 24.4788 2.18334 23.8174C1.52173 23.1678 1.00979 22.3817 0.683215 21.5139C0.362132 20.6858 0.143743 19.7421 0.078746 18.3577C0.0642632 18.0492 0.0512637 17.7407 0.039748 17.4321L0.0332485 17.1799C0.00929341 16.232 -0.00154053 15.2839 0.000750063 14.3357V11.663C-0.00287801 10.7148 0.00665585 9.76666 0.0293487 8.81875L0.0384482 8.56656C0.0488477 8.27408 0.061847 7.98679 0.0774462 7.64101C0.142443 6.25658 0.360831 5.31413 0.681915 4.48477C1.00835 3.61629 1.52131 2.82999 2.18464 2.18129C2.83342 1.52024 3.61865 1.00873 4.48552 0.682465C5.31488 0.361382 6.25733 0.142993 7.64176 0.0779959C7.98754 0.0623967 8.27613 0.0493974 8.56731 0.038998L8.8195 0.0311983C9.7674 0.0081021 10.7156 -0.00186501 11.6638 0.00129984L14.3364 0ZM13.0001 6.49967C11.2763 6.49967 9.62305 7.18445 8.40413 8.40338C7.1852 9.6223 6.50042 11.2755 6.50042 12.9993C6.50042 14.7232 7.1852 16.3764 8.40413 17.5953C9.62305 18.8142 11.2763 19.499 13.0001 19.499C14.7239 19.499 16.3771 18.8142 17.596 17.5953C18.815 16.3764 19.4998 14.7232 19.4998 12.9993C19.4998 11.2755 18.815 9.6223 17.596 8.40338C16.3771 7.18445 14.7239 6.49967 13.0001 6.49967ZM13.0001 9.09953C13.5122 9.09945 14.0193 9.20024 14.4925 9.39614C14.9657 9.59204 15.3957 9.87923 15.7578 10.2413C16.12 10.6034 16.4074 11.0332 16.6034 11.5063C16.7995 11.9795 16.9004 12.4866 16.9005 12.9987C16.9006 13.5108 16.7998 14.0179 16.6039 14.4911C16.408 14.9643 16.1208 15.3943 15.7588 15.7564C15.3967 16.1186 14.9668 16.406 14.4937 16.602C14.0206 16.7981 13.5135 16.899 13.0014 16.8991C11.9671 16.8991 10.9752 16.4883 10.2438 15.7569C9.51245 15.0256 9.10158 14.0336 9.10158 12.9993C9.10158 11.965 9.51245 10.9731 10.2438 10.2418C10.9752 9.5104 11.9671 9.09953 13.0014 9.09953M19.826 4.54977C19.3951 4.54977 18.9818 4.72096 18.677 5.02569C18.3723 5.33043 18.2011 5.74373 18.2011 6.17468C18.2011 6.60564 18.3723 7.01894 18.677 7.32367C18.9818 7.6284 19.3951 7.7996 19.826 7.7996C20.257 7.7996 20.6703 7.6284 20.975 7.32367C21.2798 7.01894 21.451 6.60564 21.451 6.17468C21.451 5.74373 21.2798 5.33043 20.975 5.02569C20.6703 4.72096 20.257 4.54977 19.826 4.54977Z" fill="white"/>
            </svg>
          </div>
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
