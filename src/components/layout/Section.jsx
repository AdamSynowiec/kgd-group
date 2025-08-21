import React from 'react';

const Section = ({ children, className = '' }) => {
    return (
        <div className={`w-full ${className}`}>
            {children}
        </div>
    );
};

export default Section;
