var colorReverser=function(){console.log("colorReverser");var e=document.getElementById("main-nav");if(null!==e){new Waypoint.Inview({element:document.getElementById("About"),entered:function(t){"up"==t&&e.classList.remove("context-blue")},enter:function(t){"up"==t&&e.classList.add("context-blue")},exit:function(t){"down"==t&&e.classList.add("context-blue")},exited:function(t){"down"==t&&e.classList.remove("context-blue")}});new Waypoint.Inview({element:document.getElementById("quick-access"),enter:function(t){"up"==t&&(e.classList.remove("is-nav-visible"),console.log("Enter triggered with direction "+t))},exited:function(t){"down"==t&&(e.classList.add("is-nav-visible"),console.log("Exited triggered with direction "+t))}})}var t=document.getElementById("nav-competition"),n=document.getElementById("m-nav-competition");null!==t&&new Waypoint.Inview({element:document.getElementById("Competition"),offset:"-100%",entered:function(e){"up"==e&&(t.classList.remove("is-current"),n.classList.remove("is-current"))},enter:function(e){"up"==e&&(t.classList.add("is-current"),n.classList.add("is-current"))},exit:function(e){"down"==e&&(t.classList.add("is-current"),n.classList.add("is-current"))},exited:function(e){"down"==e&&(t.classList.remove("is-current"),n.classList.remove("is-current"))}});var s=document.getElementById("nav-concept"),i=document.getElementById("m-nav-concept");null!==s&&new Waypoint.Inview({element:document.getElementById("Concept"),offset:"-100%",entered:function(e){"up"==e&&(s.classList.remove("is-current"),i.classList.remove("is-current"))},enter:function(e){"up"==e&&(s.classList.add("is-current"),i.classList.add("is-current"))},exit:function(e){"down"==e&&(s.classList.add("is-current"),i.classList.add("is-current"))},exited:function(e){"down"==e&&(s.classList.remove("is-current"),i.classList.remove("is-current"))}});var c=document.getElementById("nav-about"),o=document.getElementById("m-nav-about"),r=document.getElementById("main-nav"),d=document.getElementById("bt-mobile-menu");null!==c&&new Waypoint.Inview({element:document.getElementById("About"),offset:"-100%",entered:function(e){"up"==e&&(c.classList.remove("is-current"),o.classList.remove("is-current"),r.classList.remove("context-blue"),d.classList.remove("context-blue"))},enter:function(e){"up"==e&&(c.classList.add("is-current"),o.classList.add("is-current"),r.classList.add("context-blue"),d.classList.add("context-blue"))},exit:function(e){"down"==e&&(c.classList.add("is-current"),o.classList.add("is-current"),r.classList.add("context-blue"),d.classList.add("context-blue"))},exited:function(e){"down"==e&&(c.classList.remove("is-current"),o.classList.remove("is-current"),r.classList.remove("context-blue"),d.classList.remove("context-blue"))}})};