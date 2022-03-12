import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) => {                            //1ª Etapa da prop 'list'.
    return (
        <C.Table>
            <thead>
                <C.TableHeadColumn width={140}>Data</C.TableHeadColumn>
                <C.TableHeadColumn width={150}>Categoria</C.TableHeadColumn>
                <C.TableHeadColumn>Título</C.TableHeadColumn>
                <C.TableHeadColumn width={100}>Valor</C.TableHeadColumn>
            </thead>
            <tbody>
                {list.map((item, index) => (                                //2ª Etapa da prop 'list'.
                    <TableItem key={index} item={item} />                   //3ª Etapa da prop 'item'.
                ))}
            </tbody>
        </C.Table>
    )
}