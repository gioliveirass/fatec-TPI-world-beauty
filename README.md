<h1 align="center">
  <a id="topo">Agenda World Beauty </a>
</h1>

<p align="center"> 
  <a href="#descricao"> Descrição do projeto </a> • <a href="#tecnologias">Tecnologias utilizadas </a> • <a href="#funcionalidades"> Funcionalidades </a> • <a href="#arquivos-pastas"> Arquivos e pastas </a>  • <a href="#executando"> Executando a aplicação </a> 
</p>

## <a id="descricao"> Descrição do projeto </a>

Atividade prática desenvolvida na disciplina Técnicas de Programação I da Faculdade de Tecnologia de São José dos Campos, que consiste na criação de um sistema do tipo CLI (command-line interface) que tem como objetivo suprir as necessidades do grupo fictício World Beauty (WB). Todos os requisitos foram disponibilizados pelo professor através de um documento em PDF.

>📌 Status do projeto: Finalizado.

## <a id="tecnologias"> Tecnologias utilizadas </a>

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

## <a id="funcionalidades"> Funcionalidades </a>

De acordo com os requisitos apresentados pelo professor, foram desenvolvidas as seguintes funcionalidades:

### 🖥 CRUD de Clientes

Opções de cadastrar um novo cliente, listar todos os clientes, atualizar informações de um cliente e deletar o cadastro de um cliente. Veja abaixo uma demonstração dessa funcionalidade:

![Demonstração do CRUD de Clientes](/.github/clientesCRUD)

### 🖥 CRUD de Produtos

Opções de cadastrar um novo produto, listar todos os produtos, atualizar informações de um produto e deletar o cadastro de um produto. Veja abaixo uma demonstração dessa funcionalidade:

![Demonstração do CRUD de Produtos](/.github/produtosCRUD)

### 🖥 CRUD de Serviços

Opções de cadastrar um novo serviço, listar todos os serviços, atualizar informações de um serviço e deletar o cadastro de um serviço. Veja abaixo uma demonstração dessa funcionalidade:

![Demonstração do CRUD de Serviços](/.github/servicosCRUD)

### 🖥 Listagens importantes

Foram solicitadas seis tipos de listagens diferentes, sendo elas:

- Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor;
- Listagem de todos os clientes por gênero;
- Listagem geral dos serviços ou produtos mais consumidos;
- Listagem dos serviços ou produtos mais consumidos por gênero;
- Listagem dos 10 clientes que menos consumiram produtos ou serviços;
- Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.

Todas as listagens exigidas foram implementadas no sistema, e é possível conferir abaixo uma breve demonstração delas:

![Demonstração das listagens importantes](/.github/listagens)

## <a id="arquivos-pastas"> Arquivos e pastas </a>

