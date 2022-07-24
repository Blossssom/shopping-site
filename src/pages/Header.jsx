import React, { useState } from 'react';
import { Button } from '../stories/Button';
import '../stories/header.css';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const Input = styled.input`
    width: 370px;
    font-size: 1rem;
    border: 1px solid #b6b6b6;
    border-radius: 10px;
    padding: 8px 16px;
`;

export default function Header({setSearch}) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    };

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        setSearch(inputValue);
    };

    return (
        <header>
        <div className="wrapper">
        <Link to='/'>
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
                <path
                d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                fill="#FFF"
                />
                <path
                d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                fill="#555AB9"
                />
                <path
                d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                fill="#91BAF8"
                />
            </g>
            </svg>
            <h1>Acme</h1>
        </Link>
        <form onSubmit={(e) => handleSubmitEvent(e)}>
            <Input onChange={(e) => handleInputChange(e)} value={inputValue} type='text' placeholder='Search' />
            <button type='submit'></button>
        </form>
        <div>
            {
            <>
                <Button size="small" label="Log in" />
                <Button primary size="small" label="Sign up" />
            </>
            }
        </div>
        </div>
    </header>
    )
}
