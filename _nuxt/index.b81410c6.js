import{a as W,r as n,o as c,b as d,m as f,v as g,u as p,f as s,q as v,s as P,x as V,y as x,z as I,A as J,p as L,B as S,C as N,F as $,D as k,e as E,l as F,t as T}from"./entry.6130ca20.js";import{g as j}from"./getMessagesFromError.bead1578.js";const w=m=>(I("data-v-f83e9c27"),m=m(),J(),m),R=["onSubmit"],U=w(()=>s("h3",null,"Login",-1)),A=w(()=>s("label",{for:"login-email"},"Email",-1)),B=w(()=>s("label",{for:"login-password"},"Password",-1)),M=w(()=>s("input",{type:"submit",value:"Login",class:"login-submit"},null,-1)),D={__name:"LoginForm",emits:["success","error"],setup(m,{expose:_,emit:i}){const a=n(""),t=n(""),l=n(null),u=()=>l.value.focus();_({focus:u});const h=async()=>{try{const r=`${V().public.jwtApi}/auth/login`,{token:e,user:o}=await $fetch(r,{method:"post",body:JSON.stringify({email:a.value,password:t.value})});x().setUserWithToken({user:o,token:e}),i("success",{token:e,user:o})}catch(r){u(),i("error",r)}};return(r,e)=>(c(),d("form",{class:"prose mx-auto",action:"#",method:"post",onSubmit:P(h,["prevent"])},[U,A,f(s("input",{id:"login-email",ref_key:"emailField",ref:l,"onUpdate:modelValue":e[0]||(e[0]=o=>v(a)?a.value=o:null),type:"text",name:"email",placeholder:"Email"},null,512),[[g,p(a)]]),B,f(s("input",{id:"login-password","onUpdate:modelValue":e[1]||(e[1]=o=>v(t)?t.value=o:null),type:"password",name:"password",placeholder:"Password"},null,512),[[g,p(t)]]),M],40,R))}},O=W(D,[["__scopeId","data-v-f83e9c27"]]),z=["onSubmit"],C=s("h3",null,"Register",-1),q=s("label",{for:"register-email"},"Email",-1),Y=s("label",{for:"register-password"},"Password",-1),G=s("input",{type:"submit",value:"Register"},null,-1),H={__name:"RegisterForm",emits:["success","error"],setup(m,{expose:_,emit:i}){const a=n(""),t=n(""),l=n(null),u=()=>l.value.focus();_({focus:u});const h=async()=>{try{const r=`${V().public.jwtApi}/auth/register`,{token:e,user:o}=await $fetch(r,{method:"post",body:JSON.stringify({email:a.value,password:t.value})});x().setUserWithToken({user:o,token:e}),i("success",{token:e,user:o})}catch(r){u(),i("error",r)}};return(r,e)=>(c(),d("form",{class:"prose mx-auto",action:"#",method:"post",onSubmit:P(h,["prevent"])},[C,q,f(s("input",{id:"register-email",ref_key:"emailField",ref:l,"onUpdate:modelValue":e[0]||(e[0]=o=>v(a)?a.value=o:null),type:"text",name:"email",placeholder:"Email"},null,512),[[g,p(a)]]),Y,f(s("input",{id:"register-password","onUpdate:modelValue":e[1]||(e[1]=o=>v(t)?t.value=o:null),type:"password",name:"password",placeholder:"Password"},null,512),[[g,p(t)]]),G],40,z))}},K={class:"prose mx-auto my-12 prose-blue px-4"},Q=s("h1",null,"JWT Provider",-1),X=s("p",null,[F(" This is a simple "),s("a",{href:"https://en.wikipedia.org/wiki/JSON_Web_Token",target:"_blank"},"JWT"),F(" provider I wrote for myself. With an account you can have projects that support a number of end users as specified by your account plan. The API exposes just a few auth endpoints, including login, logout, register, and token invalidation. You can then use those JWTs on any static site and get access to a very basic json store for each end user. ")],-1),Z={class:"flex flex-wrap"},ee={class:"w-full pr-0 lg:w-1/2 lg:pr-2"},se={class:"w-full pl-0 mt-8 lg:w-1/2 lg:pl-2 lg:mt-0"},re={__name:"index",setup(m){const _=n(!1),i=n(null),a=x();L(()=>{a.authorized?S("/provider/projects"):(_.value=!0,i.value.focus())});const t=n([]),l=n([]),u=e=>{l.value=j(e),console.error(e)},h=e=>{t.value=j(e),console.error(e)},r=()=>{S("/provider/projects"),t.value=[],l.value=[]};return(e,o)=>f((c(),d("div",K,[Q,X,s("div",Z,[s("div",ee,[(c(!0),d($,null,k(p(t),(y,b)=>(c(),d("p",{key:`${b}-login-error`,class:"text-red-600"},T(y),1))),128)),E(O,{ref_key:"loginForm",ref:i,onError:h,onSuccess:r},null,512)]),s("div",se,[(c(!0),d($,null,k(p(l),(y,b)=>(c(),d("p",{key:`${b}-register-error`,class:"text-red-600"},T(y),1))),128)),E(H,{onError:u,onSuccess:r})])])],512)),[[N,p(_)]])}};export{re as default};
