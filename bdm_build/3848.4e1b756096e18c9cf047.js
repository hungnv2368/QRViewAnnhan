(self.webpackChunk_fuse_demo=self.webpackChunk_fuse_demo||[]).push([[3848],{23848:(e,t,a)=>{"use strict";a.r(t),a.d(t,{ChangelogModule:()=>c});var o=a(33464),n=a(75425),i=a(35366),s=a(61116);function r(e,t){if(1&e&&(i.ynx(0),i.TgZ(1,"li"),i._uU(2),i.qZA(),i.BQk()),2&e){const e=t.$implicit;i.xp6(2),i.Oqu(e)}}function l(e,t){if(1&e&&(i.ynx(0),i.TgZ(1,"div",14),i.TgZ(2,"span",15),i._uU(3),i.qZA(),i.TgZ(4,"ul"),i.YNc(5,r,3,1,"ng-container",9),i.qZA(),i.qZA(),i.BQk()),2&e){const e=t.$implicit;i.xp6(3),i.Oqu(e.type),i.xp6(2),i.Q6J("ngForOf",e.list)}}function d(e,t){if(1&e&&(i.ynx(0),i.TgZ(1,"div",10),i.TgZ(2,"div"),i.TgZ(3,"h2",11),i._uU(4),i.qZA(),i.TgZ(5,"div",12),i._uU(6),i.qZA(),i.qZA(),i._UZ(7,"hr",13),i.YNc(8,l,6,2,"ng-container",9),i.qZA(),i.BQk()),2&e){const e=t.$implicit;i.xp6(4),i.Oqu(e.version),i.xp6(2),i.Oqu(e.releaseDate),i.xp6(2),i.Q6J("ngForOf",e.changes)}}const p=[{path:"",component:(()=>{class e{constructor(){this.changelog=[{version:"v13.1.0",releaseDate:"June 15, 2021",changes:[{type:"Added",list:["(fuse/fullscreen) [tooltip] & [iconTpl] inputs for customizing the trigger button",'(fuse/navigation) "target" property for setting the target attribute on external links',"(ui/angular-material) List of available components with links to official docs","(ui/advanced-search) An example form that uses query parameters for Advanced Search like forms",'(ui/page-layouts) Tabbed version of "Simple Fullwidth" page layout']},{type:"Changed",list:["(app.resolver) Use services to request the initial data","(core) New navigation service to request and store the navigation data",'(core/user) Renamed "user.model" to "user.types" for better consistency',"(layouts) Common components of layouts now requests their data directly from their service rather than getting it from route data","(layouts/common/search) Improved the autocomplete design","(apps/ecommerce/inventory) Replaced the mat-table with a custom grid for better performance & improved the mobile experience","(docs) Updated the docs to reflect the latest changes","(dependencies) Updated Angular, Angular Material & various other packages"]},{type:"Fixed",list:["(fuse/navigation) First children of collapsable items don't have proper spacing at the top",'(data/navigation) Wrong icon for "Invoice" navigation item','(data/navigation) Dashboards are missing from "Futuristic" navigation type']}]},{version:"v13.0.3",releaseDate:"June 03, 2021",changes:[{type:"Added",list:["(apps/scrumboard) New, initial version of the Scrumboard app"]},{type:"Changed",list:['(fuse/autogrow) BREAKING: Removed "fuseAutogrow" in favor of "matTextareaAutosize" since all of its problems solved, use [matTextareaAutosize] without any vertical padding on the textarea itself',"(Angular Material) Increased default MatDialog border radius to 16px for better consistency","(apps/ecommerce) Small tweaks and improvements","(apps/mailbox) Small tweaks and improvements",'(angular.json) Removed "e2e" entry, fixed the styles file path for "test"',"(dependencies) Updated Angular, Angular Material & various other packages"]},{type:"Fixed",list:["(Angular Material) Density setting is not being applied correctly on Dark themes"]}]},{version:"v13.0.2",releaseDate:"May 24, 2021",changes:[{type:"Changed",list:["(mockApi) Removed typings from data files","(apps/ecommerce/inventory) Performance improvements, decreased the mockApi delay","(pages/settings) Fixed: Settings container component width is not filling the container"]}]},{version:"v13.0.1",releaseDate:"May 21, 2021",changes:[{type:"Added",list:["(i18n) Added multi language support using @ngneat/transloco","(pages) Added Activities page (timeline)",'(FuseNavigation) Added support for new "isActiveMatchOptions" for Basic navigation items; https://github.com/angular/angular/pull/40303']},{type:"Changed",list:["(dependencies) Updated various packages to their latest versions","(tailwind) Use TAILWIND_MODE environment variable to activate purge on build","(overrides/angular-material) Changed the text and arrow color of mat-select on focus when it's used as a prefix or suffix in mat-form-field","(overrides/angular-material) Use @apply whenever it's possible","(eslint) Removed e2e tsconfig path as there is no default e2e solution included into Angular since v12.0.0","(eslint) Activated explicit return types on functions and methods",'(core) Separated the "auth" and "icon registry" to their own modules to keep the CoreModule simple','(FuseNavigation) Added a generic return type for "getComponent" method on FuseNavigationService','(FuseNavigation) Use the generic return type for "getComponent"',"(fuse) Fixed barrel exports","(layout/common) Added trackBy functions to ngFor loops in common components","(docs) Updated docs"]}]},{version:"v13.0.0",releaseDate:"May 15, 2021",changes:[{type:"Added",list:["(pages/settings) New Settings page",'(support) "_redirects" file for Netlify support']},{type:"Changed",list:["(dependencies) Updated Angular & Angular Material to v12.0.0","(dependencies) Updated various other packages","(linting) Migrated over to the ESLint",'(routing) Use "corrected" behavior for relative link resolution (https://github.com/angular/angular/pull/22394) as it\'s the default value starting from Angular v11 (https://github.com/angular/angular/pull/25609)',"(refactoring) Moved *ngFor directives to their separate <ng-container> element","(apps/ecommerce) Tweaked the hover color on inventory list for better consistency","(apps/chat) Tweaked the hover color on lists for better consistency","(apps/contacts) Tweaked the hover color on contact list for better consistency","(apps/tasks) Visual improvements"]}]},{version:"v12.3.0",releaseDate:"May 07, 2021",changes:[{type:"Added",list:["(apps/notes) New Notes app","(fuse/masonry) Added a component for creating fast Masonry-like layouts"]},{type:"Changed",list:["(apps/tasks) Tweaked the hover color on tasks list for better consistency","(apps/mailbox) Adjusted the app title font size for better consistency","(apps/mailbox) Used shadow on threads for better consistency"]}]},{version:"v12.2.0",releaseDate:"May 01, 2021",changes:[{type:"Added",list:["(apps/chat) New and improvement version of Chat app","(fuse/fullscreen) Added fullscreen toggle component"]},{type:"Changed",list:["(dependencies) Updated Angular, Angular Material and various other packages","(apps/academy) Better error handling on courses that are not exist","(apps/academy) Added missing trackBy functions to ngFor loops","(apps/mailbox) Removed unused methods","(pages/pricing) Improved the spacing of the CTA section on all pricing pages"]}]},{version:"v12.1.0",releaseDate:"April 26, 2021",changes:[{type:"Added",list:["(apps/academy) New and improvement version of Academy app","(icons) Material Solid icons"]},{type:"Changed",list:["(dependencies) Updated Angular, Angular Material and various other packages","(icons) Updated Heroicons","(icons) Updated Material Icons","(apps/file-manager) Better grid for File Manager app","(layouts/classy) Removed footer for better 'classy' look"]},{type:"Fixed",list:["(apps/contacts) Clicking on the checkbox on Tag select panel acts weird"]}]},{version:"v12.0.0",releaseDate:"April 16, 2021",changes:[{type:"Added",list:["This is the new major version of the Fuse and it's completely different from previous versions with no upgrade path","This version requires a clean installation"]},{type:"Changed",list:["Improved the look and feel","Re-wrote the entire template from scratch using Tailwind","Removed 99% of the SCSS styles in favor of Tailwind","Integrated Angular Material theming with Tailwind"]}]}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["changelog"]],decls:12,vars:1,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex-auto","p-6","sm:p-10"],[1,"prose","prose-sm","max-w-5xl"],[4,"ngFor","ngForOf"],[1,"mb-12","p-8","rounded-2xl","shadow","bg-card"],[1,"my-0"],[1,"font-semibold","text-md","text-secondary"],[1,"mt-6"],[1,"mt-8"],[1,"inline-flex","bg-default","rounded","px-3","py-1","text-secondary","font-bold"]],template:function(e,t){1&e&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"div",3),i.TgZ(4,"a",4),i._uU(5,"Documentation"),i.qZA(),i.qZA(),i.TgZ(6,"div",5),i.TgZ(7,"h2",6),i._uU(8," Changelog "),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(9,"div",7),i.TgZ(10,"div",8),i.YNc(11,d,9,3,"ng-container",9),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(11),i.Q6J("ngForOf",t.changelog))},directives:[s.sg],styles:[""],changeDetection:0}),e})()}];let c=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[o.Bz.forChild(p),n.m]]}),e})()}}]);