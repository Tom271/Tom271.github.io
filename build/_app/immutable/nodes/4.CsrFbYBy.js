import{s as D,n as I}from"../chunks/scheduler.B-8LQpXJ.js";import{S as M,i as N,e as m,s as x,a as v,g as V,c as C,f as b,d as u,k as d,b as S,p as F,t as j,l as w,o as T,m as p,n as O}from"../chunks/index.CtSOuxl2.js";import{e as q}from"../chunks/each.D6YF6ztN.js";const G=async({fetch:n})=>({posts:await(await n("/api/posts")).json()}),U=Object.freeze(Object.defineProperty({__proto__:null,load:G},Symbol.toStringTag,{value:"Module"}));function A(n,t,c){const l=n.slice();return l[1]=t[c],l}function B(n){let t,c,l=n[1].meta.shorttitle+"",o,f,s,e=n[1].meta.date+"",r,a,h,g=n[1].meta.excerpt+"",y,k,E;return{c(){t=m("a"),c=m("h3"),o=j(l),f=x(),s=m("div"),r=j(e),a=x(),h=m("p"),y=j(g),k=x(),this.h()},l(_){t=v(_,"A",{href:!0,class:!0});var i=b(t);c=v(i,"H3",{});var P=b(c);o=w(P,l),P.forEach(u),f=C(i),s=v(i,"DIV",{class:!0});var z=b(s);r=w(z,e),z.forEach(u),a=C(i),h=v(i,"P",{class:!0,style:!0});var H=b(h);y=w(H,g),H.forEach(u),k=C(i),i.forEach(u),this.h()},h(){d(s,"class","post-date"),d(h,"class","subtitle"),T(h,"font-weight","200"),T(h,"font-size","1.5rem"),d(t,"href",E=n[1].path),d(t,"class","post-tile")},m(_,i){S(_,t,i),p(t,c),p(c,o),p(t,f),p(t,s),p(s,r),p(t,a),p(t,h),p(h,y),p(t,k)},p(_,i){i&1&&l!==(l=_[1].meta.shorttitle+"")&&O(o,l),i&1&&e!==(e=_[1].meta.date+"")&&O(r,e),i&1&&g!==(g=_[1].meta.excerpt+"")&&O(y,g),i&1&&E!==(E=_[1].path)&&d(t,"href",E)},d(_){_&&u(t)}}}function J(n){let t,c="Blog",l,o,f=q(n[0].posts),s=[];for(let e=0;e<f.length;e+=1)s[e]=B(A(n,f,e));return{c(){t=m("h1"),t.textContent=c,l=x(),o=m("section");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){t=v(e,"H1",{"data-svelte-h":!0}),V(t)!=="svelte-dbxyy8"&&(t.textContent=c),l=C(e),o=v(e,"SECTION",{class:!0});var r=b(o);for(let a=0;a<s.length;a+=1)s[a].l(r);r.forEach(u),this.h()},h(){d(o,"class","posts-grid")},m(e,r){S(e,t,r),S(e,l,r),S(e,o,r);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(o,null)},p(e,[r]){if(r&1){f=q(e[0].posts);let a;for(a=0;a<f.length;a+=1){const h=A(e,f,a);s[a]?s[a].p(h,r):(s[a]=B(h),s[a].c(),s[a].m(o,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=f.length}},i:I,o:I,d(e){e&&(u(t),u(l),u(o)),F(s,e)}}}function K(n,t,c){let{data:l}=t;return n.$$set=o=>{"data"in o&&c(0,l=o.data)},[l]}class W extends M{constructor(t){super(),N(this,t,K,J,D,{data:0})}}export{W as component,U as universal};
