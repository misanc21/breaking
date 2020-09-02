import React from 'react'
import styled from '@emotion/styled'

const ContenedorFrase = styled.div `
    padding: 3rem;
    border-radius: .5rem;
    background-color: #FFF;
    max-width: 800px;
    margin-top: 10rem;
    margin-left: 2rem;
    margin-right: 2rem;

    @media (min-width: 992px){
        margin-top: 10rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position:relative;
        padding-left: 4rem;
        color: #287a2b;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: #287a2b;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        color: #666;
        margin-top: 2rem;
        font-weight: bold;
        text-align: right;
    }
`

const Frase = ({frase}) => {
    return (
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>-{frase.author}</p>
        </ContenedorFrase>
    )
}

export default Frase;