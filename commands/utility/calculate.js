const a132_0x1cff=['DiscordError','INPUT','BASTION_ERROR_TYPE','name','sanitize','channel','OUTPUT','toString','send','calculate\x20--\x20EXPRESSION','ERROR','```','guild','calculate','return\x20/\x22\x20+\x20this\x20+\x20\x22/','mathjs','join','```js\x0a','slice','test','Command','INVALID_COMMAND_SYNTAX','IRIS','constructor','Calculator','It\x20allows\x20you\x20to\x20evaluate\x20mathematical\x20expressions\x20and\x20see\x20their\x20result.','\x0a...','Constants','exec','calc','length','@bastion/tesseract','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}'];(function(_0x2c6c19,_0x1cff5d){const _0x340b1b=function(_0x1b6f64){while(--_0x1b6f64){_0x2c6c19['push'](_0x2c6c19['shift']());}},_0x50e89a=function(){const _0x2a753f={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1cd815,_0x3c93e1,_0x43331f,_0x356b56){_0x356b56=_0x356b56||{};let _0x32a521=_0x3c93e1+'='+_0x43331f,_0x6995cf=0x0;for(let _0x226d93=0x0,_0xe76789=_0x1cd815['length'];_0x226d93<_0xe76789;_0x226d93++){const _0x2e5283=_0x1cd815[_0x226d93];_0x32a521+=';\x20'+_0x2e5283;const _0x4215f9=_0x1cd815[_0x2e5283];_0x1cd815['push'](_0x4215f9),_0xe76789=_0x1cd815['length'],_0x4215f9!==!![]&&(_0x32a521+='='+_0x4215f9);}_0x356b56['cookie']=_0x32a521;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4f6950,_0x31ac68){_0x4f6950=_0x4f6950||function(_0x39389f){return _0x39389f;};const _0x5b3522=_0x4f6950(new RegExp('(?:^|;\x20)'+_0x31ac68['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1c134a=function(_0x212740,_0x102c13){_0x212740(++_0x102c13);};return _0x1c134a(_0x340b1b,_0x1cff5d),_0x5b3522?decodeURIComponent(_0x5b3522[0x1]):undefined;}},_0x14a505=function(){const _0x115f6e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x115f6e['test'](_0x2a753f['removeCookie']['toString']());};_0x2a753f['updateCookie']=_0x14a505;let _0x189732='';const _0xfaa9ee=_0x2a753f['updateCookie']();if(!_0xfaa9ee)_0x2a753f['setCookie'](['*'],'counter',0x1);else _0xfaa9ee?_0x189732=_0x2a753f['getCookie'](null,'counter'):_0x2a753f['removeCookie']();};_0x50e89a();}(a132_0x1cff,0x11e));const a132_0x340b=function(_0x2c6c19,_0x1cff5d){_0x2c6c19=_0x2c6c19-0x0;let _0x340b1b=a132_0x1cff[_0x2c6c19];return _0x340b1b;};const a132_0x2a753f=function(){let _0x189732=!![];return function(_0xfaa9ee,_0x1cd815){const _0x3c93e1=_0x189732?function(){if(_0x1cd815){const _0x43331f=_0x1cd815['apply'](_0xfaa9ee,arguments);return _0x1cd815=null,_0x43331f;}}:function(){};return _0x189732=![],_0x3c93e1;};}(),a132_0x1b6f64=a132_0x2a753f(this,function(){const _0x356b56=function(){const _0x32a521=_0x356b56[a132_0x340b('0x1')](a132_0x340b('0x19'))()[a132_0x340b('0x1')](a132_0x340b('0xa'));return!_0x32a521[a132_0x340b('0x1e')](a132_0x1b6f64);};return _0x356b56();});a132_0x1b6f64();'use strict';const tesseract_1=require(a132_0x340b('0x9')),math=require(a132_0x340b('0x1a')),errors=require('../../utils/errors');module['exports']=class CalculateCommand extends tesseract_1[a132_0x340b('0x1f')]{constructor(){super(a132_0x340b('0x18'),{'description':a132_0x340b('0x3'),'triggers':[a132_0x340b('0x7')],'arguments':{},'scope':a132_0x340b('0x17'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a132_0x340b('0x14')]}),this[a132_0x340b('0xf')]=_0x6995cf=>{return _0x6995cf[a132_0x340b('0x8')]>0x3e8?_0x6995cf[a132_0x340b('0x1d')](0x0,0x3e8)+a132_0x340b('0x4'):_0x6995cf;},this[a132_0x340b('0x6')]=async(_0x226d93,_0xe76789)=>{if(!_0xe76789['_'][a132_0x340b('0x8')])throw new errors[(a132_0x340b('0xb'))](errors[a132_0x340b('0xd')][a132_0x340b('0x20')],this[a132_0x340b('0xe')]);const _0x2e5283=_0xe76789['_'][a132_0x340b('0x1b')]('\x20');let _0x4215f9,_0x4f6950;try{_0x4215f9=math['evaluate'](_0x2e5283)[a132_0x340b('0x12')]();}catch(_0x31ac68){_0x4f6950=_0x31ac68['toString']();}await _0x226d93[a132_0x340b('0x10')][a132_0x340b('0x13')]({'embed':{'color':tesseract_1[a132_0x340b('0x5')]['COLORS'][a132_0x340b('0x0')],'title':a132_0x340b('0x2'),'fields':[{'name':a132_0x340b('0xc'),'value':'```js\x0a'+this[a132_0x340b('0xf')](_0x2e5283)+a132_0x340b('0x16')},{'name':_0x4f6950?a132_0x340b('0x15'):a132_0x340b('0x11'),'value':a132_0x340b('0x1c')+this['sanitize'](_0x4f6950?_0x4f6950:_0x4215f9)+'```'}]}});};}};