import AnimatedBackground from "../components/AnimatedBackground";
import Content from "../components/Content";
import SelfCard from "../components/SelfCard";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <div className="h-screen w-[100%] flex justify-between text-white overflow-y-auto bg-black">
      <AnimatedBackground />
      <SelfCard />
      <Content />
      <Sidebar />
    </div>
  );
};

export default HomePage;
