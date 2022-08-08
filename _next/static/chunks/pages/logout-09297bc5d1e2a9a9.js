(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[765],{2048:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var o=n(1461),r=n(7896),a=n(2784),i=n(6277),l=n(3022),s=n(9075),c=n(7591),d=n(5992),u=n(3853),p=n(8270),h=n(7342),v=n(5672);function m(e){return(0,v.Z)("MuiButton",e)}var x=(0,n(9222).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var f=a.createContext({}),b=n(2322);const g=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),S=(0,d.ZP)(p.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,h.Z)(n.color)}`],t[`size${(0,h.Z)(n.size)}`],t[`${n.variant}Size${(0,h.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var n,o;return(0,r.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${x.focusVisible}`]:(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${x.disabled}`]:(0,r.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(n=(o=e.palette).getContrastText)?void 0:n.call(o,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${x.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${x.disabled}`]:{boxShadow:"none"}})),z=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,h.Z)(n.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},y(e)))),Z=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,h.Z)(n.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},y(e))));var w=a.forwardRef((function(e,t){const n=a.useContext(f),c=(0,l.Z)(n,e),d=(0,u.Z)({props:c,name:"MuiButton"}),{children:p,color:v="primary",component:x="button",className:y,disabled:w=!1,disableElevation:C=!1,disableFocusRipple:k=!1,endIcon:I,focusVisibleClassName:j,fullWidth:$=!1,size:R="medium",startIcon:E,type:P,variant:N="text"}=d,W=(0,o.Z)(d,g),_=(0,r.Z)({},d,{color:v,component:x,disabled:w,disableElevation:C,disableFocusRipple:k,fullWidth:$,size:R,type:P,variant:N}),M=(e=>{const{color:t,disableElevation:n,fullWidth:o,size:a,variant:i,classes:l}=e,c={root:["root",i,`${i}${(0,h.Z)(t)}`,`size${(0,h.Z)(a)}`,`${i}Size${(0,h.Z)(a)}`,"inherit"===t&&"colorInherit",n&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,h.Z)(a)}`],endIcon:["endIcon",`iconSize${(0,h.Z)(a)}`]},d=(0,s.Z)(c,m,l);return(0,r.Z)({},l,d)})(_),T=E&&(0,b.jsx)(z,{className:M.startIcon,ownerState:_,children:E}),F=I&&(0,b.jsx)(Z,{className:M.endIcon,ownerState:_,children:I});return(0,b.jsxs)(S,(0,r.Z)({ownerState:_,className:(0,i.Z)(y,n.className),component:x,disabled:w,focusRipple:!k,focusVisibleClassName:(0,i.Z)(M.focusVisible,j),ref:t,type:P},W,{classes:M,children:[T,p,F]}))}))},8746:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/logout",function(){return n(589)}])},3024:function(e,t,n){"use strict";var o=n(2322),r=n(2784),a=n(6897),i=n(5665),l=n(2197),s=n(5801),c=n(5186),d=n(2279),u=n(7550),p=n(3927),h=n(1721),v=n(422),m=n(5873),x=n(4117),f=n(5073),b=n(8675),g=n(5632);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);i=!0);}catch(s){l=!0,r=s}finally{try{i||null==n.return||n.return()}finally{if(l)throw r}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var z=[{name:"Entrenamiento",path:"/training"},{name:"Perfil",path:"/profile"},{name:"Salir",path:"/logout"}];t.Z=function(e){var t=e.title,n=e.children,y=e.back,Z=void 0!==y&&y,w=e.backLink,C=void 0===w?"":w,k=(0,g.useRouter)(),I=S(r.useState(!1),2),j=I[0],$=I[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Z,{position:"static",sx:{mb:2},children:(0,o.jsxs)(i.Z,{children:[Z&&(0,o.jsx)(s.Z,{sx:{mr:2,color:"primary.contrastText"},onClick:function(){return k.push(C)},children:(0,o.jsx)(c.KYK,{})}),(0,o.jsx)(l.Z,{variant:"h6",component:"span",sx:{flexGrow:1},children:t}),(0,o.jsx)(s.Z,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:function(){return $(!0)},children:(0,o.jsx)(c.xXU,{})})]})}),(0,o.jsx)(d.ZP,{anchor:"right",open:j,onClose:function(){return $(!1)},children:(0,o.jsxs)(u.Z,{sx:{width:200},role:"presentation",onClick:function(){return $(!1)},onKeyDown:function(){return $(!1)},children:[(0,o.jsx)(p.Z,{sx:{width:"100%"},justifyContent:"center",alignItems:"center",children:(0,o.jsx)("img",{src:"/assets/logo.webp",alt:"logo",style:{objectFit:"contain"}})}),(0,o.jsx)(h.Z,{}),(0,o.jsx)(v.Z,{children:z.map((function(e,t){return(0,o.jsx)(m.ZP,{disablePadding:!0,children:(0,o.jsx)(x.Z,{onClick:function(){return k.push(e.path)},children:(0,o.jsx)(f.Z,{primary:e.name})})},"nav-".concat(t))}))})]})}),(0,o.jsx)(b.Z,{children:n})]})}},589:function(e,t,n){"use strict";n.r(t);var o=n(4776),r=n.n(o),a=n(2322),i=n(3024),l=n(3927),s=n(2048),c=n(6233),d=n(5632);function u(e,t,n,o,r,a,i){try{var l=e[a](i),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(o,r)}t.default=function(){var e=(0,c.a)(),t=(0,d.useRouter)(),n=function(){var n,o=(n=r().mark((function n(){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.logout(),localStorage.removeItem("access_token"),n.next=4,t.push("/auth/login");case 4:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(o,r){var a=n.apply(e,t);function i(e){u(a,o,r,i,l,"next",e)}function l(e){u(a,o,r,i,l,"throw",e)}i(void 0)}))});return function(){return o.apply(this,arguments)}}();return(0,a.jsx)(i.Z,{title:"Salir",children:(0,a.jsx)(l.Z,{style:{height:"calc(100vh - 100px)"},justifyContent:"center",alignItems:"center",children:(0,a.jsx)(s.Z,{variant:"outlined",color:"primary",onClick:n,children:"Cerrar sesi\xf3n"})})})}}},function(e){e.O(0,[424,800,859,774,888,179],(function(){return t=8746,e(e.s=t);var t}));var t=e.O();_N_E=t}]);