(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),r=n(6),i=n(8),u=n(1),a=(n(13),n(14),n(4)),l=n.n(a),b=n(0),j=function(t){var e=t.goods;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})},h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var d=function(){var t=Object(u.useState)(c.NONE),e=Object(r.a)(t,2),n=e[0],s=e[1],o=Object(u.useState)(!1),a=Object(r.a)(o,2),d=a[0],N=a[1],O=function(t,e,n){var s=Object(i.a)(t);return e!==c.NONE&&s.sort((function(t,n){switch(e){case c.ALPHABET:return t.localeCompare(n);case c.LENGTH:return t.length-n.length;default:return 0}})),n&&s.reverse(),s}(h,n,d);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button","is-info",{"is-light":n!==c.ALPHABET}),onClick:function(){return s(c.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button","is-success",{"is-light":n!==c.LENGTH}),onClick:function(){return s(c.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button","is-info",{"is-light":!1===d}),onClick:function(){return N(!d)},children:"Reverse"}),(n!==c.NONE||!0===d)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(c.NONE),N(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)(j,{goods:O})})]})};o.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6e9ab031.chunk.js.map