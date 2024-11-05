import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import HomePage from "./home/HomePage";

function App() {
  return (
    <div className=" overflow-y-auto ">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        showSystemCursor={true}
        innerStyle={{
          backgroundColor: "#d67f92",
        }}
        outerStyle={{
          border: "1px solid #f3f4f6",
        }}
      />
      <HomePage />
    </div>
  );
}

export default App;
