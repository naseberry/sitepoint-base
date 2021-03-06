(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.apollo = factory();
  }
})(this, function () {

  'use strict';

  var apollo = {};

  var hasClass, addClass, removeClass, toggleClass;

  var forEach = function (items, fn) {
    if (Object.prototype.toString.call(items) !== '[object Array]') {
      items = items.split(' ');
    }
    for (var i = 0; i < items.length; i++) {
      fn(items[i], i);
    }
  };

  if ('classList' in document.documentElement) {
    hasClass = function (elem, className) {
      return elem.classList.contains(className);
    };
    addClass = function (elem, className) {
      elem.classList.add(className);
    };
    removeClass = function (elem, className) {
      elem.classList.remove(className);
    };
    toggleClass = function (elem, className) {
      elem.classList.toggle(className);
    };
  } else {
    hasClass = function (elem, className) {
      return new RegExp('(^|\\s)' + className + '(\\s|$)').test(elem.className);
    };
    addClass = function (elem, className) {
      if (!hasClass(elem, className)) {
        elem.className += (elem.className ? ' ' : '') + className;
      }
    };
    removeClass = function (elem, className) {
      if (hasClass(elem, className)) {
        elem.className = elem.className.replace(new RegExp('(^|\\s)*' + className + '(\\s|$)*', 'g'), '');
      }
    };
    toggleClass = function (elem, className) {
      (hasClass(elem, className) ? removeClass : addClass)(elem, className);
    };
  }

  apollo.hasClass = function (elem, className) {
    return hasClass(elem, className);
  };

  apollo.addClass = function (elem, classes) {
    forEach(classes, function (className) {
      addClass(elem, className);
    });
  };

  apollo.removeClass = function (elem, classes) {
    forEach(classes, function (className) {
      removeClass(elem, className);
    });
  };

  apollo.toggleClass = function (elem, classes) {
    forEach(classes, function (className) {
      toggleClass(elem, className);
    });
  };

  return apollo;

});

