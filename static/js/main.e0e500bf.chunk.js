(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{27:function(e,t,s){},28:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var r=s(1),n=s(0),c=s.n(n),a=s(19),i=s.n(a),j=(s(27),s(10)),d=s(11),h=s(13),l=s(12),u=s(21);function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s=0;s<t.length;s++){var r=Object(u.a)(t[s],3),n=r[0],c=r[1],a=r[2];if(e[n]&&e[n]===e[c]&&e[n]===e[a])return e[n]}return null}function o(e){return Object(r.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var x=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(e){var r;return Object(j.a)(this,s),(r=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},r}return Object(d.a)(s,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();b(t)||t[e]?console.log(b(t)):(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return Object(r.jsx)(o,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){if(b(this.state.squares))return Object(r.jsx)("div",{children:this.state.xIsNext?"O wins":"X wins"});var e="Next player: "+(this.state.xIsNext?"X":"O");return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"status",children:e}),Object(r.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(r.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(r.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),s}(c.a.Component),O=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"game",children:[Object(r.jsx)("div",{className:"game-board",children:Object(r.jsx)(x,{})}),Object(r.jsxs)("div",{className:"game-info",children:[Object(r.jsx)("div",{}),Object(r.jsx)("ol",{})]})]})}}]),s}(c.a.Component),v=(s(28),s(8)),f=s(2);function m(){return Object(r.jsx)(v.a,{children:Object(r.jsxs)("div",{children:[Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(v.b,{to:"/",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(v.b,{to:"/about",children:"About"})}),Object(r.jsx)("li",{children:Object(r.jsx)(v.b,{to:"/dashboard",children:"Dashboard"})}),Object(r.jsx)("li",{children:Object(r.jsx)(v.b,{to:"/noughtsandcrosses",children:"Noughts and Crosses"})})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)(f.c,{children:[Object(r.jsx)(f.a,{exact:!0,path:"/",children:Object(r.jsx)(p,{})}),Object(r.jsx)(f.a,{path:"/about",children:Object(r.jsx)(q,{})}),Object(r.jsx)(f.a,{path:"/dashboard",children:Object(r.jsx)(N,{})}),Object(r.jsx)(f.a,{path:"/noughtsandcrosses",children:Object(r.jsx)(O,{})})]})]})})}function p(){return Object(r.jsx)("div",{children:Object(r.jsx)("h2",{children:"Home"})})}function q(){return Object(r.jsx)("div",{children:Object(r.jsx)("h2",{children:"About"})})}function N(){return Object(r.jsx)("div",{children:Object(r.jsx)("h2",{children:"Dashboard"})})}var g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,35)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),r(e),n(e),c(e),a(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root")),g()}},[[34,1,2]]]);
//# sourceMappingURL=main.e0e500bf.chunk.js.map