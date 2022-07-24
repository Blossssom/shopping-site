import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import { useParams } from 'react-router-dom';

const ProductContainer = styled.main`
    display: flex;
    justify-content: center;
`;

export default function Product({itemList}) {
    const [item, setItem] = useState({});

    const params = useParams();
    console.log(params);

    useEffect(() => {
        window.scrollTo(0, 0);
        // window.onbeforeunload = () => {
        //     window.scrollTo(0, 0);
        // }
    },[]);


    useEffect(() => {
        const product = itemList.filter(v => v.productId === params.id);
        setItem(product[0]);
    }, []);

    console.log(itemList);
    console.log(item);

    return (
        <ProductContainer>
            <Container>
                <section>
                    <div className='img-wrapper'>
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div>
                        <h2>{item.title}</h2>
                        <span>{item.lprice}</span>
                        <ul>
                            
                        </ul>
                    </div>
                </section>
            </Container>
        </ProductContainer>
    )
}