(function(root,factory){if(typeof define==='function'&&define.amd){define(factory)}else if(typeof exports==='object'){module.exports=factory}else{root.apollo=factory()}})(this,function(){'use strict';var apollo={};var hasClass,addClass,removeClass,toggleClass;var forEach=function(items,fn){if(Object.prototype.toString.call(items)!=='[object Array]'){items=items.split(' ')}
for(var i=0;i<items.length;i++){fn(items[i],i)}};if('classList' in document.documentElement){hasClass=function(elem,className){return elem.classList.contains(className)};addClass=function(elem,className){elem.classList.add(className)};removeClass=function(elem,className){elem.classList.remove(className)};toggleClass=function(elem,className){elem.classList.toggle(className)}}else{hasClass=function(elem,className){return new RegExp('(^|\\s)'+className+'(\\s|$)').test(elem.className)};addClass=function(elem,className){if(!hasClass(elem,className)){elem.className+=(elem.className?' ':'')+className}};removeClass=function(elem,className){if(hasClass(elem,className)){elem.className=elem.className.replace(new RegExp('(^|\\s)*'+className+'(\\s|$)*','g'),'')}};toggleClass=function(elem,className){(hasClass(elem,className)?removeClass:addClass)(elem,className)}}
apollo.hasClass=function(elem,className){return hasClass(elem,className)};apollo.addClass=function(elem,classes){forEach(classes,function(className){addClass(elem,className)})};apollo.removeClass=function(elem,classes){forEach(classes,function(className){removeClass(elem,className)})};apollo.toggleClass=function(elem,classes){forEach(classes,function(className){toggleClass(elem,className)})};return apollo})

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-applicationcache-audio-backgroundblendmode-backgroundcliptext-backgroundsize-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderimage-borderradius-boxshadow-boxsizing-canvas-canvastext-checked-cookies-cryptography-cssanimations-csscalc-csschunit-csscolumns-cssescape-cssexunit-cssfilters-cssgradients-csshairline-csshyphens_softhyphens_softhyphensfind-cssinvalid-cssmask-csspointerevents-csspositionsticky-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-cssresize-cssscrollbar-csstransforms-csstransforms3d-csstransitions-cssvalid-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-cubicbezierrange-display_runin-displaytable-ellipsis-emoji-exiforientation-flexbox-flexboxlegacy-flexboxtweener-flexwrap-fontface-fullscreen-generatedcontent-geolocation-hashchange-hiddenscroll-history-hsla-ie8compat-indexeddb-inlinesvg-input-inputtypes-intl-json-lastchild-localstorage-mediaqueries-multiplebgs-nthchild-objectfit-opacity-overflowscrolling-picture-postmessage-preserve3d-regions-rgba-scrollsnappoints-sessionstorage-shapes-siblinggeneral-smil-subpixelfont-supports-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-target-templatestrings-textalignlast-textshadow-touchevents-unicoderange-userselect-video-websockets-websqldatabase-webworkers-wrapflow-domprefixes-hasevent-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
!function(window,document,undefined){function is(e,t){return typeof e===t}function testRunner(){var e,t,n,r,o,i,d;for(var s in tests)if(tests.hasOwnProperty(s)){if(e=[],t=tests[s],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=is(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],d=i.split("."),1===d.length?Modernizr[d[0]]=r:(!Modernizr[d[0]]||Modernizr[d[0]]instanceof Boolean||(Modernizr[d[0]]=new Boolean(Modernizr[d[0]])),Modernizr[d[0]][d[1]]=r),classes.push((r?"":"no-")+d.join("-"))}}function setClasses(e){var t=docElement.className,n=Modernizr._config.classPrefix||"";if(isSVG&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),isSVG?docElement.className.baseVal=t:docElement.className=t)}function createElement(){return"function"!=typeof document.createElement?document.createElement(arguments[0]):isSVG?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,arguments)}function contains(e,t){return!!~(""+e).indexOf(t)}function cssToDOM(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function getBody(){var e=document.body;return e||(e=createElement(isSVG?"svg":"body"),e.fake=!0),e}function injectElementWithStyles(e,t,n,r){var o,i,d,s,a="modernizr",l=createElement("div"),c=getBody();if(parseInt(n,10))for(;n--;)d=createElement("div"),d.id=r?r[n]:a+(n+1),l.appendChild(d);return o=createElement("style"),o.type="text/css",o.id="s"+a,(c.fake?c:l).appendChild(o),c.appendChild(l),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),l.id=a,c.fake&&(c.style.background="",c.style.overflow="hidden",s=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(c)),i=t(l,e),c.fake?(c.parentNode.removeChild(c),docElement.style.overflow=s,docElement.offsetHeight):l.parentNode.removeChild(l),!!i}function roundedEquals(e,t){return e-1===t||e===t||e+1===t}function addTest(e,t){if("object"==typeof e)for(var n in e)hasOwnProp(e,n)&&addTest(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),setClasses([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function fnBind(e,t){return function(){return e.apply(t,arguments)}}function testDOMProps(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],is(r,"function")?fnBind(r,n||t):r);return!1}function domToCSS(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function nativeTestProps(e,t){var n=e.length;if("CSS"in window&&"supports"in window.CSS){for(;n--;)if(window.CSS.supports(domToCSS(e[n]),t))return!0;return!1}if("CSSSupportsRule"in window){for(var r=[];n--;)r.push("("+domToCSS(e[n])+":"+t+")");return r=r.join(" or "),injectElementWithStyles("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return undefined}function testProps(e,t,n,r){function o(){d&&(delete mStyle.style,delete mStyle.modElem)}if(r=is(r,"undefined")?!1:r,!is(n,"undefined")){var i=nativeTestProps(e,n);if(!is(i,"undefined"))return i}for(var d,s,a,l,c,u=["modernizr","tspan"];!mStyle.style;)d=!0,mStyle.modElem=createElement(u.shift()),mStyle.style=mStyle.modElem.style;for(a=e.length,s=0;a>s;s++)if(l=e[s],c=mStyle.style[l],contains(l,"-")&&(l=cssToDOM(l)),mStyle.style[l]!==undefined){if(r||is(n,"undefined"))return o(),"pfx"==t?l:!0;try{mStyle.style[l]=n}catch(p){}if(mStyle.style[l]!=c)return o(),"pfx"==t?l:!0}return o(),!1}function testPropsAll(e,t,n,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),d=(e+" "+cssomPrefixes.join(i+" ")+i).split(" ");return is(t,"string")||is(t,"undefined")?testProps(d,t,r,o):(d=(e+" "+domPrefixes.join(i+" ")+i).split(" "),testDOMProps(d,t,n))}function testAllProps(e,t,n){return testPropsAll(e,undefined,undefined,t,n)}var classes=[],tests=[],ModernizrProto={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){tests.push({name:e,fn:t,options:n})},addAsyncTest:function(e){tests.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=ModernizrProto,Modernizr=new Modernizr,Modernizr.addTest("applicationcache","applicationCache"in window),Modernizr.addTest("cookies",function(){try{document.cookie="cookietest=1";var e=-1!=document.cookie.indexOf("cookietest=");return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(t){return!1}}),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("history",function(){var e=navigator.userAgent;return-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")?window.history&&"pushState"in window.history:!1}),Modernizr.addTest("ie8compat",!window.addEventListener&&!!document.documentMode&&7===document.documentMode),Modernizr.addTest("json","JSON"in window&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("postmessage","postMessage"in window),Modernizr.addTest("svg",!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("templatestrings",function(){var supports;try{eval("``"),supports=!0}catch(e){}return!!supports}),Modernizr.addTest("websockets","WebSocket"in window&&2===window.WebSocket.CLOSING);var newSyntax="CSS"in window&&"supports"in window.CSS,oldSyntax="supportsCSS"in window;Modernizr.addTest("supports",newSyntax||oldSyntax),Modernizr.addTest("target",function(){var e=window.document;if(!("querySelectorAll"in e))return!1;try{return e.querySelectorAll(":target"),!0}catch(t){return!1}});var prefixes=ModernizrProto._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];ModernizrProto._prefixes=prefixes;var docElement=document.documentElement,isSVG="svg"===docElement.nodeName.toLowerCase(),html5;isSVG||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=w.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=w.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),w.elements=n+" "+e,l(t)}function i(e){var t=v[e[g]];return t||(t={},y++,e[g]=y,v[y]=t),t}function d(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),d=0,s=r(),a=s.length;a>d;d++)o.createElement(s[d]);return o}function a(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return w.shivMethods?d(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(w,t.frag)}function l(e){e||(e=t);var r=i(e);return!w.shivCSS||c||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||a(e,r),e}var c,u,p="3.7.3",f=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",y=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,u=!0}}();var w={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:p,shivCSS:f.shivCSS!==!1,supportsUnknownElements:u,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:l,createElement:d,createDocumentFragment:s,addElements:o};e.html5=w,l(t),"object"==typeof module&&module.exports&&(module.exports=w)}("undefined"!=typeof window?window:this,document);var omPrefixes="Moz O ms Webkit",domPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(" "):[];ModernizrProto._domPrefixes=domPrefixes;var hasEvent=function(){function e(e,n){var r;return e?(n&&"string"!=typeof n||(n=createElement(n||"div")),e="on"+e,r=e in n,!r&&t&&(n.setAttribute||(n=createElement("div")),n.setAttribute(e,""),r="function"==typeof n[e],n[e]!==undefined&&(n[e]=undefined),n.removeAttribute(e)),r):!1}var t=!("onblur"in document.documentElement);return e}();ModernizrProto.hasEvent=hasEvent,Modernizr.addTest("hashchange",function(){return hasEvent("hashchange",window)===!1?!1:document.documentMode===undefined||document.documentMode>7}),Modernizr.addTest("audio",function(){var e=createElement("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("canvas",function(){var e=createElement("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof createElement("canvas").getContext("2d").fillText}),Modernizr.addTest("emoji",function(){if(!Modernizr.canvastext)return!1;var e=window.devicePixelRatio||1,t=12*e,n=createElement("canvas"),r=n.getContext("2d");return r.fillStyle="#f00",r.textBaseline="top",r.font="32px Arial",r.fillText("🐨",0,0),0!==r.getImageData(t,t,1,1).data[0]}),Modernizr.addTest("video",function(){var e=createElement("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("cubicbezierrange",function(){var e=createElement("a");return e.style.cssText=prefixes.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",o=0,i=prefixes.length-1;i>o;o++)e=0===o?"to ":"",r+=t+prefixes[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var d=createElement("a"),s=d.style;return s.cssText=r,(""+s.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("multiplebgs",function(){var e=createElement("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("opacity",function(){var e=createElement("a").style;return e.cssText=prefixes.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=createElement("a"),r=n.style;return r.cssText=e+prefixes.join(t+";"+e).slice(0,-e.length),-1!==r.position.indexOf(t)}),Modernizr.addTest("rgba",function(){var e=createElement("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("inlinesvg",function(){var e=createElement("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=createElement("a");return n.style.cssText=e+prefixes.join(t+e),!!n.style.length});var CSS=window.CSS;Modernizr.addTest("cssescape",CSS?"function"==typeof CSS.escape:!1),Modernizr.addTest("csspointerevents",function(){var e=createElement("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),Modernizr.addTest("regions",function(){if(isSVG)return!1;var e=Modernizr.prefixed("flowFrom"),t=Modernizr.prefixed("flowInto"),n=!1;if(!e||!t)return n;var r=createElement("iframe"),o=createElement("div"),i=createElement("div"),d=createElement("div"),s="modernizr_flow_for_regions_check";i.innerText="M",o.style.cssText="top: 150px; left: 150px; padding: 0px;",d.style.cssText="width: 50px; height: 50px; padding: 42px;",d.style[e]=s,o.appendChild(i),o.appendChild(d),docElement.appendChild(o);var a,l,c=i.getBoundingClientRect();return i.style[t]=s,a=i.getBoundingClientRect(),l=parseInt(a.left-c.left,10),docElement.removeChild(o),42==l?n=!0:(docElement.appendChild(r),c=r.getBoundingClientRect(),r.style[t]=s,a=r.getBoundingClientRect(),c.height>0&&c.height!==a.height&&0===a.height&&(n=!0)),i=d=o=r=undefined,n}),Modernizr.addTest("cssremunit",function(){var e=createElement("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("picture","HTMLPictureElement"in window),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("websqldatabase","openDatabase"in window),Modernizr.addTest("svgfilters",function(){var e=!1;try{e="SVGFEColorMatrixElement"in window&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(t){}return e}),Modernizr.addTest("webworkers","Worker"in window);var inputElem=createElement("input"),inputattrs="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),attrs={};Modernizr.input=function(e){for(var t=0,n=e.length;n>t;t++)attrs[e[t]]=!!(e[t]in inputElem);return attrs.list&&(attrs.list=!(!createElement("datalist")||!window.HTMLDataListElement)),attrs}(inputattrs);var inputtypes="search tel url email datetime date month week time datetime-local number range color".split(" "),inputs={};Modernizr.inputtypes=function(e){for(var t,n,r,o=e.length,i="1)",d=0;o>d;d++)inputElem.setAttribute("type",t=e[d]),r="text"!==inputElem.type&&"style"in inputElem,r&&(inputElem.value=i,inputElem.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(t)&&inputElem.style.WebkitAppearance!==undefined?(docElement.appendChild(inputElem),n=document.defaultView,r=n.getComputedStyle&&"textfield"!==n.getComputedStyle(inputElem,null).WebkitAppearance&&0!==inputElem.offsetHeight,docElement.removeChild(inputElem)):/^(search|tel)$/.test(t)||(r=/^(url|email)$/.test(t)?inputElem.checkValidity&&inputElem.checkValidity()===!1:inputElem.value!=i)),inputs[e[d]]=!!r;return inputs}(inputtypes),Modernizr.addTest("hsla",function(){var e=createElement("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",contains(e.backgroundColor,"rgba")||contains(e.backgroundColor,"hsla")});var toStringFn={}.toString;Modernizr.addTest("svgclippaths",function(){return!!document.createElementNS&&/SVGClipPath/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("smil",function(){return!!document.createElementNS&&/SVGAnimate/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","animate")))}),Modernizr.addTest("svgforeignobject",function(){return!!document.createElementNS&&/SVGForeignObject/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")))});var cssomPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.split(" "):[];ModernizrProto._cssomPrefixes=cssomPrefixes;var testStyles=ModernizrProto.testStyles=injectElementWithStyles;Modernizr.addTest("hiddenscroll",function(){return testStyles("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})}),Modernizr.addTest("touchevents",function(){var e;if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)e=!0;else{var t=["@media (",prefixes.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");testStyles(t,function(t){e=9===t.offsetTop})}return e}),Modernizr.addTest("unicoderange",function(){return Modernizr.testStyles('@font-face{font-family:"unicodeRange";src:local("Arial");unicode-range:U+0020,U+002E}#modernizr span{font-size:20px;display:inline-block;font-family:"unicodeRange",monospace}#modernizr .mono{font-family:monospace}',function(e){for(var t=[".",".","m","m"],n=0;n<t.length;n++){var r=createElement("span");r.innerHTML=t[n],r.className=n%2?"mono":"",e.appendChild(r),t[n]=r.clientWidth}return t[0]!==t[1]&&t[2]===t[3]})}),Modernizr.addTest("checked",function(){return testStyles("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=createElement("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})});var blacklist=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,o=533>t&&e.match(/android/gi);return n||o||r}();blacklist?Modernizr.addTest("fontface",!1):testStyles('@font-face {font-family:"font";src:url("https://")}',function(e,t){var n=document.getElementById("smodernizr"),r=n.sheet||n.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",i=/src/i.test(o)&&0===o.indexOf(t.split(" ")[0]);Modernizr.addTest("fontface",i)}),testStyles('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=7)}),testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),Modernizr.addTest("siblinggeneral",function(){return testStyles("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(e){return 200==e.lastChild.offsetWidth},2)}),testStyles("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}",function(e){var t=e.firstChild;t.innerHTML="This is a text written in Arial",Modernizr.addTest("subpixelfont",window.getComputedStyle?"44px"!==window.getComputedStyle(t,null).getPropertyValue("width"):!1)},1,["subpixel"]),testStyles("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,Modernizr.addTest("displaytable",t,{aliases:["display-table"]})},2),Modernizr.addTest("hairline",function(){return testStyles("#modernizr {border:.5px solid transparent}",function(e){return 1===e.offsetHeight})}),Modernizr.addTest("cssinvalid",function(){return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=createElement("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})}),testStyles("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;Modernizr.addTest("nthchild",n)},5),testStyles("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+prefixes.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}",function(e){Modernizr.addTest("cssscrollbar",40==e.scrollWidth)}),Modernizr.addTest("cssvalid",function(){return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var t=createElement("input");return e.appendChild(t),t.clientWidth>10})}),testStyles("#modernizr { height: 50vh; }",function(e){var t=parseInt(window.innerHeight/2,10),n=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).height,10);Modernizr.addTest("cssvhunit",n==t)}),testStyles("#modernizr { width: 50vw; }",function(e){var t=parseInt(window.innerWidth/2,10),n=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).width,10);Modernizr.addTest("cssvwunit",n==t)});var modElem={elem:createElement("modernizr")};Modernizr._q.push(function(){delete modElem.elem}),Modernizr.addTest("csschunit",function(){var e,t=modElem.elem.style;try{t.fontSize="3ch",e=-1!==t.fontSize.indexOf("ch")}catch(n){e=!1}return e}),Modernizr.addTest("cssexunit",function(){var e,t=modElem.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}catch(n){e=!1}return e});var mStyle={style:modElem.elem.style};Modernizr._q.unshift(function(){delete mStyle.style});var mq=function(){var e=window.matchMedia||window.msMatchMedia;return e?function(t){var n=e(t);return n&&n.matches||!1}:function(e){var t=!1;return injectElementWithStyles("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"==(window.getComputedStyle?window.getComputedStyle(e,null):e.currentStyle).position}),t}}();ModernizrProto.mq=mq,Modernizr.addTest("mediaqueries",mq("only all")),testStyles("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],o=parseInt((n.offsetWidth-n.clientWidth)/2,10),i=r.clientWidth/100,d=r.clientHeight/100,s=parseInt(50*Math.max(i,d),10),a=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvmaxunit",roundedEquals(s,a)||roundedEquals(s,a-o))},3),testStyles("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],o=parseInt((n.offsetWidth-n.clientWidth)/2,10),i=r.clientWidth/100,d=r.clientHeight/100,s=parseInt(50*Math.min(i,d),10),a=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvminunit",roundedEquals(s,a)||roundedEquals(s,a-o))},3);var atRule=function(e){var t,n=prefixes.length,r=window.CSSRule;if("undefined"==typeof r)return undefined;if(!e)return!1;if(e=e.replace(/^@/,""),t=e.replace(/-/g,"_").toUpperCase()+"_RULE",t in r)return"@"+e;for(var o=0;n>o;o++){var i=prefixes[o],d=i.toUpperCase()+"_"+t;if(d in r)return"@-"+i.toLowerCase()+"-"+e}return!1};ModernizrProto.atRule=atRule;var hasOwnProp;!function(){var e={}.hasOwnProperty;hasOwnProp=is(e,"undefined")||is(e.call,"undefined")?function(e,t){return t in e&&is(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),ModernizrProto._l={},ModernizrProto.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},ModernizrProto._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){ModernizrProto.addTest=addTest}),Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){addTest("exiforientation",!1,{aliases:["exif-orientation"]})},e.onload=function(){addTest("exiforientation",2!==e.width,{aliases:["exif-orientation"]})},e.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAABgASAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigD/2Q=="}),Modernizr.addTest("svgasimg",document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var testProp=ModernizrProto.testProp=function(e,t,n){return testProps([e],undefined,t,n)};Modernizr.addTest("textshadow",testProp("textShadow","1px 1px")),ModernizrProto.testAllProps=testPropsAll,ModernizrProto.testAllProps=testAllProps,Modernizr.addTest("cssanimations",testAllProps("animationName","a",!0)),Modernizr.addTest("csspseudoanimations",function(){var e=!1;if(!Modernizr.cssanimations||!window.getComputedStyle)return e;var t=["@",Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return Modernizr.testStyles(t,function(t){e="10px"===window.getComputedStyle(t,":before").getPropertyValue("font-size")}),e}),Modernizr.addTest("backgroundsize",testAllProps("backgroundSize","100%",!0)),Modernizr.addTest("borderimage",testAllProps("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",testAllProps("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",testAllProps("boxShadow","1px 1px",!0)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=testAllProps("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=testAllProps("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||testAllProps(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return testAllProps("filter","blur(2px)");var e=createElement("a");return e.style.cssText=prefixes.join("filter:blur(2px); "),!!e.style.length&&(document.documentMode===undefined||document.documentMode>9)}),Modernizr.addTest("flexbox",testAllProps("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",testAllProps("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",testAllProps("flexAlign","end",!0)),Modernizr.addTest("flexwrap",testAllProps("flexWrap","wrap",!0)),Modernizr.addTest("cssreflections",testAllProps("boxReflect","above",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&testAllProps("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!testAllProps("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in docElement.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",testStyles(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",testAllProps("transition","all",!0)),Modernizr.addTest("csspseudotransitions",function(){var e=!1;if(!Modernizr.csstransitions||!window.getComputedStyle)return e;var t='#modernizr:before { content:" "; font-size:5px;'+Modernizr._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return Modernizr.testStyles(t,function(t){window.getComputedStyle(t,":before").getPropertyValue("font-size"),t.className+="trigger",e="5px"===window.getComputedStyle(t,":before").getPropertyValue("font-size")}),e}),Modernizr.addTest("backgroundcliptext",function(){return testAllProps("backgroundClip","text")}),Modernizr.addTest("bgpositionxy",function(){return testAllProps("backgroundPositionX","3px",!0)&&testAllProps("backgroundPositionY","5px",!0)}),Modernizr.addTest("bgrepeatround",testAllProps("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",testAllProps("backgroundRepeat","space")),Modernizr.addTest("bgsizecover",testAllProps("backgroundSize","cover")),Modernizr.addTest("boxsizing",testAllProps("boxSizing","border-box",!0)&&(document.documentMode===undefined||document.documentMode>7)),Modernizr.addTest("displayrunin",testAllProps("display","run-in"),{aliases:["display-runin"]}),Modernizr.addTest("ellipsis",testAllProps("textOverflow","ellipsis")),Modernizr.addTest("cssmask",testAllProps("maskRepeat","repeat-x",!0)),Modernizr.addTest("overflowscrolling",testAllProps("overflowScrolling","touch",!0)),Modernizr.addTest("cssresize",testAllProps("resize","both",!0)),Modernizr.addTest("scrollsnappoints",testAllProps("scrollSnapType")),Modernizr.addTest("shapes",testAllProps("shapeOutside","content-box",!0)),Modernizr.addTest("textalignlast",testAllProps("textAlignLast")),Modernizr.addTest("preserve3d",testAllProps("transformStyle","preserve-3d")),Modernizr.addTest("userselect",testAllProps("userSelect","none",!0)),Modernizr.addAsyncTest(function(){function e(){function n(){try{var e=createElement("div"),t=createElement("span"),n=e.style,r=0,o=0,i=!1,d=document.body.firstElementChild||document.body.firstChild;return e.appendChild(t),t.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",
document.body.insertBefore(e,d),n.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",r=t.offsetHeight,o=t.offsetWidth,n.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+prefixes.join("hyphens:auto; "),i=t.offsetHeight!=r||t.offsetWidth!=o,document.body.removeChild(e),e.removeChild(t),i}catch(s){return!1}}function r(e,t){try{var n=createElement("div"),r=createElement("span"),o=n.style,i=0,d=!1,s=!1,a=!1,l=document.body.firstElementChild||document.body.firstChild;return o.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",n.appendChild(r),document.body.insertBefore(n,l),r.innerHTML="mm",i=r.offsetHeight,r.innerHTML="m"+e+"m",s=r.offsetHeight>i,t?(r.innerHTML="m<br />m",i=r.offsetWidth,r.innerHTML="m"+e+"m",a=r.offsetWidth>i):a=!0,s===!0&&a===!0&&(d=!0),document.body.removeChild(n),n.removeChild(r),d}catch(c){return!1}}function o(e){try{var t,n=createElement("input"),r=createElement("div"),o="lebowski",i=!1,d=document.body.firstElementChild||document.body.firstChild;r.innerHTML=o+e+o,document.body.insertBefore(r,d),document.body.insertBefore(n,r),n.setSelectionRange?(n.focus(),n.setSelectionRange(0,0)):n.createTextRange&&(t=n.createTextRange(),t.collapse(!0),t.moveEnd("character",0),t.moveStart("character",0),t.select());try{window.find?i=window.find(o+o):(t=window.self.document.body.createTextRange(),i=t.findText(o+o))}catch(s){i=!1}return document.body.removeChild(r),document.body.removeChild(n),i}catch(s){return!1}}return document.body||document.getElementsByTagName("body")[0]?(addTest("csshyphens",function(){if(!testAllProps("hyphens","auto",!0))return!1;try{return n()}catch(e){return!1}}),addTest("softhyphens",function(){try{return r("&#173;",!0)&&r("&#8203;",!1)}catch(e){return!1}}),void addTest("softhyphensfind",function(){try{return o("&#173;")&&o("&#8203;")}catch(e){return!1}})):void setTimeout(e,t)}var t=300;setTimeout(e,t)});var prefixed=ModernizrProto.prefixed=function(e,t,n){return 0===e.indexOf("@")?atRule(e):(-1!=e.indexOf("-")&&(e=cssToDOM(e)),t?testPropsAll(e,t,n):testPropsAll(e,"pfx"))},crypto=prefixed("crypto",window);Modernizr.addTest("crypto",!!prefixed("subtle",crypto)),Modernizr.addTest("fullscreen",!(!prefixed("exitFullscreen",document,!1)&&!prefixed("cancelFullScreen",document,!1)));var indexeddb;try{indexeddb=prefixed("indexedDB",window)}catch(e){}Modernizr.addTest("indexeddb",!!indexeddb),indexeddb&&Modernizr.addTest("indexeddb.deletedatabase","deleteDatabase"in indexeddb),Modernizr.addTest("intl",!!prefixed("Intl",window)),Modernizr.addTest("backgroundblendmode",prefixed("backgroundBlendMode","text")),Modernizr.addTest("objectfit",!!prefixed("objectFit"),{aliases:["object-fit"]}),Modernizr.addTest("wrapflow",function(){var e=prefixed("wrapFlow");if(!e||isSVG)return!1;var t=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),n=createElement("div"),r=createElement("div"),o=createElement("span");r.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+t+":end;",o.innerText="X",n.appendChild(r),n.appendChild(o),docElement.appendChild(n);var i=o.offsetLeft;return docElement.removeChild(n),r=o=n=undefined,150==i}),testRunner(),setClasses(classes),delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++)Modernizr._q[i]();window.Modernizr=Modernizr}(window,document);

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-applicationcache-audio-backgroundblendmode-backgroundcliptext-backgroundsize-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderimage-borderradius-boxshadow-boxsizing-canvas-canvastext-checked-cookies-cryptography-cssanimations-csscalc-csschunit-csscolumns-cssescape-cssexunit-cssfilters-cssgradients-csshairline-csshyphens_softhyphens_softhyphensfind-cssinvalid-cssmask-csspointerevents-csspositionsticky-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-cssresize-cssscrollbar-csstransforms-csstransforms3d-csstransitions-cssvalid-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-cubicbezierrange-displaytable-ellipsis-emoji-exiforientation-flexbox-flexboxlegacy-flexboxtweener-flexwrap-fontface-fullscreen-generatedcontent-geolocation-hashchange-hiddenscroll-history-hsla-ie8compat-indexeddb-inlinesvg-input-inputtypes-intl-json-lastchild-localstorage-mediaqueries-multiplebgs-nthchild-objectfit-opacity-overflowscrolling-picture-postmessage-preserve3d-regions-rgba-scrollsnappoints-sessionstorage-shapes-siblinggeneral-smil-subpixelfont-supports-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-target-templatestrings-textalignlast-textshadow-touchevents-unicoderange-userselect-video-websockets-websqldatabase-webworkers-wrapflow-domprefixes-hasevent-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
! function(window, document, undefined) {
    function is(e, t) {
        return typeof e === t
    }

    function testRunner() {
        var e, t, n, r, o, i, d;
        for (var s in tests)
            if (tests.hasOwnProperty(s)) {
                if (e = [], t = tests[s], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (r = is(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) i = e[o], d = i.split("."), 1 === d.length ? Modernizr[d[0]] = r : (!Modernizr[d[0]] || Modernizr[d[0]] instanceof Boolean || (Modernizr[d[0]] = new Boolean(Modernizr[d[0]])), Modernizr[d[0]][d[1]] = r), classes.push((r ? "" : "no-") + d.join("-"))
            }
    }

    function setClasses(e) {
        var t = docElement.className,
            n = Modernizr._config.classPrefix || "";
        if (isSVG && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), isSVG ? docElement.className.baseVal = t : docElement.className = t)
    }

    function createElement() {
        return "function" != typeof document.createElement ? document.createElement(arguments[0]) : isSVG ? document.createElementNS.call(document, "http://www.w3.org/2000/svg", arguments[0]) : document.createElement.apply(document, arguments)
    }

    function contains(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function roundedEquals(e, t) {
        return e - 1 === t || e === t || e + 1 === t
    }

    function cssToDOM(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function getBody() {
        var e = document.body;
        return e || (e = createElement(isSVG ? "svg" : "body"), e.fake = !0), e
    }

    function injectElementWithStyles(e, t, n, r) {
        var o, i, d, s, a = "modernizr",
            l = createElement("div"),
            c = getBody();
        if (parseInt(n, 10))
            for (; n--;) d = createElement("div"), d.id = r ? r[n] : a + (n + 1), l.appendChild(d);
        return o = createElement("style"), o.type = "text/css", o.id = "s" + a, (c.fake ? c : l).appendChild(o), c.appendChild(l), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e)), l.id = a, c.fake && (c.style.background = "", c.style.overflow = "hidden", s = docElement.style.overflow, docElement.style.overflow = "hidden", docElement.appendChild(c)), i = t(l, e), c.fake ? (c.parentNode.removeChild(c), docElement.style.overflow = s, docElement.offsetHeight) : l.parentNode.removeChild(l), !!i
    }

    function addTest(e, t) {
        if ("object" == typeof e)
            for (var n in e) hasOwnProp(e, n) && addTest(n, e[n]);
        else {
            e = e.toLowerCase();
            var r = e.split("."),
                o = Modernizr[r[0]];
            if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), setClasses([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
        }
        return Modernizr
    }

    function fnBind(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function testDOMProps(e, t, n) {
        var r;
        for (var o in e)
            if (e[o] in t) return n === !1 ? e[o] : (r = t[e[o]], is(r, "function") ? fnBind(r, n || t) : r);
        return !1
    }

    function domToCSS(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function nativeTestProps(e, t) {
        var n = e.length;
        if ("CSS" in window && "supports" in window.CSS) {
            for (; n--;)
                if (window.CSS.supports(domToCSS(e[n]), t)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in window) {
            for (var r = []; n--;) r.push("(" + domToCSS(e[n]) + ":" + t + ")");
            return r = r.join(" or "), injectElementWithStyles("@supports (" + r + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return undefined
    }

    function testProps(e, t, n, r) {
        function o() {
            d && (delete mStyle.style, delete mStyle.modElem)
        }
        if (r = is(r, "undefined") ? !1 : r, !is(n, "undefined")) {
            var i = nativeTestProps(e, n);
            if (!is(i, "undefined")) return i
        }
        for (var d, s, a, l, c, u = ["modernizr", "tspan", "samp"]; !mStyle.style && u.length;) d = !0, mStyle.modElem = createElement(u.shift()), mStyle.style = mStyle.modElem.style;
        for (a = e.length, s = 0; a > s; s++)
            if (l = e[s], c = mStyle.style[l], contains(l, "-") && (l = cssToDOM(l)), mStyle.style[l] !== undefined) {
                if (r || is(n, "undefined")) return o(), "pfx" == t ? l : !0;
                try {
                    mStyle.style[l] = n
                } catch (p) {}
                if (mStyle.style[l] != c) return o(), "pfx" == t ? l : !0
            }
        return o(), !1
    }

    function testPropsAll(e, t, n, r, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            d = (e + " " + cssomPrefixes.join(i + " ") + i).split(" ");
        return is(t, "string") || is(t, "undefined") ? testProps(d, t, r, o) : (d = (e + " " + domPrefixes.join(i + " ") + i).split(" "), testDOMProps(d, t, n))
    }

    function testAllProps(e, t, n) {
        return testPropsAll(e, undefined, undefined, t, n)
    }
    var classes = [],
        tests = [],
        ModernizrProto = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                tests.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                tests.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = ModernizrProto, Modernizr = new Modernizr, Modernizr.addTest("applicationcache", "applicationCache" in window), Modernizr.addTest("cookies", function() {
        try {
            document.cookie = "cookietest=1";
            var e = -1 != document.cookie.indexOf("cookietest=");
            return document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", e
        } catch (t) {
            return !1
        }
    }), Modernizr.addTest("geolocation", "geolocation" in navigator), Modernizr.addTest("history", function() {
        var e = navigator.userAgent;
        return -1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone") ? window.history && "pushState" in window.history : !1
    }), Modernizr.addTest("ie8compat", !window.addEventListener && !!document.documentMode && 7 === document.documentMode), Modernizr.addTest("json", "JSON" in window && "parse" in JSON && "stringify" in JSON), Modernizr.addTest("postmessage", "postMessage" in window), Modernizr.addTest("svg", !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), Modernizr.addTest("templatestrings", function() {
        var supports;
        try {
            eval("``"), supports = !0
        } catch (e) {}
        return !!supports
    });
    var supports = !1;
    try {
        supports = "WebSocket" in window && 2 === window.WebSocket.CLOSING
    } catch (e) {}
    Modernizr.addTest("websockets", supports);
    var CSS = window.CSS;
    Modernizr.addTest("cssescape", CSS ? "function" == typeof CSS.escape : !1);
    var newSyntax = "CSS" in window && "supports" in window.CSS,
        oldSyntax = "supportsCSS" in window;
    Modernizr.addTest("supports", newSyntax || oldSyntax), Modernizr.addTest("target", function() {
        var e = window.document;
        if (!("querySelectorAll" in e)) return !1;
        try {
            return e.querySelectorAll(":target"), !0
        } catch (t) {
            return !1
        }
    }), Modernizr.addTest("picture", "HTMLPictureElement" in window), Modernizr.addTest("localstorage", function() {
        var e = "modernizr";
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0
        } catch (t) {
            return !1
        }
    }), Modernizr.addTest("sessionstorage", function() {
        var e = "modernizr";
        try {
            return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
        } catch (t) {
            return !1
        }
    }), Modernizr.addTest("websqldatabase", "openDatabase" in window), Modernizr.addTest("svgfilters", function() {
        var e = !1;
        try {
            e = "SVGFEColorMatrixElement" in window && 2 == SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE
        } catch (t) {}
        return e
    }), Modernizr.addTest("webworkers", "Worker" in window);
    var prefixes = ModernizrProto._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    ModernizrProto._prefixes = prefixes;
    var docElement = document.documentElement,
        isSVG = "svg" === docElement.nodeName.toLowerCase(),
        html5;
    isSVG || ! function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = w.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function o(e, t) {
            var n = w.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), w.elements = n + " " + e, l(t)
        }

        function i(e) {
            var t = v[e[g]];
            return t || (t = {}, y++, e[g] = y, v[y] = t), t
        }

        function d(e, n, r) {
            if (n || (n = t), u) return n.createElement(e);
            r || (r = i(n));
            var o;
            return o = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || m.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
        }

        function s(e, n) {
            if (e || (e = t), u) return e.createDocumentFragment();
            n = n || i(e);
            for (var o = n.frag.cloneNode(), d = 0, s = r(), a = s.length; a > d; d++) o.createElement(s[d]);
            return o
        }

        function a(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return w.shivMethods ? d(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(w, t.frag)
        }

        function l(e) {
            e || (e = t);
            var r = i(e);
            return !w.shivCSS || c || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || a(e, r), e
        }
        var c, u, p = "3.7.3",
            f = e.html5 || {},
            m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            g = "_html5shiv",
            y = 0,
            v = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", c = "hidden" in e, u = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                c = !0, u = !0
            }
        }();
        var w = {
            elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: p,
            shivCSS: f.shivCSS !== !1,
            supportsUnknownElements: u,
            shivMethods: f.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: d,
            createDocumentFragment: s,
            addElements: o
        };
        e.html5 = w, l(t), "object" == typeof module && module.exports && (module.exports = w)
    }("undefined" != typeof window ? window : this, document);
    var omPrefixes = "Moz O ms Webkit",
        domPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(" ") : [];
    ModernizrProto._domPrefixes = domPrefixes;
    var hasEvent = function() {
        function e(e, n) {
            var r;
            return e ? (n && "string" != typeof n || (n = createElement(n || "div")), e = "on" + e, r = e in n, !r && t && (n.setAttribute || (n = createElement("div")), n.setAttribute(e, ""), r = "function" == typeof n[e], n[e] !== undefined && (n[e] = undefined), n.removeAttribute(e)), r) : !1
        }
        var t = !("onblur" in document.documentElement);
        return e
    }();
    ModernizrProto.hasEvent = hasEvent, Modernizr.addTest("hashchange", function() {
        return hasEvent("hashchange", window) === !1 ? !1 : document.documentMode === undefined || document.documentMode > 7
    }), Modernizr.addTest("audio", function() {
        var e = createElement("audio"),
            t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("canvas", function() {
        var e = createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }), Modernizr.addTest("canvastext", function() {
        return Modernizr.canvas === !1 ? !1 : "function" == typeof createElement("canvas").getContext("2d").fillText
    }), Modernizr.addTest("emoji", function() {
        if (!Modernizr.canvastext) return !1;
        var e = window.devicePixelRatio || 1,
            t = 12 * e,
            n = createElement("canvas"),
            r = n.getContext("2d");
        return r.fillStyle = "#f00", r.textBaseline = "top", r.font = "32px Arial", r.fillText("🐨", 0, 0), 0 !== r.getImageData(t, t, 1, 1).data[0]
    }), Modernizr.addTest("video", function() {
        var e = createElement("video"),
            t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("csscalc", function() {
        var e = "width:",
            t = "calc(10px);",
            n = createElement("a");
        return n.style.cssText = e + prefixes.join(t + e), !!n.style.length
    }), Modernizr.addTest("cubicbezierrange", function() {
        var e = createElement("a");
        return e.style.cssText = prefixes.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "), !!e.style.length
    }), Modernizr.addTest("cssgradients", function() {
        for (var e, t = "background-image:", n = "gradient(linear,left top,right bottom,from(#9f9),to(white));", r = "", o = 0, i = prefixes.length - 1; i > o; o++) e = 0 === o ? "to " : "", r += t + prefixes[o] + "linear-gradient(" + e + "left top, #9f9, white);";
        Modernizr._config.usePrefixes && (r += t + "-webkit-" + n);
        var d = createElement("a"),
            s = d.style;
        return s.cssText = r, ("" + s.backgroundImage).indexOf("gradient") > -1
    }), Modernizr.addTest("multiplebgs", function() {
        var e = createElement("a").style;
        return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background)
    }), Modernizr.addTest("opacity", function() {
        var e = createElement("a").style;
        return e.cssText = prefixes.join("opacity:.55;"), /^0.55$/.test(e.opacity)
    }), Modernizr.addTest("csspointerevents", function() {
        var e = createElement("a").style;
        return e.cssText = "pointer-events:auto", "auto" === e.pointerEvents
    }), Modernizr.addTest("csspositionsticky", function() {
        var e = "position:",
            t = "sticky",
            n = createElement("a"),
            r = n.style;
        return r.cssText = e + prefixes.join(t + ";" + e).slice(0, -e.length), -1 !== r.position.indexOf(t)
    }), Modernizr.addTest("regions", function() {
        if (isSVG) return !1;
        var e = Modernizr.prefixed("flowFrom"),
            t = Modernizr.prefixed("flowInto"),
            n = !1;
        if (!e || !t) return n;
        var r = createElement("iframe"),
            o = createElement("div"),
            i = createElement("div"),
            d = createElement("div"),
            s = "modernizr_flow_for_regions_check";
        i.innerText = "M", o.style.cssText = "top: 150px; left: 150px; padding: 0px;", d.style.cssText = "width: 50px; height: 50px; padding: 42px;", d.style[e] = s, o.appendChild(i), o.appendChild(d), docElement.appendChild(o);
        var a, l, c = i.getBoundingClientRect();
        return i.style[t] = s, a = i.getBoundingClientRect(), l = parseInt(a.left - c.left, 10), docElement.removeChild(o), 42 == l ? n = !0 : (docElement.appendChild(r), c = r.getBoundingClientRect(), r.style[t] = s, a = r.getBoundingClientRect(), c.height > 0 && c.height !== a.height && 0 === a.height && (n = !0)), i = d = o = r = undefined, n
    }), Modernizr.addTest("cssremunit", function() {
        var e = createElement("a").style;
        try {
            e.fontSize = "3rem"
        } catch (t) {}
        return /rem/.test(e.fontSize)
    }), Modernizr.addTest("rgba", function() {
        var e = createElement("a").style;
        return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1
    }), Modernizr.addTest("preserve3d", function() {
        var e = createElement("a"),
            t = createElement("a");
        e.style.cssText = "display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);", t.style.cssText = "display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);", e.appendChild(t), docElement.appendChild(e);
        var n = t.getBoundingClientRect();
        return docElement.removeChild(e), n.width && n.width < 4
    }), Modernizr.addTest("inlinesvg", function() {
        var e = createElement("div");
        return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
    });
    var inputElem = createElement("input"),
        inputattrs = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
        attrs = {};
    Modernizr.input = function(e) {
        for (var t = 0, n = e.length; n > t; t++) attrs[e[t]] = !!(e[t] in inputElem);
        return attrs.list && (attrs.list = !(!createElement("datalist") || !window.HTMLDataListElement)), attrs
    }(inputattrs);
    var inputtypes = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        inputs = {};
    Modernizr.inputtypes = function(e) {
        for (var t, n, r, o = e.length, i = "1)", d = 0; o > d; d++) inputElem.setAttribute("type", t = e[d]), r = "text" !== inputElem.type && "style" in inputElem, r && (inputElem.value = i, inputElem.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(t) && inputElem.style.WebkitAppearance !== undefined ? (docElement.appendChild(inputElem), n = document.defaultView, r = n.getComputedStyle && "textfield" !== n.getComputedStyle(inputElem, null).WebkitAppearance && 0 !== inputElem.offsetHeight, docElement.removeChild(inputElem)) : /^(search|tel)$/.test(t) || (r = /^(url|email)$/.test(t) ? inputElem.checkValidity && inputElem.checkValidity() === !1 : inputElem.value != i)), inputs[e[d]] = !!r;
        return inputs
    }(inputtypes);
    var modElem = {
        elem: createElement("modernizr")
    };
    Modernizr._q.push(function() {
        delete modElem.elem
    }), Modernizr.addTest("csschunit", function() {
        var e, t = modElem.elem.style;
        try {
            t.fontSize = "3ch", e = -1 !== t.fontSize.indexOf("ch")
        } catch (n) {
            e = !1
        }
        return e
    }), Modernizr.addTest("cssexunit", function() {
        var e, t = modElem.elem.style;
        try {
            t.fontSize = "3ex", e = -1 !== t.fontSize.indexOf("ex")
        } catch (n) {
            e = !1
        }
        return e
    }), Modernizr.addTest("hsla", function() {
        var e = createElement("a").style;
        return e.cssText = "background-color:hsla(120,40%,100%,.5)", contains(e.backgroundColor, "rgba") || contains(e.backgroundColor, "hsla")
    });
    var toStringFn = {}.toString;
    Modernizr.addTest("svgclippaths", function() {
        return !!document.createElementNS && /SVGClipPath/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    }), Modernizr.addTest("svgforeignobject", function() {
        return !!document.createElementNS && /SVGForeignObject/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")))
    }), Modernizr.addTest("smil", function() {
        return !!document.createElementNS && /SVGAnimate/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg", "animate")))
    });
    var cssomPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.split(" ") : [];
    ModernizrProto._cssomPrefixes = cssomPrefixes;
    var mStyle = {
        style: modElem.elem.style
    };
    Modernizr._q.unshift(function() {
        delete mStyle.style
    });
    var testStyles = ModernizrProto.testStyles = injectElementWithStyles;
    Modernizr.addTest("hiddenscroll", function() {
        return testStyles("#modernizr {width:100px;height:100px;overflow:scroll}", function(e) {
            return e.offsetWidth === e.clientWidth
        })
    }), Modernizr.addTest("touchevents", function() {
        var e;
        if ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) e = !0;
        else {
            var t = ["@media (", prefixes.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            testStyles(t, function(t) {
                e = 9 === t.offsetTop
            })
        }
        return e
    }), Modernizr.addTest("unicoderange", function() {
        return Modernizr.testStyles('@font-face{font-family:"unicodeRange";src:local("Arial");unicode-range:U+0020,U+002E}#modernizr span{font-size:20px;display:inline-block;font-family:"unicodeRange",monospace}#modernizr .mono{font-family:monospace}', function(e) {
            for (var t = [".", ".", "m", "m"], n = 0; n < t.length; n++) {
                var r = createElement("span");
                r.innerHTML = t[n], r.className = n % 2 ? "mono" : "", e.appendChild(r), t[n] = r.clientWidth
            }
            return t[0] !== t[1] && t[2] === t[3]
        })
    }), Modernizr.addTest("checked", function() {
        return testStyles("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}", function(e) {
            var t = createElement("input");
            return t.setAttribute("type", "checkbox"), t.setAttribute("checked", "checked"), e.appendChild(t), 20 === t.offsetLeft
        })
    }), testStyles("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}", function(e) {
        var t, n = e.childNodes;
        t = n[0].offsetLeft < n[1].offsetLeft, Modernizr.addTest("displaytable", t, {
            aliases: ["display-table"]
        })
    }, 2);
    var blacklist = function() {
        var e = navigator.userAgent,
            t = e.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1),
            n = e.match(/w(eb)?osbrowser/gi),
            r = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9,
            o = 533 > t && e.match(/android/gi);
        return n || o || r
    }();
    blacklist ? Modernizr.addTest("fontface", !1) : testStyles('@font-face {font-family:"font";src:url("https://")}', function(e, t) {
        var n = document.getElementById("smodernizr"),
            r = n.sheet || n.styleSheet,
            o = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "",
            i = /src/i.test(o) && 0 === o.indexOf(t.split(" ")[0]);
        Modernizr.addTest("fontface", i)
    }), testStyles('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(e) {
        Modernizr.addTest("generatedcontent", e.offsetHeight >= 7)
    }), Modernizr.addTest("hairline", function() {
        return testStyles("#modernizr {border:.5px solid transparent}", function(e) {
            return 1 === e.offsetHeight
        })
    }), Modernizr.addTest("cssinvalid", function() {
        return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}", function(e) {
            var t = createElement("input");
            return t.required = !0, e.appendChild(t), t.clientWidth > 10
        })
    }), testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}", function(e) {
        Modernizr.addTest("lastchild", e.lastChild.offsetWidth > e.firstChild.offsetWidth)
    }, 2), testStyles("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}", function(e) {
        for (var t = e.getElementsByTagName("div"), n = !0, r = 0; 5 > r; r++) n = n && t[r].offsetWidth === r % 2 + 1;
        Modernizr.addTest("nthchild", n)
    }, 5), testStyles("#modernizr{overflow: scroll; width: 40px; height: 40px; }#" + prefixes.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#") + "scrollbar{width:0px}", function(e) {
        Modernizr.addTest("cssscrollbar", 40 == e.scrollWidth)
    }), Modernizr.addTest("siblinggeneral", function() {
        return testStyles("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}", function(e) {
            return 200 == e.lastChild.offsetWidth
        }, 2)
    }), testStyles("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}", function(e) {
        var t = e.firstChild;
        t.innerHTML = "This is a text written in Arial", Modernizr.addTest("subpixelfont", window.getComputedStyle ? "44px" !== window.getComputedStyle(t, null).getPropertyValue("width") : !1)
    }, 1, ["subpixel"]), Modernizr.addTest("cssvalid", function() {
        return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}", function(e) {
            var t = createElement("input");
            return e.appendChild(t), t.clientWidth > 10
        })
    }), testStyles("#modernizr { height: 50vh; }", function(e) {
        var t = parseInt(window.innerHeight / 2, 10),
            n = parseInt((window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).height, 10);
        Modernizr.addTest("cssvhunit", n == t)
    }), testStyles("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function(e) {
        var t = e.childNodes[2],
            n = e.childNodes[1],
            r = e.childNodes[0],
            o = parseInt((n.offsetWidth - n.clientWidth) / 2, 10),
            i = r.clientWidth / 100,
            d = r.clientHeight / 100,
            s = parseInt(50 * Math.max(i, d), 10),
            a = parseInt((window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).width, 10);
        Modernizr.addTest("cssvmaxunit", roundedEquals(s, a) || roundedEquals(s, a - o))
    }, 3), testStyles("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function(e) {
        var t = e.childNodes[2],
            n = e.childNodes[1],
            r = e.childNodes[0],
            o = parseInt((n.offsetWidth - n.clientWidth) / 2, 10),
            i = r.clientWidth / 100,
            d = r.clientHeight / 100,
            s = parseInt(50 * Math.min(i, d), 10),
            a = parseInt((window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).width, 10);
        Modernizr.addTest("cssvminunit", roundedEquals(s, a) || roundedEquals(s, a - o))
    }, 3), testStyles("#modernizr { width: 50vw; }", function(e) {
        var t = parseInt(window.innerWidth / 2, 10),
            n = parseInt((window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).width, 10);
        Modernizr.addTest("cssvwunit", n == t)
    });
    var mq = function() {
        var e = window.matchMedia || window.msMatchMedia;
        return e ? function(t) {
            var n = e(t);
            return n && n.matches || !1
        } : function(e) {
            var t = !1;
            return injectElementWithStyles("@media " + e + " { #modernizr { position: absolute; } }", function(e) {
                t = "absolute" == (window.getComputedStyle ? window.getComputedStyle(e, null) : e.currentStyle).position
            }), t
        }
    }();
    ModernizrProto.mq = mq, Modernizr.addTest("mediaqueries", mq("only all"));
    var atRule = function(e) {
        var t, n = prefixes.length,
            r = window.CSSRule;
        if ("undefined" == typeof r) return undefined;
        if (!e) return !1;
        if (e = e.replace(/^@/, ""), t = e.replace(/-/g, "_").toUpperCase() + "_RULE", t in r) return "@" + e;
        for (var o = 0; n > o; o++) {
            var i = prefixes[o],
                d = i.toUpperCase() + "_" + t;
            if (d in r) return "@-" + i.toLowerCase() + "-" + e
        }
        return !1
    };
    ModernizrProto.atRule = atRule;
    var hasOwnProp;
    ! function() {
        var e = {}.hasOwnProperty;
        hasOwnProp = is(e, "undefined") || is(e.call, "undefined") ? function(e, t) {
            return t in e && is(e.constructor.prototype[t], "undefined")
        } : function(t, n) {
            return e.call(t, n)
        }
    }(), ModernizrProto._l = {}, ModernizrProto.on = function(e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }, ModernizrProto._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e, r;
                for (e = 0; e < n.length; e++)(r = n[e])(t)
            }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function() {
        ModernizrProto.addTest = addTest
    }), Modernizr.addAsyncTest(function() {
        var e = new Image;
        e.onerror = function() {
            addTest("exiforientation", !1, {
                aliases: ["exif-orientation"]
            })
        }, e.onload = function() {
            addTest("exiforientation", 2 !== e.width, {
                aliases: ["exif-orientation"]
            })
        }, e.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAABgASAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigD/2Q=="
    }), Modernizr.addTest("svgasimg", document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"));
    var testProp = ModernizrProto.testProp = function(e, t, n) {
        return testProps([e], undefined, t, n)
    };
    Modernizr.addTest("textshadow", testProp("textShadow", "1px 1px")), ModernizrProto.testAllProps = testPropsAll, ModernizrProto.testAllProps = testAllProps, Modernizr.addTest("cssanimations", testAllProps("animationName", "a", !0)), Modernizr.addTest("csspseudoanimations", function() {
            var e = !1;
            if (!Modernizr.cssanimations || !window.getComputedStyle) return e;
            var t = ["@", Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/, ""), '#modernizr:before { content:" "; font-size:5px;', Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"), "}"].join("");
            return Modernizr.testStyles(t, function(t) {
                e = "10px" === window.getComputedStyle(t, ":before").getPropertyValue("font-size")
            }), e
        }), Modernizr.addTest("backgroundcliptext", function() {
            return testAllProps("backgroundClip", "text")
        }), Modernizr.addTest("bgpositionxy", function() {
            return testAllProps("backgroundPositionX", "3px", !0) && testAllProps("backgroundPositionY", "5px", !0)
        }), Modernizr.addTest("bgrepeatround", testAllProps("backgroundRepeat", "round")), Modernizr.addTest("bgrepeatspace", testAllProps("backgroundRepeat", "space")), Modernizr.addTest("backgroundsize", testAllProps("backgroundSize", "100%", !0)), Modernizr.addTest("bgsizecover", testAllProps("backgroundSize", "cover")), Modernizr.addTest("borderimage", testAllProps("borderImage", "url() 1", !0)), Modernizr.addTest("borderradius", testAllProps("borderRadius", "0px", !0)), Modernizr.addTest("boxshadow", testAllProps("boxShadow", "1px 1px", !0)), Modernizr.addTest("boxsizing", testAllProps("boxSizing", "border-box", !0) && (document.documentMode === undefined || document.documentMode > 7)),
        function() {
            Modernizr.addTest("csscolumns", function() {
                var e = !1,
                    t = testAllProps("columnCount");
                try {
                    (e = !!t) && (e = new Boolean(e))
                } catch (n) {}
                return e
            });
            for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) e = n[r].toLowerCase(), t = testAllProps("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || testAllProps(n[r])), Modernizr.addTest("csscolumns." + e, t)
        }(), Modernizr.addTest("ellipsis", testAllProps("textOverflow", "ellipsis")), Modernizr.addTest("cssfilters", function() {
            if (Modernizr.supports) return testAllProps("filter", "blur(2px)");
            var e = createElement("a");
            return e.style.cssText = prefixes.join("filter:blur(2px); "), !!e.style.length && (document.documentMode === undefined || document.documentMode > 9)
        }), Modernizr.addTest("flexbox", testAllProps("flexBasis", "1px", !0)), Modernizr.addTest("flexboxlegacy", testAllProps("boxDirection", "reverse", !0)), Modernizr.addTest("flexboxtweener", testAllProps("flexAlign", "end", !0)), Modernizr.addTest("flexwrap", testAllProps("flexWrap", "wrap", !0)), Modernizr.addAsyncTest(function() {
            function e() {
                function n() {
                    try {
                        var e = createElement("div"),
                            t = createElement("span"),
                            n = e.style,
                            r = 0,
                            o = 0,
                            i = !1,
                            d = document.body.firstElementChild || document.body.firstChild;
                        return e.appendChild(t), t.innerHTML = "Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.", document.body.insertBefore(e, d), n.cssText = "position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;", r = t.offsetHeight, o = t.offsetWidth, n.cssText = "position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;" + prefixes.join("hyphens:auto; "), i = t.offsetHeight != r || t.offsetWidth != o,
                            document.body.removeChild(e), e.removeChild(t), i
                    } catch (s) {
                        return !1
                    }
                }

                function r(e, t) {
                    try {
                        var n = createElement("div"),
                            r = createElement("span"),
                            o = n.style,
                            i = 0,
                            d = !1,
                            s = !1,
                            a = !1,
                            l = document.body.firstElementChild || document.body.firstChild;
                        return o.cssText = "position:absolute;top:0;left:0;overflow:visible;width:1.25em;", n.appendChild(r), document.body.insertBefore(n, l), r.innerHTML = "mm", i = r.offsetHeight, r.innerHTML = "m" + e + "m", s = r.offsetHeight > i, t ? (r.innerHTML = "m<br />m", i = r.offsetWidth, r.innerHTML = "m" + e + "m", a = r.offsetWidth > i) : a = !0, s === !0 && a === !0 && (d = !0), document.body.removeChild(n), n.removeChild(r), d
                    } catch (c) {
                        return !1
                    }
                }

                function o(e) {
                    try {
                        var t, n = createElement("input"),
                            r = createElement("div"),
                            o = "lebowski",
                            i = !1,
                            d = document.body.firstElementChild || document.body.firstChild;
                        r.innerHTML = o + e + o, document.body.insertBefore(r, d), document.body.insertBefore(n, r), n.setSelectionRange ? (n.focus(), n.setSelectionRange(0, 0)) : n.createTextRange && (t = n.createTextRange(), t.collapse(!0), t.moveEnd("character", 0), t.moveStart("character", 0), t.select());
                        try {
                            window.find ? i = window.find(o + o) : (t = window.self.document.body.createTextRange(), i = t.findText(o + o))
                        } catch (s) {
                            i = !1
                        }
                        return document.body.removeChild(r), document.body.removeChild(n), i
                    } catch (s) {
                        return !1
                    }
                }
                return document.body || document.getElementsByTagName("body")[0] ? (addTest("csshyphens", function() {
                    if (!testAllProps("hyphens", "auto", !0)) return !1;
                    try {
                        return n()
                    } catch (e) {
                        return !1
                    }
                }), addTest("softhyphens", function() {
                    try {
                        return r("&#173;", !0) && r("&#8203;", !1)
                    } catch (e) {
                        return !1
                    }
                }), void addTest("softhyphensfind", function() {
                    try {
                        return o("&#173;") && o("&#8203;")
                    } catch (e) {
                        return !1
                    }
                })) : void setTimeout(e, t)
            }
            var t = 300;
            setTimeout(e, t)
        }), Modernizr.addTest("cssmask", testAllProps("maskRepeat", "repeat-x", !0)), Modernizr.addTest("overflowscrolling", testAllProps("overflowScrolling", "touch", !0)), Modernizr.addTest("cssreflections", testAllProps("boxReflect", "above", !0)), Modernizr.addTest("cssresize", testAllProps("resize", "both", !0)), Modernizr.addTest("scrollsnappoints", testAllProps("scrollSnapType")), Modernizr.addTest("shapes", testAllProps("shapeOutside", "content-box", !0)), Modernizr.addTest("textalignlast", testAllProps("textAlignLast")), Modernizr.addTest("csstransforms", function() {
            return -1 === navigator.userAgent.indexOf("Android 2.") && testAllProps("transform", "scale(1)", !0)
        }), Modernizr.addTest("csstransforms3d", function() {
            var e = !!testAllProps("perspective", "1px", !0),
                t = Modernizr._config.usePrefixes;
            if (e && (!t || "webkitPerspective" in docElement.style)) {
                var n, r = "#modernizr{width:0;height:0}";
                Modernizr.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", testStyles(r + n, function(t) {
                    e = 7 === t.offsetWidth && 18 === t.offsetHeight
                })
            }
            return e
        }), Modernizr.addTest("csstransitions", testAllProps("transition", "all", !0)), Modernizr.addTest("csspseudotransitions", function() {
            var e = !1;
            if (!Modernizr.csstransitions || !window.getComputedStyle) return e;
            var t = '#modernizr:before { content:" "; font-size:5px;' + Modernizr._prefixes.join("transition:0s 100s;") + "}#modernizr.trigger:before { font-size:10px; }";
            return Modernizr.testStyles(t, function(t) {
                window.getComputedStyle(t, ":before").getPropertyValue("font-size"), t.className += "trigger", e = "5px" === window.getComputedStyle(t, ":before").getPropertyValue("font-size")
            }), e
        }), Modernizr.addTest("userselect", testAllProps("userSelect", "none", !0));
    var prefixed = ModernizrProto.prefixed = function(e, t, n) {
            return 0 === e.indexOf("@") ? atRule(e) : (-1 != e.indexOf("-") && (e = cssToDOM(e)), t ? testPropsAll(e, t, n) : testPropsAll(e, "pfx"))
        },
        crypto = prefixed("crypto", window);
    Modernizr.addTest("crypto", !!prefixed("subtle", crypto)), Modernizr.addTest("fullscreen", !(!prefixed("exitFullscreen", document, !1) && !prefixed("cancelFullScreen", document, !1)));
    var indexeddb;
    try {
        indexeddb = prefixed("indexedDB", window)
    } catch (e) {}
    Modernizr.addTest("indexeddb", !!indexeddb), indexeddb && Modernizr.addTest("indexeddb.deletedatabase", "deleteDatabase" in indexeddb), Modernizr.addTest("intl", !!prefixed("Intl", window)), Modernizr.addTest("backgroundblendmode", prefixed("backgroundBlendMode", "text")), Modernizr.addTest("objectfit", !!prefixed("objectFit"), {
        aliases: ["object-fit"]
    }), Modernizr.addTest("wrapflow", function() {
        var e = prefixed("wrapFlow");
        if (!e || isSVG) return !1;
        var t = e.replace(/([A-Z])/g, function(e, t) {
                return "-" + t.toLowerCase()
            }).replace(/^ms-/, "-ms-"),
            n = createElement("div"),
            r = createElement("div"),
            o = createElement("span");
        r.style.cssText = "position: absolute; left: 50px; width: 100px; height: 20px;" + t + ":end;", o.innerText = "X", n.appendChild(r), n.appendChild(o), docElement.appendChild(n);
        var i = o.offsetLeft;
        return docElement.removeChild(n), r = o = n = undefined, 150 == i
    }), testRunner(), setClasses(classes), delete ModernizrProto.addTest, delete ModernizrProto.addAsyncTest;
    for (var i = 0; i < Modernizr._q.length; i++) Modernizr._q[i]();
    window.Modernizr = Modernizr
}(window, document);

