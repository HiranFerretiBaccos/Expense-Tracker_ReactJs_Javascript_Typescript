import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    padding: 1.4rem;
    box-shadow: 0px 0px 8px #333;
    border-radius: 1rem;
    margin-top: -2.4rem;
    display: flex;
    align-items: center;
`

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

export const MonthArrow = styled.div`
    text-align: center;
    font-size: 1.8rem;
    cursor: pointer;
    &:hover{
        opacity: 0.6;
        background-color: rgb(0, 100, 255);
        border-radius: 0.6rem;
        border: 2px solid #000;
        }
`

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`
//ResumeArea terá o dobro do espaço do MonthArea por conta fo flex:1 e flex:2