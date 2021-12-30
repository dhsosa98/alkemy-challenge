(this["webpackJsonpfirts-app"]=this["webpackJsonpfirts-app"]||[]).push([[0],{75:function(e,t,s){},76:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(25),a=s.n(r),c=s(10),o=s(7),i=s(3),l=s(1),d=Object(n.createContext)(),u=function(e){var t=e.children,s=Object(n.useState)(JSON.parse(sessionStorage.getItem("user"))),r=Object(i.a)(s,2),a=r[0],c=r[1],o=Object(n.useState)(!!sessionStorage.getItem("token")),u=Object(i.a)(o,2),m=u[0],j=u[1];return Object(l.jsx)(d.Provider,{value:{user:a,signin:function(e){var t=e.user,s=e.token;c(t),sessionStorage.setItem("token","Bearer "+s),sessionStorage.setItem("user",JSON.stringify(t)),j(!0)},signout:function(){c({}),j(!1),sessionStorage.removeItem("token"),sessionStorage.removeItem("user")},isAuth:m},children:t})},m=s(79),j=s(15),b=s(5),x=[{name:"Dashboard",href:"/",current:!0}];function p(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.filter(Boolean).join(" ")}var h=function(e){var t=e.children,s=Object(n.useContext)(d),r=s.user,a=s.signout,i=Object(o.g)(),u=function(){a(),i.push("/login")};return Object(l.jsxs)("div",{className:" text-purple-50",children:[Object(l.jsx)(m.a,{as:"nav",className:"bg-gray-800",children:function(e){var t=e.open;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(l.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(l.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:Object(l.jsxs)(m.a.Button,{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[Object(l.jsx)("span",{className:"sr-only",children:"Open main menu"}),t?Object(l.jsx)(j.h,{className:"block h-6 w-6","aria-hidden":"true"}):Object(l.jsx)(j.f,{className:"block h-6 w-6","aria-hidden":"true"})]})}),Object(l.jsxs)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[Object(l.jsxs)("div",{className:"flex-shrink-0 flex items-center",children:[Object(l.jsx)(b.b,{className:"h-10 text-indigo-600 w-auto mx-3"}),Object(l.jsx)("h5",{className:" hidden lg:block w-auto text-2xl",children:"Operations Manager"})]}),Object(l.jsx)("div",{className:"hidden sm:block sm:ml-6",children:Object(l.jsx)("div",{className:"flex space-x-4",children:x.map((function(e){return Object(l.jsx)(c.b,{to:e.href,className:p(e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","px-3 py-2 rounded-md text-sm font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name)}))})})]}),Object(l.jsx)("div",{className:" hidden lg:block w-auto",children:"".concat(r.name," ").concat(r.surname)}),Object(l.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:Object(l.jsx)("button",{type:"button",onClick:u,className:"bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",children:"Log Out"})})]})}),Object(l.jsx)(m.a.Panel,{className:"sm:hidden",children:Object(l.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:x.map((function(e){return Object(l.jsx)(c.b,{to:e.href,className:p(e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name)}))})})]})}}),t]})},g=s(21),f=s(23),O=function(e){var t=e.page,s=e.size,r=e.cantOperations,a=e.querys,c=Object(o.g)(),i={prev:(t+1)*s-s+1,next:(t+1)*s};console.log(r),console.log(a.toString()),Object(n.useEffect)((function(){r%s===0&&i.prev>10&&(a.set("page",t-1),c.push("/?".concat(a.toString())))}),[r]);var d=function(e,t){e.preventDefault(),a.set("page",t),c.push("/?".concat(a.toString()))};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6",children:[r>10&&Object(l.jsxs)("div",{className:" container relative sm:hidden",children:[i.prev>=10&&Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(e){return d(e,t-1)},className:"absolute items-center left-0 px-4 py-2 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50",children:"Previous"})}),i.next<r&&Object(l.jsx)("button",{onClick:function(e){return d(e,t+1)},className:"ml-3 absolute right-0 items-center px-4 py-2 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50",children:"Next"})]}),Object(l.jsxs)("div",{className:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between",children:[r>0?Object(l.jsxs)("p",{className:"text-sm text-gray-700",children:["Showing ",Object(l.jsx)("span",{className:"font-medium",children:i.prev})," to ",Object(l.jsx)("span",{className:"font-medium",children:"".concat(i.next<r?i.next:r)})," of"," ",Object(l.jsx)("span",{className:"font-medium",children:r})," operations"]}):Object(l.jsx)("p",{className:"text-sm text-gray-700",children:"Nothing to Show"}),Object(l.jsx)("div",{children:r>10&&Object(l.jsxs)("nav",{className:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination",children:[i.prev>=10&&Object(l.jsxs)("button",{onClick:function(e){return d(e,t-1)},className:"relative inline-flex items-center px-2 py-2 rounded-l-md border border-indigo-600 bg-white text-sm font-medium text-indigo-600 hover:bg-gray-50",children:[Object(l.jsx)("span",{className:"sr-only",children:"Previous"}),Object(l.jsx)(b.c,{className:"h-5 w-5","aria-hidden":"true"})]}),i.next<r&&Object(l.jsxs)("button",{onClick:function(e){return d(e,t+1)},className:"relative inline-flex items-center px-2 py-2 rounded-r-md border border-indigo-600 bg-white text-sm font-medium text-indigo-600 hover:bg-gray-50",children:[Object(l.jsx)("span",{className:"sr-only",children:"Next"}),Object(l.jsx)(b.d,{className:"h-5 w-5","aria-hidden":"true"})]})]})})]})]})})},y=s(78),v=s(77),w=function(e){var t=e.modalText,s=e.open,r=e.setOpen,a=e.handleConfirm,c=e.type,o=Object(n.useRef)(null);return Object(l.jsx)(y.a.Root,{show:s,as:n.Fragment,children:Object(l.jsx)(v.a,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:o,onClose:function(){},children:Object(l.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-60 text-center sm:block sm:p-0",children:[Object(l.jsx)(y.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(l.jsx)(v.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(l.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(l.jsx)(y.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(l.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[Object(l.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:Object(l.jsxs)("div",{className:"sm:flex sm:items-start",children:[Object(l.jsx)("div",{className:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full ".concat("delete"===c?"bg-red-100":"bg-green-100"," sm:mx-0 sm:h-10 sm:w-10"),children:"delete"===c?Object(l.jsx)(j.a,{className:"h-6 w-6 text-red-600","aria-hidden":"true"}):Object(l.jsx)(b.a,{className:"h-6 w-6 text-green-600","aria-hidden":"true"})}),Object(l.jsx)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:Object(l.jsx)("div",{className:"mt-2",children:Object(l.jsx)("p",{className:"text-sm text-gray-500",children:t})})})]})}),Object(l.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:["delete"===c?Object(l.jsx)("button",{type:"button",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return a()},children:"Delete"}):Object(l.jsx)("button",{type:"button",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:green-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return a()},children:"Accept"}),"delete"===c&&Object(l.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return r(!1)},ref:o,children:"Cancel"})]})]})})]})})})},N=function(e){var t=e.operationList,s=e.onEdit,n=e.setOpen,r=e.setDeleteId;return Object(l.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"px-3 sm:px-6 py-4 whitespace-nowrap",children:e.concept}),Object(l.jsx)("td",{className:"px-3 sm:px-6 py-4 whitespace-nowrap",children:e.category}),Object(l.jsxs)("td",{className:"px-3 sm:px-6 py-4 whitespace-nowrap",children:["Expense"===e.type&&Object(l.jsx)(l.Fragment,{children:"-"}),"$",e.amount]}),Object(l.jsx)("td",{className:"px-3 sm:px-6 py-4 whitespace-nowrap",children:"Expense"===e.type?Object(l.jsx)("strong",{className:" text-red-500",children:e.type}):Object(l.jsx)("strong",{className:" text-green-500",children:e.type})}),Object(l.jsx)("td",{className:"px-3 sm:px-6 py-4 whitespace-nowrap",children:e.date}),Object(l.jsx)("td",{className:"px-3 sm:px-6 py-4 whitespace-nowrap text-center text-sm font-medium",children:Object(l.jsx)("button",{className:" w-20 bg-red-600 text-white rounded-lg p-1",onClick:function(){n(!0),r(e.id)},children:"Delete"})}),Object(l.jsx)("td",{className:"px-3 sm:px-6 py-4 whitespace-nowrap text-center text-sm font-medium",children:Object(l.jsx)("button",{className:"text-indigo-600 hover:text-indigo-900",onClick:function(){return s(e)},children:"Edit"})})]},e.id)}))})},k=function(e){var t=e.operationList,s=e.onDelete,r=e.onEdit,a=e.cantOperations,c=e.page,d=e.size,u=e.isSort,m=e.setIsSort,j=e.querys,x=(e.setQuerys,Object(o.g)()),p=Object(n.useState)(null),h=Object(i.a)(p,2),g=h[0],f=h[1],y=Object(n.useState)(!1),v=Object(i.a)(y,2),k=v[0],C=v[1],S=Object(n.useState)(!1),I=Object(i.a)(S,2),F=I[0],E=I[1],P=Object(n.useState)(!1),z=Object(i.a)(P,2),U=z[0],D=z[1],T=Object(n.useState)(!1),R=Object(i.a)(T,2),q=R[0],L=R[1],A=Object(n.useState)(!1),V=Object(i.a)(A,2),B=V[0],J=V[1],Q=Object(n.useState)(!1),Y=Object(i.a)(Q,2),M=Y[0],$=Y[1],G=function(e,t,s){e.preventDefault();var n=e.target.getAttribute("name")||"concept",r=j,a="";a=t?n+"%ASC":n+"%DESC",r.toString().includes("sort")?r.get("sort").includes(n)?r.set("sort",r.get("sort").split(n)[0]+a):r.set("sort",r.get("sort")+"#"+a):r.set("sort",a),console.log({sortString:a}),console.log(r.toString()),m(!u),s(!t),x.push("/?"+j)};return Object(l.jsxs)("div",{className:"flex flex-col",children:[Object(l.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:Object(l.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(l.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:Object(l.jsxs)("table",{className:"min-w-full divide-y divide-gray-200 text-xs sm:text-lg table-auto",children:[Object(l.jsx)("thead",{className:"bg-indigo-600",children:Object(l.jsxs)("tr",{children:[Object(l.jsxs)("th",{scope:"col",className:"px-3 sm:px-6 py-3 text-left  text-white uppercase tracking-wider",children:["Concept",F?Object(l.jsx)(b.g,{name:"concept",className:"h-6 sm:h-10 cursor-pointer",onClick:function(e){G(e,F,E)}}):Object(l.jsx)(b.h,{name:"concept",className:"h-6 sm:h-10 cursor-pointer",onClick:function(e){G(e,F,E)}})]}),Object(l.jsxs)("th",{scope:"col",className:"px-3 sm:px-6 py-3 text-left text-white uppercase tracking-wider",children:["Category",U?Object(l.jsx)(b.g,{name:"category",className:"h-6 sm:h-10 cursor-pointer",onClick:function(e){G(e,U,D)}}):Object(l.jsx)(b.h,{name:"category",className:"h-6 sm:h-10 cursor-pointer",onClick:function(e){G(e,U,D)}})]}),Object(l.jsxs)("th",{scope:"col",className:"px-3 sm:px-6 py-3 text-left text-white uppercase tracking-wider",children:["Amount",q?Object(l.jsx)(b.g,{name:"amount",className:"h-6 sm:h-10 cursor-pointer",onClick:function(e){G(e,q,L)}}):Object(l.jsx)(b.h,{name:"amount",className:"h-6 sm:h-10 cursor-pointer",onClick:function(e){G(e,q,L)}})]}),Object(l.jsxs)("th",{scope:"col",className:"px-3 sm:px-6 py-3 text-left text-white uppercase tracking-wider",children:["Type",B?Object(l.jsx)(b.g,{name:"type",className:" h-6 sm:h-10 cursor-pointer",onClick:function(e){G(e,B,J)}}):Object(l.jsx)(b.h,{name:"type",className:" h-6 sm:h-10 cursor-pointer",onClick:function(e){G(e,B,J)}})]}),Object(l.jsxs)("th",{scope:"col",className:"px-3 sm:px-6 py-3 text-left text-white uppercase tracking-wider",children:["Date",M?Object(l.jsx)(b.g,{name:"date",className:" h-6 sm:h-10 cursor-pointer",onClick:function(e){G(e,M,$)}}):Object(l.jsx)(b.h,{name:"date",className:" h-6 sm:h-10 cursor-pointer",onClick:function(e){G(e,M,$)}})]}),Object(l.jsx)("th",{scope:"col",className:"relative px-3 sm:px-6 py-3",children:Object(l.jsx)("span",{className:"sr-only",children:"Delete"})}),Object(l.jsx)("th",{scope:"col",className:"relative px-3 sm:px-6 py-3",children:Object(l.jsx)("span",{className:"sr-only",children:"Edit"})})]})}),Object(l.jsx)(N,{operationList:t,onEdit:r,setOpen:C,setDeleteId:f})]})})})}),Object(l.jsx)(O,{cantOperations:a,page:c,size:d,querys:j}),Object(l.jsx)(w,{modalText:"Are you sure you want to delete this operation?",open:k,setOpen:C,handleConfirm:function(){s(g),f(null),C(!1)},type:"delete"})]})},C=function(e){var t=e.newOperationItem,s=e.onSubmit,r=e.onChange,a=e.isEdit,c=e.setIsEdit,o=e.isOpen,i=e.setIsOpen,d=Object(n.useRef)(null);return Object(l.jsx)(y.a.Root,{show:o,as:n.Fragment,children:Object(l.jsx)(v.a,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:d,onClose:function(){},children:Object(l.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-60 text-center sm:block sm:p-0",children:[Object(l.jsx)(y.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(l.jsx)(v.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(l.jsx)(y.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(l.jsxs)("form",{className:"p-5 inline-flex flex-col align-bottom bg-indigo-600 rounded-lg text-left overflow-hidden shadow-xl sm:translate-y-40 transform transition-all sm:my-5 sm:max-w-lg sm:w-full",onSubmit:s,children:[Object(l.jsx)("h1",{className:"mx-auto mb-4 text-xl text-white",children:a?Object(l.jsx)(l.Fragment,{children:"Please update the Operation"}):Object(l.jsx)(l.Fragment,{children:"Please insert a new Operation"})}),Object(l.jsx)("label",{className:"text-white",children:"Concept: "}),Object(l.jsx)("input",{placeholder:"Example: Youtube",className:"mb-4 h-7 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-12 sm:text-lg border-gray-300 rounded-md",name:"concept",value:t.concept,onChange:r}),Object(l.jsx)("label",{className:"text-white",children:"Category: "}),"Income"===t.type?Object(l.jsxs)("select",{className:"mb-4 h-7 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-12 sm:text-lg border-gray-300 rounded-md",defaultValue:t.category,name:"category",onChange:r,children:[Object(l.jsx)("option",{value:"Crypto",children:"Crypto"}),Object(l.jsx)("option",{value:"Profit",children:"Profit"}),Object(l.jsx)("option",{value:"Inheritance",children:"Inheritance"}),Object(l.jsx)("option",{value:"Salary",children:"Salary"}),Object(l.jsx)("option",{value:"Sale",children:"Sale"}),Object(l.jsx)("option",{value:"Rental",children:"Rental"})]}):Object(l.jsxs)("select",{className:"mb-4 h-7 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-12 sm:text-lg border-gray-300 rounded-md",defaultValue:t.category,name:"category",onChange:r,children:[Object(l.jsx)("option",{value:"Crypto",children:"Crypto"}),Object(l.jsx)("option",{value:"Food",children:"Food"}),Object(l.jsx)("option",{value:"School",children:"School"}),Object(l.jsx)("option",{value:"University",children:"University"}),Object(l.jsx)("option",{value:"Internet",children:"Internet"}),Object(l.jsx)("option",{value:"Credit Card",children:"Credit Card"}),Object(l.jsx)("option",{value:"Rental",children:"Rental"})]}),Object(l.jsx)("label",{className:"text-white",children:"Amount: "}),Object(l.jsx)("input",{className:"mb-4 h-7 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-12 sm:text-lg border-gray-300 rounded-md",type:"number",name:"amount",value:t.amount,onChange:r}),Object(l.jsx)("label",{className:"text-white",children:"Type: "}),Object(l.jsxs)("select",{className:"mb-4 h-7 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-12 sm:text-lg border-gray-300 rounded-md",defaultValue:t.type,name:"type",onChange:r,disabled:a,children:[Object(l.jsx)("option",{value:"Income",children:"Income"}),Object(l.jsx)("option",{value:"Expense",children:"Expense"})]}),Object(l.jsx)("label",{className:"text-white",children:"Date: "}),Object(l.jsx)("input",{className:"mb-4 h-7 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-12 sm:text-lg border-gray-300 rounded-md",type:"date",name:"date",value:t.date,onChange:r}),Object(l.jsxs)("div",{className:"flex justify-around m-4 text-white",children:[Object(l.jsx)("button",{className:"w-20  ".concat(a?"bg-indigo-400":"bg-green-500"," rounded-md p-1"),type:"submit",children:a?Object(l.jsx)(l.Fragment,{children:"Update"}):Object(l.jsx)(l.Fragment,{children:"Add"})}),Object(l.jsx)("button",{className:" w-20 bg-red-500 rounded-md p-1",type:"button",ref:d,onClick:function(){i(!1),setTimeout((function(){c(!1)}),200)},children:"Close"})]})]})})]})})})},S=s(6),I=s.n(S),F=s(12),E=s(18),P=s.n(E),z="".concat("http://localhost:4000","/api/operations"),U=function(){var e=Object(F.a)(I.a.mark((function e(t,s){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={headers:{authorization:sessionStorage.getItem("token")}},t){e.next=5;break}return e.abrupt("return",P.a.post(z,s,n).then((function(e){return e.data})));case 5:return e.abrupt("return",P.a.patch(z,s,n).then((function(e){return e.data})));case 6:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),D=function(){var e=Object(F.a)(I.a.mark((function e(t){var s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={headers:{authorization:sessionStorage.getItem("token")}},e.abrupt("return",P.a.delete(z+"/"+t,s).then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T={getOperationList:function(){var e=Object(F.a)(I.a.mark((function e(t){var s,n,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s={headers:{authorization:sessionStorage.getItem("token")}},e.next=4,P.a.get(z+"/userOperations?"+t,s);case 4:return n=e.sent,r=n.data,e.abrupt("return",r.data.operations);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),deleteOperationItem:D,submitOperationItem:U};function R(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),s=t[0],r=t[1],a={concept:"",category:"Crypto",amount:0,type:"Income",date:""},c=Object(n.useState)([]),d=Object(i.a)(c,2),u=d[0],m=d[1],x=Object(n.useState)(a),p=Object(i.a)(x,2),h=p[0],O=p[1],y=Object(n.useState)(!1),v=Object(i.a)(y,2),w=v[0],N=v[1],S=Object(n.useState)(!1),I=Object(i.a)(S,2),F=I[0],E=I[1],P=Object(n.useState)(!1),z=Object(i.a)(P,2),U=z[0],D=z[1],R=Object(n.useState)(0),q=Object(i.a)(R,2),L=q[0],A=q[1],V=Object(o.g)(),B=Object(o.h)(),J=new URLSearchParams(B.search),Q=parseInt(J.get("page"))||0,Y=parseInt(J.get("size"))||10,M=Object(n.useState)(J.get("search")),$=Object(i.a)(M,2),G=$[0],H=$[1];J.set("page",Q),J.set("size",Y);var K=Object(n.useState)(J),W=Object(i.a)(K,2),X=W[0],Z=W[1];console.log(X),Object(n.useEffect)((function(){E(!F),X||Z(new URLSearchParams(B.search))}),[B]),Object(n.useEffect)((function(){T.getOperationList(X).then((function(e){var t=e||{},s=t.rows,n=t.count,a=t.total;A(n),m(null===s||void 0===s?void 0:s.map((function(e){return null==e.date&&(e.date=""),e}))),r(a)}))}),[F]),Object(n.useEffect)((function(){G?X.set("search",G):X.delete("search"),Z(X),E(!F),V.push("/?"+X)}),[G]);return Object(l.jsx)("div",{className:"container sm:mx-auto  text-gray-900",children:Object(l.jsxs)("div",{className:"sm:m-10 m-1",children:[Object(l.jsxs)("div",{className:" flex flex-col m-8",children:[Object(l.jsxs)("h1",{className:"m-auto text-lg sm:text-3xl",children:["Your balance is",Object(l.jsxs)("strong",{className:"".concat(s>=0?"text-green-500":"text-red-500"),children:[" ",s]})]}),Object(l.jsx)("div",{className:"m-auto",children:Object(l.jsx)(b.f,{className:" cursor-pointer h-10 text-indigo-600",onClick:function(){O(a),N(!w)}})})]}),Object(l.jsx)(C,{onSubmit:function(e){e.preventDefault(),T.submitOperationItem(U,h).then((function(e){D(!1),E(!F),N(!w),O(a)}))},onChange:function(e){O(Object(f.a)(Object(f.a)({},h),{},Object(g.a)({},e.target.name,e.target.value)))},newOperationItem:h,isEdit:U,isOpen:w,setIsOpen:N,setIsEdit:D}),Object(l.jsxs)("form",{className:"flex flex-row justify-center",onSubmit:function(e){e.preventDefault(),G?X.set("search",G):X.delete("search"),Z(X),E(!F),V.push("/?"+X)},children:[Object(l.jsx)("input",{type:"text",placeholder:"Search by concept or category",className:"w-96 p-3 my-5 ml-2 bg-white h-11 border-indigo-600 border-4 rounded-l-lg outline-none",value:G,onChange:function(e){H(e.target.value)}}),Object(l.jsx)("button",{children:Object(l.jsx)(j.g,{className:"h-11 mr-2 bg-indigo-600 text-white border-indigo-600 border-4 rounded-r-lg"})})]}),Object(l.jsx)(k,{operationList:u,onEdit:function(e){D(!U),N(!w),O(e)},onDelete:function(e){T.deleteOperationItem(e).then((function(e){E(!F)}))},page:Q,size:Y,cantOperations:L,isSort:F,setIsSort:E,querys:X,setQuerys:Z})]})})}var q=function(e){var t=e.onSubmit,s=e.setUsername,r=e.setPassword,a=e.error,o=e.setError,d=Object(n.useState)(!1),u=Object(i.a)(d,2),m=u[0],x=u[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:Object(l.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)(b.b,{className:" h-48 w-48 m-auto text-indigo-600"}),Object(l.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Log in to your account"})]}),Object(l.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:t,children:[a&&Object(l.jsx)("div",{className:" bg-red-500 text-center p-2 text-white",children:a}),Object(l.jsx)("input",{type:"hidden",name:"remember",defaultValue:"true"}),Object(l.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:"sr-only",children:"Username"}),Object(l.jsx)("input",{name:"username",autoComplete:"current-username",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Username",onChange:function(e){o(!1),s(e.target.value)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:"sr-only",children:"Password"}),Object(l.jsxs)("div",{className:"flex flex-row border border-gray-300 rounded-b-md",children:[Object(l.jsx)("input",{name:"password",type:m?"text":"password",autoComplete:"current-password",required:!0,className:"appearance-none border-none  relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password",onChange:function(e){o(!1),r(e.target.value)}}),Object(l.jsx)("div",{className:"p-2",children:m?Object(l.jsx)(j.c,{onClick:function(){return x(!m)},className:"h-5"}):Object(l.jsx)(j.b,{onClick:function(){return x(!m)},className:"h-5"})})]})]})]}),Object(l.jsxs)("div",{className:"flex items-center justify-between",children:[Object(l.jsxs)("div",{className:"flex items-center",children:[Object(l.jsx)("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"}),Object(l.jsx)("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900",children:"Remember me"})]}),Object(l.jsx)("div",{className:"text-sm",children:Object(l.jsx)(c.b,{to:"/reset-password",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Forgot your password?"})})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[Object(l.jsx)("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:Object(l.jsx)(j.e,{className:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400","aria-hidden":"true"})}),"Log in"]}),Object(l.jsxs)("div",{className:"text-lg text-center m-2",children:["New user?"," ",Object(l.jsx)(c.b,{to:"/register",className:" text-lg text-indigo-600 hover:text-indigo-500",children:"Sign Up"})]})]})]})]})})})},L="".concat("http://localhost:4000","/api/users/login"),A=function(){var e=Object(F.a)(I.a.mark((function e(t){var s,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.post(L,t);case 3:return s=e.sent,n=s.data,console.log(n),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),s=t[0],r=t[1],a=Object(n.useState)(""),c=Object(i.a)(a,2),u=c[0],m=c[1],j=Object(n.useState)(!1),b=Object(i.a)(j,2),x=b[0],p=b[1],h=Object(o.g)(),g=Object(n.useContext)(d).signin,f=function(){var e=Object(F.a)(I.a.mark((function e(t){var n,r,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),n={username:s,password:u},e.next=5,A(n);case 5:r=e.sent,(a=r.data).token?(g(a),h.push("/")):p(a.errors),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)(q,{onSubmit:f,setUsername:r,setPassword:m,error:x,setError:p})},B="".concat("http://localhost:4000","/api/users/register"),J=function(){var e=Object(F.a)(I.a.mark((function e(t){var s,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.post(B,t);case 3:return s=e.sent,n=s.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(e){var t=e.onSubmit,s=e.handleUser,n=e.error;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:Object(l.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)(b.b,{className:" h-48 w-48 m-auto text-indigo-600"}),Object(l.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Create your account"})]}),Object(l.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:t,children:[n&&Object(l.jsx)("div",{className:" bg-red-500 text-center p-2 text-white",children:n}),Object(l.jsx)("input",{type:"hidden",name:"remember",defaultValue:"true"}),Object(l.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:"sr-only",children:"Name"}),Object(l.jsx)("input",{name:"name",autoComplete:"current-name",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Name",onChange:s})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:"sr-only",children:"Surname"}),Object(l.jsx)("input",{name:"surname",autoComplete:"current-name",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Surname",onChange:s})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:"sr-only",children:"Username"}),Object(l.jsx)("input",{name:"username",autoComplete:"current-username",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Username",onChange:s})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:"sr-only",children:"Password"}),Object(l.jsx)("input",{name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password",onChange:s})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[Object(l.jsx)("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:Object(l.jsx)(b.e,{className:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400","aria-hidden":"true"})}),"Sign up"]}),Object(l.jsxs)("div",{className:"text-lg text-center m-2",children:["Already have an account?"," ",Object(l.jsx)(c.b,{to:"/login",className:" text-lg text-indigo-600 hover:text-indigo-500",children:"Log In"})]})]})]})]})})})},Y=function(){var e=Object(n.useState)({name:"",surname:"",username:"",password:""}),t=Object(i.a)(e,2),s=t[0],r=t[1],a=Object(o.g)(),c=Object(n.useState)(!1),d=Object(i.a)(c,2),u=d[0],m=d[1],j=Object(n.useState)(""),b=Object(i.a)(j,2),x=b[0],p=b[1],h=function(){var e=Object(F.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,J(s);case 4:n=e.sent,n.data&&m(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),p("This username has been used");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Q,{onSubmit:h,handleUser:function(e){r(Object(f.a)(Object(f.a)({},s),{},Object(g.a)({},e.target.name,e.target.value))),p(""),console.log(s)},error:x}),Object(l.jsx)(w,{modalText:"User registered successfully",open:u,setOpen:u,handleConfirm:function(){m(!1),a.push("/login")},type:"confirm"})]})},M=function(e){var t=e.onSubmit,s=e.setUsername,n=e.setPassword,r=e.error,a=e.setError;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:Object(l.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)(b.b,{className:" h-48 w-48 m-auto text-indigo-600"}),Object(l.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Reset your Password"})]}),Object(l.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:t,children:[r&&Object(l.jsx)("div",{className:" bg-red-500 text-center p-2 text-white",children:r}),Object(l.jsx)("input",{type:"hidden",name:"remember",defaultValue:"true"}),Object(l.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:"sr-only",children:"Username"}),Object(l.jsx)("input",{name:"username",autoComplete:"current-username",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Username",onChange:function(e){a(!1),s(e.target.value)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:"sr-only",children:"Password"}),Object(l.jsx)("input",{name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password",onChange:function(e){a(!1),n(e.target.value)}})]})]}),Object(l.jsx)("div",{className:"flex items-center justify-center",children:Object(l.jsx)("div",{className:"text-sm",children:Object(l.jsx)(c.b,{to:"/login",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Remember your password?"})})}),Object(l.jsx)("div",{children:Object(l.jsxs)("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[Object(l.jsx)("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:Object(l.jsx)(j.d,{className:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400","aria-hidden":"true"})}),"Reset Password"]})})]})]})})})},$="".concat("http://localhost:4000","/api/users/reset-password"),G=function(){var e=Object(F.a)(I.a.mark((function e(t){var s,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.put($,t);case 3:return s=e.sent,n=s.data,console.log(n),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),s=t[0],r=t[1],a=Object(n.useState)(""),c=Object(i.a)(a,2),d=c[0],u=c[1],m=Object(n.useState)(!1),j=Object(i.a)(m,2),b=j[0],x=j[1],p=Object(n.useState)(""),h=Object(i.a)(p,2),g=h[0],f=h[1],O=Object(o.g)(),y=function(){var e=Object(F.a)(I.a.mark((function e(t){var n,r,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),n={username:s,password:d},e.next=5,G(n);case 5:r=e.sent,(a=r.data).errors?f(a.errors):x(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(M,{onSubmit:y,setUsername:r,setPassword:u,error:g,setError:f}),Object(l.jsx)(w,{modalText:"User updated successfully",open:b,setOpen:b,handleConfirm:function(){x(!1),O.push("/login")},type:"confirm"})]})};function K(){var e=Object(n.useContext)(d).isAuth;return Object(l.jsx)(c.a,{children:Object(l.jsx)(o.d,{children:e?Object(l.jsxs)(h,{children:[Object(l.jsx)(o.b,{exact:!0,path:"/",component:R}),Object(l.jsx)(o.b,{exact:!0,path:"/login",component:function(){return Object(l.jsx)(o.a,{to:"/"})}}),Object(l.jsx)(o.b,{exact:!0,path:"/register",component:function(){return Object(l.jsx)(o.a,{to:"/"})}})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.b,{exact:!0,path:"/login",component:V}),Object(l.jsx)(o.b,{exact:!0,path:"/register",component:Y}),Object(l.jsx)(o.b,{exact:!0,path:"/reset-password",component:H}),Object(l.jsx)(o.b,{path:"/",component:function(){return Object(l.jsx)(o.a,{to:"/login"})}})]})})})}s(75);a.a.render(Object(l.jsx)(u,{children:Object(l.jsx)(K,{})}),document.getElementById("app"))}},[[76,1,2]]]);
//# sourceMappingURL=main.5e1795ef.chunk.js.map