import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/DateFilter';
import { categories } from '../../data/categories';

type Props = {
    item: Item
}

//Esse Componente TableItem é 1 Item/1 Linha da minha Tabela.
export const TableItem = ({ item }: Props) => {                         //1 Etapa da prop 'item' Tipada de 'Item',
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>    {/*De onde vem category e color?*/}
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    )
}