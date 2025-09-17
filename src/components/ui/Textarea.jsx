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

                border-b-[3px] 
                border-[#C9AB8B]

                sm:text-[16px] md:text-[18px] 
                px-[10px] sm:px-[12px] md:px-[14px] lg:px-[16px] xl:px-[18px]
                min-h-[180px] sm:min-h-[220px] md:min-h-[300px] xl:min-h-[220px]
                w-full
            "
        />
    );
};

export default Textarea;
