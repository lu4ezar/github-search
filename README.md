*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```
git clone https://github.com/lu4ezar/github-search
cd github-search
yarn install
yarn start
```

Краткое описание:

3 компонента: App, List, Project (listItem).  
State: error, loading, query, data.  
App получает из store поисковую строку, метод для её изменения и loading для показа спиннера. Этот же метод диспатчит экшн
REQUEST_DATA если длина строки достигла 3х символов (только из-за него добавил redux-thunk, наверное тут можно было пойти другим путём).  
List получает error для вывода сообщения об ошибке и data для передачи в Project. Для оптимизации использован react-window.  
2 саги: watcher и worker. Debounce реализован с помощью takeLatest и delay. Watcher слушает последний REQUEST_DATA, worker ждёт 1000мс, потом делает запрос, и либо приводит данные в нужный вид и вызывает reducer, либо возвращает ошибку.  
И loading, и error регулируются экшенами REQUEST_DATA.
