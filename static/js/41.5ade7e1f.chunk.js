"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[41],{7041:function(e,n,r){r.r(n),r.d(n,{default:function(){return N}});var t=r(2791),i=r(9434),a=r(3634),c=function(e){return e.contacts.items},s=function(e){return e.contacts.filter},u=function(e){return e.contacts.isLoading},o=function(e){return e.contacts.error},l=r(4732),d=r(3635),m=r(4190),h=r(5777),x=r(184),j=function(e){var n=e.id,r=e.name,t=e.number,c=(0,i.I0)();return(0,x.jsx)(d.Zb,{children:(0,x.jsxs)(d.eW,{children:[(0,x.jsxs)(m.xv,{children:[r," : ",t]}),(0,x.jsx)(h.zx,{colorScheme:"blue",type:"button",onClick:function(){return c((0,a.GK)(n))},children:(0,x.jsx)(l.pJ,{w:5,h:5})})]})})};function f(){var e=(0,i.v9)(c),n=(0,i.v9)(s),r=function(){var r=n.toLowerCase();return e.filter((function(e){var n,t;return null===(n=e.name)||void 0===n||null===(t=n.toLowerCase())||void 0===t?void 0:t.includes(r)}))}();return(0,x.jsx)("ul",{children:(0,x.jsx)(m.kC,{justifyContent:"center",gap:"10px",wrap:"wrap",backgroundColor:"#F7FAFC",children:r.map((function(e){var n=e.id,r=e.name,t=e.number;return(0,x.jsx)("li",{children:(0,x.jsx)(j,{id:n,name:r,number:t})},n)}))})})}var p=r(5705),v=r(2797),b=r(5863),g=r(824),C=r(3402),w=v.Ry().shape({name:v.Z_().required("Please, enter name"),number:v.Z_().min(7).required("Please, enter correct number")});function y(){var e=(0,i.I0)(),n=(0,i.v9)(c);return(0,x.jsxs)(m.kC,{bg:"gray.100",align:"center",justify:"center",h:"100vh",children:[(0,x.jsx)(m.xu,{bg:"white",p:6,rounded:"md",w:64,children:(0,x.jsx)(p.J9,{initialValues:{name:"",number:""},validationSchema:w,onSubmit:function(r){var t,i=r.name,c=i.toLowerCase();(n.items,t=c,n.find((function(e){return e.name.toLowerCase()===t})))?(0,C.ZP)("".concat(i," is already in your contacts")):(e((0,a.uK)(r)),C.ZP.success("".concat(i," has been added to your contacts")))},children:function(e){var n=e.handleSubmit,r=e.errors,t=e.touched;return(0,x.jsx)("form",{onSubmit:n,children:(0,x.jsxs)(m.gC,{spacing:4,align:"flex-start",children:[(0,x.jsxs)(b.NI,{isRequired:!0,children:[(0,x.jsx)(b.lX,{htmlFor:"name",children:"Name"}),(0,x.jsx)(p.gN,{as:g.II,id:"name",name:"name",type:"name",variant:"filled",placeholder:"Enter name"})]}),(0,x.jsxs)(b.NI,{isRequired:!0,isInvalid:!!r.number&&t.number,children:[(0,x.jsx)(b.lX,{htmlFor:"number",children:"Number"}),(0,x.jsx)(p.gN,{as:g.II,id:"number",name:"number",type:"number",placeholder:"Enter phone",variant:"filled"}),(0,x.jsx)(b.J1,{children:r.number})]}),(0,x.jsx)(h.zx,{type:"submit",colorScheme:"purple",width:"full",children:"Add contact"})]})})}})}),(0,x.jsx)(C.x7,{position:"top-right"})]})}var I=r(1538);function k(){var e=(0,i.I0)(),n=(0,i.v9)(s);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m.kC,{justifyContent:"center",children:(0,x.jsx)(m.X6,{as:"h2",size:"l",children:"Find contacts"})}),(0,x.jsx)(m.kC,{justifyContent:"center",paddingBottom:"8px",paddingTop:"8px",children:(0,x.jsx)(g.II,{width:"auto",type:"text",name:"filter",placeholder:"Enter search name",value:n,onChange:function(n){e((0,I.a)(n.currentTarget.value))}})})]})}var F=r(7552);function N(){var e=(0,i.I0)(),n=(0,i.v9)(u),r=(0,i.v9)(c),s=(0,i.v9)(o);return(0,t.useEffect)((function(){e((0,a.yF)())}),[e]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(y,{}),r.length>0&&(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(k,{})}),(0,x.jsx)("div",{children:n&&(0,x.jsx)(F.D8,{isIndeterminate:!0,color:"green.300",size:"30px"})}),(0,x.jsx)(f,{}),s]})}}}]);
//# sourceMappingURL=41.5ade7e1f.chunk.js.map