(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(9),r=s.n(c),l=(s(14),s(8)),i=s(2),j=s(5),d=s(7),b=s(0),u=function(e){return""===e.errMsg?null:Object(b.jsx)(n.a.Fragment,{children:Object(b.jsx)("span",{children:e.errMsg})})},o=function(e){var t=Object(a.useState)(""),s=Object(i.a)(t,2),n=s[0],c=s[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),o=l[0],O=l[1],h=Object(a.useState)(""),x=Object(i.a)(h,2),m=x[0],v=x[1],p=Object(a.useState)(""),g=Object(i.a)(p,2),f=g[0],P=g[1],C=Object(a.useState)(""),y=Object(i.a)(C,2),N=y[0],S=y[1],B=Object(a.useState)(""),k=Object(i.a)(B,2),A=k[0],T=k[1],z=Object(a.useState)(""),M=Object(i.a)(z,2),w=M[0],E=M[1],F=Object(a.useState)(""),Z=Object(i.a)(F,2),J=Z[0],D=Z[1],I=Object(a.useState)({Present:!1,Permanent:!1,Both:!1}),X=Object(i.a)(I,2),$=X[0],q=X[1],G=Object(a.useState)(""),H=Object(i.a)(G,2),K=H[0],L=H[1],Q=Object(a.useState)(""),R=Object(i.a)(Q,2),U=R[0],V=R[1],W=Object(a.useState)(""),Y=Object(i.a)(W,2),_=Y[0],ee=Y[1],te=Object(a.useState)(""),se=Object(i.a)(te,2),ae=se[0],ne=se[1],ce=Object(a.useState)(""),re=Object(i.a)(ce,2),le=re[0],ie=re[1],je=Object(a.useState)(""),de=Object(i.a)(je,2),be=de[0],ue=de[1],oe=Object(a.useState)(!1),Oe=Object(i.a)(oe,2),he=Oe[0],xe=Oe[1],me=Object(a.useState)(!1),ve=Object(i.a)(me,2),pe=ve[0],ge=ve[1],fe=Object(a.useState)(!1),Pe=Object(i.a)(fe,2),Ce=Pe[0],ye=Pe[1],Ne=Object(a.useState)(!1),Se=Object(i.a)(Ne,2),Be=Se[0],ke=Se[1],Ae=Object(a.useState)(!1),Te=Object(i.a)(Ae,2),ze=Te[0],Me=Te[1],we=Object(a.useState)(!1),Ee=Object(i.a)(we,2),Fe=Ee[0],Ze=Ee[1],Je=Object(a.useState)(!1),De=Object(i.a)(Je,2),Ie=De[0],Xe=De[1],$e=function(){c(""),v(""),O(""),S(""),P(""),T(""),D(""),q({Present:!1,Permanent:!1,Both:!1}),L(""),ee(""),ie(""),V(""),ue(""),ne(""),ge(!1),ye(!1),ke(!1),Ze(!1),Me(!1),Xe(!1)},qe=/^[a-zA-Z ]+$/,Ge=function(e){D(e.target.value),q((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(j.a)({},e.target.value,!0))}))};Object(a.useEffect)((function(){pe&&""===K&&Ce&&""===U&&ze&&""===ae&&Fe&&""===le&&Ie&&""===be&&Be&&""===_&&""!==J&&xe(!0)}),[K,U,ae,le,be,_,pe,Be,Ce,Fe,ze,Ie,J]);var He=function(){$e(),E(""),e.onClose()};return e.show?Object(b.jsx)("div",{onClick:He,className:"bg",children:Object(b.jsx)("div",{onClick:function(e){e.stopPropagation()},children:Object(b.jsxs)("div",{className:"pop",children:[Object(b.jsx)("h3",{children:"Fill Address details"}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"close",onClick:He,children:"X"})}),Object(b.jsxs)("div",{onChange:function(e){E(e.target.value),""!==w&&$e()},className:"radio",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"radio",id:"personal",name:"address-type",value:"Personal"}),Object(b.jsx)("label",{htmlFor:"personal",children:"Personal"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"radio",id:"business",name:"address-type",value:"Business"}),Object(b.jsx)("label",{htmlFor:"business",children:"Business"})]})]}),w&&Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault();var s={addressType:w,name:n.trim(),mobile:o.trim(),addrss:m.trim(),city:f.trim(),states:N.trim(),zip:A.trim(),type:J.trim()};e.onAddAddress(s),E(""),$e(),"Personal"===w?e.onTabChangeToPersonal():"Business"===w&&e.onTabChangeToBusiness()},id:"address-form",children:[Object(b.jsxs)("div",{className:"fields",children:[Object(b.jsxs)("div",{onClick:function(){ge(!0)},onBlur:function(){pe&&""===n&&L("Please Enter a value")},children:[Object(b.jsx)("label",{children:"Name"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",onChange:function(e){""===e.target.value.trim()?L("Please enter a value"):e.target.value.trim().match(qe)?L(""):L("Chatercters from a-z/A-Z allowed"),ge(!0),c(e.target.value)},value:n,className:"input"}),Object(b.jsx)(u,{errMsg:K})]}),Object(b.jsxs)("div",{onClick:function(){ye(!0)},onBlur:function(){Ce&&""===o&&V("Please Enter a value")},children:[Object(b.jsx)("label",{children:"Mobile No."}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",onChange:function(e){""===e.target.value.trim()?V("Please enter a value"):isNaN(e.target.value.trim())?V("Please enter numeric value"):10!==e.target.value.trim().length?V("Please enter a valid 10 digit mobile number"):V(""),ye(!0),O(e.target.value)},value:o,className:"input"}),Object(b.jsx)(u,{errMsg:U})]}),Object(b.jsxs)("div",{onClick:function(){ke(!0)},onBlur:function(){Be&&""===m&&ee("Please Enter a value")},children:[Object(b.jsx)("label",{children:"Address"}),Object(b.jsx)("br",{}),Object(b.jsx)("textarea",{type:"text",onChange:function(e){""===e.target.value.trim()?ee("Please enter a value"):e.target.value.trim().split(" ").length<3?ee("Address should have a length of atleast 3 words"):ee(""),ke(!0),v(e.target.value)},value:m})]}),Object(b.jsx)(u,{errMsg:_}),Object(b.jsxs)("div",{onClick:function(){Ze(!0)},onBlur:function(){Fe&&""===f&&ie("Please Enter a value")},children:[Object(b.jsx)("label",{children:"City"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",onChange:function(e){""===e.target.value.trim()?ie("Please enter a value"):e.target.value.trim().match(qe)?ie(""):ie("Chatercters from a-z/A-Z allowed"),Ze(!0),P(e.target.value)},value:f,className:"input"})]}),Object(b.jsx)(u,{errMsg:le}),Object(b.jsxs)("div",{onClick:function(){Me(!0)},onBlur:function(){ze&&""===N&&ne("Please Enter a value")},children:[Object(b.jsx)("label",{children:"State"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",onChange:function(e){""===e.target.value.trim()?ne("Please enter a value"):e.target.value.trim().match(qe)?ne(""):ne("Chatercters from a-z/A-Z allowed"),Me(!0),S(e.target.value)},value:N,className:"input"})]}),Object(b.jsx)(u,{errMsg:ae}),Object(b.jsxs)("div",{onClick:function(){Xe(!0)},onBlur:function(){Ie&&""===A&&ue("Please Enter a value")},children:[Object(b.jsx)("label",{children:"Postal Code/Zip Code"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",onChange:function(e){""===e.target.value.trim()?ue("Please enter a value"):isNaN(e.target.value.trim())?ue("Please enter numeric value"):6!==e.target.value.trim().length?ue("Please enter a valid 6 digit zip pin"):ue(""),Xe(!0),T(e.target.value)},value:A,className:"input"})]}),Object(b.jsx)(u,{errMsg:be}),Object(b.jsxs)("div",{className:"radios",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"radio",id:"Present",name:"address-status",value:"Present",checked:$.present,onChange:Ge}),Object(b.jsx)("label",{htmlFor:"Present",children:"Present"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"radio",id:"Permanent",name:"address-status",value:"Permanent",checked:$.permanent,onChange:Ge}),Object(b.jsx)("label",{htmlFor:"Permanent",children:"Permanent"})]}),Object(b.jsxs)("div",{className:"",children:[Object(b.jsx)("input",{type:"radio",id:"Both",name:"address-status",value:"Both",checked:$.both,onChange:Ge}),Object(b.jsx)("label",{htmlFor:"Both",children:"Both"})]})]})]}),Object(b.jsxs)("div",{className:"btns",children:[Object(b.jsx)("button",{type:"submit",className:"save",disabled:!he,children:"Save"}),Object(b.jsx)("button",{type:"reset",className:"clear",onClick:$e,children:"Clear"})]})]})]})})}):null};s(16);var O=function(){var e=Object(a.useState)([{name:"Sample",mobile:"1234567890",addrss:"a a a",city:"Chennai",states:"Tamil Nadu",zip:"123456",type:"Present"}]),t=Object(i.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)([{name:"cool",mobile:"1234567890",addrss:"a a a",city:"Chennai",states:"Tamil Nadu",zip:"123456",type:"Both"}]),r=Object(i.a)(c,2),j=r[0],d=r[1],u=Object(a.useState)("Personal"),O=Object(i.a)(u,2),h=O[0],x=O[1],m=Object(a.useState)(!1),v=Object(i.a)(m,2),p=v[0],g=v[1],f=function(){x("Personal")},P=function(){x("Business")};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h2",{className:"App-header",children:"Address Book"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)("table",{children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{className:" ".concat("Personal"===h?"buttons active":"buttons"),value:"Personal",onClick:f,children:"Personal"}),Object(b.jsx)("th",{className:"".concat("Business"===h?"buttons active":"buttons"),value:"Business",onClick:P,children:"Business"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Name"}),Object(b.jsx)("td",{children:"Mobile No."}),Object(b.jsx)("td",{children:"Address"}),Object(b.jsx)("td",{children:"City"}),Object(b.jsx)("td",{children:"State"}),Object(b.jsx)("td",{children:"Zip"}),Object(b.jsx)("td",{children:"Present/Permanent Address"})]}),"Personal"===h&&(0===s.length?Object(b.jsx)("h3",{children:"No personal records to display"}):s.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.mobile}),Object(b.jsx)("td",{children:e.addrss}),Object(b.jsx)("td",{children:e.city}),Object(b.jsx)("td",{children:e.states}),Object(b.jsx)("td",{children:e.zip}),Object(b.jsx)("td",{children:e.type})]},e.mobile+e.zip)}))),"Business"===h&&(0===j.length?Object(b.jsx)("h3",{children:"No business records to display."}):j.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.mobile}),Object(b.jsx)("td",{children:e.addrss}),Object(b.jsx)("td",{children:e.city}),Object(b.jsx)("td",{children:e.states}),Object(b.jsx)("td",{children:e.zip}),Object(b.jsx)("td",{children:e.type})]},e.mobile+e.zip)})))]})})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"add",onClick:function(){g(!0)},children:"Add"})}),Object(b.jsx)(o,{show:p,onClose:function(){g(!1)},onAddAddress:function(e){"Personal"===e.addressType&&n((function(t){return[].concat(Object(l.a)(t),[e])})),"Business"===e.addressType&&d((function(t){return[].concat(Object(l.a)(t),[e])})),g(!1)},onTabChangeToPersonal:f,onTabChangeToBusiness:P})]})]})};r.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.93a2637d.chunk.js.map