(this.webpackJsonpbetting=this.webpackJsonpbetting||[]).push([[0],{25:function(e,t,a){e.exports=a(38)},30:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(19),o=a.n(c),r=a(4),l=a(20),i=a(21),d=a(24),m=a(23),u=a(9),h=a(2),v=(a(30),a(12)),p=a(14);var f=function(e){var t=e.item,a=e.display,n=e.checkFlag;return s.a.createElement("div",null,s.a.createElement("span",{className:"names-of-teams"},"".concat(t.hosts," - ").concat(t.visitors)),s.a.createElement("span",{className:"types"},"".concat(t.tip," - ").concat(t.odds.toFixed(2))),s.a.createElement("span",{style:a&&n?{display:"block"}:{display:"none"}},t.active?s.a.createElement(v.a,{icon:p.a,style:{color:"green"}}):s.a.createElement(v.a,{icon:p.b,style:{color:"red"}})))};var E=function(e){var t=e.match,a=e.handleClick;return s.a.createElement("div",{className:"match",id:t.id},s.a.createElement("span",{className:"teams-names"},"".concat(t.hosts," - ").concat(t.visitors)),s.a.createElement("div",{className:"tips"},s.a.createElement("div",null,s.a.createElement("span",null,"1"),s.a.createElement("button",{onClick:function(){return a(t.id,1,t.active,t.hostsOdds)},className:t.active&&1===t.tip?"active":null},t.hostsOdds.toFixed(2))),s.a.createElement("div",null,s.a.createElement("span",null,"0"),s.a.createElement("button",{onClick:function(){return a(t.id,0,t.active,t.drawOdds)},className:t.active&&0===t.tip?"active":null},t.drawOdds.toFixed(2))),s.a.createElement("div",null,s.a.createElement("span",null,"2"),s.a.createElement("button",{onClick:function(){return a(t.id,2,t.active,t.visitorsOdds)},className:t.active&&2===t.tip?"active":null},t.visitorsOdds.toFixed(2)))))},y=function(e){var t=Object(r.a)(e.matches);t=t.map((function(t){return s.a.createElement(E,{key:t.id,match:t,handleClick:e.handleClick})}));var a=Object(r.a)(e.matchesAdd);return a.sort((function(e,t){return e.id-t.id})),a=a.map((function(e){return s.a.createElement(f,{key:e.id,item:e,display:!1})})),s.a.createElement("main",{className:"main"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"matches"},t),s.a.createElement("div",{className:"matchesAdd"},s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"type-matches"},a),s.a.createElement("div",{className:"summary"},a.length>0?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement("span",{className:"grow"},"Overall odds:"),s.a.createElement("strong",null,e.odds.toFixed(2))),s.a.createElement("div",null,s.a.createElement("span",{className:"grow"},"Total stake ($):"),s.a.createElement("input",{type:"number",min:"1",max:e.money>=1?e.money:1,value:e.moneyToPay,onChange:e.handleChange})),s.a.createElement("div",null,s.a.createElement("span",{className:"grow"},"Possible winnings:"),s.a.createElement("span",null,"".concat(e.moneyToWin.toFixed(2)," $"))),s.a.createElement("div",null,s.a.createElement("button",{className:"clear",onClick:e.clearMatchesAdd},"Remove all"),s.a.createElement("span",{className:"grow"}),s.a.createElement("button",{onClick:e.addBet},"Bet"))):s.a.createElement("div",{className:"empty"},"Coupon is empty"))))))};var g=function(e){var t=e.coupon,a=e.odds,n=e.moneyToPay,c=e.moneyToWin;return s.a.createElement("div",{className:"coupon"},s.a.createElement("div",{className:"element"},t),s.a.createElement("div",{className:"summary"},s.a.createElement("div",null,s.a.createElement("span",null,"Overall odds: "),s.a.createElement("span",null,s.a.createElement("strong",null,a.toFixed(2)))),s.a.createElement("div",null,s.a.createElement("span",null,"Stake: "),s.a.createElement("span",null,s.a.createElement("strong",null,n,"$"))),s.a.createElement("div",null,s.a.createElement("span",null,"Possible win: "),s.a.createElement("span",null,s.a.createElement("strong",null,c.toFixed(2),"$")))))},O=function(e){var t=Object(r.a)(e.results).map((function(e){return s.a.createElement("div",{className:"result",key:e.id},s.a.createElement("span",{className:"names-of-teams"},"".concat(e.hosts," - ").concat(e.visitors)),s.a.createElement("span",{className:"types"},e.score))})),a=Object(r.a)(e.coupons).map((function(t,a){var n=t.matchAdd.map((function(t){return s.a.createElement(f,{key:t.id,item:t,display:!0,checkFlag:e.checkFlag})}));return s.a.createElement(g,{key:a,coupon:n,odds:t.odds,moneyToPay:t.moneyToPay,moneyToWin:t.moneyToWin})}));return s.a.createElement("main",{className:"coupons"},s.a.createElement("div",{className:"container"},e.coupons.length?a:s.a.createElement("div",{className:"no-coupons"},"You don't have coupons"),s.a.createElement("button",{className:"check-result",onClick:e.checkResult,style:e.checkFlag||!a.length?{display:"none"}:{display:"block"}},"Check result")),s.a.createElement("div",{className:"container",style:e.checkFlag?{display:"block"}:{display:"none"}},t))};var k=function(e){var t=e.money;return s.a.createElement("header",null,s.a.createElement("span",null,"My money: ",t.toFixed(2),"$"),s.a.createElement(h.a,{exact:!0,path:"/"},s.a.createElement(u.b,{to:"/coupons",className:"change-site"},"My cupons")),s.a.createElement(h.a,{exact:!0,path:"/coupons"},s.a.createElement(u.b,{to:"/",className:"change-site"},"Back")))},b=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={matches:[],matchesAdd:[],coupons:[],results:[],money:100,moneyToPay:1,checkFlag:!1},e.handleClick=function(t,a,n,s){var c=Object(r.a)(e.state.matches),o=Object(r.a)(e.state.matchesAdd);n?n&&(a===o[o.findIndex((function(e){return e.id===t}))].tip?(o.splice(o.findIndex((function(e){return e.id===t})),1),c=c.filter((function(e){return e.id!==t})).concat(c.filter((function(e){return e.id===t})).map((function(e){return{id:e.id,hosts:e.hosts,visitors:e.visitors,hostsOdds:e.hostsOdds,drawOdds:e.drawOdds,visitorsOdds:e.visitorsOdds,active:!1,tip:a}})))):(c=c.filter((function(e){return e.id!==t})).concat(c.filter((function(e){return e.id===t})).map((function(e){return{id:e.id,hosts:e.hosts,visitors:e.visitors,hostsOdds:e.hostsOdds,drawOdds:e.drawOdds,visitorsOdds:e.visitorsOdds,active:!0,tip:a}}))),o.splice(o.findIndex((function(e){return e.id===t})),1),o=o.concat(c.filter((function(e){return e.id===t})).map((function(e){return{id:e.id,hosts:e.hosts,visitors:e.visitors,odds:s,tip:a}}))))):(o=o.concat(c.filter((function(e){return e.id===t&&!e.active})).map((function(e){return{id:e.id,hosts:e.hosts,visitors:e.visitors,odds:s,tip:a}}))),c=c.filter((function(e){return e.id!==t})).concat(c.filter((function(e){return e.id===t})).map((function(e){return{id:e.id,hosts:e.hosts,visitors:e.visitors,hostsOdds:e.hostsOdds,drawOdds:e.drawOdds,visitorsOdds:e.visitorsOdds,active:!0,tip:a}})))),c.sort((function(e,t){return e.id-t.id})),e.setState({matchesAdd:o,matches:c})},e.clearMatchesAdd=function(){var t=Object(r.a)(e.state.matches);t.map((function(e){return e.active=!1})),e.setState({matchesAdd:[],matches:t,moneyToPay:1})},e.handleChange=function(t){e.setState({moneyToPay:t.target.value})},e.addBet=function(){if(e.state.checkFlag)alert("You check results");else{for(var t=1,a=0,n=Object(r.a)(e.state.matchesAdd);a<n.length;a++){t*=n[a].odds}var s=e.state,c=s.money,o=s.moneyToPay;if(c>=o&&o>=1){var l=Object(r.a)(e.state.coupons);l.push({matchAdd:Object(r.a)(e.state.matchesAdd),moneyToPay:o,odds:t,moneyToWin:e.state.moneyToPay*t*.88}),e.setState({coupons:l,money:c-o}),e.clearMatchesAdd()}}},e.checkResult=function(){for(var t=Object(r.a)(e.state.coupons),a=function(a){for(var n=Object(r.a)(e.state.results),s=[],c=function(e){s=s.concat(n[n.findIndex((function(n){return n.id===t[a].matchAdd[e<t[a].matchAdd.length?e:t[a].matchAdd.length-1].id}))]),t[a].matchAdd[e<t[a].matchAdd.length?e:t[a].matchAdd.length-1].tip===s[e<t[a].matchAdd.length?e:t[a].matchAdd.length-1].result?t[a].matchAdd[e<t[a].matchAdd.length?e:t[a].matchAdd.length-1].active=!0:t[a].matchAdd[e<t[a].matchAdd.length?e:t[a].matchAdd.length-1].active=!1},o=0;o<n.length;o++)c(o);e.setState({coupons:t,checkFlag:!0})},n=0;n<t.length;n++)a(n);e.addMoney()},e.addMoney=function(){for(var t=Object(r.a)(e.state.coupons),a=function(a){t[a].matchAdd.filter((function(e){return!0===e.active})).length===t[a].matchAdd.length&&e.setState((function(e){return{money:e.money+t[a].moneyToWin}}))},n=0;n<t.length;n++)a(n)},e.generateScoors=function(){var t=["1:0","2:0","3:0","4:0","5:0","2:1","3:1","3:2","4:1","4:2","4:3","5:1","5:2","5:3","5:4"],a=["0:0","1:1","2:2","3:3","4:4","5:5"],n=["0:1","0:2","0:3","0:4","0:5","1:2","1:3","2:3","1:4","2:4","3:4","1:5","2:5","3:5","4:5"],s=Object(r.a)(e.state.matches).map((function(e){var s=Math.floor(e.visitorsOdds/(e.hostsOdds+e.drawOdds+e.visitorsOdds)*100),c=Math.floor(e.drawOdds/(e.hostsOdds+e.drawOdds+e.visitorsOdds)*100),o=Math.floor(e.hostsOdds/(e.hostsOdds+e.drawOdds+e.visitorsOdds)*100),r=Math.floor(Math.random()*(s+c+o)),l=null;return r<=s?l={score:t[Math.floor(Math.random()*t.length)],result:1,id:e.id,hosts:e.hosts,visitors:e.visitors}:r<=s+c?l={score:a[Math.floor(Math.random()*a.length)],result:0,id:e.id,hosts:e.hosts,visitors:e.visitors}:r<=s+c+o&&(l={score:n[Math.floor(Math.random()*n.length)],result:2,id:e.id,hosts:e.hosts,visitors:e.visitors}),l}));e.state.results.length<1&&e.setState({results:s})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("data/betting.json").then((function(e){return e.json()})).then((function(t){e.setState({matches:t.matches}),e.generateScoors()}))}},{key:"render",value:function(){for(var e=this,t=this.state,a=t.matches,n=t.matchesAdd,c=t.coupons,o=t.money,l=t.moneyToPay,i=t.checkFlag,d=t.results,m=1,v=0,p=Object(r.a)(this.state.matchesAdd);v<p.length;v++){var f=p[v];m*=f.odds}var E=this.state.moneyToPay*m*.88;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{basename:"/betting.github.io"},s.a.createElement(k,{money:this.state.money}),s.a.createElement(h.c,null,s.a.createElement(h.a,{exact:!0,path:"/",render:function(){return s.a.createElement(y,{matches:a,matchesAdd:n,coupons:c,money:o,moneyToPay:l,handleClick:e.handleClick,clearMatchesAdd:e.clearMatchesAdd,handleChange:e.handleChange,addBet:e.addBet,odds:m,moneyToWin:E,checkFlag:i})}}),s.a.createElement(h.a,{exact:!0,path:"/coupons",render:function(){return s.a.createElement(O,{matches:a,coupons:c,money:o,checkResult:e.checkResult,checkFlag:i,results:d})}})),s.a.createElement("footer",null,"Rafa\u0142 Dro\u017cd\u017c ")))}}]),a}(s.a.Component);o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ab74891a.chunk.js.map