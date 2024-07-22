import{r as o,j as f,o as p,c as d,i,v as l,u as m,a as t,k as u,b as k,e as y}from"./entry.m1xfgGPX.js";import{u as w,s as b}from"./seo.c2zjX7R6.js";const g=t("h3",null,"Contact Me",-1),v=t("input",{type:"hidden",name:"honey"},null,-1),x=t("button",{class:"g-recaptcha submit","data-sitekey":"6Lf6IyUaAAAAAPTTe__sC4052VzvGcwFlBHeajA0","data-callback":"recaptchaJank","data-action":"submit"}," Submit ",-1),A={__name:"ContactForm",setup(h){w({script:[{src:"https://www.google.com/recaptcha/api.js"}]});const s=o(null),r=o(null),e=o(""),n=o(""),_=()=>{s.value.submit()};return f(()=>{window.recaptchaJank=_}),(S,a)=>(p(),d("form",{ref_key:"contactForm",ref:s,class:"prose mx-auto",action:"https://api.formcake.com/api/form/1b7696ec-d768-4b77-ad1b-6b506428b336/submission",method:"post"},[g,v,i(t("input",{ref_key:"emailField",ref:r,"onUpdate:modelValue":a[0]||(a[0]=c=>u(e)?e.value=c:null),type:"text",name:"email",placeholder:"Your Email Address"},null,512),[[l,m(e)]]),i(t("input",{"onUpdate:modelValue":a[1]||(a[1]=c=>u(n)?n.value=c:null),name:"message",placeholder:"Message"},null,512),[[l,m(n)]]),x],512))}},F=A,I={class:"prose mx-auto my-12 px-4 prose-red"},j=y('<h1>Hi, I&#39;m Jonathan Walters</h1><p> I like making things. I&#39;m always looking for like-minded people so please reach out to me if you like making things too. </p><p> Professionally I&#39;m building the frontend for <a href="https://parrot.ai?utm_source=jdw.me">Parrot AI</a>. You can check out my work there. It has been very neat to see how video content embedded in documents changes the way you work on a team. </p><p> Personally I always have a few things cooking. You can check out some of my projects below, I always appreciate the eyes! </p><ul><li><a href="https://simplejwt.com?utm_source=jdw.me">SimpleJWT</a> - An authentication/user service that is currently in closed beta </li><li><a href="https://Formcake.com?utm_source=jdw.me">Formcake</a> - A backend service for any HTML form. It&#39;s fast and easy to use </li><li><a href="https://github.com/Chalks/chalks.github.io">jdw.me source</a> - Written with Vue, NuxtJS, TailwindCSS and hosted on Netlify </li></ul><hr>',6),T={__name:"index",setup(h){return b(),(s,r)=>{const e=F;return p(),d("div",I,[j,k(e,{ref:"contactForm"},null,512)])}}};export{T as default};