"use strict";(self.webpackChunkarcbjorn_personal_website=self.webpackChunkarcbjorn_personal_website||[]).push([[302],{3364:function(e,t,r){r.d(t,{G:function(){return g}});var n=r(1878),o=r(5697),i=r.n(o),a=r(7294);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function m(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var y=["style"];function E(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=d(t.slice(0,n)),i=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=i:e[o]=i,e}),{})}var b=!1;try{b=!0}catch(T){}function h(e){return e&&"object"===s(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function O(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var A=["forwardedRef"];function g(e){var t=e.forwardedRef,r=f(e,A),o=r.icon,i=r.mask,a=r.symbol,l=r.className,s=r.title,p=r.titleId,d=r.maskId,y=h(o),E=O("classes",[].concat(m(function(e){var t,r=e.beat,n=e.fade,o=e.beatFade,i=e.bounce,a=e.shake,l=e.flash,c=e.spin,s=e.spinPulse,f=e.spinReverse,m=e.pulse,p=e.fixedWidth,d=e.inverse,y=e.border,E=e.listItem,b=e.flip,h=e.size,O=e.rotation,A=e.pull,g=(u(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":o,"fa-bounce":i,"fa-shake":a,"fa-flash":l,"fa-spin":c,"fa-spin-reverse":f,"fa-spin-pulse":s,"fa-pulse":m,"fa-fw":p,"fa-inverse":d,"fa-border":y,"fa-li":E,"fa-flip-horizontal":"horizontal"===b||"both"===b,"fa-flip-vertical":"vertical"===b||"both"===b},"fa-".concat(h),null!=h),u(t,"fa-rotate-".concat(O),null!=O&&0!==O),u(t,"fa-pull-".concat(A),null!=A),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(g).map((function(e){return g[e]?e:null})).filter((function(e){return e}))}(r)),m(l.split(" ")))),T=O("transform","string"==typeof r.transform?n.Qc.transform(r.transform):r.transform),v=O("mask",h(i)),k=(0,n.qv)(y,c(c(c(c({},E),T),v),{},{symbol:a,title:s,titleId:p,maskId:d}));if(!k)return function(){var e;!b&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",y),null;var C=k.abstract,P={ref:t};return Object.keys(r).forEach((function(e){g.defaultProps.hasOwnProperty(e)||(P[e]=r[e])})),S(C[0],P)}g.displayName="FontAwesomeIcon",g.propTypes={beat:i().bool,border:i().bool,bounce:i().bool,className:i().string,fade:i().bool,flash:i().bool,mask:i().oneOfType([i().object,i().array,i().string]),maskId:i().string,fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf(["horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),shake:i().bool,size:i().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,spinPulse:i().bool,spinReverse:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,titleId:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},g.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var S=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),i=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=E(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[d(t)]=n}return e}),{attrs:{}}),a=n.style,l=void 0===a?{}:a,s=f(n,y);return i.attrs.style=c(c({},i.attrs.style),l),t.apply(void 0,[r.tag,c(c({},i.attrs),s)].concat(m(o)))}.bind(null,a.createElement)},6064:function(e,t,r){var n,o,i;r.d(t,{Aj:function(){return i},P:function(){return o},ip:function(){return n}}),function(e){e.BLOG="Blog",e.SHOWCASE="Showcase",e.LEARNING="Learning",e.CUSTOM="Custom",e.SOCIAL="Social"}(n||(n={})),function(e){e.LINKEDIN="LinkedIn",e.GITHUB="Github",e.EMAIL="EMail",e.HASHNODE="Hashnode",e.CODEPEN="Codepen",e.HACKER_RANK="Hacker Rank",e.LEETCODE="LeetCode",e.DEV_TO="Dev.to",e.STACK_OVERFLOW="Stack Overflow",e.MEDIUM="Medium",e.STEPIK="Stepik",e.FREE_CODE_CAMP="freeCodeCamp",e.GLITCH="Glitch",e.MY_TRAVEL_MAP="My travel map",e.TWITTER="Twitter",e.REDDIT="Reddit",e.INSTAGRAM="Instagram",e.SPOTIFY="Spotify",e.GOOD_READS="GoodReads"}(o||(o={})),function(e){e.LINKEDIN="https://www.linkedin.com/in/oleg-luganskiy/",e.GITHUB="https://www.github.com/arcbjorn",e.MAIL="mailto:oleg.luganskiy@gmail.com?subject=Employment%20Offer&body=Hi%20Oleg",e.CV="OL.CV.pdf",e.HASHNODE="https://blog.arcbjorn.com/",e.CODEPEN="https://codepen.io/arcbjorn",e.HACKER_RANK="https://www.hackerrank.com/arcbjorn",e.LEETCODE="https://leetcode.com/arcbjorn",e.FREE_CODE_CAMP="https://www.freecodecamp.org/arcbjorn",e.DEV_TO="https://dev.to/arcbjorn",e.STACK_OVERFLOW="https://stackoverflow.com/users/13143157/arcbjorn",e.MEDIUM="https://arcbjorn.medium.com/",e.STEPIK="https://stepik.org/users/247781885",e.GLITCH="https://glitch.com/@arcbjorn",e.MY_TRAVEL_MAP="https://www.mytravelmap.xyz/u/gg104931485347737929283",e.TWITTER="https://twitter.com/arcbjorn",e.REDDIT="https://www.reddit.com/u/Arcbjorn",e.INSTAGRAM="https://instagram.com/oleg_arc",e.SPOTIFY="https://open.spotify.com/user/hrpn170u8d82ch90nw6y1floe",e.GOOD_READS="https://www.goodreads.com/arcbjorn"}(i||(i={}))},8953:function(e,t,r){r.r(t),r.d(t,{default:function(){return B}});var n,o=r(7294),i=r(5186),a=r(4965),l=r(3809),c=r(7782);!function(e){e.SOFTWARE="Software",e.PSYCHOLOGY="Psychology"}(n||(n={}));var s,u=r(4935),f="extraInfo-module--extraInnerSection--APLEt",m="extraInfo-module--extraSection--Wf702",p="extraInfo-module--extraSectionTitle--uk2y-",d=[{title:"Code Complete",author:"S.McConnell",category:n.SOFTWARE,href:"https://github.com/manh-nguyen/ccomplete2/blob/master/Steve%20McConnell-Code%20Complete_%20A%20Practical%20Handbook%20of%20Software%20Construction.%202%20ed.-Microsoft%20Press.epub"},{title:"The Art of Computer Programming",author:"D.Knuth",category:n.SOFTWARE,href:"https://github.com/manjunath5496/The-Art-of-Computer-Programming-Books"},{title:"Psycho-Cybernetics",author:"M.Maltz",category:n.PSYCHOLOGY,href:"https://www.amazon.com/Psycho-Cybernetics-Updated-Expanded-Maxwell-Maltz/dp/0399176136"},{title:"War of Art",author:"S.Pressfield",category:n.PSYCHOLOGY,href:"https://www.amazon.com/War-Art-Winning-Creative-Battle/dp/1501260626"},{title:"SGTCIY",author:"C.Newport",category:n.PSYCHOLOGY,href:"https://www.amazon.com/Good-They-Cant-Ignore-You/dp/1455509124"},{title:"Mastery",author:"G.Leonard",category:n.PSYCHOLOGY,href:"https://www.amazon.com/Mastery-Keys-Success-Long-Term-Fulfillment/dp/0452267560"}],y=function(e){var t=e.title,r=e.author,n=e.href;return o.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"book-module--book--xeVXL"},o.createElement("span",null,'"'+t+'"'),o.createElement("span",null,r))},E="books-module--bookEntry--WRdoe",b="books-module--bookList--X4b7M",h="books-module--categoryTitle--TeUU5",O="books-module--treeNode--iElRC",A=((s={})[n.SOFTWARE]=u.Y.SOFTWARE,s[n.PSYCHOLOGY]=u.Y.PSYCHOLOGY,s),g=function(){var e=d.filter((function(e){return e.category===n.SOFTWARE})),t=d.filter((function(e){return e.category===n.PSYCHOLOGY}));return o.createElement("fieldset",{className:f},o.createElement("legend",{className:p},o.createElement(c.Trans,null,u.Y.BOOKS_TITLE)),o.createElement("div",{className:"books-module--books--h7Rfh"},o.createElement("span",{className:h},o.createElement(c.Trans,null,A[n.SOFTWARE])),o.createElement("div",{className:b},e.map((function(e,t){var r=e.title,n=e.author,i=e.href;return o.createElement("div",{key:r+t,className:E},o.createElement("svg",{width:"70",height:"50",className:O},o.createElement("line",{x1:"30",y1:"25",x2:"60",y2:"25",stroke:"current",strokeWidth:"3"}),o.createElement("line",{x1:"30",y1:"0",x2:"30",y2:"50",stroke:"current",strokeWidth:"3"})),o.createElement(y,{title:r,author:n,href:i}))}))),o.createElement("span",{className:h},o.createElement(c.Trans,null,A[n.PSYCHOLOGY])),o.createElement("div",{className:b},t.map((function(e,t){var r=e.title,n=e.author,i=e.href;return o.createElement("div",{key:r+t,className:E},o.createElement("svg",{width:"70",height:"50",className:O},o.createElement("line",{x1:"30",y1:"25",x2:"60",y2:"25",stroke:"current",strokeWidth:"3"}),o.createElement("line",{x1:"30",y1:"0",x2:"30",y2:"50",stroke:"current",strokeWidth:"3"})),o.createElement(y,{title:r,author:n,href:i}))})))))};function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t,r,n){if(S(r)!==n)throw new TypeError("Invalid prop '".concat(t,"' of type '").concat(S(r),"' supplied to '").concat(e,"', expected '").concat(n,"'."))}function v(e){var t=e.size,r=void 0===t?80:t,n=e.color,i=void 0===n?"black":n,a=e.lineWeight,l=void 0===a?5:a,c=e.speed,s=void 0===c?1.4:c;return T("RaceBy","size",r,"number"),T("RaceBy","color",i,"string"),T("RaceBy","speed",s,"number"),T("RaceBy","lineWeight",l,"number"),o.createElement("div",{className:"RaceBy-module_container__pu79P",style:{"--uib-size":r+"px","--uib-color":i,"--uib-line-weight":l+"px","--uib-speed":s+"s"}})}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}('.RaceBy-module_container__pu79P{align-items:center;border-radius:calc(var(--uib-line-weight)/2);display:flex;height:var(--uib-line-weight);justify-content:center;overflow:hidden;position:relative;transform:translateZ(0);width:var(--uib-size)}.RaceBy-module_container__pu79P:before{background-color:var(--uib-color);content:"";height:100%;left:0;opacity:.1;position:absolute;top:0;width:100%}.RaceBy-module_container__pu79P:after{animation:RaceBy-module_raceBy__g-TGB var(--uib-speed) ease-in-out infinite;background-color:var(--uib-color);border-radius:calc(var(--uib-line-weight)/2);content:"";height:100%;transform:translateX(-100%);width:100%}@keyframes RaceBy-module_raceBy__g-TGB{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}');var k=function(){return o.createElement("div",{className:"loader-module--loader--YSjCB"},o.createElement(v,{size:150,lineWeight:10,speed:1.2,color:"var(--color)"}))},C=r(3733),P=r(3364),w=function(e){var t=e.link,r=t.title,n=t.href,i=t.icon,l=t.iconPrefix,c=t.iconTitle,s=t.description;return o.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"platformLink-module--platformLink--oU2AW"},o.createElement("div",{className:"platformLink-module--platformLinkTitle--wlz9V"},l!==a.d.CUSTOM&&o.createElement(P.G,{icon:[l,i],title:c,className:"platformLink-module--platformLinkIcon--XpEri"}),r),o.createElement("span",{className:"platformLink-module--platformLinkDescription--CSWR2"},o.createElement(C.c,null,s)))},N=r(6064),R=[{title:N.P.MY_TRAVEL_MAP,category:N.ip.CUSTOM,href:N.Aj.MY_TRAVEL_MAP,iconPrefix:a.d.BRANDS,icon:"galactic-republic",iconTitle:"My travel map",description:u.Y.MY_TRAVEL_MAP},{title:N.P.STACK_OVERFLOW,category:N.ip.CUSTOM,href:N.Aj.STACK_OVERFLOW,iconPrefix:a.d.BRANDS,icon:"stack-overflow",iconTitle:"StackOverflow",description:u.Y.STACK_OVERFLOW}],I=[{title:N.P.HACKER_RANK,category:N.ip.LEARNING,href:N.Aj.HACKER_RANK,iconPrefix:a.d.BRANDS,icon:"hackerrank",iconTitle:"Hacker Rank",description:u.Y.HACKER_RANK},{title:N.P.LEETCODE,category:N.ip.LEARNING,href:N.Aj.LEETCODE,iconPrefix:a.d.CUSTOM,icon:"leetcode",iconTitle:"LeetCode",description:u.Y.LEETCODE},{title:N.P.STEPIK,category:N.ip.LEARNING,href:N.Aj.STEPIK,iconPrefix:a.d.CUSTOM,icon:"stepik",iconTitle:"Stepik",description:u.Y.STEPIK},{title:N.P.FREE_CODE_CAMP,category:N.ip.LEARNING,href:N.Aj.FREE_CODE_CAMP,iconPrefix:a.d.BRANDS,icon:"free-code-camp",iconTitle:"freeCodeCamp",description:u.Y.FREE_CODE_CAMP}],L=[{title:N.P.HASHNODE,category:N.ip.BLOG,href:N.Aj.HASHNODE,iconPrefix:a.d.BRANDS,icon:"hashnode",iconTitle:"Hashnode",description:u.Y.HASHNODE},{title:N.P.DEV_TO,category:N.ip.BLOG,href:N.Aj.DEV_TO,iconPrefix:a.d.BRANDS,icon:"dev",iconTitle:"Dev.to",description:u.Y.DEV_TO},{title:N.P.MEDIUM,category:N.ip.BLOG,href:N.Aj.MEDIUM,iconPrefix:a.d.BRANDS,icon:"medium",iconTitle:"Medium",description:u.Y.MEDIUM}],x=[{title:N.P.CODEPEN,category:N.ip.SHOWCASE,href:N.Aj.CODEPEN,iconPrefix:a.d.BRANDS,icon:"codepen",iconTitle:"Codepen",description:u.Y.CODEPEN},{title:N.P.GLITCH,category:N.ip.SHOWCASE,href:N.Aj.GLITCH,iconPrefix:a.d.CUSTOM,icon:"glitch",iconTitle:"Glitch",description:u.Y.GLITCH}],D=function(e){var t=e.link,r=t.href,n=t.icon,i=t.iconPrefix,a=t.iconTitle;return o.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"socialLink-module--socialLinkIcon--VGikr"},o.createElement(P.G,{icon:[i,n],title:a}))},_=[{href:N.Aj.TWITTER,iconPrefix:a.d.BRANDS,icon:"twitter",iconTitle:N.P.TWITTER,category:N.ip.SOCIAL},{href:N.Aj.REDDIT,iconPrefix:a.d.BRANDS,icon:"reddit",iconTitle:N.P.REDDIT,category:N.ip.SOCIAL},{href:N.Aj.INSTAGRAM,iconPrefix:a.d.BRANDS,icon:"instagram",iconTitle:N.P.INSTAGRAM,category:N.ip.SOCIAL},{href:N.Aj.SPOTIFY,iconPrefix:a.d.BRANDS,icon:"spotify",iconTitle:N.P.SPOTIFY,category:N.ip.SOCIAL},{href:N.Aj.GOOD_READS,iconPrefix:a.d.BRANDS,icon:"goodreads",iconTitle:N.P.GOOD_READS,category:N.ip.SOCIAL}],j="extraLinks-module--divider--lQcO0",M=function(){return o.createElement("fieldset",{className:f+" extraInfo-module--noScrollbar--YdsDn"},o.createElement("legend",{className:p},o.createElement(C.c,null,u.Y.PLATFORMS_TITLE)),o.createElement("div",{className:"extraLinks-module--platformLinks--QnojH"},R.map((function(e){return o.createElement(w,{key:e.title,link:e})})),o.createElement("div",{className:j},o.createElement("span",{className:"material-icons"},"terminal")),I.map((function(e){return o.createElement(w,{key:e.title,link:e})})),o.createElement("div",{className:j},o.createElement("span",{className:"material-icons"},"notes")),L.map((function(e){return o.createElement(w,{key:e.title,link:e})})),o.createElement("div",{className:j},o.createElement("span",{className:"material-icons"},"slideshow")),x.map((function(e){return o.createElement(w,{key:e.title,link:e})}))),o.createElement("div",{className:"extraLinks-module--socialLinks--Njjll"},_.map((function(e){return o.createElement(D,{key:e.icon,link:e})}))))},G=function(){var e=(0,o.useState)(!0),t=e[0],r=e[1];return(0,o.useEffect)((function(){setTimeout((function(){r(!1)}),600)}),[]),o.createElement(o.Fragment,null,t?o.createElement(k,null):o.createElement("div",{className:"extraInfo-module--extraInfo--MLS-F"},o.createElement("div",{className:m+" w-full sm:w-5/12"},o.createElement(M,null)),o.createElement("div",{className:m+" w-full sm:w-7/12"},o.createElement(g,null))))},Y=r(1597),B=function(){return"undefined"!=typeof navigator&&/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(0,Y.navigate)("/"),o.createElement(l.Z,null,o.createElement(i.Helmet,null,o.createElement("title",null,a.$.EXTRA)),o.createElement(G,null))}}}]);
//# sourceMappingURL=component---src-pages-extra-tsx-42310e9d18387f32798f.js.map