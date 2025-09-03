import React from 'react'

const Checkbox = ({ name, onChange }) => {

    return (
        <input
            name={name}
            onChange={onChange}
            type='checkbox'
            className='w-[32px] h-[32px] rounded-none border-[5px] border-solid border-[#C9AB8B]'
        />

    )
}

export default Checkbox