Todo o código da aplicação pode ser encontrado dentro da pasta [/src](https://github.com/gioliveirass/fatec-TPI-world-beauty/tree/main/src), que é dividida em três subpastas:

- 📁 [/model](https://github.com/gioliveirass/fatec-TPI-world-beauty/tree/main/src/models): Onde ficam as classes que definem o cliente, produto, serviço, empresa, CPF, telefone e RG.
- 📁 [/view](https://github.com/gioliveirass/fatec-TPI-world-beauty/tree/main/src/view): Onde fica parte visual da aplicação. Nesse caso, contém o index da aplicação e as opções de cada menu.
- 📁 [/controllers](https://github.com/gioliveirass/fatec-TPI-world-beauty/tree/main/src/controllers): Onde ficam as classes de cada funcionalidade gerada.
- 📁 [/utils](https://github.com/gioliveirass/fatec-TPI-world-beauty/tree/main/src/utils): Classes auxiliares, que podem ser importadas em vários outros arquivos se houver necessidade.

## <a id="executando"> Executando a aplicação  </a>

Para que o projeto funcione em sua máquina, você precisa ter instalado o [Node.js](https://nodejs.org/en/). Também é necessário instalar o [Git](https://git-scm.com/) para clonar o repositório. Se já tiver feito as instalações necessárias, clone o projeto, abra sua pasta no terminal e execute as linhas de comando:

```powershell
# Para instalar as dependências:
$ npm install 

# Para compilar o TypeScript:
$ tsc

# Para rodar o projeto:
$ npm run app
```

<hr>
<p align="center">
  ✨ Projeto desenvolvido por <a href="https://github.com/gioliveirass">@gioliveirass</a> ✨
  <br><br>
  <img src="https://img.shields.io/badge/Made%20with-Magic-orange?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTM5NS44MiAxODIuNjE2LTE4OC43MiAxODguNzItMTIuOTEgMS43Mi05LjM1IDIwLjU0LTM0LjMxIDM0LjMxLTExLjAxLS43My0xMS4yNSAyMi45OS01Ni40OCA1Ni40OGMtMi45MyAyLjkzLTYuNzcgNC4zOS0xMC42MSA0LjM5cy03LjY4LTEuNDYtMTAuNjEtNC4zOWwtMjIuNjItMjIuNjJoLS4wMWwtMjIuNjItMjIuNjNjLTUuODYtNS44Ni01Ljg2LTE1LjM2IDAtMjEuMjJsNzcuNjMtNzcuNjMgMTYuNi03LjAzIDUuNjYtMTUuMjMgMzQuMzEtMzQuMzEgMTQuODQtNC45MiA3LjQyLTE3LjM0IDE2Ny41Ny0xNjcuNTcgMzMuMjQgMzMuMjR6IiBmaWxsPSIjZjY2Ii8+PHBhdGggZD0ibTM5NS44MiAxMTYuMTQ2djY2LjQ3bC0xODguNzIgMTg4LjcyLTEyLjkxIDEuNzItOS4zNSAyMC41NC0zNC4zMSAzNC4zMS0xMS4wMS0uNzMtMTEuMjUgMjIuOTktNTYuNDggNTYuNDhjLTIuOTMgMi45My02Ljc3IDQuMzktMTAuNjEgNC4zOXMtNy42OC0xLjQ2LTEwLjYxLTQuMzlsLTIyLjYyLTIyLjYyIDMzNC42NC0zMzQuNjR6IiBmaWxsPSIjZTYyZTZiIi8+PHBhdGggZD0ibTUwNi42MSAyMDkuMDA2LTY5LjE0LTY5LjEzIDQzLjA1LTg4LjM4YzIuOC01Ljc1IDEuNjUtMTIuNjUtMi44OC0xNy4xNy00LjUyLTQuNTMtMTEuNDItNS42OC0xNy4xNy0yLjg4bC04OC4zOCA0My4wNS02OS4xMy02OS4xNGMtNC4zNS00LjM1LTEwLjkyLTUuNi0xNi41Ni0zLjE2LTUuNjUgMi40NS05LjIzIDguMDktOS4wNCAxNC4yNGwyLjg2IDkwLjQ1LTg1LjM3IDU3LjgzYy00LjkxIDMuMzItNy40IDkuMjItNi4zNiAxNS4wNCAxLjA0IDUuODMgNS40IDEwLjUxIDExLjE1IDExLjk0bDk2LjYyIDI0LjAxIDI0LjAxIDk2LjYyYzEuNDMgNS43NSA2LjExIDEwLjExIDExLjk0IDExLjE1Ljg3LjE2IDEuNzUuMjMgMi42Mi4yMyA0LjkyIDAgOS42LTIuNDIgMTIuNDItNi41OWw1Ny44My04NS4zNyA5MC40NSAyLjg2YzYuMTQuMTkgMTEuNzktMy4zOSAxNC4yNC05LjA0IDIuNDQtNS42NCAxLjE5LTEyLjIxLTMuMTYtMTYuNTZ6IiBmaWxsPSIjZmFiZTJjIi8+PHBhdGggZD0ibTI5Ni4yNiAyMTUuNzA2IDI0LjAxIDk2LjYyYzEuNDMgNS43NSA2LjExIDEwLjExIDExLjk0IDExLjE1Ljg3LjE2IDEuNzUuMjMgMi42Mi4yMyA0LjkyIDAgOS42LTIuNDIgMTIuNDItNi41OWw1Ny44My04NS4zNyA5MC40NSAyLjg2YzYuMTQuMTkgMTEuNzktMy4zOSAxNC4yNC05LjA0IDIuNDQtNS42NCAxLjE5LTEyLjIxLTMuMTYtMTYuNTZsLTY5LjE0LTY5LjEzIDQzLjA1LTg4LjM4YzIuOC01Ljc1IDEuNjUtMTIuNjUtMi44OC0xNy4xN3oiIGZpbGw9IiNmZDkwMjUiLz48cGF0aCBkPSJtNDY1IDQxNi45NjZjLTI1LjkyIDAtNDcgMjEuMDgtNDcgNDdzMjEuMDggNDcgNDcgNDcgNDctMjEuMDggNDctNDctMjEuMDgtNDctNDctNDd6IiBmaWxsPSIjZmFiZTJjIi8+PHBhdGggZD0ibTEwNCAyOC45NjZoLTEzdi0xM2MwLTguMjg0LTYuNzE2LTE1LTE1LTE1cy0xNSA2LjcxNi0xNSAxNXYxM2gtMTNjLTguMjg0IDAtMTUgNi43MTYtMTUgMTVzNi43MTYgMTUgMTUgMTVoMTN2MTNjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNXMxNS02LjcxNiAxNS0xNXYtMTNoMTNjOC4yODQgMCAxNS02LjcxNiAxNS0xNXMtNi43MTYtMTUtMTUtMTV6IiBmaWxsPSIjZmVkODQzIi8+PHBhdGggZD0ibTIwNy4xIDM3MS4zMzYtMjIuMjYgMjIuMjYtNDUuMzItODcuNjIgMjIuMjYtMjIuMjZ6IiBmaWxsPSIjZmVkODQzIi8+PHBhdGggZD0ibTE4NC44NCAzOTMuNTk2IDIyLjI2LTIyLjI2LTIyLjY2LTQzLjgxLTIyLjI2NSAyMi4yNjV6IiBmaWxsPSIjZmFiZTJjIi8+PHBhdGggZD0ibTE1MC41MyA0MjcuOTA2LTIyLjI2IDIyLjI2LTQ1LjMyLTg3LjYyIDIyLjI2LTIyLjI2eiIgZmlsbD0iI2ZlZDg0MyIvPjxwYXRoIGQ9Im0xMjguMjcgNDUwLjE2NiAyMi4yNi0yMi4yNi0yMi42NTUtNDMuODE1LTIyLjI2IDIyLjI2eiIgZmlsbD0iI2ZhYmUyYyIvPjxjaXJjbGUgY3g9IjE1IiBjeT0iMTE5Ljk2OSIgZmlsbD0iIzVlZDhkMyIgcj0iMTUiLz48Y2lyY2xlIGN4PSIxMjgiIGN5PSIxOTkuOTY5IiBmaWxsPSIjZDU5OWVkIiByPSIxNSIvPjxjaXJjbGUgY3g9IjE5MiIgY3k9IjYzLjk2NCIgZmlsbD0iI2Y2NiIgcj0iMTUiLz48Y2lyY2xlIGN4PSIzMjgiIGN5PSI0MTUuOTY3IiBmaWxsPSIjMzFiZWJlIiByPSIxNSIvPjxjaXJjbGUgY3g9IjQ0MCIgY3k9IjMyNy45NjciIGZpbGw9IiNhZDc3ZTMiIHI9IjE0Ljk5OSIvPjwvZz48L3N2Zz4=">
</p>
