import{I as x}from"./chunk-MRW3W5RG-CSZHXN_t.js";import{q as u,S as f,d as j,e2 as y,a as p,j as e,V as _,s as h,b as g,aW as I,C as S,H as b,A as w}from"./index-HrqC_Gjd.js";import{c as q,r as k}from"./chunk-7B63V4WX-BqOQ15wg.js";import{S as o}from"./chunk-ULQT3HE4-S8VpexHp.js";import{T as l}from"./chunk-UR2E444G-Dxg_E1qB.js";import"./chunk-3IW4HYUP-B0hjLMKq.js";import{P}from"./pencil-square-m42K-ws3.js";import"./Trans-EQ5E-fso.js";import"./x-mark-mini-Q_ZRZRmQ.js";var A=i=>({queryKey:k.detail(i),queryFn:async()=>h.admin.reservation.retrieve(i)}),G=async({params:i})=>{const n=i.id,t=A(n);return u.getQueryData(t.queryKey)??await u.fetchQuery(t)},C=({reservation:i})=>{const{t:n}=g(),{inventory_item:t,isPending:d}=y(i.inventory_item_id),{stock_location:a,isPending:c}=I(i.location_id);if(d||!t||c||!a)return e.jsx("div",{children:"Loading..."});const r=t.location_levels.find(s=>s.location_id===i.location_id);return e.jsxs(S,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(b,{children:n("inventory.reservation.header",{itemName:t.title??t.sku})}),e.jsx(w,{groups:[{actions:[{icon:e.jsx(P,{}),label:n("actions.edit"),to:"edit"}]}]})]}),e.jsx(o,{title:n("inventory.reservation.lineItemId"),value:i.line_item_id}),e.jsx(o,{title:n("inventory.reservation.description"),value:i.description}),e.jsx(o,{title:n("inventory.reservation.location"),value:a==null?void 0:a.name}),e.jsx(o,{title:n("inventory.reservation.inStockAtLocation"),value:r==null?void 0:r.stocked_quantity}),e.jsx(o,{title:n("inventory.reservation.availableAtLocation"),value:r==null?void 0:r.available_quantity}),e.jsx(o,{title:n("inventory.reservation.reservedAtLocation"),value:r==null?void 0:r.reserved_quantity})]})},H=()=>{var v,m;const{id:i}=f(),n=j(),{reservation:t,isLoading:d,isError:a,error:c}=q(i,void 0,{initialData:n}),{inventory_item:r}=y((v=t==null?void 0:t.inventory_item)==null?void 0:v.id,void 0,{enabled:!!((m=t==null?void 0:t.inventory_item)!=null&&m.id)}),{getWidgets:s}=p();if(d||!t)return e.jsx(_,{mainSections:1,sidebarSections:1,showJSON:!0,showMetadata:!0});if(a)throw c;return e.jsxs(l,{widgets:{before:s("reservation.details.before"),after:s("reservation.details.after"),sideBefore:s("reservation.details.side.before"),sideAfter:s("reservation.details.side.after")},data:t,showJSON:!0,showMetadata:!0,children:[e.jsx(l.Main,{children:e.jsx(C,{reservation:t})}),e.jsx(l.Sidebar,{children:r&&e.jsx(x,{inventoryItem:r})})]})};export{H as Component,G as loader};