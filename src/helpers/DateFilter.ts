//Tudo relacionado a Manipulação de Datas será nesse Arquivo. 
//No caso, uma Lista de Funções que fará uma Filtragem baseado em Datas. Isso facilita muito a Manutenção.
import { Item } from '../types/Item';

export const getCurrentMonth = () => {
    let now = new Date();                                               //Var recebe 1 Método JS para a Data atual.
    return `${now.getFullYear()} - ${now.getMonth() + 1}`;              //2 Métodos JS em seguida para pegar o Ano e o Mês(Default começa com 0 por isso o + 1)
}

export const filterListByMonth = (list: Item[], date: string): Item[] => { //O return será um Array de type 'Item'.
    let newList: Item[] = [];
    let [year, month] = date.split('-');                                   //JS Puro.

    for (let i in list) {
        if (
            list[i].date.getFullYear() === parseInt(year) &&               //Se o ano do meu Item específico for 2021, passou pelo 1ª Item...
            (list[i].date.getMonth() + 1) === parseInt(month)              //O Ano e o Mês do Item tem que bater com o Ano e o Mês que eu quero filtrar.
        ) {
            newList.push(list[i]);                                         //Vai gerar e Retornar abaixo uma Nova Lista com os itens do mesmo Ano e Mês.
        }
    }

    return newList;
}

export const formatDate = (date: Date): string => {                       //Prop 'date' será do tipo Date e retorna uma string.
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;    //Prop 'n' será do tipo number e retorna uma string

export const FormatCurrentMonth = (currentMonth: string): string => {      //Mandando a prop currentMonth que é uma string e o Retorno tbm será uma string.
    let [year, month] = currentMonth.split('-')
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return `${months[parseInt(month) - 1]} de ${year}`;
}