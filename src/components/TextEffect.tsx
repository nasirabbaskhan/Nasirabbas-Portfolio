import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "cooder",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Web developer",
        1500,
        "designer",
        1500,
        "programmer",
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] font-bold text-[#55e6a5] uppercase "
      repeat={Infinity}
    />
  );
};
export default TextEffect;
