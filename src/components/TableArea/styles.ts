import styled from 'styled-components';
//Por ser um Componente, consigo passar Props para os styled-components.

export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 1.4rem;
    box-shadow: 0px 0px 8px #333;
    border-radius: 1rem;
    margin-top: 1.4rem;
`

//No caso, abaixo estou passando a prop 'width' tipada do TS e Deixando-a Opcional para ñ ser obrigatório
//Colocá-la em todas as Chamadas do Componente... e fazendo a Validação com If Ternário em seguida.
export const TableHeadColumn = styled.th<{ width?: number }>` 
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 6px 0;
    text-align: left;
`