import React from 'react';

const Button = React.forwardRef((props, ref) => {
    return <button ref={ref} onClick={props.onClick} className={props.disabled ? 'default-button disabled' : 'default-button'}>{props.text}</button>
});

export default Button