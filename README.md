# Piggy Bank 💲

Aplicação, Back-end para gerenciamento financeiro, em que é possível registrar e listar transações.

Feito como exercício do curso "GoStack".


## 💾Instalação

1. Clone o repositório  ```git clone {URL_DO_REPOSITORIO}```
2. Execute o comando ```yarn```  na pasta do projeto clonado para instalar todas as dependências.
3. Execute o comando ```yarn dev:server```  para executar o projeto.
4. Execute o comando ```yarn tsc``` para construir a aplicação.

## 💹 Funções

- ### Listar: GET /transactions
Essa rota deve retornar uma listagem com todas as transações cadastradas, junto com o valor de soma de entradas, retiradas e total de crédito. Essa rota deve retornar um objeto com o formato a seguir:

```
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Rendimento Aplicação",
      "value": 500,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Manutenção Bike",
      "value": 100,
      "type": "outcome"
    },
  ],
  "balance": {
    "income": 500,
    "outcome": 100,
    "total": 400
  }
}
```
- ### Inserir: POST /transactions
A rota deve receber ```title```, ```value``` e ```type``` dentro do corpo da requisição, sendo ```type``` o tipo da transação, que deve ser ```income``` para entradas (depósitos) e ```outcome``` para saídas (retiradas). Ao cadastrar uma nova transação, ela deve ser armazenada dentro de um objeto com o seguinte formato :

```
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income"
}
```
**obs:** Uma transação do tipo ```outcome``` só pode ser inserida se existir crédito suficiente no balanço.

## 📑Licença

[MIT] (http://escolhaumalicenca.com.br/licencas/mit/)
