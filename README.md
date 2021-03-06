# globalchat.online

<img width="150" alt="screen shot 2018-06-24 at 3 24 36 pm" src="https://user-images.githubusercontent.com/5343215/41824682-219289e0-77da-11e8-86a1-9d8be23a903c.png">

Chat with others in the world, even you can't say their language.

[![Build Status](https://travis-ci.com/backslash112/globalchat-expressjs.svg?token=tyH6w5XwPvDhsxMVozmy&branch=master)](https://travis-ci.com/backslash112/globalchat-expressjs)

##  Using Skills

- Node.js
- [Express.js](https://github.com/expressjs/express/) (Node.js web application framework)
- Authentication with JWT (JSON Web Token)
- DigitalOcean
- Continuous Deployment with Travis CI
- Docker
- Unit Test with [Mocha](https://github.com/mochajs/mocha) (a JavaScript test framework running on Node.js)
- [Google Cloud Translation API](https://cloud.google.com/translate/docs/)

## Tests
To run the test suite, first install the dependencies, then run npm test:
```
$ npm install
$ npm test
```
or you can do that with Docker:
```
docker run -it --rm  -v "$PWD":/usr/src/app -w /usr/src/app node /bin/bash -c 'npm i && npm test'
```

## Run
```
docker run -it --rm -p 8080:8080 -v "$PWD":/usr/src/app -w /usr/src/app node /bin/bash -c ' npm i nodemon -g && nodemon app.js'
```

<!-- - [Angular 6](https://github.com/angular/angular)
- [Angular Material 2](https://github.com/angular/material2)
- JavasSript + [TypesSript](https://github.com/Microsoft/TypeScript) -->