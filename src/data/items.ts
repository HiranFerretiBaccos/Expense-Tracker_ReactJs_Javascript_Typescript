//Array com os Objetos 'items', no Plural.

import { Item } from '../types/Item';  //Importando o type do meu Objeto abaixo.

export const items: Item[] = [         //Meu Array de Objetos será do type Array de 'Item' Importado acima e criado em outra pasta.
    {
        date: new Date(2022, 1, 6),
        category: 'food',
        title: 'McDonalds',
        value: 32.50
    },
    {
        date: new Date(2022, 1, 13),
        category: 'food',
        title: 'Burger King',
        value: 64.20
    }, {
        date: new Date(2022, 1, 16),
        category: 'rent',
        title: 'Apartment',
        value: 5100
    }, {
        date: new Date(2022, 1, 18),
        category: 'salary',
        title: 'Tech Company',
        value: 8500
    },
    {
        date: new Date(2022, 2, 18),
        category: 'food',
        title: 'KFC',
        value: 32.50
    },
    {
        date: new Date(2022, 2, 18),
        category: 'food',
        title: 'Wendys',
        value: 28.40
    }
]