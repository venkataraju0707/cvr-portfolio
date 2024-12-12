import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/animation/Animation.json"

function RobotGreeting() {
  return (
    <div className="flex items-center justify-center mt-10">
      <Player
        autoplay
        loop
        src={animationData} // Use the local JSON file
        style={{ width: "100px", height: "100px" }}
      />
      <p className="text-2xl text-gray-200 font-bold ml-4">Hi there!</p>
    </div>
  );
}

export default RobotGreeting;
