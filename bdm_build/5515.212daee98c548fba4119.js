(self.webpackChunk_fuse_demo=self.webpackChunk_fuse_demo||[]).push([[5515],{85515:(e,t,n)=>{"use strict";n.r(t),n.d(t,{FileManagerModule:()=>ne});var i=n(33464),r=n(84369),o=n(77307),c=n(10168),s=n(24311),a=n(75425),l=n(35366);let u=(()=>{class e{canDeactivate(e,t,n,i){let r=i.root;for(;r.firstChild;)r=r.firstChild;return!i.url.includes("/file-manager")||!!i.url.includes("/details")||e.closeDrawer().then(()=>!0)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),g=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["file-manager"]],decls:1,vars:0,template:function(e,t){1&e&&l._UZ(0,"router-outlet")},directives:[i.lC],encapsulation:2,changeDetection:0}),e})();var d=n(55959),f=n(25416),p=n(78512),m=n(31225),Z=n(40878),x=n(66599),v=n(90611),h=n(79996),_=n(44689),b=n(42693);let A=(()=>{class e{constructor(e){this._httpClient=e,this._item=new p.X(null),this._items=new p.X(null)}get items$(){return this._items.asObservable()}get item$(){return this._item.asObservable()}getItems(e=null){return this._httpClient.get("api/apps/file-manager",{params:{folderId:e}}).pipe((0,x.b)(e=>{this._items.next(e)}))}getItemById(e){return this._items.pipe((0,v.q)(1),(0,h.U)(t=>{const n=[...t.folders,...t.files].find(t=>t.id===e)||null;return this._item.next(n),n}),(0,_.w)(t=>t?(0,Z.of)(t):(0,m._)("Could not found the item with id of "+e+"!")))}}return e.\u0275fac=function(t){return new(t||e)(l.LFG(b.eN))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var q=n(57772),T=n(61116);const y=["matDrawer"];function k(e,t){if(1&e&&(l.ynx(0),l._uU(1),l.BQk()),2&e){const e=l.oxw();l.xp6(1),l.AsE(" ",e.items.folders.length," folders, ",e.items.files.length," files ")}}const w=function(e){return["/apps/file-manager/folders/",e]};function Q(e,t){if(1&e&&(l.ynx(0),l.TgZ(1,"a",17),l._uU(2),l.qZA(),l.BQk()),2&e){const e=l.oxw().$implicit;l.xp6(1),l.Q6J("routerLink",l.VKq(2,w,e.id)),l.xp6(1),l.Oqu(e.name)}}function I(e,t){if(1&e&&(l.ynx(0),l.TgZ(1,"div"),l._uU(2),l.qZA(),l.BQk()),2&e){const e=l.oxw().$implicit;l.xp6(2),l.Oqu(e.name)}}function U(e,t){1&e&&(l.ynx(0),l.TgZ(1,"div",18),l._uU(2,"/"),l.qZA(),l.BQk())}function J(e,t){if(1&e&&(l.ynx(0),l.YNc(1,Q,3,4,"ng-container",9),l.YNc(2,I,3,1,"ng-container",9),l.YNc(3,U,3,0,"ng-container",9),l.BQk()),2&e){const e=t.last;l.xp6(1),l.Q6J("ngIf",!e),l.xp6(1),l.Q6J("ngIf",e),l.xp6(1),l.Q6J("ngIf",!e)}}const B=function(){return["/apps/file-manager"]};function C(e,t){if(1&e&&(l.ynx(0),l.TgZ(1,"div",16),l.TgZ(2,"a",17),l._uU(3,"Home "),l.qZA(),l.TgZ(4,"div",18),l._uU(5,"/"),l.qZA(),l.YNc(6,J,4,3,"ng-container",19),l.qZA(),l.BQk()),2&e){const e=l.oxw();l.xp6(2),l.Q6J("routerLink",l.DdM(3,B)),l.xp6(4),l.Q6J("ngForOf",e.items.path)("ngForTrackBy",e.trackByFn)}}function F(e,t){if(1&e&&(l.ynx(0),l.TgZ(1,"div",32),l._uU(2),l.qZA(),l.BQk()),2&e){const e=l.oxw().$implicit;l.xp6(2),l.Oqu(e.contents)}}const D=function(e){return["./details/",e]};function Y(e,t){if(1&e&&(l.ynx(0),l.TgZ(1,"div",23),l.TgZ(2,"a",24),l.NdJ("click",function(e){return e.preventDefault()}),l._UZ(3,"mat-icon",25),l.qZA(),l.TgZ(4,"a",26),l.TgZ(5,"div",27),l.TgZ(6,"div",28),l._UZ(7,"mat-icon",29),l.qZA(),l.qZA(),l.TgZ(8,"div",30),l.TgZ(9,"div",31),l._uU(10),l.qZA(),l.YNc(11,F,3,1,"ng-container",9),l.qZA(),l.qZA(),l.qZA(),l.BQk()),2&e){const e=t.$implicit;l.xp6(2),l.Q6J("routerLink",l.VKq(7,D,e.id)),l.xp6(1),l.Q6J("svgIcon","heroicons_solid:information-circle"),l.xp6(1),l.Q6J("routerLink",l.VKq(9,w,e.id)),l.xp6(3),l.Q6J("svgIcon","iconsmind:folder"),l.xp6(2),l.Q6J("matTooltip",e.name),l.xp6(1),l.Oqu(e.name),l.xp6(1),l.Q6J("ngIf",e.contents)}}function M(e,t){if(1&e&&(l.ynx(0),l.TgZ(1,"div"),l.TgZ(2,"div",21),l._uU(3,"Folders"),l.qZA(),l.TgZ(4,"div",22),l.YNc(5,Y,12,11,"ng-container",19),l.qZA(),l.qZA(),l.BQk()),2&e){const e=l.oxw(2);l.xp6(5),l.Q6J("ngForOf",e.items.folders)("ngForTrackBy",e.trackByFn)}}function O(e,t){if(1&e&&(l.ynx(0),l.TgZ(1,"div",32),l._uU(2),l.qZA(),l.BQk()),2&e){const e=l.oxw().$implicit;l.xp6(2),l.Oqu(e.contents)}}function L(e,t){if(1&e&&(l.ynx(0),l.TgZ(1,"a",33),l.TgZ(2,"div",27),l.TgZ(3,"div",28),l.TgZ(4,"div",34),l._UZ(5,"mat-icon",29),l.TgZ(6,"div",35),l._uU(7),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(8,"div",30),l.TgZ(9,"div",31),l._uU(10),l.qZA(),l.YNc(11,O,3,1,"ng-container",9),l.qZA(),l.qZA(),l.BQk()),2&e){const e=t.$implicit;l.xp6(1),l.Q6J("routerLink",l.VKq(16,D,e.id)),l.xp6(4),l.Q6J("svgIcon","iconsmind:file"),l.xp6(1),l.ekj("bg-red-600","PDF"===e.type)("bg-blue-600","DOC"===e.type)("bg-green-600","XLS"===e.type)("bg-gray-600","TXT"===e.type)("bg-amber-600","JPG"===e.type),l.xp6(1),l.hij(" ",e.type.toUpperCase()," "),l.xp6(2),l.Q6J("matTooltip",e.name),l.xp6(1),l.Oqu(e.name),l.xp6(1),l.Q6J("ngIf",e.contents)}}function N(e,t){if(1&e&&(l.ynx(0),l.TgZ(1,"div"),l.TgZ(2,"div",21),l._uU(3,"Files"),l.qZA(),l.TgZ(4,"div",22),l.YNc(5,L,12,18,"ng-container",19),l.qZA(),l.qZA(),l.BQk()),2&e){const e=l.oxw(2);l.xp6(5),l.Q6J("ngForOf",e.items.files)("ngForTrackBy",e.trackByFn)}}function S(e,t){if(1&e&&(l.ynx(0),l.TgZ(1,"div",20),l.YNc(2,M,6,2,"ng-container",9),l.YNc(3,N,6,2,"ng-container",9),l.qZA(),l.BQk()),2&e){const e=l.oxw();l.xp6(2),l.Q6J("ngIf",e.items.folders.length>0),l.xp6(1),l.Q6J("ngIf",e.items.files.length>0)}}function z(e,t){1&e&&(l.TgZ(0,"div",36),l._UZ(1,"mat-icon",37),l.TgZ(2,"div",38),l._uU(3,"There are no items!"),l.qZA(),l.qZA()),2&e&&(l.xp6(1),l.Q6J("svgIcon","iconsmind:file_hide"))}let j=(()=>{class e{constructor(e,t,n,i,r){this._activatedRoute=e,this._changeDetectorRef=t,this._router=n,this._fileManagerService=i,this._fuseMediaWatcherService=r,this._unsubscribeAll=new d.xQ}ngOnInit(){this._fileManagerService.items$.pipe((0,f.R)(this._unsubscribeAll)).subscribe(e=>{this.items=e,this._changeDetectorRef.markForCheck()}),this._fileManagerService.item$.pipe((0,f.R)(this._unsubscribeAll)).subscribe(e=>{this.selectedItem=e,this._changeDetectorRef.markForCheck()}),this._fuseMediaWatcherService.onMediaQueryChange$("(min-width: 1440px)").pipe((0,f.R)(this._unsubscribeAll)).subscribe(e=>{this.drawerMode=e.matches?"side":"over",this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}onBackdropClicked(){this._router.navigate(["./"],{relativeTo:this._activatedRoute}),this._changeDetectorRef.markForCheck()}trackByFn(e,t){return t.id||e}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(i.gz),l.Y36(l.sBO),l.Y36(i.F0),l.Y36(A),l.Y36(q.T))},e.\u0275cmp=l.Xpm({type:e,selectors:[["file-manager-list"]],viewQuery:function(e,t){if(1&e&&l.Gf(y,7),2&e){let e;l.iGM(e=l.CRH())&&(t.matDrawer=e.first)}},decls:22,vars:10,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden"],[1,"flex-auto","h-full","bg-card","dark:bg-transparent",3,"backdropClick"],[1,"w-full","sm:w-100","dark:bg-gray-900",3,"mode","opened","position","disableClose"],["matDrawer",""],[1,"flex","flex-col","bg-gray-100","dark:bg-transparent"],[1,"flex","flex-col","flex-auto"],[1,"flex","flex-col","sm:flex-row","items-start","sm:items-center","sm:justify-between","p-6","sm:py-12","md:px-8","border-b","bg-card","dark:bg-transparent"],[1,"text-4xl","font-extrabold","tracking-tight","leading-none"],[1,"flex","items-center","mt-0.5","font-medium","text-secondary"],[4,"ngIf"],[1,"mt-4","sm:mt-0"],["mat-flat-button","",3,"color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[4,"ngIf","ngIfElse"],["noItems",""],[1,"flex","items-center","space-x-2"],[1,"text-primary","cursor-pointer",3,"routerLink"],[1,""],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"p-6","md:p-8","space-y-8"],[1,"font-medium"],[1,"flex","flex-wrap","-m-2","mt-2"],[1,"relative","w-40","h-40","m-2","p-4","shadow","rounded-2xl","bg-card"],["mat-icon-button","",1,"absolute","z-20","top-1.5","right-1.5","w-8","h-8","min-h-8",3,"routerLink","click"],[1,"icon-size-5",3,"svgIcon"],[1,"z-10","absolute","inset-0","flex","flex-col","p-4","cursor-pointer",3,"routerLink"],[1,"aspect-w-9","aspect-h-6"],[1,"flex","items-center","justify-center"],[1,"icon-size-14","text-hint",3,"svgIcon"],[1,"flex","flex-col","flex-auto","justify-center","text-center","text-sm","font-medium"],[1,"truncate",3,"matTooltip"],[1,"text-secondary","truncate"],[1,"flex","flex-col","w-40","h-40","m-2","p-4","shadow","rounded-2xl","cursor-pointer","bg-card",3,"routerLink"],[1,"relative"],[1,"absolute","left-0","bottom-0","px-1.5","rounded","text-sm","font-semibold","leading-5","text-white"],[1,"flex","flex-auto","flex-col","items-center","justify-center","bg-gray-100","dark:bg-transparent"],[1,"icon-size-24",3,"svgIcon"],[1,"mt-4","text-2xl","font-semibold","tracking-tight","text-secondary"]],template:function(e,t){if(1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"mat-drawer-container",1),l.NdJ("backdropClick",function(){return t.onBackdropClicked()}),l.TgZ(2,"mat-drawer",2,3),l._UZ(4,"router-outlet"),l.qZA(),l.TgZ(5,"mat-drawer-content",4),l.TgZ(6,"div",5),l.TgZ(7,"div",6),l.TgZ(8,"div"),l.TgZ(9,"div",7),l._uU(10,"File Manager"),l.qZA(),l.TgZ(11,"div",8),l.YNc(12,k,2,2,"ng-container",9),l.YNc(13,C,7,4,"ng-container",9),l.qZA(),l.qZA(),l.TgZ(14,"div",10),l.TgZ(15,"button",11),l._UZ(16,"mat-icon",12),l.TgZ(17,"span",13),l._uU(18,"Upload file"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.YNc(19,S,4,2,"ng-container",14),l.YNc(20,z,4,1,"ng-template",null,15,l.W1O),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e){const e=l.MAs(21);l.xp6(2),l.Q6J("mode",t.drawerMode)("opened",!1)("position","end")("disableClose",!0),l.xp6(10),l.Q6J("ngIf",!t.items.path.length),l.xp6(1),l.Q6J("ngIf",t.items.path.length),l.xp6(2),l.Q6J("color","primary"),l.xp6(1),l.Q6J("svgIcon","heroicons_outline:plus"),l.xp6(3),l.Q6J("ngIf",t.items&&(t.items.folders.length>0||t.items.files.length>0))("ngIfElse",e)}},directives:[c.kh,c.jA,i.lC,c.LW,T.O5,r.lW,o.Hw,i.yS,T.sg,r.zs,s.gM],encapsulation:2,changeDetection:0}),e})();function R(e,t){1&e&&(l.ynx(0),l._UZ(1,"mat-icon",23),l.BQk()),2&e&&(l.xp6(1),l.Q6J("svgIcon","iconsmind:folder"))}function $(e,t){1&e&&(l.ynx(0),l._UZ(1,"mat-icon",23),l.BQk()),2&e&&(l.xp6(1),l.Q6J("svgIcon","iconsmind:file"))}function G(e,t){if(1&e&&(l.ynx(0),l.TgZ(1,"div",12),l.TgZ(2,"div",13),l._uU(3,"Contents"),l.qZA(),l.TgZ(4,"div"),l._uU(5),l.qZA(),l.qZA(),l.BQk()),2&e){const e=l.oxw();l.xp6(5),l.Oqu(e.item.contents)}}function X(e,t){if(1&e&&(l.ynx(0),l.TgZ(1,"div"),l._uU(2),l.qZA(),l.BQk()),2&e){const e=l.oxw();l.xp6(2),l.Oqu(e.item.description)}}function K(e,t){1&e&&(l.ynx(0),l.TgZ(1,"div",24),l._uU(2,"Click here to add a description"),l.qZA(),l.BQk())}const W=function(){return["../../"]};let H=(()=>{class e{constructor(e,t,n){this._changeDetectorRef=e,this._fileManagerListComponent=t,this._fileManagerService=n,this._unsubscribeAll=new d.xQ}ngOnInit(){this._fileManagerListComponent.matDrawer.open(),this._fileManagerService.item$.pipe((0,f.R)(this._unsubscribeAll)).subscribe(e=>{this._fileManagerListComponent.matDrawer.open(),this.item=e,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}closeDrawer(){return this._fileManagerListComponent.matDrawer.close()}trackByFn(e,t){return t.id||e}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(l.sBO),l.Y36(j),l.Y36(A))},e.\u0275cmp=l.Xpm({type:e,selectors:[["file-manager-details"]],decls:51,vars:28,consts:[[1,"flex","flex-col","flex-auto","p-6","md:p-8"],[1,"flex","items-center","justify-end"],["mat-icon-button","",3,"routerLink"],[3,"svgIcon"],[1,"aspect-w-9","aspect-h-6","mt-8"],[1,"flex","items-center","justify-center","border","rounded-lg","bg-gray-50","dark:bg-card"],[4,"ngIf"],[1,"flex","flex-col","items-start","mt-8"],[1,"text-xl","font-medium"],[1,"mt-1","px-1.5","rounded","text-sm","font-semibold","leading-5","text-white"],[1,"text-lg","font-medium","mt-8"],[1,"flex","flex-col","mt-4","border-t","border-b","divide-y","font-medium"],[1,"flex","items-center","justify-between","py-3"],[1,"text-secondary"],[1,"flex","items-center","justify-between","mt-8"],[1,"text-lg","font-medium"],["mat-icon-button",""],[1,"icon-size-5",3,"svgIcon"],[1,"flex","mt-2","border-t"],[1,"py-3"],[1,"grid","grid-cols-2","gap-4","w-full","mt-8"],["mat-flat-button","",1,"flex-auto",3,"color"],["mat-stroked-button","",1,"flex-auto"],[1,"icon-size-14","text-hint",3,"svgIcon"],[1,"italic","text-secondary"]],template:function(e,t){1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"button",2),l._UZ(3,"mat-icon",3),l.qZA(),l.qZA(),l.TgZ(4,"div",4),l.TgZ(5,"div",5),l.YNc(6,R,2,1,"ng-container",6),l.YNc(7,$,2,1,"ng-container",6),l.qZA(),l.qZA(),l.TgZ(8,"div",7),l.TgZ(9,"div",8),l._uU(10),l.qZA(),l.TgZ(11,"div",9),l._uU(12),l.qZA(),l.qZA(),l.TgZ(13,"div",10),l._uU(14,"Information"),l.qZA(),l.TgZ(15,"div",11),l.TgZ(16,"div",12),l.TgZ(17,"div",13),l._uU(18,"Created By"),l.qZA(),l.TgZ(19,"div"),l._uU(20),l.qZA(),l.qZA(),l.TgZ(21,"div",12),l.TgZ(22,"div",13),l._uU(23,"Created At"),l.qZA(),l.TgZ(24,"div"),l._uU(25),l.qZA(),l.qZA(),l.TgZ(26,"div",12),l.TgZ(27,"div",13),l._uU(28,"Modified At"),l.qZA(),l.TgZ(29,"div"),l._uU(30),l.qZA(),l.qZA(),l.TgZ(31,"div",12),l.TgZ(32,"div",13),l._uU(33,"Size"),l.qZA(),l.TgZ(34,"div"),l._uU(35),l.qZA(),l.qZA(),l.YNc(36,G,6,1,"ng-container",6),l.qZA(),l.TgZ(37,"div",14),l.TgZ(38,"div",15),l._uU(39,"Description"),l.qZA(),l.TgZ(40,"button",16),l._UZ(41,"mat-icon",17),l.qZA(),l.qZA(),l.TgZ(42,"div",18),l.TgZ(43,"div",19),l.YNc(44,X,3,1,"ng-container",6),l.YNc(45,K,3,0,"ng-container",6),l.qZA(),l.qZA(),l.TgZ(46,"div",20),l.TgZ(47,"button",21),l._uU(48," Download "),l.qZA(),l.TgZ(49,"button",22),l._uU(50," Delete "),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(2),l.Q6J("routerLink",l.DdM(27,W)),l.xp6(1),l.Q6J("svgIcon","heroicons_outline:x"),l.xp6(3),l.Q6J("ngIf","folder"===t.item.type),l.xp6(1),l.Q6J("ngIf","folder"!==t.item.type),l.xp6(3),l.Oqu(t.item.name),l.xp6(1),l.ekj("bg-indigo-600","folder"===t.item.type)("bg-red-600","PDF"===t.item.type)("bg-blue-600","DOC"===t.item.type)("bg-green-600","XLS"===t.item.type)("bg-gray-600","TXT"===t.item.type)("bg-amber-600","JPG"===t.item.type),l.xp6(1),l.hij(" ",t.item.type.toUpperCase()," "),l.xp6(8),l.Oqu(t.item.createdBy),l.xp6(5),l.Oqu(t.item.createdAt),l.xp6(5),l.Oqu(t.item.modifiedAt),l.xp6(5),l.Oqu(t.item.size),l.xp6(1),l.Q6J("ngIf",t.item.contents),l.xp6(5),l.Q6J("svgIcon","heroicons_solid:pencil"),l.xp6(3),l.Q6J("ngIf",t.item.description),l.xp6(1),l.Q6J("ngIf",!t.item.description),l.xp6(2),l.Q6J("color","primary"))},directives:[r.lW,i.rH,o.Hw,T.O5],encapsulation:2,changeDetection:0}),e})();var P=n(47727);let V=(()=>{class e{constructor(e){this._fileManagerService=e}resolve(e,t){return this._fileManagerService.getItems()}}return e.\u0275fac=function(t){return new(t||e)(l.LFG(A))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),E=(()=>{class e{constructor(e,t){this._router=e,this._fileManagerService=t}resolve(e,t){return this._fileManagerService.getItems(e.paramMap.get("folderId")).pipe((0,P.K)(e=>{console.error(e);const n=t.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(n),(0,m._)(e)}))}}return e.\u0275fac=function(t){return new(t||e)(l.LFG(i.F0),l.LFG(A))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),ee=(()=>{class e{constructor(e,t){this._router=e,this._fileManagerService=t}resolve(e,t){return this._fileManagerService.getItemById(e.paramMap.get("id")).pipe((0,P.K)(e=>{console.error(e);const n=t.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(n),(0,m._)(e)}))}}return e.\u0275fac=function(t){return new(t||e)(l.LFG(i.F0),l.LFG(A))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const te=[{path:"",component:g,children:[{path:"folders/:folderId",component:j,resolve:{item:E},children:[{path:"details/:id",component:H,resolve:{item:ee},canDeactivate:[u]}]},{path:"",component:j,resolve:{items:V},children:[{path:"details/:id",component:H,resolve:{item:ee},canDeactivate:[u]}]}]}];let ne=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[i.Bz.forChild(te),r.ot,o.Ps,c.SJ,s.AV,a.m]]}),e})()}}]);