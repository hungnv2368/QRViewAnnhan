(self.webpackChunk_fuse_demo=self.webpackChunk_fuse_demo||[]).push([[100],{70100:(t,e,i)=>{"use strict";i.r(e),i.d(e,{AnalyticsModule:()=>V});var s=i(33464),o=i(84369),a=i(92762),r=i(36278),n=i(77307),l=i(97070),d=i(27701),c=i(59241),g=i(39199),u=i(24311),Z=i(16184),h=i(75425),m=i(55959),x=i(25416),p=i(35366),v=i(78512),A=i(66599),f=i(42693);let T=(()=>{class t{constructor(t){this._httpClient=t,this._data=new v.X(null)}get data$(){return this._data.asObservable()}getData(){return this._httpClient.get("api/dashboards/analytics").pipe((0,A.b)(t=>{this._data.next(t)}))}}return t.\u0275fac=function(e){return new(e||t)(p.LFG(f.eN))},t.\u0275prov=p.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var q=i(61116);function b(t,e){if(1&t&&(p.ynx(0),p.TgZ(1,"div",69),p.TgZ(2,"div",48),p._UZ(3,"div",70),p.TgZ(4,"div",71),p._uU(5),p.qZA(),p.qZA(),p.TgZ(6,"div",72),p._uU(7),p.ALo(8,"number"),p.qZA(),p.TgZ(9,"div",73),p._uU(10),p.qZA(),p.qZA(),p.BQk()),2&t){const t=e.$implicit,i=e.index,s=p.oxw();p.xp6(3),p.Udp("background-color",s.chartNewVsReturning.colors[i]),p.xp6(2),p.Oqu(s.data.newVsReturning.labels[i]),p.xp6(2),p.Oqu(p.xi3(8,5,s.data.newVsReturning.uniqueVisitors*t/100,"1.0-0")),p.xp6(3),p.hij("",t,"%")}}function _(t,e){if(1&t&&(p.ynx(0),p.TgZ(1,"div",69),p.TgZ(2,"div",48),p._UZ(3,"div",70),p.TgZ(4,"div",71),p._uU(5),p.qZA(),p.qZA(),p.TgZ(6,"div",72),p._uU(7),p.ALo(8,"number"),p.qZA(),p.TgZ(9,"div",73),p._uU(10),p.qZA(),p.qZA(),p.BQk()),2&t){const t=e.$implicit,i=e.index,s=p.oxw();p.xp6(3),p.Udp("background-color",s.chartGender.colors[i]),p.xp6(2),p.Oqu(s.data.gender.labels[i]),p.xp6(2),p.Oqu(p.xi3(8,5,s.data.gender.uniqueVisitors*t/100,"1.0-0")),p.xp6(3),p.hij("",t,"%")}}function y(t,e){if(1&t&&(p.ynx(0),p.TgZ(1,"div",69),p.TgZ(2,"div",48),p._UZ(3,"div",70),p.TgZ(4,"div",71),p._uU(5),p.qZA(),p.qZA(),p.TgZ(6,"div",72),p._uU(7),p.ALo(8,"number"),p.qZA(),p.TgZ(9,"div",73),p._uU(10),p.qZA(),p.qZA(),p.BQk()),2&t){const t=e.$implicit,i=e.index,s=p.oxw();p.xp6(3),p.Udp("background-color",s.chartAge.colors[i]),p.xp6(2),p.Oqu(s.data.age.labels[i]),p.xp6(2),p.Oqu(p.xi3(8,5,s.data.age.uniqueVisitors*t/100,"1.0-0")),p.xp6(3),p.hij("",t,"%")}}function w(t,e){if(1&t&&(p.ynx(0),p.TgZ(1,"div",69),p.TgZ(2,"div",48),p._UZ(3,"div",70),p.TgZ(4,"div",71),p._uU(5),p.qZA(),p.qZA(),p.TgZ(6,"div",72),p._uU(7),p.ALo(8,"number"),p.qZA(),p.TgZ(9,"div",73),p._uU(10),p.qZA(),p.qZA(),p.BQk()),2&t){const t=e.$implicit,i=e.index,s=p.oxw();p.xp6(3),p.Udp("background-color",s.chartLanguage.colors[i]),p.xp6(2),p.Oqu(s.data.language.labels[i]),p.xp6(2),p.Oqu(p.xi3(8,5,s.data.language.uniqueVisitors*t/100,"1.0-0")),p.xp6(3),p.hij("",t,"%")}}const U=[{path:"",component:(()=>{class t{constructor(t,e){this._analyticsService=t,this._router=e,this._unsubscribeAll=new m.xQ}ngOnInit(){this._analyticsService.data$.pipe((0,x.R)(this._unsubscribeAll)).subscribe(t=>{this.data=t,this._prepareChartData()}),window.Apex={chart:{events:{mounted:(t,e)=>{this._fixSvgFill(t.el)},updated:(t,e)=>{this._fixSvgFill(t.el)}}}}}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}trackByFn(t,e){return e.id||t}_fixSvgFill(t){const e=this._router.url;Array.from(t.querySelectorAll("*[fill]")).filter(t=>-1!==t.getAttribute("fill").indexOf("url(")).forEach(t=>{const i=t.getAttribute("fill");t.setAttribute("fill",`url(${e}${i.slice(i.indexOf("#"))}`)})}_prepareChartData(){this.chartVisitors={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",width:"100%",height:"100%",type:"area",toolbar:{show:!1},zoom:{enabled:!1}},colors:["#818CF8"],dataLabels:{enabled:!1},fill:{colors:["#312E81"]},grid:{show:!0,borderColor:"#334155",padding:{top:10,bottom:-40,left:0,right:0},position:"back",xaxis:{lines:{show:!0}}},series:this.data.visitors.series,stroke:{width:2},tooltip:{followCursor:!0,theme:"dark",x:{format:"MMM dd, yyyy"},y:{formatter:t=>`${t}`}},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{stroke:{color:"#475569",dashArray:0,width:2}},labels:{offsetY:-20,style:{colors:"#CBD5E1"}},tickAmount:20,tooltip:{enabled:!1},type:"datetime"},yaxis:{axisTicks:{show:!1},axisBorder:{show:!1},min:t=>t-750,max:t=>t+250,tickAmount:5,show:!1}},this.chartConversions={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#38BDF8"],fill:{colors:["#38BDF8"],opacity:.5},series:this.data.conversions.series,stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"category",categories:this.data.conversions.labels},yaxis:{labels:{formatter:t=>t.toString()}}},this.chartImpressions={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#34D399"],fill:{colors:["#34D399"],opacity:.5},series:this.data.impressions.series,stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"category",categories:this.data.impressions.labels},yaxis:{labels:{formatter:t=>t.toString()}}},this.chartVisits={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#FB7185"],fill:{colors:["#FB7185"],opacity:.5},series:this.data.visits.series,stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"category",categories:this.data.visits.labels},yaxis:{labels:{formatter:t=>t.toString()}}},this.chartVisitorsVsPageViews={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",toolbar:{show:!1},zoom:{enabled:!1}},colors:["#64748B","#94A3B8"],dataLabels:{enabled:!1},fill:{colors:["#64748B","#94A3B8"],opacity:.5},grid:{show:!1,padding:{bottom:-40,left:0,right:0}},legend:{show:!1},series:this.data.visitorsVsPageViews.series,stroke:{curve:"smooth",width:2},tooltip:{followCursor:!0,theme:"dark",x:{format:"MMM dd, yyyy"}},xaxis:{axisBorder:{show:!1},labels:{offsetY:-20,rotate:0,style:{colors:"var(--fuse-text-secondary)"}},tickAmount:3,tooltip:{enabled:!1},type:"datetime"},yaxis:{labels:{style:{colors:"var(--fuse-text-secondary)"}},max:t=>t+250,min:t=>t-250,show:!1,tickAmount:5}},this.chartNewVsReturning={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"donut",sparkline:{enabled:!0}},colors:["#3182CE","#63B3ED"],labels:this.data.newVsReturning.labels,plotOptions:{pie:{customScale:.9,expandOnClick:!1,donut:{size:"70%"}}},series:this.data.newVsReturning.series,states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},tooltip:{enabled:!0,fillSeriesColor:!1,theme:"dark",custom:({seriesIndex:t,w:e})=>`<div class="flex items-center h-8 min-h-8 max-h-8 px-3">\n                                                    <div class="w-3 h-3 rounded-full" style="background-color: ${e.config.colors[t]};"></div>\n                                                    <div class="ml-2 text-md leading-none">${e.config.labels[t]}:</div>\n                                                    <div class="ml-2 text-md font-bold leading-none">${e.config.series[t]}%</div>\n                                                </div>`}},this.chartGender={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"donut",sparkline:{enabled:!0}},colors:["#319795","#4FD1C5"],labels:this.data.gender.labels,plotOptions:{pie:{customScale:.9,expandOnClick:!1,donut:{size:"70%"}}},series:this.data.gender.series,states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},tooltip:{enabled:!0,fillSeriesColor:!1,theme:"dark",custom:({seriesIndex:t,w:e})=>`<div class="flex items-center h-8 min-h-8 max-h-8 px-3">\n                                                     <div class="w-3 h-3 rounded-full" style="background-color: ${e.config.colors[t]};"></div>\n                                                     <div class="ml-2 text-md leading-none">${e.config.labels[t]}:</div>\n                                                     <div class="ml-2 text-md font-bold leading-none">${e.config.series[t]}%</div>\n                                                 </div>`}},this.chartAge={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"donut",sparkline:{enabled:!0}},colors:["#DD6B20","#F6AD55"],labels:this.data.age.labels,plotOptions:{pie:{customScale:.9,expandOnClick:!1,donut:{size:"70%"}}},series:this.data.age.series,states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},tooltip:{enabled:!0,fillSeriesColor:!1,theme:"dark",custom:({seriesIndex:t,w:e})=>`<div class="flex items-center h-8 min-h-8 max-h-8 px-3">\n                                                    <div class="w-3 h-3 rounded-full" style="background-color: ${e.config.colors[t]};"></div>\n                                                    <div class="ml-2 text-md leading-none">${e.config.labels[t]}:</div>\n                                                    <div class="ml-2 text-md font-bold leading-none">${e.config.series[t]}%</div>\n                                                </div>`}},this.chartLanguage={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"donut",sparkline:{enabled:!0}},colors:["#805AD5","#B794F4"],labels:this.data.language.labels,plotOptions:{pie:{customScale:.9,expandOnClick:!1,donut:{size:"70%"}}},series:this.data.language.series,states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},tooltip:{enabled:!0,fillSeriesColor:!1,theme:"dark",custom:({seriesIndex:t,w:e})=>`<div class="flex items-center h-8 min-h-8 max-h-8 px-3">\n                                                    <div class="w-3 h-3 rounded-full" style="background-color: ${e.config.colors[t]};"></div>\n                                                    <div class="ml-2 text-md leading-none">${e.config.labels[t]}:</div>\n                                                    <div class="ml-2 text-md font-bold leading-none">${e.config.series[t]}%</div>\n                                                </div>`}}}}return t.\u0275fac=function(e){return new(e||t)(p.Y36(T),p.Y36(s.F0))},t.\u0275cmp=p.Xpm({type:t,selectors:[["analytics"]],decls:287,vars:121,consts:[[1,"flex","flex-col","flex-auto","w-full"],[1,"flex","flex-wrap","w-full","max-w-screen-xl","mx-auto","p-6","md:p-8"],[1,"flex","items-center","justify-between","w-full"],[1,"text-3xl","font-semibold","tracking-tight","leading-8"],[1,"font-medium","tracking-tight","text-secondary"],[1,"flex","items-center","ml-6"],["mat-stroked-button","",1,"hidden","sm:inline-flex"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["mat-flat-button","",1,"hidden","sm:inline-flex","ml-3",3,"color"],[1,"sm:hidden"],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"svgIcon"],["actionsMenu","matMenu"],["mat-menu-item",""],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-8","w-full","mt-8"],[1,"sm:col-span-2","lg:col-span-3","dark","flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","items-center","justify-between","mt-10","ml-10","mr-6","sm:mr-10"],[1,"flex","flex-col"],[1,"mr-4","text-2xl","md:text-3xl","font-semibold","tracking-tight","leading-7"],[1,"font-medium","text-secondary"],["value","this-year",1,"hidden","sm:inline-flex","border-none","space-x-1"],["visitorsYearSelector","matButtonToggleGroup"],["value","last-year",1,"px-1.5","rounded-full","overflow-hidden","border-none","font-medium"],["value","this-year",1,"px-1.5","rounded-full","overflow-hidden","border-none","font-medium"],["visitorsMenu","matMenu"],[1,"flex","flex-col","flex-auto","h-80"],[1,"flex-auto","w-full","h-full",3,"chart","colors","dataLabels","fill","grid","series","stroke","tooltip","xaxis","yaxis"],[1,"sm:col-span-2","lg:col-span-1","flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","items-start","justify-between","m-6","mb-0"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate"],["mat-button","",1,"h-6","min-h-6","px-2","rounded-full","bg-hover",3,"matMenuTriggerFor"],[1,"font-medium","text-sm","text-secondary"],["conversionMenu","matMenu"],[1,"flex","flex-col","lg:flex-row","lg:items-center","mx-6","mt-3"],[1,"text-7xl","font-bold","tracking-tighter","leading-tight"],[1,"flex","lg:flex-col","lg:ml-3"],[1,"icon-size-5","text-red-500",3,"svgIcon"],[1,"flex","items-center","ml-1","lg:ml-0","lg:mt-0.5","text-md","leading-none","whitespace-nowrap","text-secondary"],[1,"font-medium","text-red-500"],[1,"ml-1"],[1,"flex","flex-col","flex-auto","h-20"],[1,"flex-auto","w-full","h-full",3,"chart","colors","series","stroke","tooltip","xaxis","yaxis"],[1,"flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],["impressionsMenu","matMenu"],[1,"flex","flex-col","flex-auto","mt-8","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","items-start","mt-6","mx-6"],[1,"grid","grid-cols-1","sm:grid-cols-3","gap-8","sm:gap-12"],[1,"flex","items-center"],[1,"font-medium","text-secondary","leading-5"],[1,"ml-1.5","icon-size-4","text-hint",3,"svgIcon","matTooltip"],[1,"flex","items-start","mt-2"],[1,"text-4xl","font-bold","tracking-tight","leading-none"],[1,"flex","items-center","ml-2"],[1,"icon-size-5","text-green-500",3,"svgIcon"],[1,"ml-1","text-md","font-medium","text-green-500"],[1,"ml-1","text-md","font-medium","text-red-500"],[1,"flex","flex-col","flex-auto","h-80","mt-3"],[1,"flex-auto","w-full","h-full",3,"chart","colors","dataLabels","grid","legend","series","stroke","tooltip","xaxis","yaxis"],[1,"w-full","mt-12"],[1,"text-2xl","font-semibold","tracking-tight","leading-6"],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-4","gap-8","w-full","mt-6","md:mt-8"],[1,"flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden","p-6"],[1,"flex","items-start","justify-between"],[1,"flex","flex-col","flex-auto","mt-6","h-44"],[1,"flex","flex-auto","items-center","justify-center","w-full","h-full",3,"chart","colors","labels","plotOptions","series","states","tooltip"],[1,"mt-8"],[1,"-my-3","divide-y"],[4,"ngFor","ngForOf"],[1,"grid","grid-cols-3","py-3"],[1,"flex-0","w-2","h-2","rounded-full"],[1,"ml-3","truncate"],[1,"font-medium","text-right"],[1,"text-right","text-secondary"]],template:function(t,e){if(1&t&&(p.TgZ(0,"div",0),p.TgZ(1,"div",1),p.TgZ(2,"div",2),p.TgZ(3,"div"),p.TgZ(4,"div",3),p._uU(5,"Analytics dashboard"),p.qZA(),p.TgZ(6,"div",4),p._uU(7,"Monitor metrics, check reports and review performance"),p.qZA(),p.qZA(),p.TgZ(8,"div",5),p.TgZ(9,"button",6),p._UZ(10,"mat-icon",7),p.TgZ(11,"span",8),p._uU(12,"Settings"),p.qZA(),p.qZA(),p.TgZ(13,"button",9),p._UZ(14,"mat-icon",7),p.TgZ(15,"span",8),p._uU(16,"Export"),p.qZA(),p.qZA(),p.TgZ(17,"div",10),p.TgZ(18,"button",11),p._UZ(19,"mat-icon",12),p.qZA(),p.TgZ(20,"mat-menu",null,13),p.TgZ(22,"button",14),p._uU(23,"Export"),p.qZA(),p.TgZ(24,"button",14),p._uU(25,"Settings"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(26,"div",15),p.TgZ(27,"div",16),p.TgZ(28,"div",17),p.TgZ(29,"div",18),p.TgZ(30,"div",19),p._uU(31,"Visitors Overview"),p.qZA(),p.TgZ(32,"div",20),p._uU(33,"Number of unique visitors"),p.qZA(),p.qZA(),p.TgZ(34,"div",8),p.TgZ(35,"mat-button-toggle-group",21,22),p.TgZ(37,"mat-button-toggle",23),p._uU(38,"Last Year "),p.qZA(),p.TgZ(39,"mat-button-toggle",24),p._uU(40,"This Year "),p.qZA(),p.qZA(),p.TgZ(41,"div",10),p.TgZ(42,"button",11),p._UZ(43,"mat-icon",12),p.qZA(),p.TgZ(44,"mat-menu",null,25),p.TgZ(46,"button",14),p._uU(47,"This Year"),p.qZA(),p.TgZ(48,"button",14),p._uU(49,"Last Year"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(50,"div",26),p._UZ(51,"apx-chart",27),p.qZA(),p.qZA(),p.TgZ(52,"div",28),p.TgZ(53,"div",29),p.TgZ(54,"div",30),p._uU(55,"Conversions"),p.qZA(),p.TgZ(56,"div",8),p.TgZ(57,"button",31),p.TgZ(58,"span",32),p._uU(59,"30 days"),p.qZA(),p.qZA(),p.TgZ(60,"mat-menu",null,33),p.TgZ(62,"button",14),p._uU(63,"30 days"),p.qZA(),p.TgZ(64,"button",14),p._uU(65,"3 months"),p.qZA(),p.TgZ(66,"button",14),p._uU(67,"9 months"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(68,"div",34),p.TgZ(69,"div",35),p._uU(70),p.ALo(71,"number"),p.qZA(),p.TgZ(72,"div",36),p._UZ(73,"mat-icon",37),p.TgZ(74,"div",38),p.TgZ(75,"span",39),p._uU(76,"2%"),p.qZA(),p.TgZ(77,"span",40),p._uU(78,"below target"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(79,"div",41),p._UZ(80,"apx-chart",42),p.qZA(),p.qZA(),p.TgZ(81,"div",43),p.TgZ(82,"div",29),p.TgZ(83,"div",30),p._uU(84,"Impressions"),p.qZA(),p.TgZ(85,"div",8),p.TgZ(86,"button",31),p.TgZ(87,"span",32),p._uU(88,"30 days"),p.qZA(),p.qZA(),p.TgZ(89,"mat-menu",null,44),p.TgZ(91,"button",14),p._uU(92,"30 days"),p.qZA(),p.TgZ(93,"button",14),p._uU(94,"3 months"),p.qZA(),p.TgZ(95,"button",14),p._uU(96,"9 months"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(97,"div",34),p.TgZ(98,"div",35),p._uU(99),p.ALo(100,"number"),p.qZA(),p.TgZ(101,"div",36),p._UZ(102,"mat-icon",37),p.TgZ(103,"div",38),p.TgZ(104,"span",39),p._uU(105,"4%"),p.qZA(),p.TgZ(106,"span",40),p._uU(107,"below target"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(108,"div",41),p._UZ(109,"apx-chart",42),p.qZA(),p.qZA(),p.TgZ(110,"div",43),p.TgZ(111,"div",29),p.TgZ(112,"div",30),p._uU(113,"Visits"),p.qZA(),p.TgZ(114,"div",8),p.TgZ(115,"button",31),p.TgZ(116,"span",32),p._uU(117,"30 days"),p.qZA(),p.qZA(),p.TgZ(118,"mat-menu",null,44),p.TgZ(120,"button",14),p._uU(121,"30 days"),p.qZA(),p.TgZ(122,"button",14),p._uU(123,"3 months"),p.qZA(),p.TgZ(124,"button",14),p._uU(125,"9 months"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(126,"div",34),p.TgZ(127,"div",35),p._uU(128),p.ALo(129,"number"),p.qZA(),p.TgZ(130,"div",36),p._UZ(131,"mat-icon",37),p.TgZ(132,"div",38),p.TgZ(133,"span",39),p._uU(134,"4%"),p.qZA(),p.TgZ(135,"span",40),p._uU(136,"below target"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(137,"div",41),p._UZ(138,"apx-chart",42),p.qZA(),p.qZA(),p.qZA(),p.TgZ(139,"div",45),p.TgZ(140,"div",29),p.TgZ(141,"div",30),p._uU(142,"Visitors vs. Page Views"),p.qZA(),p.TgZ(143,"div",8),p.TgZ(144,"button",31),p.TgZ(145,"span",32),p._uU(146,"30 days"),p.qZA(),p.qZA(),p.TgZ(147,"mat-menu",null,33),p.TgZ(149,"button",14),p._uU(150,"30 days"),p.qZA(),p.TgZ(151,"button",14),p._uU(152,"3 months"),p.qZA(),p.TgZ(153,"button",14),p._uU(154,"9 months"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(155,"div",46),p.TgZ(156,"div",47),p.TgZ(157,"div",18),p.TgZ(158,"div",48),p.TgZ(159,"div",49),p._uU(160,"Overall Score"),p.qZA(),p._UZ(161,"mat-icon",50),p.qZA(),p.TgZ(162,"div",51),p.TgZ(163,"div",52),p._uU(164),p.qZA(),p.TgZ(165,"div",53),p._UZ(166,"mat-icon",54),p.TgZ(167,"div",55),p._uU(168,"42.9%"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(169,"div",18),p.TgZ(170,"div",48),p.TgZ(171,"div",49),p._uU(172,"Average Ratio"),p.qZA(),p._UZ(173,"mat-icon",50),p.qZA(),p.TgZ(174,"div",51),p.TgZ(175,"div",52),p._uU(176),p.ALo(177,"number"),p.qZA(),p.TgZ(178,"div",53),p._UZ(179,"mat-icon",37),p.TgZ(180,"div",56),p._uU(181,"13.1%"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(182,"div",18),p.TgZ(183,"div",48),p.TgZ(184,"div",49),p._uU(185,"Predicted Ratio"),p.qZA(),p._UZ(186,"mat-icon",50),p.qZA(),p.TgZ(187,"div",51),p.TgZ(188,"div",52),p._uU(189),p.ALo(190,"number"),p.qZA(),p.TgZ(191,"div",53),p._UZ(192,"mat-icon",54),p.TgZ(193,"div",55),p._uU(194,"22.2%"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(195,"div",57),p._UZ(196,"apx-chart",58),p.qZA(),p.qZA(),p.TgZ(197,"div",59),p.TgZ(198,"div",60),p._uU(199,"Your Audience"),p.qZA(),p.TgZ(200,"div",4),p._uU(201,"Demographic properties of your users"),p.qZA(),p.qZA(),p.TgZ(202,"div",61),p.TgZ(203,"div",62),p.TgZ(204,"div",63),p.TgZ(205,"div",30),p._uU(206,"New vs. Returning"),p.qZA(),p.TgZ(207,"div",8),p.TgZ(208,"button",31),p.TgZ(209,"span",32),p._uU(210,"30 days"),p.qZA(),p.qZA(),p.TgZ(211,"mat-menu",null,33),p.TgZ(213,"button",14),p._uU(214,"30 days"),p.qZA(),p.TgZ(215,"button",14),p._uU(216,"3 months"),p.qZA(),p.TgZ(217,"button",14),p._uU(218,"9 months"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(219,"div",64),p._UZ(220,"apx-chart",65),p.qZA(),p.TgZ(221,"div",66),p.TgZ(222,"div",67),p.YNc(223,b,11,8,"ng-container",68),p.qZA(),p.qZA(),p.qZA(),p.TgZ(224,"div",62),p.TgZ(225,"div",63),p.TgZ(226,"div",30),p._uU(227,"Gender"),p.qZA(),p.TgZ(228,"div",8),p.TgZ(229,"button",31),p.TgZ(230,"span",32),p._uU(231,"30 days"),p.qZA(),p.qZA(),p.TgZ(232,"mat-menu",null,33),p.TgZ(234,"button",14),p._uU(235,"30 days"),p.qZA(),p.TgZ(236,"button",14),p._uU(237,"3 months"),p.qZA(),p.TgZ(238,"button",14),p._uU(239,"9 months"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(240,"div",64),p._UZ(241,"apx-chart",65),p.qZA(),p.TgZ(242,"div",66),p.TgZ(243,"div",67),p.YNc(244,_,11,8,"ng-container",68),p.qZA(),p.qZA(),p.qZA(),p.TgZ(245,"div",62),p.TgZ(246,"div",63),p.TgZ(247,"div",30),p._uU(248,"Age"),p.qZA(),p.TgZ(249,"div",8),p.TgZ(250,"button",31),p.TgZ(251,"span",32),p._uU(252,"30 days"),p.qZA(),p.qZA(),p.TgZ(253,"mat-menu",null,33),p.TgZ(255,"button",14),p._uU(256,"30 days"),p.qZA(),p.TgZ(257,"button",14),p._uU(258,"3 months"),p.qZA(),p.TgZ(259,"button",14),p._uU(260,"9 months"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(261,"div",64),p._UZ(262,"apx-chart",65),p.qZA(),p.TgZ(263,"div",66),p.TgZ(264,"div",67),p.YNc(265,y,11,8,"ng-container",68),p.qZA(),p.qZA(),p.qZA(),p.TgZ(266,"div",62),p.TgZ(267,"div",63),p.TgZ(268,"div",30),p._uU(269,"Language"),p.qZA(),p.TgZ(270,"div",8),p.TgZ(271,"button",31),p.TgZ(272,"span",32),p._uU(273,"30 days"),p.qZA(),p.qZA(),p.TgZ(274,"mat-menu",null,33),p.TgZ(276,"button",14),p._uU(277,"30 days"),p.qZA(),p.TgZ(278,"button",14),p._uU(279,"3 months"),p.qZA(),p.TgZ(280,"button",14),p._uU(281,"9 months"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(282,"div",64),p._UZ(283,"apx-chart",65),p.qZA(),p.TgZ(284,"div",66),p.TgZ(285,"div",67),p.YNc(286,w,11,8,"ng-container",68),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&t){const t=p.MAs(21),i=p.MAs(36),s=p.MAs(45),o=p.MAs(61),a=p.MAs(90);p.xp6(10),p.Q6J("svgIcon","heroicons_solid:cog"),p.xp6(3),p.Q6J("color","primary"),p.xp6(1),p.Q6J("svgIcon","heroicons_solid:save"),p.xp6(4),p.Q6J("matMenuTriggerFor",t),p.xp6(1),p.Q6J("svgIcon","heroicons_outline:dots-vertical"),p.xp6(23),p.Q6J("matMenuTriggerFor",s),p.xp6(1),p.Q6J("svgIcon","heroicons_outline:dots-vertical"),p.xp6(8),p.Q6J("chart",e.chartVisitors.chart)("colors",e.chartVisitors.colors)("dataLabels",e.chartVisitors.dataLabels)("fill",e.chartVisitors.fill)("grid",e.chartVisitors.grid)("series",e.chartVisitors.series[i.value])("stroke",e.chartVisitors.stroke)("tooltip",e.chartVisitors.tooltip)("xaxis",e.chartVisitors.xaxis)("yaxis",e.chartVisitors.yaxis),p.xp6(6),p.Q6J("matMenuTriggerFor",o),p.xp6(13),p.Oqu(p.xi3(71,106,e.data.conversions.amount,"1.0-0")),p.xp6(3),p.Q6J("svgIcon","heroicons_solid:trending-down"),p.xp6(7),p.Q6J("chart",e.chartConversions.chart)("colors",e.chartConversions.colors)("series",e.chartConversions.series)("stroke",e.chartConversions.stroke)("tooltip",e.chartConversions.tooltip)("xaxis",e.chartConversions.xaxis)("yaxis",e.chartConversions.yaxis),p.xp6(6),p.Q6J("matMenuTriggerFor",a),p.xp6(13),p.Oqu(p.xi3(100,109,e.data.impressions.amount,"1.0-0")),p.xp6(3),p.Q6J("svgIcon","heroicons_solid:trending-down"),p.xp6(7),p.Q6J("chart",e.chartImpressions.chart)("colors",e.chartImpressions.colors)("series",e.chartImpressions.series)("stroke",e.chartImpressions.stroke)("tooltip",e.chartImpressions.tooltip)("xaxis",e.chartImpressions.xaxis)("yaxis",e.chartImpressions.yaxis),p.xp6(6),p.Q6J("matMenuTriggerFor",a),p.xp6(13),p.Oqu(p.xi3(129,112,e.data.visits.amount,"1.0-0")),p.xp6(3),p.Q6J("svgIcon","heroicons_solid:trending-down"),p.xp6(7),p.Q6J("chart",e.chartVisits.chart)("colors",e.chartVisits.colors)("series",e.chartVisits.series)("stroke",e.chartVisits.stroke)("tooltip",e.chartVisits.tooltip)("xaxis",e.chartVisits.xaxis)("yaxis",e.chartVisits.yaxis),p.xp6(6),p.Q6J("matMenuTriggerFor",o),p.xp6(17),p.Q6J("svgIcon","heroicons_solid:information-circle")("matTooltip","Score is calculated by using the historical ratio between Page Views and Visitors. Best score is 1000, worst score is 0."),p.xp6(3),p.Oqu(e.data.visitorsVsPageViews.overallScore),p.xp6(2),p.Q6J("svgIcon","heroicons_solid:arrow-circle-up"),p.xp6(7),p.Q6J("svgIcon","heroicons_solid:information-circle")("matTooltip","Average Ratio is the average ratio between Page Views and Visitors"),p.xp6(3),p.hij("",p.xi3(177,115,e.data.visitorsVsPageViews.averageRatio,"1.0-0"),"%"),p.xp6(3),p.Q6J("svgIcon","heroicons_solid:arrow-circle-down"),p.xp6(7),p.Q6J("svgIcon","heroicons_solid:information-circle")("matTooltip","Predicted Ratio is calculated by using historical ratio, current trends and your goal targets."),p.xp6(3),p.hij("",p.xi3(190,118,e.data.visitorsVsPageViews.predictedRatio,"1.0-0"),"%"),p.xp6(3),p.Q6J("svgIcon","heroicons_solid:arrow-circle-up"),p.xp6(4),p.Q6J("chart",e.chartVisitorsVsPageViews.chart)("colors",e.chartVisitorsVsPageViews.colors)("dataLabels",e.chartVisitorsVsPageViews.dataLabels)("grid",e.chartVisitorsVsPageViews.grid)("legend",e.chartVisitorsVsPageViews.legend)("series",e.chartVisitorsVsPageViews.series)("stroke",e.chartVisitorsVsPageViews.stroke)("tooltip",e.chartVisitorsVsPageViews.tooltip)("xaxis",e.chartVisitorsVsPageViews.xaxis)("yaxis",e.chartVisitorsVsPageViews.yaxis),p.xp6(12),p.Q6J("matMenuTriggerFor",o),p.xp6(12),p.Q6J("chart",e.chartNewVsReturning.chart)("colors",e.chartNewVsReturning.colors)("labels",e.chartNewVsReturning.labels)("plotOptions",e.chartNewVsReturning.plotOptions)("series",e.chartNewVsReturning.series)("states",e.chartNewVsReturning.states)("tooltip",e.chartNewVsReturning.tooltip),p.xp6(3),p.Q6J("ngForOf",e.data.newVsReturning.series),p.xp6(6),p.Q6J("matMenuTriggerFor",o),p.xp6(12),p.Q6J("chart",e.chartGender.chart)("colors",e.chartGender.colors)("labels",e.chartGender.labels)("plotOptions",e.chartGender.plotOptions)("series",e.chartGender.series)("states",e.chartGender.states)("tooltip",e.chartGender.tooltip),p.xp6(3),p.Q6J("ngForOf",e.data.gender.series),p.xp6(6),p.Q6J("matMenuTriggerFor",o),p.xp6(12),p.Q6J("chart",e.chartAge.chart)("colors",e.chartAge.colors)("labels",e.chartAge.labels)("plotOptions",e.chartAge.plotOptions)("series",e.chartAge.series)("states",e.chartAge.states)("tooltip",e.chartAge.tooltip),p.xp6(3),p.Q6J("ngForOf",e.data.age.series),p.xp6(6),p.Q6J("matMenuTriggerFor",o),p.xp6(12),p.Q6J("chart",e.chartLanguage.chart)("colors",e.chartLanguage.colors)("labels",e.chartLanguage.labels)("plotOptions",e.chartLanguage.plotOptions)("series",e.chartLanguage.series)("states",e.chartLanguage.states)("tooltip",e.chartLanguage.tooltip),p.xp6(3),p.Q6J("ngForOf",e.data.language.series)}},directives:[o.lW,n.Hw,l.p6,l.VK,l.OP,a.A9,a.Yi,Z.x,u.gM,q.sg],pipes:[q.JJ],encapsulation:2,changeDetection:0}),t})(),resolve:{data:(()=>{class t{constructor(t){this._analyticsService=t}resolve(t,e){return this._analyticsService.getData()}}return t.\u0275fac=function(e){return new(e||t)(p.LFG(T))},t.\u0275prov=p.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}];let V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[s.Bz.forChild(U),o.ot,a.vV,r.t,n.Ps,l.Tx,d.Cv,c.JX,g.p0,u.AV,Z.X,h.m]]}),t})()}}]);