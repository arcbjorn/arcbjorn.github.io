"use strict";(self.webpackChunkarcbjorn_personal_website=self.webpackChunkarcbjorn_personal_website||[]).push([[302],{3364:function(e,t,r){r.d(t,{G:function(){return k}});var n=r(1878),o=r(5697),a=r.n(o),i=r(7294);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function m(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var E=["style"];function b(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=d(t.slice(0,n)),a=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:e[o]=a,e}),{})}var h=!1;try{h=!0}catch(g){}function y(e){return e&&"object"===s(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function O(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}var T=["forwardedRef"];function k(e){var t=e.forwardedRef,r=u(e,T),o=r.icon,a=r.mask,i=r.symbol,l=r.className,s=r.title,p=r.titleId,d=r.maskId,E=y(o),b=O("classes",[].concat(m(function(e){var t,r=e.beat,n=e.fade,o=e.beatFade,a=e.bounce,i=e.shake,l=e.flash,c=e.spin,s=e.spinPulse,u=e.spinReverse,m=e.pulse,p=e.fixedWidth,d=e.inverse,E=e.border,b=e.listItem,h=e.flip,y=e.size,O=e.rotation,T=e.pull,k=(f(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":o,"fa-bounce":a,"fa-shake":i,"fa-flash":l,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":s,"fa-pulse":m,"fa-fw":p,"fa-inverse":d,"fa-border":E,"fa-li":b,"fa-flip-horizontal":"horizontal"===h||"both"===h,"fa-flip-vertical":"vertical"===h||"both"===h},"fa-".concat(y),null!=y),f(t,"fa-rotate-".concat(O),null!=O&&0!==O),f(t,"fa-pull-".concat(T),null!=T),f(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(k).map((function(e){return k[e]?e:null})).filter((function(e){return e}))}(r)),m(l.split(" ")))),g=O("transform","string"==typeof r.transform?n.Qc.transform(r.transform):r.transform),A=O("mask",y(a)),C=(0,n.qv)(E,c(c(c(c({},b),g),A),{},{symbol:i,title:s,titleId:p,maskId:d}));if(!C)return function(){var e;!h&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",E),null;var w=C.abstract,x={ref:t};return Object.keys(r).forEach((function(e){k.defaultProps.hasOwnProperty(e)||(x[e]=r[e])})),v(w[0],x)}k.displayName="FontAwesomeIcon",k.propTypes={beat:a().bool,border:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf(["horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},k.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var v=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),a=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=b(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[d(t)]=n}return e}),{attrs:{}}),i=n.style,l=void 0===i?{}:i,s=u(n,E);return a.attrs.style=c(c({},a.attrs.style),l),t.apply(void 0,[r.tag,c(c({},a.attrs),s)].concat(m(o)))}.bind(null,i.createElement)},9852:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var n,o=r(7294),a=r(5186),i=r(4965),l=r(130),c=r(7782);!function(e){e.SOFTWARE="Software",e.OTHER="Other"}(n||(n={}));var s,f,u,m=r(4935),p="extraInfo-module--extraInnerSection--APLEt",d="extraInfo-module--extraSection--Wf702",E="extraInfo-module--extraSectionTitle--uk2y-",b=[{title:"Code Complete",author:"S.McConnell",category:n.SOFTWARE,href:"https://github.com/manh-nguyen/ccomplete2/blob/master/Steve%20McConnell-Code%20Complete_%20A%20Practical%20Handbook%20of%20Software%20Construction.%202%20ed.-Microsoft%20Press.epub"},{title:"The Art of Computer Programming",author:"D.Knuth",category:n.SOFTWARE,href:"https://github.com/manjunath5496/The-Art-of-Computer-Programming-Books"},{title:"Psycho-Cybernetics",author:"M.Maltz",category:n.OTHER,href:"https://www.amazon.com/Psycho-Cybernetics-Updated-Expanded-Maxwell-Maltz/dp/0399176136"},{title:"War of Art",author:"S.Pressfield",category:n.OTHER,href:"https://www.amazon.com/War-Art-Winning-Creative-Battle/dp/1501260626"},{title:"SGTCIY",author:"C.Newport",category:n.OTHER,href:"https://www.amazon.com/Good-They-Cant-Ignore-You/dp/1455509124"},{title:"Mastery",author:"G.Leonard",category:n.OTHER,href:"https://www.amazon.com/Mastery-Keys-Success-Long-Term-Fulfillment/dp/0452267560"}],h=function(e){var t=e.title,r=e.author,n=e.href;return o.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"book-module--book--xeVXL"},o.createElement("span",null,'"'+t+'"'),o.createElement("span",null,r))},y="books-module--bookEntry--WRdoe",O="books-module--bookList--X4b7M",T="books-module--categoryTitle--TeUU5",k="books-module--treeNode--iElRC",v=((s={})[n.SOFTWARE]=m.Y.SOFTWARE,s[n.OTHER]=m.Y.OTHER,s),g=function(){var e=b.filter((function(e){return e.category===n.SOFTWARE})),t=b.filter((function(e){return e.category===n.OTHER}));return o.createElement("fieldset",{className:p},o.createElement("legend",{className:E},o.createElement(c.Trans,null,m.Y.BOOKS_TITLE)),o.createElement("div",{className:"books-module--books--h7Rfh"},o.createElement("span",{className:T},o.createElement(c.Trans,null,v[n.SOFTWARE])),o.createElement("div",{className:O},e.map((function(e,t){var r=e.title,n=e.author,a=e.href;return o.createElement("div",{key:t,className:y},o.createElement("svg",{width:"70",height:"50",className:k},o.createElement("line",{x1:"30",y1:"25",x2:"60",y2:"25",stroke:"current",strokeWidth:"3"}),o.createElement("line",{x1:"30",y1:"0",x2:"30",y2:"50",stroke:"current",strokeWidth:"3"})),o.createElement(h,{title:r,author:n,href:a}))}))),o.createElement("span",{className:T},o.createElement(c.Trans,null,v[n.OTHER])),o.createElement("div",{className:O},t.map((function(e,t){var r=e.title,n=e.author,a=e.href;return o.createElement("div",{key:t,className:y},o.createElement("svg",{width:"70",height:"50",className:k},o.createElement("line",{x1:"30",y1:"25",x2:"60",y2:"25",stroke:"current",strokeWidth:"3"}),o.createElement("line",{x1:"30",y1:"0",x2:"30",y2:"50",stroke:"current",strokeWidth:"3"})),o.createElement(h,{title:r,author:n,href:a}))})))))},A=r(3733);!function(e){e.HASHNODE="Hashnode",e.CODEPEN="Codepen",e.HACKER_RANK="Hacker Rank",e.LEETCODE="LeetCode",e.DEV_TO="Dev.to",e.MEDIUM="Medium",e.STEPIK="Stepik",e.FREE_CODE_CAMP="freeCodeCamp",e.GLITCH="Glitch",e.MY_TRAVEL_MAP="My travel map"}(f||(f={})),function(e){e.HASHNODE="https://blog.arcbjorn.com/",e.CODEPEN="https://codepen.io/arcbjorn",e.HACKER_RANK="https://www.hackerrank.com/arcbjorn",e.LEETCODE="https://leetcode.com/arcbjorn",e.FREE_CODE_CAMP="https://www.freecodecamp.org/arcbjorn",e.DEV_TO="https://dev.to/arcbjorn",e.MEDIUM="https://arcbjorn.medium.com/",e.STEPIK="https://stepik.org/users/247781885",e.GLITCH="https://glitch.com/@arcbjorn",e.MY_TRAVEL_MAP="https://www.mytravelmap.xyz/u/gg104931485347737929283"}(u||(u={}));var C=r(3364),w=function(e){var t=e.title,r=e.href,n=e.icon,a=e.iconPrefix,i=e.iconTitle,l=e.description,c=o.useState(!1),s=c[0],u=c[1],m=function(){u(!s)},p=[f.GLITCH,f.STEPIK,f.LEETCODE].some((function(e){return e===t}));return o.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"platformLink-module--platformLink--ok7nk",onMouseEnter:m,onMouseLeave:m},o.createElement("div",{className:"platformLink-module--platformLinkTitle--nqSjb "+(s?"platformLink-module--platformLinkTitleHover--gYOoc":"")},p?"":o.createElement(C.G,{icon:[a,n],title:i,className:"platformLink-module--platformLinkIcon--Je4eT"}),t),o.createElement("span",{className:"platformLink-module--platformLinkDescription--uIoeE"},o.createElement(A.c,null,l)))},x=[{title:f.HASHNODE,href:u.HASHNODE,iconPrefix:i.d.BRANDS,icon:"hashnode",iconTitle:"Hashnode",description:m.Y.HASHNODE},{title:f.MY_TRAVEL_MAP,href:u.MY_TRAVEL_MAP,iconPrefix:i.d.BRANDS,icon:"galactic-republic",iconTitle:"My travel map",description:m.Y.MY_TRAVEL_MAP},{title:f.CODEPEN,href:u.CODEPEN,iconPrefix:i.d.BRANDS,icon:"codepen",iconTitle:"Codepen",description:m.Y.CODEPEN},{title:f.FREE_CODE_CAMP,href:u.FREE_CODE_CAMP,iconPrefix:i.d.BRANDS,icon:"free-code-camp",iconTitle:"freeCodeCamp",description:m.Y.FREE_CODE_CAMP},{title:f.HACKER_RANK,href:u.HACKER_RANK,iconPrefix:i.d.BRANDS,icon:"hackerrank",iconTitle:"Hacker Rank",description:m.Y.HACKER_RANK},{title:f.DEV_TO,href:u.DEV_TO,iconPrefix:i.d.BRANDS,icon:"dev",iconTitle:"Dev.to",description:m.Y.DEV_TO},{title:f.MEDIUM,href:u.MEDIUM,iconPrefix:i.d.BRANDS,icon:"medium",iconTitle:"Medium",description:m.Y.MEDIUM},{title:f.LEETCODE,href:u.LEETCODE,iconPrefix:i.d.BRANDS,icon:"leetcode",iconTitle:"LeetCode",description:m.Y.LEETCODE},{title:f.STEPIK,href:u.STEPIK,iconPrefix:i.d.BRANDS,icon:"stepik",iconTitle:"Stepik",description:m.Y.STEPIK},{title:f.GLITCH,href:u.GLITCH,iconPrefix:i.d.CUSTOM,icon:"glitch",iconTitle:"Glitch",description:m.Y.GLITCH}],S=function(){return o.createElement("fieldset",{className:p+" extraInfo-module--noScrollbar--YdsDn"},o.createElement("legend",{className:E},o.createElement(A.c,null,m.Y.PLATFORMS_TITLE)),o.createElement("div",{className:"platformLinks-module--platformLinks--jijXe"},x.map((function(e,t){var r=e.title,n=e.href,a=e.icon,i=e.iconPrefix,l=e.iconTitle,c=e.description;return o.createElement(w,{key:t,title:r,href:n,icon:a,iconPrefix:i,iconTitle:l,description:c})}))))},P=function(){return o.createElement("div",{className:"extraInfo-module--extraInfo--MLS-F"},o.createElement("div",{className:d+" w-full sm:w-5/12"},o.createElement(S,null)),o.createElement("div",{className:d+" w-full sm:w-7/12"},o.createElement(g,null)))},N=function(){return o.createElement(l.Z,null,o.createElement(a.Helmet,null,o.createElement("title",null,i.$.EXTRA)),o.createElement(P,null))}}}]);
//# sourceMappingURL=component---src-pages-extra-tsx-754acdf8a37111796b59.js.map