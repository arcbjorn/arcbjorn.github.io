"use strict";(self.webpackChunkarcbjorn_personal_website=self.webpackChunkarcbjorn_personal_website||[]).push([[302],{3364:function(e,t,r){r.d(t,{G:function(){return T}});var n=r(1878),o=r(5697),a=r.n(o),i=r(7294);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function m(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var b=["style"];function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=d(t.slice(0,n)),a=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:e[o]=a,e}),{})}var E=!1;try{E=!0}catch(k){}function h(e){return e&&"object"===s(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var O=["forwardedRef"];function T(e){var t=e.forwardedRef,r=f(e,O),o=r.icon,a=r.mask,i=r.symbol,l=r.className,s=r.title,p=r.titleId,d=r.maskId,b=h(o),y=v("classes",[].concat(m(function(e){var t,r=e.beat,n=e.fade,o=e.beatFade,a=e.bounce,i=e.shake,l=e.flash,c=e.spin,s=e.spinPulse,f=e.spinReverse,m=e.pulse,p=e.fixedWidth,d=e.inverse,b=e.border,y=e.listItem,E=e.flip,h=e.size,v=e.rotation,O=e.pull,T=(u(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":o,"fa-bounce":a,"fa-shake":i,"fa-flash":l,"fa-spin":c,"fa-spin-reverse":f,"fa-spin-pulse":s,"fa-pulse":m,"fa-fw":p,"fa-inverse":d,"fa-border":b,"fa-li":y,"fa-flip-horizontal":"horizontal"===E||"both"===E,"fa-flip-vertical":"vertical"===E||"both"===E},"fa-".concat(h),null!=h),u(t,"fa-rotate-".concat(v),null!=v&&0!==v),u(t,"fa-pull-".concat(O),null!=O),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(T).map((function(e){return T[e]?e:null})).filter((function(e){return e}))}(r)),m(l.split(" ")))),k=v("transform","string"==typeof r.transform?n.Qc.transform(r.transform):r.transform),w=v("mask",h(a)),A=(0,n.qv)(b,c(c(c(c({},y),k),w),{},{symbol:i,title:s,titleId:p,maskId:d}));if(!A)return function(){var e;!E&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",b),null;var C=A.abstract,S={ref:t};return Object.keys(r).forEach((function(e){T.defaultProps.hasOwnProperty(e)||(S[e]=r[e])})),g(C[0],S)}T.displayName="FontAwesomeIcon",T.propTypes={beat:a().bool,border:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf(["horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},T.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var g=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),a=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=y(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[d(t)]=n}return e}),{attrs:{}}),i=n.style,l=void 0===i?{}:i,s=f(n,b);return a.attrs.style=c(c({},a.attrs.style),l),t.apply(void 0,[r.tag,c(c({},a.attrs),s)].concat(m(o)))}.bind(null,i.createElement)},3737:function(e,t,r){r.r(t),r.d(t,{default:function(){return I}});var n,o=r(7294),a=r(5186),i=r(4965),l=r(8709),c=r(7782);!function(e){e.SOFTWARE="Software",e.OTHER="Other"}(n||(n={}));var s,u=r(4935),f="extraInfo-module--extraInnerSection--APLEt",m="extraInfo-module--extraSection--Wf702",p="extraInfo-module--extraSectionTitle--uk2y-",d=[{title:"Code Complete",author:"S.McConnell",category:n.SOFTWARE,href:"https://github.com/manh-nguyen/ccomplete2/blob/master/Steve%20McConnell-Code%20Complete_%20A%20Practical%20Handbook%20of%20Software%20Construction.%202%20ed.-Microsoft%20Press.epub"},{title:"The Art of Computer Programming",author:"D.Knuth",category:n.SOFTWARE,href:"https://github.com/manjunath5496/The-Art-of-Computer-Programming-Books"},{title:"Psycho-Cybernetics",author:"M.Maltz",category:n.OTHER,href:"https://www.amazon.com/Psycho-Cybernetics-Updated-Expanded-Maxwell-Maltz/dp/0399176136"},{title:"War of Art",author:"S.Pressfield",category:n.OTHER,href:"https://www.amazon.com/War-Art-Winning-Creative-Battle/dp/1501260626"},{title:"SGTCIY",author:"C.Newport",category:n.OTHER,href:"https://www.amazon.com/Good-They-Cant-Ignore-You/dp/1455509124"},{title:"Mastery",author:"G.Leonard",category:n.OTHER,href:"https://www.amazon.com/Mastery-Keys-Success-Long-Term-Fulfillment/dp/0452267560"}],b=function(e){var t=e.title,r=e.author,n=e.href;return o.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"book-module--book--xeVXL"},o.createElement("span",null,'"'+t+'"'),o.createElement("span",null,r))},y="books-module--bookEntry--WRdoe",E="books-module--bookList--X4b7M",h="books-module--categoryTitle--TeUU5",v="books-module--treeNode--iElRC",O=((s={})[n.SOFTWARE]=u.Y.SOFTWARE,s[n.OTHER]=u.Y.OTHER,s),T=function(){var e=d.filter((function(e){return e.category===n.SOFTWARE})),t=d.filter((function(e){return e.category===n.OTHER}));return o.createElement("fieldset",{className:f},o.createElement("legend",{className:p},o.createElement(c.Trans,null,u.Y.BOOKS_TITLE)),o.createElement("div",{className:"books-module--books--h7Rfh"},o.createElement("span",{className:h},o.createElement(c.Trans,null,O[n.SOFTWARE])),o.createElement("div",{className:E},e.map((function(e,t){var r=e.title,n=e.author,a=e.href;return o.createElement("div",{key:t,className:y},o.createElement("svg",{width:"70",height:"50",className:v},o.createElement("line",{x1:"30",y1:"25",x2:"60",y2:"25",stroke:"current",strokeWidth:"3"}),o.createElement("line",{x1:"30",y1:"0",x2:"30",y2:"50",stroke:"current",strokeWidth:"3"})),o.createElement(b,{title:r,author:n,href:a}))}))),o.createElement("span",{className:h},o.createElement(c.Trans,null,O[n.OTHER])),o.createElement("div",{className:E},t.map((function(e,t){var r=e.title,n=e.author,a=e.href;return o.createElement("div",{key:t,className:y},o.createElement("svg",{width:"70",height:"50",className:v},o.createElement("line",{x1:"30",y1:"25",x2:"60",y2:"25",stroke:"current",strokeWidth:"3"}),o.createElement("line",{x1:"30",y1:"0",x2:"30",y2:"50",stroke:"current",strokeWidth:"3"})),o.createElement(b,{title:r,author:n,href:a}))})))))};function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t,r,n){if(g(r)!==n)throw new TypeError("Invalid prop '".concat(t,"' of type '").concat(g(r),"' supplied to '").concat(e,"', expected '").concat(n,"'."))}function w(e){var t=e.size,r=void 0===t?80:t,n=e.color,a=void 0===n?"black":n,i=e.lineWeight,l=void 0===i?5:i,c=e.speed,s=void 0===c?1.4:c;return k("RaceBy","size",r,"number"),k("RaceBy","color",a,"string"),k("RaceBy","speed",s,"number"),k("RaceBy","lineWeight",l,"number"),o.createElement("div",{className:"RaceBy-module_container__pu79P",style:{"--uib-size":r+"px","--uib-color":a,"--uib-line-weight":l+"px","--uib-speed":s+"s"}})}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}('.RaceBy-module_container__pu79P{align-items:center;border-radius:calc(var(--uib-line-weight)/2);display:flex;height:var(--uib-line-weight);justify-content:center;overflow:hidden;position:relative;transform:translateZ(0);width:var(--uib-size)}.RaceBy-module_container__pu79P:before{background-color:var(--uib-color);content:"";height:100%;left:0;opacity:.1;position:absolute;top:0;width:100%}.RaceBy-module_container__pu79P:after{animation:RaceBy-module_raceBy__g-TGB var(--uib-speed) ease-in-out infinite;background-color:var(--uib-color);border-radius:calc(var(--uib-line-weight)/2);content:"";height:100%;transform:translateX(-100%);width:100%}@keyframes RaceBy-module_raceBy__g-TGB{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}');var A,C,S=function(){return o.createElement("div",{className:"loader-module--loader--YSjCB"},o.createElement(w,{size:150,lineWeight:10,speed:1.2,color:"var(--color)"}))},x=r(3733);!function(e){e.HASHNODE="Hashnode",e.CODEPEN="Codepen",e.HACKER_RANK="Hacker Rank",e.LEETCODE="LeetCode",e.DEV_TO="Dev.to",e.MEDIUM="Medium",e.STEPIK="Stepik",e.FREE_CODE_CAMP="freeCodeCamp",e.GLITCH="Glitch",e.MY_TRAVEL_MAP="My travel map"}(A||(A={})),function(e){e.HASHNODE="https://blog.arcbjorn.com/",e.CODEPEN="https://codepen.io/arcbjorn",e.HACKER_RANK="https://www.hackerrank.com/arcbjorn",e.LEETCODE="https://leetcode.com/arcbjorn",e.FREE_CODE_CAMP="https://www.freecodecamp.org/arcbjorn",e.DEV_TO="https://dev.to/arcbjorn",e.MEDIUM="https://arcbjorn.medium.com/",e.STEPIK="https://stepik.org/users/247781885",e.GLITCH="https://glitch.com/@arcbjorn",e.MY_TRAVEL_MAP="https://www.mytravelmap.xyz/u/gg104931485347737929283"}(C||(C={}));var R=r(3364),P=function(e){var t=e.title,r=e.href,n=e.icon,a=e.iconPrefix,i=e.iconTitle,l=e.description,c=o.useState(!1),s=c[0],u=c[1],f=function(){u(!s)},m=[A.GLITCH,A.STEPIK,A.LEETCODE].some((function(e){return e===t}));return o.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"platformLink-module--platformLink--ok7nk",onMouseEnter:f,onMouseLeave:f},o.createElement("div",{className:"platformLink-module--platformLinkTitle--nqSjb "+(s?"platformLink-module--platformLinkTitleHover--gYOoc":"")},m?"":o.createElement(R.G,{icon:[a,n],title:i,className:"platformLink-module--platformLinkIcon--Je4eT"}),t),o.createElement("span",{className:"platformLink-module--platformLinkDescription--uIoeE"},o.createElement(x.c,null,l)))},N=[{title:A.HASHNODE,href:C.HASHNODE,iconPrefix:i.d.BRANDS,icon:"hashnode",iconTitle:"Hashnode",description:u.Y.HASHNODE},{title:A.MY_TRAVEL_MAP,href:C.MY_TRAVEL_MAP,iconPrefix:i.d.BRANDS,icon:"galactic-republic",iconTitle:"My travel map",description:u.Y.MY_TRAVEL_MAP},{title:A.CODEPEN,href:C.CODEPEN,iconPrefix:i.d.BRANDS,icon:"codepen",iconTitle:"Codepen",description:u.Y.CODEPEN},{title:A.FREE_CODE_CAMP,href:C.FREE_CODE_CAMP,iconPrefix:i.d.BRANDS,icon:"free-code-camp",iconTitle:"freeCodeCamp",description:u.Y.FREE_CODE_CAMP},{title:A.HACKER_RANK,href:C.HACKER_RANK,iconPrefix:i.d.BRANDS,icon:"hackerrank",iconTitle:"Hacker Rank",description:u.Y.HACKER_RANK},{title:A.DEV_TO,href:C.DEV_TO,iconPrefix:i.d.BRANDS,icon:"dev",iconTitle:"Dev.to",description:u.Y.DEV_TO},{title:A.MEDIUM,href:C.MEDIUM,iconPrefix:i.d.BRANDS,icon:"medium",iconTitle:"Medium",description:u.Y.MEDIUM},{title:A.LEETCODE,href:C.LEETCODE,iconPrefix:i.d.BRANDS,icon:"leetcode",iconTitle:"LeetCode",description:u.Y.LEETCODE},{title:A.STEPIK,href:C.STEPIK,iconPrefix:i.d.BRANDS,icon:"stepik",iconTitle:"Stepik",description:u.Y.STEPIK},{title:A.GLITCH,href:C.GLITCH,iconPrefix:i.d.CUSTOM,icon:"glitch",iconTitle:"Glitch",description:u.Y.GLITCH}],_=function(){return o.createElement("fieldset",{className:f+" extraInfo-module--noScrollbar--YdsDn"},o.createElement("legend",{className:p},o.createElement(x.c,null,u.Y.PLATFORMS_TITLE)),o.createElement("div",{className:"platformLinks-module--platformLinks--jijXe"},N.map((function(e,t){var r=e.title,n=e.href,a=e.icon,i=e.iconPrefix,l=e.iconTitle,c=e.description;return o.createElement(P,{key:t,title:r,href:n,icon:a,iconPrefix:i,iconTitle:l,description:c})}))))},D=function(){var e=(0,o.useState)(!0),t=e[0],r=e[1];return(0,o.useEffect)((function(){setTimeout((function(){r(!1)}),600)}),[]),o.createElement(o.Fragment,null,t?o.createElement(S,null):o.createElement("div",{className:"extraInfo-module--extraInfo--MLS-F"},o.createElement("div",{className:m+" w-full sm:w-5/12"},o.createElement(_,null)),o.createElement("div",{className:m+" w-full sm:w-7/12"},o.createElement(T,null))))},I=function(){return o.createElement(l.Z,null,o.createElement(a.Helmet,null,o.createElement("title",null,i.$.EXTRA)),o.createElement(D,null))}}}]);
//# sourceMappingURL=component---src-pages-extra-tsx-7b1c16b4a47b275441d2.js.map