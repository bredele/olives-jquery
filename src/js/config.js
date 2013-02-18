require.config({
	baseUrl : "js/core",
	shim : {
		'dom' : {
			exports : '$',
			deps : ['jquery']
		}
	},
	paths : {
		jquery : '../libs/jquery-1.9.1.min',
		zepto : '../libs/zepto.min',
		//our dom library
		dom : '../libs/dom'
	}
});