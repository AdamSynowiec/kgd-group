import React from 'react';

const Textarea = ({ value, onChange, placeholder, name }) => {
    return (
        <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="
                bg-[#FFFFFF] 
                font-poppins 
                font-regular 
                text-black

                border-b-[5px] 
                border-[#C9AB8B]

                text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]
                px-[10px] sm:px-[12px] md:px-[14px] lg:px-[16px] xl:px-[18px]
                min-h-[180px] sm:min-h-[220px] md:min-h-[300px] lg:min-h-[360px] xl:min-h-[420px]
                w-full
            "
        />
    );
};

export default Textarea;
