(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),r=n(6),i=n(8),u=n(1),a=(n(13),n(14),n(4)),l=n.n(a),b=n(0),j=function(t){var e=t.goods;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})},d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var h=function(){var t=Object(u.useState)(!1),e=Object(r.a)(t,2),n=e[0],s=e[1],o=Object(u.useState)(c.NONE),a=Object(r.a)(o,2),h=a[0],N=a[1],O=function(t,e,n){var s=Object(i.a)(t);return e!==c.NONE&&s.sort((function(t,n){switch(e){case c.ALPHABET:return t.localeCompare(n);case c.LENGTH:return t.length-n.length;default:return 0}})),n&&s.reverse(),s}(d,h,n);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button","is-info",{"is-light":h!==c.ALPHABET}),onClick:function(){return N(c.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button","is-success",{"is-light":h!==c.LENGTH}),onClick:function(){return N(c.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button","is-warning",{"is-light":!1===n}),onClick:function(){return s((function(t){return!t}))},children:"Reverse"}),(h!==c.NONE||!0===n)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return N(c.NONE),void s(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)(j,{goods:O})})]})};o.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ff6f199c.chunk.js.map