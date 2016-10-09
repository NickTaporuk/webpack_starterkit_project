# webpack_starterkit_project

Instalation
-----------
    link for webpack [codeguida](http://codeguida.com/post/454/)
    link for webpack and reactjs  [blog](https://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html)
    npm install webpack -g
    
Local server install  for local  development with project
---------------------------------------------------------
    npm install webpack-dev-server -g

webpack server run
------------------
    webpack-dev-server -p 5000
    link local server open http://localhost:5000/webpack-dev-server/

npm install modules for js loader
---------------------------------
    npm install babel-loader babel-core babel-preset-es2015 babel-preset-react babel-preset-stage-0 --save-dev

npm install modules for css loader
----------------------------------
    npm install style-loader css-loader

npm install modules for scss loader
-----------------------------------
    npm install sass-loader node-sass
    
npm install modules for url
---------------------------
    npm install url-loader

npm install modules for reactjs
-------------------------------
    npm install --save-dev react react-dom

npm install modules for jsx
---------------------------
    npm install --save-dev jsx-loader

npm install react-router
------------------------
    npm install --save react-router

npm install modules for hot loader jsx
--------------------------------------
    npm install --save-dev react-hot-loader

npm install preloader jshint
----------------------------
    npm install jshint -g
    npm install jshint-loader 

npm install extract-text-webpack-plugin
---------------------------------------
    npm install extract-text-webpack-plugin --save

npm install redux
-----------------
    npm install --save redux

npm install react-redux
-----------------------
    link [react with redux](http://redux.js.org/docs/basics/UsageWithReact.html)
    npm install --save react-redux
    
npm install redux-devtools
--------------------------
    npm install --save-dev redux-devtools
    
npm install react-polyfill
--------------------------
    https://maxfarseer.gitbooks.io/redux-course-ru/content/es2015,_react_hmr.html
    npm install babel-polyfill --save

Добавим в webpack возможность обрабатывать стили, заодно сразу накинув на них возможности autoprefixer'а
--------------------------------------------------------------------------------------------------------
    npm install style-loader css-loader postcss-loader autoprefixer precss --save-dev

install redux-logger
--------------------
    npm i --save redux-logger

install redux-thunk
-------------------
    npm install redux-thunk --save
install isomorphic-fetch
------------------------
    npm install --save isomorphic-fetch es6-promise
