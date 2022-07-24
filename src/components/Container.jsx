import React from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.article`
    width: 1320px;
    /* background-color: beige; */
    display: flex;
    justify-content: flex-start;
    /* align-items: center; */
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 40px;
`;

export default function Container(props) {
    return (
        <ContainerStyle>
            {props.children}
        </ContainerStyle>
    )
}
