requirejs.config({
	baseUrl : "/test/src/js/core",
	deps : ["../libs/Emily"],
	paths : {
		jquery : '../libs/jquery-1.9.1.min',
		zepto : '../libs/zepto.min',
		//our dom library
		dom : '../libs/dom'
	},
	shim : {
		'dom' : {
			exports : '$',
			deps : ['jquery']
		}
	}
});
