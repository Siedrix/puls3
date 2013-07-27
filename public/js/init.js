window.Puls3 = {};

Puls3.Views = {};
Puls3.Collections = {};
Puls3.Models = {};
Puls3.Routers = {};

window.app = {};
window.routers = {};
window.plugs = {};
window.views = {};
window.collections = {};

Backbone.View.prototype._ensureElement = function() {
	if (!this.el) {
		var attrs = _.extend({}, _.result(this, 'attributes'));
		if (this.id) attrs.id = _.result(this, 'id');
		if (this.className) attrs['class'] = _.result(this, 'className');
		var $el = Backbone.$('<' + _.result(this, 'tagName') + '>');
		if (this.id) $el.attr('id', this.id);
		this.setElement($el, false);
	} else {
		this.setElement(_.result(this, 'el'), false);
	}
};