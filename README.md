Olives-jquery
=============

> Olives-jquery implements aliases for Olives.js and DOM manipulation that pipe back to a library of choice (jquery, zepto).


## Configuration


To switch of dom library, go into the ```src/js``` directory and modify the ```config.js``` file as following:

```js	
require.config({
	baseUrl : "js/core",
	shim : {
		//the dom alias (can be jquery or zepto)
		'dom' : {
			exports : '$',
			deps : ['zepto']
		}
	},
	paths : {
		jquery : '../libs/jquery-1.9.1.min',
		zepto : '../libs/zepto.min',
		dom : '../libs/dom'
	}
});
```


## Installation and tests

This project uses the appolo environment as a base: https://github.com/bredele/appolo

First install grunt ```npm install -g grunt```.

Then launch the test server by typing the following command into your shell:

```
java -jar tools/JsTestDriver/JsTestDriver-1.3.5.jar --port 4224 &
```
Go into your favorite browser at the ```http://localhost:4224``` address and capture your browser.

Go back to your shell, and type:

``` grunt launch```

This command watches any changements in your files and then jslint your code and test it.
