<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Prerequisites
Kindly create the database before running the application 

```
CREATE DATABASE LIBRARY;
```


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


-------------------------------------------------------------------------



```
GET /
```
This API can be used for health check .

Request url :

http://localhost:3000/

Response body: 

```
Hello World!

```

-------------------------------------------------------------------------

```
GET /members/getall
```

Request url : 

http://localhost:3000/members/getall

Response body :

```
[
  {
    "id": "2a6de641-501e-4aa6-8219-ba7297bcbe78",
    "memberId": "38f9d4f9-7e13-427a-9480-4a549237da0b",
    "email": "rohit@gmail.com",
    "phone": "9834332678",
    "address": "Pune"
  },
  {
    "id": "5e26ed38-92d1-4d63-9956-a87b3e140156",
    "memberId": "99fce759-d145-4b71-8fed-b58791f2214a",
    "email": "chinmay@gmail.com",
    "phone": "9834332655",
    "address": "Pune"
  },
  {
    "id": "d8ccfe43-a2da-412a-b213-cb598a93ca2c",
    "memberId": "adb3ae8b-68a0-428f-a8e9-ff88a24fba05",
    "email": "vishalv@gmail.com",
    "phone": "98343326585",
    "address": "Pune"
  },
  {
    "id": "9888a44d-4555-4be4-af2c-726a641187b6",
    "memberId": "7ff1cc79-623e-42f8-ace9-ba45e3a5ef02",
    "email": "chinmaydeshpande34@gmail.com",
    "phone": "124567832",
    "address": "Nanded"
  },
  {
    "id": "d133f361-da95-4b7f-8837-6a9df9c44455",
    "memberId": "f5797340-df4e-4a1c-af0a-fdd45cb9c8d1",
    "email": "hrishi@gmail.com",
    "phone": "9876543210",
    "address": "nanded"
  },
  {
    "id": "d7337133-ea8e-464f-a5d2-479832d2e738",
    "memberId": "028861cf-bc78-4758-96f2-4c7209687ee8",
    "email": "abc@gmail.com",
    "phone": "1234567090",
    "address": "Pune"
  }
]
```

-------------------------------------------------------------------------


```
POST /members/create
```
Request url : 

http://localhost:3000/members/create

Request payload : 
```
{
  "email": "chinmay123@gmail.com",
  "phone": "9834332655",
  "address": "Pune"
}
```
Response body :

```
{
  "email": "chinmay123@gmail.com",
  "phone": "9834332655",
  "address": "Pune",
  "id": "e7a4292b-5650-44c1-bf0e-be6da6e8e563",
  "memberId": "096e7379-dae9-44c3-bae1-b67b0ee917f2"
}
```

-------------------------------------------------------------------------

```
GET /members/history/{memberId}
```
Request url:

http://localhost:3000/members/history/028861cf-bc78-4758-96f2-4c7209687ee8

Response body:
```
{
  "message": "Borrowing history fetched successfully",
  "statusCode": 200,
  "data": [
    {
      "id": "f9100811-cd93-4313-b1fa-54600ead1654",
      "status": "borrowed",
      "borrowedDate": "2024-01-07T11:35:17.244Z",
      "expectedReturnDate": "2024-01-22T11:35:17.244Z",
      "returnedDate": null,
      "book": {
        "bookId": "5131b02b-3840-4a6b-a815-415d76836cc0",
        "bookName": "jadugar",
        "author": "tony stark",
        "ISBN": "456789123",
        "publicationYear": 2010,
        "genre": "Story",
        "quantityAvailable": 9
      },
      "member": {
        "id": "d7337133-ea8e-464f-a5d2-479832d2e738",
        "memberId": "028861cf-bc78-4758-96f2-4c7209687ee8",
        "email": "abc@gmail.com",
        "phone": "1234567090",
        "address": "Pune"
      }
    },
    {
      "id": "3a5005c9-3a3f-4156-b738-c6b8b637b4d8",
      "status": "returned",
      "borrowedDate": "2024-01-07T11:40:06.065Z",
      "expectedReturnDate": "2024-01-22T11:40:06.065Z",
      "returnedDate": "2024-01-07T11:40:23.591Z",
      "book": {
        "bookId": "cb9759e4-41ba-4958-a297-7a82a247f81c",
        "bookName": "Ikigai",
        "author": "Hector",
        "ISBN": "45678912345",
        "publicationYear": 2000,
        "genre": "Inspiration",
        "quantityAvailable": 30
      },
      "member": {
        "id": "d7337133-ea8e-464f-a5d2-479832d2e738",
        "memberId": "028861cf-bc78-4758-96f2-4c7209687ee8",
        "email": "abc@gmail.com",
        "phone": "1234567090",
        "address": "Pune"
      }
    }
  ]
}
```
-------------------------------------------------------------------------

