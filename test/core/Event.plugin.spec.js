/**
 * Olives http://flams.github.com/olives
 * The MIT License (MIT)
 * Copyright (c) 2012-2013 Olivier Scherrer <pode.fr@gmail.com> - Olivier Wietrich <olivier.wietrich@gmail.com>
 */

require(["Event.plugin", "dom"], function (EventPlugin, $) {

	describe("EventPluginInit", function () {

		it("should be a constructor function", function () {
			expect(EventPlugin).toBeInstanceOf(Function);
		});

	});

	describe("ParentObjectHandler", function(){
		var plugin = null;
		beforeEach(function(){
			plugin = new EventPlugin();
		});

		it("should have getter/setter functions", function(){
			expect(plugin.setParent).toBeInstanceOf(Function);
			expect(plugin.getParent).toBeInstanceOf(Function);
		});

		it("should haven't default parent", function(){
			expect(plugin.getParent()).toBe(null);
		});

		it("should allow to set parent object", function(){
			var obj = {};
			expect(plugin.setParent(obj)).toEqual(true);
			expect(plugin.getParent()).toBe(obj);
		});

		it("should only set object as parent", function(){
			expect(plugin.setParent("test")).toEqual(false);
			expect(plugin.setParent(true)).toEqual(false);
			expect(plugin.setParent()).toEqual(false);
			expect(plugin.setParent(null)).toEqual(false);
			expect(plugin.setParent({})).toEqual(true);
		});

		it("should set parent at init if defined", function(){
			var obj = {};
			var plugin = new EventPlugin(obj);
			expect(plugin.getParent()).toBe(obj);
		});

	});

	describe('OnListener', function(){
		var plugin = null,
			node = null,
			parent = null;
		beforeEach(function(){
			node = document.createElement("div");
			parent = {
				handler : function(){
					this.callback();
				},
				callback : jasmine.createSpy('callback')
			};
			plugin = new EventPlugin(parent);
		});

		it("should be a function", function(){
			expect(plugin.on).toBeInstanceOf(Function);
		});

		it("should listen one event", function(){
			plugin.on(node, "click", "callback");

			$(node).trigger("click");
			expect(parent.callback).toHaveBeenCalled();
		});

		it("should listen several events", function(){
			plugin.on(node, "click mouseover", "callback");

			$(node).trigger("click");
			$(node).trigger("mouseover");
			expect(parent.callback).toHaveBeenCalled();
			expect(parent.callback.calls.length).toEqual(2);
		});

		it("should execute handler in the parent context", function(){
			plugin.on(node, "click", "handler");
			$(node).trigger("click");
			expect(parent.callback).toHaveBeenCalled();
			expect(parent.callback.calls.length).toEqual(1);
		});


	});

	describe("OnceListener", function(){
		var plugin = null;
		beforeEach(function(){
			plugin = new EventPlugin();
		});

		it("should be a function", function(){
			expect(plugin.once).toBeInstanceOf(Function);
		});
	});

	describe("OffListener", function(){

		var plugin = null,
			node = null,
			spy = null;
		beforeEach(function(){
			spy = jasmine.createSpy("callback");
			node = document.createElement("div");
			plugin = new EventPlugin({
				callback : spy
			});
		});

		it("should be a function", function(){
			expect(plugin.off).toBeInstanceOf(Function);
		});

		it("should remove previously added istener", function(){
			plugin.on(node, "click", "callback");
			plugin.off(node, "click");
			$(node).trigger("click");
			expect(spy.wasCalled).toEqual(false);
		});
	});

	describe("DelegateListener", function(){

		var plugin = null,
			node = null,
			parent = null;
		beforeEach(function(){
			node = document.createElement("div");
			parent = {
				callback : jasmine.createSpy('callback')
			};
			plugin = new EventPlugin(parent);
		});

		it("should filter the descendants of the selected elements that trigger the event", function(){
			var child = document.createElement("button");
			child.className = "btn";
			node.appendChild(child);

			plugin.on(node, "click", "callback", "button");
			$(node).trigger("click");
			expect(parent.callback.wasCalled).toEqual(false);

			$(child).trigger("click");
			expect(parent.callback).toHaveBeenCalled();
		});
	});



});