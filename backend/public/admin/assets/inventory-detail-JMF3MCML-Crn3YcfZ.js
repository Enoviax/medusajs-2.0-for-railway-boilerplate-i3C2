import{I as H}from"./chunk-MRW3W5RG-CSZHXN_t.js";import{S as J,d as $,e2 as F,a as B,j as e,V as G,q as k,b as l,C as g,H as b,A as q,B as L,L as I,b0 as K,am as V,d7 as W,s as Y,e5 as Z,b9 as U,r as T,e6 as X,Y as ee,t as P}from"./index-HrqC_Gjd.js";import{T as m,a as h}from"./chunk-OI7BBNYW-CqFrQu54.js";import{u as te,b as se}from"./chunk-7B63V4WX-BqOQ15wg.js";import{g as ie}from"./chunk-OIAPXGI2-D88XhlLs.js";import{S as d}from"./chunk-ULQT3HE4-S8VpexHp.js";import{T as N}from"./chunk-UR2E444G-Dxg_E1qB.js";import"./chunk-3IW4HYUP-B0hjLMKq.js";import{P as c}from"./chunk-P3UUX2T6-CoxaAzXV.js";import{u as D,D as z}from"./chunk-OMP35ZTD-BzF4W0Sz.js";import"./lodash-DnQioFv5.js";import{u as A}from"./chunk-C76H5USB-CPsw4htd.js";import"./chunk-2XYHZG6S-TOWhaigI.js";import"./chunk-E3YGDIJC-Cs2OmRxi.js";import{f as C}from"./format-G2WeL2O3.js";import{P as M}from"./pencil-square-m42K-ws3.js";import{T as O}from"./trash-Cj0dULeA.js";import{u as R}from"./use-prompt-B2nwlCmB.js";import{c as E}from"./index-DZRnaetd.js";import"./Trans-EQ5E-fso.js";import"./x-mark-mini-Q_ZRZRmQ.js";import"./chunk-YEDAFXMB-B43R7CK6.js";import"./chunk-AOFGTNG6-Dh0uMGDi.js";import"./chunk-WX2SMNCD-CTOHXE5S.js";import"./plus-mini-JAMyv6UA.js";import"./command-bar-CQ2ojk6i.js";import"./index-Bm0_N0_B.js";import"./chunk-QAF7PVQE-Dz18IPLi.js";import"./date-picker-B0rw1wqZ.js";import"./popover-sllarloD.js";import"./triangle-left-mini-BifPdMwa.js";import"./prompt-DzgdWoNF.js";var ae=({inventoryItem:i})=>{const{t}=l();return e.jsxs(g,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(b,{level:"h2",children:t("products.attributes")}),e.jsx(q,{groups:[{actions:[{label:t("actions.edit"),to:"attributes",icon:e.jsx(M,{})}]}]})]}),e.jsx(d,{title:t("fields.height"),value:i.height}),e.jsx(d,{title:t("fields.width"),value:i.width}),e.jsx(d,{title:t("fields.length"),value:i.length}),e.jsx(d,{title:t("fields.weight"),value:i.weight}),e.jsx(d,{title:t("fields.midCode"),value:i.mid_code}),e.jsx(d,{title:t("fields.hsCode"),value:i.hs_code}),e.jsx(d,{title:t("fields.countryOfOrigin"),value:ie(i.origin_country)})]})},re=({pageSize:i=20,prefix:t})=>{const s=A(["id","location_id","stocked_quantity","reserved_quantity","incoming_quantity","available_quantity","*stock_locations"],t),{reserved_quantity:a,stocked_quantity:r,available_quantity:n,...o}=s;return{searchParams:{limit:i,reserved_quantity:a?JSON.parse(a):void 0,stocked_quantity:r?JSON.parse(r):void 0,available_quantity:n?JSON.parse(n):void 0,...o},raw:s}},ne=({level:i})=>{const{t}=l(),s=R(),{mutateAsync:a}=X(i.inventory_item_id,i.location_id),r=async()=>{await s({title:t("general.areYouSure"),description:t("inventory.deleteWarning"),confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await a()};return e.jsx(q,{groups:[{actions:[{icon:e.jsx(M,{}),label:t("actions.edit"),to:`locations/${i.location_id}`}]},{actions:[{icon:e.jsx(O,{}),label:t("actions.delete"),onClick:r,disabled:i.reserved_quantity>0||i.stocked_quantity>0}]}]})},y=E(),oe=()=>{const{t:i}=l();return T.useMemo(()=>[y.accessor("stock_locations.0.name",{header:i("fields.location"),cell:({getValue:t})=>{const s=t();return s?e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:s.toString()})}):e.jsx(c,{})}}),y.accessor("reserved_quantity",{header:i("inventory.reserved"),cell:({getValue:t})=>{const s=t();return Number.isNaN(s)?e.jsx(c,{}):e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:s})})}}),y.accessor("stocked_quantity",{header:i("fields.inStock"),cell:({getValue:t})=>{const s=t();return Number.isNaN(s)?e.jsx(c,{}):e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:s})})}}),y.accessor("available_quantity",{header:i("inventory.available"),cell:({getValue:t})=>{const s=t();return Number.isNaN(s)?e.jsx(c,{}):e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:s})})}}),y.display({id:"actions",cell:({row:t})=>e.jsx(ne,{level:t.original})})],[i])},w=20,ce=({inventory_item_id:i})=>{const{searchParams:t,raw:s}=re({pageSize:w}),{inventory_levels:a,count:r,isPending:n,isError:o,error:f}=Z(i,{...t,fields:"*stock_locations"}),x=oe(),{table:_}=D({data:a??[],columns:x,count:r,enablePagination:!0,getRowId:j=>j.id,pageSize:w});if(o)throw f;return e.jsx(z,{table:_,columns:x,pageSize:w,count:r,isLoading:n,pagination:!0,queryObject:s})},le=({inventoryItem:i})=>{const{t}=l();return e.jsxs(g,{className:"p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(b,{children:t("inventory.locationLevels")}),e.jsx(L,{size:"small",variant:"secondary",asChild:!0,children:e.jsx(I,{to:"locations",children:t("inventory.manageLocations")})})]}),e.jsx(ce,{inventory_item_id:i.id})]})},de=({date:i})=>{if(!i)return e.jsx(c,{});const t=new Date(i);t.setMinutes(t.getMinutes()-t.getTimezoneOffset());const a=Intl.DateTimeFormat().resolvedOptions().hour12?"dd MMM yyyy hh:MM a":"dd MMM yyyy HH:MM";return e.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:e.jsx(ee,{className:"z-10",content:e.jsx("span",{className:"text-pretty",children:`${C(t,a)}`}),children:e.jsx("span",{className:"truncate",children:C(t,"dd MMM yyyy")})})})},ue=({reservation:i})=>{const{t}=l(),s=R(),{mutateAsync:a}=se(i.id),r=async()=>{await s({title:t("general.areYouSure"),description:t("inventory.deleteWarning"),confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await a(void 0,{onSuccess:()=>{P.success(t("inventory.reservation.deleteSuccessToast"))},onError:o=>{P.error(o.message)}})};return e.jsx(q,{groups:[{actions:[{icon:e.jsx(M,{}),label:t("actions.edit"),to:`/reservations/${i.id}/edit`}]},{actions:[{icon:e.jsx(O,{}),label:t("actions.delete"),onClick:r}]}]})},u=E(),me=({sku:i})=>{const{t}=l();return T.useMemo(()=>[u.display({id:"sku",header:()=>e.jsx(m,{text:t("fields.sku")}),cell:()=>e.jsx(h,{text:i})}),u.accessor("line_item.order_id",{header:()=>e.jsx(m,{text:t("inventory.reservation.orderID")}),cell:({getValue:s})=>{const a=s();return a?e.jsx(h,{text:a}):e.jsx(c,{})}}),u.accessor("description",{header:()=>e.jsx(m,{text:t("fields.description")}),cell:({getValue:s})=>{const a=s();return a?e.jsx(h,{text:a}):e.jsx(c,{})}}),u.accessor("location.name",{header:()=>e.jsx(m,{text:t("inventory.reservation.location")}),cell:({getValue:s})=>{const a=s();return a?e.jsx(h,{text:a}):e.jsx(c,{})}}),u.accessor("created_at",{header:()=>e.jsx(m,{text:t("fields.createdAt")}),cell:({getValue:s})=>e.jsx(de,{date:s()})}),u.accessor("quantity",{header:()=>e.jsx(m,{text:t("fields.quantity"),align:"right"}),cell:({getValue:s})=>e.jsx(h,{text:s(),align:"right"})}),u.display({id:"actions",cell:({row:s})=>e.jsx(ue,{reservation:s.original})})],[t])},xe=({pageSize:i=20,prefix:t})=>{const s=A(["id","location_id","inventory_item_id","quantity","line_item_id","description","created_by"],t),{quantity:a,...r}=s;return{searchParams:{limit:i,quantity:a?JSON.parse(a):void 0,...r},raw:s}},S=20,ve=({inventoryItem:i})=>{const{searchParams:t,raw:s}=xe({pageSize:S}),{reservations:a,count:r,isPending:n,isError:o,error:f}=te({...t,inventory_item_id:[i.id]}),{stock_locations:x}=U({id:(a||[]).map(v=>v.location_id)}),_=T.useMemo(()=>{const v=new Map((x||[]).map(p=>[p.id,p]));return(a||[]).map(p=>({...p,location:v.get(p.location_id)}))},[a,x]),j=me({sku:i.sku}),{table:Q}=D({data:_??[],columns:j,count:r,enablePagination:!0,getRowId:v=>v.id,pageSize:S});if(o)throw f;return e.jsx(z,{table:Q,columns:j,pageSize:S,count:r,isLoading:n,pagination:!0,queryObject:s})},pe=({inventoryItem:i})=>{const{t}=l();return e.jsxs(g,{className:"p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(b,{children:t("reservations.domain")}),e.jsx(L,{size:"small",variant:"secondary",asChild:!0,children:e.jsx(I,{to:`/reservations/create?item_id=${i.id}`,children:t("actions.create")})})]}),e.jsx(ve,{inventoryItem:i})]})},he=({variants:i})=>{const{t}=l();return i!=null&&i.length?e.jsxs(g,{className:"p-0",children:[e.jsx("div",{className:"flex items-center justify-between px-6 py-4",children:e.jsx(b,{level:"h2",children:t("inventory.associatedVariants")})}),e.jsx("div",{className:"txt-small flex flex-col gap-2 px-2 pb-2",children:i.map(s=>{var n;const a=s.product?`/products/${s.product.id}/variants/${s.id}`:null,r=e.jsx("div",{className:"shadow-elevation-card-rest bg-ui-bg-component rounded-md px-4 py-2 transition-colors",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"shadow-elevation-card-rest rounded-md",children:e.jsx(K,{src:(n=s.product)==null?void 0:n.thumbnail})}),e.jsxs("div",{className:"flex flex-1 flex-col",children:[e.jsx("span",{className:"text-ui-fg-base font-medium",children:s.title}),e.jsx("span",{className:"text-ui-fg-subtle",children:s.options.map(o=>o.value).join(" ⋅ ")})]}),e.jsx("div",{className:"size-7 flex items-center justify-center",children:e.jsx(V,{className:"text-ui-fg-muted"})})]})});return a?e.jsx(I,{to:a,className:"outline-none focus-within:shadow-borders-interactive-with-focus rounded-md [&:hover>div]:bg-ui-bg-component-hover",children:r},s.id):e.jsx("div",{children:r},s.id)})})]}):null},Ye=()=>{const{id:i}=J(),t=$(),{inventory_item:s,isPending:a,isError:r,error:n}=F(i,{fields:"*variants,*variants.product,*variants.options"},{initialData:t}),{getWidgets:o}=B();if(a||!s)return e.jsx(G,{showJSON:!0,mainSections:3,sidebarSections:2,showMetadata:!0});if(r)throw n;return e.jsxs(N,{widgets:{after:o("inventory_item.details.after"),before:o("inventory_item.details.before"),sideAfter:o("inventory_item.details.side.after"),sideBefore:o("inventory_item.details.side.before")},data:s,showJSON:!0,showMetadata:!0,children:[e.jsxs(N.Main,{children:[e.jsx(H,{inventoryItem:s}),e.jsx(le,{inventoryItem:s}),e.jsx(pe,{inventoryItem:s})]}),e.jsxs(N.Sidebar,{children:[e.jsx(he,{variants:s.variants}),e.jsx(ae,{inventoryItem:s})]})]})},ye=i=>({queryKey:W.detail(i),queryFn:async()=>Y.admin.inventoryItem.retrieve(i,{fields:"*variants,*variants.product,*variants.options"})}),Ze=async({params:i})=>{const t=i.id,s=ye(t);return k.getQueryData(s.queryKey)??await k.fetchQuery(s)};export{Ye as Component,Ze as loader};