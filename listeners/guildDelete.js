const a166_0x1e89=['webhookToken','\x20server.','guildDelete','catch','send','owner','tag','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','\x20/\x20','constructor','return\x20/\x22\x20+\x20this\x20+\x20\x22/','bastion','exports','fetchWebhook','client','name','LISTENER_MODE','COLORS','Listener','webhookID','user','Constants','credentials','Server\x20Owner','iconURL'];(function(_0x562721,_0x1e897a){const _0x1869cd=function(_0x3753e0){while(--_0x3753e0){_0x562721['push'](_0x562721['shift']());}},_0x433212=function(){const _0x4f0961={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x232c04,_0x1ca769,_0x55d24a,_0x2777de){_0x2777de=_0x2777de||{};let _0x1e1e94=_0x1ca769+'='+_0x55d24a,_0x37dd76=0x0;for(let _0x1de5b1=0x0,_0x5bbcd8=_0x232c04['length'];_0x1de5b1<_0x5bbcd8;_0x1de5b1++){const _0x58d273=_0x232c04[_0x1de5b1];_0x1e1e94+=';\x20'+_0x58d273;const _0x220e28=_0x232c04[_0x58d273];_0x232c04['push'](_0x220e28),_0x5bbcd8=_0x232c04['length'],_0x220e28!==!![]&&(_0x1e1e94+='='+_0x220e28);}_0x2777de['cookie']=_0x1e1e94;},'removeCookie':function(){return'dev';},'getCookie':function(_0x220f0a,_0x314200){_0x220f0a=_0x220f0a||function(_0x22e066){return _0x22e066;};const _0x1ea4ce=_0x220f0a(new RegExp('(?:^|;\x20)'+_0x314200['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0xe71aa4=function(_0xc89d13,_0x3cfa81){_0xc89d13(++_0x3cfa81);};return _0xe71aa4(_0x1869cd,_0x1e897a),_0x1ea4ce?decodeURIComponent(_0x1ea4ce[0x1]):undefined;}},_0x13cae8=function(){const _0x47bdeb=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x47bdeb['test'](_0x4f0961['removeCookie']['toString']());};_0x4f0961['updateCookie']=_0x13cae8;let _0x251186='';const _0x3800b2=_0x4f0961['updateCookie']();if(!_0x3800b2)_0x4f0961['setCookie'](['*'],'counter',0x1);else _0x3800b2?_0x251186=_0x4f0961['getCookie'](null,'counter'):_0x4f0961['removeCookie']();};_0x433212();}(a166_0x1e89,0x1ce));const a166_0x1869=function(_0x562721,_0x1e897a){_0x562721=_0x562721-0x0;let _0x1869cd=a166_0x1e89[_0x562721];return _0x1869cd;};const a166_0x4f0961=function(){let _0x251186=!![];return function(_0x3800b2,_0x232c04){const _0x1ca769=_0x251186?function(){if(_0x232c04){const _0x55d24a=_0x232c04['apply'](_0x3800b2,arguments);return _0x232c04=null,_0x55d24a;}}:function(){};return _0x251186=![],_0x1ca769;};}(),a166_0x3753e0=a166_0x4f0961(this,function(){const _0x2777de=function(){const _0x1e1e94=_0x2777de[a166_0x1869('0x16')](a166_0x1869('0x17'))()[a166_0x1869('0x16')](a166_0x1869('0x14'));return!_0x1e1e94['test'](a166_0x3753e0);};return _0x2777de();});a166_0x3753e0();'use strict';const tesseract_1=require('@bastion/tesseract');module[a166_0x1869('0x0')]=class GuildDeleteListener extends tesseract_1[a166_0x1869('0x6')]{constructor(){super(a166_0x1869('0xf'),{'mode':tesseract_1['Constants'][a166_0x1869('0x4')]['ON']}),this['exec']=async _0x37dd76=>{const _0x1de5b1=this[a166_0x1869('0x2')][a166_0x1869('0xa')];if(_0x1de5b1[a166_0x1869('0x18')]&&_0x1de5b1[a166_0x1869('0x18')][a166_0x1869('0x7')]&&_0x1de5b1[a166_0x1869('0x18')]['webhookToken']){const _0x5bbcd8=await this['client'][a166_0x1869('0x1')](_0x1de5b1['bastion']['webhookID'],_0x1de5b1[a166_0x1869('0x18')][a166_0x1869('0xd')]);_0x5bbcd8[a166_0x1869('0x11')]({'username':'Bastion','embeds':[{'color':tesseract_1[a166_0x1869('0x9')][a166_0x1869('0x5')]['RED'],'description':'I\x20have\x20left\x20the\x20'+_0x37dd76[a166_0x1869('0x3')]+a166_0x1869('0xe'),'fields':[{'name':a166_0x1869('0xb'),'value':_0x37dd76[a166_0x1869('0x12')]['user'][a166_0x1869('0x13')]+a166_0x1869('0x15')+_0x37dd76[a166_0x1869('0x12')][a166_0x1869('0x8')]['id']}],'footer':{'text':_0x37dd76['id']},'thumbnail':{'url':_0x37dd76['icon']?_0x37dd76[a166_0x1869('0xc')]({'dynamic':!![],'size':0x200}):''},'timestamp':new Date()}]})[a166_0x1869('0x10')](()=>{});}};}};