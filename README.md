# Infinite-pagination

A list component that can display revenue stats sorted by date, Throttling requests to max 1 request every 3s.

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## :octopus: Getting Started

|     | Specs                                                                    |
| --- | ------------------------------------------------------------------------ |
| ⚛️  | **React 16.12**. latest stable version of react                          |
| ✨  | **React Hooks** [React hooks](https://reactjs.org/docs/hooks-intro.html) |
| 😎  | **TypeScript** JavaScript that scales.                                   |

## :cloud: Installation

Makefiles aren't Windows friendly, if you have minGW64 and whole environment to run the makefile(Unix/macOS) do this:

```sh
make installation
make start
access http://localhost:8080/
```

If you **don't** have makefile enviroment ready, do this instead :

```sh

npm install or yarn
npm run start or yarn start
access http://localhost:8080/
```

**Requires node >= 10.0.0**

## Unit Tests

`npm run test:coverage`

Coverage Tests =~ 73%.

[Testing Behaviors and not implementation details](https://kentcdodds.com/blog/testing-implementation-details)

## Features

1. Infinite Scroll - After scrolling to the end of page, load the next page.

## :exclamation: Credits

Yuri Ramos

## :scroll: License

MIT
