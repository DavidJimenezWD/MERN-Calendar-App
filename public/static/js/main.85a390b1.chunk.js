(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(8),r=n.n(c),o=n(25),s=n(5),i="[UI] Open Modal",u="[UI] Close Modal",l="[Event] Set Active",j="[Event] Event Logout",d="[Event] Add New",b="[Event] Clear Event",m="[Event] Update Event",p="[Event Delete]",O="[Event Loaded] Events Loaded",f="[Auth] Finish Checking login state",v="[Auth] Login",h="[Auth] Logout",x={checking:!0},g=n(49),y={events:[],activeEvent:null},w={modalOpen:!1},N=Object(o.b)({uiReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(s.a)(Object(s.a)({},e),{},{modalOpen:!0});case u:return w;default:return e}},calendarReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),{},{activeEvent:t.payload});case d:return Object(s.a)(Object(s.a)({},e),{},{events:[].concat(Object(g.a)(e.events),[t.payload])});case b:return Object(s.a)(Object(s.a)({},e),{},{activeEvent:null});case m:return Object(s.a)(Object(s.a)({},e),{},{events:e.events.map((function(e){return e._id===t.payload._id?t.payload:e}))});case p:return Object(s.a)(Object(s.a)({},e),{},{events:e.events.filter((function(t){return t._id!==e.activeEvent._id})),activeEvent:null});case O:return Object(s.a)(Object(s.a)({},e),{},{events:Object(g.a)(t.payload)});case j:return Object(s.a)({},y);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(s.a)(Object(s.a)(Object(s.a)({},e),t.payload),{},{checking:!1});case f:return Object(s.a)(Object(s.a)({},e),{},{checking:!1});case h:return{checking:!1};default:return e}}}),E=n(58),k="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,S=Object(o.d)(N,k(Object(o.a)(E.a))),C=n(32),T=n(10),D=n(9),P=n(11),A=n.n(P),I=n(18),_="https://mern-calendar-djwd.herokuapp.com/api",R=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(_,"/").concat(e);return"GET"===n?fetch(a):"POST"===n?fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)}):void 0},L=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(_,"/").concat(e),c=localStorage.getItem("token");return"GET"===n?fetch(a,{method:n,headers:{"x-token":c}}):"POST"===n||"PUT"===n?fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(t)}):"DELETE"===n?fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":c}}):void 0},U=n(16),G=n.n(U),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{end:G()(e.end).toDate(),start:G()(e.start).toDate()})}))},F=function(e){return{type:d,payload:e}},H=function(e){return{type:m,payload:e}},J=function(){return{type:p}},V=function(e){return{type:O,payload:e}},B=function(e,t){return function(){var n=Object(I.a)(A.a.mark((function n(a){var c,r;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R("auth",{email:e,password:t},"POST");case 2:return c=n.sent,n.next=5,c.json();case 5:(r=n.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),a(X({uid:r.uid,name:r.name}))):alert(r.msg);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},W=function(){return{type:f}},X=function(e){return{type:v,payload:e}},q=function(){return{type:h}},z=n(17),K=n(24),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(z.a)(t,2),c=n[0],r=n[1],o=function(){r(e)},i=function(e){var t=e.target;r(Object(s.a)(Object(s.a)({},c),{},Object(K.a)({},t.name,t.value)))};return[c,i,o]},Y=(n(74),n(2)),Z=function(){var e=Object(D.b)(),t=Q({loginEmail:"david@gmail.com",loginPassword:"123456"}),n=Object(z.a)(t,2),a=n[0],c=n[1],r=Q({registerName:"Alejandro",registerEmail:"alejandro@gmail.com",registerPassword1:"123456",registerPassword2:"123456"}),o=Object(z.a)(r,2),s=o[0],i=o[1],u=a.loginEmail,l=a.loginPassword,j=s.registerName,d=s.registerEmail,b=s.registerPassword1,m=s.registerPassword2,p=function(){var t=Object(I.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e(B(u,l));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(Y.jsx)("div",{className:"container login-container",children:Object(Y.jsxs)("div",{className:"row",children:[Object(Y.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(Y.jsx)("h3",{children:"Ingreso"}),Object(Y.jsxs)("form",{onSubmit:p,children:[Object(Y.jsx)("div",{className:"form-group",children:Object(Y.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"loginEmail",value:u,onChange:c})}),Object(Y.jsx)("div",{className:"form-group",children:Object(Y.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"loginPassword",value:l,onChange:c})}),Object(Y.jsx)("div",{className:"form-group",children:Object(Y.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(Y.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(Y.jsx)("h3",{children:"Registro"}),Object(Y.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),b!==m)return alert("Las contrase\xf1as deben de ser iguales");var n,a,c;e((n=d,a=b,c=j,function(){var e=Object(I.a)(A.a.mark((function e(t){var r,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("auth/new",{email:n,password:a,name:c},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(X({email:n,password:a,name:c}))):alert(o.msg);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(Y.jsx)("div",{className:"form-group",children:Object(Y.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"registerName",value:j,onChange:i})}),Object(Y.jsx)("div",{className:"form-group",children:Object(Y.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"registerEmail",value:d,onChange:i})}),Object(Y.jsx)("div",{className:"form-group",children:Object(Y.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"registerPassword1",value:b,onChange:i})}),Object(Y.jsx)("div",{className:"form-group",children:Object(Y.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"registerPassword2",value:m,onChange:i})}),Object(Y.jsx)("div",{className:"form-group",children:Object(Y.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},$=function(){var e=Object(D.c)((function(e){return e.auth})).name,t=Object(D.b)();return Object(Y.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4 p-2",children:[Object(Y.jsx)("span",{className:"navbar-brand",children:e}),Object(Y.jsxs)("button",{className:"btn btn-danger",onClick:function(){t(function(){var e=Object(I.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.clear(),t({type:j}),t(q());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:["Salir ",Object(Y.jsx)("i",{className:"fas fa-sign-out-alt"})]})]})},ee=(n(76),n(48)),te=(n(77),n(78),{allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}}),ne=function(e){var t=e.event,n=t.title,a=t.user;return Object(Y.jsxs)("div",{children:[Object(Y.jsxs)("span",{children:[n," "]}),Object(Y.jsx)("strong",{children:a.name})]})},ae=n(44),ce=n.n(ae),re=n(45),oe=n.n(re),se=function(){return{type:i}},ie={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};ce.a.setAppElement("#root");var ue=G()().minutes(0).seconds(0).add(1,"hours"),le=G()().minutes(0).seconds(0).add(2,"hours"),je={title:"Evento",notes:"",start:ue.toDate(),end:le.toDate()},de=function(){var e=Object(D.c)((function(e){return e.uiReducer})).modalOpen,t=Object(D.c)((function(e){return e.calendarReducer})).activeEvent,n=Object(D.b)(),c=Object(a.useState)(ue.toDate()),r=Object(z.a)(c,2),o=r[0],i=r[1],l=Object(a.useState)(le.toDate()),j=Object(z.a)(l,2),d=j[0],m=j[1],p=Object(a.useState)(je),O=Object(z.a)(p,2),f=O[0],v=O[1],h=Object(a.useState)(!0),x=Object(z.a)(h,2),g=x[0],y=x[1],w=f.notes,N=f.title,E=f.start,k=f.end;Object(a.useEffect)((function(){t&&v(t)}),[t]);var S=function(){n({type:u}),n({type:b}),v(je)},C=function(e){var t=e.target;v(Object(s.a)(Object(s.a)({},f),{},Object(K.a)({},t.name,t.value)))};return Object(Y.jsxs)(ce.a,{isOpen:e,onRequestClose:S,style:ie,className:"modal",overlayClassName:"modal-fondo",closeTimeoutMS:200,children:[Object(Y.jsx)("h1",{children:" Nuevo evento "}),Object(Y.jsx)("hr",{}),Object(Y.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a,c=G()(E),r=G()(k);return c.isSameOrAfter(r)?alert("La fecha de fin debe ser mayor"):N.trim().length<2?y(!1):(n(t?(a=f,function(){var e=Object(I.a)(A.a.mark((function e(t){var n,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L("events/".concat(a._id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(c=e.sent).ok?t(H(a)):alert("Error"+c.msg),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(I.a)(A.a.mark((function t(n,a){var c,r,o,s,i;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth,r=c.uid,o=c.name,t.prev=1,t.next=4,L("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.evento._id,e.user={_id:r,name:o},console.log(e),n(F(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(f)),y(!0),void S())},className:"container",children:[Object(Y.jsxs)("div",{className:"form-group",children:[Object(Y.jsx)("label",{children:"Fecha y hora inicio"}),Object(Y.jsx)(oe.a,{onChange:function(e){i(e),v(Object(s.a)(Object(s.a)({},f),{},{start:e}))},value:E||o,className:"form-control react-datetime-picker"})]}),Object(Y.jsxs)("div",{className:"form-group",children:[Object(Y.jsx)("label",{children:"Fecha y hora fin"}),Object(Y.jsx)(oe.a,{onChange:function(e){m(e),v(Object(s.a)(Object(s.a)({},f),{},{end:e}))},value:k||d,minDate:o,className:"form-control react-datetime-picker"})]}),Object(Y.jsx)("hr",{}),Object(Y.jsxs)("div",{className:"form-group",children:[Object(Y.jsx)("label",{children:"Titulo y notas"}),Object(Y.jsx)("input",{type:"text",className:"form-control ".concat(!g&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:N,onChange:C}),Object(Y.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(Y.jsxs)("div",{className:"form-group",children:[Object(Y.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:w,onChange:C}),Object(Y.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(Y.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",style:{width:"100%"},children:[Object(Y.jsx)("i",{className:"far fa-save"}),Object(Y.jsx)("span",{children:" Guardar"})]})]})]})},be=function(){var e=Object(D.b)();return Object(Y.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(se())},children:Object(Y.jsx)("i",{className:"fas fa-plus"})})},me=function(){var e=Object(D.b)();return Object(Y.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(I.a)(A.a.mark((function e(t,n){var a,c,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendarReducer.activeEvent._id,e.prev=1,e.next=4,L("events/".concat(a),{},"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(r=e.sent).ok?t(J()):alert("Error"+r.msg),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(Y.jsx)("i",{className:"fas fa-trash"}),Object(Y.jsx)("span",{children:"Borrar Evento"})]})};G.a.locale("es");var pe=Object(ee.b)(G.a),Oe=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e.calendarReducer})),n=t.events,c=t.activeEvent,r=Object(D.c)((function(e){return e.auth})).uid,o=Object(a.useState)(localStorage.getItem("lastWiev")||"month"),s=Object(z.a)(o,2),i=s[0],u=s[1];Object(a.useEffect)((function(){e(function(){var e=Object(I.a)(A.a.mark((function e(t){var n,a,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,c=M(a.events),t(V(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e,n]);return Object(Y.jsxs)("div",{className:"calendar-screen",children:[Object(Y.jsx)($,{}),Object(Y.jsx)(ee.a,{localizer:pe,events:n,startAccessor:"start",endAccessor:"end",messages:te,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:r===e.user._id?"#367cf7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white",height:"50px"}}},components:{event:ne},onDoubleClickEvent:function(){e(se())},onSelectEvent:function(t){e({type:l,payload:t})},onSelecting:function(e){},onView:function(e){u(e),localStorage.setItem("lastWiev",e)},view:i,titleAccessor:"PUTO TITULO"}),Object(Y.jsx)(be,{}),c&&Object(Y.jsx)(me,{}),Object(Y.jsx)(de,{})]})},fe=n(35),ve=["isAuthenticated","component"],he=function(e){var t=e.isAuthenticated,n=e.component,a=Object(fe.a)(e,ve);return Object(Y.jsx)(T.b,Object(s.a)(Object(s.a)({},a),{},{component:function(e){return t?Object(Y.jsx)(n,Object(s.a)({},e)):Object(Y.jsx)(T.a,{to:"/login"})}}))},xe=["isAuthenticated","component"],ge=function(e){var t=e.isAuthenticated,n=e.component,a=Object(fe.a)(e,xe);return Object(Y.jsx)(T.b,Object(s.a)(Object(s.a)({},a),{},{component:function(e){return t?Object(Y.jsx)(T.a,{to:"/"}):Object(Y.jsx)(n,Object(s.a)({},e))}}))},ye=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(I.a)(A.a.mark((function e(t){var n,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(X({uid:a.uid,name:a.name}))):t(W());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(Y.jsx)("h5",{children:"Espere....."}):Object(Y.jsx)(C.a,{children:Object(Y.jsx)("div",{children:Object(Y.jsxs)(T.d,{children:[Object(Y.jsx)(he,{exact:!0,path:"/",component:Oe,isAuthenticated:!!c}),Object(Y.jsx)(ge,{exact:!0,path:"/login",component:Z,isAuthenticated:!!c}),Object(Y.jsx)(T.a,{to:"/"})]})})})},we=function(){return Object(Y.jsx)(D.a,{store:S,children:Object(Y.jsx)(ye,{})})};r.a.render(Object(Y.jsx)("div",{className:"container",children:Object(Y.jsx)(we,{})}),document.getElementById("root"))},74:function(e,t,n){},78:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.85a390b1.chunk.js.map