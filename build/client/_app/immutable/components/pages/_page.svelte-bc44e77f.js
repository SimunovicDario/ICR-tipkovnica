import{S as ge,i as pe,s as _e,k as m,l as g,m as b,h,n as _,p as u,b as W,G as s,B as Y,I as ve,q as S,a as N,r as D,c as L,J as H,o as zt,K as me,u as te,L as Re,w as ke,x as ye,y as we,f as Ie,t as xe,z as je,e as ct,M as ht}from"../../chunks/index-b14742d4.js";import{w as Tt}from"../../chunks/index-3b55d3c1.js";const Se=Tt([""]),se=Tt("");function ut(o,e,l){const r=o.slice();return r[3]=e[l],r}function dt(o){let e,l,r,t,n,i=o[3]+"",a,v,d,x;return{c(){e=m("li"),l=m("div"),r=m("a"),t=m("div"),n=m("h2"),a=S(i),v=N(),this.h()},l(E){e=g(E,"LI",{class:!0});var w=b(e);l=g(w,"DIV",{class:!0});var M=b(l);r=g(M,"A",{class:!0,style:!0,href:!0,id:!0});var z=b(r);t=g(z,"DIV",{class:!0});var c=b(t);n=g(c,"H2",{style:!0,class:!0});var p=b(n);a=D(p,i),p.forEach(h),c.forEach(h),z.forEach(h),M.forEach(h),v=L(w),w.forEach(h),this.h()},h(){u(n,"color","black"),_(n,"class","svelte-1t5jhs4"),_(t,"class","button svelte-1t5jhs4"),_(r,"class","hexLink svelte-1t5jhs4"),u(r,"background-color","grey"),_(r,"href","/"),_(r,"id",o[3]),_(l,"class","hexIn svelte-1t5jhs4"),_(e,"class","hex svelte-1t5jhs4")},m(E,w){W(E,e,w),s(e,l),s(l,r),s(r,t),s(t,n),s(n,a),s(e,v),d||(x=H(r,"click",o[2]),d=!0)},p:Y,d(E){E&&h(e),d=!1,x()}}}function Et(o){let e,l,r=o[1],t=[];for(let n=0;n<r.length;n+=1)t[n]=dt(ut(o,r,n));return{c(){e=m("div"),l=m("ul");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=g(n,"DIV",{style:!0,class:!0});var i=b(e);l=g(i,"UL",{id:!0,style:!0,class:!0});var a=b(l);for(let v=0;v<t.length;v+=1)t[v].l(a);a.forEach(h),i.forEach(h),this.h()},h(){_(l,"id","hexGrid"),u(l,"overflow","hidden"),_(l,"class","svelte-1t5jhs4"),u(e,"display",o[0]=="hex"?"flex":"none"),_(e,"class","svelte-1t5jhs4")},m(n,i){W(n,e,i),s(e,l);for(let a=0;a<t.length;a+=1)t[a].m(l,null)},p(n,[i]){if(i&6){r=n[1];let a;for(a=0;a<r.length;a+=1){const v=ut(n,r,a);t[a]?t[a].p(v,i):(t[a]=dt(v),t[a].c(),t[a].m(l,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=r.length}i&1&&u(e,"display",n[0]=="hex"?"flex":"none")},i:Y,o:Y,d(n){n&&h(e),ve(t,n)}}}function Nt(o,e,l){const r=[".","k","w","m","u","q","'","c","h","t","o","f","z","j","i","e","Space","n","g","b","v","r","s","a","d","Ret",",","x","p","l","y","Shift",""];function t(i){console.log(i.srcElement.innerText),Se.set([i.srcElement.innerText])}let n="";return se.subscribe(i=>{console.log(i),l(0,n=i)}),[n,r,t]}class Lt extends ge{constructor(e){super(),pe(this,e,Nt,Et,_e,{})}}function ft(o,e,l){const r=o.slice();return r[3]=e[l],r}function mt(o,e,l){const r=o.slice();return r[6]=e[l],r}function gt(o){let e,l=o[6]+"",r,t,n;return{c(){e=m("div"),r=S(l),this.h()},l(i){e=g(i,"DIV",{style:!0});var a=b(e);r=D(a,l),a.forEach(h),this.h()},h(){u(e,"border","1px solid black"),u(e,"flex",(o[6]=="Space"?2:1)+" 1"),u(e,"align-items","center"),u(e,"justify-content","center"),u(e,"display","flex")},m(i,a){W(i,e,a),s(e,r),t||(n=H(e,"click",o[2]),t=!0)},p:Y,d(i){i&&h(e),t=!1,n()}}}function pt(o){let e,l,r=o[3],t=[];for(let n=0;n<r.length;n+=1)t[n]=gt(mt(o,r,n));return{c(){e=m("div");for(let n=0;n<t.length;n+=1)t[n].c();l=N(),this.h()},l(n){e=g(n,"DIV",{style:!0});var i=b(e);for(let a=0;a<t.length;a+=1)t[a].l(i);l=L(i),i.forEach(h),this.h()},h(){u(e,"display","flex"),u(e,"flex-wrap","wrap"),u(e,"align-items","stretch"),u(e,"flex","1")},m(n,i){W(n,e,i);for(let a=0;a<t.length;a+=1)t[a].m(e,null);s(e,l)},p(n,i){if(i&6){r=n[3];let a;for(a=0;a<r.length;a+=1){const v=mt(n,r,a);t[a]?t[a].p(v,i):(t[a]=gt(v),t[a].c(),t[a].m(e,l))}for(;a<t.length;a+=1)t[a].d(1);t.length=r.length}},d(n){n&&h(e),ve(t,n)}}}function St(o){let e,l=o[1],r=[];for(let t=0;t<l.length;t+=1)r[t]=pt(ft(o,l,t));return{c(){e=m("div");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){e=g(t,"DIV",{style:!0});var n=b(e);for(let i=0;i<r.length;i+=1)r[i].l(n);n.forEach(h),this.h()},h(){u(e,"display",o[0]=="mac"?"flex":"none"),u(e,"flex","1"),u(e,"flex-direction","column"),u(e,"align-items","stretch"),u(e,"margin-top","1vh"),u(e,"margin-left","1%"),u(e,"margin-right","1%"),u(e,"margin-bottom","1%")},m(t,n){W(t,e,n);for(let i=0;i<r.length;i+=1)r[i].m(e,null)},p(t,[n]){if(n&6){l=t[1];let i;for(i=0;i<l.length;i+=1){const a=ft(t,l,i);r[i]?r[i].p(a,n):(r[i]=pt(a),r[i].c(),r[i].m(e,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=l.length}n&1&&u(e,"display",t[0]=="mac"?"flex":"none")},i:Y,o:Y,d(t){t&&h(e),ve(r,t)}}}function Dt(o,e,l){const r=[["q","f","u","m","c","k","z"],["Space","o","t","h","Space"],["b","s","r","e","a","w","x"],["Space","i","n","d","Space"],["j","p","v","g","l","y","Ret"]];function t(i){console.log(i.srcElement.innerText),Se.set([i.srcElement.innerText])}let n="";return se.subscribe(i=>{console.log(i),l(0,n=i)}),[n,r,t]}class Wt extends ge{constructor(e){super(),pe(this,e,Dt,St,_e,{})}}function _t(o,e,l){const r=o.slice();return r[3]=e[l],r}function vt(o,e,l){const r=o.slice();return r[6]=e[l],r}function bt(o){let e,l=o[6]+"",r,t,n;return{c(){e=m("div"),r=S(l),this.h()},l(i){e=g(i,"DIV",{style:!0});var a=b(e);r=D(a,l),a.forEach(h),this.h()},h(){u(e,"border",o[6]==""?"":"1px solid black"),u(e,"flex",(o[6]==""?.5:o[6]=="Space"?2:1)+" 1"),u(e,"align-items","center"),u(e,"justify-content","center"),u(e,"display","flex")},m(i,a){W(i,e,a),s(e,r),t||(n=H(e,"click",o[2]),t=!0)},p:Y,d(i){i&&h(e),t=!1,n()}}}function kt(o){let e,l,r=o[3],t=[];for(let n=0;n<r.length;n+=1)t[n]=bt(vt(o,r,n));return{c(){e=m("div");for(let n=0;n<t.length;n+=1)t[n].c();l=N(),this.h()},l(n){e=g(n,"DIV",{style:!0});var i=b(e);for(let a=0;a<t.length;a+=1)t[a].l(i);l=L(i),i.forEach(h),this.h()},h(){u(e,"display","flex"),u(e,"flex-wrap","wrap"),u(e,"align-items","stretch"),u(e,"flex","1")},m(n,i){W(n,e,i);for(let a=0;a<t.length;a+=1)t[a].m(e,null);s(e,l)},p(n,i){if(i&6){r=n[3];let a;for(a=0;a<r.length;a+=1){const v=vt(n,r,a);t[a]?t[a].p(v,i):(t[a]=bt(v),t[a].c(),t[a].m(e,l))}for(;a<t.length;a+=1)t[a].d(1);t.length=r.length}},d(n){n&&h(e),ve(t,n)}}}function Mt(o){let e,l=o[1],r=[];for(let t=0;t<l.length;t+=1)r[t]=kt(_t(o,l,t));return{c(){e=m("div");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){e=g(t,"DIV",{style:!0});var n=b(e);for(let i=0;i<r.length;i+=1)r[i].l(n);n.forEach(h),this.h()},h(){u(e,"display",o[0]=="qwerty"?"flex":"none"),u(e,"flex","1"),u(e,"flex-direction","column"),u(e,"align-items","stretch"),u(e,"margin-top","1vh"),u(e,"margin-left","1%"),u(e,"margin-right","1%"),u(e,"margin-bottom","1%")},m(t,n){W(t,e,n);for(let i=0;i<r.length;i+=1)r[i].m(e,null)},p(t,[n]){if(n&6){l=t[1];let i;for(i=0;i<l.length;i+=1){const a=_t(t,l,i);r[i]?r[i].p(a,n):(r[i]=kt(a),r[i].c(),r[i].m(e,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=l.length}n&1&&u(e,"display",t[0]=="qwerty"?"flex":"none")},i:Y,o:Y,d(t){t&&h(e),ve(r,t)}}}function Vt(o,e,l){const r=[["q","w","e","r","t","z","u","i","o","p"],["","a","s","d","f","g","h","j","k","l",""],["","","y","x","c","v","b","n","m","",""]];function t(i){console.log(i.srcElement.innerText),Se.set([i.srcElement.innerText])}let n="";return se.subscribe(i=>{console.log(i),l(0,n=i)}),[n,r,t]}class Bt extends ge{constructor(e){super(),pe(this,e,Vt,Mt,_e,{})}}const yt=["abeceda","adresa","advent","afekt","agava","agent","agrum","ajvar","akcija","akord","aksiom","akvarij","alarm","alat","album","alergija","alga","alibi","alkohol","alternativa","amater","ambrozija","ameba","amortizer","ampula","ampula","analiza","anemija","anketa","apetit","armada","avion","azil","babun","badem","bager","bajka","bakar","baklava","balada","bandera","bedak","bicikl","bijes","bjegunac","blagajna","bocnuti","brada","bubanj","carina","celer","cimet","cifra","cigla","cjedilo","coprati","crijep","crna","curiti","dabar","danas","debata","decibel","delfin","devet","dignuti","dimnjak","djetinjast","dolazak","efekt","egoist","ekipa","ekonomija","elegija","emisija","emocija","energija","enzim","epitet","faktor","fanatik","feferon","feniks","figura","fikus","fizika","fokus","fotelja","fraza","gablec","gadno","galama","gegati","geodet","gibon","gitara","glagol","gnijezdo","godina","hahar","hajduk","hendikep","hibrid","himna","hiperbola","hladno","hodati","hotel","hrkati","ideal","igla","igra","ikada","ilegalan","imati","inat","insekt","ionako","ironija","jablan","jabuka","jecati","jedanaest","jedriti","jelen","jodlanje","junak","jutros","kabel","kaciga","kamen","karakter","kemija","ketoza","kifla","kisik","klada","klinika","knjiga","labav","labud","lagan","leden","leglo","lice","licenca","lignja","lisica","logika","magnet","maketa","majka","maslina","medalja","medvjed","mekan","mentor","miksati","miljenik","nabava","nadati","nafta","nagluh","najgori","nakit","neolit","nepce","netko","niknuti","oaza","obasjati","ocean","odabrao","ograda","okinuti","okolina","olovo","ormar","osam","pahulja","patka","pauk","pecivo","pedala","penkala","pepeo","plakati","pobjeda","prag","rabljen","raditi","ravno","razarati","razno","realan","refleks","ritam","roditi","ruka","sablja","sadnica","sagnuti","sajla","secirati","sedam","seljak","smijeh","spoj","stijena","tabela","tajno","tehnika","tiho","tkanina","tmurno","toalet","trbuh","trgovina","tugovati","ubaciti","ugoditi","uhvatiti","ukrcati","umiroviti","upisati","urediti","ustupak","utjeha","uzgoj","vabiti","vaga","val","vampir","vilica","vjeverica","voda","vosak","vrijeme","vrhovni","zabava","zabiti","zavod","zbrka","zgoda","zidati","znanje","zrak","zuriti","zvati"];function wt(o){var Qe,Ye;let e,l,r,t,n,i,a,v,d,x,E,w,M=((Qe=o[3])==null?void 0:Qe.height)+"",z,c,p,I,B,P,V,j,A,f,T,G,q,k,y,O=((Ye=o[3])==null?void 0:Ye.width)+"",le,Z,U,re,be,De,K,X,ze,We,ue,Me,Ve,$,Te,Be,de,Oe,Pe,ee,Ee,Ae,fe,qe,Ge,Ne,ie,ne,Ue,Ce,ce,He,Ke,Ze,R=o[1]=="hex"&&It(o);return{c(){e=m("div"),l=m("div"),r=S(`Wordbox\r
            `),t=m("div"),n=m("span"),i=S("Height:"),a=N(),v=m("button"),d=m("img"),E=N(),w=m("span"),z=S(M),c=N(),p=m("button"),I=m("img"),P=N(),V=m("div"),j=m("span"),A=S("Width:"),f=N(),T=m("button"),G=m("img"),k=N(),y=m("span"),le=S(O),Z=N(),U=m("button"),re=m("img"),De=N(),K=m("div"),X=m("input"),We=N(),ue=m("label"),Me=S("MacKenzie"),Ve=N(),$=m("input"),Be=N(),de=m("label"),Oe=S("Metropolis"),Pe=N(),ee=m("input"),Ae=N(),fe=m("label"),qe=S("QWERTY"),Ge=N(),R&&R.c(),Ne=N(),ie=m("div"),ne=m("button"),Ue=S("Save"),Ce=N(),ce=m("button"),He=S("Reset"),this.h()},l(Q){e=g(Q,"DIV",{class:!0});var C=b(e);l=g(C,"DIV",{class:!0});var ae=b(l);r=D(ae,`Wordbox\r
            `),t=g(ae,"DIV",{class:!0});var F=b(t);n=g(F,"SPAN",{class:!0});var Je=b(n);i=D(Je,"Height:"),Je.forEach(h),a=L(F),v=g(F,"BUTTON",{style:!0});var Fe=b(v);d=g(Fe,"IMG",{src:!0,alt:!0}),Fe.forEach(h),E=L(F),w=g(F,"SPAN",{style:!0});var Xe=b(w);z=D(Xe,M),Xe.forEach(h),c=L(F),p=g(F,"BUTTON",{style:!0});var $e=b(p);I=g($e,"IMG",{src:!0,alt:!0}),$e.forEach(h),F.forEach(h),P=L(ae),V=g(ae,"DIV",{class:!0});var oe=b(V);j=g(oe,"SPAN",{class:!0});var et=b(j);A=D(et,"Width:"),et.forEach(h),f=L(oe),T=g(oe,"BUTTON",{style:!0});var tt=b(T);G=g(tt,"IMG",{src:!0,alt:!0}),tt.forEach(h),k=L(oe),y=g(oe,"SPAN",{style:!0});var lt=b(y);le=D(lt,O),lt.forEach(h),Z=L(oe),U=g(oe,"BUTTON",{style:!0});var rt=b(U);re=g(rt,"IMG",{src:!0,alt:!0}),rt.forEach(h),oe.forEach(h),ae.forEach(h),De=L(C),K=g(C,"DIV",{class:!0});var J=b(K);X=g(J,"INPUT",{type:!0,id:!0,name:!0}),We=L(J),ue=g(J,"LABEL",{for:!0});var it=b(ue);Me=D(it,"MacKenzie"),it.forEach(h),Ve=L(J),$=g(J,"INPUT",{type:!0,id:!0,name:!0}),Be=L(J),de=g(J,"LABEL",{for:!0});var nt=b(de);Oe=D(nt,"Metropolis"),nt.forEach(h),Pe=L(J),ee=g(J,"INPUT",{type:!0,id:!0,name:!0}),Ae=L(J),fe=g(J,"LABEL",{for:!0});var at=b(fe);qe=D(at,"QWERTY"),at.forEach(h),J.forEach(h),Ge=L(C),R&&R.l(C),Ne=L(C),ie=g(C,"DIV",{style:!0,class:!0});var Le=b(ie);ne=g(Le,"BUTTON",{style:!0});var ot=b(ne);Ue=D(ot,"Save"),ot.forEach(h),Ce=L(Le),ce=g(Le,"BUTTON",{style:!0});var st=b(ce);He=D(st,"Reset"),st.forEach(h),Le.forEach(h),C.forEach(h),this.h()},h(){_(n,"class","menu-item-title svelte-edwtxx"),me(d.src,x="/zoom-in.svg")||_(d,"src",x),_(d,"alt","Zoom in"),u(v,"margin-left","auto"),u(w,"margin-top","auto"),u(w,"margin-bottom","auto"),u(w,"margin-left","5px"),u(w,"margin-right","5px"),me(I.src,B="/zoom-out.svg")||_(I,"src",B),_(I,"alt","Zoom out"),u(p,"right","0"),_(t,"class","menu-item svelte-edwtxx"),_(j,"class","menu-item-title svelte-edwtxx"),me(G.src,q="/zoom-in.svg")||_(G,"src",q),_(G,"alt","Zoom in"),u(T,"margin-left","auto"),u(y,"margin-top","auto"),u(y,"margin-bottom","auto"),u(y,"margin-left","5px"),u(y,"margin-right","5px"),me(re.src,be="/zoom-out.svg")||_(re,"src",be),_(re,"alt","Zoom out"),u(U,"right","0"),_(V,"class","menu-item svelte-edwtxx"),_(l,"class","svelte-edwtxx"),_(X,"type","radio"),_(X,"id","mac"),X.value="mac",_(X,"name","keyboard"),X.checked=ze=o[1]=="mac",_(ue,"for","mac"),_($,"type","radio"),_($,"id","hex"),$.value="hex",_($,"name","keyboard"),$.checked=Te=o[1]=="hex",_(de,"for","hex"),_(ee,"type","radio"),_(ee,"id","qwerty"),ee.value="qwerty",_(ee,"name","keyboard"),ee.checked=Ee=o[1]=="qwerty",_(fe,"for","qwerty"),_(K,"class","svelte-edwtxx"),u(ne,"margin-left","auto"),u(ne,"margin-right","2px"),u(ce,"margin-right","auto"),u(ie,"display","flex"),_(ie,"class","svelte-edwtxx"),_(e,"class","dropdown-content svelte-edwtxx")},m(Q,C){W(Q,e,C),s(e,l),s(l,r),s(l,t),s(t,n),s(n,i),s(t,a),s(t,v),s(v,d),s(t,E),s(t,w),s(w,z),s(t,c),s(t,p),s(p,I),s(l,P),s(l,V),s(V,j),s(j,A),s(V,f),s(V,T),s(T,G),s(V,k),s(V,y),s(y,le),s(V,Z),s(V,U),s(U,re),s(e,De),s(e,K),s(K,X),s(K,We),s(K,ue),s(ue,Me),s(K,Ve),s(K,$),s(K,Be),s(K,de),s(de,Oe),s(K,Pe),s(K,ee),s(K,Ae),s(K,fe),s(fe,qe),s(e,Ge),R&&R.m(e,null),s(e,Ne),s(e,ie),s(ie,ne),s(ne,Ue),s(ie,Ce),s(ie,ce),s(ce,He),Ke||(Ze=[H(v,"click",o[8]),H(p,"click",o[9]),H(T,"click",o[10]),H(U,"click",o[11]),H(X,"click",o[12]),H($,"click",o[13]),H(ee,"click",o[14]),H(ne,"click",o[6]),H(ce,"click",o[7])],Ke=!0)},p(Q,C){var ae,F;C&8&&M!==(M=((ae=Q[3])==null?void 0:ae.height)+"")&&te(z,M),C&8&&O!==(O=((F=Q[3])==null?void 0:F.width)+"")&&te(le,O),C&2&&ze!==(ze=Q[1]=="mac")&&(X.checked=ze),C&2&&Te!==(Te=Q[1]=="hex")&&($.checked=Te),C&2&&Ee!==(Ee=Q[1]=="qwerty")&&(ee.checked=Ee),Q[1]=="hex"?R?R.p(Q,C):(R=It(Q),R.c(),R.m(e,Ne)):R&&(R.d(1),R=null)},d(Q){Q&&h(e),R&&R.d(),Ke=!1,Re(Ze)}}}function It(o){var V;let e,l,r,t,n,i,a,v,d,x,E,w=((V=o[2])==null?void 0:V.size)+"",M,z,c,p,I,B,P;return{c(){e=m("div"),l=S(`Keyboard\r
            `),r=m("div"),t=m("span"),n=S("Size:"),i=N(),a=m("button"),v=m("img"),x=N(),E=m("span"),M=S(w),z=N(),c=m("button"),p=m("img"),this.h()},l(j){e=g(j,"DIV",{class:!0});var A=b(e);l=D(A,`Keyboard\r
            `),r=g(A,"DIV",{class:!0});var f=b(r);t=g(f,"SPAN",{class:!0});var T=b(t);n=D(T,"Size:"),T.forEach(h),i=L(f),a=g(f,"BUTTON",{style:!0});var G=b(a);v=g(G,"IMG",{src:!0,alt:!0}),G.forEach(h),x=L(f),E=g(f,"SPAN",{style:!0});var q=b(E);M=D(q,w),q.forEach(h),z=L(f),c=g(f,"BUTTON",{style:!0});var k=b(c);p=g(k,"IMG",{src:!0,alt:!0}),k.forEach(h),f.forEach(h),A.forEach(h),this.h()},h(){_(t,"class","menu-item-title svelte-edwtxx"),me(v.src,d="/zoom-in.svg")||_(v,"src",d),_(v,"alt","Zoom in"),u(a,"margin-left","auto"),u(E,"margin-top","auto"),u(E,"margin-bottom","auto"),u(E,"margin-left","5px"),u(E,"margin-right","5px"),me(p.src,I="/zoom-out.svg")||_(p,"src",I),_(p,"alt","Zoom out"),u(c,"right","0"),_(r,"class","menu-item svelte-edwtxx"),_(e,"class","svelte-edwtxx")},m(j,A){W(j,e,A),s(e,l),s(e,r),s(r,t),s(t,n),s(r,i),s(r,a),s(a,v),s(r,x),s(r,E),s(E,M),s(r,z),s(r,c),s(c,p),B||(P=[H(a,"click",o[15]),H(c,"click",o[16])],B=!0)},p(j,A){var f;A&4&&w!==(w=((f=j[2])==null?void 0:f.size)+"")&&te(M,w)},d(j){j&&h(e),B=!1,Re(P)}}}function Ot(o){let e,l=o[0]&&wt(o);return{c(){e=m("div"),l&&l.c(),this.h()},l(r){e=g(r,"DIV",{class:!0});var t=b(e);l&&l.l(t),t.forEach(h),this.h()},h(){_(e,"class","dropdown svelte-edwtxx")},m(r,t){W(r,e,t),l&&l.m(e,null)},p(r,[t]){r[0]?l?l.p(r,t):(l=wt(r),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i:Y,o:Y,d(r){r&&h(e),l&&l.d()}}}function Pt(o,e,l){let{showOptions:r=!1}=e,t="",n,i={size:75,elem:null},a={width:50,height:20,elem:null};zt(async()=>{n=window.localStorage,l(2,i={size:isNaN(parseInt(n.getItem("hexGrid-size")??""))?75:parseInt(n.getItem("hexGrid-size")??""),elem:null}),l(3,a={width:isNaN(parseInt(n.getItem("wordbox-width")??""))?50:parseInt(n.getItem("wordbox-width")??""),height:isNaN(parseInt(n.getItem("wordbox-height")??""))?20:parseInt(n.getItem("wordbox-height")??""),elem:null}),l(1,t=n.getItem("keyboard")??""),se.set(t),se.subscribe(j=>{l(1,t=j),t=="hex"&&(l(2,i.elem=document.getElementById("hexGrid"),i),l(2,i.elem.style.width=i.size+"%",i))}),t=="hex"&&(l(2,i.elem=document.getElementById("hexGrid"),i),l(2,i.elem.style.width=i.size+"%",i)),l(3,a.elem=document.getElementById("wordContainer"),a),l(3,a.elem.style.height=a.height+"vh",a),l(3,a.elem.style.width=a.width+"%",a)});function v(j){j==="wordbox-height"?(l(3,a.height--,a),l(3,a.elem.style.height=a.height+"vh",a)):j==="wordbox-width"?(l(3,a.width--,a),l(3,a.elem.style.width=a.width+"%",a)):(l(2,i.size--,i),l(2,i.elem.style.width=i.size+"%",i))}function d(j){j==="wordbox-height"?(l(3,a.height++,a),l(3,a.elem.style.height=a.height+"vh",a)):j==="wordbox-width"?(l(3,a.width++,a),l(3,a.elem.style.width=a.width+"%",a)):(l(2,i.size++,i),l(2,i.elem.style.width=i.size+"%",i))}function x(){i.elem&&n.setItem("hexGrid-size",i.size.toString()),n.setItem("keyboard",t),n.setItem("wordbox-width",a.width.toString()),n.setItem("wordbox-height",a.height.toString())}function E(){n.clear(),i.elem&&(l(2,i.size=75,i),l(2,i.elem.style.width=i.size+"%",i)),l(3,a.height=20,a),l(3,a.width=50,a),l(3,a.elem.style.height=a.height+"vh",a),l(3,a.elem.style.width=a.width+"%",a)}const w=()=>d("wordbox-height"),M=()=>v("wordbox-height"),z=()=>d("wordbox-width"),c=()=>v("wordbox-width"),p=()=>se.set("mac"),I=()=>se.set("hex"),B=()=>se.set("qwerty"),P=()=>d("keyboard"),V=()=>v("keyboard");return o.$$set=j=>{"showOptions"in j&&l(0,r=j.showOptions)},[r,t,i,a,v,d,x,E,w,M,z,c,p,I,B,P,V]}class At extends ge{constructor(e){super(),pe(this,e,Pt,Ot,_e,{showOptions:0})}}function xt(o,e,l){const r=o.slice();return r[28]=e[l],r[30]=l,r}function qt(o){let e,l,r=o[3]+o[4]+"",t,n,i,a,v,d,x,E,w,M,z,c,p=Math.round((o[3]+o[4])/5*(60/he))+"",I,B,P,V,j=Math.round(o[3]/5*(60/he))+"",A;return{c(){e=m("div"),l=S("Number of letters written: "),t=S(r),n=N(),i=m("div"),a=S("Number of letters written correctly: "),v=S(o[3]),d=N(),x=m("div"),E=S("Number of letters written incorrectly: "),w=S(o[4]),M=N(),z=m("div"),c=S("WPM: "),I=S(p),B=N(),P=m("div"),V=S("Corrected WPM: "),A=S(j)},l(f){e=g(f,"DIV",{});var T=b(e);l=D(T,"Number of letters written: "),t=D(T,r),T.forEach(h),n=L(f),i=g(f,"DIV",{});var G=b(i);a=D(G,"Number of letters written correctly: "),v=D(G,o[3]),G.forEach(h),d=L(f),x=g(f,"DIV",{});var q=b(x);E=D(q,"Number of letters written incorrectly: "),w=D(q,o[4]),q.forEach(h),M=L(f),z=g(f,"DIV",{});var k=b(z);c=D(k,"WPM: "),I=D(k,p),k.forEach(h),B=L(f),P=g(f,"DIV",{});var y=b(P);V=D(y,"Corrected WPM: "),A=D(y,j),y.forEach(h)},m(f,T){W(f,e,T),s(e,l),s(e,t),W(f,n,T),W(f,i,T),s(i,a),s(i,v),W(f,d,T),W(f,x,T),s(x,E),s(x,w),W(f,M,T),W(f,z,T),s(z,c),s(z,I),W(f,B,T),W(f,P,T),s(P,V),s(P,A)},p(f,T){T&24&&r!==(r=f[3]+f[4]+"")&&te(t,r),T&8&&te(v,f[3]),T&16&&te(w,f[4]),T&24&&p!==(p=Math.round((f[3]+f[4])/5*(60/he))+"")&&te(I,p),T&8&&j!==(j=Math.round(f[3]/5*(60/he))+"")&&te(A,j)},d(f){f&&h(e),f&&h(n),f&&h(i),f&&h(d),f&&h(x),f&&h(M),f&&h(z),f&&h(B),f&&h(P)}}}function Gt(o){let e,l=o[6],r=[];for(let t=0;t<l.length;t+=1)r[t]=jt(xt(o,l,t));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=ct()},l(t){for(let n=0;n<r.length;n+=1)r[n].l(t);e=ct()},m(t,n){for(let i=0;i<r.length;i+=1)r[i].m(t,n);W(t,e,n)},p(t,n){if(n&64){l=t[6];let i;for(i=0;i<l.length;i+=1){const a=xt(t,l,i);r[i]?r[i].p(a,n):(r[i]=jt(a),r[i].c(),r[i].m(e.parentNode,e))}for(;i<r.length;i+=1)r[i].d(1);r.length=l.length}},d(t){ve(r,t),t&&h(e)}}}function jt(o){let e,l,r=o[28]+"",t;return{c(){e=m("span"),l=m("span"),t=S(r),this.h()},l(n){e=g(n,"SPAN",{class:!0});var i=b(e);l=g(i,"SPAN",{});var a=b(l);t=D(a,r),a.forEach(h),i.forEach(h),this.h()},h(){_(e,"class","word "+(o[30]==0?"currentWord":"nextWord"))},m(n,i){W(n,e,i),s(e,l),s(l,t)},p(n,i){i&64&&r!==(r=n[28]+"")&&te(t,r)},d(n){n&&h(e)}}}function Ut(o){let e,l;return{c(){e=m("span"),l=S("DONE")},l(r){e=g(r,"SPAN",{});var t=b(e);l=D(t,"DONE"),t.forEach(h)},m(r,t){W(r,e,t),s(e,l)},p:Y,d(r){r&&h(e)}}}function Ct(o){let e,l,r;return{c(){e=m("input"),this.h()},l(t){e=g(t,"INPUT",{id:!0,style:!0,autocomplete:!0}),this.h()},h(){_(e,"id","userInput"),u(e,"width","99%"),u(e,"text-align","center"),u(e,"margin-left","auto"),u(e,"margin-right","auto"),u(e,"margin-bottom","0"),u(e,"margin-top","auto"),_(e,"autocomplete","off"),e.disabled=!0},m(t,n){W(t,e,n),ht(e,o[7]),l||(r=H(e,"input",o[9]),l=!0)},p(t,n){n&128&&e.value!==t[7]&&ht(e,t[7])},d(t){t&&h(e),l=!1,r()}}}function Ht(o){let e,l,r,t=he-o[2]+"",n,i,a,v,d,x,E,w,M,z,c,p,I,B,P,V;a=new At({props:{showOptions:o[0]}});function j(k,y){return k[5]?qt:Gt}let A=j(o),f=A(o);function T(k,y){return k[1]?Ut:Ct}let G=T(o),q=G(o);return{c(){e=m("div"),l=m("div"),r=m("span"),n=S(t),i=N(),ke(a.$$.fragment),v=N(),d=m("button"),x=S("Options"),E=N(),w=m("button"),M=S("Restart"),z=N(),c=m("div"),p=m("div"),f.c(),I=N(),q.c(),this.h()},l(k){e=g(k,"DIV",{id:!0,class:!0});var y=b(e);l=g(y,"DIV",{class:!0,style:!0});var O=b(l);r=g(O,"SPAN",{style:!0});var le=b(r);n=D(le,t),le.forEach(h),i=L(O),ye(a.$$.fragment,O),v=L(O),d=g(O,"BUTTON",{style:!0});var Z=b(d);x=D(Z,"Options"),Z.forEach(h),E=L(O),w=g(O,"BUTTON",{style:!0});var U=b(w);M=D(U,"Restart"),U.forEach(h),O.forEach(h),z=L(y),c=g(y,"DIV",{class:!0,style:!0});var re=b(c);p=g(re,"DIV",{class:!0,id:!0,style:!0});var be=b(p);f.l(be),be.forEach(h),re.forEach(h),I=L(y),q.l(y),y.forEach(h),this.h()},h(){u(r,"width","100%"),u(d,"margin-left","auto"),u(d,"right","0"),u(w,"margin-left","auto"),u(w,"right","0"),_(l,"class","stat-bar"),u(l,"max-height","28px"),u(l,"min-height","28px"),u(l,"border","1px solid pink"),u(l,"width","100%"),u(l,"display","flex"),_(p,"class","words svelte-1utsp6n"),_(p,"id","words"),_(p,"style",""),_(c,"class","word-box-outer"),u(c,"height","100%"),u(c,"overflow","hidden"),u(c,"box-sizing","border-box"),_(e,"id","wordContainer"),_(e,"class","word-container svelte-1utsp6n")},m(k,y){W(k,e,y),s(e,l),s(l,r),s(r,n),s(l,i),we(a,l,null),s(l,v),s(l,d),s(d,x),s(l,E),s(l,w),s(w,M),s(e,z),s(e,c),s(c,p),f.m(p,null),s(e,I),q.m(e,null),B=!0,P||(V=[H(d,"click",o[8]),H(w,"click",Rt)],P=!0)},p(k,[y]){(!B||y&4)&&t!==(t=he-k[2]+"")&&te(n,t);const O={};y&1&&(O.showOptions=k[0]),a.$set(O),A===(A=j(k))&&f?f.p(k,y):(f.d(1),f=A(k),f&&(f.c(),f.m(p,null))),G===(G=T(k))&&q?q.p(k,y):(q.d(1),q=G(k),q&&(q.c(),q.m(e,null)))},i(k){B||(Ie(a.$$.fragment,k),B=!0)},o(k){xe(a.$$.fragment,k),B=!1},d(k){k&&h(e),je(a),f.d(),q.d(),P=!1,Re(V)}}}const he=60;function Kt(o){return Math.floor(Math.random()*o)}function Rt(){window.location.reload()}function Zt(o,e,l){let r=!1;zt(async()=>{t(),setTimeout(()=>{c=document.getElementById("words"),c==null||c.children[0].classList.add("currentWord"),c==null||c.children[0].scrollIntoView()},50),Se.subscribe(k=>{const y=k[0];y!==""&&(console.log(y),["Space","Ret"].includes(y)?V(y):(l(7,I+=y),f(y)))}),document.getElementById("hexGrid")});function t(){l(6,z=[]);for(let k=0;k<250;k++)z.push(yt[Kt(yt.length)])}let n,i,a=!1,v=0;function d(){n=Date.now(),i=setInterval(function(){var k=Date.now()-n;l(2,v=Math.floor(k/1e3)),v==he&&(clearInterval(i),l(1,a=!0),M())},100)}let x=0,E=0,w=!1;function M(){I.length>0&&B.push(I),l(3,x=0),l(4,E=0),B.forEach((k,y)=>{for(let O=0;O<k.length;O++)k[O]===z[y][O]?l(3,x++,x):l(4,E++,E)}),l(5,w=!0)}let z=[""],c,p=0,I="",B=[],P=[];function V(k){if(k=="Space"){if(I.length==0)return;j()}else if(k=="Ret"){if(I.length===0){A();return}if(I.length>z[p].length)return;T()}}function j(){B.push(I),c==null||c.children[p].classList.toggle("currentWord"),P.push([...c.children[p].childNodes]),c.children[p].innerHTML=z[p],I!==z[p]?(c==null||c.children[p].classList.add("incorrect"),c==null||c.children[p].classList.remove("correct")):(c==null||c.children[p].classList.add("correct"),c==null||c.children[p].classList.remove("incorrect")),l(7,I=""),p++,c==null||c.children[p].classList.toggle("nextWord"),c==null||c.children[p].classList.add("currentWord"),c==null||c.children[p].scrollIntoView({behavior:"smooth"})}function A(){var k;B.length!==0&&(l(7,I=((k=B.pop())==null?void 0:k.toString())??""),c==null||c.children[p].classList.toggle("currentWord"),c==null||c.children[p].classList.add("nextWord"),p--,c==null||c.children[p].classList.remove("correct"),c==null||c.children[p].classList.remove("incorrect"),c.children[p].innerHTML="",P.pop().forEach(y=>{c==null||c.children[p].append(y)}),c==null||c.children[p].classList.add("currentWord"),c==null||c.children[p].scrollIntoView({behavior:"smooth"}))}function f(k){n||d();const y=z[p];if(I.length>y.length)return;const O=I.length-1,le=k;let Z=c.children[p];const U=document.createElement("span");U.innerText=y[O],le===y[O]?(U.classList.add("correct"),U.classList.remove("incorrect")):(U.classList.add("incorrect"),U.classList.remove("correct")),Z.children[Z.children.length-1].innerHTML=Z.children[Z.children.length-1].innerHTML.slice(1),Z.insertBefore(U,Z.children[Z.children.length-1])}function T(){const k=I.length-1;l(7,I=I.slice(0,I.length-1));let y=c.children[p];y.children[y.children.length-1].innerHTML=z[p][k]+y.children[y.children.length-1].innerHTML,y.removeChild(y.children[y.children.length-2])}const G=()=>l(0,r=!r);function q(){I=this.value,l(7,I)}return[r,a,v,x,E,w,z,I,G,q]}class Qt extends ge{constructor(e){super(),pe(this,e,Zt,Ht,_e,{})}}function Yt(o){let e,l,r,t,n,i,a,v;return e=new Qt({}),r=new Lt({}),n=new Wt({}),a=new Bt({}),{c(){ke(e.$$.fragment),l=N(),ke(r.$$.fragment),t=N(),ke(n.$$.fragment),i=N(),ke(a.$$.fragment)},l(d){ye(e.$$.fragment,d),l=L(d),ye(r.$$.fragment,d),t=L(d),ye(n.$$.fragment,d),i=L(d),ye(a.$$.fragment,d)},m(d,x){we(e,d,x),W(d,l,x),we(r,d,x),W(d,t,x),we(n,d,x),W(d,i,x),we(a,d,x),v=!0},p:Y,i(d){v||(Ie(e.$$.fragment,d),Ie(r.$$.fragment,d),Ie(n.$$.fragment,d),Ie(a.$$.fragment,d),v=!0)},o(d){xe(e.$$.fragment,d),xe(r.$$.fragment,d),xe(n.$$.fragment,d),xe(a.$$.fragment,d),v=!1},d(d){je(e,d),d&&h(l),je(r,d),d&&h(t),je(n,d),d&&h(i),je(a,d)}}}class Xt extends ge{constructor(e){super(),pe(this,e,null,Yt,_e,{})}}export{Xt as default};