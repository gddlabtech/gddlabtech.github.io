"use strict";(self.webpackChunkgdd_tech_2=self.webpackChunkgdd_tech_2||[]).push([[7012],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9741:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=["components"],i={slug:"UTCFIX",title:"Fix UTC",author:"Michael Barker",author_title:"Mac Lab Technician @ UFV",author_url:"https://www.ufv.ca/graphic-design/",tags:["tech"]},c=void 0,s={permalink:"/blog/UTCFIX",editUrl:"https://github.com/gddlabtech/gddlabtech.github.io/edit/master/website/blog/blog/2022-1-18-UTC Fix.md",source:"@site/blog/2022-1-18-UTC Fix.md",title:"Fix UTC",description:"How to fix fonts in Universal Type Client",date:"2022-01-18T00:00:00.000Z",formattedDate:"January 18, 2022",tags:[{label:"tech",permalink:"/blog/tags/tech"}],readingTime:.785,truncated:!1,authors:[{name:"Michael Barker",title:"Mac Lab Technician @ UFV",url:"https://www.ufv.ca/graphic-design/"}],nextItem:{title:"Back to Campus",permalink:"/blog/back"}},u={authorsImageUrls:[void 0]},p=[],f={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"How to fix fonts in Universal Type Client"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Upgrade MacOS to Monterey")),(0,o.kt)("p",null,"Click the apple symbol \u2013> System preferences \u2013> Software Update \u2013> Install MacOS Monterey"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Uninstall UTC")),(0,o.kt)("p",null,"Visit and download the UTC uninstaller: ",(0,o.kt)("a",{parentName:"p",href:"https://cs.extensis.com/fm_uninstall/utc/uninstall-utc.zip"},"https://cs.extensis.com/fm_uninstall/utc/uninstall-utc.zip"),"\nRun the uninstaller using your Mac\u2019s Admin account. Make sure UTC isn\u2019t running."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Delete Associated UTC folders and files:")),(0,o.kt)("p",null,"\u2022\tLibrary/Extensis\n\u2022\t/Library/Preferences/com.extensis\u2026"),(0,o.kt)("p",null,"To navigate to the above folders, left-click your desktop, and click on Go at the top menu"),(0,o.kt)("p",null,"Click Library\nIf you don\u2019t see Library - Hold down the alt (option key) to see the Library folder."),(0,o.kt)("p",null,"Find and delete the folder named Extensis."),(0,o.kt)("p",null,"(While still in the Library folder)\nFind and open Preferences and delete any files that start with com.extensis."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Download and install UTC version 7.0.12:")),(0,o.kt)("p",null,"Navigate to: ",(0,o.kt)("a",{parentName:"p",href:"https://www.extensis.com/support/universal-type-server-7/"},"https://www.extensis.com/support/universal-type-server-7/"),"\nFind and download UTC Version 7.0.12\nInstall UTC and log in"),(0,o.kt)("p",null,"You should now be able to activate the fonts that were previously not working."))}d.isMDXComponent=!0}}]);