(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{27:function(e,t,r){},28:function(e,t,r){},34:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r(1),c=r.n(n),a=r(19),i=r.n(a),j=(r(27),r(10)),d=r(11),l=r(13),u=r(12),h=r(21);function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var s=Object(h.a)(t[r],3),n=s[0],c=s[1],a=s[2];if(e[n]&&e[n]===e[c]&&e[n]===e[a])return e[n]}return null}function o(e){return Object(s.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var x=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(e){var s;return Object(j.a)(this,r),(s=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},s}return Object(d.a)(r,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();b(t)||t[e]?console.log(b(t)):(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return Object(s.jsx)(o,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"renderRestartButton",value:function(){var e=this;return Object(s.jsx)("button",{onClick:function(){return e.setState({squares:Array(9).fill(null),xIsNext:!0})},children:"Restart game"})}},{key:"render",value:function(){if(b(this.state.squares))return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:this.state.xIsNext?"O wins":"X wins"}),this.renderRestartButton()]});if(!this.state.squares.includes(null))return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:"'Draw'"}),this.renderRestartButton()]});var e="Next player: "+(this.state.xIsNext?"X":"O");return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"status",children:e}),Object(s.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(s.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(s.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(c.a.Component),O=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"game",children:[Object(s.jsx)("div",{className:"game-board",children:Object(s.jsx)(x,{})}),Object(s.jsxs)("div",{className:"game-info",children:[Object(s.jsx)("div",{}),Object(s.jsx)("ol",{})]})]})}}]),r}(c.a.Component),v=(r(28),r(8)),f=r(2);function m(){return Object(s.jsx)(v.a,{children:Object(s.jsxs)("div",{children:[Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(v.b,{to:"/",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)(v.b,{to:"/about",children:"About"})}),Object(s.jsx)("li",{children:Object(s.jsx)(v.b,{to:"/dashboard",children:"Dashboard"})}),Object(s.jsx)("li",{children:Object(s.jsx)(v.b,{to:"/noughtsandcrosses",children:"Noughts and Crosses"})})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)(f.c,{children:[Object(s.jsx)(f.a,{exact:!0,path:"/",children:Object(s.jsx)(p,{})}),Object(s.jsx)(f.a,{path:"/about",children:Object(s.jsx)(q,{})}),Object(s.jsx)(f.a,{path:"/dashboard",children:Object(s.jsx)(N,{})}),Object(s.jsx)(f.a,{path:"/noughtsandcrosses",children:Object(s.jsx)(O,{})})]})]})})}function p(){return Object(s.jsx)("div",{children:Object(s.jsx)("h2",{children:"Home"})})}function q(){return Object(s.jsx)("div",{children:Object(s.jsx)("h2",{children:"About"})})}function N(){return Object(s.jsx)("div",{children:Object(s.jsx)("h2",{children:"Dashboard"})})}var g=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,35)).then((function(t){var r=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;r(e),s(e),n(e),c(e),a(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),g()}},[[34,1,2]]]);
//# sourceMappingURL=main.e41511ef.chunk.js.map