//Array com os Objetos 'categories', no Plural.

import { Category } from '../types/Category';     //Importando o type do meu Objeto abaixo.

export const categories: Category = {              //Meu Array de Objetos será do type Category Importado acima e criado em outra pasta.
    food: { title: 'Alimentação', color: 'blue', expense: true },
    rent: { title: 'Aluguel', color: 'brown', expense: true },
    salary: { title: 'Salário', color: 'green', expense: false },
}