/**
 *
 * Responsive menu v1.0.0
 * A vanilla JS responsive menu plugin, by Robin Poort - Timble
 * http://robinpoort.com - http://www.timble.net
 *
 * Browser support: IE9+ (IE8 doesn't need a responsive menu since it's not responsive)
 *
 * Dependency: apollo JS | https://github.com/toddmotto/apollo
 * Plugin boilerplate by | http://gomakethings.com/mit/
 *
 * Free to use under the MIT License.
 *
 */

(function (root, factory) {
    if ( typeof define === 'function' && define.amd ) {
        define('responsivemenu', factory(root));
    } else if ( typeof exports === 'object' ) {
        module.responsivemenu = factory(root);
    } else {
        root.responsivemenu = factory(root);
    }
})(this, function (root) {

    'use strict';

    // Variables
    var exports = {}; // Object for public APIs
    var supports = !!document.querySelector && !!root.addEventListener; // Feature test
    var settings; // Plugin settings
    var menu; // The actual menu item
    var hasChildren = false;
    var subtoggles = false;

    // Default settings
    var defaults = {
        menu: '',
        initiated_class: 'rm-initiated',
        before_element: '',
        toggletype: 'button',
        toggleclass: 'rm-togglebutton',
        toggleclosedclass: 'rm-togglebutton--closed',
        togglecontent: '<i class="fa fa-bars" aria-hidden="true"></i>',
        subtoggletype: 'button',
        subtoggleclass: 'rm-subtoggle',
        subtogglecontent: '<i class="fa fa-caret-down" aria-hidden="true"></i>',
        sticky: 0,
        absolute: 0,
        hideclass: 'rm-closed',
        openclass: 'rm-opened',
        openbodyclass: 'has-opened-menu',
        focusedclass: 'rm-focused',
        animateopenclass: 'is-opening',
        animatecloseclass: 'is-closing',
        animateduration: 0, // (Animated with CSS so set to same duration as CSS value)
        subanimateopenclass: 'is-opening',
        subanimatecloseclass: 'is-closing',
        subanimateduration: 0, // (Animated with CSS so set to same duration as CSS value)
        parentclass: 'rm-parent',
        fullmenuclass: 'rm-fullmenu',
        absolutemenuclass: 'rm-absolutemenu',
        bodyoverflowhiddenclass: 'rm-bodyoverflowhidden',
        menuoverflowautoclass: 'rm-menuoverflowauto',
        stickyclass: 'rm-sticky',
        stickyinitiatedclass: 'rm-sticky-initiated',
        noresponsivemenuclass: 'rm-no-responsive-menu',
        mobileindicatorid: 'rm-mobile-indicator',
        onAfterInit: function() {},
        onBeforeToggleOpen: function() {},
        onAfterToggleOpen: function() {},
        onBeforeToggleClose: function() {},
        onAfterToggleClose: function() {},
        onBeforeSubToggleOpen: function() {},
        onAfterSubToggleOpen: function() {},
        onBeforeSubToggleClose: function() {},
        onAfterSubToggleClose: function() {}
    };

    // Methods
    /**
     * A simple forEach() implementation for Arrays, Objects and NodeLists
     * @private
     * @param {Array|Object|NodeList} collection Collection of items to iterate
     * @param {Function} callback Callback function for each iteration
     * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
     */
    var forEach = function (collection, callback, scope) {
        if (Object.prototype.toString.call(collection) === '[object Object]') {
            for (var prop in collection) {
                if (Object.prototype.hasOwnProperty.call(collection, prop)) {
                    callback.call(scope, collection[prop], prop, collection);
                }
            }
        } else {
            for (var i = 0, len = collection.length; i < len; i++) {
                callback.call(scope, collection[i], i, collection);
            }
        }
    };

    /**
     * Merge defaults with user options
     * @private
     * @param {Object} defaults Default settings
     * @param {Object} options User options
     * @returns {Object} Merged values of defaults and options
     */
    var extend = function ( defaults, options ) {
        var extended = {};
        forEach(defaults, function (value, prop) {
            extended[prop] = defaults[prop];
        });
        forEach(options, function (value, prop) {
            extended[prop] = options[prop];
        });
        return extended;
    };

    /**
     * Remove whitespace from a string
     * @private
     * @param {String} string
     * @returns {String}
     */
    var trim = function ( string ) {
        return string.replace(/^\s+|\s+$/g, '');
    };

    /**
     * Convert data-options attribute into an object of key/value pairs
     * @private
     * @param {String} options Link-specific options as a data attribute string
     * @returns {Object}
     */
    var getDataOptions = function ( options ) {
        var settings = {};
        // Create a key/value pair for each setting
        if ( options ) {
            options = options.split(';');
            options.forEach( function(option) {
                option = trim(option);
                if ( option !== '' ) {
                    option = option.split(':');
                    settings[option[0]] = trim(option[1]);
                }
            });
        }
        return settings;
    };

    /**
     * Run when window resize is done (after x ms)
     */
    var waitForFinalEvent = (function () {
        var timers = {};
        return function (callback, ms, uniqueId) {
            if (!uniqueId) {
                uniqueId = "Don't call this twice without a uniqueId";
            }
            if (timers[uniqueId]) {
                clearTimeout (timers[uniqueId]);
            }
            timers[uniqueId] = setTimeout(callback, ms);
        };
    })();

    /**
     * Get parents
     */
    function getParents(element, tag, stop) {
        var nodes = [];
        while (element.parentNode && element.parentNode != stop) {
            element = element.parentNode;
            if (element.tagName == tag) {
                nodes.push(element);
            }
        }
        return nodes
    }

    /**
     * Get style
     */
    function getStyle(el,styleProp)
    {
        var x = document.getElementById(el);

        if (window.getComputedStyle)
        {
            var y = document.defaultView.getComputedStyle(x,null).getPropertyValue(styleProp);
        }
        else if (x.currentStyle)
        {
            var y = x.currentStyle[styleProp];
        }

        return y;
    }

    // Responsive menu
    function initialize(settings) {

        // Define what the actual menu object is
        if ( settings.menu == '' ) {
            menu = settings.wrapper.getElementsByTagName('ul')[0];
        } else {
            menu = settings.menu;
        }

        // Add a class when JS is initiated
        apollo.addClass(settings.wrapper, settings.initiated_class);

        // Function to run after init
        settings.onAfterInit();

        // See if menu has children
        var parents = menu.querySelectorAll('li ul');
        if ( parents.length ) {
            hasChildren = true;
            subtoggles = document.getElementsByClassName(settings.subtoggleclass);
        }

        // Create mobile width indicator
        var mobileindicator = document.createElement('div');
        document.body.appendChild(mobileindicator);
        mobileindicator.id = settings.mobileindicatorid;
        var mobileindicatorZindex = 0;

        // Creating the main toggle button
        var toggle_element = document.createElement(settings.toggletype);
        apollo.addClass(toggle_element, [settings.toggleclass, settings.hideclass]);
        if ( settings.before_element == '' ) { settings.before_element = settings.wrapper.firstChild }
        settings.before_element.parentNode.insertBefore(toggle_element, settings.before_element);
        var togglebutton = document.getElementsByClassName(settings.toggleclass)[0];
        togglebutton.innerHTML = settings.togglecontent;
        togglebutton.setAttribute('aria-hidden', 'true');
        togglebutton.setAttribute('aria-pressed', 'false');
        togglebutton.setAttribute('type', 'button');

        // Subtoggles and parent classes
        if ( hasChildren ) {
            for (var i = 0; i < parents.length; i++) {
                var subtoggle_element = document.createElement(settings.subtoggletype);
                apollo.addClass(subtoggle_element, [settings.subtoggleclass, settings.hideclass]);
                var parent = parents[i].parentNode;
                parent.insertBefore(subtoggle_element, parent.firstChild);
                subtoggle_element.innerHTML = settings.subtogglecontent;
                subtoggle_element.setAttribute('aria-hidden', 'true');
                subtoggle_element.setAttribute('aria-pressed', 'false');
                subtoggle_element.setAttribute('type', 'button');
                apollo.addClass(parents[i].parentNode, settings.parentclass);
            }
        }

        // Adding classes
        function classes() {

            mobileindicatorZindex = getStyle(settings.mobileindicatorid, "z-index");

            // If wrapper is small and if the menu is not already opened
            if ( mobileindicatorZindex == 0 && !apollo.hasClass(menu, settings.openclass) ) {

                // Show the toggle button(s)
                apollo.removeClass(togglebutton, settings.hideclass);
                if ( hasChildren ) {
                    forEach(subtoggles, function (value, prop) {
                        apollo.addClass(subtoggles[prop].parentNode.getElementsByTagName('ul')[0], settings.hideclass);
                        apollo.removeClass(subtoggles[prop], settings.hideclass);
                    });
                }

                // Hide the menu
                apollo.removeClass(menu, [settings.openclass, settings.fullmenuclass]);
                apollo.addClass(menu, settings.hideclass);
                apollo.removeClass(document.body, settings.openbodyclass);

                // Make the menu absolute positioned
                if ( settings.absolute == 1 ) {
                    apollo.addClass(menu, settings.absolutemenuclass);
                }

            } else if ( mobileindicatorZindex == 1 ) {

                // Hide the toggle button(s)
                apollo.addClass(togglebutton, settings.hideclass);
                apollo.removeClass(togglebutton, settings.toggleclosedclass);
                if (hasChildren) {
                    forEach(subtoggles, function(value, prop) {
                        apollo.removeClass(subtoggles[prop].parentNode.getElementsByTagName('ul')[0], settings.hideclass);
                        apollo.addClass(subtoggles[prop], settings.hideclass);
                    });
                }

                // Show the menu and remove all classes
                apollo.removeClass(menu, [settings.openclass, settings.hideclass]);
                apollo.addClass(menu, settings.fullmenuclass);
                apollo.removeClass(document.body, settings.openbodyclass);

                // Undo absolute positioning
                if ( settings.absolute == 1 && apollo.hasClass(menu, settings.absolutemenuclass) ) {
                    apollo.removeClass(menu, settings.absolutemenuclass);
                }
            }
        }

        // Sticky menu body height
        function stickyMenu() {

            if ( settings.sticky == 1 ) {

                // The current menu and viewport heights
                var menuheight = settings.wrapper.offsetHeight;
                var viewportheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

                // Add the overflow class but only if there is space
                if ( viewportheight <= menuheight && !apollo.hasClass(document.body, settings.bodyoverflowhiddenclass) ) {

                    apollo.addClass(document.body, settings.bodyoverflowhiddenclass);
                    apollo.addClass(settings.wrapper, settings.menuoverflowautoclass);

                } else if ( viewportheight > menuheight ) {

                    if ( apollo.hasClass(document.body, settings.bodyoverflowhiddenclass) ) {
                        apollo.removeClass(document.body, settings.bodyoverflowhiddenclass);
                        apollo.removeClass(settings.wrapper, settings.menuoverflowautoclass);
                    }

                    // Make sticky
                    if ( !apollo.hasClass(settings.wrapper, settings.stickyclass) ) {
                        apollo.addClass(settings.wrapper, settings.stickyclass);
                    }

                    // Add padding only if menu is closed or when value is stored
                    if ( !apollo.hasClass(menu, settings.openclass) && !apollo.hasClass(document.body, settings.stickyinitiatedclass) ) {

                        // Calculate the height
                        var paddingtop = menuheight.toString() + 'px';

                        // Set the padding on the body
                        document.body.setAttribute('style', 'padding-top:' + paddingtop);
                        apollo.addClass(document.body, settings.stickyinitiatedclass);
                    }
                }
            }
        }

        // Initial load
        window.addEventListener('load', function() {
            classes();
            stickyMenu();
        }, true);

        // On resize
        window.addEventListener('resize', function() {

            // Run immediately
            classes();
            stickyMenu();

            // Run again after 150 ms for safari OSX when scrollbars are visible and you're resizing to a smaller window
            waitForFinalEvent(function(){
                classes();
                stickyMenu();
            }, 200);

        }, true);

        // Accessible focus menu
        var menulinks = menu.getElementsByTagName('a');
        for (var i = 0; i < menulinks.length; i++) {
            menulinks[i].onblur = function() {
                var focusedItems = document.getElementsByClassName('rm-focused');
                for (var f = 0; f < focusedItems.length; f++) {
                    apollo.removeClass(focusedItems[f], settings.focusedclass);
                }
            };
            menulinks[i].onfocus = function() {
                // Remove the class
                var siblings = this.parentNode.parentNode.querySelectorAll('li');
                if (siblings.length) {
                    for (var f = 0; f < siblings.length; f++) {
                        apollo.removeClass(siblings[f], settings.focusedclass);
                    }
                }
                // Add the class
                var parent = getParents(this, "LI", menu);
                if (parent.length) {
                    for (var f = 0; f < parent.length; f++) {
                        apollo.addClass(parent[f], settings.focusedclass);
                    }
                }
            };
        }

        // Clicking the toggle button
        //togglebutton.onclick = function() {
        window.addEventListener('load', function() {

            // Show the menu
            if ( apollo.hasClass(menu, settings.hideclass) ) {

                // Function to run before toggling
                settings.onBeforeToggleOpen();

                // Show the menu
                apollo.removeClass(menu, settings.hideclass);
                apollo.addClass(menu, settings.openclass);

                // Add class to body element you could use for styling
                apollo.addClass(document.body, settings.openbodyclass);

                // Set toggled class to toggle button
                apollo.addClass(togglebutton, settings.toggleclosedclass);

                // Set and remove animate class after duration
                apollo.addClass(menu, settings.animateopenclass);
                setTimeout(function() {

                    // Remove animation class
                    apollo.removeClass(menu, settings.animateopenclass);

                    // Function to run after toggling
                    settings.onAfterToggleOpen();

                }, settings.animateduration);
            }

            // Hide the menu
            else if ( apollo.hasClass(menu, settings.openclass) ) {

                // Function to run before toggling
                settings.onBeforeToggleClose();

                // Properly set animating classes
                apollo.addClass(menu, settings.animatecloseclass);

                // Remove toggled class to toggle button
                apollo.removeClass(togglebutton, settings.toggleclosedclass);

                // When animation is done
                setTimeout(function() {

                    // Remove animate class
                    apollo.removeClass(menu, settings.animatecloseclass);

                    // Hide the menu
                    apollo.removeClass(menu, settings.openclass);
                    apollo.addClass(menu, settings.hideclass);

                    // Remove class from body element you could use for styling
                    apollo.removeClass(document.body, settings.openbodyclass);

                    // Function to run after toggling
                    settings.onAfterToggleClose();

                }, settings.animateduration);
            }

            // Check if the menu still fits
            stickyMenu();

            return false;
        });

        // Clicking the sub toggles button
        if ( hasChildren ) {
            forEach(subtoggles, function(value, prop) {

                // Variables
                var subtoggle = subtoggles[prop];
                var submenu = subtoggle.parentNode.getElementsByTagName('ul')[0];

                // Click buttons and show submenu
                subtoggle.onclick = function() {

                    // Open
                    if ( apollo.hasClass(submenu, settings.hideclass) ) {

                        // Function to run before toggling
                        settings.onBeforeSubToggleOpen();

                        // Properly set animating classes
                        apollo.addClass(menu, settings.subanimateopenclass);

                        // Add class to subtoggle button
                        apollo.addClass(subtoggle, settings.toggleclosedclass);

                        // Show sub menu
                        apollo.removeClass(submenu, settings.hideclass);

                        setTimeout(function() {

                            // Remove animate class
                            apollo.removeClass(menu, settings.subanimateopenclass);

                            // Function to run before toggling
                            settings.onAfterSubToggleOpen();

                        }, settings.subanimateduration);
                    }

                    // Close
                    else if ( !apollo.hasClass(submenu, settings.hideclass) ) {

                        // Function to run before toggling
                        settings.onBeforeSubToggleClose();

                        // Properly set animating classes
                        apollo.addClass(menu, settings.subanimatecloseclass);

                        // Remove class from subtoggle button
                        apollo.removeClass(subtoggle, settings.toggleclosedclass);

                        setTimeout(function() {

                            // Remove animate class
                            apollo.removeClass(menu, settings.subanimatecloseclass);

                            // Set classes
                            apollo.addClass(submenu, settings.hideclass);

                            // Function to run before toggling
                            settings.onAfterSubToggleClose();

                        }, settings.subanimateduration);

                    }

                    // Check if the menu still fits
                    stickyMenu();
                }
            });
        }
    }

    /**
     * Initialize Plugin
     * @public
     * @param {Object} options User settings
     */
    exports.init = function ( options ) {
        // feature test
        if ( !supports ) {
            document.documentElement.className += ' ' + settings.noresponsivemenuclass;
            return;
        }
        settings = extend( defaults, options || {} ); // Merge user options with defaults
        initialize(settings);
    };

    // Public APIs
    return exports;

});

