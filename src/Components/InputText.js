import React from 'react'
import styled from 'styled-components'

const TextInput = styled.input`
    border: solid;
    border-radius: 5px;
    border-color: #d6d6d6;
    border-width: 2px;
    margin: auto;
    padding: 5px;


    &:placeholder{
        color: #d6d6d6;
    }

    &:hover{
        transition: 0.5s;
        border-color: #ff7906!important;
       border: solid;
       outline: none;
       border-radius: 5px;
       border-width: 2px;
       margin: auto;
    }

    &:focus{
       border-color: #ff7906!important;
       border: solid;
       outline: none;
       border-radius: 5px;
       border-width: 2px;
       margin: auto;
    }
` 

const InputText = () =>{
        return (
            <>
                <TextInput placeholder={'email@email.com'}/>
            </>
        )
}

export default InputText
