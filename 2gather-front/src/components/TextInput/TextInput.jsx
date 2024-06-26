import React from 'react'
import {TextFieldStyle} from './TextInput.style'

const TextInput = (props) => {
    const {label, type, id, onChange, width ,value} = props;
    return (
        <div>
            <TextFieldStyle type={type} id={id} value={value} label={label} onChange={onChange} width={width}/>
        </div>
    )
}

export default TextInput
