import{i as S,G as v,z as y,I as E,j as _,y as k,J as b,K as w,L as P,m as T,s as g,o as A}from"./runtime.u23mv2uN.js";function B(u,l,a,c=null,d=!1){_&&k();var r=u,t=null,e=null,i=null,n=d?b:0;S(()=>{if(i===(i=!!l()))return;let s=!1;if(_){const m=r.data===w;i===m&&(r=P(),T(r),g(!1),s=!0)}i?(t?v(t):t=y(()=>a(r)),e&&E(e,()=>{e=null})):(e?v(e):c&&(e=y(()=>c(r))),t&&E(t,()=>{t=null})),s&&g(!0)},n),_&&(r=A)}const L="modulepreload",p=function(u,l){return new URL(u,l).href},R={},$=function(l,a,c){let d=Promise.resolve();if(a&&a.length>0){const t=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),i=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));d=Promise.allSettled(a.map(n=>{if(n=p(n,c),n in R)return;R[n]=!0;const s=n.endsWith(".css"),m=s?'[rel="stylesheet"]':"";if(!!c)for(let f=t.length-1;f>=0;f--){const h=t[f];if(h.href===n&&(!s||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${m}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":L,s||(o.as="script"),o.crossOrigin="",o.href=n,i&&o.setAttribute("nonce",i),document.head.appendChild(o),s)return new Promise((f,h)=>{o.addEventListener("load",f),o.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${n}`)))})}))}function r(t){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=t,window.dispatchEvent(e),!e.defaultPrevented)throw t}return d.then(t=>{for(const e of t||[])e.status==="rejected"&&r(e.reason);return l().catch(r)})};export{$ as _,B as i};