(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"ct+p":function(n,e,t){"use strict";t.r(e),t.d(e,"HomePageModule",function(){return v});var i=t("ofXK"),o=t("TEn/"),r=t("3Pt+"),c=t("tyNb"),a=t("fXoL");function s(n,e,t,i){return new(t||(t=Promise))(function(o,r){function c(n){try{s(i.next(n))}catch(e){r(e)}}function a(n){try{s(i.throw(n))}catch(e){r(e)}}function s(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t(function(n){n(e)})).then(c,a)}s((i=i.apply(n,e||[])).next())})}let b=(()=>{class n{constructor(){}fetchPersonajes(n){return s(this,void 0,void 0,function*(){window.scroll(0,0);const e=yield fetch(n),t=yield e.json();return this.generalData=t,this.generalData})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=a.Fb({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function l(n,e){1&n&&a.Kb(0,"ion-spinner",3)}function g(n,e){1&n&&(a.Mb(0,"ion-card",9),a.Mb(1,"ion-card-header"),a.Mb(2,"ion-card-title"),a.gc(3," Error, no hay personajes con ese nombre "),a.Lb(),a.Lb(),a.Lb())}function u(n,e){if(1&n&&(a.Mb(0,"ion-card",10),a.Mb(1,"ion-card-header"),a.Mb(2,"ion-card-title"),a.gc(3),a.Lb(),a.Lb(),a.Lb()),2&n){const n=a.Wb(2);a.zb(3),a.ic(" Cantidad de personajes encontrados: ",n.generalData.info.count," ")}}function d(n,e){if(1&n&&(a.Mb(0,"div"),a.gc(1),a.Kb(2,"br"),a.Lb()),2&n){const n=a.Wb().index,e=a.Wb(2);a.zb(1),a.ic("Type: ",e.generalData.results[n].type,"")}}function f(n,e){if(1&n&&(a.Mb(0,"ion-col",11),a.Mb(1,"ion-card",12),a.Kb(2,"img",13),a.Mb(3,"ion-card-header"),a.Mb(4,"ion-card-subtitle"),a.gc(5),a.Lb(),a.Mb(6,"ion-card-title"),a.gc(7),a.Lb(),a.Lb(),a.Mb(8,"ion-card-content"),a.gc(9),a.Kb(10,"br"),a.gc(11),a.Kb(12,"br"),a.gc(13),a.Kb(14,"br"),a.fc(15,d,3,1,"div",2),a.gc(16),a.Kb(17,"br"),a.gc(18),a.Kb(19,"br"),a.Lb(),a.Lb(),a.Lb()),2&n){const n=e.index,t=a.Wb(2);a.zb(2),a.ac("src",t.generalData.results[n].image,a.dc),a.zb(3),a.ic("Status: ",t.generalData.results[n].status,""),a.zb(2),a.hc(t.generalData.results[n].name),a.zb(2),a.ic(" Gender: ",t.generalData.results[n].gender,""),a.zb(2),a.ic(" Location: ",t.generalData.results[n].location.name,""),a.zb(2),a.ic(" Origin: ",t.generalData.results[n].origin.name,""),a.zb(2),a.Zb("ngIf",""!=t.generalData.results[n].type),a.zb(1),a.ic(" Species: ",t.generalData.results[n].species,""),a.zb(2),a.ic(" Creation Date: ",t.generalData.results[n].created,"")}}function p(n,e){if(1&n){const n=a.Nb();a.Mb(0,"ion-button",0),a.Ub("click",function(){return a.cc(n),a.Wb(2).back()}),a.gc(1,"Anterior"),a.Lb()}}function h(n,e){if(1&n){const n=a.Nb();a.Mb(0,"ion-button",0),a.Ub("click",function(){return a.cc(n),a.Wb(2).next()}),a.gc(1,"Siguiente"),a.Lb()}}function m(n,e){if(1&n&&(a.Mb(0,"div"),a.fc(1,g,4,0,"ion-card",4),a.fc(2,u,4,1,"ion-card",5),a.Mb(3,"ion-grid"),a.Mb(4,"ion-row"),a.fc(5,f,20,9,"ion-col",6),a.Lb(),a.Lb(),a.Mb(6,"div",7),a.fc(7,p,2,0,"ion-button",8),a.fc(8,h,2,0,"ion-button",8),a.Lb(),a.Lb()),2&n){const n=a.Wb();a.zb(1),a.Zb("ngIf",n.notFound),a.zb(1),a.Zb("ngIf",n.generalData.info.count),a.zb(3),a.Zb("ngForOf",n.generalData.results),a.zb(2),a.Zb("ngIf",n.generalData.info.prev),a.zb(1),a.Zb("ngIf",n.generalData.info.next)}}let M=(()=>{class n{constructor(n){this.personajesService=n,this.nextPage="",this.lastPage="",this.currentApiURL=""}ngOnInit(){this.generalData={},this.processing=!1}search(){return s(this,void 0,void 0,function*(){this.notFound=!1,console.log(this.name),this.currentApiURL=`https://rickandmortyapi.com/api/character/?name=${this.name}`,this.processing=!0,this.generalData=yield this.personajesService.fetchPersonajes(this.currentApiURL),console.log(this.generalData),this.generalData.info||(this.notFound=!0),console.log(this.notFound),this.processing=!1})}next(){return s(this,void 0,void 0,function*(){this.currentApiURL=this.generalData.info.next,this.processing=!0,this.generalData=yield this.personajesService.fetchPersonajes(this.currentApiURL),this.processing=!1})}back(){return s(this,void 0,void 0,function*(){this.currentApiURL=this.generalData.info.prev,this.processing=!0,this.generalData=yield this.personajesService.fetchPersonajes(this.currentApiURL),this.processing=!1})}}return n.\u0275fac=function(e){return new(e||n)(a.Jb(b))},n.\u0275cmp=a.Db({type:n,selectors:[["app-personajes"]],inputs:{name:"name"},decls:4,vars:2,consts:[["color","secondary",3,"click"],["style","width: 5rem; height: 2rem;","name","bubbles",4,"ngIf"],[4,"ngIf"],["name","bubbles",2,"width","5rem","height","2rem"],["color","danger",4,"ngIf"],["color","secondary",4,"ngIf"],["size","2.9",4,"ngFor","ngForOf"],[2,"text-align","right"],["color","secondary",3,"click",4,"ngIf"],["color","danger"],["color","secondary"],["size","2.9"],["color","secondary","position","floating"],[3,"src"]],template:function(n,e){1&n&&(a.Mb(0,"ion-button",0),a.Ub("click",function(){return e.search()}),a.gc(1,"Buscar"),a.Lb(),a.fc(2,l,1,0,"ion-spinner",1),a.fc(3,m,9,5,"div",2)),2&n&&(a.zb(2),a.Zb("ngIf",e.processing),a.zb(1),a.Zb("ngIf",!e.processing))},directives:[o.b,i.i,o.q,o.j,o.p,i.h,o.c,o.e,o.g,o.h,o.f,o.d],styles:[""]}),n})();const L=[{path:"",component:(()=>{class n{constructor(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=a.Db({type:n,selectors:[["app-home"]],decls:15,vars:4,consts:[[3,"translucent"],["color","primary"],["color","primary",3,"fullscreen"],["collapse","condense"],["size","large"],["src","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1280px-Rick_and_Morty.svg.png",1,"ion-text-center"],["position","floating"],["clear-on-edit","true","type","string",3,"ngModel","ngModelChange"],[3,"name"]],template:function(n,e){1&n&&(a.Mb(0,"ion-header",0),a.Mb(1,"ion-toolbar",1),a.Mb(2,"ion-title"),a.gc(3," Rick and Morty Search Engine "),a.Lb(),a.Lb(),a.Lb(),a.Mb(4,"ion-content",2),a.Mb(5,"ion-header",3),a.Mb(6,"ion-toolbar"),a.Mb(7,"ion-title",4),a.gc(8,"Rick and Morty"),a.Lb(),a.Lb(),a.Lb(),a.Kb(9,"img",5),a.Mb(10,"ion-item"),a.Mb(11,"ion-label",6),a.gc(12,"Ingresa el personaje que buscas"),a.Lb(),a.Mb(13,"ion-input",7),a.Ub("ngModelChange",function(n){return e.name=n}),a.Lb(),a.Lb(),a.Kb(14,"app-personajes",8),a.Lb()),2&n&&(a.Zb("translucent",!0),a.zb(4),a.Zb("fullscreen",!0),a.zb(9),a.Zb("ngModel",e.name),a.zb(1),a.ac("name",e.name))},directives:[o.k,o.s,o.r,o.i,o.m,o.n,o.l,o.v,r.d,r.e,M],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),n})()}];let y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.Hb({type:n}),n.\u0275inj=a.Gb({imports:[[c.i.forChild(L)],c.i]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.Hb({type:n}),n.\u0275inj=a.Gb({imports:[[i.b,r.a,o.t,y]]}),n})()}}]);