import{a as S,r as p,y as v,o as a,b as i,F as x,D as y,c as k,w as I,e as u,u as s,I as d,f as r,t as h,H as B,B as T,k as P,z as b,A as w}from"./entry.6130ca20.js";const C=t=>(b("data-v-8d7ce8f6"),t=t(),w(),t),L={class:"flex space-x-4 items-center"},N={class:"ml-2 my-0 p-0"},j=C(()=>r("p",{class:"ml-2 my-0 p-0"}," Logout ",-1)),E={__name:"Toolbar",props:{isProjects:{type:Boolean,default:!1},isSettings:{type:Boolean,default:!1}},setup(t){const c=t,n="Projects",l="Settings",_=p([{page:n,order:1,name:"icon-park-outline:more-app"},{page:l,order:2,name:"material-symbols:settings-account-box"}]),o=p("");c.isProjects&&(o.value=n),c.isSettings&&(o.value=l);const m=v(),g=async()=>{await m.logout(),T("/provider")};return(z,D)=>{const f=P;return a(),i("div",L,[(a(!0),i(x,null,y(s(_),e=>(a(),k(f,{key:e.page,to:`/provider/${e.page.toLowerCase()}`,title:e.page,class:B({flex:!0,"items-center":!0,active:e.page===s(o)})},{default:I(()=>[u(s(d),{icon:e.name},null,8,["icon"]),r("p",N,h(e.page),1)]),_:2},1032,["to","title","class"]))),128)),r("a",{title:"logout",class:"cursor-pointer flex items-center",onClick:g},[u(s(d),{icon:"solar:logout-outline"}),j])])}}},V=S(E,[["__scopeId","data-v-8d7ce8f6"]]);export{V as T};
