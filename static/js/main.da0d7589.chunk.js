(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),i=a.n(r),l=(a(17),a(7)),c=a(1),s=a(2),u=a(4),p=a(3),m=a(5),d=(a(18),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"num-beats-div"},o.a.createElement("select",{id:"num-beats-input",defaultValue:"4",onChange:function(){e.props.updateTimeSig(),e.props.playing&&e.props.restartPlaying()}},o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"),o.a.createElement("option",{value:"8"},"8"),o.a.createElement("option",{value:"9"},"9"),o.a.createElement("option",{value:"10"},"10"),o.a.createElement("option",{value:"11"},"11"),o.a.createElement("option",{value:"12"},"12"),o.a.createElement("option",{value:"13"},"13"),o.a.createElement("option",{value:"14"},"14"),o.a.createElement("option",{value:"15"},"15"),o.a.createElement("option",{value:"16"},"16"),o.a.createElement("option",{value:"17"},"17"),o.a.createElement("option",{value:"18"},"18"),o.a.createElement("option",{value:"19"},"19"),o.a.createElement("option",{value:"20"},"20")),o.a.createElement("div",{id:"num-beats-desc"},"# of beats"))}}]),t}(o.a.Component)),h=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"subdivision-div"},o.a.createElement("select",{id:"subdivision-input",defaultValue:"2",onChange:function(){e.props.updateTimeSig(),e.props.playing&&e.props.restartPlaying()}},o.a.createElement("option",{value:"1"},"2"),o.a.createElement("option",{value:"2"},"4"),o.a.createElement("option",{value:"3"},"8"),o.a.createElement("option",{value:"4"},"16"),o.a.createElement("option",{value:"5"},"32")),o.a.createElement("div",{id:"subdivision-desc"},"subdivision"))}}]),t}(o.a.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"play-stop-div"},o.a.createElement("button",{className:"top-btns",id:"play-stop-btn",onClick:function(){e.props.updateMetronome(),e.props.togglePlaying()}},this.props.playing?o.a.createElement("span",null,"\u275a\u275a"):o.a.createElement("span",null,"\u25ba")))}}]),t}(o.a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"tempo-div"},o.a.createElement("input",{id:"tempo-sld",type:"range",min:"30",max:"400",defaultValue:"120",onChange:function(){return e.props.updateBPM()}}),o.a.createElement("div",{id:"tempo-value"},o.a.createElement("div",{id:"tempo-value-header"},"Quarter notes per minute:",o.a.createElement("div",{id:"bpm-value"},this.props.bpm))))}}]),t}(o.a.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"reset-div"},o.a.createElement("button",{className:"reset-btn",id:"reset-btn",onClick:function(){console.log("resetting metronome"),e.props.resetMetronome()}},"Reset"))}}]),t}(o.a.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"dimension"},o.a.createElement("div",{className:"time-signature"},o.a.createElement(d,{playing:this.props.playing,timeSig:this.props.timeSig,updateTimeSig:this.props.updateTimeSig,updateMetronome:this.props.updateMetronome,restartPlaying:this.props.restartPlaying}),o.a.createElement(h,{playing:this.props.playing,timeSig:this.props.timeSig,updateTimeSig:this.props.updateTimeSig,restartPlaying:this.props.restartPlaying,updateMetronome:this.props.updateMetronome}),o.a.createElement(g,{updateTimeSig:this.props.updateTimeSig,updateMetronome:this.props.updateMetronome,resetMetronome:this.props.resetMetronome})),o.a.createElement("div",{className:"play-export"},o.a.createElement(v,{togglePlaying:this.props.togglePlaying,playing:this.props.playing,updateMetronome:this.props.updateMetronome})),o.a.createElement(b,{updateBPM:this.props.updateBPM,bpm:this.props.bpm}))}}]),t}(o.a.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"top-shell-div",className:"note-shell-divs"},o.a.createElement("select",{name:"note1",id:"note1",className:"note-selects",defaultValue:"Eb5",onChange:function(t){e.props.updateNotes()}},o.a.createElement("option",{value:"Ab4"},"Ab4"),o.a.createElement("option",{value:"A4"},"A4"),o.a.createElement("option",{value:"Bb4"},"Bb4"),o.a.createElement("option",{value:"B4"},"B4"),o.a.createElement("option",{value:"C5"},"C5"),o.a.createElement("option",{value:"Db5"},"Db5"),o.a.createElement("option",{value:"D5"},"D5"),o.a.createElement("option",{value:"Eb5"},"Eb5"),o.a.createElement("option",{value:"E5"},"E5"),o.a.createElement("option",{value:"F5"},"F5"),o.a.createElement("option",{value:"Gb5"},"Gb5"),o.a.createElement("option",{value:"G5"},"G5"),o.a.createElement("option",{value:"Ab5"},"Ab5"),o.a.createElement("option",{value:"A5"},"A5"),o.a.createElement("option",{value:"Bb5"},"Bb5"),o.a.createElement("option",{value:"B5"},"B5")),o.a.createElement("div",{className:"top-row",onClick:function(t){e.props.updateMetronome()}}))}}]),t}(o.a.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"bottom-shell-div",className:"note-shell-divs"},o.a.createElement("select",{name:"note2",id:"note2",className:"note-selects",defaultValue:"C5",onChange:function(t){e.props.updateNotes()}},o.a.createElement("option",{value:"Ab4"},"Ab4"),o.a.createElement("option",{value:"A4"},"A4"),o.a.createElement("option",{value:"Bb4"},"Bb4"),o.a.createElement("option",{value:"B4"},"B4"),o.a.createElement("option",{value:"C5"},"C5"),o.a.createElement("option",{value:"Db5"},"Db5"),o.a.createElement("option",{value:"D5"},"D5"),o.a.createElement("option",{value:"Eb5"},"Eb5"),o.a.createElement("option",{value:"E5"},"E5"),o.a.createElement("option",{value:"F5"},"F5"),o.a.createElement("option",{value:"Gb5"},"Gb5"),o.a.createElement("option",{value:"G5"},"G5"),o.a.createElement("option",{value:"Ab5"},"Ab5"),o.a.createElement("option",{value:"A5"},"A5"),o.a.createElement("option",{value:"Bb5"},"Bb5"),o.a.createElement("option",{value:"B5"},"B5")),o.a.createElement("div",{className:"bottom-row",onClick:function(t){e.props.updateMetronome()}}))}}]),t}(o.a.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"step-sequence"},o.a.createElement(y,{updateMetronome:this.props.updateMetronome,updateNotes:this.props.updateNotes}),o.a.createElement(f,{updateMetronome:this.props.updateMetronome,updateNotes:this.props.updateNotes}))}}]),t}(o.a.Component),S=a(6),M=a.n(S),j=a(10),C=a.n(j),O=new M.a.PolySynth(2,M.a.Synth).toMaster();C()(M.a.context).then(function(){console.log("start audio context triggered")});var N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={playing:!1,bpm:120,notes:["C5","EB5"],timeSig:[4,4],renderedNotes:[],metronomeContainer:[],loopStatus:!1,tempDivisor:4,placement:0,visualizeIndex:0,eventCache:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.generateMetronome(),this.generateStepSequence(),window.addEventListener("keydown",function(t){if(32===t.keyCode||13===t.keyCode)try{t.preventDefault(),e.togglePlaying()}catch(t){console.log(t)}})}},{key:"togglePlaying",value:function(){var e=this;this.state.playing?this.setState({playing:!1,seqIsPlaying:!1},function(){M.a.Transport.stop(),console.log("playing stopped"),M.a.Transport.loop=!1,M.a.Transport.loopEnd=0}):this.setState({playing:!0,seqIsPlaying:!1},function(){M.a.Transport.loopStart=0,console.log("calculated metronome length: ".concat(e.calcMetLength())),M.a.Transport.loopEnd=e.calcMetLength()/(e.state.bpm*(8/60)),M.a.Transport.loop=!0,M.a.Transport.start("+0.0"),console.log("playing initiated")})}},{key:"restartPlaying",value:function(){var e=this;this.state.playing?this.setState({playing:!0,seqIsPlaying:!1},function(){M.a.Transport.stop(),M.a.Transport.loopStart=0,M.a.Transport.loopEnd=e.calcMetLength()/(e.state.bpm*(8/60)),M.a.Transport.loop=!0,M.a.Transport.start("+0.0"),console.log("playing restarted")}):console.error("restartPlaying called while not playing")}},{key:"resetMetronome",value:function(){var e=this;console.log("resetting metronome II"),this.setState({bpm:120,loopStatus:!1,notes:["C5","EB5"],timeSig:[4,4]},function(){document.querySelector("#num-beats-input").value=4,document.querySelector("#subdivision-input").value=2,document.querySelector("#note1").value="Eb5",document.querySelector("#note2").value="C5",e.updateBPM(e.state.bpm),e.generateStepSequence(),e.updateMetronome(),e.restartPlaying()})}},{key:"updateBPM",value:function(e){var t=e||document.querySelector("#tempo-sld").value;e&&(document.querySelector("#tempo-sld").value=e),document.querySelector("#bpm-value").innerHTML="".concat(t),this.setState({bpm:parseInt(t)},function(){M.a.Transport.bpm.value=parseInt(t)})}},{key:"updateTimeSig",value:function(){var e=this,t=document.querySelector("#num-beats-input"),a=document.querySelector("#subdivision-input");this.setState({timeSig:[parseInt(t.value),Math.pow(2,parseInt(a.value))]},function(){console.log("time signature updated: ".concat(e.state.timeSig[0]," / ").concat(e.state.timeSig[1])),e.generateStepSequence(),e.updateMetronome()})}},{key:"updateNotes",value:function(){var e=this;console.log("updating notes");var t=document.querySelector("#note1").value,a=document.querySelector("#note2").value;this.setState({notes:[a,t]},function(){e.updateMetronome()})}},{key:"generateMetronome",value:function(){console.log("generate metronome");var e=this.state.metronomeContainer;e.forEach(function(e){return e.removeAll()});for(var t=Object(l.a)(this.state.notes,2),a=t[0],n=t[1],o=this.calcMetLength(),r=this.calcBeatTicks(),i=[],c=0;c<o;c++)0===c?i.push({note:n,time:"0:0",velocity:.05}):c%r===0&&i.push({note:a,time:"0:".concat(c/r),velocity:.05});var s=new M.a.Part(function(e,t){O.triggerAttackRelease(t.note,"32n",e,t.velocity)},i).start(0);e.push(s),this.setState({renderedNotes:i,metronomeContainer:e})}},{key:"updateMetronome",value:function(){console.log("updating metronome");var e=this.state.metronomeContainer;e.forEach(function(e){return e.removeAll()});var t=this.state.timeSig,a=this.state.notes,n=this.calcMetLength(t),o=this.calcBeatTicks(t[1]),r=[],i=this.readCheckboxes();console.log("updated matrix: "+i);for(var l=0;l<n;l++)t[1]<=4&&l%(o/2)===0?(1===i[0][l/(o/2)]&&r.push({note:a[1],time:"0:".concat(l/8),velocity:.1}),1===i[1][l/(o/2)]&&r.push({note:a[0],time:"0:".concat(l/8),velocity:.1})):l%o===0&&(1===i[0][l/o]&&r.push({note:a[1],time:"0:".concat(l/8),velocity:.1}),1===i[1][l/o]&&r.push({note:a[0],time:"0:".concat(l/8),velocity:.1}));var c=new M.a.Part(function(e,t){O.triggerAttackRelease(t.note,"32n",e,t.velocity)},r).start(0);e.push(c),this.setState({renderedNotes:r,metronomeContainer:e})}},{key:"generateStepSequence",value:function(){var e=this.state.timeSig,t=this.generateSeqMatrix(),a=document.querySelector(".top-row"),n=document.querySelector(".bottom-row");if(console.log("updating top row checkboxes"),e[1]>=8){a.innerHTML="";for(var o=0;o<e[0];o++){var r=document.createElement("div");r.key="td"+o,r.className="top-row-shell";var i=document.createElement("input");i.type="checkbox",i.key="a"+o,i.id="tr"+o,i.className="top-row-btn",i.checked=0===o,i.setAttribute("highlighted",!1);var l=document.createElement("label");l.key="tk"+o,l.setAttribute("for","tr"+o);var c=document.createElement("div");c.key="th"+o,c.className="highlight",c.hidden=!1,l.appendChild(c),r.appendChild(i),r.appendChild(l),a.appendChild(r)}}else if(e[1]<=4){a.innerHTML="";for(var s=0;s<2*e[0];s++){var u=document.createElement("div");u.key="td"+s,u.className="top-row-shell";var p=document.createElement("input");p.type="checkbox",p.key="b"+s,p.id="tr"+s,p.className="top-row-btn",p.checked=1===t[0]&&0===s,p.setAttribute("highlighted",!1);var m=document.createElement("label");m.key="tk"+s,m.setAttribute("for","tr"+s);var d=document.createElement("div");d.key="th"+s,d.className="highlight",d.hidden=!1,m.appendChild(d),u.appendChild(p),u.appendChild(m),a.appendChild(u)}}if(console.log("updating bottom row checkboxes"),e[1]>=8){n.innerHTML="";for(var h=0;h<e[0];h++){var v=document.createElement("div");v.key="td"+h,v.className="bottom-row-shell";var b=document.createElement("input");b.type="checkbox",b.key="a"+h,b.id="br"+h,b.className="bottom-row-btn",b.checked=1===t[h]&&0!==h;var g=document.createElement("label");g.key="bk"+h,g.setAttribute("for","br"+h);var E=document.createElement("div");E.key="th"+h,E.className="highlight",E.hidden=!1,g.appendChild(E),v.appendChild(b),v.appendChild(g),n.appendChild(v)}}else if(e[1]<=4){n.innerHTML="";for(var y=0;y<2*e[0];y++){var f=document.createElement("div");f.key="td"+y,f.className="bottom-row-shell";var k=document.createElement("input");k.type="checkbox",k.key="b"+y,k.id="br"+y,k.className="bottom-row-btn",k.checked=1===t[y]&&0!==y;var S=document.createElement("label");S.key="bk"+y,S.setAttribute("for","br"+y);var M=document.createElement("div");M.key="th"+y,M.className="highlight",M.hidden=!1,S.appendChild(M),f.appendChild(k),f.appendChild(S),n.appendChild(f)}}}},{key:"readCheckboxes",value:function(e){console.log("reading checkboxes");var t=document.querySelectorAll(".top-row-btn"),a=document.querySelectorAll(".bottom-row-btn");console.log("top row step seq: ",t);var n=[],o=[];if(e){for(var r=0;r<t.length;r++)n.push(t[r].checked?1:0),o.push(a[r].checked?1:0);return console.log([n,o]),[n,o]}for(var i=0;i<t.length;i++)n.push(t[i].checked?1:0),o.push(a[i].checked?1:0);return console.log([n,o]),[n,o]}},{key:"generateSeqMatrix",value:function(){console.log("generating step sequence matrix");var e=Object(l.a)(this.state.timeSig,2),t=e[0],a=[];if(e[1]>=8)for(var n=0;n<t;n++)n%2===0?a.push(1):a.push(0);else for(var o=0;o<2*t;o++)o%2===0?a.push(1):a.push(0);return a}},{key:"calcMetLength",value:function(){var e=Object(l.a)(this.state.timeSig,2),t=e[0];switch(e[1]){case 2:return 16*t;case 4:return 8*t;case 8:return 4*t;case 16:return 2*t;case 32:return t;default:return 8*t}}},{key:"calcBeatTicks",value:function(){switch(this.state.timeSig[1]){case 2:return 16;case 4:return 8;case 8:return 4;case 16:return 2;case 32:return 1;default:return 8}}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("span",{id:"info-span"},"Sam Parsons \xa92019"),o.a.createElement("div",{className:"title"},o.a.createElement("h3",null,"Multimeter Metronome")),o.a.createElement(E,{timeSig:this.state.timeSig,updateTimeSig:this.updateTimeSig.bind(this),updateMetronome:this.updateMetronome.bind(this),playing:this.state.playing,togglePlaying:this.togglePlaying.bind(this),restartPlaying:this.restartPlaying.bind(this),bpm:this.state.bpm,updateBPM:this.updateBPM.bind(this),resetMetronome:this.resetMetronome.bind(this)}),o.a.createElement(k,{generateStepSequence:this.generateStepSequence.bind(this),updateMetronome:this.updateMetronome.bind(this),updateNotes:this.updateNotes.bind(this)}))}}]),t}(n.Component);i.a.render(o.a.createElement(N,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.da0d7589.chunk.js.map