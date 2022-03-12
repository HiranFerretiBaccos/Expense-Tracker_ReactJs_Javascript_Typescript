import styled from 'styled-components';

export const TableLine = styled.tr`
`

export const TableColumn = styled.td`
    padding: 6px 0;   
`

export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 6px;
    color: #fff;
    background-color: ${props => props.color};
`
//1ª e 2ª Etapa da prop 'color'.

export const Value = styled.div <{ color: string }>`
    color: ${props => props.color}
`