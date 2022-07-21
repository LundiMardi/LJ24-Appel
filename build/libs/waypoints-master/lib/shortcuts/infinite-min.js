/*!
Waypoints Infinite Scroll Shortcut - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";var $=window.jQuery,t=window.Waypoint;function i(o){this.options=$.extend({},i.defaults,o),this.container=this.options.element,"auto"!==this.options.container&&(this.container=this.options.container),this.$container=$(this.container),this.$more=$(this.options.more),this.$more.length&&(this.setupHandler(),this.waypoint=new t(this.options))}i.prototype.setupHandler=function(){this.options.handler=$.proxy((function(){this.options.onBeforePageLoad(),this.destroy(),this.$container.addClass(this.options.loadingClass),$.get($(this.options.more).attr("href"),$.proxy((function(i){var o=$($.parseHTML(i)),n=o.find(this.options.more),e=o.find(this.options.items);e.length||(e=o.filter(this.options.items)),this.$container.append(e),this.$container.removeClass(this.options.loadingClass),n.length||(n=o.filter(this.options.more)),n.length?(this.$more.replaceWith(n),this.$more=n,this.waypoint=new t(this.options)):this.$more.remove(),this.options.onAfterPageLoad(e)}),this))}),this)},i.prototype.destroy=function(){this.waypoint&&this.waypoint.destroy()},i.defaults={container:"auto",items:".infinite-item",more:".infinite-more-link",offset:"bottom-in-view",loadingClass:"infinite-loading",onBeforePageLoad:$.noop,onAfterPageLoad:$.noop},t.Infinite=i}();