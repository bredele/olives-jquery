/**
 * Olives http://flams.github.com/olives
 * The MIT License (MIT)
 * Copyright (c) 2012-2013 Olivier Scherrer <pode.fr@gmail.com> - Olivier Wietrich <olivier.wietrich@gmail.com>
 */

define(['dom'], function ($) {

	return function EventPluginConstructor($parent) {

		/**
		 * The parent callback
		 * @private
		 */
		var _parent = null;

		/**
		 * Get the parent object.
		 * @return {Object} the parent object
		 */
		this.getParent = function getParent() {
			return _parent;
		};

		/**
		 * Set the parent object.
		 * The parent object is an object which the functions are called by node listeners.
		 * @param {Object} the parent object
		 * @return true if object has been set
		 */
		this.setParent = function setParent(parent) {
			if (parent instanceof Object){
				_parent = parent;
				return true;
			}
			return false;
		};

		this.on = function on(node, events, callback, selector){
			var dom = $(node);
			//refactor
			if(selector){
				dom.on.call(dom, events, selector, $.proxy($parent[callback], $parent));
			}else {
				dom.on.call(dom, events, $.proxy($parent[callback], $parent));
			}
		};

		this.once = function(){

		};

		this.off = function(node, events){
			$(node).off(events);
		};


		//init
		this.setParent($parent);
	};

});