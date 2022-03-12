import * as C from './App.styles';
import { useState, useEffect } from 'react';
//types 
import { Item } from './types/Item';
import { Category } from './types/Category';
//data 
import { items } from './data/items';
import { categories } from './data/categories';
//helpers
import { getCurrentMonth, filterListByMonth } from './helpers/DateFilter';
//components
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

export const App = () => {

  const [list, setList] = useState(items);                               //Meu Estado 'list' recebe meu Objeto 'items' já Tipado 'Item'.
  const [filteredList, setFilteredList] = useState<Item[]>([]);          //Meu Estado 'filteredList' recebe um Array vazio do tipo Array de 'Item'.
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());   //Rodo a Função 'getCurrentMonth' do 'DateFilter' no 'helpers' aqui meu Estado/Hook.
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);                                               //Meu useEffect vai Monitorar meu Estado 'list' e 'currentMonth'.

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setExpense(expenseCount);
    setIncome(incomeCount);

  }, [filteredList]);                                                     //Sempre que Modificar o Estado 'filteredList', roda essa função do useEffect() que fica Monitorando o meu Estado.

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <>
      <C.Container>
        <C.Header>
          <C.HeaderText>Expense Tracker!</C.HeaderText>
        </C.Header>
        <C.Body>
          <InfoArea
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            income={income}
            expense={expense}
          />

          <InputArea onAdd={handleAddItem} />

          <TableArea list={filteredList} />                               {/*3ª Etapa da prop 'list'*/}

        </C.Body>
      </C.Container>
    </>
  )
}

export default App;