(self.webpackChunk_fuse_demo=self.webpackChunk_fuse_demo||[]).push([[3986],{4095:(t,e,a)=>{"use strict";a.d(e,{b:()=>T});var n=a(35366),r=a(31041),o=a(82151),d=a(55959),s=a(29609),i=a(77923),m=a(61116),l=a(84369),h=a(77307),g=a(69024),c=a(13070),u=a(6174);const f=["matMonthView1"],p=["matMonthView2"],b=["pickerPanelOrigin"],v=["pickerPanel"];function y(t,e){if(1&t&&(n.TgZ(0,"div",8),n._uU(1),n.qZA()),2&t){const t=n.oxw();n.xp6(1),n.Oqu(t.range.startTime)}}function w(t,e){if(1&t&&(n.TgZ(0,"div",8),n._uU(1),n.qZA()),2&t){const t=n.oxw();n.xp6(1),n.Oqu(t.range.endTime)}}function x(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"mat-form-field",20),n.TgZ(1,"input",21),n.NdJ("blur",function(e){return n.CHM(t),n.oxw(2).updateStartTime(e)}),n.qZA(),n.TgZ(2,"mat-label"),n._uU(3,"Start time"),n.qZA(),n.qZA()}if(2&t){const t=n.oxw(2);n.xp6(1),n.Q6J("autocomplete","off")("formControl",t.startTimeFormControl)}}function _(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"mat-form-field",22),n.TgZ(1,"input",23),n.NdJ("blur",function(e){return n.CHM(t),n.oxw(2).updateEndTime(e)}),n.qZA(),n.TgZ(2,"mat-label"),n._uU(3,"End time"),n.qZA(),n.qZA()}if(2&t){const t=n.oxw(2);n.xp6(1),n.Q6J("formControl",t.endTimeFormControl)}}function C(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"div",2),n.TgZ(1,"div",9),n.TgZ(2,"div",10),n.TgZ(3,"button",11),n.NdJ("click",function(){return n.CHM(t),n.oxw().prev()}),n._UZ(4,"mat-icon",12),n.qZA(),n.TgZ(5,"div",13),n._uU(6),n.qZA(),n.qZA(),n.TgZ(7,"mat-month-view",14,15),n.NdJ("activeDateChange",function(e){return n.CHM(t),n.oxw().activeDates.month1=e})("click",function(t){return t.stopImmediatePropagation()})("selectedChange",function(e){return n.CHM(t),n.oxw().onSelectedDateChange(e)}),n.qZA(),n.qZA(),n.YNc(9,x,4,2,"mat-form-field",16),n.qZA(),n.TgZ(10,"div",6),n.TgZ(11,"div",9),n.TgZ(12,"div",10),n.TgZ(13,"div",13),n._uU(14),n.qZA(),n.TgZ(15,"button",17),n.NdJ("click",function(){return n.CHM(t),n.oxw().next()}),n._UZ(16,"mat-icon",12),n.qZA(),n.qZA(),n.TgZ(17,"mat-month-view",14,18),n.NdJ("activeDateChange",function(e){return n.CHM(t),n.oxw().activeDates.month2=e})("click",function(t){return t.stopImmediatePropagation()})("selectedChange",function(e){return n.CHM(t),n.oxw().onSelectedDateChange(e)}),n.qZA(),n.qZA(),n.YNc(19,_,4,1,"mat-form-field",19),n.qZA()}if(2&t){const t=n.oxw();n.xp6(4),n.Q6J("svgIcon","heroicons_outline:chevron-left"),n.xp6(2),n.Oqu(t.getMonthLabel(1)),n.xp6(1),n.Q6J("activeDate",t.activeDates.month1)("dateFilter",t.dateFilter())("dateClass",t.dateClass()),n.xp6(2),n.Q6J("ngIf",t.timeRange),n.xp6(5),n.Oqu(t.getMonthLabel(2)),n.xp6(2),n.Q6J("svgIcon","heroicons_outline:chevron-right"),n.xp6(1),n.Q6J("activeDate",t.activeDates.month2)("dateFilter",t.dateFilter())("dateClass",t.dateClass()),n.xp6(2),n.Q6J("ngIf",t.timeRange)}}let T=(()=>{class t{constructor(t,e,a,r,o){this._changeDetectorRef=t,this._elementRef=e,this._overlay=a,this._renderer2=r,this._viewContainerRef=o,this.rangeChanged=new n.vpe,this._defaultClassNames=!0,this.activeDates={month1:null,month2:null},this.setWhichDate="start",this._range={start:null,end:null},this._timeRegExp=new RegExp("^(0[0-9]|1[0-9]|2[0-4]|[0-9]):([0-5][0-9])(A|(?:AM)|P|(?:PM))?$","i"),this._unsubscribeAll=new d.xQ,this._onChange=()=>{},this._onTouched=()=>{},this.dateFormat="DD/MM/YYYY",this.timeFormat="12",this._init()}set dateFormat(t){this._dateFormat!==t&&(this._dateFormat=t)}get dateFormat(){return this._dateFormat}set timeFormat(t){this._timeFormat!==t&&(this._timeFormat="12"===t?"hh:mmA":"HH:mm")}get timeFormat(){return this._timeFormat}set timeRange(t){this._timeRange!==t&&(this._timeRange=t,t||(this.range={start:this._range.start.clone().startOf("day"),end:this._range.end.clone().endOf("day")}))}get timeRange(){return this._timeRange}set range(t){if(!t)return;if(!t.start||!t.end)return void console.error('Range input must have "start" and "end" properties!');const e=t.whichDate||null,a=s(t.start),n=s(t.end);if("start"===e&&(this._range.start=a.clone(),this._range.start.isAfter(this._range.end))){const t=a.clone().hours(this._range.end.hours()).minutes(this._range.end.minutes()).seconds(this._range.end.seconds());this._range.end=this._range.start.isBefore(t)?t:a.clone()}if("end"===e&&(this._range.end=n.clone(),this._range.start.isAfter(this._range.end))){const t=n.clone().hours(this._range.start.hours()).minutes(this._range.start.minutes()).seconds(this._range.start.seconds());this._range.start=this._range.end.isAfter(t)?t:n.clone()}e||(this._range.start=a.clone(),this._range.end=a.isBefore(n)?n.clone():a.clone());const r={start:this._range.start.clone().toISOString(),end:this._range.end.clone().toISOString()};this.rangeChanged.emit(r),this._programmaticChange||(this._onTouched(r),this._onChange(r)),this.activeDates={month1:this._range.start.clone(),month2:this._range.start.clone().add(1,"month")},this.startTimeFormControl.setValue(this._range.start.clone().format(this._timeFormat).toString()),this.endTimeFormControl.setValue(this._range.end.clone().format(this._timeFormat).toString()),this._matMonthView1&&this._matMonthView2&&(this._matMonthView1.ngAfterContentInit(),this._matMonthView2.ngAfterContentInit()),this._programmaticChange=!1}get range(){const t=this._range.start.clone(),e=this._range.end.clone();return{startDate:t.clone().format(this.dateFormat),startTime:this.timeRange?t.clone().format(this.timeFormat):null,endDate:e.clone().format(this.dateFormat),endTime:this.timeRange?e.clone().format(this.timeFormat):null}}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}writeValue(t){this._programmaticChange=!0,this.range=t}ngOnInit(){}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete(),this.writeValue=()=>{}}openPickerPanel(){const t=this._overlay.create({panelClass:"fuse-date-range-panel",backdropClass:"",hasBackdrop:!0,scrollStrategy:this._overlay.scrollStrategies.reposition(),positionStrategy:this._overlay.position().flexibleConnectedTo(this._pickerPanelOrigin).withPositions([{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top",offsetY:8},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",offsetY:-8}])}),e=new o.UE(this._pickerPanel,this._viewContainerRef);t.backdropClick().subscribe(()=>{e&&e.isAttached&&e.detach(),t&&t.hasAttached()&&(t.detach(),t.dispose())}),t.attach(e)}getMonthLabel(t){return 1===t?this.activeDates.month1.clone().format("MMMM Y"):this.activeDates.month2.clone().format("MMMM Y")}dateClass(){return t=>t.isSame(this._range.start,"day")&&t.isSame(this._range.end,"day")?["fuse-date-range","fuse-date-range-start","fuse-date-range-end"]:t.isSame(this._range.start,"day")?["fuse-date-range","fuse-date-range-start"]:t.isSame(this._range.end,"day")?["fuse-date-range","fuse-date-range-end"]:t.isBetween(this._range.start,this._range.end,"day")?["fuse-date-range","fuse-date-range-mid"]:void 0}dateFilter(){return t=>!("end"===this.setWhichDate&&t.isBefore(this._range.start,"day"))}onSelectedDateChange(t){const e={start:this._range.start.clone().toISOString(),end:this._range.end.clone().toISOString(),whichDate:null};"start"===this.setWhichDate?e.start=s(e.start).year(t.year()).month(t.month()).date(t.date()).toISOString():e.end=s(e.end).year(t.year()).month(t.month()).date(t.date()).toISOString(),e.whichDate=this.setWhichDate,this.setWhichDate="start"===this.setWhichDate?"end":"start",this.range=e}prev(){this.activeDates.month1=s(this.activeDates.month1).subtract(1,"month"),this.activeDates.month2=s(this.activeDates.month2).subtract(1,"month")}next(){this.activeDates.month1=s(this.activeDates.month1).add(1,"month"),this.activeDates.month2=s(this.activeDates.month2).add(1,"month")}updateStartTime(t){const e=this._parseTime(t.target.value);if(this.startTimeFormControl.invalid){const t=this._range.start.clone().format(this._timeFormat);return void this.startTimeFormControl.setValue(t)}const a=this._range.start.clone().hours(e.hours()).minutes(e.minutes());if(a.isAfter(this._range.end)){const t=this._range.end.hours(),e=this._range.end.minutes();a.hours(t).minutes(e)}this.range={start:a.toISOString(),end:this._range.end.clone().toISOString(),whichDate:"start"}}updateEndTime(t){const e=this._parseTime(t.target.value);if(this.endTimeFormControl.invalid){const t=this._range.end.clone().format(this._timeFormat);return void this.endTimeFormControl.setValue(t)}const a=this._range.end.clone().hours(e.hours()).minutes(e.minutes());if(a.isBefore(this._range.start)){const t=this._range.start.hours(),e=this._range.start.minutes();a.hours(t).minutes(e)}this.range={start:this._range.start.clone().toISOString(),end:a.toISOString(),whichDate:"end"}}_init(){this.startTimeFormControl=new r.NI("",[r.kI.pattern(this._timeRegExp)]),this.endTimeFormControl=new r.NI("",[r.kI.pattern(this._timeRegExp)]),this._programmaticChange=!0,this.range={start:s().startOf("day").toISOString(),end:s().add(1,"day").endOf("day").toISOString()},this._programmaticChange=!0,this.timeRange=!0}_parseTime(t){return t.split(this._timeRegExp).filter(t=>""!==t)[2]?s(t,"hh:mmA").seconds(0):s(t,"HH:mm").seconds(0)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(n.sBO),n.Y36(n.SBq),n.Y36(i.aV),n.Y36(n.Qsj),n.Y36(n.s_b))},t.\u0275cmp=n.Xpm({type:t,selectors:[["fuse-date-range"]],viewQuery:function(t,e){if(1&t&&(n.Gf(f,5),n.Gf(p,5),n.Gf(b,5,n.SBq),n.Gf(v,5)),2&t){let t;n.iGM(t=n.CRH())&&(e._matMonthView1=t.first),n.iGM(t=n.CRH())&&(e._matMonthView2=t.first),n.iGM(t=n.CRH())&&(e._pickerPanelOrigin=t.first),n.iGM(t=n.CRH())&&(e._pickerPanel=t.first)}},hostVars:2,hostBindings:function(t,e){2&t&&n.ekj("fuse-date-range",e._defaultClassNames)},inputs:{dateFormat:"dateFormat",timeFormat:"timeFormat",timeRange:"timeRange",range:"range"},outputs:{rangeChanged:"rangeChanged"},exportAs:["fuseDateRange"],features:[n._Bn([{provide:r.JU,useExisting:(0,n.Gpc)(()=>t),multi:!0}])],decls:14,vars:4,consts:[[1,"range",3,"click"],["pickerPanelOrigin",""],[1,"start"],[1,"date"],["class","time",4,"ngIf"],[1,"separator"],[1,"end"],["pickerPanel",""],[1,"time"],[1,"month"],[1,"month-header"],["mat-icon-button","","tabindex","1",1,"previous-button",3,"click"],[3,"svgIcon"],[1,"month-label"],[3,"activeDate","dateFilter","dateClass","activeDateChange","click","selectedChange"],["matMonthView1",""],["class","fuse-mat-no-subscript time start-time",4,"ngIf"],["mat-icon-button","","tabindex","2",1,"next-button",3,"click"],["matMonthView2",""],["class","fuse-mat-no-subscript time end-time",4,"ngIf"],[1,"fuse-mat-no-subscript","time","start-time"],["matInput","","tabindex","3",3,"autocomplete","formControl","blur"],[1,"fuse-mat-no-subscript","time","end-time"],["matInput","","tabindex","4",3,"formControl","blur"]],template:function(t,e){1&t&&(n.TgZ(0,"div",0,1),n.NdJ("click",function(){return e.openPickerPanel()}),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n._uU(4),n.qZA(),n.YNc(5,y,2,1,"div",4),n.qZA(),n.TgZ(6,"div",5),n._uU(7,"-"),n.qZA(),n.TgZ(8,"div",6),n.TgZ(9,"div",3),n._uU(10),n.qZA(),n.YNc(11,w,2,1,"div",4),n.qZA(),n.qZA(),n.YNc(12,C,20,12,"ng-template",null,7,n.W1O)),2&t&&(n.xp6(4),n.Oqu(e.range.startDate),n.xp6(1),n.Q6J("ngIf",e.range.startTime),n.xp6(5),n.Oqu(e.range.endDate),n.xp6(1),n.Q6J("ngIf",e.range.endTime))},directives:[m.O5,l.lW,h.Hw,g.NW,c.KE,u.Nt,r.Fj,r.JJ,r.oH,c.hX],styles:['fuse-date-range{display:flex}fuse-date-range .range{display:flex;align-items:center;height:48px;min-height:48px;max-height:48px;cursor:pointer}fuse-date-range .range .end,fuse-date-range .range .start{display:flex;align-items:center;height:100%;padding:0 16px;border-radius:6px;border-width:1px;line-height:1}.dark fuse-date-range .range .end,.dark fuse-date-range .range .start{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity));--tw-bg-opacity:0.05}fuse-date-range .range .end,fuse-date-range .range .start{--tw-border-opacity:1;border-color:rgba(203,213,225,var(--tw-border-opacity))}.dark fuse-date-range .range .end,.dark fuse-date-range .range .start{--tw-border-opacity:1;border-color:rgba(100,116,139,var(--tw-border-opacity))}fuse-date-range .range .end,fuse-date-range .range .start{--tw-shadow:0 1px 2px 0 #0000000d;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}fuse-date-range .range .end .date,fuse-date-range .range .start .date{white-space:nowrap}fuse-date-range .range .end .date+.time,fuse-date-range .range .start .date+.time{margin-left:8px}fuse-date-range .range .end .time,fuse-date-range .range .start .time{white-space:nowrap}fuse-date-range .range .separator{margin:0 2px}@media (min-width:600px){fuse-date-range .range .separator{margin:0 12px}}.fuse-date-range-panel{border-radius:4px;padding:24px;--tw-bg-opacity:1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));--tw-shadow:0 25px 50px -12px #00000040;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.fuse-date-range-panel .end,.fuse-date-range-panel .start{display:flex;flex-direction:column}.fuse-date-range-panel .end .month,.fuse-date-range-panel .start .month{max-width:196px;min-width:196px;width:196px}.fuse-date-range-panel .end .month .month-header,.fuse-date-range-panel .start .month .month-header{position:relative;display:flex;align-items:center;justify-content:center;height:32px;margin-bottom:16px}.fuse-date-range-panel .end .month .month-header .next-button,.fuse-date-range-panel .end .month .month-header .previous-button,.fuse-date-range-panel .start .month .month-header .next-button,.fuse-date-range-panel .start .month .month-header .previous-button{position:absolute;width:24px!important;height:24px!important;min-height:24px!important;max-height:24px!important;line-height:24px!important}.fuse-date-range-panel .end .month .month-header .next-button .mat-icon,.fuse-date-range-panel .end .month .month-header .previous-button .mat-icon,.fuse-date-range-panel .start .month .month-header .next-button .mat-icon,.fuse-date-range-panel .start .month .month-header .previous-button .mat-icon{width:1.25rem;height:1.25rem;min-width:1.25rem;min-height:1.25rem;font-size:1.25rem;line-height:1.25rem}.fuse-date-range-panel .end .month .month-header .next-button .mat-icon svg,.fuse-date-range-panel .end .month .month-header .previous-button .mat-icon svg,.fuse-date-range-panel .start .month .month-header .next-button .mat-icon svg,.fuse-date-range-panel .start .month .month-header .previous-button .mat-icon svg{width:1.25rem;height:1.25rem}.fuse-date-range-panel .end .month .month-header .previous-button,.fuse-date-range-panel .start .month .month-header .previous-button{left:0}.fuse-date-range-panel .end .month .month-header .next-button,.fuse-date-range-panel .start .month .month-header .next-button{right:0}.fuse-date-range-panel .end .month .month-header .month-label,.fuse-date-range-panel .start .month .month-header .month-label{font-weight:500;--tw-text-opacity:1;color:rgba(var(--fuse-text-secondary-rgb),var(--tw-text-opacity))}.fuse-date-range-panel .end .month mat-month-view,.fuse-date-range-panel .start .month mat-month-view{display:flex;min-height:188px}.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table{width:100%;border-collapse:collapse}.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr[aria-hidden=true],.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr[aria-hidden=true]{display:none!important}.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr:first-child td:first-child[aria-hidden=true],.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr:first-child td:first-child[aria-hidden=true]{visibility:hidden;pointer-events:none;opacity:0}.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td.fuse-date-range:before,.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td:hover.fuse-date-range:before,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td.fuse-date-range:before,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td:hover.fuse-date-range:before{--tw-bg-opacity:1;background-color:rgba(var(--fuse-primary-200-rgb),var(--tw-bg-opacity))}.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td.fuse-date-range .mat-calendar-body-cell-content,.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td:hover.fuse-date-range .mat-calendar-body-cell-content,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td.fuse-date-range .mat-calendar-body-cell-content,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td:hover.fuse-date-range .mat-calendar-body-cell-content{background-color:initial}.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td.fuse-date-range-end .mat-calendar-body-cell-content,.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td.fuse-date-range-start .mat-calendar-body-cell-content,.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td:hover.fuse-date-range-end .mat-calendar-body-cell-content,.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td:hover.fuse-date-range-start .mat-calendar-body-cell-content,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td.fuse-date-range-end .mat-calendar-body-cell-content,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td.fuse-date-range-start .mat-calendar-body-cell-content,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td:hover.fuse-date-range-end .mat-calendar-body-cell-content,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td:hover.fuse-date-range-start .mat-calendar-body-cell-content{--tw-bg-opacity:1;background-color:rgba(var(--fuse-primary-rgb),var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(var(--fuse-on-primary-rgb),var(--tw-text-opacity))}.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td .mat-calendar-body-today,.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td:hover .mat-calendar-body-today,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td .mat-calendar-body-today,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td:hover .mat-calendar-body-today{border:none}.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell{width:28px!important;height:28px!important;padding:2px!important}.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell.fuse-date-range,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell.fuse-date-range{position:relative}.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell.fuse-date-range:before,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell.fuse-date-range:before{content:"";position:absolute;top:2px;right:0;bottom:2px;left:0}.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell.fuse-date-range.fuse-date-range-start:before,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell.fuse-date-range.fuse-date-range-start:before{left:2px;border-radius:999px 0 0 999px}.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell.fuse-date-range.fuse-date-range-start.fuse-date-range-end:before,.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell.fuse-date-range.fuse-date-range-start:last-child:before,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell.fuse-date-range.fuse-date-range-start.fuse-date-range-end:before,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell.fuse-date-range.fuse-date-range-start:last-child:before{right:2px;border-radius:999px}.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell.fuse-date-range.fuse-date-range-end:before,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell.fuse-date-range.fuse-date-range-end:before{right:2px;border-radius:0 999px 999px 0}.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell.fuse-date-range.fuse-date-range-end:first-child:before,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell.fuse-date-range.fuse-date-range-end:first-child:before{left:2px;border-radius:999px}.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell.fuse-date-range:first-child:before,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell.fuse-date-range:first-child:before{border-radius:999px 0 0 999px}.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell.fuse-date-range:last-child:before,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell.fuse-date-range:last-child:before{border-radius:0 999px 999px 0}.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell .mat-calendar-body-cell-content,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-cell .mat-calendar-body-cell-content{position:relative;top:0;left:0;width:24px;height:24px;font-size:12px}.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-label+td.mat-calendar-body-cell.fuse-date-range:before,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-label+td.mat-calendar-body-cell.fuse-date-range:before{border-radius:999px 0 0 999px}.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-label+td.mat-calendar-body-cell.fuse-date-range.fuse-date-range-start.fuse-date-range-end,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-label+td.mat-calendar-body-cell.fuse-date-range.fuse-date-range-start.fuse-date-range-end{border-radius:999px}.fuse-date-range-panel .end .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-label+td.mat-calendar-body-cell.fuse-date-range.fuse-date-range-end:before,.fuse-date-range-panel .start .month mat-month-view .mat-calendar-table tbody tr td.mat-calendar-body-label+td.mat-calendar-body-cell.fuse-date-range.fuse-date-range-end:before{left:2px;border-radius:999px}.fuse-date-range-panel .end .time,.fuse-date-range-panel .start .time{width:100%;max-width:196px}.fuse-date-range-panel .start{align-items:flex-start;margin-right:20px}.fuse-date-range-panel .start .month .month-label{margin-left:8px}.fuse-date-range-panel .end{align-items:flex-end;margin-left:20px}.fuse-date-range-panel .end .month .month-label{margin-right:8px}'],encapsulation:2}),t})()},43986:(t,e,a)=>{"use strict";a.d(e,{l:()=>g}),a(4095);var n=a(61116),r=a(31041),o=a(84369),d=a(69024),s=a(13070),i=a(77307),m=a(6174),l=a(85031),h=a(35366);let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[[n.ez,r.UX,o.ot,d.FA,s.lN,m.c,i.Ps,l.Yd]]}),t})()}}]);