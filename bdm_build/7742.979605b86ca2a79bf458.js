(self.webpackChunk_fuse_demo=self.webpackChunk_fuse_demo||[]).push([[7742],{17742:(e,t,n)=>{"use strict";n.r(t),n.d(t,{IconsModule:()=>U,routes:()=>y});var i=n(31041),c=n(33464),o=n(13070),s=n(77307),r=n(6174),l=n(13841),a=n(77552),u=n(75425),g=n(78512),p=n(55959),f=n(3080),m=n(25416),x=n(79996),Z=n(35366),d=n(66599),h=n(42693);let v=(()=>{class e{constructor(e){this._httpClient=e,this._icons=new g.X(null)}get icons(){return this._icons.asObservable()}getIcons(e){return this._httpClient.get(e="api"+e).pipe((0,d.b)(e=>{this._icons.next(e)}))}}return e.\u0275fac=function(t){return new(t||e)(Z.LFG(h.eN))},e.\u0275prov=Z.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var A=n(61116),I=n(87064),_=n(80054);function q(e,t){if(1&e&&(Z.ynx(0),Z.TgZ(1,"h1"),Z._uU(2),Z.qZA(),Z.BQk()),2&e){const e=t.ngIf;Z.xp6(2),Z.Oqu(e.name)}}function T(e,t){if(1&e&&(Z.ynx(0),Z._UZ(1,"textarea",20),Z.BQk()),2&e){const e=Z.oxw();Z.xp6(1),Z.Q6J("code",'<mat-icon svgIcon="'+e.calcSvgIconAttr()+'"></mat-icon>')}}function w(e,t){if(1&e){const e=Z.EpF();Z.ynx(0),Z.TgZ(1,"div",22),Z.NdJ("click",function(){const t=Z.CHM(e).$implicit,n=Z.oxw().ngIf;return Z.oxw().selectIcon(n.namespace,t)}),Z.TgZ(2,"div",23),Z._UZ(3,"mat-icon",24),Z.qZA(),Z.TgZ(4,"div",25),Z._uU(5),Z.qZA(),Z.qZA(),Z.BQk()}if(2&e){const e=t.$implicit,n=Z.oxw().ngIf,i=Z.oxw();Z.xp6(1),Z.ekj("border-primary",i.selectedIcon[1]===e),Z.xp6(2),Z.Q6J("ngClass","icon-size-"+i.iconSize)("svgIcon",n.namespace+":"+e),Z.xp6(2),Z.Oqu(e)}}function b(e,t){if(1&e&&(Z.ynx(0),Z.YNc(1,w,6,5,"ng-container",21),Z.BQk()),2&e){const e=t.ngIf;Z.xp6(1),Z.Q6J("ngForOf",e.list)}}const y=[{path:"",pathMatch:"full",redirectTo:"material-twotone"},{path:"",component:(()=>{class e{constructor(e){this._iconsService=e,this.filterValue$=new g.X(""),this.iconSize=24,this._unsubscribeAll=new p.xQ}ngOnInit(){this.icons$=this._iconsService.icons,this._iconsService.icons.pipe((0,m.R)(this._unsubscribeAll)).subscribe(e=>{this.iconSize=e.grid,this.selectedIcon=[e.namespace,e.list[0]]}),this.filteredIcons$=(0,f.aj)([this.icons$,this.filterValue$]).pipe((0,x.U)(([e,t])=>{const n=e.list.filter(e=>e.toLowerCase().includes(t.toLowerCase()));return Object.assign(Object.assign({},e),{list:n})}))}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}filterIcons(e){this.filterValue$.next(e.target.value)}selectIcon(e,t){this.selectedIcon=[e,t]}calcSvgIconAttr(){return this.selectedIcon?""===this.selectedIcon[0]?this.selectedIcon[1]:this.selectedIcon.join(":"):""}}return e.\u0275fac=function(t){return new(t||e)(Z.Y36(v))},e.\u0275cmp=Z.Xpm({type:e,selectors:[["icons"]],decls:49,vars:19,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[4,"ngIf"],[1,"flex-auto","p-6","sm:p-10"],[1,"prose","prose-sm","max-w-5xl"],[1,"flex","my-6","xs:flex-col"],[1,"flex-auto"],["matInput","",3,"input"],[1,"min-w-40","ml-8","xs:ml-0"],[3,"ngModel","ngModelChange"],[3,"value"],[1,"flex","flex-wrap","-mx-4"],["fuse-highlight","","lang","html",3,"code"],[4,"ngFor","ngForOf"],[1,"flex","flex-col","items-center","justify-center","m-4","p-4","min-w-36","max-w-36","min-h-30","max-h-30","rounded","border-2","cursor-pointer","bg-card",3,"click"],[1,"flex","items-center","justify-center","mb-3"],[3,"ngClass","svgIcon"],[1,"text-sm","text-center","break-all","text-secondary"]],template:function(e,t){1&e&&(Z.TgZ(0,"div",0),Z.TgZ(1,"div",1),Z.TgZ(2,"div",2),Z.TgZ(3,"div",3),Z.TgZ(4,"div"),Z.TgZ(5,"a",4),Z._uU(6,"User Interface"),Z.qZA(),Z.qZA(),Z.TgZ(7,"div",5),Z._UZ(8,"mat-icon",6),Z.TgZ(9,"a",7),Z._uU(10,"Icons"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(11,"div",8),Z.TgZ(12,"h2",9),Z.YNc(13,q,3,1,"ng-container",10),Z.ALo(14,"async"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(15,"div",11),Z.TgZ(16,"div",12),Z.TgZ(17,"h2"),Z._uU(18,"Usage"),Z.qZA(),Z.YNc(19,T,2,1,"ng-container",10),Z.ALo(20,"async"),Z.TgZ(21,"h2"),Z._uU(22,"Icons"),Z.qZA(),Z.TgZ(23,"div",13),Z.TgZ(24,"mat-form-field",14),Z.TgZ(25,"mat-label"),Z._uU(26,"Search an icon"),Z.qZA(),Z.TgZ(27,"input",15),Z.NdJ("input",function(e){return t.filterIcons(e)}),Z.qZA(),Z.qZA(),Z.TgZ(28,"mat-form-field",16),Z.TgZ(29,"mat-label"),Z._uU(30,"Icon size"),Z.qZA(),Z.TgZ(31,"mat-select",17),Z.NdJ("ngModelChange",function(e){return t.iconSize=e}),Z.TgZ(32,"mat-option",18),Z._uU(33,"16"),Z.qZA(),Z.TgZ(34,"mat-option",18),Z._uU(35,"20"),Z.qZA(),Z.TgZ(36,"mat-option",18),Z._uU(37,"24"),Z.qZA(),Z.TgZ(38,"mat-option",18),Z._uU(39,"32"),Z.qZA(),Z.TgZ(40,"mat-option",18),Z._uU(41,"40"),Z.qZA(),Z.TgZ(42,"mat-option",18),Z._uU(43,"48"),Z.qZA(),Z.TgZ(44,"mat-option",18),Z._uU(45,"64"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(46,"div",19),Z.YNc(47,b,2,1,"ng-container",10),Z.ALo(48,"async"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA()),2&e&&(Z.xp6(8),Z.Q6J("svgIcon","heroicons_solid:chevron-right"),Z.xp6(5),Z.Q6J("ngIf",Z.lcZ(14,13,t.icons$)),Z.xp6(6),Z.Q6J("ngIf",Z.lcZ(20,15,t.filteredIcons$)),Z.xp6(8),Z.uIk("autocomplete","off"),Z.xp6(4),Z.Q6J("ngModel",t.iconSize),Z.xp6(1),Z.Q6J("value",4),Z.xp6(2),Z.Q6J("value",5),Z.xp6(2),Z.Q6J("value",6),Z.xp6(2),Z.Q6J("value",8),Z.xp6(2),Z.Q6J("value",10),Z.xp6(2),Z.Q6J("value",12),Z.xp6(2),Z.Q6J("value",16),Z.xp6(3),Z.Q6J("ngIf",Z.lcZ(48,17,t.filteredIcons$)))},directives:[s.Hw,A.O5,o.KE,o.hX,r.Nt,l.gD,i.JJ,i.On,I.ey,_.L,A.sg,A.mk],pipes:[A.Ov],encapsulation:2}),e})(),children:[{path:"**",resolve:{icons:(()=>{class e{constructor(e){this._iconsService=e}resolve(e,t){return this._iconsService.getIcons(t.url)}}return e.\u0275fac=function(t){return new(t||e)(Z.LFG(v))},e.\u0275prov=Z.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]}];let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=Z.oAB({type:e}),e.\u0275inj=Z.cJS({imports:[[i.UX,c.Bz.forChild(y),o.lN,s.Ps,r.c,l.LD,a.$A,u.m]]}),e})()}}]);