(function(){(function(a){"use strict";var b=Function.prototype.call.bind(Function.prototype.toString);var c=[];var d=[];var e={toString:function(){var f=c.lastIndexOf(this);if(f>=0){return d[f]}return b(this)}};e.toString.prototype=void 0;c=[e.toString];d=[b(Function.prototype.toString)];function g(h,i){if(typeof i!=="function"){return}try{var j=e.toString.call(i);d.push(j);c.push(h);if(Function.prototype.toString!==e.toString){Function.prototype.toString=e.toString}}catch(k){}}var l="ZT4tcOwEFkVEzfiT1T6u";var m=Object.call.bind(Object.bind,Object.call);var n=m(Object.call);var o=Array.prototype.push;var p=Array.prototype.indexOf;var q=Array.prototype.concat;var r=Array.prototype.slice;function s(){return{__callbacks:[],notify:function(t){var u;var v=n(r,this.__callbacks);var w=v.length;for(var x=w-1;x>=0;--x){try{var y=v[x];if(y!=null){var z=y(t,u);if(z!=null){u=z}}}catch(A){}}return u},register:function(B){n(o,this.__callbacks,B)},unregister:function(C){var D=n(p,this.__callbacks,C);if(D!==-1){this.__callbacks[D]=null}},__merge:function(E){if(E!=null){this.__callbacks=n(q,this.__callbacks,E.__callbacks)}}}}var F=Object.hasOwnProperty;var G=Object.getPrototypeOf;var H=Object.getOwnPropertyDescriptor;var I=Object.getOwnPropertyNames;var J=Object.defineProperty;var K=Object.call.bind(Object.bind,Object.call);var L=K(Object.apply);var M=K(Object.call);var N=Object.create;var O=Function.prototype.bind;var P=Array.prototype.push;var Q=Array.prototype.indexOf;var R=["arguments","caller"];var S;if(typeof Reflect!=="undefined"&&Reflect!=null&&typeof Reflect.construct==="function"){S=Reflect.construct}else{S=function(T,U){var V=[null];L(P,V,U);var W=L(O,T,V);return new W}}function X(Y,Z){var ba=Y;while(ba!=null){var bb=H(ba,Z);if(bb!=null){return{containingObj:ba,desc:bb}}ba=G(ba)}return null}var bc=N(null);function bd(be){if(be==null){return}bc=be}function bf(bg,bh){var bi=bc[bh];if(bi==null){return null}for(var bj=0;bj<bi.length;++bj){var bk=bi[bj];if(bg===bk.object){return bk}}return null}function bl(bm,bn){var bo=bc[bm];if(bo==null){bo=[];bc[bm]=bo}M(P,bo,bn)}function bp(bq,br){var bs=X(bq,br);if(bs==null){return void 0}var bt=bs.containingObj,bu=bs.desc;var bv=bf(bt,br);if(bv!=null){return bv.original}if(M(F,bu,"value")){return void 0}var bw=N(null);if(bu.get!=null){bw.get=bu.get}if(bu.set!=null){bw.set=bu.set}bl(br,{object:bt,original:bw});return bw}function bx(by,bz,bA){if(bA===void 0){bA=false}var bB=X(by,bz);if(bB==null){return null}var bC=bB.containingObj,bD=bB.desc;var bE=bD.configurable,bF=bD.writable;var bG=bD.value;if(!M(F,bD,"value")){return null}var bH=N(null);bH.value=bG;if(bE===false&&bF===false||typeof bG!=="function"){return{originals:bH}}var bI=bf(bC,bz);if(bI!=null){if(bI.result!=null){return bI.result}bG=bI.original;bH.value=bG}var bJ=s();var bK=s();bD.value=function bL(){var bM=arguments;var bN=bJ.notify({args:bM,thisObj:this});if(bN){if(bN.bypassResult!=null){if(bN.bypassResult.throw){throw bN.bypassResult.value}return bN.bypassResult.value}else if(bN.args!=null){bM=bN.args}}var bO;var bP={args:arguments,thisObj:this,threw:true,result:null};try{if(bA&&this instanceof bL){bO=S(bG,bM)}else{bO=L(bG,this,bM)}bP={args:arguments,thisObj:this,threw:false,result:bO}}finally{var bQ=bK.notify(bP);if(bQ&&bQ.bypassResult!=null){if(bQ.bypassResult.throw){throw bQ.bypassResult.value}return bQ.bypassResult.value}}return bO};var bR=bD.value;g(bR,bG);var bS=I(bG);for(var bT=0;bT<bS.length;++bT){var bU=bS[bT];if(M(Q,R,bU)===-1){var bV=H(bR,bU);if(bV==null||bV.configurable===true||bV.writable===true){var bW=H(bG,bU);if(bW!=null){J(bR,bU,bW)}}}}try{if(!M(F,bG,"prototype")){bR.prototype=void 0}}catch(bX){}J(bC,bz,bD);var bY={onBeforeInvoke:bJ,onAfterInvoke:bK,originals:bH};bl(bz,{object:bC,result:bY,original:bG});return bY}function bZ(ca,cb){var cc=X(ca,cb);if(cc==null){return null}var cd=cc.containingObj,ce=cc.desc;var cf=ce.configurable;var cg=ce,ch=cg.get,ci=cg.set;var cj=M(F,ce,"value");var ck=N(null);if(cf===false||cj){if(ch!=null){ck.get=ch}if(ci!=null){ck.set=ci}return{originals:ck}}var cl=bf(cd,cb);if(cl!=null){if(cl.result!=null){return cl.result}ch=cl.original.get;ci=cl.original.set}var cm={onAfterGet:void 0,onBeforeGet:void 0,onAfterSet:void 0,onBeforeSet:void 0,originals:{}};if(ch!=null){ck.get=ch;var cn=s();var co=s();ce.get=function(){var cp=cn.notify({thisObj:this});if(cp&&cp.bypassResult!=null){if(cp.bypassResult.throw){throw cp.bypassResult.value}return cp.bypassResult.value}var cq;var cr={thisObj:this,result:null,threw:true};try{cq=M(ch,this);cr={thisObj:this,result:cq,threw:false}}finally{var cs=co.notify(cr);if(cs&&cs.bypassResult!=null){if(cs.bypassResult.throw){throw cs.bypassResult.value}return cs.bypassResult.value}}return cq};g(ce.get,ch);try{if(!M(F,ch,"prototype")){ce.get.prototype=void 0}}catch(ct){}cm.onBeforeGet=cn;cm.onAfterGet=co}if(ci!=null){ck.set=ci;var cu=s();var cv=s();ce.set=function(cw){var cx=cw;var cy=cu.notify({param:cw,thisObj:this});if(cy){if(cy.bypassResult!=null){if(cy.bypassResult.throw){throw cy.bypassResult.value}return cy.bypassResult.value}else if(M(F,cy,"param")){cx=cy.param}}var cz;var cA={param:cw,thisObj:this,result:null,threw:true};try{cz=M(ci,this,cx);cA={param:cw,thisObj:this,result:cz,threw:false}}finally{var cB=cv.notify(cA);if(cB&&cB.bypassResult!=null){if(cB.bypassResult.throw){throw cB.bypassResult.value}return cB.bypassResult.value}}return cz};g(ce.set,ci);try{if(!M(F,ci,"prototype")){ce.set.prototype=void 0}}catch(cC){}cm.onBeforeSet=cu;cm.onAfterSet=cv}J(cd,cb,ce);cm.originals=ck;bl(cb,{object:cd,result:cm,original:ck});return cm}try{if(typeof document.createEvent==="function"){var cD=document.createEvent("CustomEvent");var cE=false;cD.initCustomEvent(l,false,false,{exchange:function(cF){bd(cF);cE=true}});dispatchEvent(cD);if(!cE){var cG=bp(CustomEvent.prototype,"detail");if(cG!=null&&typeof cG.get==="function"){addEventListener(l,function(cH){var cI=cH;var cJ=M(cG.get,cI);if(cJ!=null&&typeof cJ.exchange==="function"){cJ.exchange(bc)}})}}}}catch(cK){}var cL={ftp:"21",gopher:"70",http:"80",https:"443",ws:"80",wss:"443"};var cM=document;var cN=window;var cO=function(){var cP=Object.create(null);var cQ=Object.getOwnPropertyDescriptor(cN.HTMLAnchorElement.prototype,"href");if(cQ!=null&&cQ.get!=null&&cQ.set!=null){cP.anchorHrefGet=Object.call.bind(cQ.get);cP.anchorHrefSet=Object.call.bind(cQ.set)}else{cP.anchorHrefGet=function(cR){return cR.href};cP.anchorHrefSet=function(cS,cT){cS.href=cT}}return cP}();var cU=Object.create(null);function cV(cW){return cW.replace(/(%(2[146-9a-f]|3[0-9abd]|4[0-9a-f]|5[0-9abdf]|6[1-9a-f]|7[0-9ae]))/gi,function(cX){return decodeURIComponent(cX)})}function cY(cZ,da){var db=cZ||cN.location+"";var dc=/^https?:\/\//.test(db);if(dc){var dd=cU[db];if(dd!=null){return dd}}var de=da==null?cO:da;var df=cM.createElement("a");de.anchorHrefSet(df,db);if(df.host===""){de.anchorHrefSet(df,de.anchorHrefGet(df))}var dg=df.protocol.slice(0,df.protocol.length-1);var dh={protocol:dg,hostname:df.hostname,port:df.port===cL[dg]?"":df.port,pathname:df.pathname[0]==="/"?cV(df.pathname):"/"+cV(df.pathname),search:cV(df.search).slice(1)};if(dc){cU[db]=dh}return dh}var di=36;var dj=1;var dk=26;var dl=38;var dm=700;var dn=72;var dp=128;var dq=45;var dr="-";var ds=253;var dt=0x1FFFFFFFFFFFFF;var du=di-dj;var dv="a".charCodeAt(0);var dw="z".charCodeAt(0);var dx="0".charCodeAt(0);var dy="9".charCodeAt(0);var dz="xn--";var dA=/^[xX][nN]--/;function dB(dC){dD(dC);var dE=dC.split(".");var dF=[];for(var dG=0;dG<dE.length;dG++){var dH=dE[dG];if(!dA.test(dH)){dF.push(dH);continue}var dI=dJ(dH);dF.push(dK(dL(dI)))}return dF.join(".")}function dM(dN){return dN>=dx&&dN<=dy}function dO(dP){return dP>=dv&&dP<=dw}function dQ(dR){return dR===dq}function dK(dS){var dT=[];if(dS!=null){dS.forEach(function(dU){dT.push(String.fromCharCode(dU))})}return dT.join("")}function dD(dV){if(dV==null){throw new Error("Bad Input: Input cannot be null")}if(dV.toLowerCase==null){throw new Error("Unknown Input")}if(dV.length>63){throw new Error("Bad Input: Maximum domain length cannot be greater than 63")}}function dJ(dW){if(!dW.length){throw new Error("Bad Input: Zero length punycodes not allowed")}if(dW[dW.length-1]===dr){throw new Error("Bad Input: Host name labels cannot end with a hyphen-minus")}var dX=dW.slice(dz.length);var dY=[].map.call(dX.toLowerCase(),function(dZ){return dZ.charCodeAt(0)});if(!dY.every(function(ea){return dM(ea)||dO(ea)||dQ(ea)})){throw new Error("Bad Input: Input contains invalid code points")}return dY}function dL(eb){var ec=eb.length;var ed=0;var ee=0;var ef=[];var eg=0;var eh=0;var ei=dp;var ej=dn;ee=eb.lastIndexOf(dq);if(ee>ds){throw new Error("Bad Input: Delimiter index can't exceed maximum output string length limit("+ds+").")}ef=ee>=0?eb.slice(0,ee):[];for(eg=ee+1;eg<ec;ed++){var ek=1;var el=0;var em=di;var en=0;var eo=ed;for(;;){en=ep(eb[eg]);eg++;if(en>=di){throw new Error("Bad Input: Decoded digit value cannot be greater than base.")}if(en>(dt-ed)/ek){throw new Error("Overflow: Decoded digit value cannot be greater than allowed positional value")}ed+=en*ek;el=em<=ej?dj:em>=ej+dk?dk:em-ej;if(en<el)break;if(ek>dt/du){throw new Error("Overflow: Unexpected weight")}ek*=di-el;em+=di}eh=ef.length;ej=eq(ed-eo,eh+1,eo===0);if(ed/(eh+1)>dt-ei){throw new Error("Overflow: Unexpected increment")}ei+=Math.floor(ed/(eh+1));ed%=eh+1;if(eh>=ds){throw new Error("Overflow: Output string length cannot be greater than MAX_OUT(253)")}ef.splice(ed,0,Math.floor(ei))}return ef}function eq(er,es,et){var eu;var ev=et?Math.floor(er/dm):er>>1;ev+=Math.floor(ev/es);for(eu=0;ev>du*dk/2;eu+=di){ev=Math.floor(ev/(di-dj))}return Math.floor(eu+(du+1)*ev/(ev+dl))}function ep(ew){return dO(ew)?ew-dv:dM(ew)?ew-dx+dk:di}var ex=/[xX][nN]--/;function ey(ez,eA,eB){return ez[eA[0]].test(eB.protocol)&&ez[eA[1]].test(eB.hostname)&&ez[eA[2]].test(eB.port)&&ez[eA[3]].test(eB.pathname)&&ez[eA[4]].test(eB.search)}function eC(eD,eE,eF,eG){var eH=cY(eD.url);if(eH.hostname&&ex.test(eH.hostname)){eH.hostname=dB(eH.hostname)}var eI=eD.method.toLowerCase();if(eF){try{if(eG){var eJ=eG();if(eJ){var eK=eH.protocol,eL=eH.hostname,eM=eH.pathname;eM=decodeURIComponent(eM);return eJ.some(function(eN){return(eN.method.toLowerCase()==="any"||eN.method.toLowerCase()===eI)&&eN.protocol.test(eK)&&eN.host.test(eL)&&eN.path.test(eM)})}return false}return false}catch(eO){return false}}else{var eP=eE[0];return eE[1].some(function(eQ){return eQ[0].some(function(eR){return eR.toLowerCase()==="any"||eR.toLowerCase()===eI})&&ey(eP,eQ[1],eH)})}}var eS=bx(window,"fetch");var eT=function(eU){var eV;if(eS==null||window.Promise==null||window.Request==null||typeof eU!=="function"){return}var eW=[];var eX=window.fetch;var eY=function(eZ,fa){if(fa!=null&&fa.bypassResult!=null){return fa}if(eZ.args&&eZ.args.length>0){var fb=new(Function.bind.apply(window.Request,[null].concat([].slice.call(eZ.args))));var fc={url:fb.url,method:fb.method};if(eU(fc)){return{bypassResult:{value:new window.Promise(function(fd,fe){var ff=function(){var fg=eX.apply(null,eZ.args);fg.then(fd,fe)};eW.push(ff)}),throw:false}}}}return fa};(eV=eS.onBeforeInvoke)==null?void 0:eV.register(eY);return{trigger:function(){eW.forEach(function(fh){return fh()})},teardown:function(){var fi;(fi=eS.onBeforeInvoke)==null?void 0:fi.unregister(eY)}}};var fj,fk,fl,fm,fn;var fo=bx((fj=window.XMLHttpRequest)==null?void 0:fj.prototype,"open");var fp=bx((fk=window.XMLHttpRequest)==null?void 0:fk.prototype,"send");var fq=bx((fl=window.XMLHttpRequest)==null?void 0:fl.prototype,"abort");var fr=bx((fm=window.XMLHttpRequest)==null?void 0:fm.prototype,"setRequestHeader");var fs=bZ((fn=window.XMLHttpRequest)==null?void 0:fn.prototype,"timeout");var ft=function(fu,fv){var fw,fx,fy,fz,fA;if(fo==null||fp==null||fq==null||fr==null||fs==null){return}var fB=[];var fC=XMLHttpRequest.prototype.send;var fD=false;var fE="2"+fu;var fF="__4"+fu;var fG="__to"+fu;var fH=1;var fI=2;var fJ=function(fK,fL){if(fL!=null&&fL.bypassResult!=null||fD){return fL}if(fK.args==null||fK.args.length<2){return fL}var fM,fN=null;var fO;if(fL!=null&&fL.args!=null){fM=fL.args[0];fN=fL.args[1];fO=fL.args[2]==null?true:fL.args[2]}else{fM=(""+fK.args[0]).toLowerCase();fN=fK.args[1];fO=fK.args[2]==null?true:fK.args[2]}var fP={method:fM,url:fN};Object.defineProperty(fK.thisObj,fu,{writable:true,configurable:true,enumerable:false,value:fP});if(fO){if(fv(fP)){Object.defineProperty(fK.thisObj,fE,{writable:true,configurable:true,enumerable:false,value:fH})}}else{delete fK.thisObj[fE]}return{args:[fM,fN,fO]}};(fw=fo.onBeforeInvoke)==null?void 0:fw.register(fJ);var fQ=function(fR,fS){if(fS!=null&&fS.bypassResult!=null||fR.thisObj.readyState!==XMLHttpRequest.OPENED||fD){return fS}var fT=Date.now();if({}.hasOwnProperty.call(fR.thisObj,fE)&&fR.thisObj[fE]===fH){fR.thisObj[fE]=fI;Object.defineProperty(fR.thisObj,fF,{writable:true,configurable:true,enumerable:false,value:fT});if(fR.thisObj.timeout===0){var fU=function(){fC.apply(fR.thisObj,fR.args)};fB.push({boundFn:fU,that:fR.thisObj,args:fR.args});return{bypassResult:{value:void 0,throw:false}}}var fV=fR.thisObj.timeout;Object.defineProperty(fR.thisObj,fG,{writable:true,configurable:true,enumerable:false,value:setTimeout(function(){delete fR.thisObj[fG];fR.thisObj.timeout=1;fC.apply(fR.thisObj,fR.args)},fV)});var fW=function(){if({}.hasOwnProperty.call(fR.thisObj,fG)){fC.apply(fR.thisObj,fR.args)}};fB.push({boundFn:fW,that:fR.thisObj,args:fR.args});return{bypassResult:{value:void 0,throw:false}}}return fS};(fx=fp.onBeforeInvoke)==null?void 0:fx.register(fQ);var fX=function(fY){for(var fZ=0;fZ<fB.length;fZ++){var ga=fB[fZ];if(ga!=null&&ga.that===fY){return fZ}}return-1};var gb=function(gc,gd){if(gd!=null&&gd.bypassResult!=null||fD){return gd}if({}.hasOwnProperty.call(gc.thisObj,fE)&&gc.thisObj[fE]===fI){if({}.hasOwnProperty.call(gc.thisObj,fG)){clearTimeout(gc.thisObj[fG])}var ge=fX(gc.thisObj);if(ge!==-1){var gf=fB[ge].args;fB[ge]=null;fC.apply(gc.thisObj,gf)}}return gd};(fy=fq.onBeforeInvoke)==null?void 0:fy.register(gb);var gg=function(gh,gi){if(gi!=null&&gi.bypassResult!==null||fD){return gi}if(gh.args&&gh.args.length<2){return gi}if({}.hasOwnProperty.call(gh.thisObj,fE)&&gh.thisObj[fE]===fI){var gj=fX(gh.thisObj);if(gj!==-1){fB[gj]=null}var gk=null;try{gk=new DOMException("Failed to execute 'setRequestHeader' on 'XMLHttpRequest': The object's state must be OPENED")}catch(gl){gk=new Error("InvalidStateError")}return{bypassResult:{value:gk,throw:true}}}return gi};(fz=fr.onBeforeInvoke)==null?void 0:fz.register(gg);var gm=fs.originals;var gn=gm.get;var go;if(typeof gn==="function"){var gp;go=function(gq,gr){if(gr!=null&&gr.bypassResult!==null||fD){return gr}var gs=gn.call(gq.thisObj);if({}.hasOwnProperty.call(gq.thisObj,fE)){return{bypassResult:{value:gs,throw:false}}}return gr};(gp=fs.onBeforeGet)==null?void 0:gp.register(go)}var gt=function(gu,gv){if(gv!=null&&gv.bypassResult!==null||fD){return gv}if(gu.thisObj.readyState===XMLHttpRequest.DONE){return gv}if(gu.param==null){return gv}if({}.hasOwnProperty.call(gu.thisObj,fE)&&gu.thisObj[fE]===fI){if({}.hasOwnProperty.call(gu.thisObj,fG)){clearTimeout(gu.thisObj[fG])}}return gv};(fA=fs.onBeforeSet)==null?void 0:fA.register(gt);return{trigger:function(){for(var gw=0;gw<fB.length;gw++){var gx=fB[gw];if(gx!=null&&gx.that!=null){if(gx.that.timeout===0){gx.boundFn();continue}if({}.hasOwnProperty.call(gx.that,fG)){clearTimeout(gx.that[fG])}if({}.hasOwnProperty.call(gx.that,fF)){var gy=Date.now()-gx.that[fF];if(gy<gx.that.timeout){gx.that.timeout=gx.that.timeout-gy}else{gx.that.timeout=1}}gx.boundFn()}else{}}},teardown:function(){var gz,gA,gB,gC,gD,gE;(gz=fo.onBeforeInvoke)==null?void 0:gz.unregister(fJ);(gA=fp.onBeforeInvoke)==null?void 0:gA.unregister(fQ);(gB=fr.onBeforeInvoke)==null?void 0:gB.unregister(gg);(gC=fq.onBeforeInvoke)==null?void 0:gC.unregister(gb);(gD=fs.onBeforeGet)==null?void 0:gD.unregister(go);(gE=fs.onBeforeSet)==null?void 0:gE.unregister(gt)}}};var gF={};{var gG="\u202EWDYPEPwHz\u202D";var gH=XMLHttpRequest;var gI;var gJ}{var gK=window.fetch;var gL}var gM="\u202EDjPtjdzEy\u202D";var gN="-2\u202EDjPtjdzEy\u202D";var gO=void 0;var gP=Object.defineProperty.bind(Object);function gQ(gR,gS,gT,gU,gV){if(gU==="function"){gF[gR]=bx(gW(gT),gS,!!gV)}else if(gU==="accessor"){gF[gR]=bZ(gW(gT),gS)}}function gW(gX){var gY=window;for(var gZ=0;gZ<gX.length;gZ++){if(!{}.hasOwnProperty.call(gY,gX[gZ])){return void 0}gY=gY[gX[gZ]]}return gY}{var ha=[[/(?:)/,/^((?=.*\/account\/branding\/save))/i,/^((?=.*\/account\/privacy\/request\/users_emails))/i,/^((?=.*signup_checkemail))/i,/^((?=.*\/account\/privacy\/data_residency))/i,/^((?=.*\/account\/privacy\/request\/upload_emails))/i,/^((?=\/user_activate))/i,/^((?=.*\/billing\/batch\/cancel))/i,/^((?=.*\/billing\/contactus\/submit))/i,/^((?=.*\/buy\/freetrial))/i,/^((?=.*\/buy\/subscription))/i,/^((?=.*\/buy\/signup))/i,/^((?=.*\/billing\/plan\/cancel_subplan))/i,/^((?=.*\/billing\/plan\/cancel)(?!.*cancel_subplan))/i,/^((?=\/signin\/choose\/confirm_change_email)|(?=\/signin\/choose\/resend_confirmation))/i,/^((?=.*\/change_owner\/send_email))/i,/^((?=.*\/change_recipient))/i,/^((?=.*\/continue_change_email))/i,/^((?=.*\/deny_change_email_request))/i,/^((?=.*forgot_password_submit))/i,/^((?=\/invite_signup_colleagues))/i,/^((?=.*signin)(?!.*paynow)(?!.*otp))/i,/^((?=.*\/rest\/meeting\/registrant\/)|(?=.*\/rest\/meeting\/registration\/)|(?=.*\/meeting\/saveregister\/))/i,/^((?=.*\/meeting\/checkrecurrence))/i,/^((?=.*\/meeting\/pairing))/i,/^((?=.*\/meeting\/save)(?!.*saveregister)(?!.*rest))/i,/^((?=.*\/meeting\/savepmi))/i,/^((?=.*\/opt_gdprcall))/i,/^((?=.*\/paynow)(?!.*payment\-success))/i,/^((?=.*\/profile\/change_email))/i,/^((?=.*\/profile\/cellphone\/send))/i,/^((?=.*\/partners\/submit\-form))/i,/^((?=.*\/billing\/plan\/reactivate_subplan))/i,/^((?=.*\/billing\/plan\/reactivate)(?!.*reactivate_subplan))/i,/^((?=.*\/recording\/register)|(?=.*\/rec\/register))/i,/^((?=.*\/recording\/validate_meet_passwd)|(?=.*\/rec\/validate_meet_passwd))/i,/^((?=.*\/recording\/validate_passwd)|(?=\/rec\/validate_passwd$))/i,/^((?=.*\/resend_e_sign))/i,/^((?=.*\/rest\/meeting\/save))/i,/^((?=.*\/rest\/meeting\/save_pmi))/i,/^((?=.*\/billing\/z\/payment\-success))/i,/^((?=.*\/billing\/z\/billto))/i,/^((?=.*\/billing\/pbx\/account\/save_cid))/i,/^((?=.*\/billing\/z\/paymethod))/i,/^((?=.*\/billing\/z\/soldto))/i,/^((?=\/send_activation))/i,/^((?=\/sendloginfaildetail))/i,/^((?=.*\/signin\/otp\/resend))/i,/^((?=.*\/signin\/otp\/verify))/i,/^((?=.*\/meeting\/register\/shareviaemail))/i,/^((?=\/signin\/term_accept))/i,/^((?=\/feed))/i,/^((?=.*\/paynow\/lcr\/payment\-success))/i,/^((?=.*\/terminate\/sendemail))/i,/^((?=.*\/terminate_unusual_login))/i,/^((?=.*\/verify_coupon))/i,/^((?=.*\/webinar\/doschedule))/i,/^((?=.*\/rest\/webinar\/registrant\/)|(?=.*\/webinar\/register)|(?=.*\/rest\/webinar\/registration\/))/i,/^((?=.*\/zr\/bindingcode\/bind))/i,/^((?=.*\/zr\/bindingcode\/device\/get))/i],[[["POST"],[0,0,0,1,0]],[["POST"],[0,0,0,2,0]],[["POST"],[0,0,0,3,0]],[["POST"],[0,0,0,4,0]],[["POST"],[0,0,0,5,0]],[["POST"],[0,0,0,6,0]],[["POST"],[0,0,0,7,0]],[["POST"],[0,0,0,8,0]],[["POST"],[0,0,0,9,0]],[["POST"],[0,0,0,10,0]],[["POST"],[0,0,0,11,0]],[["POST"],[0,0,0,12,0]],[["POST"],[0,0,0,13,0]],[["POST"],[0,0,0,14,0]],[["POST"],[0,0,0,15,0]],[["POST"],[0,0,0,16,0]],[["POST"],[0,0,0,17,0]],[["POST"],[0,0,0,18,0]],[["POST"],[0,0,0,19,0]],[["POST"],[0,0,0,20,0]],[["POST"],[0,0,0,21,0]],[["POST"],[0,0,0,22,0]],[["POST"],[0,0,0,23,0]],[["POST"],[0,0,0,24,0]],[["POST"],[0,0,0,25,0]],[["POST"],[0,0,0,26,0]],[["POST"],[0,0,0,27,0]],[["POST"],[0,0,0,28,0]],[["POST"],[0,0,0,29,0]],[["POST"],[0,0,0,30,0]],[["POST"],[0,0,0,31,0]],[["POST"],[0,0,0,32,0]],[["POST"],[0,0,0,33,0]],[["POST"],[0,0,0,34,0]],[["POST"],[0,0,0,35,0]],[["POST"],[0,0,0,36,0]],[["POST"],[0,0,0,37,0]],[["POST"],[0,0,0,38,0]],[["POST"],[0,0,0,39,0]],[["POST"],[0,0,0,40,0]],[["POST"],[0,0,0,41,0]],[["POST"],[0,0,0,42,0]],[["POST"],[0,0,0,43,0]],[["POST"],[0,0,0,44,0]],[["POST"],[0,0,0,45,0]],[["POST"],[0,0,0,46,0]],[["POST"],[0,0,0,47,0]],[["POST"],[0,0,0,48,0]],[["POST"],[0,0,0,49,0]],[["POST"],[0,0,0,50,0]],[["POST"],[0,0,0,51,0]],[["POST"],[0,0,0,52,0]],[["POST"],[0,0,0,53,0]],[["POST"],[0,0,0,54,0]],[["POST"],[0,0,0,55,0]],[["POST"],[0,0,0,56,0]],[["POST"],[0,0,0,57,0]],[["POST"],[0,0,0,58,0]],[["POST"],[0,0,0,59,0]]]];var hb=false;var hc=function(){return window[""]}}gQ("CustomEvent","CustomEvent",[],"function",true);gQ("cancelBubble","cancelBubble",["Event","prototype"],"accessor");gQ("fetch","fetch",[],"function");gQ("formSubmit","submit",["HTMLFormElement","prototype"],"function");gQ("preventDefault","preventDefault",["Event","prototype"],"function");gQ("setRequestHeader","setRequestHeader",["XMLHttpRequest","prototype"],"function");gQ("stopImmediatePropagation","stopImmediatePropagation",["Event","prototype"],"function");gQ("stopPropagation","stopPropagation",["Event","prototype"],"function");gQ("timeout","timeout",["XMLHttpRequest","prototype"],"accessor");gQ("xhrAbort","abort",["XMLHttpRequest","prototype"],"function");gQ("xhrOpen","open",["XMLHttpRequest","prototype"],"function");gQ("xhrSend","send",["XMLHttpRequest","prototype"],"function");(function(){if(gH==null){return}var hd=gF.setRequestHeader==null?gH.prototype.setRequestHeader:gF.setRequestHeader.originals.value;if(gF.xhrOpen!=null){gI=function(he,hf){if(hf!=null&&hf.bypassResult!=null||he.args==null||he.args.length<2){return hf}var hg,hh=null;var hi;var hj=hf!=null&&hf.args!=null?hf.args:he.args;var hg=hj[0];var hh=hj[1];var hi=hj[2]==null?true:hj[2];gP(he.thisObj,gG,{writable:true,configurable:true,enumerable:false,value:{method:hg,url:hh}});return{args:[hg,hh,hi]}};gF.xhrOpen.onBeforeInvoke.register(gI)}if(gF.xhrSend!=null){gJ=function(hk,hl){if(hl!=null&&hl.bypassResult!=null){return hl}if(gO!=null&&gG in hk.thisObj&&gO.shouldHook(hk.thisObj[gG])){var hm=gO.getEncodedData();if(hm){for(var hn in hm){if(!{}.hasOwnProperty.call(hm,hn))continue;var ho=hm[hn];var hp=gO.config.headerNamePrefix+hn;var hq=gO.chunk(hp,ho,gO.config.headerChunkSize);for(var hr in hq){if(!{}.hasOwnProperty.call(hq,hr))continue;hd.call(hk.thisObj,hr,hq[hr])}}}}return hl};gF.xhrSend.onBeforeInvoke.register(gJ)}}());(function(){if(gK==null){return}var hs=window.Request;if(gF.fetch!=null&&window.fetch!=null&&hs!=null){var ht=function(hu,hv){if(hv!=null&&hv.bypassResult!=null){return hv}if(hu.args&&hu.args.length>0){var hw=hu.args[0];var hx=hu.args[1];var hy=new hs(hw,hx);var hz={url:hy.url,method:hy.method};if(gO!=null&&gO.shouldHook(hz)){var hA=gO.getEncodedData();if(hA){for(var hB in hA){if(!{}.hasOwnProperty.call(hA,hB))continue;var hC=hA[hB];var hD=gO.config.headerNamePrefix+hB;var hE=gO.chunk(hD,hC,gO.config.headerChunkSize);for(var hF in hE){if(!{}.hasOwnProperty.call(hE,hF))continue;hy.headers.set(hF,hE[hF])}}}return{args:[hy,hx]}}}return hv};gF.fetch.onBeforeInvoke.register(ht)}}());addEventListener(gM,function hG(hH){gO=hH.detail;removeEventListener(gM,hG,true)},true);function hI(hJ){return eC(hJ,ha,hb,hc)}var hK=ft(gG,hI);var hL=eT(hI);addEventListener(gN,function hM(hN){if(hN.detail!=null&&hN.detail.exchange!=null){{if(hK!=null){setTimeout(hK.trigger,0)}}{if(hL!=null){setTimeout(hL.trigger,0)}}{if(gF.xhrOpen!=null&&gI!=null){gF.xhrOpen.onBeforeInvoke.unregister(gI)}if(gF.xhrSend!=null&&gJ!=null){gF.xhrSend.onBeforeInvoke.unregister(gJ)}}{if(gF.fetch!=null){gF.fetch.onBeforeInvoke.unregister(gL)}}hN.detail.exchange({instrumented:gF})}{if(hK!=null){hK.teardown()}}{if(hL!=null){hL.teardown()}}removeEventListener(gN,hM,true)},true)}(this))}())