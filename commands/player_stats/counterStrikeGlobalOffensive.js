const a106_0x50db=['send','overview','../../utils/omnic','value','displayName','toLowerCase','join','displayValue','constructor','name','metadata','find','counterStrikeGlobalOffensive\x20USERNAME','platformUserHandle','It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Counter-Strike:\x20Global\x20Offensive\x20player\x20in\x20any\x20supported\x20platform.','Command','channel','BASTION_ERROR_TYPE','filter','stats','data','message','exports','map','keys','https://steamcommunity.com/id/','\x20has\x20played\x20for\x20','platforms','avatarUrl','platform','steam','apply','\x20hours.','timePlayed','@bastion/tesseract','includes','exec','INVALID_COMMAND_SYNTAX','toFixed','rankScore','counterStrikeGlobalOffensive','Counter-Strike:\x20Global\x20Offensive\x20-\x20Player\x20Stats','iconUrl','errors','makeRequest','length','type','platformInfo','json','csgo','DiscordError'];(function(_0x9e72dd,_0x50db3d){const _0x22ba62=function(_0x472255){while(--_0x472255){_0x9e72dd['push'](_0x9e72dd['shift']());}},_0x9a948a=function(){const _0x219a62={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3068a9,_0x43b85e,_0x147718,_0x8fca4f){_0x8fca4f=_0x8fca4f||{};let _0x382af6=_0x43b85e+'='+_0x147718,_0x3c89e1=0x0;for(let _0x2938af=0x0,_0xe046a4=_0x3068a9['length'];_0x2938af<_0xe046a4;_0x2938af++){const _0x1d8913=_0x3068a9[_0x2938af];_0x382af6+=';\x20'+_0x1d8913;const _0x468419=_0x3068a9[_0x1d8913];_0x3068a9['push'](_0x468419),_0xe046a4=_0x3068a9['length'],_0x468419!==!![]&&(_0x382af6+='='+_0x468419);}_0x8fca4f['cookie']=_0x382af6;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2eaaa4,_0x502616){_0x2eaaa4=_0x2eaaa4||function(_0x356a23){return _0x356a23;};const _0x20c2df=_0x2eaaa4(new RegExp('(?:^|;\x20)'+_0x502616['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x35304b=function(_0x2d52b8,_0xef6577){_0x2d52b8(++_0xef6577);};return _0x35304b(_0x22ba62,_0x50db3d),_0x20c2df?decodeURIComponent(_0x20c2df[0x1]):undefined;}},_0xfbc3a1=function(){const _0x33ac09=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x33ac09['test'](_0x219a62['removeCookie']['toString']());};_0x219a62['updateCookie']=_0xfbc3a1;let _0x587247='';const _0x14b4f4=_0x219a62['updateCookie']();if(!_0x14b4f4)_0x219a62['setCookie'](['*'],'counter',0x1);else _0x14b4f4?_0x587247=_0x219a62['getCookie'](null,'counter'):_0x219a62['removeCookie']();};_0x9a948a();}(a106_0x50db,0x8d));const a106_0x22ba=function(_0x9e72dd,_0x50db3d){_0x9e72dd=_0x9e72dd-0x0;let _0x22ba62=a106_0x50db[_0x9e72dd];return _0x22ba62;};const a106_0x219a62=function(){let _0x587247=!![];return function(_0x14b4f4,_0x3068a9){const _0x43b85e=_0x587247?function(){if(_0x3068a9){const _0x147718=_0x3068a9[a106_0x22ba('0x2b')](_0x14b4f4,arguments);return _0x3068a9=null,_0x147718;}}:function(){};return _0x587247=![],_0x43b85e;};}(),a106_0x472255=a106_0x219a62(this,function(){const _0x8fca4f=function(){const _0x382af6=_0x8fca4f[a106_0x22ba('0x14')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a106_0x22ba('0x14')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x382af6['test'](a106_0x472255);};return _0x8fca4f();});a106_0x472255();'use strict';const tesseract_1=require(a106_0x22ba('0x2e')),constants=require('../../utils/constants'),errors=require('../../utils/errors'),omnic=require(a106_0x22ba('0xe'));module[a106_0x22ba('0x22')]=class CounterStrikeGlobalOffensiveCommand extends tesseract_1[a106_0x22ba('0x1b')]{constructor(){super(a106_0x22ba('0x1'),{'description':a106_0x22ba('0x1a'),'triggers':[a106_0x22ba('0xa')],'arguments':{'alias':{'platform':['p']},'string':[a106_0x22ba('0x29')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a106_0x22ba('0x18'),'counterStrikeGlobalOffensive\x20USERNAME\x20--platform\x20PLATFORM']}),this[a106_0x22ba('0x30')]=async(_0x3c89e1,_0x2938af)=>{if(!_0x2938af['_'][a106_0x22ba('0x6')])throw new errors[(a106_0x22ba('0xb'))](errors[a106_0x22ba('0x1d')][a106_0x22ba('0x31')],this[a106_0x22ba('0x15')]);const _0xe046a4=_0x2938af['_'][a106_0x22ba('0x12')]('\x20'),_0x1d8913=_0x2938af[a106_0x22ba('0x29')]&&this[a106_0x22ba('0x27')][a106_0x22ba('0x2f')](_0x2938af[a106_0x22ba('0x29')]['toLowerCase']())?_0x2938af[a106_0x22ba('0x29')][a106_0x22ba('0x11')]():this[a106_0x22ba('0x27')][0x0],_0x468419=await omnic[a106_0x22ba('0x5')]('/playerstats/csgo/'+_0x1d8913+'/'+encodeURIComponent(_0xe046a4)),_0x2eaaa4=await _0x468419[a106_0x22ba('0x9')]();if(_0x2eaaa4[a106_0x22ba('0x4')])throw new Error(_0x2eaaa4[a106_0x22ba('0x4')][0x0][a106_0x22ba('0x21')]);const _0x502616=_0x2eaaa4[a106_0x22ba('0x20')]['segments'][a106_0x22ba('0x17')](_0x20c2df=>_0x20c2df[a106_0x22ba('0x7')]===a106_0x22ba('0xd'));await _0x3c89e1[a106_0x22ba('0x1c')][a106_0x22ba('0xc')]({'embed':{'color':constants['COLORS']['CSGO'],'author':{'name':_0x2eaaa4[a106_0x22ba('0x20')][a106_0x22ba('0x8')][a106_0x22ba('0x19')],'url':a106_0x22ba('0x25')+_0x2eaaa4[a106_0x22ba('0x20')]['platformInfo'][a106_0x22ba('0x19')]},'title':a106_0x22ba('0x2'),'description':_0x502616['stats'][a106_0x22ba('0x2d')]?_0x2eaaa4['data'][a106_0x22ba('0x8')][a106_0x22ba('0x19')]+a106_0x22ba('0x26')+(_0x502616[a106_0x22ba('0x1f')][a106_0x22ba('0x2d')][a106_0x22ba('0xf')]/0x3c/0x3c)[a106_0x22ba('0x32')](0x2)+a106_0x22ba('0x2c'):'','fields':Object[a106_0x22ba('0x24')](_0x502616[a106_0x22ba('0x1f')])[a106_0x22ba('0x1e')](_0x35304b=>_0x35304b!==a106_0x22ba('0x2d'))[a106_0x22ba('0x23')](_0x356a23=>({'name':_0x502616['stats'][_0x356a23][a106_0x22ba('0x10')],'value':_0x502616[a106_0x22ba('0x1f')][_0x356a23][a106_0x22ba('0x13')],'inline':!![]})),'thumbnail':{'url':_0x502616[a106_0x22ba('0x1f')][a106_0x22ba('0x0')]?_0x502616['stats'][a106_0x22ba('0x0')][a106_0x22ba('0x16')][a106_0x22ba('0x3')]:_0x2eaaa4['data'][a106_0x22ba('0x8')][a106_0x22ba('0x28')]},'footer':{'text':_0x1d8913['toUpperCase']()+'\x20•\x20Powered\x20by\x20Tracker\x20Network'}}});},this[a106_0x22ba('0x27')]=[a106_0x22ba('0x2a')];}};