import Header from "../Components/Header";
import MainSlide from "../Components/MainSlide";
import Footer from "../Components/Footer";
import "./MemberExclusive.css";

const MemberExclusive = () => {
  return (
    <div className="member-exclusive">
      <Header />
      <MainSlide
        title="Welcome to the Member’s Exclusive Lenticular GIF Print Tutorial"
        description="Welcome to The Grail! We’ve made it super simple to capture memories and transform them into something special. In this member’s exclusive page, we will guide you through step-by-step and get you started on your path to creating your very own lenticular GIF print outs. "
      ></MainSlide>
      <div className="flex flex-col py-4 md:py-10 lg:py-16 md:px-4 gap-6">
        <div className="w-full flex justify-center text-xl md:text-3xl font-bold text-start text-blue-900">
          What You Need To Get Started:
        </div>
        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-8 items-center overflow-auto xl:justify-center md:py-4">
          <div className="min-w-[300px] min-h-[220px] rounded-md border text-white bg-blue-900 border-[#2b4099] p-2 w-2/4 sm:w-1/5 h-auto cursor-pointer transition-transform duration-300 flex flex-col">
            <div className="w-full text-center font-bold text-xl my-2 text-white basis-16 flex items-center justify-center">
              Windows Based Photo Booth{" "}
            </div>
            <div className="p-2">
              The software requires a Windows operating system.
            </div>
          </div>
          <div className="min-w-[300px] min-h-[220px] rounded-md border text-white bg-blue-900 border-[#2b4099] p-2 w-2/4 sm:w-1/5 h-auto cursor-pointer transition-transform duration-300 flex flex-col">
            <div className="w-full text-center font-bold text-xl my-2 text-white basis-16 flex items-center justify-center">
              A Printer{" "}
            </div>
            <div className="p-2">
              Any printer that works with with the listed photo booth software
              will work. We use DNP printers.
            </div>
          </div>
          <div className="min-w-[300px] min-h-[220px] rounded-md border text-white bg-blue-900 border-[#2b4099] p-2 w-2/4 sm:w-1/5 h-auto cursor-pointer transition-transform duration-300 flex flex-col">
            <div className="w-full text-center font-bold text-xl my-2 text-white basis-16 flex items-center justify-center">
              Choice of Photo Booth Software{" "}
            </div>
            <div className="p-2">
              Here are the photo booth software options that are compatible with
              our lenticular prints:
            </div>
          </div>
          <div className="min-w-[300px] min-h-[220px] rounded-md border text-white bg-blue-900 border-[#2b4099] p-2 w-2/4 sm:w-1/5 h-auto cursor-pointer transition-transform duration-300 flex flex-col">
            <div className="w-full text-center font-bold text-xl my-2 text-white basis-16 flex items-center justify-center">
              Lenticular Frames
            </div>
            <div className="p-2">
              This is the most important material that will elevate your GIF to
              the next level! Dimensions:
            </div>
          </div>
        </div>
      </div>
      <div className="slide-video">
        <div className="responsive-iframe">
          <iframe
            src="https://www.youtube.com/embed/kS5mQJXCfPU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="w-full bg-blue-900 flex flex-col gap-4 p-2">
        <div className="w-full flex justify-center text-xl md:text-3xl font-bold text-start text-white">
          Additional Resources
        </div>
        <div className="w-full flex flex-col md:flex-row md:justify-evenly gap-2 md:gap-4 lg:gap-8 items-center overflow-auto xl:justify-center md:py-4">
          <div className="min-w-[300px] md:w-[47%] md:min-h-[550px] lg:min-h-[420px] rounded-md border text-blue-900 bg-gray-50 border-[#2b4099] p-4 w-3/7 sm:w-1/5 h-full cursor-pointer transition-transform duration-300 flex flex-col gap-4">
            <div className="w-full text-center font-bold text-xl my-2 text-blue-900 basis-20 flex items-center justify-center">
              Downloadable Resources
            </div>
            <p className="text-base leading-relaxed md:basis-[360px] lg:basis-[300px] xl:basis-[200px] basis-2/3">
              We know that having quick access to a written guide can be just as
              important as a video. Our exclusive, detailed step-by-step PDF
              ensures you’ll never miss a beat when creating your lenticular
              prints. What’s Inside the PDF:
              <ul>
                <li>
                  - A detailed guide on aligning, pasting, and securing your
                  lenticular lens for flawless prints every time.
                </li>
                <li>
                  - Bonus sections on troubleshooting common issues, such as
                  misaligned prints or image distortions.
                </li>
              </ul>
            </p>
            <div className="w-full flex items-center justify-center">
              <div className="bg-blue-900 rounded-md text-white text-center p-2 w-auto">
                Download Your PDF Guide Here
              </div>
            </div>
          </div>
          <div className="min-w-[300px] md:w-[47%] md:min-h-[550px] lg:min-h-[420px] rounded-md border text-blue-900 bg-gray-50 border-[#2b4099] p-4 w-3/7 sm:w-1/5 h-full cursor-pointer transition-transform duration-300 flex flex-col gap-4">
            <div className="w-full text-center font-bold text-xl my-2 text-blue-900 basis-20 flex items-center justify-center">
              Your Exclusive Access to Community Support
            </div>
            <p className="text-base leading-relaxed md:basis-[360px] lg:basis-[300px] xl:basis-[200px] basis-2/3">
              You’re not just part of a tutorial—you’re part of an expert
              community. As a member, you gain access to our exclusive forum
              where you can:
              <ul>
                <li>
                  Ask Questions: Get advice from seasoned professionals and
                  fellow members who have mastered the lenticular print process.
                  Whether it’s troubleshooting or seeking creative ideas, the
                  community is here to help.
                </li>
                <li>
                  Share Your Creations: We’d love to see what you create! Upload
                  your lenticular prints and get feedback from the community.
                  Share tips and ideas to inspire others.
                </li>
              </ul>
            </p>
            <div className="w-full flex items-center justify-center">
              <div className="bg-blue-900 rounded-md text-white text-center p-2 w-auto">
                Download Your PDF Guide Here
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MemberExclusive;
