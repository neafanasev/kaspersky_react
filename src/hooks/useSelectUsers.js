import { useSelector } from 'react-redux';

const useSelectUsers = () => {
  const users = useSelector((state) => state.users.users)
  const selectedGroup = useSelector((state) => state.users.selectedGroup)
  const sortOrder = useSelector((state) => state.users.sortOrder)
  const sortColumn = useSelector((state) => state.users.sortColumn)
  const searchValue = useSelector((state) => state.users.searchValue)
  const searchField = useSelector((state) => state.users.searchField)

  const searchFields = searchField === 'everywhere' ? ['fullname', 'group', 'email', 'phone', 'city', 'salary'] : [searchField];


  // Поиск. Временная сложность O(n). Пояснение после функции
  const newUsers1 = users[selectedGroup].filter(user => { // users
    for (let searchField of searchFields)  // fields
      if (user[searchField].toString().toLowerCase().includes(searchValue)) // string*substring
        return true;
    return false;
  });
  // Временная сложность поиска O(users*fields*string*substring), где
  // fields - количество полей, string - символов строке, substring - символов в подстроке.
  // В реальной жизни количество полей, символов в строке и подстроке ограничено
  // (в гипотетическом веб-приложении длина полного имени будет максимум 60
  // символов, емейла, телефона и прочего и и того меньше). Поэтому получаем
  // O(users*const*const*const) = O(n)


  // Сортировка. Временная сложность O(n*log n)
  if (sortOrder === 'asc') {
    newUsers1.sort((a, b) => a[sortColumn] > b[sortColumn] ? 1 : -1);
  } else if (sortOrder === 'desc') {
    newUsers1.sort((a, b) => a[sortColumn] < b[sortColumn] ? 1 : -1);
  }

  return newUsers1;
};

export default useSelectUsers;