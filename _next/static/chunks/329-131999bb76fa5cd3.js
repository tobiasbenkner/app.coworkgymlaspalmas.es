"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[329],{8287:function(e,t,o){o.d(t,{Z:function(){return S}});var r=o(1461),l=o(7896),n=o(2784),i=o(6277),a=o(9075),s=o(8270),c=o(7342),d=o(3853),u=o(5992),f=o(5672);function b(e){return(0,f.Z)("MuiTab",e)}var h=(0,o(9222).Z)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),p=o(2322);const m=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],v=(0,u.ZP)(s.Z,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.label&&o.icon&&t.labelIcon,t[`textColor${(0,c.Z)(o.textColor)}`],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped]}})((({theme:e,ownerState:t})=>(0,l.Z)({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:"top"===t.iconPosition||"bottom"===t.iconPosition?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${h.iconWrapper}`]:(0,l.Z)({},"top"===t.iconPosition&&{marginBottom:6},"bottom"===t.iconPosition&&{marginTop:6},"start"===t.iconPosition&&{marginRight:e.spacing(1)},"end"===t.iconPosition&&{marginLeft:e.spacing(1)})},"inherit"===t.textColor&&{color:"inherit",opacity:.6,[`&.${h.selected}`]:{opacity:1},[`&.${h.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"primary"===t.textColor&&{color:(e.vars||e).palette.text.secondary,[`&.${h.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${h.disabled}`]:{color:(e.vars||e).palette.text.disabled}},"secondary"===t.textColor&&{color:(e.vars||e).palette.text.secondary,[`&.${h.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${h.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)})));var S=n.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiTab"}),{className:s,disabled:u=!1,disableFocusRipple:f=!1,fullWidth:h,icon:S,iconPosition:w="top",indicator:x,label:g,onChange:y,onClick:Z,onFocus:C,selected:B,selectionFollowsFocus:M,textColor:R="inherit",value:z,wrapped:W=!1}=o,N=(0,r.Z)(o,m),E=(0,l.Z)({},o,{disabled:u,disableFocusRipple:f,selected:B,icon:!!S,iconPosition:w,label:!!g,fullWidth:h,textColor:R,wrapped:W}),T=(e=>{const{classes:t,textColor:o,fullWidth:r,wrapped:l,icon:n,label:i,selected:s,disabled:d}=e,u={root:["root",n&&i&&"labelIcon",`textColor${(0,c.Z)(o)}`,r&&"fullWidth",l&&"wrapped",s&&"selected",d&&"disabled"],iconWrapper:["iconWrapper"]};return(0,a.Z)(u,b,t)})(E),k=S&&g&&n.isValidElement(S)?n.cloneElement(S,{className:(0,i.Z)(T.iconWrapper,S.props.className)}):S;return(0,p.jsxs)(v,(0,l.Z)({focusRipple:!f,className:(0,i.Z)(T.root,s),ref:t,role:"tab","aria-selected":B,disabled:u,onClick:e=>{!B&&y&&y(e,z),Z&&Z(e)},onFocus:e=>{M&&!B&&y&&y(e,z),C&&C(e)},ownerState:E,tabIndex:B?0:-1},N,{children:["top"===w||"start"===w?(0,p.jsxs)(n.Fragment,{children:[k,g]}):(0,p.jsxs)(n.Fragment,{children:[g,k]}),x]}))}))},1962:function(e,t,o){o.d(t,{Z:function(){return O}});var r=o(1461),l=o(7896),n=o(2784),i=(o(8570),o(6277)),a=o(9075),s=o(5992),c=o(3853),d=o(7746),u=o(9673);let f;function b(){if(f)return f;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),f="reverse",e.scrollLeft>0?f="default":(e.scrollLeft=1,0===e.scrollLeft&&(f="negative")),document.body.removeChild(e),f}function h(e,t){const o=e.scrollLeft;if("rtl"!==t)return o;switch(b()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}function p(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var m=o(8043),v=o(2322);const S=["onChange"],w={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var x=o(9798),g=(0,x.Z)((0,v.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),y=(0,x.Z)((0,v.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),Z=o(8270),C=o(5672),B=o(9222);function M(e){return(0,C.Z)("MuiTabScrollButton",e)}var R,z,W=(0,B.Z)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]);const N=["className","direction","orientation","disabled"],E=(0,s.ZP)(Z.Z,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.orientation&&t[o.orientation]]}})((({ownerState:e})=>(0,l.Z)({width:40,flexShrink:0,opacity:.8,[`&.${W.disabled}`]:{opacity:0}},"vertical"===e.orientation&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})));var T=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiTabScrollButton"}),{className:n,direction:s}=o,u=(0,r.Z)(o,N),f="rtl"===(0,d.Z)().direction,b=(0,l.Z)({isRtl:f},o),h=(e=>{const{classes:t,orientation:o,disabled:r}=e,l={root:["root",o,r&&"disabled"]};return(0,a.Z)(l,M,t)})(b);return(0,v.jsx)(E,(0,l.Z)({component:"div",className:(0,i.Z)(h.root,n),ref:t,role:null,ownerState:b,tabIndex:null},u,{children:"left"===s?R||(R=(0,v.jsx)(g,{fontSize:"small"})):z||(z=(0,v.jsx)(y,{fontSize:"small"}))}))})),k=o(8647);function P(e){return(0,C.Z)("MuiTabs",e)}var L=(0,B.Z)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),F=o(6855).Z;const $=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],I=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,j=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,A=(e,t,o)=>{let r=!1,l=o(e,t);for(;l;){if(l===e.firstChild){if(r)return;r=!0}const t=l.disabled||"true"===l.getAttribute("aria-disabled");if(l.hasAttribute("tabindex")&&!t)return void l.focus();l=o(e,l)}},H=(0,s.ZP)("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${L.scrollButtons}`]:t.scrollButtons},{[`& .${L.scrollButtons}`]:o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,o.vertical&&t.vertical]}})((({ownerState:e,theme:t})=>(0,l.Z)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${L.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}}))),X=(0,s.ZP)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})((({ownerState:e})=>(0,l.Z)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"}))),D=(0,s.ZP)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})((({ownerState:e})=>(0,l.Z)({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"}))),Y=(0,s.ZP)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})((({ownerState:e,theme:t})=>(0,l.Z)({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},"primary"===e.indicatorColor&&{backgroundColor:(t.vars||t).palette.primary.main},"secondary"===e.indicatorColor&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0}))),V=(0,s.ZP)((function(e){const{onChange:t}=e,o=(0,r.Z)(e,S),i=n.useRef(),a=n.useRef(null),s=()=>{i.current=a.current.offsetHeight-a.current.clientHeight};return n.useEffect((()=>{const e=(0,u.Z)((()=>{const e=i.current;s(),e!==i.current&&t(i.current)})),o=(0,m.Z)(a.current);return o.addEventListener("resize",e),()=>{e.clear(),o.removeEventListener("resize",e)}}),[t]),n.useEffect((()=>{s(),t(i.current)}),[t]),(0,v.jsx)("div",(0,l.Z)({style:w,ref:a},o))}),{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),_={};var O=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiTabs"}),s=(0,d.Z)(),f="rtl"===s.direction,{"aria-label":S,"aria-labelledby":w,action:x,centered:g=!1,children:y,className:Z,component:C="div",allowScrollButtonsMobile:B=!1,indicatorColor:M="primary",onChange:R,orientation:z="horizontal",ScrollButtonComponent:W=T,scrollButtons:N="auto",selectionFollowsFocus:E,TabIndicatorProps:L={},TabScrollButtonProps:O={},textColor:q="primary",value:K,variant:G="standard",visibleScrollbar:U=!1}=o,J=(0,r.Z)(o,$),Q="scrollable"===G,ee="vertical"===z,te=ee?"scrollTop":"scrollLeft",oe=ee?"top":"left",re=ee?"bottom":"right",le=ee?"clientHeight":"clientWidth",ne=ee?"height":"width",ie=(0,l.Z)({},o,{component:C,allowScrollButtonsMobile:B,indicatorColor:M,orientation:z,vertical:ee,scrollButtons:N,textColor:q,variant:G,visibleScrollbar:U,fixed:!Q,hideScrollbar:Q&&!U,scrollableX:Q&&!ee,scrollableY:Q&&ee,centered:g&&!Q,scrollButtonsHideMobile:!B}),ae=(e=>{const{vertical:t,fixed:o,hideScrollbar:r,scrollableX:l,scrollableY:n,centered:i,scrollButtonsHideMobile:s,classes:c}=e,d={root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",r&&"hideScrollbar",l&&"scrollableX",n&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",i&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",s&&"scrollButtonsHideMobile"],scrollableX:[l&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]};return(0,a.Z)(d,P,c)})(ie);const[se,ce]=n.useState(!1),[de,ue]=n.useState(_),[fe,be]=n.useState({start:!1,end:!1}),[he,pe]=n.useState({overflow:"hidden",scrollbarWidth:0}),me=new Map,ve=n.useRef(null),Se=n.useRef(null),we=()=>{const e=ve.current;let t,o;if(e){const o=e.getBoundingClientRect();t={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollLeftNormalized:h(e,s.direction),scrollWidth:e.scrollWidth,top:o.top,bottom:o.bottom,left:o.left,right:o.right}}if(e&&!1!==K){const e=Se.current.children;if(e.length>0){const t=e[me.get(K)];0,o=t?t.getBoundingClientRect():null}}return{tabsMeta:t,tabMeta:o}},xe=(0,k.Z)((()=>{const{tabsMeta:e,tabMeta:t}=we();let o,r=0;if(ee)o="top",t&&e&&(r=t.top-e.top+e.scrollTop);else if(o=f?"right":"left",t&&e){const l=f?e.scrollLeftNormalized+e.clientWidth-e.scrollWidth:e.scrollLeft;r=(f?-1:1)*(t[o]-e[o]+l)}const l={[o]:r,[ne]:t?t[ne]:0};if(isNaN(de[o])||isNaN(de[ne]))ue(l);else{const e=Math.abs(de[o]-l[o]),t=Math.abs(de[ne]-l[ne]);(e>=1||t>=1)&&ue(l)}})),ge=(e,{animation:t=!0}={})=>{t?function(e,t,o,r={},l=(()=>{})){const{ease:n=p,duration:i=300}=r;let a=null;const s=t[e];let c=!1;const d=()=>{c=!0},u=r=>{if(c)return void l(new Error("Animation cancelled"));null===a&&(a=r);const d=Math.min(1,(r-a)/i);t[e]=n(d)*(o-s)+s,d>=1?requestAnimationFrame((()=>{l(null)})):requestAnimationFrame(u)};s===o?l(new Error("Element already at target position")):requestAnimationFrame(u)}(te,ve.current,e,{duration:s.transitions.duration.standard}):ve.current[te]=e},ye=e=>{let t=ve.current[te];ee?t+=e:(t+=e*(f?-1:1),t*=f&&"reverse"===b()?-1:1),ge(t)},Ze=()=>{const e=ve.current[le];let t=0;const o=Array.from(Se.current.children);for(let r=0;r<o.length;r+=1){const l=o[r];if(t+l[le]>e){0===r&&(t=e);break}t+=l[le]}return t},Ce=()=>{ye(-1*Ze())},Be=()=>{ye(Ze())},Me=n.useCallback((e=>{pe({overflow:null,scrollbarWidth:e})}),[]),Re=(0,k.Z)((e=>{const{tabsMeta:t,tabMeta:o}=we();if(o&&t)if(o[oe]<t[oe]){const r=t[te]+(o[oe]-t[oe]);ge(r,{animation:e})}else if(o[re]>t[re]){const r=t[te]+(o[re]-t[re]);ge(r,{animation:e})}})),ze=(0,k.Z)((()=>{if(Q&&!1!==N){const{scrollTop:e,scrollHeight:t,clientHeight:o,scrollWidth:r,clientWidth:l}=ve.current;let n,i;if(ee)n=e>1,i=e<t-o-1;else{const e=h(ve.current,s.direction);n=f?e<r-l-1:e>1,i=f?e>1:e<r-l-1}n===fe.start&&i===fe.end||be({start:n,end:i})}}));n.useEffect((()=>{const e=(0,u.Z)((()=>{ve.current&&(xe(),ze())})),t=(0,m.Z)(ve.current);let o;return t.addEventListener("resize",e),"undefined"!==typeof ResizeObserver&&(o=new ResizeObserver(e),Array.from(Se.current.children).forEach((e=>{o.observe(e)}))),()=>{e.clear(),t.removeEventListener("resize",e),o&&o.disconnect()}}),[xe,ze]);const We=n.useMemo((()=>(0,u.Z)((()=>{ze()}))),[ze]);n.useEffect((()=>()=>{We.clear()}),[We]),n.useEffect((()=>{ce(!0)}),[]),n.useEffect((()=>{xe(),ze()})),n.useEffect((()=>{Re(_!==de)}),[Re,de]),n.useImperativeHandle(x,(()=>({updateIndicator:xe,updateScrollButtons:ze})),[xe,ze]);const Ne=(0,v.jsx)(Y,(0,l.Z)({},L,{className:(0,i.Z)(ae.indicator,L.className),ownerState:ie,style:(0,l.Z)({},de,L.style)}));let Ee=0;const Te=n.Children.map(y,(e=>{if(!n.isValidElement(e))return null;const t=void 0===e.props.value?Ee:e.props.value;me.set(t,Ee);const o=t===K;return Ee+=1,n.cloneElement(e,(0,l.Z)({fullWidth:"fullWidth"===G,indicator:o&&!se&&Ne,selected:o,selectionFollowsFocus:E,onChange:R,textColor:q,value:t},1!==Ee||!1!==K||e.props.tabIndex?{}:{tabIndex:0}))})),ke=(()=>{const e={};e.scrollbarSizeListener=Q?(0,v.jsx)(V,{onChange:Me,className:(0,i.Z)(ae.scrollableX,ae.hideScrollbar)}):null;const t=fe.start||fe.end,o=Q&&("auto"===N&&t||!0===N);return e.scrollButtonStart=o?(0,v.jsx)(W,(0,l.Z)({orientation:z,direction:f?"right":"left",onClick:Ce,disabled:!fe.start},O,{className:(0,i.Z)(ae.scrollButtons,O.className)})):null,e.scrollButtonEnd=o?(0,v.jsx)(W,(0,l.Z)({orientation:z,direction:f?"left":"right",onClick:Be,disabled:!fe.end},O,{className:(0,i.Z)(ae.scrollButtons,O.className)})):null,e})();return(0,v.jsxs)(H,(0,l.Z)({className:(0,i.Z)(ae.root,Z),ownerState:ie,ref:t,as:C},J,{children:[ke.scrollButtonStart,ke.scrollbarSizeListener,(0,v.jsxs)(X,{className:ae.scroller,ownerState:ie,style:{overflow:he.overflow,[ee?"margin"+(f?"Left":"Right"):"marginBottom"]:U?void 0:-he.scrollbarWidth},ref:ve,onScroll:We,children:[(0,v.jsx)(D,{"aria-label":S,"aria-labelledby":w,"aria-orientation":"vertical"===z?"vertical":null,className:ae.flexContainer,ownerState:ie,onKeyDown:e=>{const t=Se.current,o=F(t).activeElement;if("tab"!==o.getAttribute("role"))return;let r="horizontal"===z?"ArrowLeft":"ArrowUp",l="horizontal"===z?"ArrowRight":"ArrowDown";switch("horizontal"===z&&f&&(r="ArrowRight",l="ArrowLeft"),e.key){case r:e.preventDefault(),A(t,o,j);break;case l:e.preventDefault(),A(t,o,I);break;case"Home":e.preventDefault(),A(t,null,I);break;case"End":e.preventDefault(),A(t,null,j)}},ref:Se,role:"tablist",children:Te}),se&&Ne]}),ke.scrollButtonEnd]}))}))},9798:function(e,t,o){o.d(t,{Z:function(){return S}});var r=o(7896),l=o(2784),n=o(1461),i=o(6277),a=o(9075),s=o(7342),c=o(3853),d=o(5992),u=o(5672);function f(e){return(0,u.Z)("MuiSvgIcon",e)}(0,o(9222).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var b=o(2322);const h=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],p=(0,d.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,"inherit"!==o.color&&t[`color${(0,s.Z)(o.color)}`],t[`fontSize${(0,s.Z)(o.fontSize)}`]]}})((({theme:e,ownerState:t})=>{var o,r,l,n,i,a,s,c,d,u,f,b,h,p,m,v,S;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(o=e.transitions)||null==(r=o.create)?void 0:r.call(o,"fill",{duration:null==(l=e.transitions)||null==(n=l.duration)?void 0:n.shorter}),fontSize:{inherit:"inherit",small:(null==(i=e.typography)||null==(a=i.pxToRem)?void 0:a.call(i,20))||"1.25rem",medium:(null==(s=e.typography)||null==(c=s.pxToRem)?void 0:c.call(s,24))||"1.5rem",large:(null==(d=e.typography)||null==(u=d.pxToRem)?void 0:u.call(d,35))||"2.1875"}[t.fontSize],color:null!=(f=null==(b=(e.vars||e).palette)||null==(h=b[t.color])?void 0:h.main)?f:{action:null==(p=(e.vars||e).palette)||null==(m=p.action)?void 0:m.active,disabled:null==(v=(e.vars||e).palette)||null==(S=v.action)?void 0:S.disabled,inherit:void 0}[t.color]}})),m=l.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiSvgIcon"}),{children:l,className:d,color:u="inherit",component:m="svg",fontSize:v="medium",htmlColor:S,inheritViewBox:w=!1,titleAccess:x,viewBox:g="0 0 24 24"}=o,y=(0,n.Z)(o,h),Z=(0,r.Z)({},o,{color:u,component:m,fontSize:v,instanceFontSize:e.fontSize,inheritViewBox:w,viewBox:g}),C={};w||(C.viewBox=g);const B=(e=>{const{color:t,fontSize:o,classes:r}=e,l={root:["root","inherit"!==t&&`color${(0,s.Z)(t)}`,`fontSize${(0,s.Z)(o)}`]};return(0,a.Z)(l,f,r)})(Z);return(0,b.jsxs)(p,(0,r.Z)({as:m,className:(0,i.Z)(B.root,d),ownerState:Z,focusable:"false",color:S,"aria-hidden":!x||void 0,role:x?"img":void 0,ref:t},C,y,{children:[l,x?(0,b.jsx)("title",{children:x}):null]}))}));m.muiName="SvgIcon";var v=m;function S(e,t){const o=(o,l)=>(0,b.jsx)(v,(0,r.Z)({"data-testid":`${t}Icon`,ref:l},o,{children:e}));return o.muiName=v.muiName,l.memo(l.forwardRef(o))}},6866:function(e,t){var o,r=Symbol.for("react.element"),l=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen");function v(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case n:case a:case i:case f:case b:return e;default:switch(e=e&&e.$$typeof){case d:case c:case u:case p:case h:case s:return e;default:return t}}case l:return t}}}o=Symbol.for("react.module.reference")},8570:function(e,t,o){o(6866)}}]);