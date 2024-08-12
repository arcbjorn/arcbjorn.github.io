"use strict";(self.webpackChunkarcbjorn_personal_website=self.webpackChunkarcbjorn_personal_website||[]).push([[302],{3364:function(e,t,r){r.d(t,{G:function(){return O}});var n=r(950),o=r(5697),a=r.n(o),l=r(7294);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function m(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var y=["style"];function b(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=d(t.slice(0,n)),a=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:e[o]=a,e}),{})}var h=!1;try{h=!0}catch(v){}function E(e){return e&&"object"===s(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var O=l.forwardRef((function(e,t){var r=e.icon,o=e.mask,a=e.symbol,l=e.className,i=e.title,s=e.titleId,f=e.maskId,p=E(r),d=g("classes",[].concat(m(function(e){var t,r=e.beat,n=e.fade,o=e.beatFade,a=e.bounce,l=e.shake,i=e.flash,c=e.spin,s=e.spinPulse,f=e.spinReverse,m=e.pulse,p=e.fixedWidth,d=e.inverse,y=e.border,b=e.listItem,h=e.flip,E=e.size,g=e.rotation,O=e.pull,A=(u(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":o,"fa-bounce":a,"fa-shake":l,"fa-flash":i,"fa-spin":c,"fa-spin-reverse":f,"fa-spin-pulse":s,"fa-pulse":m,"fa-fw":p,"fa-inverse":d,"fa-border":y,"fa-li":b,"fa-flip":!0===h,"fa-flip-horizontal":"horizontal"===h||"both"===h,"fa-flip-vertical":"vertical"===h||"both"===h},"fa-".concat(E),null!=E),u(t,"fa-rotate-".concat(g),null!=g&&0!==g),u(t,"fa-pull-".concat(O),null!=O),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(A).map((function(e){return A[e]?e:null})).filter((function(e){return e}))}(e)),m(l.split(" ")))),y=g("transform","string"==typeof e.transform?n.Qc.transform(e.transform):e.transform),b=g("mask",E(o)),v=(0,n.qv)(p,c(c(c(c({},d),y),b),{},{symbol:a,title:i,titleId:s,maskId:f}));if(!v)return function(){var e;!h&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var S=v.abstract,T={ref:t};return Object.keys(e).forEach((function(t){O.defaultProps.hasOwnProperty(t)||(T[t]=e[t])})),A(S[0],T)}));O.displayName="FontAwesomeIcon",O.propTypes={beat:a().bool,border:a().bool,beatFade:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf([!0,!1,"horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},O.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var A=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),a=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=b(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[d(t)]=n}return e}),{attrs:{}}),l=n.style,i=void 0===l?{}:l,s=f(n,y);return a.attrs.style=c(c({},a.attrs.style),i),t.apply(void 0,[r.tag,c(c({},a.attrs),s)].concat(m(o)))}.bind(null,l.createElement)},6795:function(e,t,r){var n,o,a;r.d(t,{Aj:function(){return a},P:function(){return o},ip:function(){return n}}),function(e){e.BLOG="Blog",e.SHOWCASE="Showcase",e.LEARNING="Learning",e.CUSTOM="Custom",e.SOCIAL="Social"}(n||(n={})),function(e){e.LINKEDIN="LinkedIn",e.GITHUB="Github",e.EMAIL="EMail",e.BLOG="Blog",e.HASHNODE="Hashnode",e.CODEPEN="Codepen",e.HACKER_RANK="Hacker Rank",e.LEETCODE="LeetCode",e.DEV_TO="Dev.to",e.STACK_OVERFLOW="Stack Overflow",e.MEDIUM="Medium",e.STEPIK="Stepik",e.FREE_CODE_CAMP="freeCodeCamp",e.GLITCH="Glitch",e.MY_TRAVEL_MAP="My travel map",e.TWITTER="Twitter",e.REDDIT="Reddit",e.INSTAGRAM="Instagram",e.SPOTIFY="Spotify",e.GOOD_READS="GoodReads"}(o||(o={})),function(e){e.LINKEDIN="https://www.linkedin.com/in/oleg-luganskiy/",e.GITHUB="https://www.github.com/arcbjorn",e.MAIL="mailto:oleg.luganskiy@gmail.com?subject=Employment%20Offer&body=Hi%20Oleg",e.CV="OL.CV.pdf",e.PORTFOLIO="https://arcbjorn.com",e.COPY_MAIL="oleg.luganskiy@gmail.com",e.BLOG="https://blog.arcbjorn.com/",e.HASHNODE="https://arcbjorn.hashnode.dev/",e.CODEPEN="https://codepen.io/arcbjorn",e.HACKER_RANK="https://www.hackerrank.com/arcbjorn",e.LEETCODE="https://leetcode.com/arcbjorn",e.FREE_CODE_CAMP="https://www.freecodecamp.org/arcbjorn",e.DEV_TO="https://dev.to/arcbjorn",e.STACK_OVERFLOW="https://stackoverflow.com/users/13143157/arcbjorn",e.MEDIUM="https://arcbjorn.medium.com/",e.STEPIK="https://stepik.org/users/247781885",e.GLITCH="https://glitch.com/@arcbjorn",e.MY_TRAVEL_MAP="https://www.mytravelmap.xyz/u/gg104931485347737929283",e.TWITTER="https://twitter.com/arcbjorn",e.REDDIT="https://www.reddit.com/u/Arcbjorn",e.INSTAGRAM="https://www.instagram.com/arcbjorn",e.SPOTIFY="https://open.spotify.com/user/hrpn170u8d82ch90nw6y1floe",e.GOOD_READS="https://www.goodreads.com/arcbjorn"}(a||(a={}))},5494:function(e,t,r){r.r(t),r.d(t,{default:function(){return B}});var n,o=r(7294),a=r(1597),l=r(2787),i=r(1970),c=r(7782);!function(e){e.SOFTWARE="Software",e.PSYCHOLOGY="Psychology",e.FANTASY="Fantasy"}(n||(n={}));var s,u=r(1155),f="extraInfo-module--extraInnerSection--APLEt",m="extraInfo-module--extraSection--Wf702",p="extraInfo-module--extraSectionTitle--uk2y-",d="extraInfo-module--noScrollbar--YdsDn",y=[{title:"Code Complete",author:"S.McConnell",category:n.SOFTWARE,href:"https://github.com/manh-nguyen/ccomplete2/blob/master/Steve%20McConnell-Code%20Complete_%20A%20Practical%20Handbook%20of%20Software%20Construction.%202%20ed.-Microsoft%20Press.epub"},{title:"The Art of Computer Programming",author:"D.Knuth",category:n.SOFTWARE,href:"https://github.com/manjunath5496/The-Art-of-Computer-Programming-Books"},{title:"Psycho-Cybernetics",author:"M.Maltz",category:n.PSYCHOLOGY,href:"https://www.amazon.com/Psycho-Cybernetics-Updated-Expanded-Maxwell-Maltz/dp/0399176136"},{title:"War of Art",author:"S.Pressfield",category:n.PSYCHOLOGY,href:"https://www.amazon.com/War-Art-Winning-Creative-Battle/dp/1501260626"},{title:"SGTCIY",author:"C.Newport",category:n.PSYCHOLOGY,href:"https://www.amazon.com/Good-They-Cant-Ignore-You/dp/1455509124"},{title:"Mastery",author:"G.Leonard",category:n.PSYCHOLOGY,href:"https://www.amazon.com/Mastery-Keys-Success-Long-Term-Fulfillment/dp/0452267560"},{title:"The Legend of Drizzt",author:"R. A. Salvatore",category:n.FANTASY,href:"https://en.wikipedia.org/wiki/The_Legend_of_Drizzt"}],b=function(e){var t=e.title,r=e.author,n=e.href;return o.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"book-module--book--xeVXL"},o.createElement("span",null,'"'+t+'"'),o.createElement("span",null,r))},h=((s={})[n.SOFTWARE]=u.Y.SOFTWARE,s[n.PSYCHOLOGY]=u.Y.PSYCHOLOGY,s[n.FANTASY]=u.Y.FANTASY,s),E=[n.SOFTWARE,n.PSYCHOLOGY,n.FANTASY],g=function(){return o.createElement("fieldset",{className:f},o.createElement("legend",{className:p},o.createElement(c.Trans,null,u.Y.BOOKS_TITLE)),o.createElement("div",{className:"books-module--books--h7Rfh"},E.map((function(e){return o.createElement(o.Fragment,null,o.createElement("span",{className:"books-module--categoryTitle--TeUU5"},o.createElement(c.Trans,null,h[e])),o.createElement("div",{className:"books-module--bookList--X4b7M"},y.filter((function(t){return t.category===e})).map((function(e,t){var r=e.title,n=e.author,a=e.href;return o.createElement("div",{key:r+t,className:"books-module--bookEntry--WRdoe"},o.createElement("svg",{width:"70",height:"50",className:"books-module--treeNode--iElRC"},o.createElement("line",{x1:"30",y1:"25",x2:"60",y2:"25",stroke:"current",strokeWidth:"3"}),o.createElement("line",{x1:"30",y1:"0",x2:"30",y2:"50",stroke:"current",strokeWidth:"3"})),o.createElement(b,{title:r,author:n,href:a}))}))))}))))};function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t,r,n){if(O(r)!==n)throw new TypeError("Invalid prop '".concat(t,"' of type '").concat(O(r),"' supplied to '").concat(e,"', expected '").concat(n,"'."))}function v(e){var t=e.size,r=void 0===t?80:t,n=e.color,a=void 0===n?"black":n,l=e.lineWeight,i=void 0===l?5:l,c=e.speed,s=void 0===c?1.4:c;return A("RaceBy","size",r,"number"),A("RaceBy","color",a,"string"),A("RaceBy","speed",s,"number"),A("RaceBy","lineWeight",i,"number"),o.createElement("div",{className:"RaceBy-module_container__pu79P",style:{"--uib-size":r+"px","--uib-color":a,"--uib-line-weight":i+"px","--uib-speed":s+"s"}})}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}('.RaceBy-module_container__pu79P{align-items:center;border-radius:calc(var(--uib-line-weight)/2);display:flex;height:var(--uib-line-weight);justify-content:center;overflow:hidden;position:relative;transform:translateZ(0);width:var(--uib-size)}.RaceBy-module_container__pu79P:before{background-color:var(--uib-color);content:"";height:100%;left:0;opacity:.1;position:absolute;top:0;width:100%}.RaceBy-module_container__pu79P:after{animation:RaceBy-module_raceBy__g-TGB var(--uib-speed) ease-in-out infinite;background-color:var(--uib-color);border-radius:calc(var(--uib-line-weight)/2);content:"";height:100%;transform:translateX(-100%);width:100%}@keyframes RaceBy-module_raceBy__g-TGB{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}');var S=function(){return o.createElement("div",{className:"loader-module--loader--YSjCB"},o.createElement(v,{size:150,lineWeight:10,speed:1.2,color:"var(--color)"}))},T=r(7098),k=r(3364),w=function(e){var t=e.link,r=t.title,n=t.href,a=t.icon,i=t.iconPrefix,c=t.iconTitle;return o.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"platformLink-module--platformLink--oU2AW"},o.createElement("div",{className:"platformLink-module--platformLinkTitle--wlz9V"},i!==l.d.CUSTOM&&o.createElement(k.G,{icon:[i,a],title:c,className:"platformLink-module--platformLinkIcon--XpEri"}),r))},N=r(6795),L=[{title:N.P.MY_TRAVEL_MAP,category:N.ip.CUSTOM,href:N.Aj.MY_TRAVEL_MAP,iconPrefix:l.d.SOLID,icon:"earth-americas",iconTitle:"My travel map",description:u.Y.MY_TRAVEL_MAP}],I=[{title:N.P.LEETCODE,category:N.ip.LEARNING,href:N.Aj.LEETCODE,iconPrefix:l.d.SOLID,icon:"terminal",iconTitle:"LeetCode",description:u.Y.LEETCODE}],P=[{title:N.P.BLOG,category:N.ip.BLOG,href:N.Aj.BLOG,iconPrefix:l.d.SOLID,icon:"book",iconTitle:"Blog",description:u.Y.BLOG}],C=[],_=function(e){var t=e.link,r=t.href,n=t.icon,a=t.iconPrefix,l=t.iconTitle;return o.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"socialLink-module--socialLinkIcon--VGikr"},o.createElement(k.G,{icon:[a,n],title:l}))},R=[{href:N.Aj.TWITTER,iconPrefix:l.d.BRANDS,icon:"twitter",iconTitle:N.P.TWITTER,category:N.ip.SOCIAL},{href:N.Aj.REDDIT,iconPrefix:l.d.BRANDS,icon:"reddit",iconTitle:N.P.REDDIT,category:N.ip.SOCIAL},{href:N.Aj.INSTAGRAM,iconPrefix:l.d.BRANDS,icon:"instagram",iconTitle:N.P.INSTAGRAM,category:N.ip.SOCIAL},{href:N.Aj.SPOTIFY,iconPrefix:l.d.BRANDS,icon:"spotify",iconTitle:N.P.SPOTIFY,category:N.ip.SOCIAL},{href:N.Aj.GOOD_READS,iconPrefix:l.d.BRANDS,icon:"goodreads",iconTitle:N.P.GOOD_READS,category:N.ip.SOCIAL}],x=function(){return o.createElement("fieldset",{className:f+" "+d},o.createElement("legend",{className:p},o.createElement(T.c,null,u.Y.PLATFORMS_TITLE)),o.createElement("div",{className:"extraLinks-module--platformLinks--QnojH"},L.map((function(e){return o.createElement(w,{key:e.title,link:e})})),I.map((function(e){return o.createElement(w,{key:e.title,link:e})})),P.map((function(e){return o.createElement(w,{key:e.title,link:e})})),C.map((function(e){return o.createElement(w,{key:e.title,link:e})}))),o.createElement("div",{className:"extraLinks-module--socialLinks--Njjll"},R.map((function(e){return o.createElement(_,{key:e.icon,link:e})}))))},j=[{name:u.Y.LANG_ENGLISH_NAME,level:"5/5"},{name:u.Y.LANG_SPANISH_NAME,level:"5/5"},{name:u.Y.LANG_GERMAN_NAME,level:"5/5"},{name:u.Y.LANG_RUSSIAN_NAME,level:"5/5"},{name:u.Y.LANG_PORTUGUESE_NAME,level:"1/5"},{name:u.Y.LANG_JAPANESE_NAME,level:"1/5"},{name:u.Y.LANG_SWEDISH_NAME,level:"1/5"}],G=function(e){var t=e.name,r=e.level;return o.createElement("div",{className:"language-module--language--0KIIW"},o.createElement(c.Trans,null,t),o.createElement("span",null,r))},M=function(){return o.createElement("fieldset",{className:f+" "+d},o.createElement("legend",{className:p},o.createElement(c.Trans,null,u.Y.LANGUAGES_TITLE)),o.createElement("div",{className:"languages-module--languages--rkPoz"},j.map((function(e,t){var r=e.name,n=e.level;return o.createElement("div",{key:r+t,className:"languages-module--languageEntry--Enm3R"},o.createElement("svg",{width:"70",height:"50",className:"languages-module--treeNode--oCyPq"},o.createElement("line",{x1:"30",y1:"25",x2:"60",y2:"25",stroke:"current",strokeWidth:"3"}),o.createElement("line",{x1:"30",y1:"0",x2:"30",y2:"50",stroke:"current",strokeWidth:"3"})),o.createElement(G,{name:r,level:n}))}))))},D=function(){var e=(0,o.useState)(!0),t=e[0],r=e[1];return(0,o.useEffect)((function(){setTimeout((function(){r(!1)}),600)}),[]),o.createElement(o.Fragment,null,t?o.createElement(S,null):o.createElement("div",{className:"extraInfo-module--extraInfo--MLS-F"},o.createElement("div",{className:m+" w-full sm:w-5/12"},o.createElement(x,null),o.createElement("a",{href:"https://arcbjorn.bio.link",target:"_blank",rel:"noopener noreferrer",className:"underline p-4 self-center text-center"},"All socials"),o.createElement(M,null)),o.createElement("div",{className:m+" w-full sm:w-7/12"},o.createElement(g,null))))},Y=r(3904),B=function(){var e=(0,c.useI18next)().language;return"undefined"!=typeof navigator&&/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(0,a.navigate)("/"),o.createElement(i.Z,null,o.createElement(a.Script,{"data-website-id":"88cd3360-86f7-4497-a654-46d79f251501",src:"https://analytics.arcbjorn.com/umami.js"}),o.createElement(Y.Z,{description:l.X.EXTRA,slug:"/"+e+"/extra"}),o.createElement(D,null))}}}]);
//# sourceMappingURL=component---src-pages-extra-tsx-919e14bf114661aaea26.js.map