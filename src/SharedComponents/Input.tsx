import React from "react";

const Input = (props) => {
    const { label, ...rest } = props;

    return (<>
        {/* <label htmlFor={label} >{label}</label> */}
        {/* <input {...rest} /> */}
    </>
    )
}

export default Input;