import { HiOutlineMenu } from 'react-icons/hi';
const ProjectsSection = () => {
    return (
        <section className="mb-8 p-[5%] bg-[#272231] rounded-2xl text-left">
          <div className="h-full flex flex-col justify-between ">
            <div className="w-fit h-min rounded-full flex space-x-2 justify-between place-items-center py-2 px-5 border-[1px] border-[#3d3049bb] text-[#d67f92] mb-12">
              <HiOutlineMenu className="size-4" />
              <h3 className="text-xs text-gray-300"> PROJECTS</h3>
            </div>
          </div>
        </section>
    );
}

export default ProjectsSection;