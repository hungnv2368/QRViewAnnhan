(self.webpackChunk_fuse_demo=self.webpackChunk_fuse_demo||[]).push([[9388],{9388:(t,i,e)=>{"use strict";e.r(i),e.d(i,{ActivitiesModule:()=>J});var n=e(33464),o=e(77307),c=e(75425),r=e(29609),a=e(35366),s=e(78512),l=e(66599),f=e(42693);let g=(()=>{class t{constructor(t){this._httpClient=t,this._activities=new s.X(null)}get activities(){return this._activities.asObservable()}getActivities(){return this._httpClient.get("api/pages/activities").pipe((0,l.b)(t=>{this._activities.next(t)}))}}return t.\u0275fac=function(i){return new(i||t)(a.LFG(f.eN))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var x=e(61116);function d(t,i){if(1&t&&(a.ynx(0),a.TgZ(1,"li",11),a.TgZ(2,"div",16),a._uU(3),a.qZA(),a.qZA(),a.BQk()),2&t){const t=a.oxw().$implicit,i=a.oxw(3);a.xp6(3),a.hij(" ",i.getRelativeFormat(t.date)," ")}}function u(t,i){1&t&&(a.ynx(0),a._UZ(1,"div",17),a.BQk())}function p(t,i){if(1&t&&(a.ynx(0),a.TgZ(1,"div",18),a._UZ(2,"mat-icon",19),a.qZA(),a.BQk()),2&t){const t=a.oxw().$implicit;a.xp6(2),a.Q6J("svgIcon",t.icon)}}function m(t,i){if(1&t&&(a.ynx(0),a._UZ(1,"img",20),a.BQk()),2&t){const t=a.oxw().$implicit;a.xp6(1),a.Q6J("src",t.image,a.LSH)("alt","Activity image")}}function v(t,i){if(1&t&&(a.ynx(0),a._UZ(1,"div",21),a.BQk()),2&t){const t=a.oxw().$implicit;a.xp6(1),a.Q6J("innerHTML",t.description,a.oJD)}}function y(t,i){if(1&t&&(a.ynx(0),a.TgZ(1,"a",23),a._uU(2),a.qZA(),a.BQk()),2&t){const t=a.oxw(2).$implicit;a.xp6(1),a.Q6J("routerLink",t.link),a.xp6(1),a.hij(" ",t.linkedContent," ")}}function Z(t,i){if(1&t&&(a.ynx(0),a.TgZ(1,"a",24),a._uU(2),a.qZA(),a.BQk()),2&t){const t=a.oxw(2).$implicit;a.xp6(1),a.Q6J("href",t.link,a.LSH),a.xp6(1),a.hij(" ",t.linkedContent," ")}}function h(t,i){if(1&t&&(a.ynx(0),a.TgZ(1,"div",22),a._uU(2,"\u2022"),a.qZA(),a.YNc(3,y,3,2,"ng-container",10),a.YNc(4,Z,3,2,"ng-container",10),a.BQk()),2&t){const t=a.oxw().$implicit;a.xp6(3),a.Q6J("ngIf",t.useRouter),a.xp6(1),a.Q6J("ngIf",!t.useRouter)}}function k(t,i){if(1&t&&(a.ynx(0),a._UZ(1,"div",25),a.BQk()),2&t){const t=a.oxw().$implicit;a.xp6(1),a.Q6J("innerHTML",t.extraContent,a.oJD)}}function w(t,i){if(1&t&&(a.ynx(0),a.YNc(1,d,4,1,"ng-container",10),a.TgZ(2,"li",11),a.YNc(3,u,2,0,"ng-container",10),a.TgZ(4,"div",12),a.YNc(5,p,3,1,"ng-container",10),a.YNc(6,m,2,2,"ng-container",10),a.TgZ(7,"div",13),a.YNc(8,v,2,1,"ng-container",10),a.TgZ(9,"div",14),a.TgZ(10,"div",15),a._uU(11),a.ALo(12,"date"),a.qZA(),a.YNc(13,h,5,2,"ng-container",10),a.qZA(),a.YNc(14,k,2,1,"ng-container",10),a.qZA(),a.qZA(),a.qZA(),a.BQk()),2&t){const t=i.$implicit,e=i.index,n=i.first,o=i.last,c=a.oxw(2).ngIf,r=a.oxw();a.xp6(1),a.Q6J("ngIf",n||!r.isSameDay(t.date,c[e-1].date)),a.xp6(2),a.Q6J("ngIf",!o&&r.isSameDay(t.date,c[e+1].date)),a.xp6(2),a.Q6J("ngIf",t.icon&&!t.image),a.xp6(1),a.Q6J("ngIf",t.image),a.xp6(2),a.Q6J("ngIf",t.description),a.xp6(3),a.hij(" ",a.xi3(12,8,t.date,"MMM dd, h:mm a")," "),a.xp6(2),a.Q6J("ngIf",t.linkedContent),a.xp6(1),a.Q6J("ngIf",t.extraContent)}}function _(t,i){if(1&t&&(a.ynx(0),a.TgZ(1,"div",8),a.TgZ(2,"ol"),a.YNc(3,w,15,11,"ng-container",9),a.qZA(),a.qZA(),a.BQk()),2&t){const t=a.oxw().ngIf,i=a.oxw();a.xp6(3),a.Q6J("ngForOf",t)("ngForTrackBy",i.trackByFn)}}function A(t,i){if(1&t&&(a.ynx(0),a.YNc(1,_,4,2,"ng-container",5),a.BQk()),2&t){const t=i.ngIf;a.oxw();const e=a.MAs(12);a.xp6(1),a.Q6J("ngIf",t.length)("ngIfElse",e)}}function Q(t,i){1&t&&a._uU(0," Loading... ")}function I(t,i){1&t&&a._uU(0," There are is activity at the moment... ")}const T=[{path:"",component:(()=>{class t{constructor(t){this._activityService=t}ngOnInit(){this.activities$=this._activityService.activities}isSameDay(t,i){return r(t,r.ISO_8601).isSame(r(i,r.ISO_8601),"day")}getRelativeFormat(t){const i=r().startOf("day"),e=r().subtract(1,"day").startOf("day");return r(t,r.ISO_8601).isSame(i,"day")?"Today":r(t,r.ISO_8601).isSame(e,"day")?"Yesterday":r(t,r.ISO_8601).fromNow()}trackByFn(t,i){return i.id||t}}return t.\u0275fac=function(i){return new(i||t)(a.Y36(g))},t.\u0275cmp=a.Xpm({type:t,selectors:[["activity"]],decls:13,vars:4,consts:[[1,"relative","flex","flex-col","flex-auto","min-w-0","overflow-hidden"],[1,"flex","flex-col","flex-auto","px-6","py-10","sm:px-16","sm:pt-18","sm:pb-20"],[1,"w-full","max-w-3xl"],[1,"text-4xl","font-extrabold","tracking-tight","leading-none"],[1,"mt-1.5","text-lg","text-secondary"],[4,"ngIf","ngIfElse"],["loading",""],["noActivity",""],[1,"mt-8"],[4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],[1,"relative","flex","py-7"],[1,"relative","flex","flex-auto"],[1,"flex","flex-col","flex-auto","items-start"],[1,"flex","flex-col","sm:flex-row","sm:items-center","mt-2","sm:mt-1","sm:space-x-2","text-md","leading-5"],[1,"text-secondary"],[1,"relative","py-2","px-8","text-md","font-medium","leading-5","rounded-full","bg-primary","text-on-primary"],[1,"absolute","top-7","left-5","w-0.5","h-full","-ml-px","bg-gray-300","dark:bg-gray-600"],[1,"flex","flex-shrink-0","items-center","justify-center","w-10","h-10","mr-4","rounded-full","bg-gray-400"],[1,"icon-size-5","text-white",3,"svgIcon"],[1,"flex-shrink-0","w-10","h-10","mr-4","rounded-full","overflow-hidden","object-cover","object-center",3,"src","alt"],[3,"innerHTML"],[1,"hidden","sm:block"],[1,"cursor-pointer","text-primary",3,"routerLink"],["target","_blank",1,"cursor-pointer","text-primary",3,"href"],[1,"mt-4","py-4","px-5","rounded-lg","bg-gray-200","dark:bg-gray-800",3,"innerHTML"]],template:function(t,i){if(1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"div",3),a._uU(4,"All Activities"),a.qZA(),a.TgZ(5,"div",4),a._uU(6,"Application wide activities are listed here as individual items, starting with the most recent."),a.qZA(),a.YNc(7,A,2,2,"ng-container",5),a.ALo(8,"async"),a.YNc(9,Q,1,0,"ng-template",null,6,a.W1O),a.YNc(11,I,1,0,"ng-template",null,7,a.W1O),a.qZA(),a.qZA(),a.qZA()),2&t){const t=a.MAs(10);a.xp6(7),a.Q6J("ngIf",a.lcZ(8,2,i.activities$))("ngIfElse",t)}},directives:[x.O5,x.sg,o.Hw,n.yS],pipes:[x.Ov,x.uU],encapsulation:2,changeDetection:0}),t})(),resolve:{activities:(()=>{class t{constructor(t){this._activityService=t}resolve(t,i){return this._activityService.getActivities()}}return t.\u0275fac=function(i){return new(i||t)(a.LFG(g))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}];let J=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[n.Bz.forChild(T),o.Ps,c.m]]}),t})()}}]);