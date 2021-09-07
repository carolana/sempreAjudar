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

</br>

### Criar um usuário

</br>

#### Request

 `POST /users/create`

```
{
	"nome": "Giovanna Santos",
	"email": "giovanna@gmail.com",
	"senha": "teste5"
}
```
#### Response

    HTTP/1.1 200 OK
    Date: Sun, 05 Sep 2021 22:01:12 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 167

    {
        "nome": "Giovanna Santos",
        "email": "giovanna@gmail.com",
        "senha": "$2b$10$7wAnR5T5teG2ScsnKouWO.R11S.3Yv6QU33jS9mn4HLRSIbNiQAy2",
        "_id": "61353e288eabd1e07abbda76",
        "__v": 0
    }

### Realizar o login

 `POST /users/login`
 
 ```
 {
    "email": "giovanna@gmail.com",
    "senha": "teste5"
}
 ```

 #### Response

    HTTP/1.1 200 OK
    Date: Sun, 05 Sep 2021 22:04:21 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 196

    {
        "message": "Login realizado com sucesso",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imdpb3Zhbm5hQGdtYWlsLmNvbSIsImlhdCI6MTYzMDg3OTQ2MX0.ZcmZHwS5segSpvIsCbuBROm3HKa7kPRzvCuHBq4N6Sk"
    }





### Listar todas as ONGS existentes


#### Request

 `GET https://sempre-ajudar.herokuapp.com/ong`


#### Response

    HTTP/1.1 200 OK
    Date: Sun, 05 Sep 2021 20:27:07 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 1651

    []

### Criar uma nova ONG

</br>

#### Request

 `POST /ong/create`

```
{
	"nome": "Teste",
	"descricao": "Teste",
	"areaAtuacao": "Teste"
}
```


#### Response

    HTTP/1.1 201 Created
    Date: Sun, 05 Sep 2021 21:30:02 GMT
    Status: 201 Created
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 137

        {
            "_id": "613536dad6095628251d1c39",
            "nome": "Teste",
            "descricao": "Teste",
            "areaAtuacao": "Teste",
            "criadoEm": "2021-09-05T21:30:00.769Z",
            "__v": 0
        }

### Encontrar uma ONG pelo ID

#### Request

 `GET https://sempre-ajudar.herokuapp.com/ong/6137cd9716df24ab47f7808b`

```
{
	"nome": "Teste",
	"descricao": "Teste",
	"areaAtuacao": "Teste"
}
```

#### Response

    HTTP/1.1 200 OK
    Date: Sun, 05 Sep 2021 21:42:50 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 137

        {
            "_id": "613536dad6095628251d1c39",
            "nome": "Teste",
            "descricao": "Teste",
            "areaAtuacao": "Teste",
            "criadoEm": "2021-09-05T21:30:00.769Z",
            "__v": 0
        }

### Deletar uma ONG

#### Request

 `DELETE /ong/delete/6137cd9716df24ab47f7808b`

 #### Response

    HTTP/1.1 200 OK
    Date: Sun, 05 Sep 2021 21:46:26 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 137


    {
        "message": "ONG deletada com sucesso"
    }

### Listar todas as doações realizadas

#### Request

 `GET https://sempre-ajudar.herokuapp.com/donate`

 #### Response

    HTTP/1.1 200 OK
    Date: Sun, 05 Sep 2021 21:48:05 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 2062

    []

### Realizar uma doação

#### Request

 `POST /donate/create`

 ```
{
	"valor": "5633.00",
    "ong": "61298542199fa108d8435e66"
}
```
 #### Response

    HTTP/1.1 200 OK
    Date: Sun, 05 Sep 2021 21:51:39 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 120

    {
        "valor": 5633,
        "ong": "61298542199fa108d8435e66",
        "criadoEm": "2021-09-05T21:30:22.534Z",
        "_id": "61353beb8eabd1e07abbda71",
        "__v": 0
    }

### Atualizar uma doação

#### Request

 `PATCH /donate/update/6137d09716df24ab47f780af`

```
{
    "valor": "999.45"
}
```
 #### Response

    HTTP/1.1 200 OK
    Date: Sun, 05 Sep 2021 21:54:59 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 128

    {
        "_id": "61353beb8eabd1e07abbda71",
        "valor": 999.45,
        "ong": "61298542199fa108d8435e66",
        "criadoEm": "2021-09-05T21:30:22.534Z",
        "__v": 0
    }

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