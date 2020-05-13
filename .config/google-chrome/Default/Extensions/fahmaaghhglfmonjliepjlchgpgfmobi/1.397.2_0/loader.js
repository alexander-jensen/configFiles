/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var tya=this||self,tyb=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},tyc=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var tyd=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};var tye=function(a,b){this.w=a;this.H=b;this.constructor.s||(this.constructor.s={});this.constructor.s[this.toString()]=this};tye.prototype.toString=function(){this.u||(this.u=this.w.v+":"+this.H);return this.u};var tyf=function(a,b){tye.call(this,a,b)};tyc(tyf,tye);var tyh=function(a){tyg.hasOwnProperty(a);this.v=a;tyg[a]=this},tyg;tyg={};new tyh("lib");try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var tyi=new tyh("fva");new tyf(tyi,1);var tyl=function(){this.g={b:"a",o:null,i:tyj};this.j={b:"a",o:null,i:tyk}},tym=function(a){if(!a)throw Error();},tyj=function(a,b){return a+"_"+b+".css"},tyk=function(a,b){return a+"_"+b+".js"};tyl.prototype.load=function(){if(tyn(this.g)){var a=this.g.i(tyo(),typ()),b=document.createElement("link");b.rel="stylesheet";b.type="text/css";b.href=a;document.head.appendChild(b)}tyn(this.j)&&(a=this.j.i(tyo(),typ()),b=document.createElement("script"),b.src=a,document.body.appendChild(b))};
var tyq=/(.+)\.html/,tyo=function(){var a=window.location.pathname.substr(1);a="_generated_background_page.html"==a?"background":a.match(tyq)[1];var b=/^[\s\xa0]*$/;tym("string"==typeof a&&!b.test(a));return a},typ=function(){return"ltr"==chrome.i18n.getMessage("@@bidi_dir")?"ltr":"rtl"},tyn=function(a){if("a"==a.b)return!0;if("n"==a.b)return!1;tym("s"==a.b);tym("array"==tyb(a.o));var b=tyo();return 0<=a.o.indexOf(b)};-1!=tyd(["miniplayer.html","settings.html"],tya.location.pathname.substr(1))&&("rtl"==("rtl"==chrome.i18n.getMessage("@@bidi_dir")?"rtl":"ltr")?tya.document.documentElement.setAttribute("dir","rtl"):tya.document.documentElement.setAttribute("dir","ltr"));var ty=new tyl;ty.g.i=function(a,b){return"ltr"==b?"css_compiled.css":"css_compiled_rtl.css"};ty.g.b="s";ty.g.o=["miniplayer","settings"];ty.j.i=function(){return"main.js"};ty.j.b="s";ty.j.o=["miniplayer","settings"];ty.load();