```
GET /book/allbooks
```
Request url:

http://localhost:3000/book/allbooks


Response body:
```
{
  "message": "Books fetched successfully",
  "statusCode": 202,
  "data": [
    {
      "bookId": "7eed3a0f-7980-4cbe-b887-9b4e907e8dcb",
      "bookName": "Internet of Things",
      "author": "J.D. Salinger",
      "ISBN": "978014023750645",
      "publicationYear": 1951,
      "genre": "Fiction",
      "quantityAvailable": 18
    },
    {
      "bookId": "c6296cfe-de6e-40cf-9dd8-25ac0357ed74",
      "bookName": "Naruto",
      "author": "J.D. Salinger",
      "ISBN": "9780140237505",
      "publicationYear": 1951,
      "genre": "Fiction",
      "quantityAvailable": 19
    },
    {
      "bookId": "96aedbcb-c0fa-4ad3-a640-ce9ebaedf19a",
      "bookName": "Abc",
      "author": "J.D. Salinger",
      "ISBN": "978014023705",
      "publicationYear": 1951,
      "genre": "Fiction",
      "quantityAvailable": 20
    },
    {
      "bookId": "4161d6c1-291d-48ce-8bec-41aae605b5b8",
      "bookName": "Wings of Fire",
      "author": "Abdul Kalam",
      "ISBN": "12345678910",
      "publicationYear": 2001,
      "genre": "Biography",
      "quantityAvailable": 10
    },
    {
      "bookId": "e0b51204-8ef7-43d3-a91c-3246c8e9cf6c",
      "bookName": "Alchemist",
      "author": "someone",
      "ISBN": "6546574654654",
      "publicationYear": 1990,
      "genre": "Novel",
      "quantityAvailable": 30
    }
  ]
}
```
-------------------------------------------------------------------------

```
POST /book/addbook
```

Request url :

http://localhost:3000/book/addbook

Request Payload : 

```
{
  "bookName": "Ikigai",
  "author": "Hector",
  "ISBN": "45678912345",
  "publicationYear": 2000,
  "genre": "Inspiration",
  "quantityAvailable": 30
}
```

Response body:

```
{
  "message": "Book added successfully",
  "statusCode": 201,
  "data": {
    "bookName": "Ikigai",
    "author": "Hector",
    "ISBN": "45678912345",
    "publicationYear": 2000,
    "genre": "Inspiration",
    "quantityAvailable": 30,
    "bookId": "cb9759e4-41ba-4958-a297-7a82a247f81c"
  }
}
```
-------------------------------------------------------------------------

```
POST /book/borrow/bookId/memberId
```
Request url :

http://localhost:3000/book/borrow/cb9759e4-41ba-4958-a297-7a82a247f81c/028861cf-bc78-4758-96f2-4c7209687ee8

Response body:

```
{
  "message": "Book borrowed successfully",
  "statusCode": 200,
  "data": {
    "message": "Book borrowed successfully",
    "transactionId": "3a5005c9-3a3f-4156-b738-c6b8b637b4d8"
  }
}
```

-------------------------------------------------------------------------

```
POST /book/return/{borrowingId}
```

Request url:

http://localhost:3000/book/return/3a5005c9-3a3f-4156-b738-c6b8b637b4d8

Response body:

```
{
  "message": "Book returned successfully",
  "statusCode": 200,
  "data": {
    "message": "Book returned successfully",
    "transactionId": "3a5005c9-3a3f-4156-b738-c6b8b637b4d8"
  }
}
```

-------------------------------------------------------------------------

```
GET /book/multiple-borrowing

```

Request url:

http://localhost:3000/book/multiple-borrowers

Response body:

```
{
  "message": "Books with multiple borrowers fetched successfully",
  "statusCode": 200,
  "data": [
    {
      "bookName": "Internet of Things",
      "borrowerCount": 2
    },
    {
      "bookName": "Naruto",
      "borrowerCount": 2
    }
  ]
}
```


