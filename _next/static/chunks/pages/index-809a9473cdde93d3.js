(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7314:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6165)}])},1534:function(e,n,r){"use strict";var t=r(2322),i=r(2784),o=r(6897),a=r(5665),l=r(2197),s=r(5801),c=r(5186),d=r(932),u=r(7550),p=r(3927),h=r(1721),x=r(422),f=r(5873),m=r(4117),v=r(5073),b=r(8675),j=r(5632);function Z(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);a=!0);}catch(s){l=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Z(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Z(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=[{name:"Entrenamiento",path:"/"},{name:"Perfil",path:"/profile"},{name:"Salir",path:"/logout"}];n.Z=function(e){var n=e.title,r=e.children,Z=(0,j.useRouter)(),w=g(i.useState(!1),2),S=w[0],k=w[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Z,{position:"static",sx:{mb:2},children:(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(l.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:n}),(0,t.jsx)(s.Z,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:function(){return k(!0)},children:(0,t.jsx)(c.xXU,{})})]})}),(0,t.jsx)(d.ZP,{anchor:"right",open:S,onClose:function(){return k(!1)},children:(0,t.jsxs)(u.Z,{sx:{width:250},role:"presentation",onClick:function(){return k(!1)},onKeyDown:function(){return k(!1)},children:[(0,t.jsx)(p.Z,{sx:{width:"100%"},justifyContent:"center",alignItems:"center",children:(0,t.jsx)("img",{src:"/assets/logo.webp",alt:"logo",style:{objectFit:"contain"}})}),(0,t.jsx)(h.Z,{}),(0,t.jsx)(x.Z,{children:y.map((function(e,n){return(0,t.jsx)(f.ZP,{disablePadding:!0,children:(0,t.jsx)(m.Z,{onClick:function(){return Z.push(e.path)},children:(0,t.jsx)(v.Z,{primary:e.name})})},"nav-".concat(n))}))})]})}),(0,t.jsx)(b.Z,{children:r})]})}},6165:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return te}});var t=r(2322),i=r(558),o=r(794),a=r(7550),l=r(1721),s=r(422),c=r(5873),d=r(4117),u=r(5073),p=r(2784),h=r.t(p,2),x=r(3927),f=r(2841),m=function(){return(0,t.jsx)(x.Z,{justifyContent:"center",alignItems:"center",style:{height:"calc(100vh - 100px)"},children:(0,t.jsx)(f.Z,{})})},v=r(2966),b=r(2197),j=r(1461),Z=r(7896),g=r(6277),y=r(9075);let w=0;const S=h.useId;function k(e){if(void 0!==S){const n=S();return null!=e?e:n}return function(e){const[n,r]=p.useState(e),t=e||n;return p.useEffect((()=>{null==n&&(w+=1,r(`mui-${w}`))}),[n]),t}(e)}var W=r(7342),P=r(6060),C=r(7055),D=r(5744),E=r(3853),O=r(5992),$=r(5672);function A(e){return(0,$.Z)("MuiDialog",e)}var B=(0,r(9222).Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var M=(0,p.createContext)({}),_=r(8388),N=r(7746);const F=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],T=(0,O.ZP)(_.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,n)=>n.backdrop})({zIndex:-1}),I=(0,O.ZP)(P.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,n)=>n.root})({"@media print":{position:"absolute !important"}}),R=(0,O.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.container,n[`scroll${(0,W.Z)(r.scroll)}`]]}})((({ownerState:e})=>(0,Z.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}))),X=(0,O.ZP)(D.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.paper,n[`scrollPaper${(0,W.Z)(r.scroll)}`],n[`paperWidth${(0,W.Z)(String(r.maxWidth))}`],r.fullWidth&&n.paperFullWidth,r.fullScreen&&n.paperFullScreen]}})((({theme:e,ownerState:n})=>(0,Z.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===n.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===n.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!n.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===n.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`${e.breakpoints.values.xs}${e.breakpoints.unit}`,[`&.${B.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},n.maxWidth&&"xs"!==n.maxWidth&&{maxWidth:`${e.breakpoints.values[n.maxWidth]}${e.breakpoints.unit}`,[`&.${B.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[n.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},n.fullWidth&&{width:"calc(100% - 64px)"},n.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${B.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})));var K=p.forwardRef((function(e,n){const r=(0,E.Z)({props:e,name:"MuiDialog"}),i=(0,N.Z)(),o={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{"aria-describedby":a,"aria-labelledby":l,BackdropComponent:s,BackdropProps:c,children:d,className:u,disableEscapeKeyDown:h=!1,fullScreen:x=!1,fullWidth:f=!1,maxWidth:m="sm",onBackdropClick:v,onClose:b,open:w,PaperComponent:S=D.Z,PaperProps:P={},scroll:O="paper",TransitionComponent:$=C.Z,transitionDuration:B=o,TransitionProps:_}=r,K=(0,j.Z)(r,F),z=(0,Z.Z)({},r,{disableEscapeKeyDown:h,fullScreen:x,fullWidth:f,maxWidth:m,scroll:O}),Y=(e=>{const{classes:n,scroll:r,maxWidth:t,fullWidth:i,fullScreen:o}=e,a={root:["root"],container:["container",`scroll${(0,W.Z)(r)}`],paper:["paper",`paperScroll${(0,W.Z)(r)}`,`paperWidth${(0,W.Z)(String(t))}`,i&&"paperFullWidth",o&&"paperFullScreen"]};return(0,y.Z)(a,A,n)})(z),G=p.useRef(),U=k(l),H=p.useMemo((()=>({titleId:U})),[U]);return(0,t.jsx)(I,(0,Z.Z)({className:(0,g.Z)(Y.root,u),closeAfterTransition:!0,components:{Backdrop:T},componentsProps:{backdrop:(0,Z.Z)({transitionDuration:B,as:s},c)},disableEscapeKeyDown:h,onClose:b,open:w,ref:n,onClick:e=>{G.current&&(G.current=null,v&&v(e),b&&b(e,"backdropClick"))},ownerState:z},K,{children:(0,t.jsx)($,(0,Z.Z)({appear:!0,in:w,timeout:B,role:"presentation"},_,{children:(0,t.jsx)(R,{className:(0,g.Z)(Y.container),onMouseDown:e=>{G.current=e.target===e.currentTarget},ownerState:z,children:(0,t.jsx)(X,(0,Z.Z)({as:S,elevation:24,role:"dialog","aria-describedby":a,"aria-labelledby":U},P,{className:(0,g.Z)(Y.paper,P.className),ownerState:z,children:(0,t.jsx)(M.Provider,{value:H,children:d})}))})}))}))})),z=r(6897),Y=r(5665),G=r(5801),U=r(5186),H=r(1192),q=r(8675);function L(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var J=p.forwardRef((function(e,n){return(0,t.jsx)(H.Z,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){L(e,n,r[n])}))}return e}({direction:"up",ref:n},e))})),Q=function(e){var n=e.exercise,r=e.open,i=e.setOpen,o=function(){i(!1)};return(0,t.jsx)("div",{children:(0,t.jsxs)(K,{fullScreen:!0,open:r,onClose:o,TransitionComponent:J,children:[(0,t.jsx)(z.Z,{sx:{position:"relative"},children:(0,t.jsxs)(Y.Z,{children:[(0,t.jsx)(b.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:"Ejercicio"}),(0,t.jsx)(G.Z,{edge:"start",color:"inherit",onClick:o,"aria-label":"close",children:(0,t.jsx)(U.FU5,{})})]})}),(0,t.jsxs)(q.Z,{maxWidth:"md",children:[(0,t.jsx)(b.Z,{variant:"h5",sx:{textAlign:"center",m:2},children:null===n||void 0===n?void 0:n.name}),(null===n||void 0===n?void 0:n.video)&&(0,t.jsxs)("video",{width:"100%",controls:!0,loop:!0,children:[(0,t.jsx)("source",{src:n.video,type:"video/mp4"}),"Your browser does not support the video tag."]})]})]})})};function V(){var e,n,r=(e=["\n    query Profile {\n        profile {\n            trainingplan {\n                name\n                days {\n                    name\n                    exercises {\n                        reps\n                        sets\n                        exercise {\n                            _id\n                            name\n                            nameEs\n                            muscleGroup\n                            photo\n                            video\n                        }\n                    }\n                }\n            }\n        }\n    }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return V=function(){return r},r}var ee=(0,i.Ps)(V()),ne=function(){var e=(0,p.useState)(),n=e[0],r=e[1],i=(0,p.useState)(!1),h=i[0],f=i[1],j=(0,p.useState)(),Z=j[0],g=j[1],y=(0,o.a)(ee),w=y.data,S=y.loading,k=y.error;if((0,p.useEffect)((function(){if(!S){var e=w.profile.trainingplan;g(e)}}),[S]),S)return(0,t.jsx)(m,{});if(k)return(0,t.jsx)(v.Z,{severity:"warning",children:k.message});if(!Z)return(0,t.jsx)(v.Z,{severity:"warning",children:"No Data"});return(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(Q,{exercise:n,open:h,setOpen:f}),(0,t.jsx)(b.Z,{variant:"h5",sx:{textAlign:"center",p:2},children:Z.name}),(0,t.jsx)(l.Z,{sx:{mb:2}}),Z.days.map((function(e,n){return(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(b.Z,{variant:"h6",children:e.name}),(0,t.jsx)(s.Z,{children:e.exercises.map((function(e,i){return(0,t.jsx)(c.ZP,{disablePadding:!0,children:(0,t.jsx)(d.Z,{disableGutters:!0,onClick:function(){return function(e){r(e),f(!0)}(e.exercise)},children:(0,t.jsx)(u.Z,{children:(0,t.jsxs)(x.Z,{direction:"row",justifyContent:"space-between",spacing:0,children:[(0,t.jsx)("div",{children:e.exercise.nameEs||e.exercise.name}),(0,t.jsxs)("div",{children:[e.sets," X ",e.reps]})]})})})},"day-".concat(n,"-exercise-").concat(i))}))}),(0,t.jsx)(l.Z,{sx:{mb:2}})]},"day-".concat(n))}))]})},re=r(1534),te=function(){return(0,t.jsx)(re.Z,{title:"Entrenamiento",children:(0,t.jsx)(ne,{})})}}},function(e){e.O(0,[424,800,775,966,774,888,179],(function(){return n=7314,e(e.s=n);var n}));var n=e.O();_N_E=n}]);