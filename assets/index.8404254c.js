import{r as f,o as i,c as d,a as o,t as p,F as _,p as m,b as g,d as a,e as h,f as v}from"./vendor.e40020ca.js";const y=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};y();var b="/assets/logo.03d6d6da.png";var V=(r,n)=>{const l=r.__vccOpts||r;for(const[s,e]of n)l[s]=e;return l};const u=r=>(m("data-v-ad37acc6"),r=r(),g(),r),k=u(()=>o("p",null,[a(" Recommended IDE setup: "),o("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),a(" + "),o("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),S=u(()=>o("p",null,[o("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Documentation "),a(" | "),o("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Documentation")],-1)),x=u(()=>o("p",null,[a(" Edit "),o("code",null,"components/HelloWorld.vue"),a(" to test hot module replacement. ")],-1)),I={props:{msg:String},setup(r){const n=f(0);return(l,s)=>(i(),d(_,null,[o("h1",null,p(r.msg),1),k,S,o("button",{type:"button",onClick:s[0]||(s[0]=e=>n.value++)},"count is: "+p(n.value),1),x],64))}};var N=V(I,[["__scopeId","data-v-ad37acc6"]]);const L=o("img",{alt:"Vue logo",src:b},null,-1),O={setup(r){return(n,l)=>(i(),d(_,null,[L,h(N,{msg:"Hello Vue333 + Vite"})],64))}};v(O).mount("#app");