(function(root,factory){if(typeof define==='function'&&define.amd){define('responsivemenu',factory(root))}else if(typeof exports==='object'){module.responsivemenu=factory(root)}else{root.responsivemenu=factory(root)}})(this,function(root){'use strict';var exports={};var supports=!!document.querySelector&&!!root.addEventListener;var settings;var menu;var hasChildren=!1;var subtoggles=!1;var defaults={menu:'',initiated_class:'rm-initiated',before_element:'',toggletype:'button',toggleclass:'rm-togglebutton',toggleclosedclass:'rm-togglebutton--closed',togglecontent:'<i class="fa fa-bars" aria-hidden="true"></i>',subtoggletype:'button',subtoggleclass:'rm-subtoggle',subtogglecontent:'<i class="fa fa-caret-down" aria-hidden="true"></i>',sticky:0,absolute:0,hideclass:'rm-closed',openclass:'rm-opened',openbodyclass:'has-opened-menu',focusedclass:'rm-focused',animateopenclass:'is-opening',animatecloseclass:'is-closing',animateduration:0,subanimateopenclass:'is-opening',subanimatecloseclass:'is-closing',subanimateduration:0,parentclass:'rm-parent',fullmenuclass:'rm-fullmenu',absolutemenuclass:'rm-absolutemenu',bodyoverflowhiddenclass:'rm-bodyoverflowhidden',menuoverflowautoclass:'rm-menuoverflowauto',stickyclass:'rm-sticky',stickyinitiatedclass:'rm-sticky-initiated',noresponsivemenuclass:'rm-no-responsive-menu',mobileindicatorid:'rm-mobile-indicator',onAfterInit:function(){},onBeforeToggleOpen:function(){},onAfterToggleOpen:function(){},onBeforeToggleClose:function(){},onAfterToggleClose:function(){},onBeforeSubToggleOpen:function(){},onAfterSubToggleOpen:function(){},onBeforeSubToggleClose:function(){},onAfterSubToggleClose:function(){}};var forEach=function(collection,callback,scope){if(Object.prototype.toString.call(collection)==='[object Object]'){for(var prop in collection){if(Object.prototype.hasOwnProperty.call(collection,prop)){callback.call(scope,collection[prop],prop,collection)}}}else{for(var i=0,len=collection.length;i<len;i++){callback.call(scope,collection[i],i,collection)}}};var extend=function(defaults,options){var extended={};forEach(defaults,function(value,prop){extended[prop]=defaults[prop]});forEach(options,function(value,prop){extended[prop]=options[prop]});return extended};var trim=function(string){return string.replace(/^\s+|\s+$/g,'')};var getDataOptions=function(options){var settings={};if(options){options=options.split(';');options.forEach(function(option){option=trim(option);if(option!==''){option=option.split(':');settings[option[0]]=trim(option[1])}})}
return settings};var waitForFinalEvent=(function(){var timers={};return function(callback,ms,uniqueId){if(!uniqueId){uniqueId="Don't call this twice without a uniqueId"}
if(timers[uniqueId]){clearTimeout(timers[uniqueId])}
timers[uniqueId]=setTimeout(callback,ms)}})();function getParents(element,tag,stop){var nodes=[];while(element.parentNode&&element.parentNode!=stop){element=element.parentNode;if(element.tagName==tag){nodes.push(element)}}
return nodes}
function getStyle(el,styleProp)
{var x=document.getElementById(el);if(window.getComputedStyle)
{var y=document.defaultView.getComputedStyle(x,null).getPropertyValue(styleProp)}
else if(x.currentStyle)
{var y=x.currentStyle[styleProp]}
return y}
function initialize(settings){if(settings.menu==''){menu=settings.wrapper.getElementsByTagName('ul')[0]}else{menu=settings.menu}
apollo.addClass(settings.wrapper,settings.initiated_class);settings.onAfterInit();var parents=menu.querySelectorAll('li ul');if(parents.length){hasChildren=!0;subtoggles=document.getElementsByClassName(settings.subtoggleclass)}
var mobileindicator=document.createElement('div');document.body.appendChild(mobileindicator);mobileindicator.id=settings.mobileindicatorid;var mobileindicatorZindex=0;var toggle_element=document.createElement(settings.toggletype);apollo.addClass(toggle_element,[settings.toggleclass,settings.hideclass]);if(settings.before_element==''){settings.before_element=settings.wrapper.firstChild}
settings.before_element.parentNode.insertBefore(toggle_element,settings.before_element);var togglebutton=document.getElementsByClassName(settings.toggleclass)[0];togglebutton.innerHTML=settings.togglecontent;togglebutton.setAttribute('aria-hidden','true');togglebutton.setAttribute('aria-pressed','false');togglebutton.setAttribute('type','button');if(hasChildren){for(var i=0;i<parents.length;i++){var subtoggle_element=document.createElement(settings.subtoggletype);apollo.addClass(subtoggle_element,[settings.subtoggleclass,settings.hideclass]);var parent=parents[i].parentNode;parent.insertBefore(subtoggle_element,parent.firstChild);subtoggle_element.innerHTML=settings.subtogglecontent;subtoggle_element.setAttribute('aria-hidden','true');subtoggle_element.setAttribute('aria-pressed','false');subtoggle_element.setAttribute('type','button');apollo.addClass(parents[i].parentNode,settings.parentclass)}}
function classes(){mobileindicatorZindex=getStyle(settings.mobileindicatorid,"z-index");if(mobileindicatorZindex==0&&!apollo.hasClass(menu,settings.openclass)){apollo.removeClass(togglebutton,settings.hideclass);if(hasChildren){forEach(subtoggles,function(value,prop){apollo.addClass(subtoggles[prop].parentNode.getElementsByTagName('ul')[0],settings.hideclass);apollo.removeClass(subtoggles[prop],settings.hideclass)})}
apollo.removeClass(menu,[settings.openclass,settings.fullmenuclass]);apollo.addClass(menu,settings.hideclass);apollo.removeClass(document.body,settings.openbodyclass);if(settings.absolute==1){apollo.addClass(menu,settings.absolutemenuclass)}}else if(mobileindicatorZindex==1){apollo.addClass(togglebutton,settings.hideclass);apollo.removeClass(togglebutton,settings.toggleclosedclass);if(hasChildren){forEach(subtoggles,function(value,prop){apollo.removeClass(subtoggles[prop].parentNode.getElementsByTagName('ul')[0],settings.hideclass);apollo.addClass(subtoggles[prop],settings.hideclass)})}
apollo.removeClass(menu,[settings.openclass,settings.hideclass]);apollo.addClass(menu,settings.fullmenuclass);apollo.removeClass(document.body,settings.openbodyclass);if(settings.absolute==1&&apollo.hasClass(menu,settings.absolutemenuclass)){apollo.removeClass(menu,settings.absolutemenuclass)}}}
function stickyMenu(){if(settings.sticky==1){var menuheight=settings.wrapper.offsetHeight;var viewportheight=Math.max(document.documentElement.clientHeight,window.innerHeight||0);if(viewportheight<=menuheight&&!apollo.hasClass(document.body,settings.bodyoverflowhiddenclass)){apollo.addClass(document.body,settings.bodyoverflowhiddenclass);apollo.addClass(settings.wrapper,settings.menuoverflowautoclass)}else if(viewportheight>menuheight){if(apollo.hasClass(document.body,settings.bodyoverflowhiddenclass)){apollo.removeClass(document.body,settings.bodyoverflowhiddenclass);apollo.removeClass(settings.wrapper,settings.menuoverflowautoclass)}
if(!apollo.hasClass(settings.wrapper,settings.stickyclass)){apollo.addClass(settings.wrapper,settings.stickyclass)}
if(!apollo.hasClass(menu,settings.openclass)&&!apollo.hasClass(document.body,settings.stickyinitiatedclass)){var paddingtop=menuheight.toString()+'px';document.body.setAttribute('style','padding-top:'+paddingtop);apollo.addClass(document.body,settings.stickyinitiatedclass)}}}}
window.addEventListener('load',function(){classes();stickyMenu()},!0);window.addEventListener('resize',function(){classes();stickyMenu();waitForFinalEvent(function(){classes();stickyMenu()},200)},!0);var menulinks=menu.getElementsByTagName('a');for(var i=0;i<menulinks.length;i++){menulinks[i].onblur=function(){var focusedItems=document.getElementsByClassName('rm-focused');for(var f=0;f<focusedItems.length;f++){apollo.removeClass(focusedItems[f],settings.focusedclass)}};menulinks[i].onfocus=function(){var siblings=this.parentNode.parentNode.querySelectorAll('li');if(siblings.length){for(var f=0;f<siblings.length;f++){apollo.removeClass(siblings[f],settings.focusedclass)}}
var parent=getParents(this,"LI",menu);if(parent.length){for(var f=0;f<parent.length;f++){apollo.addClass(parent[f],settings.focusedclass)}}}}
window.addEventListener('load',function(){if(apollo.hasClass(menu,settings.hideclass)){settings.onBeforeToggleOpen();apollo.removeClass(menu,settings.hideclass);apollo.addClass(menu,settings.openclass);apollo.addClass(document.body,settings.openbodyclass);apollo.addClass(togglebutton,settings.toggleclosedclass);apollo.addClass(menu,settings.animateopenclass);setTimeout(function(){apollo.removeClass(menu,settings.animateopenclass);settings.onAfterToggleOpen()},settings.animateduration)}
else if(apollo.hasClass(menu,settings.openclass)){settings.onBeforeToggleClose();apollo.addClass(menu,settings.animatecloseclass);apollo.removeClass(togglebutton,settings.toggleclosedclass);setTimeout(function(){apollo.removeClass(menu,settings.animatecloseclass);apollo.removeClass(menu,settings.openclass);apollo.addClass(menu,settings.hideclass);apollo.removeClass(document.body,settings.openbodyclass);settings.onAfterToggleClose()},settings.animateduration)}
stickyMenu();return!1});if(hasChildren){forEach(subtoggles,function(value,prop){var subtoggle=subtoggles[prop];var submenu=subtoggle.parentNode.getElementsByTagName('ul')[0];subtoggle.onclick=function(){if(apollo.hasClass(submenu,settings.hideclass)){settings.onBeforeSubToggleOpen();apollo.addClass(menu,settings.subanimateopenclass);apollo.addClass(subtoggle,settings.toggleclosedclass);apollo.removeClass(submenu,settings.hideclass);setTimeout(function(){apollo.removeClass(menu,settings.subanimateopenclass);settings.onAfterSubToggleOpen()},settings.subanimateduration)}
else if(!apollo.hasClass(submenu,settings.hideclass)){settings.onBeforeSubToggleClose();apollo.addClass(menu,settings.subanimatecloseclass);apollo.removeClass(subtoggle,settings.toggleclosedclass);setTimeout(function(){apollo.removeClass(menu,settings.subanimatecloseclass);apollo.addClass(submenu,settings.hideclass);settings.onAfterSubToggleClose()},settings.subanimateduration)}
stickyMenu()}})}}
exports.init=function(options){if(!supports){document.documentElement.className+=' '+settings.noresponsivemenuclass;return}
settings=extend(defaults,options||{});initialize(settings)};return exports})

