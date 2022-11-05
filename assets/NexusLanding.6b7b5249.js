import{B as P,c as _e,a as B,b as pe,u as Ge,T as A,Q as Je,d as et}from"./QCheckbox.149e466a.js";import{L as R,N as h,O as T,R as w,aa as a,U as m,W as d,k as Ee,au as xe,q as $,m as N,s as tt,av as st,c as at,r as b,a as k,w as K,h as D,T as he,d as lt,g as ot,n as nt,v as it,_ as Z,Z as Ne,aw as Le,ab as ye,ac as ge,o as rt,X as C,ax as de,Q as ue,V as Me,Y as V,x as dt,ad as j,ae as ce,af as ut}from"./index.54446c61.js";import{e as G,d as J,b as ct}from"./useMetaMask.39d0c9bc.js";import{o as mt,n as vt,q as ft,u as _t,a as ht,b as pt,d as yt,c as gt,h as wt,f as kt,r as qe,j as Te,i as bt,l as xt,t as We,C as $e}from"./text.0c00188c.js";import"./axios.e2af691e.js";const Mt=a("h2",null,"Metapass Nexus",-1),qt=a("b",{style:{"font-size":"20px"}},"Link your other wallets to your existing MetaMask wallet",-1),Tt=a("ol",{class:"q-mb-xl"},[a("li",null,"Connect Wallet"),a("li",null,"Login MetaPass"),a("li",null,"Link New Wallets"),a("li",null,"Mint MetaPass+ Token")],-1),Pt={class:"flex flex-center"},St=R({__name:"LoginCard",emits:["next"],setup(e,{emit:t}){const o=G(),{hasMetaMask:l,connectWallet:r,isConnected:i}=J(),s=async()=>{try{await r(),t("next")}catch{o.notify({type:"negative",message:"failed to connect to wallet"})}};return(u,c)=>(h(),T(B,{class:"home-card"},{default:w(()=>[Mt,qt,Tt,a("span",Pt,[m(P,{label:d(i)?"Enter Nexus":"Connect Wallet",class:"q-px-lg q-py-sm",disable:!d(l),onClick:c[0]||(c[0]=M=>d(i)?u.$emit("next"):s())},null,8,["label","disable"])]),m(_e,{class:"q-mt-lg","model-value":d(l),disable:"","checked-icon":"task_alt","unchecked-icon":"highlight_off",label:"MetaMask Extension Found"},null,8,["model-value"])]),_:1}))}});var Pe="/metapass-id-poc-www/assets/metamask.cd6a85f5.svg";function At(e,t,o){let l;function r(){l!==void 0&&(xe.remove(l),l=void 0)}return Ee(()=>{e.value===!0&&r()}),{removeFromHistory:r,addToHistory(){l={condition:()=>o.value===!0,handler:t},xe.add(l)}}}let F=0,me,ve,z,fe=!1,Se,Ae,W;function Ct(e){Vt(e)&&tt(e)}function Vt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=st(e),o=e.shiftKey&&!e.deltaX,l=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),r=o||l?e.deltaY:e.deltaX;for(let i=0;i<t.length;i++){const s=t[i];if(ft(s,l))return l?r<0&&s.scrollTop===0?!0:r>0&&s.scrollTop+s.clientHeight===s.scrollHeight:r<0&&s.scrollLeft===0?!0:r>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ce(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function Y(e){fe!==!0&&(fe=!0,requestAnimationFrame(()=>{fe=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:l}=document.scrollingElement;(z===void 0||t!==window.innerHeight)&&(z=o-t,document.scrollingElement.scrollTop=l),l>z&&(document.scrollingElement.scrollTop-=Math.ceil((l-z)/8))}))}function Ve(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:r}=window.getComputedStyle(t);me=mt(window),ve=vt(window),Se=t.style.left,Ae=t.style.top,t.style.left=`-${me}px`,t.style.top=`-${ve}px`,r!=="hidden"&&(r==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,$.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",Y,N.passiveCapture),window.visualViewport.addEventListener("scroll",Y,N.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ce,N.passiveCapture))}$.is.desktop===!0&&$.is.mac===!0&&window[`${e}EventListener`]("wheel",Ct,N.notPassive),e==="remove"&&($.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",Y,N.passiveCapture),window.visualViewport.removeEventListener("scroll",Y,N.passiveCapture)):window.removeEventListener("scroll",Ce,N.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Se,t.style.top=Ae,window.scrollTo(me,ve),z=void 0)}function Bt(e){let t="add";if(e===!0){if(F++,W!==void 0){clearTimeout(W),W=void 0;return}if(F>1)return}else{if(F===0||(F--,F>0))return;if(t="remove",$.is.ios===!0&&$.is.nativeMobile===!0){clearTimeout(W),W=setTimeout(()=>{Ve(t),W=void 0},100);return}}Ve(t)}function Et(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,Bt(t))}}}let X=0;const Nt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Be={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Ie=at({name:"QDialog",inheritAttrs:!1,props:{..._t,...ht,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...pt,"shake","click","escape-key"],setup(e,{slots:t,emit:o,attrs:l}){const r=ot(),i=b(null),s=b(!1),u=b(!1),c=b(!1);let M,f=null,p,q;const y=k(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:x}=Et(),{registerTimeout:E}=yt(),{registerTick:ee,removeTick:I}=gt(),{showPortal:Q,hidePortal:U,portalIsAccessible:te,renderPortal:g}=wt(r,i,Ze,!0),{hide:v}=kt({showing:s,hideOnRouteChange:y,handleShow:je,handleHide:Ye,processOnMount:!0}),{addToHistory:_,removeFromHistory:se}=At(s,v,y),Fe=k(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Nt[e.position]}`+(c.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),ze=k(()=>"q-transition--"+(e.transitionShow===void 0?Be[e.position][0]:e.transitionShow)),Re=k(()=>"q-transition--"+(e.transitionHide===void 0?Be[e.position][1]:e.transitionHide)),Qe=k(()=>u.value===!0?Re.value:ze.value),we=k(()=>`--q-transition-duration: ${e.transitionDuration}ms`),O=k(()=>s.value===!0&&e.seamless!==!0),Ue=k(()=>e.autoClose===!0?{onClick:Xe}:{}),Oe=k(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${O.value===!0?"modal":"seamless"}`,l.class]);K(s,n=>{nt(()=>{u.value=n})}),K(()=>e.maximized,n=>{s.value===!0&&oe(n)}),K(O,n=>{x(n),n===!0?(bt(ne),xt(le)):(qe(ne),Te(le))});function je(n){_(),f=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,oe(e.maximized),Q(),c.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),ee(H)):I(),E(()=>{if(r.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:S,bottom:ie}=document.activeElement.getBoundingClientRect(),{innerHeight:be}=window,re=window.visualViewport!==void 0?window.visualViewport.height:be;S>0&&ie>re/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-re,ie>=be?1/0:Math.ceil(document.scrollingElement.scrollTop+ie-re/2))),document.activeElement.scrollIntoView()}q=!0,i.value.click(),q=!1}Q(!0),c.value=!1,o("show",n)},e.transitionDuration)}function Ye(n){I(),se(),ke(!0),c.value=!0,U(),f!==null&&(f.focus(),f=null),E(()=>{U(!0),c.value=!1,o("hide",n)},e.transitionDuration)}function H(n){ct(()=>{let S=i.value;S===null||S.contains(document.activeElement)===!0||(S=S.querySelector(n||"[autofocus], [data-autofocus]")||S,S.focus({preventScroll:!0}))})}function ae(){H(),o("shake");const n=i.value;n!==null&&(n.classList.remove("q-animate--scale"),n.classList.add("q-animate--scale"),clearTimeout(M),M=setTimeout(()=>{i.value!==null&&(n.classList.remove("q-animate--scale"),H())},170))}function le(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&ae():(o("escape-key"),v()))}function ke(n){clearTimeout(M),(n===!0||s.value===!0)&&(oe(!1),e.seamless!==!0&&(x(!1),qe(ne),Te(le))),n!==!0&&(f=null)}function oe(n){n===!0?p!==!0&&(X<1&&document.body.classList.add("q-body--dialog"),X++,p=!0):p===!0&&(X<2&&document.body.classList.remove("q-body--dialog"),X--,p=!1)}function Xe(n){q!==!0&&(v(n),o("click",n))}function Ke(n){e.persistent!==!0&&e.noBackdropDismiss!==!0?v(n):e.noShake!==!0&&ae()}function ne(n){e.allowFocusOutside!==!0&&te.value===!0&&it(i.value,n.target)!==!0&&H('[tabindex]:not([tabindex="-1"])')}Object.assign(r.proxy,{focus:H,shake:ae,__updateRefocusTarget(n){f=n||null}}),Ee(ke);function Ze(){return D("div",{role:"dialog","aria-modal":O.value===!0?"true":"false",...l,class:Oe.value},[D(he,{name:"q-transition--fade",appear:!0},()=>O.value===!0?D("div",{class:"q-dialog__backdrop fixed-full",style:we.value,"aria-hidden":"true",onMousedown:Ke}):null),D(he,{name:Qe.value,appear:!0},()=>s.value===!0?D("div",{ref:i,class:Fe.value,style:we.value,tabindex:-1,...Ue.value},lt(t.default)):null)])}return g}});const He=e=>(ye("data-v-d9d7c596"),e=e(),ge(),e),Lt=He(()=>a("span",{class:"title"},"Add MetaPass+ Wallet",-1)),Wt=He(()=>a("span",null,"Link other wallets to your MetaPass Identity by minting MetaPass+ tokens. You will need to switch to your other wallet on MetaMask to connect.",-1)),$t={class:"column flex-center q-mt-lg"},It=R({__name:"AddWalletModal",props:{modelValue:Boolean,mainAddress:String,secondaryAddresses:{type:Array,default:()=>[]}},emits:["update:modelValue","addWallet"],setup(e,{emit:t}){const o=e,l=k({get:()=>o.modelValue,set:y=>t("update:modelValue",y)}),r=G(),i=b(!1),s=b(!1),u=k(()=>c.value!=o.mainAddress&&!o.secondaryAddresses.includes(c.value)&&s.value),{walletAddress:c,connectWallet:M}=J(),{checkArkToken:f,isBounded:p}=pe(),q=async()=>{i.value=!0,s.value=!1,await M();const y=await Promise.all([f(c.value),p(c.value)]);s.value=!y[0]&&!y[1],s.value||r.notify({message:y[0]?"Address is already bounded to existing Nexus":"Wallet already has Ark token",type:"negative"}),i.value=!1};return K(u,()=>r.notify({message:"Found new wallet!",type:"positive"})),(y,x)=>(h(),T(Ie,{modelValue:d(l),"onUpdate:modelValue":x[1]||(x[1]=E=>Le(l)?l.value=E:null)},{default:w(()=>[m(B,{class:"modal"},{default:w(()=>[Lt,Wt,a("div",$t,[Ne(m(P,{outline:"",disable:!d(u),label:d(u)?`Connect to ${d(We)(d(c))}`:y.hasArk&&d(c)!=e.mainAddress?"Wallet already owns Ark token":"Switch to new secondary wallet",onClick:x[0]||(x[0]=E=>y.$emit("addWallet",d(c)))},null,8,["disable","label"]),[[$e]]),m(P,{dense:"",flat:"",label:"I have switched wallets",class:"q-mt-md",onClick:q})])]),_:1})]),_:1},8,["modelValue"]))}});var Ht=Z(It,[["__scopeId","data-v-d9d7c596"]]);const De=e=>(ye("data-v-033f9ede"),e=e(),ge(),e),Dt=De(()=>a("span",{class:"title q-mb-xs"},"Mint MetaPass+",-1)),Ft=De(()=>a("span",null,"To link secondary wallets, you are required to mint a MetaPass+ token. Any changes to existing secondary wallets will require you to burn and mint a new token again.",-1)),zt={class:"column flex-center q-mt-md"},Rt=R({__name:"MintNexusModal",props:{modelValue:Boolean,mainAddress:String,secondaryAddresses:{type:Array,default:()=>[]}},emits:["update:modelValue","minted"],setup(e,{emit:t}){const o=e,{mintNexus:l}=pe(),r=G(),{walletAddress:i,connectWallet:s}=J(),u=k({get:()=>o.modelValue,set:f=>t("update:modelValue",f)}),c=k(()=>o.mainAddress===i.value),M=async()=>{try{await l(o.secondaryAddresses),t("minted"),r.notify({message:`Minted MetaPass + with ${o.secondaryAddresses.length} secondary address(es)`,type:"positive"})}catch(f){console.error(f),r.notify({message:"Failed to mint MetaPass+ token",type:"negative"})}};return(f,p)=>(h(),T(Ie,{modelValue:d(u),"onUpdate:modelValue":p[0]||(p[0]=q=>Le(u)?u.value=q:null)},{default:w(()=>[m(B,{class:"home-card"},{default:w(()=>[Dt,Ft,a("div",zt,[Ne(m(P,{outline:"",label:d(c)?"Mint MP+":"Switch to primary wallet",disable:!d(c),onClick:M},null,8,["label","disable"]),[[$e]]),m(P,{dense:"",flat:"",label:"I have switched wallets",class:"q-mt-md",onClick:d(s)},null,8,["onClick"])])]),_:1})]),_:1},8,["modelValue"]))}});var Qt=Z(Rt,[["__scopeId","data-v-033f9ede"]]);const L=e=>(ye("data-v-b4098da2"),e=e(),ge(),e),Ut={class:"column flex-center"},Ot=L(()=>a("span",{class:"title q-mb-sm"},"MetaPass Identity",-1)),jt={class:"column"},Yt={class:"row items-center"},Xt={key:0,class:"q-my-md flex flex-center"},Kt={key:1,class:"q-mt-sm"},Zt=L(()=>a("span",{class:"verified-card__title"},"MetaPass Credentials",-1)),Gt={class:"column"},Jt=L(()=>a("u",null,"Passport Details",-1)),es=L(()=>a("u",{class:"q-mt-sm"},"Personal Details",-1)),ts={class:"row justify-between"},ss=L(()=>a("span",{class:"title flex items-center"},"MetaPass+ Wallets ",-1)),as=L(()=>a("span",null," Connect other wallets to improve your on-chain credit scoring.",-1)),ls={class:"row items-center"},os=["src"],ns={class:"column q-ml-md"},is={class:"text-bold"},rs=L(()=>a("span",null,"MetaMask - Main Wallet",-1)),ds={class:"row items-center"},us=["src"],cs={class:"column q-ml-md"},ms={class:"text-bold"},vs=R({__name:"ViewIdentity",setup(e){const{walletAddress:t}=J(),{getTokenId:o,checkNexusToken:l,getBoundedAddrs:r}=pe(),i=G(),s=Ge(),u=b(0),c=b(!1),M=b(),f=b({addWallet:!1,mintNexus:!1}),p=b({[A.Ark]:!1,[A.Nexus]:!1}),q=b({password:!1}),y=t.value,x=b([]),E=k(()=>{var g,v;return[{label:"Name",value:s.user.name},{label:"Date Of Birth",value:(v=(g=s.user.dateOfBirth)==null?void 0:g.toFormat("dd LLL yyyy"))!=null?v:"-"},{label:"Passport Number",value:s.user.passportNumber}]}),ee=k(()=>{var g,v;return[{label:"Email",value:(g=s.user.email)!=null?g:"N.A."},{label:"Phone Number",value:(v=s.user.phoneNumber)!=null?v:"N.A."}]}),I=async()=>{q.value.password=!0;try{M.value=await o(A.Ark),p.value[A.Nexus]=await l(),p.value[A.Ark]=!0,u.value=1}catch(g){console.error(g),i.notify({message:"This wallet has no Ark token",type:"negative"})}finally{q.value.password=!1}},Q=async()=>{try{if(M.value&&(await s.getUserIdentity(M.value,s.user.password),i.notify({type:"positive",message:"Successfully fetched MetaPass Identity"}),u.value=2,p.value[A.Nexus])){const g=await o(A.Nexus);x.value=await r(g)}}catch(g){console.error(g),i.notify({type:"negative",message:"Failed to fetch MetaPass Identity"})}},U=()=>{p.value[A.Nexus]=!0},te=g=>{x.value=x.value.concat(g),c.value=!0};return rt(I),(g,v)=>(h(),C(j,null,[m(B,{class:"card q-mb-md"},{default:w(()=>[a("div",Ut,[Ot,u.value===2?(h(),T(P,{key:0,label:"Preview Credit Score"})):de("",!0)]),a("div",jt,[a("b",Yt,[m(ue,{name:"wallet",size:"sm",class:"q-mr-xs"}),Me(" Token Status: "+V(d(We)(d(y))),1)]),m(_e,{class:"q-mt-sm","model-value":p.value.Ark,disable:"",dense:"","checked-icon":"task_alt","unchecked-icon":"highlight_off",label:"Ark Token"},null,8,["model-value"]),m(_e,{"model-value":p.value.Nexus,disable:"",dense:"","checked-icon":"task_alt","unchecked-icon":"highlight_off",label:"Nexus Token"},null,8,["model-value"]),u.value===0?(h(),C("div",Xt,[m(P,{label:"Sign in MetaPass",onClick:I,loading:q.value.password},{loading:w(()=>[Me(" Fetching... ")]),_:1},8,["loading"])])):u.value===1?(h(),C("div",Kt,[m(Je,{outlined:"",type:"password",modelValue:d(s).user.password,"onUpdate:modelValue":v[0]||(v[0]=_=>d(s).user.password=_),placeholder:"MetaPass Password"},{append:w(()=>[m(dt,{flat:"",icon:"arrow_forward",onClick:Q})]),_:1},8,["modelValue"])])):(h(),T(B,{key:2,class:"verified-card q-mt-md"},{default:w(()=>[Zt,a("div",Gt,[Jt,(h(!0),C(j,null,ce(d(E),_=>(h(),C("div",{key:_.label,class:"flex justify-between q-ml-sm"},[a("span",null,V(_.label)+":",1),a("span",null,V(_.value),1)]))),128)),es,(h(!0),C(j,null,ce(d(ee),_=>(h(),C("div",{key:_.label,class:"flex justify-between q-ml-sm"},[a("span",null,V(_.label)+":",1),a("span",null,V(_.value),1)]))),128))])]),_:1}))])]),_:1}),u.value===2?(h(),T(B,{key:0,class:"card-alternate"},{default:w(()=>[a("div",ts,[ss,c.value?(h(),T(P,{key:0,outline:"",label:"Mint MP+",onClick:v[1]||(v[1]=_=>f.value.mintNexus=!0)})):de("",!0)]),as,m(B,{class:"verified-card q-mt-md"},{default:w(()=>[a("div",ls,[m(ue,{size:"md"},{default:w(()=>[a("img",{src:d(Pe)},null,8,os)]),_:1}),a("div",ns,[a("span",is,V(d(y)),1),rs])])]),_:1}),(h(!0),C(j,null,ce(x.value,(_,se)=>(h(),T(B,{key:_,class:"verified-card q-mt-md",style:{background:"#e4e4e4"}},{default:w(()=>[a("div",ds,[m(ue,{size:"md"},{default:w(()=>[a("img",{src:d(Pe)},null,8,us)]),_:1}),a("div",cs,[a("span",ms,V(_),1),a("span",null,"MetaMask - Secondary Wallet "+V(se+1),1)])])]),_:2},1024))),128)),m(P,{flat:"",label:"Add Wallet",class:"q-mt-md",onClick:v[2]||(v[2]=_=>f.value.addWallet=!0)})]),_:1})):de("",!0),m(Ht,{modelValue:f.value.addWallet,"onUpdate:modelValue":v[3]||(v[3]=_=>f.value.addWallet=_),"main-address":d(y),onAddWallet:te},null,8,["modelValue","main-address"]),m(Qt,{modelValue:f.value.mintNexus,"onUpdate:modelValue":v[4]||(v[4]=_=>f.value.mintNexus=_),"main-address":d(y),"secondary-addresses":x.value,onMinted:U},null,8,["modelValue","main-address","secondary-addresses"])],64))}});var fs=Z(vs,[["__scopeId","data-v-b4098da2"]]);const _s=R({__name:"NexusLanding",setup(e){const t=b(0),o=[St,fs],l=(i=1)=>{t.value<o.length-1&&(t.value+=i)},r=(i=1)=>{t.value>0&&(t.value-=i)};return(i,s)=>(h(),T(et,{padding:"",class:"flex flex-center"},{default:w(()=>[m(he,{name:"fade",mode:"out-in"},{default:w(()=>[(h(),T(ut(o[t.value]),{onNext:l,onBack:r,onSkip:s[0]||(s[0]=u=>l(u)),onReset:s[1]||(s[1]=u=>t.value=0)},null,32))]),_:1})]),_:1}))}});var ks=Z(_s,[["__scopeId","data-v-21d46ec8"]]);export{ks as default};
