const a87_0x2020=['embeds','type','get','../../models/Case','permissions','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Reason','document','client','constructor','filter','join','cache','language','DiscordError','test','apply','../../utils/numbers','fetch','MAX_SAFE_INTEGER','author','number','name','INVALID_COMMAND_SYNTAX','length','BASTION_ERROR_TYPE','messageId','reason','discord.js','caseNotFound','exec','NewsChannel','guild','edit','fields','Moderator\x20ID','locale','find','MANAGE_GUILD','@bastion/tesseract','text','value','has','Command','member'];(function(_0x59c862,_0x2020a7){const _0x20ce83=function(_0x290716){while(--_0x290716){_0x59c862['push'](_0x59c862['shift']());}},_0x1a27a0=function(){const _0x3bdf2e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5030c,_0x17c1cf,_0x160186,_0x5cd8ef){_0x5cd8ef=_0x5cd8ef||{};let _0x48b19a=_0x17c1cf+'='+_0x160186,_0xc08edf=0x0;for(let _0x111334=0x0,_0x4c003a=_0x5030c['length'];_0x111334<_0x4c003a;_0x111334++){const _0x16346a=_0x5030c[_0x111334];_0x48b19a+=';\x20'+_0x16346a;const _0xbe3cb1=_0x5030c[_0x16346a];_0x5030c['push'](_0xbe3cb1),_0x4c003a=_0x5030c['length'],_0xbe3cb1!==!![]&&(_0x48b19a+='='+_0xbe3cb1);}_0x5cd8ef['cookie']=_0x48b19a;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5a4599,_0x3ae018){_0x5a4599=_0x5a4599||function(_0x1e8d5e){return _0x1e8d5e;};const _0x50f7df=_0x5a4599(new RegExp('(?:^|;\x20)'+_0x3ae018['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x305553=function(_0x4b6e0e,_0x1a2d63){_0x4b6e0e(++_0x1a2d63);};return _0x305553(_0x20ce83,_0x2020a7),_0x50f7df?decodeURIComponent(_0x50f7df[0x1]):undefined;}},_0x8e942d=function(){const _0x343f62=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x343f62['test'](_0x3bdf2e['removeCookie']['toString']());};_0x3bdf2e['updateCookie']=_0x8e942d;let _0x3603ce='';const _0x52a325=_0x3bdf2e['updateCookie']();if(!_0x52a325)_0x3bdf2e['setCookie'](['*'],'counter',0x1);else _0x52a325?_0x3603ce=_0x3bdf2e['getCookie'](null,'counter'):_0x3bdf2e['removeCookie']();};_0x1a27a0();}(a87_0x2020,0x1dd));const a87_0x20ce=function(_0x59c862,_0x2020a7){_0x59c862=_0x59c862-0x0;let _0x20ce83=a87_0x2020[_0x59c862];return _0x20ce83;};const a87_0x3bdf2e=function(){let _0x3603ce=!![];return function(_0x52a325,_0x5030c){const _0x17c1cf=_0x3603ce?function(){if(_0x5030c){const _0x160186=_0x5030c[a87_0x20ce('0x22')](_0x52a325,arguments);return _0x5030c=null,_0x160186;}}:function(){};return _0x3603ce=![],_0x17c1cf;};}(),a87_0x290716=a87_0x3bdf2e(this,function(){const _0x5cd8ef=function(){const _0x48b19a=_0x5cd8ef[a87_0x20ce('0x1b')](a87_0x20ce('0x17'))()[a87_0x20ce('0x1b')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x48b19a[a87_0x20ce('0x21')](a87_0x290716);};return _0x5cd8ef();});a87_0x290716();'use strict';const tesseract_1=require(a87_0x20ce('0xc')),discord_js_1=require(a87_0x20ce('0x1')),Case_1=require(a87_0x20ce('0x15')),numbers=require(a87_0x20ce('0x23')),errors=require('../../utils/errors');module['exports']=class ReasonCommand extends tesseract_1[a87_0x20ce('0x10')]{constructor(){super(a87_0x20ce('0x0'),{'description':'It\x20allows\x20you\x20to\x20update\x20the\x20reason\x20of\x20a\x20moderation\x20case.\x20Forgot\x20to\x20set\x20a\x20reason?\x20Did\x20a\x20typo?\x20Here\x27s\x20your\x20second\x20chance.','triggers':[],'arguments':{'alias':{'case':'n'},'number':['case'],'coerce':{'case':_0xc08edf=>Math['floor'](numbers['clamp'](_0xc08edf,0x1,Number[a87_0x20ce('0x25')]))}},'scope':a87_0x20ce('0x5'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['reason\x20--case\x20NUMBER\x20--\x20REASON']}),this[a87_0x20ce('0x3')]=async(_0x111334,_0x4c003a)=>{if(_0x111334[a87_0x20ce('0x26')]['id']!==_0x111334['guild']['ownerID']||_0x111334[a87_0x20ce('0x11')]['roles']['cache']['size']<0x2)return;if(!_0x4c003a[a87_0x20ce('0x27')]||!_0x4c003a['_'][a87_0x20ce('0x2a')])throw new errors[(a87_0x20ce('0x20'))](errors[a87_0x20ce('0x2b')][a87_0x20ce('0x29')],this['name']);const _0x16346a=await Case_1['default']['findOne']({'guild':_0x111334[a87_0x20ce('0x5')]['id'],'number':_0x4c003a['number']});if(!_0x16346a)throw new Error(this[a87_0x20ce('0x1a')][a87_0x20ce('0x9')]['getString'](_0x111334[a87_0x20ce('0x5')][a87_0x20ce('0x19')][a87_0x20ce('0x1f')],'errors',a87_0x20ce('0x2')));const _0xbe3cb1=_0x111334['guild']['channels'][a87_0x20ce('0x1e')][a87_0x20ce('0x1c')](_0x5a4599=>_0x5a4599[a87_0x20ce('0x13')]===a87_0x20ce('0xd')||_0x5a4599[a87_0x20ce('0x13')]==='news');if(_0x111334[a87_0x20ce('0x5')][a87_0x20ce('0x19')]['moderationLogChannelId']&&_0xbe3cb1[a87_0x20ce('0xf')](_0x111334[a87_0x20ce('0x5')][a87_0x20ce('0x19')]['moderationLogChannelId'])){const _0x3ae018=_0xbe3cb1[a87_0x20ce('0x14')](_0x111334[a87_0x20ce('0x5')][a87_0x20ce('0x19')]['moderationLogChannelId']);if(_0x3ae018 instanceof discord_js_1[a87_0x20ce('0x4')]||_0x3ae018 instanceof discord_js_1['TextChannel']){const _0x50f7df=await _0x3ae018['messages'][a87_0x20ce('0x24')](_0x16346a[a87_0x20ce('0x2c')]),_0x305553=_0x50f7df[a87_0x20ce('0x12')][0x0];if(!_0x111334['member'][a87_0x20ce('0x16')][a87_0x20ce('0xf')](a87_0x20ce('0xb'))||_0x305553['fields'][a87_0x20ce('0xa')](_0x1e8d5e=>_0x1e8d5e[a87_0x20ce('0x28')]===a87_0x20ce('0x8'))[a87_0x20ce('0xe')]!==_0x111334[a87_0x20ce('0x26')]['id'])return;_0x305553[a87_0x20ce('0x7')]['find'](_0x4b6e0e=>_0x4b6e0e[a87_0x20ce('0x28')]===a87_0x20ce('0x18'))[a87_0x20ce('0xe')]=_0x4c003a['_'][a87_0x20ce('0x1d')]('\x20'),await _0x50f7df[a87_0x20ce('0x6')]({'embed':_0x305553});}}};}};