(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(16),c=n.n(r),s=n(3),o=n(2),u=n(0);function a(e){var t=e.filter,n=e.setFilter;return Object(u.jsxs)("p",{children:["Filter shown with"," ",Object(u.jsx)("input",{value:t,onChange:function(e){return n(e.target.value)}})]})}var i=n(5),l=n.n(i),j="/api/persons";function d(e){var t=e.number,n=e.name,r=e.deletePerson;return Object(u.jsxs)("li",{children:[n," - ",t," ",Object(u.jsx)("button",{onClick:r,children:"delete"})]})}function b(e){var t=e.people,n=e.setPersons,r=function(e,t){window.confirm("Are you sure you want to delete this ".concat(t,"?"))&&(function(e){return l.a.delete("".concat(j,"/").concat(e))}(e).catch((function(e){return console.log(e)})),n((function(t){return t.filter((function(t){return e!==t.id}))})))};return Object(u.jsx)("ul",{children:t.map((function(e){return Object(u.jsx)(d,{name:e.name,number:e.number,deletePerson:function(){return r(e.id,e.name)}},e.name)}))})}var f=n(17);function h(e){var t=e.persons,n=e.setPersons,r=e.setSuccessMessage,c=e.setErrorMessage,a=Object(o.useState)(""),i=Object(s.a)(a,2),d=i[0],b=i[1],h=Object(o.useState)(""),m=Object(s.a)(h,2),O=m[0],p=m[1],v=function(e){e.preventDefault();var s,o,u=t.find((function(e){return e.name.toLowerCase()===d.toLowerCase()}));u?window.confirm("".concat(d," is already added to the phonebook, replace the old number with the new one?"))&&(s=u.id,o={name:d,number:O},l.a.put("".concat(j,"/").concat(s),o).then((function(e){return e.data}))).then((function(e){n((function(t){return t.map((function(t){return t.id!==u.id?t:e}))})),r("Updated ".concat(d," number")),setTimeout((function(){return r(null)}),5e3)})).catch((function(e){c("Person ".concat(d," was already removed from the server")),setTimeout((function(){c(null)}),5e3)})):function(e){return l.a.post(j,e).then((function(e){return e.data}))}({name:d,number:O}).then((function(e){return n((function(t){return[].concat(Object(f.a)(t),[e])}))})).then((function(){r("Added ".concat(d)),setTimeout((function(){return r(null)}),5e3)})).catch((function(e){console.log(e.response.data,e.message),c(e.response.data.error),setTimeout((function(){return c(null)}),5e3)}));b(""),p("")};return Object(u.jsxs)("form",{onSubmit:function(e){return v(e)},children:[Object(u.jsxs)("div",{children:["name:"," ",Object(u.jsx)("input",{value:d,onChange:function(e){return b(e.target.value)}})]}),Object(u.jsxs)("div",{children:["number:"," ",Object(u.jsx)("input",{value:O,onChange:function(e){return p(e.target.value)}})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})}var m=function(e){var t=e.message,n=e.isSuccess;return null===t?null:n?Object(u.jsx)("div",{className:"notification",children:t}):Object(u.jsx)("div",{className:"error",children:t})},O=function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(o.useState)(""),i=Object(s.a)(c,2),d=i[0],f=i[1],O=Object(o.useState)(null),p=Object(s.a)(O,2),v=p[0],x=p[1],g=Object(o.useState)(null),w=Object(s.a)(g,2),S=w[0],C=w[1];Object(o.useEffect)((function(){l.a.get(j).then((function(e){return e.data})).then((function(e){return r(e)}))}),[]);var P=n.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(a,{filter:d,setFilter:f}),Object(u.jsx)(m,{message:v,isSuccess:!0}),Object(u.jsx)(m,{message:S,isSuccess:!1}),Object(u.jsx)("h2",{children:"Add a new"}),Object(u.jsx)(h,{persons:n,setPersons:r,setSuccessMessage:x,setErrorMessage:C}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(b,{people:P,setPersons:r})]})};n(41);c.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.085e9a5d.chunk.js.map