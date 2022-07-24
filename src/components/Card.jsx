import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const CardContainer = styled.section`
    
    
    .container {
    }

    .card-img {
        /* width: 100%; */
        height: 320px;
        img {
            width: 100%;
        }
    }

    a {
        text-decoration: none;
        color: black;
        display: block;
    }

    h3 {
        
        font-size: 1rem;
        height: 80px;
        overflow: hidden;
        white-space: normal;
        /* word-break:break-all; */
        text-overflow: ellipsis;
    }

    .card-text {
        padding: 10px;

        span {
            font-size: 1.1rem;
        }
    }
`;

export default function Card({title, price, imgUrl, id}) {
  return (
    <CardContainer>
        <Link to={`/product/${id}`} className='container'>
            <div className='card-img'>
                <img src={imgUrl} alt={title} />
            </div>
            <div className='card-text'>
                <h3>{title}</h3>
                <span>{price}</span>
            </div>
        </Link>
    </CardContainer>
  )
}
