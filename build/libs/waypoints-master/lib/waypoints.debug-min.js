/*!
Waypoints Debug - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";var i,o=["You have a Waypoint element with display none. For more information on ","why this is a bad idea read ","http://imakewebthings.com/waypoints/guides/debugging/#display-none"].join(""),e=["You have a Waypoint element with fixed positioning. For more ","information on why this is a bad idea read ","http://imakewebthings.com/waypoints/guides/debugging/#fixed-position"].join("");i=window.Waypoint.Context.prototype.refresh,window.Waypoint.Context.prototype.refresh=function(){for(var n in this.waypoints)for(var t in this.waypoints[n]){var a=this.waypoints[n][t],r=window.getComputedStyle(a.element);a.enabled&&(r&&"none"===r.display&&console.error(o),r&&"fixed"===r.position&&console.error(e))}return i.call(this)}}();