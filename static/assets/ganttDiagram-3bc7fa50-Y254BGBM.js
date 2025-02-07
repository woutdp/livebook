import{Aa as oe,D as Me,Na as ce,Qa as le,b as ht,c as Gt,d as Ut,e as Xt,f as O,g as Ee,h as Ht,ha as mt,i as jt,j as qt,k as Zt,l as st,la as $t,n as Qt,q as Jt,r as bt,ra as K,s as _t,sa as te,t as Dt,u as wt,ua as ee,v as St,va as ie,w as Ct,wa as re,x as Kt,xa as ne,ya as se,za as ae}from"./chunk-CRHZHETQ.js";import{h as Rt}from"./chunk-2YVZDWG7.js";var pe=Rt(Ee(),1);var Ae="isoweek",ue=function(t,s,e){var i=function(y,w){var _=(w?e.utc:e)().year(y).startOf(Ut),S=4-_.isoWeekday();return _.isoWeekday()>4&&(S+=7),_.add(S,ht)},n=function(y){return y.add(4-y.isoWeekday(),ht)},a=s.prototype;a.isoWeekYear=function(){var g=n(this);return g.year()},a.isoWeek=function(g){if(!this.$utils().u(g))return this.add((g-this.isoWeek())*7,ht);var y=n(this),w=i(this.isoWeekYear(),this.$u);return y.diff(w,Gt)+1},a.isoWeekday=function(g){return this.$utils().u(g)?this.day()||7:this.day(this.day()%7?g:g-7)};var d=a.startOf;a.startOf=function(g,y){var w=this.$utils(),_=w.u(y)?!0:y,S=w.p(g);return S===Ae?_?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):d.bind(this)(g,y)}};var Ie=function(s){return s.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(e,i,n){return i||n.slice(1)})},Le={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},fe=function(s,e){return s.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(i,n,a){var d=a&&a.toUpperCase();return n||e[a]||Le[a]||Ie(e[d])})};var Ye=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,Fe=/\d/,kt=/\d\d/,ze=/\d{3}/,Oe=/\d{4}/,N=/\d\d?/,We=/[+-]?\d+/,Pe=/[+-]\d\d:?(\d\d)?|Z/,at=/\d*[^-_:/,()\s\d]+/,Q={},me=function(s){return s=+s,s+(s>68?1900:2e3)};function Ve(t){if(!t||t==="Z")return 0;var s=t.match(/([+-]|\d\d)/g),e=+(s[1]*60)+(+s[2]||0);return e===0?0:s[0]==="+"?-e:e}var W=function(s){return function(e){this[s]=+e}},de=[Pe,function(t){var s=this.zone||(this.zone={});s.offset=Ve(t)}],Et=function(s){var e=Q[s];return e&&(e.indexOf?e:e.s.concat(e.f))},he=function(s,e){var i,n=Q,a=n.meridiem;if(!a)i=s===(e?"pm":"PM");else for(var d=1;d<=24;d+=1)if(s.indexOf(a(d,0,e))>-1){i=d>12;break}return i},Be={A:[at,function(t){this.afternoon=he(t,!1)}],a:[at,function(t){this.afternoon=he(t,!0)}],S:[Fe,function(t){this.milliseconds=+t*100}],SS:[kt,function(t){this.milliseconds=+t*10}],SSS:[ze,function(t){this.milliseconds=+t}],s:[N,W("seconds")],ss:[N,W("seconds")],m:[N,W("minutes")],mm:[N,W("minutes")],H:[N,W("hours")],h:[N,W("hours")],HH:[N,W("hours")],hh:[N,W("hours")],D:[N,W("day")],DD:[kt,W("day")],Do:[at,function(t){var s=Q,e=s.ordinal,i=t.match(/\d+/);if(this.day=i[0],!!e)for(var n=1;n<=31;n+=1)e(n).replace(/\[|\]/g,"")===t&&(this.day=n)}],M:[N,W("month")],MM:[kt,W("month")],MMM:[at,function(t){var s=Et("months"),e=Et("monthsShort"),i=(e||s.map(function(n){return n.slice(0,3)})).indexOf(t)+1;if(i<1)throw new Error;this.month=i%12||i}],MMMM:[at,function(t){var s=Et("months"),e=s.indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[We,W("year")],YY:[kt,function(t){this.year=me(t)}],YYYY:[Oe,W("year")],Z:de,ZZ:de};function Ne(t){var s=t.afternoon;if(s!==void 0){var e=t.hours;s?e<12&&(t.hours+=12):e===12&&(t.hours=0),delete t.afternoon}}function Re(t){t=fe(t,Q&&Q.formats);for(var s=t.match(Ye),e=s.length,i=0;i<e;i+=1){var n=s[i],a=Be[n],d=a&&a[0],g=a&&a[1];g?s[i]={regex:d,parser:g}:s[i]=n.replace(/^\[|\]$/g,"")}return function(y){for(var w={},_=0,S=0;_<e;_+=1){var L=s[_];if(typeof L=="string")S+=L.length;else{var M=L.regex,E=L.parser,x=y.slice(S),F=M.exec(x),V=F[0];E.call(w,V),y=y.replace(V,"")}}return Ne(w),w}}var Ge=function(s,e,i){try{if(["x","X"].indexOf(e)>-1)return new Date((e==="X"?1e3:1)*s);var n=Re(e),a=n(s),d=a.year,g=a.month,y=a.day,w=a.hours,_=a.minutes,S=a.seconds,L=a.milliseconds,M=a.zone,E=new Date,x=y||(!d&&!g?E.getDate():1),F=d||E.getFullYear(),V=0;d&&!g||(V=g>0?g-1:E.getMonth());var j=w||0,q=_||0,Z=S||0,G=L||0;return M?new Date(Date.UTC(F,V,x,j,q,Z,G+M.offset*60*1e3)):i?new Date(Date.UTC(F,V,x,j,q,Z,G)):new Date(F,V,x,j,q,Z,G)}catch(ut){return new Date("")}},ke=function(t,s,e){e.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(me=t.parseTwoDigitYear);var i=s.prototype,n=i.parse;i.parse=function(a){var d=a.date,g=a.utc,y=a.args;this.$u=g;var w=y[1];if(typeof w=="string"){var _=y[2]===!0,S=y[3]===!0,L=_||S,M=y[2];S&&(M=y[2]),Q=this.$locale(),!_&&M&&(Q=e.Ls[M]),this.$d=Ge(d,w,g),this.init(),M&&M!==!0&&(this.$L=this.locale(M).$L),L&&d!=this.format(w)&&(this.$d=new Date("")),Q={}}else if(w instanceof Array)for(var E=w.length,x=1;x<=E;x+=1){y[1]=w[x-1];var F=e.apply(this,y);if(F.isValid()){this.$d=F.$d,this.$L=F.$L,this.init();break}x===E&&(this.$d=new Date(""))}else n.call(this,a)}};var ge=function(t,s){var e=s.prototype,i=e.format;e.format=function(n){var a=this,d=this.$locale();if(!this.isValid())return i.bind(this)(n);var g=this.$utils(),y=n||Xt,w=y.replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(_){switch(_){case"Q":return Math.ceil((a.$M+1)/3);case"Do":return d.ordinal(a.$D);case"gggg":return a.weekYear();case"GGGG":return a.isoWeekYear();case"wo":return d.ordinal(a.week(),"W");case"w":case"ww":return g.s(a.week(),_==="w"?1:2,"0");case"W":case"WW":return g.s(a.isoWeek(),_==="W"?1:2,"0");case"k":case"kk":return g.s(String(a.$H===0?24:a.$H),_==="k"?1:2,"0");case"X":return Math.floor(a.$d.getTime()/1e3);case"x":return a.$d.getTime();case"z":return"["+a.offsetName()+"]";case"zzz":return"["+a.offsetName("long")+"]";default:return _}});return i.bind(this)(w)}};var Xi=Rt(Me(),1);var Mt=function(){var t=function(m,l,u,h){for(u=u||{},h=m.length;h--;u[m[h]]=l);return u},s=[1,3],e=[1,5],i=[7,9,11,12,13,14,15,16,17,18,19,20,21,23,25,26,28,35,40],n=[1,15],a=[1,16],d=[1,17],g=[1,18],y=[1,19],w=[1,20],_=[1,21],S=[1,22],L=[1,23],M=[1,24],E=[1,25],x=[1,26],F=[1,27],V=[1,29],j=[1,31],q=[1,34],Z=[5,7,9,11,12,13,14,15,16,17,18,19,20,21,23,25,26,28,35,40],G={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,gantt:5,document:6,EOF:7,line:8,SPACE:9,statement:10,NL:11,dateFormat:12,inclusiveEndDates:13,topAxis:14,axisFormat:15,tickInterval:16,excludes:17,includes:18,todayMarker:19,title:20,acc_title:21,acc_title_value:22,acc_descr:23,acc_descr_value:24,acc_descr_multiline_value:25,section:26,clickStatement:27,taskTxt:28,taskData:29,openDirective:30,typeDirective:31,closeDirective:32,":":33,argDirective:34,click:35,callbackname:36,callbackargs:37,href:38,clickStatementDebug:39,open_directive:40,type_directive:41,arg_directive:42,close_directive:43,$accept:0,$end:1},terminals_:{2:"error",5:"gantt",7:"EOF",9:"SPACE",11:"NL",12:"dateFormat",13:"inclusiveEndDates",14:"topAxis",15:"axisFormat",16:"tickInterval",17:"excludes",18:"includes",19:"todayMarker",20:"title",21:"acc_title",22:"acc_title_value",23:"acc_descr",24:"acc_descr_value",25:"acc_descr_multiline_value",26:"section",28:"taskTxt",29:"taskData",33:":",35:"click",36:"callbackname",37:"callbackargs",38:"href",40:"open_directive",41:"type_directive",42:"arg_directive",43:"close_directive"},productions_:[0,[3,2],[3,3],[6,0],[6,2],[8,2],[8,1],[8,1],[8,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,2],[10,1],[4,4],[4,6],[27,2],[27,3],[27,3],[27,4],[27,3],[27,4],[27,2],[39,2],[39,3],[39,3],[39,4],[39,3],[39,4],[39,2],[30,1],[31,1],[34,1],[32,1]],performAction:function(l,u,h,o,k,r,D){var c=r.length-1;switch(k){case 2:return r[c-1];case 3:this.$=[];break;case 4:r[c-1].push(r[c]),this.$=r[c-1];break;case 5:case 6:this.$=r[c];break;case 7:case 8:this.$=[];break;case 9:o.setDateFormat(r[c].substr(11)),this.$=r[c].substr(11);break;case 10:o.enableInclusiveEndDates(),this.$=r[c].substr(18);break;case 11:o.TopAxis(),this.$=r[c].substr(8);break;case 12:o.setAxisFormat(r[c].substr(11)),this.$=r[c].substr(11);break;case 13:o.setTickInterval(r[c].substr(13)),this.$=r[c].substr(13);break;case 14:o.setExcludes(r[c].substr(9)),this.$=r[c].substr(9);break;case 15:o.setIncludes(r[c].substr(9)),this.$=r[c].substr(9);break;case 16:o.setTodayMarker(r[c].substr(12)),this.$=r[c].substr(12);break;case 17:o.setDiagramTitle(r[c].substr(6)),this.$=r[c].substr(6);break;case 18:this.$=r[c].trim(),o.setAccTitle(this.$);break;case 19:case 20:this.$=r[c].trim(),o.setAccDescription(this.$);break;case 21:o.addSection(r[c].substr(8)),this.$=r[c].substr(8);break;case 23:o.addTask(r[c-1],r[c]),this.$="task";break;case 27:this.$=r[c-1],o.setClickEvent(r[c-1],r[c],null);break;case 28:this.$=r[c-2],o.setClickEvent(r[c-2],r[c-1],r[c]);break;case 29:this.$=r[c-2],o.setClickEvent(r[c-2],r[c-1],null),o.setLink(r[c-2],r[c]);break;case 30:this.$=r[c-3],o.setClickEvent(r[c-3],r[c-2],r[c-1]),o.setLink(r[c-3],r[c]);break;case 31:this.$=r[c-2],o.setClickEvent(r[c-2],r[c],null),o.setLink(r[c-2],r[c-1]);break;case 32:this.$=r[c-3],o.setClickEvent(r[c-3],r[c-1],r[c]),o.setLink(r[c-3],r[c-2]);break;case 33:this.$=r[c-1],o.setLink(r[c-1],r[c]);break;case 34:case 40:this.$=r[c-1]+" "+r[c];break;case 35:case 36:case 38:this.$=r[c-2]+" "+r[c-1]+" "+r[c];break;case 37:case 39:this.$=r[c-3]+" "+r[c-2]+" "+r[c-1]+" "+r[c];break;case 41:o.parseDirective("%%{","open_directive");break;case 42:o.parseDirective(r[c],"type_directive");break;case 43:r[c]=r[c].trim().replace(/'/g,'"'),o.parseDirective(r[c],"arg_directive");break;case 44:o.parseDirective("}%%","close_directive","gantt");break}},table:[{3:1,4:2,5:s,30:4,40:e},{1:[3]},{3:6,4:2,5:s,30:4,40:e},t(i,[2,3],{6:7}),{31:8,41:[1,9]},{41:[2,41]},{1:[2,1]},{4:30,7:[1,10],8:11,9:[1,12],10:13,11:[1,14],12:n,13:a,14:d,15:g,16:y,17:w,18:_,19:S,20:L,21:M,23:E,25:x,26:F,27:28,28:V,30:4,35:j,40:e},{32:32,33:[1,33],43:q},t([33,43],[2,42]),t(i,[2,8],{1:[2,2]}),t(i,[2,4]),{4:30,10:35,12:n,13:a,14:d,15:g,16:y,17:w,18:_,19:S,20:L,21:M,23:E,25:x,26:F,27:28,28:V,30:4,35:j,40:e},t(i,[2,6]),t(i,[2,7]),t(i,[2,9]),t(i,[2,10]),t(i,[2,11]),t(i,[2,12]),t(i,[2,13]),t(i,[2,14]),t(i,[2,15]),t(i,[2,16]),t(i,[2,17]),{22:[1,36]},{24:[1,37]},t(i,[2,20]),t(i,[2,21]),t(i,[2,22]),{29:[1,38]},t(i,[2,24]),{36:[1,39],38:[1,40]},{11:[1,41]},{34:42,42:[1,43]},{11:[2,44]},t(i,[2,5]),t(i,[2,18]),t(i,[2,19]),t(i,[2,23]),t(i,[2,27],{37:[1,44],38:[1,45]}),t(i,[2,33],{36:[1,46]}),t(Z,[2,25]),{32:47,43:q},{43:[2,43]},t(i,[2,28],{38:[1,48]}),t(i,[2,29]),t(i,[2,31],{37:[1,49]}),{11:[1,50]},t(i,[2,30]),t(i,[2,32]),t(Z,[2,26])],defaultActions:{5:[2,41],6:[2,1],34:[2,44],43:[2,43]},parseError:function(l,u){if(u.recoverable)this.trace(l);else{var h=new Error(l);throw h.hash=u,h}},parse:function(l){var u=this,h=[0],o=[],k=[null],r=[],D=this.table,c="",z=0,P=0,nt=2,f=1,p=r.slice.call(arguments,1),v=Object.create(this.lexer),T={yy:{}};for(var b in this.yy)Object.prototype.hasOwnProperty.call(this.yy,b)&&(T.yy[b]=this.yy[b]);v.setInput(l,T.yy),T.yy.lexer=v,T.yy.parser=this,typeof v.yylloc=="undefined"&&(v.yylloc={});var I=v.yylloc;r.push(I);var C=v.options&&v.options.ranges;typeof T.yy.parseError=="function"?this.parseError=T.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function vt(){var X;return X=o.pop()||v.lex()||f,typeof X!="number"&&(X instanceof Array&&(o=X,X=o.pop()),X=u.symbols_[X]||X),X}for(var Y,J,B,xt,$={},ft,U,Nt,dt;;){if(J=h[h.length-1],this.defaultActions[J]?B=this.defaultActions[J]:((Y===null||typeof Y=="undefined")&&(Y=vt()),B=D[J]&&D[J][Y]),typeof B=="undefined"||!B.length||!B[0]){var Tt="";dt=[];for(ft in D[J])this.terminals_[ft]&&ft>nt&&dt.push("'"+this.terminals_[ft]+"'");v.showPosition?Tt="Parse error on line "+(z+1)+`:
`+v.showPosition()+`
Expecting `+dt.join(", ")+", got '"+(this.terminals_[Y]||Y)+"'":Tt="Parse error on line "+(z+1)+": Unexpected "+(Y==f?"end of input":"'"+(this.terminals_[Y]||Y)+"'"),this.parseError(Tt,{text:v.match,token:this.terminals_[Y]||Y,line:v.yylineno,loc:I,expected:dt})}if(B[0]instanceof Array&&B.length>1)throw new Error("Parse Error: multiple actions possible at state: "+J+", token: "+Y);switch(B[0]){case 1:h.push(Y),k.push(v.yytext),r.push(v.yylloc),h.push(B[1]),Y=null,P=v.yyleng,c=v.yytext,z=v.yylineno,I=v.yylloc;break;case 2:if(U=this.productions_[B[1]][1],$.$=k[k.length-U],$._$={first_line:r[r.length-(U||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(U||1)].first_column,last_column:r[r.length-1].last_column},C&&($._$.range=[r[r.length-(U||1)].range[0],r[r.length-1].range[1]]),xt=this.performAction.apply($,[c,P,z,T.yy,B[1],k,r].concat(p)),typeof xt!="undefined")return xt;U&&(h=h.slice(0,-1*U*2),k=k.slice(0,-1*U),r=r.slice(0,-1*U)),h.push(this.productions_[B[1]][0]),k.push($.$),r.push($._$),Nt=D[h[h.length-2]][h[h.length-1]],h.push(Nt);break;case 3:return!0}}return!0}},ut=function(){var m={EOF:1,parseError:function(u,h){if(this.yy.parser)this.yy.parser.parseError(u,h);else throw new Error(u)},setInput:function(l,u){return this.yy=u||this.yy||{},this._input=l,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var u=l.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},unput:function(l){var u=l.length,h=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var k=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===o.length?this.yylloc.first_column:0)+o[o.length-h.length].length-h[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[k[0],k[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(l){this.unput(this.match.slice(l))},pastInput:function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var l=this.pastInput(),u=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+u+"^"},test_match:function(l,u){var h,o,k;if(this.options.backtrack_lexer&&(k={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(k.yylloc.range=this.yylloc.range.slice(0))),o=l[0].match(/(?:\r\n?|\n).*/g),o&&(this.yylineno+=o.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+l[0].length},this.yytext+=l[0],this.match+=l[0],this.matches=l,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(l[0].length),this.matched+=l[0],h=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var r in k)this[r]=k[r];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,u,h,o;this._more||(this.yytext="",this.match="");for(var k=this._currentRules(),r=0;r<k.length;r++)if(h=this._input.match(this.rules[k[r]]),h&&(!u||h[0].length>u[0].length)){if(u=h,o=r,this.options.backtrack_lexer){if(l=this.test_match(h,k[r]),l!==!1)return l;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(l=this.test_match(u,k[o]),l!==!1?l:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var u=this.next();return u||this.lex()},begin:function(u){this.conditionStack.push(u)},popState:function(){var u=this.conditionStack.length-1;return u>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(u){return u=this.conditionStack.length-1-Math.abs(u||0),u>=0?this.conditionStack[u]:"INITIAL"},pushState:function(u){this.begin(u)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(u,h,o,k){switch(o){case 0:return this.begin("open_directive"),40;case 1:return this.begin("type_directive"),41;case 2:return this.popState(),this.begin("arg_directive"),33;case 3:return this.popState(),this.popState(),43;case 4:return 42;case 5:return this.begin("acc_title"),21;case 6:return this.popState(),"acc_title_value";case 7:return this.begin("acc_descr"),23;case 8:return this.popState(),"acc_descr_value";case 9:this.begin("acc_descr_multiline");break;case 10:this.popState();break;case 11:return"acc_descr_multiline_value";case 12:break;case 13:break;case 14:break;case 15:return 11;case 16:break;case 17:break;case 18:break;case 19:this.begin("href");break;case 20:this.popState();break;case 21:return 38;case 22:this.begin("callbackname");break;case 23:this.popState();break;case 24:this.popState(),this.begin("callbackargs");break;case 25:return 36;case 26:this.popState();break;case 27:return 37;case 28:this.begin("click");break;case 29:this.popState();break;case 30:return 35;case 31:return 5;case 32:return 12;case 33:return 13;case 34:return 14;case 35:return 15;case 36:return 16;case 37:return 18;case 38:return 17;case 39:return 19;case 40:return"date";case 41:return 20;case 42:return"accDescription";case 43:return 26;case 44:return 28;case 45:return 29;case 46:return 33;case 47:return 7;case 48:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[10,11],inclusive:!1},acc_descr:{rules:[8],inclusive:!1},acc_title:{rules:[6],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},callbackargs:{rules:[26,27],inclusive:!1},callbackname:{rules:[23,24,25],inclusive:!1},href:{rules:[20,21],inclusive:!1},click:{rules:[29,30],inclusive:!1},INITIAL:{rules:[0,5,7,9,12,13,14,15,16,17,18,19,22,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],inclusive:!0}}};return m}();G.lexer=ut;function rt(){this.yy={}}return rt.prototype=G,G.Parser=rt,new rt}();Mt.parser=Mt;var Ue=Mt;O.extend(ue);O.extend(ke);O.extend(ge);var R="",Yt="",Ft,zt="",ot=[],ct=[],Ot={},Wt=[],pt=[],et="",Pt="",ve=["active","done","crit","milestone"],Vt=[],lt=!1,Bt=!1,At=0,Xe=function(t,s,e){le.parseDirective(this,t,s,e)},He=function(){Wt=[],pt=[],et="",Vt=[],gt=0,Lt=void 0,yt=void 0,A=[],R="",Yt="",Pt="",Ft=void 0,zt="",ot=[],ct=[],lt=!1,Bt=!1,At=0,Ot={},ee()},je=function(t){Yt=t},qe=function(){return Yt},Ze=function(t){Ft=t},Qe=function(){return Ft},Je=function(t){zt=t},Ke=function(){return zt},$e=function(t){R=t},ti=function(){lt=!0},ei=function(){return lt},ii=function(){Bt=!0},ri=function(){return Bt},ni=function(t){Pt=t},si=function(){return Pt},ai=function(){return R},oi=function(t){ot=t.toLowerCase().split(/[\s,]+/)},ci=function(){return ot},li=function(t){ct=t.toLowerCase().split(/[\s,]+/)},ui=function(){return ct},fi=function(){return Ot},di=function(t){et=t,Wt.push(t)},hi=function(){return Wt},mi=function(){let t=ye(),s=10,e=0;for(;!t&&e<s;)t=ye(),e++;return pt=A,pt},xe=function(t,s,e,i){return i.includes(t.format(s.trim()))?!1:t.isoWeekday()>=6&&e.includes("weekends")||e.includes(t.format("dddd").toLowerCase())?!0:e.includes(t.format(s.trim()))},Te=function(t,s,e,i){if(!e.length||t.manualEndTime)return;let n;t.startTime instanceof Date?n=O(t.startTime):n=O(t.startTime,s,!0),n=n.add(1,"d");let a;t.endTime instanceof Date?a=O(t.endTime):a=O(t.endTime,s,!0);let[d,g]=ki(n,a,s,e,i);t.endTime=d.toDate(),t.renderEndTime=g},ki=function(t,s,e,i,n){let a=!1,d=null;for(;t<=s;)a||(d=s.toDate()),a=xe(t,e,i,n),a&&(s=s.add(1,"d")),t=t.add(1,"d");return[s,d]},It=function(t,s,e){e=e.trim();let n=/^after\s+([\d\w- ]+)/.exec(e.trim());if(n!==null){let d=null;if(n[1].split(" ").forEach(function(g){let y=it(g);y!==void 0&&(d?y.endTime>d.endTime&&(d=y):d=y)}),d)return d.endTime;{let g=new Date;return g.setHours(0,0,0,0),g}}let a=O(e,s.trim(),!0);if(a.isValid())return a.toDate();{mt.debug("Invalid date:"+e),mt.debug("With date format:"+s.trim());let d=new Date(e);if(d===void 0||isNaN(d.getTime())||d.getFullYear()<-1e4||d.getFullYear()>1e4)throw new Error("Invalid date:"+e);return d}},be=function(t){let s=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return s!==null?[Number.parseFloat(s[1]),s[2]]:[NaN,"ms"]},_e=function(t,s,e,i=!1){e=e.trim();let n=O(e,s.trim(),!0);if(n.isValid())return i&&(n=n.add(1,"d")),n.toDate();let a=O(t),[d,g]=be(e);if(!Number.isNaN(d)){let y=a.add(d,g);y.isValid()&&(a=y)}return a.toDate()},gt=0,tt=function(t){return t===void 0?(gt=gt+1,"task"+gt):t},gi=function(t,s){let e;s.substr(0,1)===":"?e=s.substr(1,s.length):e=s;let i=e.split(","),n={};Ce(i,n,ve);for(let d=0;d<i.length;d++)i[d]=i[d].trim();let a="";switch(i.length){case 1:n.id=tt(),n.startTime=t.endTime,a=i[0];break;case 2:n.id=tt(),n.startTime=It(void 0,R,i[0]),a=i[1];break;case 3:n.id=tt(i[0]),n.startTime=It(void 0,R,i[1]),a=i[2];break}return a&&(n.endTime=_e(n.startTime,R,a,lt),n.manualEndTime=O(a,"YYYY-MM-DD",!0).isValid(),Te(n,R,ct,ot)),n},yi=function(t,s){let e;s.substr(0,1)===":"?e=s.substr(1,s.length):e=s;let i=e.split(","),n={};Ce(i,n,ve);for(let a=0;a<i.length;a++)i[a]=i[a].trim();switch(i.length){case 1:n.id=tt(),n.startTime={type:"prevTaskEnd",id:t},n.endTime={data:i[0]};break;case 2:n.id=tt(),n.startTime={type:"getStartDate",startData:i[0]},n.endTime={data:i[1]};break;case 3:n.id=tt(i[0]),n.startTime={type:"getStartDate",startData:i[1]},n.endTime={data:i[2]};break}return n},Lt,yt,A=[],De={},pi=function(t,s){let e={section:et,type:et,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:s},task:t,classes:[]},i=yi(yt,s);e.raw.startTime=i.startTime,e.raw.endTime=i.endTime,e.id=i.id,e.prevTaskId=yt,e.active=i.active,e.done=i.done,e.crit=i.crit,e.milestone=i.milestone,e.order=At,At++;let n=A.push(e);yt=e.id,De[e.id]=n-1},it=function(t){let s=De[t];return A[s]},vi=function(t,s){let e={section:et,type:et,description:t,task:t,classes:[]},i=gi(Lt,s);e.startTime=i.startTime,e.endTime=i.endTime,e.id=i.id,e.active=i.active,e.done=i.done,e.crit=i.crit,e.milestone=i.milestone,Lt=e,pt.push(e)},ye=function(){let t=function(e){let i=A[e],n="";switch(A[e].raw.startTime.type){case"prevTaskEnd":{let a=it(i.prevTaskId);i.startTime=a.endTime;break}case"getStartDate":n=It(void 0,R,A[e].raw.startTime.startData),n&&(A[e].startTime=n);break}return A[e].startTime&&(A[e].endTime=_e(A[e].startTime,R,A[e].raw.endTime.data,lt),A[e].endTime&&(A[e].processed=!0,A[e].manualEndTime=O(A[e].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Te(A[e],R,ct,ot))),A[e].processed},s=!0;for(let[e,i]of A.entries())t(e),s=s&&i.processed;return s},xi=function(t,s){let e=s;K().securityLevel!=="loose"&&(e=(0,pe.sanitizeUrl)(s)),t.split(",").forEach(function(i){it(i)!==void 0&&(Se(i,()=>{window.open(e,"_self")}),Ot[i]=e)}),we(t,"clickable")},we=function(t,s){t.split(",").forEach(function(e){let i=it(e);i!==void 0&&i.classes.push(s)})},Ti=function(t,s,e){if(K().securityLevel!=="loose"||s===void 0)return;let i=[];if(typeof e=="string"){i=e.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let a=0;a<i.length;a++){let d=i[a].trim();d.charAt(0)==='"'&&d.charAt(d.length-1)==='"'&&(d=d.substr(1,d.length-2)),i[a]=d}}i.length===0&&i.push(t),it(t)!==void 0&&Se(t,()=>{ce.runFunc(s,...i)})},Se=function(t,s){Vt.push(function(){let e=document.querySelector(`[id="${t}"]`);e!==null&&e.addEventListener("click",function(){s()})},function(){let e=document.querySelector(`[id="${t}-text"]`);e!==null&&e.addEventListener("click",function(){s()})})},bi=function(t,s,e){t.split(",").forEach(function(i){Ti(i,s,e)}),we(t,"clickable")},_i=function(t){Vt.forEach(function(s){s(t)})},Di={parseDirective:Xe,getConfig:()=>K().gantt,clear:He,setDateFormat:$e,getDateFormat:ai,enableInclusiveEndDates:ti,endDatesAreInclusive:ei,enableTopAxis:ii,topAxisEnabled:ri,setAxisFormat:je,getAxisFormat:qe,setTickInterval:Ze,getTickInterval:Qe,setTodayMarker:Je,getTodayMarker:Ke,setAccTitle:ie,getAccTitle:re,setDiagramTitle:ae,getDiagramTitle:oe,setDisplayMode:ni,getDisplayMode:si,setAccDescription:ne,getAccDescription:se,addSection:di,getSections:hi,getTasks:mi,addTask:pi,findTaskById:it,addTaskOrg:vi,setIncludes:oi,getIncludes:ci,setExcludes:li,getExcludes:ui,setClickEvent:bi,setLink:xi,getLinks:fi,bindFunctions:_i,parseDuration:be,isInvalidDate:xe};function Ce(t,s,e){let i=!0;for(;i;)i=!1,e.forEach(function(n){let a="^\\s*"+n+"\\s*$",d=new RegExp(a);t[0].match(d)&&(s[n]=!0,t.shift(1),i=!0)})}var wi=function(){mt.debug("Something is calling, setConf, remove the call")},Si=(t,s)=>{let e=[...t].map(()=>-1/0),i=[...t].sort((a,d)=>a.startTime-d.startTime||a.order-d.order),n=0;for(let a of i)for(let d=0;d<e.length;d++)if(a.startTime>=e[d]){e[d]=a.endTime,a.order=d+s,d>n&&(n=d);break}return n},H,Ci=function(t,s,e,i){let n=K().gantt,a=K().securityLevel,d;a==="sandbox"&&(d=st("#i"+s));let g=a==="sandbox"?st(d.nodes()[0].contentDocument.body):st("body"),y=a==="sandbox"?d.nodes()[0].contentDocument:document,w=y.getElementById(s);H=w.parentElement.offsetWidth,H===void 0&&(H=1200),n.useWidth!==void 0&&(H=n.useWidth);let _=i.db.getTasks(),S=[];for(let m of _)S.push(m.type);S=rt(S);let L={},M=2*n.topPadding;if(i.db.getDisplayMode()==="compact"||n.displayMode==="compact"){let m={};for(let u of _)m[u.section]===void 0?m[u.section]=[u]:m[u.section].push(u);let l=0;for(let u of Object.keys(m)){let h=Si(m[u],l)+1;l+=h,M+=h*(n.barHeight+n.barGap),L[u]=h}}else{M+=_.length*(n.barHeight+n.barGap);for(let m of S)L[m]=_.filter(l=>l.type===m).length}w.setAttribute("viewBox","0 0 "+H+" "+M);let E=g.select(`[id="${s}"]`),x=Kt().domain([jt(_,function(m){return m.startTime}),Ht(_,function(m){return m.endTime})]).rangeRound([0,H-n.leftPadding-n.rightPadding]);function F(m,l){let u=m.startTime,h=l.startTime,o=0;return u>h?o=1:u<h&&(o=-1),o}_.sort(F),V(_,H,M),te(E,M,H,n.useMaxWidth),E.append("text").text(i.db.getDiagramTitle()).attr("x",H/2).attr("y",n.titleTopMargin).attr("class","titleText");function V(m,l,u){let h=n.barHeight,o=h+n.barGap,k=n.topPadding,r=n.leftPadding,D=Jt().domain([0,S.length]).range(["#00B9FA","#F95002"]).interpolate(Qt);q(o,k,r,l,u,m,i.db.getExcludes(),i.db.getIncludes()),Z(r,k,l,u),j(m,o,k,r,h,D,l),G(o,k),ut(r,k,l,u)}function j(m,l,u,h,o,k,r){let c=[...new Set(m.map(f=>f.order))].map(f=>m.find(p=>p.order===f));E.append("g").selectAll("rect").data(c).enter().append("rect").attr("x",0).attr("y",function(f,p){return p=f.order,p*l+u-2}).attr("width",function(){return r-n.rightPadding/2}).attr("height",l).attr("class",function(f){for(let[p,v]of S.entries())if(f.type===v)return"section section"+p%n.numberSectionStyles;return"section section0"});let z=E.append("g").selectAll("rect").data(m).enter(),P=i.db.getLinks();if(z.append("rect").attr("id",function(f){return f.id}).attr("rx",3).attr("ry",3).attr("x",function(f){return f.milestone?x(f.startTime)+h+.5*(x(f.endTime)-x(f.startTime))-.5*o:x(f.startTime)+h}).attr("y",function(f,p){return p=f.order,p*l+u}).attr("width",function(f){return f.milestone?o:x(f.renderEndTime||f.endTime)-x(f.startTime)}).attr("height",o).attr("transform-origin",function(f,p){return p=f.order,(x(f.startTime)+h+.5*(x(f.endTime)-x(f.startTime))).toString()+"px "+(p*l+u+.5*o).toString()+"px"}).attr("class",function(f){let p="task",v="";f.classes.length>0&&(v=f.classes.join(" "));let T=0;for(let[I,C]of S.entries())f.type===C&&(T=I%n.numberSectionStyles);let b="";return f.active?f.crit?b+=" activeCrit":b=" active":f.done?f.crit?b=" doneCrit":b=" done":f.crit&&(b+=" crit"),b.length===0&&(b=" task"),f.milestone&&(b=" milestone "+b),b+=T,b+=" "+v,p+b}),z.append("text").attr("id",function(f){return f.id+"-text"}).text(function(f){return f.task}).attr("font-size",n.fontSize).attr("x",function(f){let p=x(f.startTime),v=x(f.renderEndTime||f.endTime);f.milestone&&(p+=.5*(x(f.endTime)-x(f.startTime))-.5*o),f.milestone&&(v=p+o);let T=this.getBBox().width;return T>v-p?v+T+1.5*n.leftPadding>r?p+h-5:v+h+5:(v-p)/2+p+h}).attr("y",function(f,p){return p=f.order,p*l+n.barHeight/2+(n.fontSize/2-2)+u}).attr("text-height",o).attr("class",function(f){let p=x(f.startTime),v=x(f.endTime);f.milestone&&(v=p+o);let T=this.getBBox().width,b="";f.classes.length>0&&(b=f.classes.join(" "));let I=0;for(let[vt,Y]of S.entries())f.type===Y&&(I=vt%n.numberSectionStyles);let C="";return f.active&&(f.crit?C="activeCritText"+I:C="activeText"+I),f.done?f.crit?C=C+" doneCritText"+I:C=C+" doneText"+I:f.crit&&(C=C+" critText"+I),f.milestone&&(C+=" milestoneText"),T>v-p?v+T+1.5*n.leftPadding>r?b+" taskTextOutsideLeft taskTextOutside"+I+" "+C:b+" taskTextOutsideRight taskTextOutside"+I+" "+C+" width-"+T:b+" taskText taskText"+I+" "+C+" width-"+T}),K().securityLevel==="sandbox"){let f;f=st("#i"+s);let p=f.nodes()[0].contentDocument;z.filter(function(v){return P[v.id]!==void 0}).each(function(v){var T=p.querySelector("#"+v.id),b=p.querySelector("#"+v.id+"-text");let I=T.parentNode;var C=p.createElement("a");C.setAttribute("xlink:href",P[v.id]),C.setAttribute("target","_top"),I.appendChild(C),C.appendChild(T),C.appendChild(b)})}}function q(m,l,u,h,o,k,r,D){let c=k.reduce((T,{startTime:b})=>T?Math.min(T,b):b,0),z=k.reduce((T,{endTime:b})=>T?Math.max(T,b):b,0),P=i.db.getDateFormat();if(!c||!z)return;let nt=[],f=null,p=O(c);for(;p.valueOf()<=z;)i.db.isInvalidDate(p,P,r,D)?f?f.end=p:f={start:p,end:p}:f&&(nt.push(f),f=null),p=p.add(1,"d");E.append("g").selectAll("rect").data(nt).enter().append("rect").attr("id",function(T){return"exclude-"+T.start.format("YYYY-MM-DD")}).attr("x",function(T){return x(T.start)+u}).attr("y",n.gridLineStartPadding).attr("width",function(T){let b=T.end.add(1,"day");return x(b)-x(T.start)}).attr("height",o-l-n.gridLineStartPadding).attr("transform-origin",function(T,b){return(x(T.start)+u+.5*(x(T.end)-x(T.start))).toString()+"px "+(b*m+.5*o).toString()+"px"}).attr("class","exclude-range")}function Z(m,l,u,h){let o=Zt(x).tickSize(-h+l+n.gridLineStartPadding).tickFormat(Ct(i.db.getAxisFormat()||n.axisFormat||"%Y-%m-%d")),r=/^([1-9]\d*)(minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||n.tickInterval);if(r!==null){let D=r[1];switch(r[2]){case"minute":o.ticks(bt.every(D));break;case"hour":o.ticks(_t.every(D));break;case"day":o.ticks(Dt.every(D));break;case"week":o.ticks(wt.every(D));break;case"month":o.ticks(St.every(D));break}}if(E.append("g").attr("class","grid").attr("transform","translate("+m+", "+(h-50)+")").call(o).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),i.db.topAxisEnabled()||n.topAxis){let D=qt(x).tickSize(-h+l+n.gridLineStartPadding).tickFormat(Ct(i.db.getAxisFormat()||n.axisFormat||"%Y-%m-%d"));if(r!==null){let c=r[1];switch(r[2]){case"minute":D.ticks(bt.every(c));break;case"hour":D.ticks(_t.every(c));break;case"day":D.ticks(Dt.every(c));break;case"week":D.ticks(wt.every(c));break;case"month":D.ticks(St.every(c));break}}E.append("g").attr("class","grid").attr("transform","translate("+m+", "+l+")").call(D).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function G(m,l){let u=0,h=Object.keys(L).map(o=>[o,L[o]]);E.append("g").selectAll("text").data(h).enter().append(function(o){let k=o[0].split($t.lineBreakRegex),r=-(k.length-1)/2,D=y.createElementNS("http://www.w3.org/2000/svg","text");D.setAttribute("dy",r+"em");for(let[c,z]of k.entries()){let P=y.createElementNS("http://www.w3.org/2000/svg","tspan");P.setAttribute("alignment-baseline","central"),P.setAttribute("x","10"),c>0&&P.setAttribute("dy","1em"),P.textContent=z,D.appendChild(P)}return D}).attr("x",10).attr("y",function(o,k){if(k>0)for(let r=0;r<k;r++)return u+=h[k-1][1],o[1]*m/2+u*m+l;else return o[1]*m/2+l}).attr("font-size",n.sectionFontSize).attr("class",function(o){for(let[k,r]of S.entries())if(o[0]===r)return"sectionTitle sectionTitle"+k%n.numberSectionStyles;return"sectionTitle"})}function ut(m,l,u,h){let o=i.db.getTodayMarker();if(o==="off")return;let k=E.append("g").attr("class","today"),r=new Date,D=k.append("line");D.attr("x1",x(r)+m).attr("x2",x(r)+m).attr("y1",n.titleTopMargin).attr("y2",h-n.titleTopMargin).attr("class","today"),o!==""&&D.attr("style",o.replace(/,/g,";"))}function rt(m){let l={},u=[];for(let h=0,o=m.length;h<o;++h)Object.prototype.hasOwnProperty.call(l,m[h])||(l[m[h]]=!0,u.push(m[h]));return u}},Ei={setConf:wi,draw:Ci},Mi=t=>`
  .mermaid-main-font {
    font-family: "trebuchet ms", verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    // text-height: 14px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
    text {
      font-family: ${t.fontFamily};
      fill: ${t.textColor};
    }
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }

  // .taskText:not([font-size]) {
  //   font-size: ${t.ganttFontSize};
  // }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
    // font-size: ${t.ganttFontSize};
  }

  /* Special case clickable */
  .task.clickable {
    cursor: pointer;
  }
  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor}    ;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
`,Ai=Mi,Hi={parser:Ue,db:Di,renderer:Ei,styles:Ai};export{Hi as diagram};
