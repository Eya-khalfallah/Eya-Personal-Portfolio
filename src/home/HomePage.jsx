import AnimatedBackground from "../components/AnimatedBackground";
import Content from "../components/Content";
import SelfCard from "../components/SelfCard";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <div className="w-full h-full flex flex-col xl:flex-row justify-between text-white overflow-hidden xl:overflow-y-auto ">
      <AnimatedBackground className="fixed inset-0 z-0" />
      <SelfCard />
      <Content />
      <Sidebar />
    </div>
  );
};

export default HomePage;
