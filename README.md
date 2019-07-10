# Desafio JExperts

Possível solução para o desafio proposto para vaga de front end da JExperts


## Ferramentas utilizadas

- create-react-app (Gerador do boilerplate da aplicação)
- bootstrap (framework para estilização)
- react-router (gerenciador de rotas)
- redux (gerenciador de estado da aplicação)
- redux-thunk (middleware que permite retornar funções em vez de actions, usado também para criar as actions-creator )
- axios (Para realizar as requisições da API)
- font-awesome (Como biblioteca de ícones)


## Estrutura de Pastas

| Nome da Pasta  | Descrição                                                                   |
| -------------- | --------------------------------------------------------------------------- |
| `assets`       | Imagens e arquivos estáticos                                                |
| `components`   | Componentes da aplicação                                                    |
| `pages`        | As páginas da aplicação que serão usadas nas rotas e chamá os componentes   |
| `redux-flow`   | Contém a criação da store e os reducers que serão utilizados                |
| `utils`        | Variáveis uteis para a aplicação                                            |

## Scripts
  
  Para iniciar o projeto localmente:
  `yarn start` 
  
  Ou para gerar os arquivos estáticos:
  `yarn build` 

## Reducers

Para a aplicação foi criado 4 reducers, se localizam no diretório `./src/redux-flow/reducers` cada um dos reducers possui 3 arquivos:

- index.js que é o reducer em si
- actions.js que possui as variáveis com o nome das ações
- action-creators na qual são as funções que disparam as ações para alterar os reducers

Os 4 reducers são:

- auth: estados e ações usados pelos componentes de login e autenticação 
- cadastro: estados e ações usados pelos componentes da página de cadastro de usuário
- edit: estados e ações usados pelos componentes da página de alteração de usuário
- users: estados e ações usados pelos componentes da página que exibe a lista de usuários

## Rotas

### Com autenticação:

`/` : Exibe a lista de usuários
`/editar` : Onde é possível editar o Usuário
`/cadastrar` : Onde é possível cadastrar um novo Usuário

### Sem autenticação:

`/` : Exibe a página de login
`/cadastrar` : Onde é possível cadastrar um novo Usuário


## Observações

- Foi priorizado o uso de estados gerenciados pelo redux, no entanto alguns componentes possuem também estados auto-gerenciáveis mais simples


## Author

| ![Willian Rodrigues](https://avatars1.githubusercontent.com/u/28413303?v=3&s=150)|
|:---------------------:|
|  [Willian Rodrigues](https://github.com/willianrssi/)   |