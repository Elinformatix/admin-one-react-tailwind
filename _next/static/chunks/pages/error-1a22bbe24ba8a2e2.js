(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[510],{123:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/error",function(){return t(8322)}])},3618:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});var a=t(5893),n=t(7294),o=t(1664),i=t.n(o),d=t(7673),l=t(1897);function s(e){var r=e.label,t=e.icon,o=e.iconSize,s=e.href,c=e.target,h=e.type,g=e.color,b=void 0===g?"white":g,u=e.className,v=void 0===u?"":u,k=e.asAnchor,w=void 0!==k&&k,x=e.small,f=void 0!==x&&x,y=e.outline,m=void 0!==y&&y,p=e.active,j=void 0!==p&&p,N=e.disabled,D=void 0!==N&&N,_=e.roundedFull,C=void 0!==_&&_,E=e.isGrouped,Z=void 0!==E&&E,F=e.onClick,H=["inline-flex","justify-center","items-center","whitespace-nowrap","focus:outline-none","transition-colors","focus:ring","duration-150","border",D?"cursor-not-allowed":"cursor-pointer",C?"rounded-full":"rounded",(0,d.pQ)(b,m,!D,j),v];!r&&t?H.push("p-1"):f?H.push("text-sm",C?"px-3 py-1":"p-1"):H.push("py-2",C?"px-6":"px-3"),D&&H.push(m?"opacity-50":"opacity-70"),Z&&H.push("mr-3 last:mr-0 mb-3");var P=H.join(" "),A=(0,a.jsxs)(a.Fragment,{children:[t&&(0,a.jsx)(l.Z,{path:t,size:o}),r&&(0,a.jsx)("span",{className:f&&t?"px-1":"px-2",children:r})]});return s&&!D?(0,a.jsx)(i(),{href:s,target:c,passHref:!0,children:(0,a.jsx)("a",{className:P,children:A})}):n.createElement(w?"a":"button",{className:P,type:null!==h&&void 0!==h?h:"button",target:c,disabled:D,onClick:F},A)}},1897:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var a=t(5893);t(7294);function n(e){var r=e.path,t=e.w,n=void 0===t?"w-6":t,o=e.h,i=void 0===o?"h-6":o,d=e.size,l=void 0===d?null:d,s=e.className,c=void 0===s?"":s,h=null!==l&&void 0!==l?l:16;return(0,a.jsx)("span",{className:"inline-flex justify-center items-center ".concat(n," ").concat(i," ").concat(c),children:(0,a.jsx)("svg",{viewBox:"0 0 24 24",width:h,height:h,className:"inline-block",children:(0,a.jsx)("path",{fill:"currentColor",d:r})})})}},2840:function(e,r,t){"use strict";t.d(r,{Z:function(){return d}});var a=t(5893),n=t(7294);function o(e){var r=e.noPadding,t=void 0!==r&&r,n=e.children;return(0,a.jsx)("div",{className:"flex-1 ".concat(t?"":"p-6"),children:n})}function i(e){var r=e.children;return(0,a.jsx)("footer",{className:"p-6",children:r})}function d(e){var r=e.rounded,t=void 0===r?"rounded-2xl":r,d=e.flex,l=void 0===d?"flex-col":d,s=e.className,c=void 0===s?"":s,h=e.hasComponentLayout,g=void 0!==h&&h,b=e.hasTable,u=void 0!==b&&b,v=e.isForm,k=void 0!==v&&v,w=e.isHoverable,x=void 0!==w&&w,f=e.isModal,y=void 0!==f&&f,m=e.children,p=e.footer,j=e.onClick,N=["bg-white flex",c,t,l,y?"dark:bg-slate-900":"dark:bg-slate-900/70"];return x&&N.push("hover:shadow-lg transition-shadow duration-500"),n.createElement(k?"form":"div",{className:N.join(" "),onClick:j},g?m:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o,{noPadding:u,children:m}),p&&(0,a.jsx)(i,{children:p})]}))}},5552:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var a=t(5893),n=(t(7294),t(2027));function o(e){var r=e.children,t=(0,n.C)((function(e){return e.style.darkMode}));return(0,a.jsx)("div",{className:t?"dark":"",children:(0,a.jsx)("div",{className:"bg-gray-50 dark:bg-slate-800 dark:text-slate-100",children:r})})}},8322:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return b}});var a=t(5893),n=(t(7294),t(9008)),o=t.n(n),i=t(3618),d=t(2840),l=t(7673),s=t(2027);function c(e){var r=e.bg,t=e.children,n="flex min-h-screen items-center justify-center ";return(0,s.C)((function(e){return e.style.darkMode}))?n+=l.dc:"purplePink"===r?n+=l.N$:"pinkRed"===r&&(n+=l.FA),(0,a.jsx)("div",{className:n,children:t})}var h=t(5552),g=t(6704);function b(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o(),{children:(0,a.jsxs)("title",{children:["Error - ",g.xw]})}),(0,a.jsx)(c,{bg:"pinkRed",children:(0,a.jsx)(d.Z,{className:"w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl",footer:(0,a.jsx)(i.Z,{href:"/",label:"Done",color:"danger"}),children:(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsx)("h1",{className:"text-2xl",children:"Unhandled exception"}),(0,a.jsx)("p",{children:"An Error Occurred"})]})})})]})}b.getLayout=function(e){return(0,a.jsx)(h.Z,{children:e})}},7673:function(e,r,t){"use strict";t.d(r,{FA:function(){return i},N$:function(){return n},RH:function(){return d},bN:function(){return s},dc:function(){return o},pQ:function(){return c},uK:function(){return l}});var a="bg-gradient-to-tr",n="".concat(a," from-purple-400 via-pink-500 to-red-500"),o="".concat(a," from-slate-700 via-slate-900 to-slate-800"),i="".concat(a," from-pink-400 via-red-500 to-yellow-500"),d={white:"bg-white text-black",light:"bg-white text-black dark:bg-slate-900/70 dark:text-white",contrast:"bg-gray-800 text-white dark:bg-white dark:text-black",success:"bg-emerald-500 border-emerald-500 text-white",danger:"bg-red-500 border-red-500 text-white",warning:"bg-yellow-500 border-yellow-500 text-white",info:"bg-blue-500 border-blue-500 text-white"},l={white:"text-black dark:text-slate-100",light:"text-gray-700 dark:text-slate-400",contrast:"dark:text-white",success:"text-emerald-500",danger:"text-red-500",warning:"text-yellow-500",info:"text-blue-500"},s={white:[l.white,"border-gray-100"].join(" "),light:[l.light,"border-gray-100"].join(" "),contrast:[l.contrast,"border-gray-900 dark:border-slate-100"].join(" "),success:[l.success,"border-emerald-500"].join(" "),danger:[l.danger,"border-red-500"].join(" "),warning:[l.warning,"border-yellow-500"].join(" "),info:[l.info,"border-blue-500"].join(" ")},c=function(e,r,t){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n={ring:{white:"ring-gray-200 dark:ring-gray-500",whiteDark:"ring-gray-200 dark:ring-gray-500",lightDark:"ring-gray-200 dark:ring-gray-500",contrast:"ring-gray-300 dark:ring-gray-400",success:"ring-emerald-300 dark:ring-emerald-700",danger:"ring-red-300 dark:ring-red-700",warning:"ring-yellow-300 dark:ring-yellow-700",info:"ring-blue-300 dark:ring-blue-700"},active:{white:"bg-gray-100",whiteDark:"bg-gray-100 dark:bg-slate-800",lightDark:"bg-gray-200 dark:bg-slate-700",contrast:"bg-gray-700 dark:bg-slate-100",success:"bg-emerald-700 dark:bg-emerald-600",danger:"bg-red-700 dark:bg-red-600",warning:"bg-yellow-700 dark:bg-yellow-600",info:"bg-blue-700 dark:bg-blue-600"},bg:{white:"bg-white text-black",whiteDark:"bg-white text-black dark:bg-slate-900 dark:text-white",lightDark:"bg-gray-100 text-black dark:bg-slate-800 dark:text-white",contrast:"bg-gray-800 text-white dark:bg-white dark:text-black",success:"bg-emerald-600 dark:bg-emerald-500 text-white",danger:"bg-red-600 dark:bg-red-500 text-white",warning:"bg-yellow-600 dark:bg-yellow-500 text-white",info:"bg-blue-600 dark:bg-blue-500 text-white"},bgHover:{white:"hover:bg-gray-100",whiteDark:"hover:bg-gray-100 hover:dark:bg-slate-800",lightDark:"hover:bg-gray-200 hover:dark:bg-slate-700",contrast:"hover:bg-gray-700 hover:dark:bg-slate-100",success:"hover:bg-emerald-700 hover:border-emerald-700 hover:dark:bg-emerald-600 hover:dark:border-emerald-600",danger:"hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600",warning:"hover:bg-yellow-700 hover:border-yellow-700 hover:dark:bg-yellow-600 hover:dark:border-yellow-600",info:"hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600"},borders:{white:"border-white",whiteDark:"border-white dark:border-slate-900",lightDark:"border-gray-100 dark:border-slate-800",contrast:"border-gray-800 dark:border-white",success:"border-emerald-600 dark:border-emerald-500",danger:"border-red-600 dark:border-red-500",warning:"border-yellow-600 dark:border-yellow-500",info:"border-blue-600 dark:border-blue-500"},text:{contrast:"dark:text-slate-100",success:"text-emerald-600 dark:text-emerald-500",danger:"text-red-600 dark:text-red-500",warning:"text-yellow-600 dark:text-yellow-500",info:"text-blue-600 dark:text-blue-500"},outlineHover:{contrast:"hover:bg-gray-800 hover:text-gray-100 hover:dark:bg-slate-100 hover:dark:text-black",success:"hover:bg-emerald-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-emerald-600",danger:"hover:bg-red-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-red-600",warning:"hover:bg-yellow-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-yellow-600",info:"hover:bg-blue-600 hover:text-white hover:dark:text-white hover:dark:border-blue-600"}};if(!n.bg[e])return e;var o=r&&["white","whiteDark","lightDark"].indexOf(e)<0,i=[n.borders[e],n.ring[e]];return a?i.push(n.active[e]):i.push(o?n.text[e]:n.bg[e]),t&&i.push(o?n.outlineHover[e]:n.bgHover[e]),i.join(" ")}},2027:function(e,r,t){"use strict";t.d(r,{C:function(){return o},T:function(){return n}});var a=t(9473),n=a.I0,o=a.v9}},function(e){e.O(0,[664,774,888,179],(function(){return r=123,e(e.s=r);var r}));var r=e.O();_N_E=r}]);