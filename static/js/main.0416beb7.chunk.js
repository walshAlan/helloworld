(this.webpackJsonphelloworld=this.webpackJsonphelloworld||[]).push([[0],{26:function(e,t,s){},28:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var r=s(1),n=s.n(r),c=s(18),a=s.n(c),i=(s(26),s(10)),j=s(11),l=s(12),d=s(14),u=s(21);function h(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s=0;s<t.length;s++){var r=Object(u.a)(t[s],3),n=r[0],c=r[1],a=r[2];if(e[n]&&e[n]===e[c]&&e[n]===e[a])return e[n]}return null}var o=s(0);function b(e){return Object(o.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var x=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var r;return Object(i.a)(this,s),(r=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},r}return Object(j.a)(s,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();h(t)||t[e]?console.log(h(t)):(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return Object(o.jsx)(b,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"renderRestartButton",value:function(){var e=this;return Object(o.jsx)("button",{onClick:function(){return e.setState({squares:Array(9).fill(null),xIsNext:!0})},children:"Restart game"})}},{key:"render",value:function(){if(h(this.state.squares))return Object(o.jsxs)("div",{className:"end-game-wrapper",children:[Object(o.jsx)("div",{className:"end-game-text",children:this.state.xIsNext?"O wins":"X wins"}),this.renderRestartButton()]});if(!this.state.squares.includes(null))return Object(o.jsxs)("div",{className:"end-game-wrapper",children:[Object(o.jsx)("div",{className:"end-game-text",children:"Draw"}),this.renderRestartButton()]});var e="Next player: "+(this.state.xIsNext?"X":"O");return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"status",children:e}),Object(o.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(o.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(o.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),s}(n.a.Component),O=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"game",children:[Object(o.jsx)("div",{className:"game-board",children:Object(o.jsx)(x,{})}),Object(o.jsxs)("div",{className:"game-info",children:[Object(o.jsx)("div",{}),Object(o.jsx)("ol",{})]})]})}}]),s}(n.a.Component),v=(s(28),s(8)),f=s(2);function m(){return Object(o.jsx)(v.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(v.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(v.b,{to:"/about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(v.b,{to:"/dashboard",children:"Dashboard"})}),Object(o.jsx)("li",{children:Object(o.jsx)(v.b,{to:"/noughtsandcrosses",children:"Noughts and Crosses"})})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)(f.c,{children:[Object(o.jsx)(f.a,{exact:!0,path:"/",children:Object(o.jsx)(N,{})}),Object(o.jsx)(f.a,{path:"/about",children:Object(o.jsx)(g,{})}),Object(o.jsx)(f.a,{path:"/dashboard",children:Object(o.jsx)(p,{})}),Object(o.jsx)(f.a,{path:"/noughtsandcrosses",children:Object(o.jsx)(O,{})})]})]})})}function N(){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"Home"})})}function g(){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"About"})})}function p(){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"Dashboard"})})}var q=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,38)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),r(e),n(e),c(e),a(e)}))};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),q()}},[[37,1,2]]]);
//# sourceMappingURL=main.0416beb7.chunk.js.map