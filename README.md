<h1 align="center">
    <br>
    <p align="center">Semana 18 - Projeto Final: sempreAjudar<p>
</h1>

<p align="center">
  <img src="img/logo_sempre_Ajudar.png" />
</p>


## Sumário 

- [Apresentação](#apresentação)
- [Objetivo](#objetivo)     
- [Funcionalidades](#funcionalidades)  
- [Arquitetura](#arquitetura)    
- [Tecnologias](#tecnologias)
- [REST API](#rest-api)
- [Instalação](#instalação)

</br>

## **Apresentação**

O "sempreAjudar" é um projeto de conclusão de curso do bootcamp de Back-end da [{reprograma}](https://reprograma.com.br/) em parceria com a [Accenture](https://www.accenture.com/br-pt). O projeto consiste na construção de uma API que tem como objetivo realizar doações para diversas ONGs do Brasil.

## **Objetivo**

No Brasil, muitas pessoas dependem da ação de ONGs para levar uma vida justa e com dignidade. No entanto, com a pandemia, organizações tiveram uma queda na captação de recursos e, consequentemente, se viram forçadas a parar de desenvolver seus trabalhos.

A partir daí nasceu o sempreAjudar, uma API que permite realizar doações a diversas ONGs existentes no país. A API centraliza todas as instituições das mais diferentes áreas de atuação, como educação, saúde, esporte, etc. e permite que pessoas e/ou empresas possam doar recursos para quem mais necessita neste momento tão delicado.

## **Funcionalidades**

- [x] Criar uma ONG que necessite de doações
- [x] Listar todas as ONGs cadastradas/existentes no sistema
- [x] Encontrar uma ONG específica (por seu ID)
- [x] Deletar ONGS que estão inativas
- [x] Realizar uma doação
- [x] Listar todas as doações feitas até o momento
- [x] Atualizar uma doação

## **Arquitetura**

```
 📁 projetoFinal
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 donateController.js
   |         |- 📄 ongsController.js
   |         |- 📄 usersController.js
   |
   |    |- 📁 models
   |         |- 📄 donate.js
   |         |- 📄 ongs.js
   |         |- 📄 users.js
   |
   |    |- 📁 routes
   |         |- 📄 donate.routes.js
   |         |- 📄 index.routes.js
   |         |- 📄 ongs.routes.js
   |         |- 📄 users.routes.js
   |
   |    |- 📄 app.js
   |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |  📄 Procfile
   |- 📄 server.js
```
## **Tecnologias**

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>

</br>
</br>

## **REST API**

sempreAjudar API Documentation: https://sempre-ajudar.herokuapp.com/api-docs/


## **Instalação**

- Faça um fork ou um clone do projeto pelo link (<https://github.com/carolana/sempreAjudar.git>);
- Instale as dependências necessárias executando o comando 'npm install';
- Crie um .env com o parâmetro `MONGODB_URL` e  `SECRET` e coloque a sua conexão com o robo3T e sua chave privada
- Para executar a API, execute o comando 'npm start'

## **Autora**

- Ana Carolina Pereira dos Santos

### Contato:
[<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/carol-santos-1356b2122/) 
[![gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:carolanap7@gmail.com)