const StartSteps = ({ number, text }) => (
  <div className={" flex flex-row items-center justify-center "}>
    <div
      className={
        "flex h-[70px] w-[70px]  items-center justify-center rounded-[24px] bg-[#323F5D]"
      }
    >
      <p className="text-[20px] font-bold text-white">{number}</p>
    </div>
    <p className="ml-[30px] flex-1 text-[18px] font-normal leading-[32.4px] text-[#B0B0B0]">
      {text}
    </p>
  </div>
);
export default StartSteps;
