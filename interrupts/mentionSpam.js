const a154_0x537c=['threshold','Mention\x20spam.','TextChannel','toLowerCase','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','return\x20/\x22\x20+\x20this\x20+\x20\x22/','\x20/\x20','tag','catch','Channel','name','@bastion/tesseract','users','mentions','safelist','channel','document','exports','MANAGE_CHANNELS','User','content','roles','constructor','discord.js','length','mentionSpam','MANAGE_MESSAGES','createModerationLog','guild','author','exec','addInfraction','permissionsFor','member','some'];(function(_0x2e79d5,_0x537c96){const _0x300c41=function(_0x5296e6){while(--_0x5296e6){_0x2e79d5['push'](_0x2e79d5['shift']());}},_0x519e26=function(){const _0x408c02={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3fae05,_0x54eb7a,_0x50f77,_0x1400a4){_0x1400a4=_0x1400a4||{};let _0x260403=_0x54eb7a+'='+_0x50f77,_0x117457=0x0;for(let _0x2d407b=0x0,_0x40e249=_0x3fae05['length'];_0x2d407b<_0x40e249;_0x2d407b++){const _0xd65b85=_0x3fae05[_0x2d407b];_0x260403+=';\x20'+_0xd65b85;const _0x4cb56b=_0x3fae05[_0xd65b85];_0x3fae05['push'](_0x4cb56b),_0x40e249=_0x3fae05['length'],_0x4cb56b!==!![]&&(_0x260403+='='+_0x4cb56b);}_0x1400a4['cookie']=_0x260403;},'removeCookie':function(){return'dev';},'getCookie':function(_0x394d40,_0x51d302){_0x394d40=_0x394d40||function(_0x2b858e){return _0x2b858e;};const _0x42a354=_0x394d40(new RegExp('(?:^|;\x20)'+_0x51d302['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x252c66=function(_0x43244b,_0x198da8){_0x43244b(++_0x198da8);};return _0x252c66(_0x300c41,_0x537c96),_0x42a354?decodeURIComponent(_0x42a354[0x1]):undefined;}},_0x2da8d0=function(){const _0x5723a2=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5723a2['test'](_0x408c02['removeCookie']['toString']());};_0x408c02['updateCookie']=_0x2da8d0;let _0x2f57cb='';const _0x25ff52=_0x408c02['updateCookie']();if(!_0x25ff52)_0x408c02['setCookie'](['*'],'counter',0x1);else _0x25ff52?_0x2f57cb=_0x408c02['getCookie'](null,'counter'):_0x408c02['removeCookie']();};_0x519e26();}(a154_0x537c,0x127));const a154_0x300c=function(_0x2e79d5,_0x537c96){_0x2e79d5=_0x2e79d5-0x0;let _0x300c41=a154_0x537c[_0x2e79d5];return _0x300c41;};const a154_0x408c02=function(){let _0x2f57cb=!![];return function(_0x25ff52,_0x3fae05){const _0x54eb7a=_0x2f57cb?function(){if(_0x3fae05){const _0x50f77=_0x3fae05['apply'](_0x25ff52,arguments);return _0x3fae05=null,_0x50f77;}}:function(){};return _0x2f57cb=![],_0x54eb7a;};}(),a154_0x5296e6=a154_0x408c02(this,function(){const _0x1400a4=function(){const _0x260403=_0x1400a4[a154_0x300c('0x7')](a154_0x300c('0x19'))()[a154_0x300c('0x7')](a154_0x300c('0x18'));return!_0x260403['test'](a154_0x5296e6);};return _0x1400a4();});a154_0x5296e6();'use strict';const tesseract_1=require(a154_0x300c('0x1f')),discord_js_1=require(a154_0x300c('0x8'));module[a154_0x300c('0x2')]=class MentionSpamInterrupt extends tesseract_1['Interrupt']{constructor(){super(a154_0x300c('0xa'),{'type':0x2}),this[a154_0x300c('0xf')]=async _0x117457=>{if(!_0x117457['guild'])return;if(!(_0x117457[a154_0x300c('0x0')]instanceof discord_js_1[a154_0x300c('0x16')]))return;if(!_0x117457[a154_0x300c('0x5')]||!_0x117457[a154_0x300c('0x5')][a154_0x300c('0x9')])return![];const _0x2d407b=_0x117457[a154_0x300c('0xd')];if(_0x117457['member']&&_0x117457['member'][a154_0x300c('0x6')]['cache'][a154_0x300c('0x13')](_0xd65b85=>_0xd65b85[a154_0x300c('0x1e')][a154_0x300c('0x17')]()===a154_0x300c('0x22')))return![];if(_0x117457['channel']['permissionsFor'](_0x117457['member'])&&_0x117457['channel'][a154_0x300c('0x11')](_0x117457[a154_0x300c('0x12')])['has']([a154_0x300c('0x3'),a154_0x300c('0xb')]))return![];if(!_0x2d407b[a154_0x300c('0x1')]||!_0x2d407b['document'][a154_0x300c('0xa')]||!_0x2d407b[a154_0x300c('0x1')]['mentionSpam']['threshold'])return![];let _0x40e249=![];if(_0x117457['mentions'][a154_0x300c('0x20')]['size']>_0x2d407b[a154_0x300c('0x1')][a154_0x300c('0xa')][a154_0x300c('0x14')])_0x40e249=!![];if(_0x117457[a154_0x300c('0x21')]['roles']['size']>_0x2d407b[a154_0x300c('0x1')][a154_0x300c('0xa')]['threshold'])_0x40e249=!![];return _0x40e249&&(_0x117457[a154_0x300c('0x12')][a154_0x300c('0x10')](a154_0x300c('0x15')),_0x2d407b[a154_0x300c('0xc')]({'event':a154_0x300c('0xa'),'fields':[{'name':a154_0x300c('0x4'),'value':_0x117457[a154_0x300c('0xe')][a154_0x300c('0x1b')]+'\x20/\x20'+_0x117457[a154_0x300c('0xe')]['id']},{'name':a154_0x300c('0x1d'),'value':_0x117457['channel'][a154_0x300c('0x1e')]+a154_0x300c('0x1a')+_0x117457[a154_0x300c('0x0')]['id']}]})[a154_0x300c('0x1c')](()=>{})),_0x40e249;};}};