/**
 * Handles toggling the main navigation menu for small screens.
 */
jQuery( document ).ready( function( $ ) {
	var $masthead = $( '#masthead' ),
	    timeout = false;

	$.fn.smallMenu = function() {
		$masthead.find( '#site-navigation' ).removeClass( 'main-navigation' ).addClass( 'main-small-navigation' );
		$masthead.find( '#site-navigation h3' ).removeClass( 'assistive-text' ).addClass( 'menu-toggle' );

		$( '.menu-toggle' ).unbind( 'click' ).click( function() {
			$masthead.find( '.nav-menu' ).toggle();
			$( this ).toggleClass( 'toggled-on' );
		} );
	};

	// Check viewport width on first load.
	if ( $( window ).width() < 520 )
		$.fn.smallMenu();

	// Check viewport width when user resizes the browser window.
	$( window ).resize( function() {
		var browserWidth = $( window ).width();

		if ( false !== timeout )
			clearTimeout( timeout );

		timeout = setTimeout( function() {
			if ( browserWidth < 520 ) {
				$.fn.smallMenu();
			} else {
				$masthead.find( '#site-navigation' ).removeClass( 'main-small-navigation' ).addClass( 'main-navigation' );
				$masthead.find( '#site-navigation h3' ).removeClass( 'menu-toggle' ).addClass( 'assistive-text' );
				$masthead.find( '.nav-menu' ).removeAttr( 'style' );
			}
		}, 200 );
	} );



} );
