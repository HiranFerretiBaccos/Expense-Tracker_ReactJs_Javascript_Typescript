//Arquivo de type, onde tipa as Propriedades do Objeto 'categories' e é chamado lá.
//Aqui ñ é export const, como de um Componente React ou styled-components. É export 'type'

export type Category = {
    [tag: string]: {                               //Para simplificar e ñ ter o tipo de todos os Objetos dentro do 'categories'.
        title: string;
        color: string;
        expense: boolean;
    }
}