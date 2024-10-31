import { FaHome, FaUser, FaBriefcase, FaGraduationCap, FaFileAlt, FaBars, FaBlogger, FaCommentDots, FaEnvelope, FaShareAlt } from "react-icons/fa";
const HomePage = () => {
    return (
        <div className="h-screen w-[100%] flex text-white overflow-y-auto">
            <div className="w-[22%] h-screen left-[2%] p-4  flex justify-center items-center fixed ">
                <div className="w-full h-[70%] p-4 bg-[#272231] rounded-2xl">
                    <div className="text-center">
                        {/* Profile Picture */}
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Profile"
                            className="rounded-full w-24 h-24 mx-auto mb-4"
                        />
                        {/* Profile Info */}
                        <h2 className="text-lg font-semibold">Brown Reddick</h2>
                        <p className="text-[#d67f92]">Photographer</p>
                        {/* Additional Info */}
                        <div className="mt-4 space-y-2">
                            <p>Residence: <span className="text-gray-400">Canada</span></p>
                            <p>City: <span className="text-gray-400">Toronto</span></p>
                            <p>Age: <span className="text-gray-400">26</span></p>
                        </div>
                        {/* Skills */}
                        <div className="mt-6">
                            <h3 className="font-semibold mb-2">Skills</h3>
                            <div className="flex space-x-2">
                                {/* Skill Circles */}
                                {['HTML', 'CSS', 'JS', 'PHP'].map((skill, index) => (
                                    <div key={index} className="w-12 h-12 flex items-center justify-center bg-[#4b3b5a] rounded-full">
                                        <span className="text-xs">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Download CV Button */}
                        <button className="mt-6 w-full py-2 bg-[#c57284] rounded-lg">
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-[55%] h-full p-4 right-[16%] absolute z-10 ">
                <section className="mb-8 p-[10%] bg-[#272231] rounded-2xl">
                    <h1 className="text-4xl font-bold">
                        I Craft The <span className="text-[#d67f92]">Digital Landscape</span>
                    </h1>
                    <p className="mt-2">
                        I am a <span className="font-semibold text-[#d67f92]">Frontend Developer</span> at heart, creating features that are best suited for the job at hand.
                    </p>
                    {/* Hire Me Button */}
                    <button className="mt-4 px-6 py-2 bg-[#c57284] rounded-lg">Hire Me</button>
                </section>

                {/* Additional Sections */}
                <section className="mb-8 p-[10%] bg-[#272231] rounded-2xl">
                    <h2 className="text-3xl font-semibold text-[#d67f92]">About Me</h2>
                    <p className="mt-2">
                        Hi, my name is Brown Reddick. I began using WordPress when I first began, spent...
                    </p>
                </section>
                 {/* Additional Sections */}
                 <section className="mb-8 p-[10%] bg-[#272231] rounded-2xl">
                    <h2 className="text-3xl font-semibold text-[#d67f92]">About Me</h2>
                    <p className="mt-2">
                        Hi, my name is Brown Reddick. I began using WordPress when I first began, spent...
                    </p>
                </section>
                 {/* Additional Sections */}
                 <section className="mb-8 p-[10%] bg-[#272231] rounded-2xl">
                    <h2 className="text-3xl font-semibold text-[#d67f92]">About Me</h2>
                    <p className="mt-2">
                        Hi, my name is Brown Reddick. I began using WordPress when I first began, spent...
                    </p>
                </section>

                {/* Add more sections as needed */} </div>
            <div className="fixed right-[5%] border-spacing-1 border-white h-[60%] top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-between  space-y-4 bg-[#272231]  p-4 rounded-full">
                {/* Main Icon at the Top */}
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#c57284] hover:bg-[#d67f92] text-white mb-4">
                    
                </button>

                {/* Navigation Icons */}
                <nav className="flex flex-col items-center justify-between space-y-6 text-gray-300">
                    <FaHome className="hover:text-[#d67f92] size-5" />
                    <FaUser className="hover:text-[#d67f92] size-5" />
                    <FaBriefcase className="hover:text-[#d67f92] size-5" />
                    <FaGraduationCap className="hover:text-[#d67f92] size-5" />
                    <FaFileAlt className="hover:text-[#d67f92] size-5" />
                    <FaBars className="hover:text-[#d67f92] size-5" />
                    <FaBlogger className="hover:text-[#d67f92] size-5" />
                    <FaCommentDots className="hover:text-[#d67f92] size-5" />
                    <FaEnvelope className="hover:text-[#d67f92] size-5" />
                </nav>

                {/* Bottom Icon */}
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-[#d67f92] text-gray-300 mt-4">
                    <FaShareAlt />
                </button>
            </div>
        </div>
    );
}

export default HomePage;