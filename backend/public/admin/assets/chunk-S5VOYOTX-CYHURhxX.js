import{r as v}from"./chunk-7B63V4WX-BqOQ15wg.js";import{aC as n,s as u,q as a,aR as r,d7 as y}from"./index-HrqC_Gjd.js";var m=(e,t)=>n({mutationFn:i=>u.admin.orderEdit.initiateRequest(i),onSuccess:(i,s,d)=>{a.invalidateQueries({queryKey:r.details()}),a.invalidateQueries({queryKey:r.preview(e)})},...t}),c=(e,t)=>n({mutationFn:()=>u.admin.orderEdit.request(e),onSuccess:(i,s,d)=>{a.invalidateQueries({queryKey:r.details()}),a.invalidateQueries({queryKey:r.preview(e)}),a.invalidateQueries({queryKey:r.changes(e)}),a.invalidateQueries({queryKey:r.lineItems(e)})},...t}),q=(e,t)=>n({mutationFn:()=>u.admin.orderEdit.confirm(e),onSuccess:(i,s,d)=>{a.invalidateQueries({queryKey:r.details()}),a.invalidateQueries({queryKey:r.preview(e)}),a.invalidateQueries({queryKey:r.changes(e)}),a.invalidateQueries({queryKey:r.lineItems(e)}),a.invalidateQueries({queryKey:v.lists()}),a.invalidateQueries({queryKey:y.lists()}),a.invalidateQueries({queryKey:y.details()})},...t}),K=(e,t)=>n({mutationFn:()=>u.admin.orderEdit.cancelRequest(e),onSuccess:(i,s,d)=>{a.invalidateQueries({queryKey:r.details()}),a.invalidateQueries({queryKey:r.preview(e)}),a.invalidateQueries({queryKey:r.changes(e)}),a.invalidateQueries({queryKey:r.lineItems(id)})},...t}),Q=(e,t)=>n({mutationFn:i=>u.admin.orderEdit.addItems(e,i),onSuccess:(i,s,d)=>{a.invalidateQueries({queryKey:r.preview(e)})},...t}),E=(e,t)=>n({mutationFn:({itemId:i,...s})=>u.admin.orderEdit.updateOriginalItem(e,i,s),onSuccess:(i,s,d)=>{a.invalidateQueries({queryKey:r.preview(e)})},...t}),p=(e,t)=>n({mutationFn:({actionId:i,...s})=>u.admin.orderEdit.updateAddedItem(e,i,s),onSuccess:(i,s,d)=>{a.invalidateQueries({queryKey:r.preview(e)})},...t}),I=(e,t)=>n({mutationFn:i=>u.admin.orderEdit.removeAddedItem(e,i),onSuccess:(i,s,d)=>{a.invalidateQueries({queryKey:r.preview(e)})},...t});export{q as a,m as b,c,Q as d,p as e,E as f,I as g,K as u};