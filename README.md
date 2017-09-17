# Phaser + ES6 + Webpack + Spring Boot.
#### A bootstrap project to create games with Phaser + ES6 + Webpack + Spring Boot.

This project is a spring boot wrapper on top of: https://github.com/lean/phaser-es6-webpack

![Phaser+ES6+Webpack](https://raw.githubusercontent.com/lean/phaser-es6-webpack/master/assets/images/phaser-es6-webpack.jpg)
![Spring Boot](https://raw.githubusercontent.com/espiegel/phaser-spring-boot-starter/master/spring-boot-logo.jpg)


## Features
- ESLINT with JavaScript Standard Style configuration
- Next generation of Javascript
- Browsers are automatically updated as you change project files
- Webpack ready
- WebFont Loader

# Setup

## 1. Clone this repo:

Navigate into your workspace directory.

Run:

```git clone https://github.com/espiegel/phaser-spring-boot-starter.git```

## 2. Install node.js and npm:

https://nodejs.org/en/


## 3. Install dependencies (optionally you could install [yarn](https://yarnpkg.com/)):

Navigate to the cloned repo’s directory.

Run:

```npm install``` 

or if you choose yarn, just run ```yarn```

## 4. Run the development server:

Run:

```npm run dev```

This will run a server so you can run the game in a browser.

Open your browser and enter localhost:3000 into the address bar.

Also this will start a watch process, so you can change the source and the process will recompile and refresh the browser


## Build for deployment:

Run:

1. ```mmvn spring-boot:run```

This will optimize and minimize the compiled bundle.

## Credits
Big thanks to: https://github.com/lean/phaser-es6-webpack
