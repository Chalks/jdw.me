const e=r=>{if(r.data&&r.data.errors){const a=new Set(r.data.errors.map(({msg:t})=>t));return Array.from(a)}return r.data&&r.data.message?[r.data.message]:["Unknown error, try again"]};export{e as g};
