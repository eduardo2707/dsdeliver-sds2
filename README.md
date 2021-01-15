# DS Delivery 
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/eduardo2707/dsdeliver-sds2/blob/main/LICENSE) 

# Sobre o projeto
Clique aqui para ver o site:
https://eduardo2707-sds2.netlify.app/

**DS Delivery** é uma aplicação full stack web e mobile construída durante a 2ª edição da **Semana DevSuperior**, evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação web consiste em um sistema de entrega de pedidos onde se pode selecionar os produtos cadastrados, colocar a localização de entrega e ver o total dos preços para realizar o pedido. Também foi feito um app mobile para o entregador,
que quando aberto lista todos os pedidos e consegue abrir o google maps ja selecionado na localização que o pedido foi armazenado.

## Layout mobile
![Mobile 1](https://github.com/eduardo2707/dsdeliver-sds2/blob/main/assets/front-mobile-home.jpeg) 
![Mobile 2](https://github.com/eduardo2707/dsdeliver-sds2/blob/main/assets/front-mobile-orders.jpeg?raw=true)
![Mobile 3](https://github.com/eduardo2707/dsdeliver-sds2/blob/main/assets/front-mobile-ordersDetails.jpeg?raw=true)

## Layout web
![Web 1](https://github.com/eduardo2707/dsdeliver-sds2/blob/main/assets/front-web-home.jpeg?raw=true)
![Web 2](https://github.com/eduardo2707/dsdeliver-sds2/blob/main/assets/front-web-orders1.jpeg?raw=true)
![Web 3](https://github.com/eduardo2707/dsdeliver-sds2/blob/main/assets/front-web-orders2.jpeg?raw=true)

## Modelo conceitual
![Modelo Conceitual](https://raw.githubusercontent.com/devsuperior/sds2/master/assets/modelo-conceitual.png)

## Padrão camadas adotado
![Padrão Camadas adotado](https://raw.githubusercontent.com/devsuperior/sds2/master/assets/camadas.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
- Expo
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/devsuperior/sds2

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/devsuperior/sds2

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
npm install

# executar o projeto
npm start
```

# Autor

Eduardo Alves da silva

https://www.linkedin.com/in/eduardo-alves-34372a1b4
