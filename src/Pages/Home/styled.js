import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`

export const Container = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const msgError = styled.p`
    display: block;
    font-size: 1rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`
export const msg = styled.p`
    display: block;
    font-size: 1rem;
    color: green;
    font-weight: 600;
    margin-top: 1rem;
`

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5;
    border-radius: .25 0 0 .25rem;

    &:focus.
    &:active {
        outline: none;
        box-shadow:none;
    }
`;

export const Button = styled.button`
    height: 1.6rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;

    &:focus.
    &:active {
        outline: none;
        box-shadow:none;
    }
`;