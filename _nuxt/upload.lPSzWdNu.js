import{f as o,o as a,c as p,a as e,e as n}from"./entry.m1xfgGPX.js";const l="a0f4891e-8ef4-4779-990f-f9d170130b2d",i={computed:{action(){return`https://api.formcake.com/api/form/${l}/submission`}}},s={class:"themer"},d=e("h1",null,"This is for local development only",-1),r=["action"],c=n('<input type="text" name="filename" placeholder="Filename" value=""><input type="text" name="name" placeholder="Theme Name" value=""><input type="text" name="author" placeholder="Author Name" value=""><select name="type"><option value="tiles">tiles</option><option value="splats">splats</option><option value="gravitywell">gravity well</option><option value="speedpad">speedpad</option><option value="speedpadred">red speedpad</option><option value="speedpadblue">blue speedpad</option><option value="portal">portal</option><option value="portalred">red portal</option><option value="portalblue">blue portal</option></select><input type="submit" value="Submit">',5),u=[c];function m(_,f,h,v,y,t){return a(),p("div",s,[d,e("form",{id:"my-form-id",method:"post",action:t.action},u,8,r)])}const x=o(i,[["render",m]]);export{x as default};