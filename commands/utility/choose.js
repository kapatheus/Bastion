const a133_0x3942=['decide','IRIS','length','choose','My\x20choice\x20would\x20be...','INVALID_COMMAND_SYNTAX','COLORS','Constants','It\x20allows\x20you\x20to\x20ask\x20Bastion\x20to\x20choose\x20an\x20option\x20from\x20the\x20given\x20set\x20of\x20options.\x20Let\x20Bastion\x20make\x20a\x20decision\x20for\x20you.','exports','BASTION_ERROR_TYPE','DiscordError','choose\x20--\x20OPTIONS...','name','apply','send','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','random','constructor','Command','test','../../utils/errors','return\x20/\x22\x20+\x20this\x20+\x20\x22/'];(function(_0x2b041c,_0x39423b){const _0x382f8b=function(_0x463eab){while(--_0x463eab){_0x2b041c['push'](_0x2b041c['shift']());}},_0x5ea2e4=function(){const _0x40d1fa={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x568f3f,_0x488c29,_0x25485b,_0x435666){_0x435666=_0x435666||{};let _0x11a05b=_0x488c29+'='+_0x25485b,_0x22fb43=0x0;for(let _0x236f7d=0x0,_0xfdc092=_0x568f3f['length'];_0x236f7d<_0xfdc092;_0x236f7d++){const _0x31af1a=_0x568f3f[_0x236f7d];_0x11a05b+=';\x20'+_0x31af1a;const _0x4e6fef=_0x568f3f[_0x31af1a];_0x568f3f['push'](_0x4e6fef),_0xfdc092=_0x568f3f['length'],_0x4e6fef!==!![]&&(_0x11a05b+='='+_0x4e6fef);}_0x435666['cookie']=_0x11a05b;},'removeCookie':function(){return'dev';},'getCookie':function(_0x432e29,_0x3047cc){_0x432e29=_0x432e29||function(_0x4524cc){return _0x4524cc;};const _0x297503=_0x432e29(new RegExp('(?:^|;\x20)'+_0x3047cc['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x31a11a=function(_0x362c71,_0x1b5faf){_0x362c71(++_0x1b5faf);};return _0x31a11a(_0x382f8b,_0x39423b),_0x297503?decodeURIComponent(_0x297503[0x1]):undefined;}},_0x41a778=function(){const _0x2ce0e4=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2ce0e4['test'](_0x40d1fa['removeCookie']['toString']());};_0x40d1fa['updateCookie']=_0x41a778;let _0x3bd02e='';const _0x1d1154=_0x40d1fa['updateCookie']();if(!_0x1d1154)_0x40d1fa['setCookie'](['*'],'counter',0x1);else _0x1d1154?_0x3bd02e=_0x40d1fa['getCookie'](null,'counter'):_0x40d1fa['removeCookie']();};_0x5ea2e4();}(a133_0x3942,0x118));const a133_0x382f=function(_0x2b041c,_0x39423b){_0x2b041c=_0x2b041c-0x0;let _0x382f8b=a133_0x3942[_0x2b041c];return _0x382f8b;};const a133_0x40d1fa=function(){let _0x3bd02e=!![];return function(_0x1d1154,_0x568f3f){const _0x488c29=_0x3bd02e?function(){if(_0x568f3f){const _0x25485b=_0x568f3f[a133_0x382f('0xa')](_0x1d1154,arguments);return _0x568f3f=null,_0x25485b;}}:function(){};return _0x3bd02e=![],_0x488c29;};}(),a133_0x463eab=a133_0x40d1fa(this,function(){const _0x435666=function(){const _0x11a05b=_0x435666[a133_0x382f('0xe')](a133_0x382f('0x12'))()[a133_0x382f('0xe')](a133_0x382f('0xc'));return!_0x11a05b[a133_0x382f('0x10')](a133_0x463eab);};return _0x435666();});a133_0x463eab();'use strict';const tesseract_1=require('@bastion/tesseract'),errors=require(a133_0x382f('0x11'));module[a133_0x382f('0x5')]=class ChooseCommand extends tesseract_1[a133_0x382f('0xf')]{constructor(){super(a133_0x382f('0x16'),{'description':a133_0x382f('0x4'),'triggers':[a133_0x382f('0x13')],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a133_0x382f('0x8')]}),this['exec']=async(_0x22fb43,_0x236f7d)=>{if(!_0x236f7d['_']['length'])throw new errors[(a133_0x382f('0x7'))](errors[a133_0x382f('0x6')][a133_0x382f('0x1')],this[a133_0x382f('0x9')]);const _0xfdc092=_0x236f7d['_'][Math['floor'](Math[a133_0x382f('0xd')]()*_0x236f7d['_'][a133_0x382f('0x15')])];await _0x22fb43['channel'][a133_0x382f('0xb')]({'embed':{'color':tesseract_1[a133_0x382f('0x3')][a133_0x382f('0x2')][a133_0x382f('0x14')],'title':a133_0x382f('0x0'),'description':_0xfdc092}});};}};