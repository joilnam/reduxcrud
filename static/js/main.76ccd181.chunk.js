(this["webpackJsonpredux-crud-tutorial"]=this["webpackJsonpredux-crud-tutorial"]||[]).push([[0],{45:function(e,t,c){"use strict";c.r(t);var n,i=c(1),s=c(11),a=c(3),r=c(10),l=c(7),d=c(0),u=c(18),j=c(25),b=c(22),o=c.n(b),h=c(29),O=c(15),m=Object(O.b)("users/fetchUsers",Object(h.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))),x=Object(O.c)({name:"users",initialState:{entities:[],loading:!1},reducers:{userAdded:function(e,t){e.entities.push(t.payload)},userUpdated:function(e,t){var c=t.payload,n=c.id,i=c.name,s=c.email,a=e.entities.find((function(e){return e.id===n}));a&&(a.name=i,a.email=s)},userDeleted:function(e,t){var c=t.payload.id;e.entities.find((function(e){return e.id===c}))&&(e.entities=e.entities.filter((function(e){return e.id!==c})))}},extraReducers:(n={},Object(u.a)(n,m.pending,(function(e,t){e.loading=!0})),Object(u.a)(n,m.fulfilled,(function(e,t){e.loading=!1,e.entities=[].concat(Object(j.a)(e.entities),Object(j.a)(t.payload))})),Object(u.a)(n,m.rejected,(function(e,t){e.loading=!1})),n)}),p=x.actions,f=p.userAdded,v=p.userUpdated,N=p.userDeleted,g=x.reducer;function w(){var e=Object(l.b)(),t=Object(a.f)(),c=Object(d.useState)(""),n=Object(r.a)(c,2),s=n[0],u=n[1],j=Object(d.useState)(""),b=Object(r.a)(j,2),o=b[0],h=b[1],O=Object(d.useState)(null),m=Object(r.a)(O,2),x=m[0],p=m[1],v=Object(l.c)((function(e){return e.users.entities.length}));return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("h1",{children:"Add user"})}),Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"three columns",children:[Object(i.jsx)("label",{htmlFor:"nameInput",children:"Name"}),Object(i.jsx)("input",{className:"u-full-width",type:"text",placeholder:"test@mailbox.com",id:"nameInput",onChange:function(e){return u(e.target.value)},value:s}),Object(i.jsx)("label",{htmlFor:"emailInput",children:"Email"}),Object(i.jsx)("input",{className:"u-full-width",type:"email",placeholder:"test@mailbox.com",id:"emailInput",onChange:function(e){return h(e.target.value)},value:o}),x&&x,Object(i.jsx)("button",{onClick:function(){s&&o?(e(f({id:v+1,name:s,email:o})),p(null),t.push("/")):p("Fill in all fields"),u(""),h("")},className:"button-primary",children:"Add user"})]})})]})}function y(){var e=Object(a.g)().pathname,t=parseInt(e.replace("/edit-user/","")),c=Object(l.c)((function(e){return e.users.entities.find((function(e){return e.id===t}))})),n=Object(l.b)(),s=Object(a.f)(),u=Object(d.useState)(c.name),j=Object(r.a)(u,2),b=j[0],o=j[1],h=Object(d.useState)(c.email),O=Object(r.a)(h,2),m=O[0],x=O[1],p=Object(d.useState)(null),f=Object(r.a)(p,2),N=f[0],g=f[1];return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("h1",{children:"Edit user"})}),Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"three columns",children:[Object(i.jsx)("label",{htmlFor:"nameInput",children:"Name"}),Object(i.jsx)("input",{className:"u-full-width",type:"text",placeholder:"test@mailbox.com",id:"nameInput",onChange:function(e){return o(e.target.value)},value:b}),Object(i.jsx)("label",{htmlFor:"emailInput",children:"Email"}),Object(i.jsx)("input",{className:"u-full-width",type:"email",placeholder:"test@mailbox.com",id:"emailInput",onChange:function(e){return x(e.target.value)},value:m}),N&&N,Object(i.jsx)("button",{onClick:function(){b&&m?(n(v({id:t,name:b,email:m})),g(null),s.push("/")):g("Fill in all fields")},className:"button-primary",children:"Save user"})]})})]})}function I(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.users})).entities,c=Object(l.c)((function(e){return e.loading}));return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("h1",{children:"Redux CRUD User app"})}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"two columns",children:Object(i.jsx)("button",{onClick:function(){return e(m())},className:"button-primary",children:"Load users"})}),Object(i.jsx)("div",{className:"two columns",children:Object(i.jsx)(s.b,{to:"/add-user",children:Object(i.jsx)("button",{className:"button-primary",children:"Add user"})})})]}),Object(i.jsx)("div",{className:"row",children:c?"Loading...":Object(i.jsxs)("table",{className:"u-full-width",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"ID"}),Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Email"}),Object(i.jsx)("th",{children:"Actions"})]})}),Object(i.jsx)("tbody",{children:t.length&&t.map((function(t,c){var n=t.id,a=t.name,r=t.email;return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:r}),Object(i.jsxs)("td",{children:[Object(i.jsx)("button",{onClick:function(){return function(t){e(N({id:t}))}(n)},children:"Delete"}),Object(i.jsx)(s.b,{to:"/edit-user/".concat(n),children:Object(i.jsx)("button",{children:"Edit"})})]})]},c)}))})]})})]})}function C(){return Object(i.jsx)(s.a,{children:Object(i.jsx)("div",{children:Object(i.jsxs)(a.c,{children:[Object(i.jsx)(a.a,{path:"/add-user",children:Object(i.jsx)(w,{})}),Object(i.jsx)(a.a,{path:"/edit-user",children:Object(i.jsx)(y,{})}),Object(i.jsx)(a.a,{path:"/",children:Object(i.jsx)(I,{})})]})})})}var S=c(16),k=c.n(S),A=Object(O.a)({reducer:{users:g}});A.dispatch(m()),k.a.render(Object(i.jsx)(l.a,{store:A,children:Object(i.jsx)(C,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.76ccd181.chunk.js.map