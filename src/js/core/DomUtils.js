define(['dom'], function($){
	//may be override $
	return {
		getNodes : function(dom, query){
			var filter = query || '*';
			return this.isAcceptedType(dom) && $(dom).find(filter).addBack().filter(filter).toArray();
		},

		getDataset : function(dom){
			//dom libraries convert string to number ex: data-model='0'
			//return this.isAcceptedType(dom) && $(dom).data();
			var i=0,
				l,
				dataset={},
				split,
				join;

			if (this.isAcceptedType(dom)) {
				if (dom.hasOwnProperty("dataset")) {
					return dom.dataset;
				} else {
					for (l=dom.attributes.length;i<l;i++) {
						split = dom.attributes[i].name.split("-");
						if (split.shift() == "data") {
							dataset[join = split.join("-")] = dom.getAttribute("data-"+join);
						}
					}
					return dataset;
				}

			} else {
				return false;
			}
		},

		isAcceptedType : function(type){
			if (type instanceof HTMLElement ||
				type instanceof SVGElement) {
				return true;
			} else {
				return false;
			}
		},

		setAttribute : function(node, property, value){
			if (node instanceof HTMLElement) {
				$(node).prop(property, value);
				return true;
			} else if (node instanceof SVGElement){
				$(node).attr(property, value);
				return true;
			} else {
				return false;
			}
		},

		matches : function(target, selector, parent){
			//doesn't need parent with jquery
			return $(target).is(selector);
		}
	};
});
