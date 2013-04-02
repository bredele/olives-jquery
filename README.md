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
