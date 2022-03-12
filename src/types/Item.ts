//Arquivo de type, onde tipa as Propriedades do Objeto 'items' e é chamado lá.
//Aqui ñ é export const, como de um Componente React ou styled-components. É export 'type'

export type Item = {
    date: Date;
    category: string;
    title: string;
    value: number;
}