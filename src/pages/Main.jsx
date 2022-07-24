import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { getData } from '../utils/apiRouter';
import Card from '../components/Card';
import Container from '../components/Container';
import { useInView } from 'react-intersection-observer';

const MainContainer = styled.main`
    display: flex;
    justify-content: center;

    .no-items {
        display: flex;
        justify-content: center;
        width: 60%;
    }

    .card-wrapper {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        /* border: 1px solid black; */
        width: 24%;
        height: 460px;

        &:hover {
            transition: 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;        }
    }
`;

export default function Main({itemList, setItemList, search, page, setPage}) {
    const [ref, inView] = useInView();
    

    const getDataReq = async (page) => {
        const data = await (await axios.post(getData, {params: search, count: page})).data.items;
        setItemList(data); 
        console.log(data);
    };
    
    useEffect(() => {
        setPage(12);
        window.scrollTo(0, 0);
    },[]);
    

    useEffect(() => {
        setPage(12);
    }, [search]);


    useEffect(() => {
        getDataReq(page);
    }, [page, search]);


    useEffect(() => {
        if(inView) {
            console.log('inView!!!');
            setPage(prev => prev + 12);
        }
    }, [inView]);

    return (
        <MainContainer>
            <Container>
                {
                    itemList.length === 0 
                    ?   <div className='no-items'>
                            <img src="data:image/png;base64,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" alt="" />
                        </div>
                    :
                    itemList.map((v, i) => 
                        i === page - 1 
                        ? ( <div ref={ref} className='card-wrapper' key={v.productId}>
                                <Card  id={v.productId} title={v.title} price={v.lprice} imgUrl={v.image} link={v.link} />
                            </div>)
                        : ( <div className='card-wrapper' key={v.productId}>
                                <Card id={v.productId} title={v.title} price={v.lprice} imgUrl={v.image} link={v.link} />
                            </div>)
                    )
                }
            </Container>
        </MainContainer>
    )
}
