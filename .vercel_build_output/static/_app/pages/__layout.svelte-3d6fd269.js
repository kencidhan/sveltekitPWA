import{D as $e,S as ue,i as he,s as fe,e as n,k as M,E as pe,t as Q,c as l,a as k,d as a,n as P,g as X,b as e,F as re,f as q,G as i,H as ne,I as Ae,J as be,l as xe,K as ye,L as Te,M as Se,j as Ie,N as Re,m as Le,o as Ne,O as Me,x as ve,u as me,v as Ee}from"../chunks/vendor-e8066c82.js";const Pe=()=>{const u=$e("__svelte__");return{page:{subscribe:u.page.subscribe},navigating:{subscribe:u.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:u.navigating.subscribe}},session:u.session}},qe={subscribe(u){return Pe().page.subscribe(u)}};var Ce="/_app/assets/svelte-logo-87df40b8.svg";function De(u){let t,r,s,d,f,g,m,_,x,L,o,h,v,w,A,I,E,C,D,K,j,O,V,$,y,W,S;return{c(){t=n("header"),r=n("div"),s=n("a"),d=n("img"),g=M(),m=n("nav"),_=pe("svg"),x=pe("path"),L=M(),o=n("ul"),h=n("li"),v=n("a"),w=Q("Home"),A=M(),I=n("li"),E=n("a"),C=Q("About"),D=M(),K=n("li"),j=n("a"),O=Q("Todos"),V=M(),$=pe("svg"),y=pe("path"),W=M(),S=n("div"),this.h()},l(N){t=l(N,"HEADER",{class:!0});var b=k(t);r=l(b,"DIV",{class:!0});var H=k(r);s=l(H,"A",{href:!0,class:!0});var U=k(s);d=l(U,"IMG",{src:!0,alt:!0,class:!0}),U.forEach(a),H.forEach(a),g=P(b),m=l(b,"NAV",{class:!0});var T=k(m);_=l(T,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var G=k(_);x=l(G,"path",{d:!0,class:!0},1),k(x).forEach(a),G.forEach(a),L=P(T),o=l(T,"UL",{class:!0});var B=k(o);h=l(B,"LI",{class:!0});var z=k(h);v=l(z,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var ee=k(v);w=X(ee,"Home"),ee.forEach(a),z.forEach(a),A=P(B),I=l(B,"LI",{class:!0});var F=k(I);E=l(F,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var te=k(E);C=X(te,"About"),te.forEach(a),F.forEach(a),D=P(B),K=l(B,"LI",{class:!0});var Z=k(K);j=l(Z,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var J=k(j);O=X(J,"Todos"),J.forEach(a),Z.forEach(a),B.forEach(a),V=P(T),$=l(T,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var ie=k($);y=l(ie,"path",{d:!0,class:!0},1),k(y).forEach(a),ie.forEach(a),T.forEach(a),W=P(b),S=l(b,"DIV",{class:!0});var Y=k(S);Y.forEach(a),b.forEach(a),this.h()},h(){d.src!==(f=Ce)&&e(d,"src",f),e(d,"alt","SvelteKit"),e(d,"class","svelte-1twf6mk"),e(s,"href","https://kit.svelte.dev"),e(s,"class","svelte-1twf6mk"),e(r,"class","corner svelte-1twf6mk"),e(x,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),e(x,"class","svelte-1twf6mk"),e(_,"viewBox","0 0 2 3"),e(_,"aria-hidden","true"),e(_,"class","svelte-1twf6mk"),e(v,"sveltekit:prefetch",""),e(v,"href","/"),e(v,"class","svelte-1twf6mk"),e(h,"class","svelte-1twf6mk"),re(h,"active",u[0].path==="/"),e(E,"sveltekit:prefetch",""),e(E,"href","/about"),e(E,"class","svelte-1twf6mk"),e(I,"class","svelte-1twf6mk"),re(I,"active",u[0].path==="/about"),e(j,"sveltekit:prefetch",""),e(j,"href","/todos"),e(j,"class","svelte-1twf6mk"),e(K,"class","svelte-1twf6mk"),re(K,"active",u[0].path==="/todos"),e(o,"class","svelte-1twf6mk"),e(y,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),e(y,"class","svelte-1twf6mk"),e($,"viewBox","0 0 2 3"),e($,"aria-hidden","true"),e($,"class","svelte-1twf6mk"),e(m,"class","svelte-1twf6mk"),e(S,"class","corner svelte-1twf6mk"),e(t,"class","svelte-1twf6mk")},m(N,b){q(N,t,b),i(t,r),i(r,s),i(s,d),i(t,g),i(t,m),i(m,_),i(_,x),i(m,L),i(m,o),i(o,h),i(h,v),i(v,w),i(o,A),i(o,I),i(I,E),i(E,C),i(o,D),i(o,K),i(K,j),i(j,O),i(m,V),i(m,$),i($,y),i(t,W),i(t,S)},p(N,[b]){b&1&&re(h,"active",N[0].path==="/"),b&1&&re(I,"active",N[0].path==="/about"),b&1&&re(K,"active",N[0].path==="/todos")},i:ne,o:ne,d(N){N&&a(t)}}}function Oe(u,t,r){let s;return Ae(u,qe,d=>r(0,s=d)),[s]}class Ve extends ue{constructor(t){super();he(this,t,Oe,De,fe,{})}}function Ke(u){let t,r,s,d,f,g,m,_;function x(v,w){return v[0]?Be:We}let L=x(u),o=L(u),h=u[1]&&je(u);return{c(){t=n("div"),r=n("div"),o.c(),s=M(),h&&h.c(),d=M(),f=n("button"),g=Q("Close"),this.h()},l(v){t=l(v,"DIV",{class:!0,role:!0});var w=k(t);r=l(w,"DIV",{class:!0});var A=k(r);o.l(A),A.forEach(a),s=P(w),h&&h.l(w),d=P(w),f=l(w,"BUTTON",{class:!0});var I=k(f);g=X(I,"Close"),I.forEach(a),w.forEach(a),this.h()},h(){e(r,"class","message svelte-1q69697"),e(f,"class","svelte-1q69697"),e(t,"class","pwa-toast svelte-1q69697"),e(t,"role","alert")},m(v,w){q(v,t,w),i(t,r),o.m(r,null),i(t,s),h&&h.m(t,null),i(t,d),i(t,f),i(f,g),m||(_=be(f,"click",u[4]),m=!0)},p(v,w){L!==(L=x(v))&&(o.d(1),o=L(v),o&&(o.c(),o.m(r,null))),v[1]?h?h.p(v,w):(h=je(v),h.c(),h.m(t,d)):h&&(h.d(1),h=null)},d(v){v&&a(t),o.d(),h&&h.d(),m=!1,_()}}}function We(u){let t,r;return{c(){t=n("span"),r=Q("New content available, click on reload button to update.")},l(s){t=l(s,"SPAN",{});var d=k(t);r=X(d,"New content available, click on reload button to update."),d.forEach(a)},m(s,d){q(s,t,d),i(t,r)},d(s){s&&a(t)}}}function Be(u){let t,r;return{c(){t=n("span"),r=Q("App ready to work offline")},l(s){t=l(s,"SPAN",{});var d=k(t);r=X(d,"App ready to work offline"),d.forEach(a)},m(s,d){q(s,t,d),i(t,r)},d(s){s&&a(t)}}}function je(u){let t,r,s,d;return{c(){t=n("button"),r=Q("Reload"),this.h()},l(f){t=l(f,"BUTTON",{class:!0});var g=k(t);r=X(g,"Reload"),g.forEach(a),this.h()},h(){e(t,"class","svelte-1q69697")},m(f,g){q(f,t,g),i(t,r),s||(d=be(t,"click",u[3]),s=!0)},p:ne,d(f){f&&a(t),s=!1,d()}}}function He(u){let t,r=u[2]&&Ke(u);return{c(){r&&r.c(),t=xe()},l(s){r&&r.l(s),t=xe()},m(s,d){r&&r.m(s,d),q(s,t,d)},p(s,[d]){s[2]?r?r.p(s,d):(r=Ke(s),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null)},i:ne,o:ne,d(s){r&&r.d(s),s&&a(t)}}}function Ue(u,t,r){let s,d,f,g=!1,m=!1;function _(o){r(1,m=!0)}function x(){d&&d.addEventListener("controlling",o=>{o.isUpdate&&window.location.reload()}),f&&f.waiting&&Te(f.waiting,{type:"SKIP_WAITING"}).then(()=>{}).catch(o=>{console.error("NOTIFIED SKIP_WAITING WITH ERROR",o)})}function L(){r(0,g=!1),r(1,m=!1)}return"serviceWorker"in navigator?(d=new ye("/service-worker.js",{scope:"/"}),d.addEventListener("activated",o=>{o.isUpdate||r(0,g=!0)}),d.addEventListener("waiting",_),d.addEventListener("externalwaiting",_),d.register({immediate:!0}).then(o=>f=o).catch(o=>{console.error("cannot register service worker",o)})):console.warn("Service workers are not supported."),u.$$.update=()=>{u.$$.dirty&3&&r(2,s=g||m)},[g,m,s,x,L]}class Ge extends ue{constructor(t){super();he(this,t,Ue,He,fe,{})}}function ze(u){let t,r,s,d,f,g,m,_,x,L,o,h,v,w,A,I,E,C,D,K,j,O,V,$,y,W,S,N,b,H,U,T,G,B,z,ee,F,te,Z,J,ie,Y,oe,ce,se,ae,le;z=new Ve({});const ke=u[1].default,R=Se(ke,u,u[0],null);return ae=new Ge({}),{c(){t=n("link"),r=n("link"),s=n("meta"),d=n("meta"),f=n("link"),g=n("meta"),m=n("meta"),_=n("link"),x=n("link"),L=n("link"),o=n("link"),h=n("link"),v=n("link"),w=n("link"),A=n("link"),I=n("link"),E=n("link"),C=n("link"),D=n("link"),K=n("link"),j=n("link"),O=n("link"),V=n("link"),$=n("link"),y=n("link"),W=n("link"),S=n("link"),N=n("link"),b=n("link"),H=n("link"),U=n("link"),T=n("link"),G=n("link"),B=M(),Ie(z.$$.fragment),ee=M(),F=n("main"),R&&R.c(),te=M(),Z=n("footer"),J=n("p"),ie=Q("Visit "),Y=n("a"),oe=Q("kit.svelte.dev"),ce=Q(" to learn SvelteKit."),se=M(),Ie(ae.$$.fragment),this.h()},l(c){const p=Re('[data-svelte="svelte-qoiy54"]',document.head);t=l(p,"LINK",{rel:!0,href:!0}),r=l(p,"LINK",{rel:!0,href:!0}),s=l(p,"META",{name:!0,content:!0}),d=l(p,"META",{name:!0,content:!0}),f=l(p,"LINK",{rel:!0,href:!0}),g=l(p,"META",{name:!0,content:!0}),m=l(p,"META",{name:!0,content:!0}),_=l(p,"LINK",{rel:!0,href:!0,media:!0}),x=l(p,"LINK",{rel:!0,href:!0,media:!0}),L=l(p,"LINK",{rel:!0,href:!0,media:!0}),o=l(p,"LINK",{rel:!0,href:!0,media:!0}),h=l(p,"LINK",{rel:!0,href:!0,media:!0}),v=l(p,"LINK",{rel:!0,href:!0,media:!0}),w=l(p,"LINK",{rel:!0,href:!0,media:!0}),A=l(p,"LINK",{rel:!0,href:!0,media:!0}),I=l(p,"LINK",{rel:!0,href:!0,media:!0}),E=l(p,"LINK",{rel:!0,href:!0,media:!0}),C=l(p,"LINK",{rel:!0,href:!0,media:!0}),D=l(p,"LINK",{rel:!0,href:!0,media:!0}),K=l(p,"LINK",{rel:!0,href:!0,media:!0}),j=l(p,"LINK",{rel:!0,href:!0,media:!0}),O=l(p,"LINK",{rel:!0,href:!0,media:!0}),V=l(p,"LINK",{rel:!0,href:!0,media:!0}),$=l(p,"LINK",{rel:!0,href:!0,media:!0}),y=l(p,"LINK",{rel:!0,href:!0,media:!0}),W=l(p,"LINK",{rel:!0,href:!0,media:!0}),S=l(p,"LINK",{rel:!0,href:!0,media:!0}),N=l(p,"LINK",{rel:!0,href:!0,media:!0}),b=l(p,"LINK",{rel:!0,href:!0,media:!0}),H=l(p,"LINK",{rel:!0,href:!0,media:!0}),U=l(p,"LINK",{rel:!0,href:!0,media:!0}),T=l(p,"LINK",{rel:!0,href:!0,media:!0}),G=l(p,"LINK",{rel:!0,href:!0,media:!0}),p.forEach(a),B=P(c),Le(z.$$.fragment,c),ee=P(c),F=l(c,"MAIN",{class:!0});var ge=k(F);R&&R.l(ge),ge.forEach(a),te=P(c),Z=l(c,"FOOTER",{class:!0});var we=k(Z);J=l(we,"P",{});var de=k(J);ie=X(de,"Visit "),Y=l(de,"A",{href:!0,class:!0});var _e=k(Y);oe=X(_e,"kit.svelte.dev"),_e.forEach(a),ce=X(de," to learn SvelteKit."),de.forEach(a),we.forEach(a),se=P(c),Le(ae.$$.fragment,c),this.h()},h(){e(t,"rel","manifest"),e(t,"href","/manifest.webmanifest"),e(r,"rel","apple-touch-icon"),e(r,"href","/apple-icon-180.png"),e(s,"name","description"),e(s,"content","This is a Svelte-Kit PWA skeleton app based on the regular Svelte-kit app."),e(d,"name","apple-mobile-web-app-capable"),e(d,"content","yes"),e(f,"rel","apple-touch-icon"),e(f,"href","/pwa-192x192.png"),e(g,"name","msapplication-TileColor"),e(g,"content","#00aba9"),e(m,"name","theme-color"),e(m,"content","#ffffff"),e(_,"rel","apple-touch-startup-image"),e(_,"href","/apple-splash-2048-2732.jpg"),e(_,"media","(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"),e(x,"rel","apple-touch-startup-image"),e(x,"href","/apple-splash-2732-2048.jpg"),e(x,"media","(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"),e(L,"rel","apple-touch-startup-image"),e(L,"href","/apple-splash-1668-2388.jpg"),e(L,"media","(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"),e(o,"rel","apple-touch-startup-image"),e(o,"href","/apple-splash-2388-1668.jpg"),e(o,"media","(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"),e(h,"rel","apple-touch-startup-image"),e(h,"href","/apple-splash-1536-2048.jpg"),e(h,"media","(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"),e(v,"rel","apple-touch-startup-image"),e(v,"href","/apple-splash-2048-1536.jpg"),e(v,"media","(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"),e(w,"rel","apple-touch-startup-image"),e(w,"href","/apple-splash-1668-2224.jpg"),e(w,"media","(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"),e(A,"rel","apple-touch-startup-image"),e(A,"href","/apple-splash-2224-1668.jpg"),e(A,"media","(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"),e(I,"rel","apple-touch-startup-image"),e(I,"href","/apple-splash-1620-2160.jpg"),e(I,"media","(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"),e(E,"rel","apple-touch-startup-image"),e(E,"href","/apple-splash-2160-1620.jpg"),e(E,"media","(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"),e(C,"rel","apple-touch-startup-image"),e(C,"href","/apple-splash-1284-2778.jpg"),e(C,"media","(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"),e(D,"rel","apple-touch-startup-image"),e(D,"href","/apple-splash-2778-1284.jpg"),e(D,"media","(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"),e(K,"rel","apple-touch-startup-image"),e(K,"href","/apple-splash-1170-2532.jpg"),e(K,"media","(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"),e(j,"rel","apple-touch-startup-image"),e(j,"href","/apple-splash-2532-1170.jpg"),e(j,"media","(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"),e(O,"rel","apple-touch-startup-image"),e(O,"href","/apple-splash-1125-2436.jpg"),e(O,"media","(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"),e(V,"rel","apple-touch-startup-image"),e(V,"href","/apple-splash-2436-1125.jpg"),e(V,"media","(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"),e($,"rel","apple-touch-startup-image"),e($,"href","/apple-splash-1242-2688.jpg"),e($,"media","(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"),e(y,"rel","apple-touch-startup-image"),e(y,"href","/apple-splash-2688-1242.jpg"),e(y,"media","(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"),e(W,"rel","apple-touch-startup-image"),e(W,"href","/apple-splash-828-1792.jpg"),e(W,"media","(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"),e(S,"rel","apple-touch-startup-image"),e(S,"href","/apple-splash-1792-828.jpg"),e(S,"media","(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"),e(N,"rel","apple-touch-startup-image"),e(N,"href","/apple-splash-1242-2208.jpg"),e(N,"media","(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"),e(b,"rel","apple-touch-startup-image"),e(b,"href","/apple-splash-2208-1242.jpg"),e(b,"media","(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"),e(H,"rel","apple-touch-startup-image"),e(H,"href","/apple-splash-750-1334.jpg"),e(H,"media","(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"),e(U,"rel","apple-touch-startup-image"),e(U,"href","/apple-splash-1334-750.jpg"),e(U,"media","(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"),e(T,"rel","apple-touch-startup-image"),e(T,"href","/apple-splash-640-1136.jpg"),e(T,"media","(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"),e(G,"rel","apple-touch-startup-image"),e(G,"href","/apple-splash-1136-640.jpg"),e(G,"media","(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"),e(F,"class","svelte-1izrdc8"),e(Y,"href","https://kit.svelte.dev"),e(Y,"class","svelte-1izrdc8"),e(Z,"class","svelte-1izrdc8")},m(c,p){i(document.head,t),i(document.head,r),i(document.head,s),i(document.head,d),i(document.head,f),i(document.head,g),i(document.head,m),i(document.head,_),i(document.head,x),i(document.head,L),i(document.head,o),i(document.head,h),i(document.head,v),i(document.head,w),i(document.head,A),i(document.head,I),i(document.head,E),i(document.head,C),i(document.head,D),i(document.head,K),i(document.head,j),i(document.head,O),i(document.head,V),i(document.head,$),i(document.head,y),i(document.head,W),i(document.head,S),i(document.head,N),i(document.head,b),i(document.head,H),i(document.head,U),i(document.head,T),i(document.head,G),q(c,B,p),Ne(z,c,p),q(c,ee,p),q(c,F,p),R&&R.m(F,null),q(c,te,p),q(c,Z,p),i(Z,J),i(J,ie),i(J,Y),i(Y,oe),i(J,ce),q(c,se,p),Ne(ae,c,p),le=!0},p(c,[p]){R&&R.p&&(!le||p&1)&&Me(R,ke,c,c[0],p,null,null)},i(c){le||(ve(z.$$.fragment,c),ve(R,c),ve(ae.$$.fragment,c),le=!0)},o(c){me(z.$$.fragment,c),me(R,c),me(ae.$$.fragment,c),le=!1},d(c){a(t),a(r),a(s),a(d),a(f),a(g),a(m),a(_),a(x),a(L),a(o),a(h),a(v),a(w),a(A),a(I),a(E),a(C),a(D),a(K),a(j),a(O),a(V),a($),a(y),a(W),a(S),a(N),a(b),a(H),a(U),a(T),a(G),c&&a(B),Ee(z,c),c&&a(ee),c&&a(F),R&&R.d(c),c&&a(te),c&&a(Z),c&&a(se),Ee(ae,c)}}}function Fe(u,t,r){let{$$slots:s={},$$scope:d}=t;return u.$$set=f=>{"$$scope"in f&&r(0,d=f.$$scope)},[d,s]}class Je extends ue{constructor(t){super();he(this,t,Fe,ze,fe,{})}}export{Je as default};