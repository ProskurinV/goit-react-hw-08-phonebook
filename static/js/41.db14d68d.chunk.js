"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[41],{7041:function(e,n,r){r.r(n),r.d(n,{default:function(){return F}});var t=r(2791),i=r(9434),a=r(3634),c=function(e){return e.contacts.items},s=function(e){return e.contacts.filter},o=function(e){return e.contacts.isLoading},u=function(e){return e.contacts.error},l=r(4732),d=r(3635),h=r(4190),m=r(5777),x=r(184),f=function(e){var n=e.id,r=e.name,t=e.number,c=(0,i.I0)();return(0,x.jsx)(d.Zb,{children:(0,x.jsxs)(d.eW,{children:[(0,x.jsxs)(h.xv,{children:[r," : ",t]}),(0,x.jsx)(m.zx,{colorScheme:"blue",type:"button",onClick:function(){return c((0,a.GK)(n))},children:(0,x.jsx)(l.pJ,{w:5,h:5})})]})})};function j(){var e=(0,i.v9)(c),n=(0,i.v9)(s),r=function(){var r=n.toLowerCase();return e.filter((function(e){var n,t;return null===(n=e.name)||void 0===n||null===(t=n.toLowerCase())||void 0===t?void 0:t.includes(r)}))}();return(0,x.jsx)("ul",{children:(0,x.jsx)(h.kC,{justifyContent:"center",gap:"10px",wrap:"wrap",children:r.map((function(e){var n=e.id,r=e.name,t=e.number;return(0,x.jsx)("li",{children:(0,x.jsx)(f,{id:n,name:r,number:t})},n)}))})})}var v=r(5705),p=r(5863),b=r(824),g=r(5562),C=r.n(g);function y(){var e=(0,i.I0)(),n=(0,i.v9)(c);return(0,x.jsx)(h.kC,{bg:"gray.100",align:"center",justify:"center",h:"85vh",children:(0,x.jsx)(h.xu,{bg:"white",p:6,rounded:"md",w:64,children:(0,x.jsx)(v.J9,{initialValues:{name:"",number:""},onSubmit:function(r,t){var i,c=t.resetForm,s=r.name,o=s.toLowerCase();(n.items,i=o,n.find((function(e){return e.name.toLowerCase()===i})))?C().Notify.info("".concat(s," is already in your contacts")):(e((0,a.uK)(r)),C().Notify.info("".concat(s," has been added to your contacts")),c())},children:function(e){var n=e.handleSubmit,r=e.errors,t=e.touched;return(0,x.jsx)("form",{onSubmit:n,children:(0,x.jsxs)(h.gC,{spacing:4,align:"flex-start",children:[(0,x.jsxs)(p.NI,{isRequired:!0,children:[(0,x.jsx)(p.lX,{htmlFor:"name",children:"Name"}),(0,x.jsx)(v.gN,{as:b.II,id:"name",name:"name",type:"name",variant:"filled",placeholder:"Enter name"})]}),(0,x.jsxs)(p.NI,{isRequired:!0,isInvalid:!!r.number&&t.number,children:[(0,x.jsx)(p.lX,{htmlFor:"number",children:"Number"}),(0,x.jsx)(v.gN,{as:b.II,id:"number",name:"number",type:"number",placeholder:"Enter phone",variant:"filled"}),(0,x.jsx)(p.J1,{children:r.number})]}),(0,x.jsx)(m.zx,{type:"submit",colorScheme:"purple",width:"full",children:"Add contact"})]})})}})})})}var w=r(1538);function I(){var e=(0,i.I0)(),n=(0,i.v9)(s);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.kC,{justifyContent:"center",children:(0,x.jsx)(h.X6,{as:"h2",size:"l",children:"Find contacts"})}),(0,x.jsx)(h.kC,{justifyContent:"center",paddingBottom:"8px",paddingTop:"8px",children:(0,x.jsx)(b.II,{width:"auto",type:"text",name:"filter",placeholder:"Enter search name",value:n,onChange:function(n){e((0,w.a)(n.currentTarget.value))}})})]})}var k=r(7552);function F(){var e=(0,i.I0)(),n=(0,i.v9)(o),r=(0,i.v9)(c),s=(0,i.v9)(u);return(0,t.useEffect)((function(){e((0,a.yF)())}),[e]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(y,{}),r.length>0&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.kC,{justifyContent:"center",children:(0,x.jsx)(h.X6,{children:"Your Contacts"})}),(0,x.jsx)(I,{})]}),(0,x.jsx)("div",{children:n&&(0,x.jsx)(k.D8,{isIndeterminate:!0,color:"green.300",size:"30px"})}),(0,x.jsx)(j,{}),s]})}}}]);
//# sourceMappingURL=41.db14d68d.chunk.js.map