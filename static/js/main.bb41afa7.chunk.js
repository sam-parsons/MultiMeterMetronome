(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),i=a.n(r),c=(a(17),a(7)),s=a(2),l=a(3),p=a(5),u=a(4),m=a(6),d=(a(18),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"num-beats-div"},o.a.createElement("select",{id:"num-beats-input",defaultValue:"4",onChange:function(){e.props.updateTimeSig(),e.props.playing&&e.props.restartPlaying()}},o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"),o.a.createElement("option",{value:"8"},"8"),o.a.createElement("option",{value:"9"},"9"),o.a.createElement("option",{value:"10"},"10"),o.a.createElement("option",{value:"11"},"11"),o.a.createElement("option",{value:"12"},"12"),o.a.createElement("option",{value:"13"},"13"),o.a.createElement("option",{value:"14"},"14"),o.a.createElement("option",{value:"15"},"15"),o.a.createElement("option",{value:"16"},"16"),o.a.createElement("option",{value:"17"},"17"),o.a.createElement("option",{value:"18"},"18"),o.a.createElement("option",{value:"19"},"19"),o.a.createElement("option",{value:"20"},"20")),o.a.createElement("div",{id:"num-beats-desc"},"# of beats"))}}]),t}(o.a.Component)),h=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"subdivision-div"},o.a.createElement("select",{id:"subdivision-input",defaultValue:"2",onChange:function(){e.props.updateTimeSig(),e.props.playing&&e.props.restartPlaying()}},o.a.createElement("option",{value:"1"},"2"),o.a.createElement("option",{value:"2"},"4"),o.a.createElement("option",{value:"3"},"8"),o.a.createElement("option",{value:"4"},"16"),o.a.createElement("option",{value:"5"},"32")),o.a.createElement("div",{id:"subdivision-desc"},"subdivision"))}}]),t}(o.a.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"play-stop-div"},o.a.createElement("button",{className:"top-btns",id:"play-stop-btn",onClick:function(){e.props.updateMetronome(),e.props.togglePlaying()}},this.props.playing?"Stop":"Play"))}}]),t}(o.a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"tempo-div"},o.a.createElement("input",{id:"tempo-sld",type:"range",min:"30",max:"400",defaultValue:"120",onChange:function(){return e.props.updateBPM()}}),o.a.createElement("div",{id:"tempo-value"},o.a.createElement("div",{id:"tempo-value-header"},"Quarter notes per minute: ",this.props.bpm)))}}]),t}(o.a.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"dimension"},o.a.createElement("div",{className:"time-signature"},o.a.createElement(d,{playing:this.props.playing,timeSig:this.props.timeSig,updateTimeSig:this.props.updateTimeSig,updateMetronome:this.props.updateMetronome,restartPlaying:this.props.restartPlaying}),o.a.createElement(h,{playing:this.props.playing,timeSig:this.props.timeSig,updateTimeSig:this.props.updateTimeSig,restartPlaying:this.props.restartPlaying,updateMetronome:this.props.updateMetronome})),o.a.createElement("div",{className:"play-export"},o.a.createElement(v,{togglePlaying:this.props.togglePlaying,playing:this.props.playing,updateMetronome:this.props.updateMetronome})),o.a.createElement(g,{updateBPM:this.props.updateBPM,bpm:this.props.bpm}))}}]),t}(o.a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"top-row",onClick:function(t){e.props.updateMetronome()}})}}]),t}(o.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"bottom-row",onClick:function(t){e.props.updateMetronome()}})}}]),t}(o.a.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"step-sequence"},o.a.createElement(y,{updateMetronome:this.props.updateMetronome}),o.a.createElement(f,{updateMetronome:this.props.updateMetronome}))}}]),t}(o.a.Component),E=a(1),S=a.n(E),j=a(10),O=a.n(j),M=new S.a.PolySynth(2,S.a.Synth).toMaster();O()(S.a.context).then(function(){console.log("start audio context triggered")});var C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).state={playing:!1,bpm:120,loopStatus:!1,notes:["C5","EB5"],timeSig:[4,4],renderedNotes:[],metronomeContainer:[],tempDivisor:4,placement:0,visualizeIndex:0,eventCache:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.generateMetronome(),this.generateStepSequence()}},{key:"togglePlaying",value:function(){var e=this;this.state.playing?this.setState({playing:!1,seqIsPlaying:!1},function(){S.a.Transport.stop(),console.log("playing stopped"),S.a.Transport.loop=!1,S.a.Transport.loopEnd=0}):this.setState({playing:!0,seqIsPlaying:!1},function(){S.a.Transport.loopStart=0,console.log("calculated metronome length: ".concat(e.calcMetLength())),S.a.Transport.loopEnd=e.calcMetLength()/(e.state.bpm*(8/60)),S.a.Transport.loop=!0,S.a.Transport.start("+0.0"),console.log("playing initiated")})}},{key:"restartPlaying",value:function(){var e=this;this.state.playing?this.setState({playing:!0,seqIsPlaying:!1},function(){S.a.Transport.stop(),console.log("playing stopped"),S.a.Transport.loop=!1,S.a.Transport.loopEnd=0,S.a.Transport.loopStart=0,S.a.Transport.loopEnd=e.calcMetLength()/(e.state.bpm*(8/60)),S.a.Transport.loop=!0,S.a.Transport.start("+0.0"),console.log("playing restarted")}):console.error("restartPlaying called while not playing")}},{key:"updateBPM",value:function(){var e=document.querySelector("#tempo-sld").value;document.querySelector("#tempo-value-header").innerHTML="Quarter notes per minute: ".concat(e),this.setState({bpm:parseInt(e)},function(){S.a.Transport.bpm.value=parseInt(e)})}},{key:"updateTimeSig",value:function(){var e=this,t=document.querySelector("#num-beats-input"),a=document.querySelector("#subdivision-input");this.setState({timeSig:[parseInt(t.value),Math.pow(2,parseInt(a.value))]},function(){console.log("time signature updated: ".concat(e.state.timeSig[0]," / ").concat(e.state.timeSig[1])),e.generateStepSequence(),e.updateMetronome()})}},{key:"generateMetronome",value:function(){console.log("generate metronome");var e=this.state.metronomeContainer;e.forEach(function(e){return e.removeAll()});for(var t=Object(c.a)(this.state.notes,2),a=t[0],n=t[1],o=this.calcMetLength(),r=this.calcBeatTicks(),i=[],s=0;s<o;s++)0===s?i.push({note:n,time:"0:0",velocity:.05}):s%r===0&&i.push({note:a,time:"0:".concat(s/r),velocity:.05});var l=new S.a.Part(function(e,t){M.triggerAttackRelease(t.note,"32n",e,t.velocity)},i).start(0);e.push(l),this.setState({renderedNotes:i,metronomeContainer:e})}},{key:"updateMetronome",value:function(){console.log("updating metronome");var e=this.state.metronomeContainer;e.forEach(function(e){return e.removeAll()});var t=this.state.timeSig,a=this.state.notes,n=this.calcMetLength(t),o=this.calcBeatTicks(t[1]),r=[],i=this.readCheckboxes();console.log("updated matrix: "+i);for(var c=0;c<n;c++)t[1]<=4&&c%(o/2)===0?(1===i[0][c/(o/2)]&&r.push({note:a[1],time:"0:".concat(c/8),velocity:.1}),1===i[1][c/(o/2)]&&r.push({note:a[0],time:"0:".concat(c/8),velocity:.1})):c%o===0&&(1===i[0][c/o]&&r.push({note:a[1],time:"0:".concat(c/8),velocity:.1}),1===i[1][c/o]&&r.push({note:a[0],time:"0:".concat(c/8),velocity:.1}));var s=new S.a.Part(function(e,t){M.triggerAttackRelease(t.note,"32n",e,t.velocity)},r).start(0);e.push(s),this.setState({renderedNotes:r,metronomeContainer:e})}},{key:"generateStepSequence",value:function(){var e=this.state.timeSig,t=this.generateSeqMatrix(),a=document.querySelector(".top-row"),n=document.querySelector(".bottom-row");if(console.log("updating top row checkboxes"),e[1]>=8){a.innerHTML="";for(var o=0;o<e[0];o++){var r=document.createElement("div");r.key="td"+o,r.className="top-row-shell";var i=document.createElement("input");i.type="checkbox",i.key="a"+o,i.id="tr"+o,i.className="top-row-btn",i.checked=0===o,i.setAttribute("highlighted",!1);var c=document.createElement("label");c.key="tk"+o,c.setAttribute("for","tr"+o);var s=document.createElement("div");s.key="th"+o,s.className="highlight",s.hidden=!1,c.appendChild(s),r.appendChild(i),r.appendChild(c),a.appendChild(r)}}else if(e[1]<=4){a.innerHTML="";for(var l=0;l<2*e[0];l++){var p=document.createElement("div");p.key="td"+l,p.className="top-row-shell";var u=document.createElement("input");u.type="checkbox",u.key="b"+l,u.id="tr"+l,u.className="top-row-btn",u.checked=1===t[0]&&0===l,u.setAttribute("highlighted",!1);var m=document.createElement("label");m.key="tk"+l,m.setAttribute("for","tr"+l);var d=document.createElement("div");d.key="th"+l,d.className="highlight",d.hidden=!1,m.appendChild(d),p.appendChild(u),p.appendChild(m),a.appendChild(p)}}if(console.log("updating bottom row checkboxes"),e[1]>=8){n.innerHTML="";for(var h=0;h<e[0];h++){var v=document.createElement("div");v.key="td"+h,v.className="bottom-row-shell";var g=document.createElement("input");g.type="checkbox",g.key="a"+h,g.id="br"+h,g.className="bottom-row-btn",g.checked=1===t[h]&&0!==h;var b=document.createElement("label");b.key="bk"+h,b.setAttribute("for","br"+h);var y=document.createElement("div");y.key="th"+h,y.className="highlight",y.hidden=!1,b.appendChild(y),v.appendChild(g),v.appendChild(b),n.appendChild(v)}}else if(e[1]<=4){n.innerHTML="";for(var f=0;f<2*e[0];f++){var k=document.createElement("div");k.key="td"+f,k.className="bottom-row-shell";var E=document.createElement("input");E.type="checkbox",E.key="b"+f,E.id="br"+f,E.className="bottom-row-btn",E.checked=1===t[f]&&0!==f;var S=document.createElement("label");S.key="bk"+f,S.setAttribute("for","br"+f);var j=document.createElement("div");j.key="th"+f,j.className="highlight",j.hidden=!1,S.appendChild(j),k.appendChild(E),k.appendChild(S),n.appendChild(k)}}}},{key:"readCheckboxes",value:function(e){if(console.log("reading checkboxes"),e){for(var t=document.querySelectorAll(".top-row-btn"),a=document.querySelectorAll(".bottom-row-btn"),n=[],o=[],r=0;r<t.length;r++)t[r].checked&&a[r].checked?(n.push(1),o.push(1)):!t[r].checked&&a[r].checked?(n.push(0),o.push(1)):t[r].checked&&!a[r].checked?(n.push(1),o.push(0)):t[r].checked||a[r].checked||(n.push(0),o.push(0));return[n,o]}for(var i=document.querySelectorAll(".top-row-btn"),c=document.querySelectorAll(".bottom-row-btn"),s=[],l=[],p=0;p<i.length;p++)i[p].checked&&c[p].checked?(s.push(1),l.push(1)):!i[p].checked&&c[p].checked?(s.push(0),l.push(1)):i[p].checked&&!c[p].checked?(s.push(1),l.push(0)):i[p].checked||c[p].checked||(s.push(0),l.push(0));return[s,l]}},{key:"generateSeqMatrix",value:function(){console.log("generating step sequence matrix");var e=Object(c.a)(this.state.timeSig,2),t=e[0],a=e[1],n=[];if(16===a||8===a||32===a)for(var o=0;o<t;o++)o%2===0?n.push(1):n.push(0);else if(4===a||2===a)for(var r=0;r<2*t;r++)r%2===0?n.push(1):n.push(0);return n}},{key:"calcMetLength",value:function(){var e=Object(c.a)(this.state.timeSig,2),t=e[0];switch(e[1]){case 2:return 16*t;case 4:return 8*t;case 8:return 4*t;case 16:return 2*t;case 32:return t;default:return 8*t}}},{key:"calcBeatTicks",value:function(){switch(this.state.timeSig[1]){case 2:return 16;case 4:return 8;case 8:return 4;case 16:return 2;case 32:return 1;default:return 8}}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("span",{id:"info-span"},"Sam Parsons \xa92019"),o.a.createElement("div",{className:"title"},o.a.createElement("h3",null,"Multimeter Metronome")),o.a.createElement(b,{timeSig:this.state.timeSig,updateTimeSig:this.updateTimeSig.bind(this),updateMetronome:this.updateMetronome.bind(this),playing:this.state.playing,togglePlaying:this.togglePlaying.bind(this),restartPlaying:this.restartPlaying.bind(this),bpm:this.state.bpm,updateBPM:this.updateBPM.bind(this)}),o.a.createElement(k,{generateStepSequence:this.generateStepSequence.bind(this),updateMetronome:this.updateMetronome.bind(this)}))}}]),t}(n.Component);i.a.render(o.a.createElement(C,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.bb41afa7.chunk.js.map