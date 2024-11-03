import { HiOutlineHome, HiOutlineShare, HiOutlineUser, HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineDocumentText, HiOutlineMenu, HiOutlineChat, HiOutlineMail } from 'react-icons/hi';

const Sidebar = () => {
  return (
    <div className="fixed right-[4%] border-[1px]  h-[60%] top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-between  p-4 rounded-full" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                {/* Main Icon at the Top */}
                <button className="flex items-center justify-center w-12 h-12 rounded-full border-[1px]  " style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                    <h2 className='text-[#d67f92] font-bold'>EK.</h2>
                </button>

                {/* Navigation Icons */}
                <nav className="flex flex-col items-center justify-between space-y-6 text-zinc-400">
                    <HiOutlineHome className="hover:text-[#d67f92] size-5" />
                    <HiOutlineUser className="hover:text-[#d67f92] size-5" />
                    <HiOutlineBriefcase className="hover:text-[#d67f92] size-5" />
                    <HiOutlineAcademicCap className="hover:text-[#d67f92] size-5" />
                    <HiOutlineDocumentText className="hover:text-[#d67f92] size-5" />
                    <HiOutlineMenu className="hover:text-[#d67f92] size-5" />
                    <HiOutlineChat className="hover:text-[#d67f92] size-5" />
                    <HiOutlineMail className="hover:text-[#d67f92] size-5" />

                </nav>

                {/* Bottom Icon */}
                <button className="flex items-center justify-center w-10 h-10 rounded-full border-[1px] hover:bg-[#d67f92] text-zinc-400 mt-4" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                    <HiOutlineShare className="hover:text-[#d67f92] size-5 bg-zinc-400" />
                </button>
            </div>
  );
};

export default Sidebar;
