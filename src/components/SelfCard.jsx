import { SlCloudDownload } from "react-icons/sl";

const SelfCard = () => {
    return(
        <div className="w-[20%] h-screen left-[3%] p-4 flex flex-col justify-center items-center fixed">
                <div className='fixed top-10 left-[4%]'>
                    <h2 className='text-3xl font-bold'>{"<"}<span className='text-[#d67f92]'>Eya</span><span className=''>{" />"}</span></h2>
                </div>
                <div className="w-full h-[70%] p-3 bg-[#272231] rounded-2xl">
                    <div className=" h-full pt-6 flex flex-col items-center justify-between">
                        {/* Profile Picture */}
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Profile"
                            className="rounded-full w-24 h-24 mx-auto mb-2"
                        />
                        {/* Profile Info */}
                        <div>
                            <h2 className="text-lg font-semibold">Eya Khalfallah</h2>
                            <p className="text-[#d67f92]">Web Developer</p>
                        </div>
                        <div className='w-[90%] h-[1px] bg-[#3d3049bb]'></div>

                        {/* Additional Info */}
                        <div className="mt-2 w-full space-y-2">
                            <div className='flex justify-between pl-4 pr-4'>
                                <p>Residence:</p>
                                <span className="text-gray-300">Tunisia</span>
                            </div>
                            <div className='flex justify-between pl-4 pr-4'>
                                <p>City:</p>
                                <span className="text-gray-300">Sfax</span>
                            </div>
                            <div className='flex justify-between pl-4 pr-4'>
                                <p>Age:</p>
                                <span className="text-gray-300">24</span>
                            </div>

                        </div>
                        {/* Skills */}
                        <div className=' w-full bg-[#3d3049bb] p-6 rounded-2xl'>
                            <div className="mt-6">
                                <h3 className="font-semibold mb-2">Skills</h3>
                                <div className="flex items-center justify-center space-x-2">
                                    {/* Skill Circles */}
                                    {['HTML', 'CSS', 'JS', 'PHP'].map((skill, index) => (
                                        <div key={index} className="w-12 h-12 flex items-center justify-center bg-[#4b3b5a] rounded-full">
                                            <span className="text-xs">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Download CV Button */}
                            <button className="mt-6 w-full py-3 bg-[#c57284] rounded-full">
                                <div className='flex space-x-2 place-items-center justify-center font-normal text-gray-200'>
                                    <p className='text-base font-medium text-gray-200'>DOWNLOAD CV</p>
                                    <SlCloudDownload className='size-5' />
                                </div>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default SelfCard;