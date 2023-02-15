(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(4),l=c(2),i=c(3),r=c.n(i),o=c(1),d=c.n(o),j=(c(13),c(14),c(6)),u=c.n(j),b=c(0),h=function(e){var t=e.todos,c=e.setSelectedTodo,s=e.selectedTodo;return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(b.jsx)("td",{className:"is-vcentered",children:e.id}),Object(b.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:u()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:u()("far",{"fa-eye":e.id!==(null===s||void 0===s?void 0:s.id),"fa-eye-slash":e.id===(null===s||void 0===s?void 0:s.id)})})})})})]},e.id)}))})]})},m=d.a.memo((function(e){var t=e.selectOption,c=e.applyQuery,s=e.setAppliedQuery,a=Object(o.useState)(""),n=Object(l.a)(a,2),i=n[0],r=n[1];return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return t(e.target.value)},children:[Object(b.jsx)("option",{value:"all",children:"All"}),Object(b.jsx)("option",{value:"active",children:"Active"}),Object(b.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:i,onChange:function(e){r(e.target.value),c(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),i&&Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){r(""),s("")}})})]})]})})),O=(c(16),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})});function x(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var f=function(e){var t=e.selectedTodo,c=e.clearSelectedTodo,s=Object(o.useState)(null),a=Object(l.a)(s,2),i=a[0],d=a[1],j=function(){var e=Object(n.a)(r.a.mark((function e(){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s=t.userId,x("/users/".concat(s));case 2:c=e.sent,d(c);case 4:case"end":return e.stop()}var s}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){j()}),[]);return Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),t&&i?Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){d(null),c()}})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(b.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(b.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:".concat(null===i||void 0===i?void 0:i.email),children:null===i||void 0===i?void 0:i.name})]})]})]}):Object(b.jsx)(O,{})]})},p=(c(17),function(){return Object(b.jsx)("div",{className:"block notification is-danger is-light",children:"An error occurred while downloading data from the server"})}),v=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(null),i=Object(l.a)(a,2),d=i[0],j=i[1],u=Object(o.useState)("all"),v=Object(l.a)(u,2),N=v[0],y=v[1],g=Object(o.useState)(""),w=Object(l.a)(g,2),k=w[0],S=w[1],T=Object(o.useState)(!1),C=Object(l.a)(T,2),A=C[0],_=C[1],E=function(){var e=Object(n.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("/todos");case 3:t=e.sent,s(t),_(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),_(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){E()}),[]);var L=k.toLowerCase();var Q=Object(o.useCallback)(function(e,t){var c=0;return function(s){c&&window.clearTimeout(c),c=window.setTimeout((function(){e(s)}),t)}}(S,800),[]),B=Object(o.useMemo)((function(){var e=c;return"completed"===N&&(e=e.filter((function(e){return e.completed}))),"active"===N&&(e=e.filter((function(e){return!e.completed}))),L&&(e=e.filter((function(e){return e.title.toLowerCase().includes(L)}))),e}),[c,L,N]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(m,{selectOption:function(e){y(e)},applyQuery:Q,setAppliedQuery:S})}),A?Object(b.jsx)(p,{}):Object(b.jsxs)("div",{className:"block",children:[!c.length&&Object(b.jsx)(O,{}),Object(b.jsx)(h,{todos:B,setSelectedTodo:j,selectedTodo:d})]})]})})}),d&&Object(b.jsx)(f,{selectedTodo:d,clearSelectedTodo:function(){j(null)}})]})};a.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9313a9f2.chunk.js.map