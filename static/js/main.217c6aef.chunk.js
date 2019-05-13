(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),r=a.n(i),l=(a(17),a(7)),s=a(1),c=a(2),u=a(4),p=a(3),m=a(5),d=(a(18),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderNormal",value:function(){var e=this;return o.a.createElement("select",{id:"num-beats-input",defaultValue:"4",onChange:function(){e.props.updateTimeSig(),e.props.playing&&e.props.restartPlaying()}},o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"),o.a.createElement("option",{value:"8"},"8"),o.a.createElement("option",{value:"9"},"9"))}},{key:"renderShort",value:function(){var e=this;return o.a.createElement("select",{id:"num-beats-input",defaultValue:"4",onChange:function(){e.props.updateTimeSig(),e.props.playing&&e.props.restartPlaying()}},o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"),o.a.createElement("option",{value:"8"},"8"),o.a.createElement("option",{value:"9"},"9"),o.a.createElement("option",{value:"10"},"10"),o.a.createElement("option",{value:"11"},"11"),o.a.createElement("option",{value:"12"},"12"),o.a.createElement("option",{value:"13"},"13"),o.a.createElement("option",{value:"14"},"14"),o.a.createElement("option",{value:"15"},"15"),o.a.createElement("option",{value:"16"},"16"),o.a.createElement("option",{value:"17"},"17"))}},{key:"render",value:function(){var e,t=this.props.timeSig;return e=2===t[1]||4===t[1]?this.renderNormal():this.renderShort(),o.a.createElement("div",{className:"num-beats-div"},e,o.a.createElement("div",{id:"num-beats-desc"},"# of beats"))}}]),t}(o.a.Component)),h=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"subdivision-div"},o.a.createElement("select",{id:"subdivision-input",defaultValue:"2",onChange:function(){e.props.updateTimeSig(),e.props.playing&&e.props.restartPlaying()}},o.a.createElement("option",{value:"1"},"2"),o.a.createElement("option",{value:"2"},"4"),o.a.createElement("option",{value:"3"},"8"),o.a.createElement("option",{value:"4"},"16"),o.a.createElement("option",{value:"5"},"32")),o.a.createElement("div",{id:"subdivision-desc"},"subdivision"))}}]),t}(o.a.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"play-stop-div"},o.a.createElement("button",{className:"top-btns",id:"play-stop-btn",onClick:function(){e.props.updateMetronome(),e.props.togglePlaying()}},this.props.playing?o.a.createElement("span",null,"\u275a\u275a"):o.a.createElement("span",null,"\u25ba")))}}]),t}(o.a.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"tempo-div"},o.a.createElement("input",{id:"tempo-sld",type:"range",min:"30",max:"400",defaultValue:"120",onChange:function(){return e.props.updateBPM()}}),o.a.createElement("div",{id:"tempo-value"},o.a.createElement("div",{id:"tempo-value-header"},o.a.createElement("select",{name:"tempo-subdivision",id:"tempo-subdivision",onChange:function(){return e.props.updateTempoSubdivision()}},o.a.createElement("option",{value:"Q"},"Quarter notes per minute"),o.a.createElement("option",{value:"E"},"Eighth notes per minute")),o.a.createElement("div",{id:"bpm-value"},this.props.bpm))))}}]),t}(o.a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"reset-div"},o.a.createElement("button",{className:"reset-btn",id:"reset-btn",onClick:function(){e.props.resetMetronome()}},"Reset"))}}]),t}(o.a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"dimension"},o.a.createElement("div",{className:"time-signature"},o.a.createElement(d,{playing:this.props.playing,timeSig:this.props.timeSig,updateTimeSig:this.props.updateTimeSig,updateMetronome:this.props.updateMetronome,restartPlaying:this.props.restartPlaying}),o.a.createElement(h,{playing:this.props.playing,timeSig:this.props.timeSig,updateTimeSig:this.props.updateTimeSig,restartPlaying:this.props.restartPlaying,updateMetronome:this.props.updateMetronome}),o.a.createElement(g,{updateTimeSig:this.props.updateTimeSig,updateMetronome:this.props.updateMetronome,resetMetronome:this.props.resetMetronome})),o.a.createElement("div",{className:"play-export"},o.a.createElement(v,{togglePlaying:this.props.togglePlaying,playing:this.props.playing,updateMetronome:this.props.updateMetronome})),o.a.createElement(b,{updateBPM:this.props.updateBPM,bpm:this.props.bpm,updateTempoSubdivision:this.props.updateTempoSubdivision}))}}]),t}(o.a.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"top-shell-div",className:"note-shell-divs"},o.a.createElement("select",{name:"note1",id:"note1",className:"note-selects",defaultValue:"Eb5",onChange:function(t){e.props.updateNotes()}},o.a.createElement("option",{value:"Ab4"},"Ab4"),o.a.createElement("option",{value:"A4"},"A4"),o.a.createElement("option",{value:"Bb4"},"Bb4"),o.a.createElement("option",{value:"B4"},"B4"),o.a.createElement("option",{value:"C5"},"C5"),o.a.createElement("option",{value:"Db5"},"Db5"),o.a.createElement("option",{value:"D5"},"D5"),o.a.createElement("option",{value:"Eb5"},"Eb5"),o.a.createElement("option",{value:"E5"},"E5"),o.a.createElement("option",{value:"F5"},"F5"),o.a.createElement("option",{value:"Gb5"},"Gb5"),o.a.createElement("option",{value:"G5"},"G5"),o.a.createElement("option",{value:"Ab5"},"Ab5"),o.a.createElement("option",{value:"A5"},"A5"),o.a.createElement("option",{value:"Bb5"},"Bb5"),o.a.createElement("option",{value:"B5"},"B5")),o.a.createElement("div",{className:"top-row",onClick:function(t){e.props.updateMetronome()}}))}}]),t}(o.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"bottom-shell-div",className:"note-shell-divs"},o.a.createElement("select",{name:"note2",id:"note2",className:"note-selects",defaultValue:"C5",onChange:function(t){e.props.updateNotes()}},o.a.createElement("option",{value:"Ab4"},"Ab4"),o.a.createElement("option",{value:"A4"},"A4"),o.a.createElement("option",{value:"Bb4"},"Bb4"),o.a.createElement("option",{value:"B4"},"B4"),o.a.createElement("option",{value:"C5"},"C5"),o.a.createElement("option",{value:"Db5"},"Db5"),o.a.createElement("option",{value:"D5"},"D5"),o.a.createElement("option",{value:"Eb5"},"Eb5"),o.a.createElement("option",{value:"E5"},"E5"),o.a.createElement("option",{value:"F5"},"F5"),o.a.createElement("option",{value:"Gb5"},"Gb5"),o.a.createElement("option",{value:"G5"},"G5"),o.a.createElement("option",{value:"Ab5"},"Ab5"),o.a.createElement("option",{value:"A5"},"A5"),o.a.createElement("option",{value:"Bb5"},"Bb5"),o.a.createElement("option",{value:"B5"},"B5")),o.a.createElement("div",{className:"bottom-row",onClick:function(t){e.props.updateMetronome()}}))}}]),t}(o.a.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"step-sequence"},o.a.createElement(E,{updateMetronome:this.props.updateMetronome,updateNotes:this.props.updateNotes}),o.a.createElement(f,{updateMetronome:this.props.updateMetronome,updateNotes:this.props.updateNotes}))}}]),t}(o.a.Component),k=a(6),M=a.n(k),j=a(10),C=a.n(j),O=new M.a.PolySynth(2,M.a.Synth).toMaster();C()(M.a.context).then(function(){console.log("start audio context triggered")});var N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={playing:!1,bpm:120,notes:["C5","Eb5"],timeSig:[4,4],renderedNotes:[],metronomeContainer:[],defaults:{timeSig:[4,4],bpm:120,notes:["C5","Eb5"]}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.generateMetronome(),this.generateStepSequence(),window.addEventListener("keydown",function(t){if(32===t.keyCode||13===t.keyCode)try{t.preventDefault(),e.togglePlaying()}catch(t){console.log(t)}}),window.onresize=function(){return e.adjustLabelWidth()}}},{key:"togglePlaying",value:function(){var e=this;this.state.playing?this.setState({playing:!1,seqIsPlaying:!1},function(){M.a.Transport.stop(),console.log("playing stopped"),M.a.Transport.loop=!1,M.a.Transport.loopEnd=0}):this.setState({playing:!0,seqIsPlaying:!1},function(){M.a.Transport.loopStart=0,console.log("calculated metronome length: ".concat(e.calcMetLength())),M.a.Transport.loopEnd=e.calcMetLength()/(e.state.bpm*(8/60)),M.a.Transport.loop=!0,M.a.Transport.start("+0.0"),console.log("playing initiated")})}},{key:"restartPlaying",value:function(){var e=this;this.state.playing?this.setState({playing:!0,seqIsPlaying:!1},function(){M.a.Transport.stop(),M.a.Transport.loopStart=0,M.a.Transport.loopEnd=e.calcMetLength()/(e.state.bpm*(8/60)),M.a.Transport.loop=!0,M.a.Transport.start("+0.0"),console.log("playing restarted")}):console.error("restartPlaying called while not playing")}},{key:"resetMetronome",value:function(){var e=this;console.log("resetting metronome"),this.setState({bpm:this.state.defaults.bpm,notes:this.state.defaults.notes,timeSig:this.state.defaults.timeSig},function(){document.querySelector("#num-beats-input").value=e.state.defaults.timeSig[0],document.querySelector("#subdivision-input").value=Math.sqrt(e.state.defaults.timeSig[1]),document.querySelector("#note1").value=e.state.defaults.notes[1],document.querySelector("#note2").value=e.state.defaults.notes[0],e.updateBPM(e.state.bpm),e.generateStepSequence(),e.updateMetronome(),e.state.playing&&e.restartPlaying()})}},{key:"updateBPM",value:function(e){var t=e||document.querySelector("#tempo-sld").value;e&&(document.querySelector("#tempo-sld").value=e),document.querySelector("#bpm-value").innerHTML="".concat(t),this.setState({bpm:parseInt(t)},function(){M.a.Transport.bpm.value=parseInt(t)})}},{key:"updateTimeSig",value:function(){var e=this,t=document.querySelector("#num-beats-input"),a=document.querySelector("#subdivision-input");this.setState({timeSig:[parseInt(t.value),Math.pow(2,parseInt(a.value))]},function(){console.log("time signature updated: ".concat(e.state.timeSig[0]," / ").concat(e.state.timeSig[1])),e.generateStepSequence(),e.updateMetronome()})}},{key:"updateNotes",value:function(){var e=this;console.log("updating notes");var t=document.querySelector("#note1").value,a=document.querySelector("#note2").value;this.setState({notes:[a,t]},function(){e.updateMetronome()})}},{key:"updateTempoSubdivision",value:function(){console.log("updating tempo subdivision calculation");var e="E"===document.querySelector("#tempo-subdivision").value?2*this.state.bpm:this.state.bpm/2;document.querySelector("#bpm-value").innerHTML=e,document.querySelector("#tempo-sld").value=e}},{key:"generateMetronome",value:function(){var e=this.state.metronomeContainer;e.forEach(function(e){return e.removeAll()});for(var t=Object(l.a)(this.state.notes,2),a=t[0],n=t[1],o=this.calcMetLength(),i=this.calcBeatTicks(),r=[],s=0;s<o;s++)0===s?r.push({note:n,time:"0:0",velocity:.05}):s%i===0&&r.push({note:a,time:"0:".concat(s/i),velocity:.05});var c=new M.a.Part(function(e,t){O.triggerAttackRelease(t.note,.05,e,t.velocity)},r).start(0);e.push(c),this.setState({renderedNotes:r,metronomeContainer:e})}},{key:"updateMetronome",value:function(){var e=this.state.metronomeContainer;e.forEach(function(e){return e.removeAll()});var t=this.state.timeSig,a=this.state.notes,n=this.calcMetLength(t),o=this.calcBeatTicks(t[1]),i=[],r=this.readCheckboxes();console.log("updated matrix: "),console.log([r[0],r[1]]);for(var l=0;l<n;l++)t[1]<=4&&l%(o/2)===0?(1===r[0][l/(o/2)]&&i.push({note:a[1],time:"0:".concat(l/8),velocity:.1}),1===r[1][l/(o/2)]&&i.push({note:a[0],time:"0:".concat(l/8),velocity:.1})):l%o===0&&(1===r[0][l/o]&&i.push({note:a[1],time:"0:".concat(l/8),velocity:.1}),1===r[1][l/o]&&i.push({note:a[0],time:"0:".concat(l/8),velocity:.1}));var s=new M.a.Part(function(e,t){O.triggerAttackRelease(t.note,.05,e,t.velocity)},i).start(0);e.push(s),this.setState({renderedNotes:i,metronomeContainer:e})}},{key:"generateStepSequence",value:function(){var e=this.state.timeSig,t=this.generateSeqMatrix(),a=document.querySelector(".top-row"),n=document.querySelector(".bottom-row");if(e[1]>=8){a.innerHTML="";for(var o=0;o<e[0];o++){var i=document.createElement("div");i.key="td"+o,i.className="top-row-shell";var r=document.createElement("input");r.type="checkbox",r.key="a"+o,r.id="tr"+o,r.className="top-row-btn",r.checked=0===o,r.setAttribute("highlighted",!1);var l=document.createElement("label");l.key="tk"+o,l.setAttribute("for","tr"+o),l.className="labels";var s=document.createElement("div");s.key="th"+o,s.className="highlight",s.hidden=!1,l.appendChild(s),i.appendChild(r),i.appendChild(l),a.appendChild(i)}}else if(e[1]<=4){a.innerHTML="";for(var c=0;c<2*e[0];c++){var u=document.createElement("div");u.key="td"+c,u.className="top-row-shell";var p=document.createElement("input");p.type="checkbox",p.key="b"+c,p.id="tr"+c,p.className="top-row-btn",p.checked=1===t[0]&&0===c,p.setAttribute("highlighted",!1);var m=document.createElement("label");m.key="tk"+c,m.setAttribute("for","tr"+c),m.className="labels";var d=document.createElement("div");d.key="th"+c,d.className="highlight",d.hidden=!1,m.appendChild(d),u.appendChild(p),u.appendChild(m),a.appendChild(u)}}if(e[1]>=8){n.innerHTML="";for(var h=0;h<e[0];h++){var v=document.createElement("div");v.key="td"+h,v.className="bottom-row-shell";var b=document.createElement("input");b.type="checkbox",b.key="a"+h,b.id="br"+h,b.className="bottom-row-btn",b.checked=1===t[h]&&0!==h;var g=document.createElement("label");g.key="bk"+h,g.setAttribute("for","br"+h),g.className="labels";var y=document.createElement("div");y.key="th"+h,y.className="highlight",y.hidden=!1,g.appendChild(y),v.appendChild(b),v.appendChild(g),n.appendChild(v)}}else if(e[1]<=4){n.innerHTML="";for(var E=0;E<2*e[0];E++){var f=document.createElement("div");f.key="td"+E,f.className="bottom-row-shell";var S=document.createElement("input");S.type="checkbox",S.key="b"+E,S.id="br"+E,S.className="bottom-row-btn",S.checked=1===t[E]&&0!==E;var k=document.createElement("label");k.key="bk"+E,k.setAttribute("for","br"+E),k.className="labels";var M=document.createElement("div");M.key="th"+E,M.className="highlight",M.hidden=!1,k.appendChild(M),f.appendChild(S),f.appendChild(k),n.appendChild(f)}}this.adjustLabelWidth()}},{key:"adjustLabelWidth",value:function(){var e,t=document.querySelector(".App").offsetWidth,a=document.querySelector("#note1").offsetWidth+.075*document.querySelector(".App").offsetWidth,n=document.querySelector(".top-row").childElementCount,o=(document.querySelector(".labels").offsetWidth+.01*t)*n,i=document.querySelector("#note1").offsetWidth+.075*t+o,r=document.querySelector("#step-sequence"),l=document.querySelectorAll(".labels");t-i<0?(e=Math.round((t-a)/n-.01*t),console.log("projected label width: ",e),l.forEach(function(t){t.style.width="".concat(e,"px"),t.style.height="".concat(e,"px")}),r.style.margin="-5% auto auto"):(console.log("standard label width: 30px"),l.forEach(function(e){e.style.width="30px",e.style.height="30px"}),r.style.margin="-5% auto auto ".concat(Math.round((t-i)/20),"%"))}},{key:"readCheckboxes",value:function(e){var t=document.querySelectorAll(".top-row-btn"),a=document.querySelectorAll(".bottom-row-btn"),n=[],o=[];if(e){for(var i=0;i<t.length;i++)n.push(t[i].checked?1:0),o.push(a[i].checked?1:0);return[n,o]}for(var r=0;r<t.length;r++)n.push(t[r].checked?1:0),o.push(a[r].checked?1:0);return[n,o]}},{key:"generateSeqMatrix",value:function(){var e=Object(l.a)(this.state.timeSig,2),t=e[0],a=[];if(e[1]>=8)for(var n=0;n<t;n++)n%2===0?a.push(1):a.push(0);else for(var o=0;o<2*t;o++)o%2===0?a.push(1):a.push(0);return a}},{key:"calcMetLength",value:function(){var e=Object(l.a)(this.state.timeSig,2),t=e[0];switch(e[1]){case 2:return 16*t;case 4:return 8*t;case 8:return 4*t;case 16:return 2*t;case 32:return t;default:return 8*t}}},{key:"calcBeatTicks",value:function(){switch(this.state.timeSig[1]){case 2:return 16;case 4:return 8;case 8:return 4;case 16:return 2;case 32:return 1;default:return 8}}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("span",{id:"info-span"},"Sam Parsons \xa92019"),o.a.createElement("div",{className:"title"},o.a.createElement("h3",null,"Multimeter Metronome")),o.a.createElement(y,{timeSig:this.state.timeSig,updateTimeSig:this.updateTimeSig.bind(this),updateMetronome:this.updateMetronome.bind(this),playing:this.state.playing,togglePlaying:this.togglePlaying.bind(this),restartPlaying:this.restartPlaying.bind(this),bpm:this.state.bpm,updateBPM:this.updateBPM.bind(this),resetMetronome:this.resetMetronome.bind(this),updateTempoSubdivision:this.updateTempoSubdivision.bind(this)}),o.a.createElement(S,{generateStepSequence:this.generateStepSequence.bind(this),updateMetronome:this.updateMetronome.bind(this),updateNotes:this.updateNotes.bind(this)}))}}]),t}(n.Component);r.a.render(o.a.createElement(N,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.217c6aef.chunk.js.map