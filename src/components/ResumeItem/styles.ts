import styled from 'styled-components';

export const Container = styled.div`
    flex:1;
`

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    color: #666;
    margin-bottom: 6px;
`

export const Info = styled.div<{ color?: string }>`
    text-align: center;
    font-weight: bold;
    color: ${props => props.color ?? '#000'};
`
//1ª e 2ª Etapa da Prop 'color'.