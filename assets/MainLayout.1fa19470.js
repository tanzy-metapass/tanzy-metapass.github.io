import{c as C,a as h,h as y,d as P,u as Ze,e as et,r as p,i as ze,s as Ee,f as He,g as L,P as tt,p as we,n as ie,j as xe,w as B,o as O,k as $,l as nt,m as W,q as lt,t as ot,T as at,v as it,Q as Pe,x as K,y as rt,z as ut,A as st,B as Me,C as Re,D as A,E as $e,F as se,G as Qe,H as ct,I as N,J as dt,K as ft,_ as vt,L as ht,M as mt,N as Q,O as j,R as k,S as gt,U as S,V as I,W as M,X as bt,Y as yt,Z as te}from"./index.54446c61.js";import{u as ce,a as de,b as wt,c as xt,d as qt,e as pt}from"./useMetaMask.39d0c9bc.js";import{p as qe,g as U,u as kt,a as Ae,b as Bt,c as St,d as Ct,e as _t,f as Tt,h as Lt,i as zt,r as Et,j as pe,k as Oe,l as Ht,m as Pt,n as Mt,o as Rt,t as $t,C as ne}from"./text.0c00188c.js";var Qt=C({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const l=h(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>y("div",{class:l.value},P(o.default))}}),le=C({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const l=h(()=>parseInt(e.lines,10)),t=h(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),n=h(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>y("div",{style:n.value,class:t.value},P(o.default))}}),oe=C({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const l=h(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>y("div",{class:l.value},P(o.default))}}),ae=C({name:"QItem",props:{...ce,...Ze,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:l}){const{proxy:{$q:t}}=L(),n=de(e,t),{hasLink:u,linkAttrs:a,linkClass:v,linkTag:c,navigateOnClick:r}=et(),d=p(null),b=p(null),x=h(()=>e.clickable===!0||u.value===!0||e.tag==="label"),i=h(()=>e.disable!==!0&&x.value===!0),w=h(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(n.value===!0?" q-item--dark":"")+(u.value===!0&&e.active===null?v.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(i.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),z=h(()=>{if(e.insetLevel===void 0)return null;const m=t.lang.rtl===!0?"Right":"Left";return{["padding"+m]:16+e.insetLevel*56+"px"}});function E(m){i.value===!0&&(b.value!==null&&(m.qKeyEvent!==!0&&document.activeElement===d.value?b.value.focus():document.activeElement===b.value&&d.value.focus()),r(m))}function _(m){if(i.value===!0&&ze(m,13)===!0){Ee(m),m.qKeyEvent=!0;const s=new MouseEvent("click",m);s.qKeyEvent=!0,d.value.dispatchEvent(s)}l("keyup",m)}function f(){const m=He(o.default,[]);return i.value===!0&&m.unshift(y("div",{class:"q-focus-helper",tabindex:-1,ref:b})),m}return()=>{const m={ref:d,class:w.value,style:z.value,role:"listitem",onClick:E,onKeyup:_};return i.value===!0?(m.tabindex=e.tabindex||"0",Object.assign(m,a.value)):x.value===!0&&(m["aria-disabled"]="true"),y(c.value,m,f())}}}),At=C({name:"QList",props:{...ce,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:o}){const l=L(),t=de(e,l.proxy.$q),n=h(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(t.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>y("div",{class:n.value,role:"list"},P(o.default))}}),Ot=C({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:o}){const l=h(()=>{const t=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(n=>e[n]===!0).map(n=>`q-btn-group--${n}`).join(" ");return`q-btn-group row no-wrap${t.length>0?" "+t:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>y("div",{class:l.value},P(o.default))}});function Wt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),tt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Dt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Vt({showing:e,avoidEmit:o,configureAnchorEl:l}){const{props:t,proxy:n,emit:u}=L(),a=p(null);let v;function c(i){return a.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const r={};l===void 0&&(Object.assign(r,{hide(i){n.hide(i)},toggle(i){n.toggle(i),i.qAnchorHandled=!0},toggleKey(i){ze(i,13)===!0&&r.toggle(i)},contextClick(i){n.hide(i),we(i),ie(()=>{n.show(i),i.qAnchorHandled=!0})},prevent:we,mobileTouch(i){if(r.mobileCleanup(i),c(i)!==!0)return;n.hide(i),a.value.classList.add("non-selectable");const w=i.target;xe(r,"anchor",[[w,"touchmove","mobileCleanup","passive"],[w,"touchend","mobileCleanup","passive"],[w,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),v=setTimeout(()=>{n.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){a.value.classList.remove("non-selectable"),clearTimeout(v),e.value===!0&&i!==void 0&&Wt()}}),l=function(i=t.contextMenu){if(t.noParentEvent===!0||a.value===null)return;let w;i===!0?n.$q.platform.is.mobile===!0?w=[[a.value,"touchstart","mobileTouch","passive"]]:w=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:w=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],xe(r,"anchor",w)});function d(){nt(r,"anchor")}function b(i){for(a.value=i;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;l()}function x(){if(t.target===!1||t.target===""||n.$el.parentNode===null)a.value=null;else if(t.target===!0)b(n.$el.parentNode);else{let i=t.target;if(typeof t.target=="string")try{i=document.querySelector(t.target)}catch{i=void 0}i!=null?(a.value=i.$el||i,l()):(a.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return B(()=>t.contextMenu,i=>{a.value!==null&&(d(),l(i))}),B(()=>t.target,()=>{a.value!==null&&d(),x()}),B(()=>t.noParentEvent,i=>{a.value!==null&&(i===!0?d():l())}),O(()=>{x(),o!==!0&&t.modelValue===!0&&a.value===null&&u("update:modelValue",!1)}),$(()=>{clearTimeout(v),d()}),{anchorEl:a,canShow:c,anchorEvents:r}}function Ft(e,o){const l=p(null);let t;function n(v,c){const r=`${c!==void 0?"add":"remove"}EventListener`,d=c!==void 0?c:t;v!==window&&v[r]("scroll",d,W.passive),window[r]("scroll",d,W.passive),t=c}function u(){l.value!==null&&(n(l.value),l.value=null)}const a=B(()=>e.noParentEvent,()=>{l.value!==null&&(u(),o())});return $(a),{localScrollTarget:l,unconfigureScrollTarget:u,changeScrollEvent:n}}let We;const{notPassiveCapture:G}=W,R=[];function X(e){clearTimeout(We);const o=e.target;if(o===void 0||o.nodeType===8||o.classList.contains("no-pointer-events")===!0)return;let l=qe.length-1;for(;l>=0;){const t=qe[l].$;if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;l--}for(let t=R.length-1;t>=0;t--){const n=R[t];if((n.anchorEl.value===null||n.anchorEl.value.contains(o)===!1)&&(o===document.body||n.innerRef.value!==null&&n.innerRef.value.contains(o)===!1))e.qClickOutside=!0,n.onClickOutside(e);else return}}function jt(e){R.push(e),R.length===1&&(document.addEventListener("mousedown",X,G),document.addEventListener("touchstart",X,G))}function ke(e){const o=R.findIndex(l=>l===e);o>-1&&(R.splice(o,1),R.length===0&&(clearTimeout(We),document.removeEventListener("mousedown",X,G),document.removeEventListener("touchstart",X,G)))}let Be,Se;function Ce(e){const o=e.split(" ");return o.length!==2?!1:["top","center","bottom"].includes(o[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(o[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function It(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const re={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{re[`${e}#ltr`]=e,re[`${e}#rtl`]=e});function _e(e,o){const l=e.split(" ");return{vertical:l[0],horizontal:re[`${l[1]}#${o===!0?"rtl":"ltr"}`]}}function Nt(e,o){let{top:l,left:t,right:n,bottom:u,width:a,height:v}=e.getBoundingClientRect();return o!==void 0&&(l-=o[1],t-=o[0],u+=o[1],n+=o[0],a+=o[0],v+=o[1]),{top:l,left:t,right:n,bottom:u,width:a,height:v,middle:t+(n-t)/2,center:l+(u-l)/2}}function Kt(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function Ut(e){if(lt.is.ios===!0&&window.visualViewport!==void 0){const v=document.body.style,{offsetLeft:c,offsetTop:r}=window.visualViewport;c!==Be&&(v.setProperty("--q-pe-left",c+"px"),Be=c),r!==Se&&(v.setProperty("--q-pe-top",r+"px"),Se=r)}let o;const{scrollLeft:l,scrollTop:t}=e.el;if(e.absoluteOffset===void 0)o=Nt(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:v,left:c}=e.anchorEl.getBoundingClientRect(),r=v+e.absoluteOffset.top,d=c+e.absoluteOffset.left;o={top:r,left:d,width:1,height:1,right:d+1,center:r,middle:d,bottom:r+1}}let n={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(n.minWidth=o.width+"px",e.cover===!0&&(n.minHeight=o.height+"px")),Object.assign(e.el.style,n);const u=Kt(e.el),a={top:o[e.anchorOrigin.vertical]-u[e.selfOrigin.vertical],left:o[e.anchorOrigin.horizontal]-u[e.selfOrigin.horizontal]};Gt(a,o,u,e.anchorOrigin,e.selfOrigin),n={top:a.top+"px",left:a.left+"px"},a.maxHeight!==void 0&&(n.maxHeight=a.maxHeight+"px",o.height>a.maxHeight&&(n.minHeight=n.maxHeight)),a.maxWidth!==void 0&&(n.maxWidth=a.maxWidth+"px",o.width>a.maxWidth&&(n.minWidth=n.maxWidth)),Object.assign(e.el.style,n),e.el.scrollTop!==t&&(e.el.scrollTop=t),e.el.scrollLeft!==l&&(e.el.scrollLeft=l)}function Gt(e,o,l,t,n){const u=l.bottom,a=l.right,v=U(),c=window.innerHeight-v,r=document.body.clientWidth;if(e.top<0||e.top+u>c)if(n.vertical==="center")e.top=o[t.vertical]>c/2?Math.max(0,c-u):0,e.maxHeight=Math.min(u,c);else if(o[t.vertical]>c/2){const d=Math.min(c,t.vertical==="center"?o.center:t.vertical===n.vertical?o.bottom:o.top);e.maxHeight=Math.min(u,d),e.top=Math.max(0,d-u)}else e.top=Math.max(0,t.vertical==="center"?o.center:t.vertical===n.vertical?o.top:o.bottom),e.maxHeight=Math.min(u,c-e.top);if(e.left<0||e.left+a>r)if(e.maxWidth=Math.min(a,r),n.horizontal==="middle")e.left=o[t.horizontal]>r/2?Math.max(0,r-a):0;else if(o[t.horizontal]>r/2){const d=Math.min(r,t.horizontal==="middle"?o.middle:t.horizontal===n.horizontal?o.right:o.left);e.maxWidth=Math.min(a,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?o.middle:t.horizontal===n.horizontal?o.left:o.right),e.maxWidth=Math.min(a,r-e.left)}var Xt=C({name:"QMenu",inheritAttrs:!1,props:{...Dt,...kt,...ce,...Ae,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Ce},self:{type:String,validator:Ce},offset:{type:Array,validator:It},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Bt,"click","escape-key"],setup(e,{slots:o,emit:l,attrs:t}){let n=null,u,a,v;const c=L(),{proxy:r}=c,{$q:d}=r,b=p(null),x=p(!1),i=h(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),w=de(e,d),{registerTick:z,removeTick:E}=St(),{registerTimeout:_}=Ct(),{transition:f,transitionStyle:m}=_t(e,x),{localScrollTarget:s,changeScrollEvent:q,unconfigureScrollTarget:H}=Ft(e,be),{anchorEl:T,canShow:D}=Vt({showing:x}),{hide:V}=Tt({showing:x,canShow:D,handleShow:Ke,handleHide:Ue,hideOnRouteChange:i,processOnMount:!0}),{showPortal:fe,hidePortal:ve,renderPortal:Fe}=Lt(c,b,Xe),Y={anchorEl:T,innerRef:b,onClickOutside(g){if(e.persistent!==!0&&x.value===!0)return V(g),(g.type==="touchstart"||g.target.classList.contains("q-dialog__backdrop"))&&Ee(g),!0}},he=h(()=>_e(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),je=h(()=>e.cover===!0?he.value:_e(e.self||"top start",d.lang.rtl)),Ie=h(()=>(e.square===!0?" q-menu--square":"")+(w.value===!0?" q-menu--dark q-dark":"")),Ne=h(()=>e.autoClose===!0?{onClick:Ge}:{}),me=h(()=>x.value===!0&&e.persistent!==!0);B(me,g=>{g===!0?(Ht(Z),jt(Y)):(pe(Z),ke(Y))});function J(){wt(()=>{let g=b.value;g&&g.contains(document.activeElement)!==!0&&(g=g.querySelector("[autofocus], [data-autofocus]")||g,g.focus({preventScroll:!0}))})}function Ke(g){if(n=e.noRefocus===!1?document.activeElement:null,zt(ye),fe(),be(),u=void 0,g!==void 0&&(e.touchPosition||e.contextMenu)){const ee=ot(g);if(ee.left!==void 0){const{top:Ye,left:Je}=T.value.getBoundingClientRect();u={left:ee.left-Je,top:ee.top-Ye}}}a===void 0&&(a=B(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,F)),e.noFocus!==!0&&document.activeElement.blur(),z(()=>{F(),e.noFocus!==!0&&J()}),_(()=>{d.platform.is.ios===!0&&(v=e.autoClose,b.value.click()),F(),fe(!0),l("show",g)},e.transitionDuration)}function Ue(g){E(),ve(),ge(!0),n!==null&&(g===void 0||g.qClickOutside!==!0)&&(n.focus(),n=null),_(()=>{ve(!0),l("hide",g)},e.transitionDuration)}function ge(g){u=void 0,a!==void 0&&(a(),a=void 0),(g===!0||x.value===!0)&&(Et(ye),H(),ke(Y),pe(Z)),g!==!0&&(n=null)}function be(){(T.value!==null||e.scrollTarget!==void 0)&&(s.value=Oe(T.value,e.scrollTarget),q(s.value,F))}function Ge(g){v!==!0?(Pt(r,g),l("click",g)):v=!1}function ye(g){me.value===!0&&e.noFocus!==!0&&it(b.value,g.target)!==!0&&J()}function Z(g){l("escape-key"),V(g)}function F(){const g=b.value;g===null||T.value===null||Ut({el:g,offset:e.offset,anchorEl:T.value,anchorOrigin:he.value,selfOrigin:je.value,absoluteOffset:u,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Xe(){return y(at,{name:f.value,appear:!0},()=>x.value===!0?y("div",{role:"menu",...t,ref:b,tabindex:-1,class:["q-menu q-position-engine scroll"+Ie.value,t.class],style:[t.style,m.value],...Ne.value},P(o.default)):null)}return $(ge),Object.assign(r,{focus:J,updatePosition:F}),Fe}});const De=Object.keys(rt),Yt=De.reduce((e,o)=>(e[o]={})&&e,{}),Jt=e=>De.reduce((o,l)=>{const t=e[l];return t!==void 0&&(o[l]=t),o},{});var Zt=C({name:"QBtnDropdown",props:{...Yt,...Ae,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","before-show","show","before-hide","hide"],setup(e,{slots:o,emit:l}){const{proxy:t}=L(),n=p(e.modelValue),u=p(null),a=xt(),v=h(()=>{const s={"aria-expanded":n.value===!0?"true":"false","aria-haspopup":"true","aria-controls":a,"aria-owns":a,"aria-label":e.toggleAriaLabel||t.$q.lang.label[n.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(s["aria-disabled"]="true"),s}),c=h(()=>"q-btn-dropdown__arrow"+(n.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),r=h(()=>ut(e)),d=h(()=>Jt(e));B(()=>e.modelValue,s=>{u.value!==null&&u.value[s?"show":"hide"]()}),B(()=>e.split,m);function b(s){n.value=!0,l("before-show",s)}function x(s){l("show",s),l("update:modelValue",!0)}function i(s){n.value=!1,l("before-hide",s)}function w(s){l("hide",s),l("update:modelValue",!1)}function z(s){l("click",s)}function E(s){st(s),m(),l("click",s)}function _(s){u.value!==null&&u.value.toggle(s)}function f(s){u.value!==null&&u.value.show(s)}function m(s){u.value!==null&&u.value.hide(s)}return Object.assign(t,{show:f,hide:m,toggle:_}),O(()=>{e.modelValue===!0&&f()}),()=>{const s=[y(Pe,{class:c.value,name:e.dropdownIcon||t.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&s.push(y(Xt,{ref:u,id:a,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:b,onShow:x,onBeforeHide:i,onHide:w},o.default)),e.split===!1?y(K,{class:"q-btn-dropdown q-btn-dropdown--simple",...d.value,...v.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:z},{default:()=>P(o.label,[]).concat(s),loading:o.loading}):y(Ot,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...r.value,glossy:e.glossy,stretch:e.stretch},()=>[y(K,{class:"q-btn-dropdown--current",...d.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:E},{default:o.label,loading:o.loading}),y(K,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...v.value,...r.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>s)])}}}),en=C({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const l=h(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>y("div",{class:l.value,role:"toolbar"},P(o.default))}});function tn(){const e=p(!Me.value);return e.value===!1&&O(()=>{e.value=!0}),e}const Ve=typeof ResizeObserver!="undefined",Te=Ve===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ue=C({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let l=null,t,n={width:-1,height:-1};function u(c){c===!0||e.debounce===0||e.debounce==="0"?a():l===null&&(l=setTimeout(a,e.debounce))}function a(){if(clearTimeout(l),l=null,t){const{offsetWidth:c,offsetHeight:r}=t;(c!==n.width||r!==n.height)&&(n={width:c,height:r},o("resize",n))}}const{proxy:v}=L();if(Ve===!0){let c;const r=d=>{t=v.$el.parentNode,t?(c=new ResizeObserver(u),c.observe(t),a()):d!==!0&&ie(()=>{r(!0)})};return O(()=>{r()}),$(()=>{clearTimeout(l),c!==void 0&&(c.disconnect!==void 0?c.disconnect():t&&c.unobserve(t))}),Re}else{let d=function(){clearTimeout(l),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",u,W.passive),r=void 0)},b=function(){d(),t&&t.contentDocument&&(r=t.contentDocument.defaultView,r.addEventListener("resize",u,W.passive),a())};const c=tn();let r;return O(()=>{ie(()=>{t=v.$el,t&&b()})}),$(d),v.trigger=u,()=>{if(c.value===!0)return y("object",{style:Te.style,tabindex:-1,type:"text/html",data:Te.url,"aria-hidden":"true",onLoad:b})}}}}),nn=C({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:l}){const{proxy:{$q:t}}=L(),n=$e(se,A);if(n===A)return console.error("QHeader needs to be child of QLayout"),A;const u=p(parseInt(e.heightHint,10)),a=p(!0),v=h(()=>e.reveal===!0||n.view.value.indexOf("H")>-1||t.platform.is.ios&&n.isContainer.value===!0),c=h(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return a.value===!0?u.value:0;const f=u.value-n.scroll.value.position;return f>0?f:0}),r=h(()=>e.modelValue!==!0||v.value===!0&&a.value!==!0),d=h(()=>e.modelValue===!0&&r.value===!0&&e.reveal===!0),b=h(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=h(()=>{const f=n.rows.value.top,m={};return f[0]==="l"&&n.left.space===!0&&(m[t.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),f[2]==="r"&&n.right.space===!0&&(m[t.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),m});function i(f,m){n.update("header",f,m)}function w(f,m){f.value!==m&&(f.value=m)}function z({height:f}){w(u,f),i("size",f)}function E(f){d.value===!0&&w(a,!0),l("focusin",f)}B(()=>e.modelValue,f=>{i("space",f),w(a,!0),n.animate()}),B(c,f=>{i("offset",f)}),B(()=>e.reveal,f=>{f===!1&&w(a,e.modelValue)}),B(a,f=>{n.animate(),l("reveal",f)}),B(n.scroll,f=>{e.reveal===!0&&w(a,f.direction==="up"||f.position<=e.revealOffset||f.position-f.inflectionPoint<100)});const _={};return n.instances.header=_,e.modelValue===!0&&i("size",u.value),i("space",e.modelValue),i("offset",c.value),$(()=>{n.instances.header===_&&(n.instances.header=void 0,i("size",0),i("offset",0),i("space",!1))}),()=>{const f=He(o.default,[]);return e.elevated===!0&&f.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),f.push(y(ue,{debounce:0,onResize:z})),y("header",{class:b.value,style:x.value,onFocusin:E},f)}}}),ln=C({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:l}}=L(),t=$e(se,A);if(t===A)return console.error("QPageContainer needs to be child of QLayout"),A;Qe(ct,!0);const n=h(()=>{const u={};return t.header.space===!0&&(u.paddingTop=`${t.header.size}px`),t.right.space===!0&&(u[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(u.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(u[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),u});return()=>y("div",{class:"q-page-container",style:n.value},P(o.default))}});const{passive:Le}=W,on=["both","horizontal","vertical"];var an=C({name:"QScrollObserver",props:{axis:{type:String,validator:e=>on.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,n,u;B(()=>e.scrollTarget,()=>{c(),v()});function a(){t!==null&&t();const b=Math.max(0,Mt(n)),x=Rt(n),i={top:b-l.position.top,left:x-l.position.left};if(e.axis==="vertical"&&i.top===0||e.axis==="horizontal"&&i.left===0)return;const w=Math.abs(i.top)>=Math.abs(i.left)?i.top<0?"up":"down":i.left<0?"left":"right";l.position={top:b,left:x},l.directionChanged=l.direction!==w,l.delta=i,l.directionChanged===!0&&(l.direction=w,l.inflectionPoint=l.position),o("scroll",{...l})}function v(){n=Oe(u,e.scrollTarget),n.addEventListener("scroll",r,Le),r(!0)}function c(){n!==void 0&&(n.removeEventListener("scroll",r,Le),n=void 0)}function r(b){if(b===!0||e.debounce===0||e.debounce==="0")a();else if(t===null){const[x,i]=e.debounce?[setTimeout(a,e.debounce),clearTimeout]:[requestAnimationFrame(a),cancelAnimationFrame];t=()=>{i(x),t=null}}}const{proxy:d}=L();return O(()=>{u=d.$el.parentNode,v()}),$(()=>{t!==null&&t(),c()}),Object.assign(d,{trigger:r,getPosition:()=>l}),Re}}),rn=C({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:l}){const{proxy:{$q:t}}=L(),n=p(null),u=p(t.screen.height),a=p(e.container===!0?0:t.screen.width),v=p({position:0,direction:"down",inflectionPoint:0}),c=p(0),r=p(Me.value===!0?0:U()),d=h(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=h(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),x=h(()=>r.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),i=h(()=>r.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function w(s){if(e.container===!0||document.qScrollPrevented!==!0){const q={position:s.position.top,direction:s.direction,directionChanged:s.directionChanged,inflectionPoint:s.inflectionPoint.top,delta:s.delta.top};v.value=q,e.onScroll!==void 0&&l("scroll",q)}}function z(s){const{height:q,width:H}=s;let T=!1;u.value!==q&&(T=!0,u.value=q,e.onScrollHeight!==void 0&&l("scroll-height",q),_()),a.value!==H&&(T=!0,a.value=H),T===!0&&e.onResize!==void 0&&l("resize",s)}function E({height:s}){c.value!==s&&(c.value=s,_())}function _(){if(e.container===!0){const s=u.value>c.value?U():0;r.value!==s&&(r.value=s)}}let f;const m={instances:{},view:h(()=>e.view),isContainer:h(()=>e.container),rootRef:n,height:u,containerHeight:c,scrollbarWidth:r,totalWidth:h(()=>a.value+r.value),rows:h(()=>{const s=e.view.toLowerCase().split(" ");return{top:s[0].split(""),middle:s[1].split(""),bottom:s[2].split("")}}),header:N({size:0,offset:0,space:!1}),right:N({size:300,offset:0,space:!1}),footer:N({size:0,offset:0,space:!1}),left:N({size:300,offset:0,space:!1}),scroll:v,animate(){f!==void 0?clearTimeout(f):document.body.classList.add("q-body--layout-animate"),f=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),f=void 0},155)},update(s,q,H){m[s][q]=H}};if(Qe(se,m),U()>0){let H=function(){s=null,q.classList.remove("hide-scrollbar")},T=function(){if(s===null){if(q.scrollHeight>t.screen.height)return;q.classList.add("hide-scrollbar")}else clearTimeout(s);s=setTimeout(H,300)},D=function(V){s!==null&&V==="remove"&&(clearTimeout(s),H()),window[`${V}EventListener`]("resize",T)},s=null;const q=document.body;B(()=>e.container!==!0?"add":"remove",D),e.container!==!0&&D("add"),dt(()=>{D("remove")})}return()=>{const s=ft(o.default,[y(an,{onScroll:w}),y(ue,{onResize:z})]),q=y("div",{class:d.value,style:b.value,ref:e.container===!0?void 0:n,tabindex:-1},s);return e.container===!0?y("div",{class:"q-layout-container overflow-hidden",ref:n},[y(ue,{onResize:E}),y("div",{class:"absolute-full",style:x.value},[y("div",{class:"scroll",style:i.value},[q])])]):q}}});const un={key:1,class:"address-container q-mr-sm"},sn=ht({__name:"MainLayout",setup(e){const o=gt(),l=pt(),{hasMetaMask:t,connectWallet:n,walletAddress:u}=qt(),a=async()=>{try{await n()}catch{l.notify({type:"negative",message:"failed to connect to wallet"})}};return(v,c)=>{const r=mt("router-view");return Q(),j(rn,{view:"hHh lpR fFf"},{default:k(()=>[S(nn,{class:"bg-white text-black"},{default:k(()=>[S(en,null,{default:k(()=>[S(Qt,null,{default:k(()=>[I(" MetaPass ")]),_:1}),M(u).length==0?(Q(),j(K,{key:0,class:"q-px-lg q-py-sm q-mr-sm",disable:!M(t),onClick:a,icon:"add",outline:"",color:"purple",label:"Connect"},null,8,["disable"])):(Q(),bt("div",un,[S(Pe,{name:"wallet",size:"xs"}),I(" "+yt(M($t)(M(u))),1)])),S(Zt,{flat:""},{default:k(()=>[S(At,null,{default:k(()=>[te((Q(),j(ae,{clickable:"",onClick:c[0]||(c[0]=d=>M(o).push("/ark"))},{default:k(()=>[S(oe,null,{default:k(()=>[S(le,null,{default:k(()=>[I("Ark")]),_:1})]),_:1})]),_:1})),[[ne]]),te((Q(),j(ae,{clickable:"",onClick:c[1]||(c[1]=d=>M(o).push("/nexus"))},{default:k(()=>[S(oe,null,{default:k(()=>[S(le,null,{default:k(()=>[I("Nexus")]),_:1})]),_:1})]),_:1})),[[ne]]),te((Q(),j(ae,{disabled:"",clickable:"",onClick:c[2]||(c[2]=d=>M(o).push("/vulcan"))},{default:k(()=>[S(oe,null,{default:k(()=>[S(le,null,{default:k(()=>[I("Vulcan")]),_:1})]),_:1})]),_:1})),[[ne]])]),_:1})]),_:1})]),_:1})]),_:1}),S(ln,null,{default:k(()=>[S(r)]),_:1})]),_:1})}}});var vn=vt(sn,[["__scopeId","data-v-55e17d9e"]]);export{vn as default};
