!function(){function n(b){for(var f,a,g,c,d=[],e=0;e<y.length;e++){var h=y[e];if(h.Tag===b){d=h.CategoryId;break}var l=(f=h.Tag,c=g=a=void 0,a=-1!==(c=f).indexOf("http:")?c.replace("http:",""):c.replace("https:",""),-1!==(g=a.indexOf("?"))?a.replace(a.substring(g),""):a);if(b&&(-1!==b.indexOf(l)||-1!==h.Tag.indexOf(b))){d=h.CategoryId;break}}if(!d.length&&A){var r=function(k){var v=document.createElement("a");v.href=k;k=v.hostname.split(".");return-1!==k.indexOf("www")||2<k.length?k.slice(1).join("."):
v.hostname}(b);w.some(function(k){return k===r})&&(d=["C0004"])}return d}function m(b){return b&&window.OptanonActiveGroups&&b.every(function(f){return-1!==window.OptanonActiveGroups.indexOf(f)})}function p(b){return-1!==(b.getAttribute("class")||"").indexOf("optanon-category")}function q(b){return b.hasAttribute("data-ot-ignore")}function t(b,f){b=b.join("-");var a=f.getAttribute("class")||"";-1===a.indexOf("optanon-category-"+b)&&(b=x(b,a),f.setAttribute("class",b))}function x(b,f){return("optanon-category-"+
b+" "+f).trim()}var y=JSON.parse('[{"Host":"binance.info","Tag":"https://bin.bnbstatic.com/static/chunks/commons.6a782998.js","CategoryId":["C0004"]},{"Host":"youtube.com","Tag":"https://www.youtube.com/embed/_dPkAxRwvew","CategoryId":["C0004"]},{"Host":"binance.info","Tag":"https://bin.bnbstatic.com/static/chunks/commons.d6eaa886.js","CategoryId":["C0002","C0004"]},{"Host":"binance.info","Tag":"https://bin.bnbstatic.com/static/runtime/main-4eb1e9bf209cefa59a40.js","CategoryId":["C0003"]},{"Host":"binance.info","Tag":"https://bin.bnbstatic.com/static/js/se/se.min.js","CategoryId":["C0003"]},{"Host":"binance.com","Tag":"https://www.binance.com/gateway-api/v1/public/risk/phishing/website","CategoryId":["C0004"]},{"Host":"binance.info","Tag":"https://bin.bnbstatic.com/static/runtime/main-19ea8765a5c9cd9b9a01.js","CategoryId":["C0003"]},{"Host":"binance.info","Tag":"https://bin.bnbstatic.com/static/runtime/main-36989180fd0f681bc5a0.js","CategoryId":["C0003"]},{"Host":"bing.com","Tag":"https://bat.bing.com/bat.js","CategoryId":["C0004"]},{"Host":"binance.info","Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002","C0004"]},{"Host":"doubleclick.net","Tag":"https://googleads.g.doubleclick.net/pagead/landing","CategoryId":["C0004"]},{"Host":"binance.info","Tag":"https://www.googletagmanager.com/gtm.js","CategoryId":["C0002"]}]'),
A=JSON.parse("true"),w=[""];w=w.filter(function(b){if("null"!==b&&b.trim().length)return b});var u=["embed","iframe","img","script"];(new MutationObserver(function(b){Array.prototype.forEach.call(b,function(f){Array.prototype.forEach.call(f.addedNodes,function(e){var h,l;if(1===e.nodeType&&-1!==u.indexOf(e.tagName.toLowerCase())&&!p(e)&&!q(e))if("script"===e.tagName.toLowerCase()){if((l=n(h=e.src||"")).length){t(l,e);m(l)||(e.type="text/plain");var r=function(k){"text/plain"===e.getAttribute("type")&&
k.preventDefault();e.removeEventListener("beforescriptexecute",r)};e.addEventListener("beforescriptexecute",r)}}else(l=n(h=e.src||"")).length&&(t(l,e),m(l)||(e.removeAttribute("src"),e.setAttribute("data-src",h)))});var a=f.target;if(f.attributeName&&(!p(a)||!q(a)))if("script"===a.nodeName.toLowerCase()){if((d=n(c=a.src||"")).length){t(d,a);m(d)||(a.type="text/plain");var g=function(e){"text/plain"===a.getAttribute("type")&&e.preventDefault();a.removeEventListener("beforescriptexecute",g)};a.addEventListener("beforescriptexecute",
g)}}else if(-1!==u.indexOf(f.target.nodeName.toLowerCase())){var c,d;(d=n(c=a.src||"")).length&&(t(d,a),m(d)||(a.removeAttribute("src"),a.setAttribute("data-src",c)))}})})).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["src"]});var z=document.createElement;document.createElement=function(){for(var b=[],f=0;f<arguments.length;f++)b[f]=arguments[f];if("script"!==b[0].toLowerCase()&&-1===u.indexOf(b[0].toLowerCase()))return z.bind(document).apply(void 0,b);
var a=z.bind(document).apply(void 0,b),g=a.setAttribute.bind(a);return Object.defineProperties(a,{src:{get:function(){return a.getAttribute("src")||""},set:function(c){var d="";"string"==typeof c?d=c:c instanceof Object&&(d=c.toString());d=n(d);!d.length||"script"!==b[0].toLowerCase()||p(a)||m(d)||q(a)?!d.length||-1===u.indexOf(b[0].toLowerCase())||p(a)||m(d)||q(a)?g("src",c):(a.removeAttribute("src"),g("data-src",c),c=a.getAttribute("class"),d=d.join("-"),c||(c=x(d,c||""),g("class",c))):(g("type",
"text/plain"),g("src",c));return!0}},type:{set:function(c){var d=n(a.src||"");c=!d.length||p(a)||m(d)||q(a)?c:"text/plain";return g("type",c),!0}},class:{set:function(c){var d=n(a.src);!d.length||p(a)||m(d)||q(a)?g("class",c):(c=x(d.join("-"),c),g("class",c));return!0}}}),a.setAttribute=function(c,d,e){"type"!==c&&"src"!==c||e?g(c,d):a[c]=d},a}}();