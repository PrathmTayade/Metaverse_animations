"use client";

const InsightCard = ({title, subtitle}) => (
  <div className="flex w-full items-center justify-between">
    <div className="flex max-w-[650px] flex-1 flex-col md:ml-[62px]">
      <h4 className="text-[26px] font-normal text-white lg:text-[42px]">
       Lorem ipsum dolor sit, amet consectetur 
      </h4>
      <p className="mt-[16px] text-[14px] font-normal text-secondary-white lg:text-[20px]">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, libero?  
      </p>
    </div>
  </div>
);

export default InsightCard;
