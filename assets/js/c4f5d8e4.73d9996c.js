"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[195],{7627:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var r=a(7294),c=a(6010),n=a(2434),l=a(9960),o=a(2263),i="heroBanner_qdFl",s="buttons_AeoN",p=a(7382),h="features_t9lD",m="container_a30C";function u(t,e,a,r){function c(t,e,a,r,c){for(void 0===r&&(r=null),void 0===c&&(c=null);t.includes(e);)t=(t=t.replace(e,r?"<"+a+"><"+r+">":"<"+a+">")).replace(c||e,r?"</"+r+"></"+a+">":"</"+a+">");return t}void 0===e&&(e="\n"),void 0===a&&(a="\n"),void 0===r&&(r="\t");var n=t.split(a),l=[],o=new RegExp("^"+r+"+","g");return n.forEach((function(t,e){var a=!1,i=(t.match(o)||[[]])[0].length,s=n[e-1]?(n[e-1].match(o)||[[]])[0].length:null,p=n[e+1]?(n[e+1].match(o)||[[]])[0].length:null;i>=0&&(t.startsWith(r.repeat(i)+t.match(/\*|\+|-/))||t.startsWith("> "+r.repeat(i)+t.match(/\*|\+|-/)))&&(a=!1,(t.startsWith(r.repeat(i)+t.match(/\*|\+|-/)+" ")||t.startsWith("> "+r.repeat(i)+t.match(/\*|\+|-/)+" "))&&(t=null!=s&&(n[e-1].startsWith(r.repeat(s)+n[e-1].match(/\*|\+|-/)+" ")||n[e-1].startsWith("> "+r.repeat(s)+n[e-1].match(/\*|\+|-/)+" "))?s>i?t.replace(r.repeat(i)+t.match(/\*|\+|-/)+" ","</ul>".repeat(s-i)+"<li>").concat("</li>"):s<i?t.replace(r.repeat(i)+t.match(/\*|\+|-/)+" ","<ul>".repeat(i-s)+"<li>").concat("</li>"):t.replace(r.repeat(i)+t.match(/\*|\+|-/)+" ","<li>").concat("</li>"):t.replace(r.repeat(i)+t.match(/\*|\+|-/)+" ","<ul><li>").concat("</li>"),null!=p&&(n[e+1].startsWith(r.repeat(p)+n[e+1].match(/\*|\+|-/))||n[e+1].startsWith("> "+r.repeat(p)+n[e+1].match(/\*|\+|-/)))||(t=t.concat("</ul>".repeat(i+1))))),i>=0&&(t.startsWith(r.repeat(i)+t.match(/\d/))||t.startsWith("> "+r.repeat(i)+t.match(/\d/)))&&(a=!1,(t.startsWith(r.repeat(i)+(t.match(/\d+/)||[[]])[0]+". ")||t.startsWith("> "+r.repeat(i)+(t.match(/\d+/)||[[]])[0]+". "))&&(t=null!=s&&(n[e-1].startsWith(r.repeat(s)+n[e-1].match(/\d+/)+". ")||n[e-1].startsWith("> "+r.repeat(s)+n[e-1].match(/\d+/)+". "))?s>i?t.replace(r.repeat(i)+(t.match(/\d+/)||[[]])[0]+". ","</ol>".repeat(s-i)+"<li>").concat("</li>"):s<i?t.replace(r.repeat(i)+(t.match(/\d+/)||[[]])[0]+". ","<ol>".repeat(i-s)+"<li>").concat("</li>"):t.replace(r.repeat(i)+(t.match(/\d+/)||[[]])[0]+". ","<li>").concat("</li>"):t.replace(r.repeat(i)+(t.match(/\d+/)||[[]])[0]+". ","<ol><li>").concat("</li>"),null!=p&&(n[e+1].startsWith(r.repeat(p)+n[e+1].match(/\d/))||n[e+1].startsWith("> "+r.repeat(p)+n[e+1].match(/\d/)))||(t=t.concat("</ol>".repeat(i+1)))),t!==r.repeat(i)+t.match(/\d/)&&t!=="> "+r.repeat(i)+t.match(/\d/)||(t=t.replace(r.repeat(i)+t.match(/\d/),"")),t!==r.repeat(i)+(t.match(/\d+/)||[[]])[0]+"."&&t!=="> "+r.repeat(i)+(t.match(/\d+/)||[[]])[0]+"."||(t=t.replace(r.repeat(i)+(t.match(/\d+/)||[[]])[0]+".",""))),t=t.trim();for(var h=6;h>0;h--){var m="#".repeat(h);if(t.startsWith(m)||t.startsWith("> "+m)){if(t.startsWith(m+" ")||t.startsWith("> "+m+" ")){t=(t=t.replace(m+" ","<h"+h+">")).concat("</h"+h+">"),a=!1;break}t!==m&&t!=="> "+m||(t=t.replace(m,""))}a=!0}var u=">",d=">>";if(t.startsWith(u)){if(a=!1,t.startsWith("> ")){t=t.replace("> ","<blockquote><p>");for(var f=2,g=1,v=!0;n[e+f]&&n[e+g].trim()===u&&n[e+f].startsWith("> ");)v?(t=t.concat(n[e+f].replace(u,"</p><p>")),v=!1):t=t.concat(n[e+f].replace(u,"<p>")),t=t.concat("</p>"),n[e+f]="",n[e+g]="",g+=2,f+=2;for(;n[e+f]&&n[e+g].trim()===u&&n[e+f].startsWith(">> ");)v?(t=t.concat(n[e+f].replace(d,"</p><blockquote><p>")),v=!1):t=t.concat(n[e+f].replace(d,"<blockquote><p>")),t=t.concat("</p></blockquote>"),n[e+f]="",n[e+g]="",g+=2,f+=2;t=v?t.concat("</p></blockquote>"):t.concat("</blockquote>")}t===u&&(t=t.replace(u,"")),t===d&&(t=t.replace(d,""))}for([["***","strong","em"],["___","strong","em"],["__*","strong","em","*__"],["**_","strong","em","_**"],["__","strong"],["**","strong"],["_","em"],["*","em"]].forEach((function(e){t=c.apply(void 0,[t].concat(e))})),a&&t&&(t="<p>"+t+"</p>");t.includes("  ");)t=t.replace("  ","<br/>");t&&l.push(t)})),l.join(e)}function d(){var t=(0,r.useState)(""),e=(t[0],t[1]),a=r.useState("# Headding\n## Sub Headding\n"),c=a[0],n=a[1];return r.createElement("section",{className:h},r.createElement("div",{className:"container"},r.createElement("div",{className:m},r.createElement(p.Z,{value:c,language:"markdown",placeholder:"Please enter JS code.",onChange:function(t){return function(t){e(t.target.value),n(t.target.value)}(t)},padding:12,style:{fontSize:12,backgroundColor:"#f5f5f5",fontFamily:"ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"}}),r.createElement("div",{dangerouslySetInnerHTML:{__html:u(c,"\n","\n","==")}}))))}function f(){var t=(0,o.Z)().siteConfig;return r.createElement("header",{className:(0,c.Z)("hero hero--primary",i)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},t.title),r.createElement("p",{className:"hero__subtitle"},t.tagline),r.createElement("div",{className:s},r.createElement(l.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Get started"))))}function g(){var t=(0,o.Z)().siteConfig;return r.createElement(n.Z,{title:"Hello from "+t.title,description:"Description will go into a meta tag in <head />"},r.createElement(f,null),r.createElement("main",null,r.createElement(d,null)))}}}]);