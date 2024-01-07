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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


GET API /members/getall

Request Url : 

http://localhost:3000/members/getall
```
Response body :
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
