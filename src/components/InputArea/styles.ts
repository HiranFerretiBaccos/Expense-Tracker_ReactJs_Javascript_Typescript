import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #fff;
    padding: 1.4rem;
    box-shadow: 0px 0px 8px #333;
    border-radius: 1rem;
    margin-top: 1.4rem;

`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 0.8rem;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 0.4rem;
`;
export const Input = styled.input`
    width: 100%;
    height: 2rem;
    padding: 0 0.6rem;
    border: 3px solid lightblue;
    border-radius: 8px;
`;
export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 3px solid lightblue;
    border-radius: 8px;
`;
export const Button = styled.button`
    width: 100%;
    height: 2rem;
    padding: 0 6px;
    border: 2px solid #777;
    border-radius: 8px;
    background-color: lightblue;
    color: black;
    cursor: pointer;
    &:hover {
        background-color: blue;
        color: white;
    }
`;