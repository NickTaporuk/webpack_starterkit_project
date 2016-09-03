const sayHello = require('./say-hello');

require('./css/main.scss');

/*var imgElement = document.createElement('img');

imgElement.src = require('./images/70143972_03.png');

document.body.appendChild(imgElement);*/

sayHello('Nicholay Kuropatkin', document.querySelector('h2'));