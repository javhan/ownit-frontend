(this.webpackJsonpownit=this.webpackJsonpownit||[]).push([[0],{57:function(e,t,i){},79:function(e,t,i){},95:function(e,t,i){"use strict";i.r(t);var s=i(0),c=i.n(s),n=i(18),a=i.n(n),l=i(22),o=(i(78),i(57),i(72)),j=i(7),r=i(97),b=(i(79),i(98)),u=(i.p,i(9));function m(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),i=t[0],c=t[1];return Object(u.jsxs)("div",{className:"landing",children:[Object(u.jsx)("div",{className:"left-body",children:Object(u.jsxs)("div",{className:"textbox",children:[Object(u.jsx)("h1",{className:"title",children:"Own It!"}),Object(u.jsx)("h2",{className:"subtitle",children:"Don't find your next customer, let them find you."}),Object(u.jsx)("h3",{className:"mailing-list",children:"Join our mailing list to find out more."}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("http://localhost:5001/api/users/",{method:"POST",body:JSON.stringify({email:e.target.email.value}),headers:{"Content-Type":"application/json"}}).then((function(e){200===e.status&&c(!0)}))},children:[Object(u.jsx)("input",{type:"email",name:"email",placeholder:"Email"}),Object(u.jsx)("input",{type:"submit",value:"Submit",className:"submit-button"})]})]})}),Object(u.jsx)("div",{className:"right-body"}),Object(u.jsx)(b.a,{title:"Email Submission",visible:i,onOk:function(){c(!1)},children:Object(u.jsx)("p",{children:"We have received your email! Please check your mailbox for our welcome message!"})})]})}function d(){var e=Object(s.useState)(!0),t=Object(l.a)(e,2),i=t[0],c=t[1];return Object(s.useEffect)((function(){c(!1)}),[]),Object(u.jsx)("div",{className:"main-body",children:Object(u.jsx)(o.a,{children:i?Object(u.jsx)("div",{className:"spin-large",children:Object(u.jsx)(r.a,{size:"large"})}):Object(u.jsx)(j.c,{children:Object(u.jsx)(j.a,{path:"/",element:Object(u.jsx)(m,{})})})})})}a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.4ca378cd.chunk.js.map