const a50_0x1d36=['bastion.website','includes','Constants','language','test','category','apply','Commands','map','COLORS','\x20Category','join','categoryCommandsCommand','send','didYouKnowCommandsCount','/commands','getConstant','snakeToTitleCase','slice','catch','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Need\x20more\x20details?','constructor','getString','toString','document','client','toSnakeCase','guild','size','commandDetailsOption','@bastion/tesseract','commands','```css\x0a','commands\x20CATEGORY','push','toLowerCase','commandCategoriesCommand','locale','name','search','../../utils/strings','channel','```','modules','filter','info','bastion.name','Command\x20Search','\x20is\x20an\x20invalid\x20command\x20category.\x20Use\x20the\x20`commands`\x20command\x20without\x20any\x20arguments\x20to\x20get\x20a\x20list\x20of\x20all\x20the\x20available\x20command\x20categories.','Command','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','keys','Command\x20Categories','manager','YELLOW','commandsWebsite','Want\x20the\x20complete\x20list?','```bash\x0acommands\x20--help```','exports','length'];(function(_0x169d53,_0x1d3667){const _0x2c792d=function(_0x45765e){while(--_0x45765e){_0x169d53['push'](_0x169d53['shift']());}},_0x15811a=function(){const _0x19e3a2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5283ac,_0xcfe716,_0x3759ca,_0x16996a){_0x16996a=_0x16996a||{};let _0x4157f5=_0xcfe716+'='+_0x3759ca,_0x5df228=0x0;for(let _0x2de6ce=0x0,_0x2b7e52=_0x5283ac['length'];_0x2de6ce<_0x2b7e52;_0x2de6ce++){const _0x277034=_0x5283ac[_0x2de6ce];_0x4157f5+=';\x20'+_0x277034;const _0x1567da=_0x5283ac[_0x277034];_0x5283ac['push'](_0x1567da),_0x2b7e52=_0x5283ac['length'],_0x1567da!==!![]&&(_0x4157f5+='='+_0x1567da);}_0x16996a['cookie']=_0x4157f5;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5b878f,_0x5f032f){_0x5b878f=_0x5b878f||function(_0x46353a){return _0x46353a;};const _0x3048b4=_0x5b878f(new RegExp('(?:^|;\x20)'+_0x5f032f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3457bf=function(_0x1e9b68,_0x3e2148){_0x1e9b68(++_0x3e2148);};return _0x3457bf(_0x2c792d,_0x1d3667),_0x3048b4?decodeURIComponent(_0x3048b4[0x1]):undefined;}},_0x54baec=function(){const _0x33fd69=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x33fd69['test'](_0x19e3a2['removeCookie']['toString']());};_0x19e3a2['updateCookie']=_0x54baec;let _0x1f827d='';const _0x728332=_0x19e3a2['updateCookie']();if(!_0x728332)_0x19e3a2['setCookie'](['*'],'counter',0x1);else _0x728332?_0x1f827d=_0x19e3a2['getCookie'](null,'counter'):_0x19e3a2['removeCookie']();};_0x15811a();}(a50_0x1d36,0xc3));const a50_0x2c79=function(_0x169d53,_0x1d3667){_0x169d53=_0x169d53-0x0;let _0x2c792d=a50_0x1d36[_0x169d53];return _0x2c792d;};const a50_0x19e3a2=function(){let _0x1f827d=!![];return function(_0x728332,_0x5283ac){const _0xcfe716=_0x1f827d?function(){if(_0x5283ac){const _0x3759ca=_0x5283ac[a50_0x2c79('0x37')](_0x728332,arguments);return _0x5283ac=null,_0x3759ca;}}:function(){};return _0x1f827d=![],_0xcfe716;};}(),a50_0x45765e=a50_0x19e3a2(this,function(){const _0x16996a=function(){const _0x4157f5=_0x16996a[a50_0x2c79('0xa')](a50_0x2c79('0x8'))()['constructor'](a50_0x2c79('0x27'));return!_0x4157f5[a50_0x2c79('0x35')](a50_0x45765e);};return _0x16996a();});a50_0x45765e();'use strict';const tesseract_1=require(a50_0x2c79('0x13')),strings=require(a50_0x2c79('0x1d'));module[a50_0x2c79('0x2f')]=class Commands extends tesseract_1[a50_0x2c79('0x26')]{constructor(){super(a50_0x2c79('0x14'),{'description':'It\x20allows\x20you\x20the\x20see\x20the\x20list\x20of\x20commands\x20available\x20in\x20Bastion.\x20You\x20can\x20also\x20use\x20it\x20to\x20search\x20for\x20commands\x20matching\x20a\x20given\x20query.','triggers':[],'arguments':{'alias':{'search':['s']},'string':[a50_0x2c79('0x1c')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a50_0x2c79('0x14'),a50_0x2c79('0x16'),'commands\x20--search\x20QUERY']}),this['exec']=async(_0x5df228,_0x2de6ce)=>{if(_0x2de6ce[a50_0x2c79('0x1c')]){const _0x277034=this[a50_0x2c79('0x2a')]['modules'][a50_0x2c79('0x39')](_0x1567da=>_0x1567da[a50_0x2c79('0x1b')])[a50_0x2c79('0x21')](_0x5b878f=>_0x5b878f['toLowerCase']()[a50_0x2c79('0x32')](_0x2de6ce[a50_0x2c79('0x1c')][a50_0x2c79('0x18')]()));return await _0x5df228[a50_0x2c79('0x1e')]['send']({'embed':{'color':tesseract_1[a50_0x2c79('0x33')][a50_0x2c79('0x3a')][a50_0x2c79('0x2b')],'author':{'name':this['client'][a50_0x2c79('0x1a')]['getConstant'](a50_0x2c79('0x23')),'url':this[a50_0x2c79('0xe')][a50_0x2c79('0x1a')]['getConstant'](a50_0x2c79('0x31'))},'title':a50_0x2c79('0x24'),'url':this[a50_0x2c79('0xe')][a50_0x2c79('0x1a')]['getConstant']('bastion.website')+a50_0x2c79('0x3'),'description':this[a50_0x2c79('0xe')][a50_0x2c79('0x1a')][a50_0x2c79('0xb')](_0x5df228[a50_0x2c79('0x10')][a50_0x2c79('0xd')][a50_0x2c79('0x34')],a50_0x2c79('0x22'),'commandSearchFound',_0x277034['length'][a50_0x2c79('0xc')](),_0x2de6ce[a50_0x2c79('0x1c')]),'fields':[{'name':a50_0x2c79('0x38'),'value':'```\x0a'+_0x277034[a50_0x2c79('0x6')](0x0,0xa)[a50_0x2c79('0x3c')]('\x0a')+a50_0x2c79('0x1f')},{'name':a50_0x2c79('0x2d'),'value':this[a50_0x2c79('0xe')][a50_0x2c79('0x1a')]['getString'](_0x5df228[a50_0x2c79('0x10')][a50_0x2c79('0xd')][a50_0x2c79('0x34')],a50_0x2c79('0x22'),a50_0x2c79('0x2c'))}],'footer':{'text':this[a50_0x2c79('0xe')]['locale']['getString'](_0x5df228[a50_0x2c79('0x10')][a50_0x2c79('0xd')][a50_0x2c79('0x34')],'info',a50_0x2c79('0x2'),this[a50_0x2c79('0x2a')]['modules'][a50_0x2c79('0x11')])}}})[a50_0x2c79('0x7')](()=>{});}const _0x2b7e52={};for(const _0x5f032f of this[a50_0x2c79('0x2a')][a50_0x2c79('0x20')]['values']()){_0x5f032f[a50_0x2c79('0x36')]in _0x2b7e52?_0x2b7e52[_0x5f032f[a50_0x2c79('0x36')]][a50_0x2c79('0x17')](_0x5f032f['name']):_0x2b7e52[_0x5f032f['category']]=[_0x5f032f[a50_0x2c79('0x1b')]];}if(_0x2de6ce['_']['length']){const _0x3048b4=strings[a50_0x2c79('0xf')](_0x2de6ce['_'][a50_0x2c79('0x3c')]('\x20'));if(Object['keys'](_0x2b7e52)[a50_0x2c79('0x32')](_0x3048b4))return await _0x5df228[a50_0x2c79('0x1e')]['send']({'embed':{'color':tesseract_1[a50_0x2c79('0x33')][a50_0x2c79('0x3a')][a50_0x2c79('0x2b')],'author':{'name':this[a50_0x2c79('0xe')][a50_0x2c79('0x1a')][a50_0x2c79('0x4')](a50_0x2c79('0x23')),'url':this[a50_0x2c79('0xe')]['locale']['getConstant']('bastion.website')},'title':'Commands\x20in\x20'+strings[a50_0x2c79('0x5')](_0x3048b4)+a50_0x2c79('0x3b'),'url':this[a50_0x2c79('0xe')][a50_0x2c79('0x1a')]['getConstant'](a50_0x2c79('0x31'))+a50_0x2c79('0x3'),'description':this[a50_0x2c79('0xe')][a50_0x2c79('0x1a')][a50_0x2c79('0xb')](_0x5df228[a50_0x2c79('0x10')][a50_0x2c79('0xd')][a50_0x2c79('0x34')],a50_0x2c79('0x22'),a50_0x2c79('0x19'),Object['keys'](_0x2b7e52)[a50_0x2c79('0x30')]),'fields':[{'name':a50_0x2c79('0x38'),'value':a50_0x2c79('0x15')+_0x2b7e52[_0x3048b4][a50_0x2c79('0x3c')]('\x0a')+a50_0x2c79('0x1f')},{'name':a50_0x2c79('0x9'),'value':this[a50_0x2c79('0xe')][a50_0x2c79('0x1a')][a50_0x2c79('0xb')](_0x5df228[a50_0x2c79('0x10')][a50_0x2c79('0xd')][a50_0x2c79('0x34')],a50_0x2c79('0x22'),a50_0x2c79('0x12'))+a50_0x2c79('0x2e')}],'footer':{'text':this[a50_0x2c79('0xe')]['locale']['getString'](_0x5df228[a50_0x2c79('0x10')][a50_0x2c79('0xd')]['language'],a50_0x2c79('0x22'),a50_0x2c79('0x2'),this['manager'][a50_0x2c79('0x20')][a50_0x2c79('0x11')])}}})[a50_0x2c79('0x7')](()=>{});return await _0x5df228[a50_0x2c79('0x1e')][a50_0x2c79('0x1')]({'embed':{'color':tesseract_1['Constants'][a50_0x2c79('0x3a')]['YELLOW'],'description':strings[a50_0x2c79('0x5')](_0x3048b4)+a50_0x2c79('0x25')}})[a50_0x2c79('0x7')](()=>{});}await _0x5df228[a50_0x2c79('0x1e')]['send']({'embed':{'color':tesseract_1[a50_0x2c79('0x33')][a50_0x2c79('0x3a')]['YELLOW'],'author':{'name':this[a50_0x2c79('0xe')][a50_0x2c79('0x1a')][a50_0x2c79('0x4')](a50_0x2c79('0x23')),'url':this[a50_0x2c79('0xe')]['locale'][a50_0x2c79('0x4')](a50_0x2c79('0x31'))},'title':'Command\x20Categories','url':this[a50_0x2c79('0xe')]['locale'][a50_0x2c79('0x4')](a50_0x2c79('0x31'))+a50_0x2c79('0x3'),'description':this[a50_0x2c79('0xe')][a50_0x2c79('0x1a')][a50_0x2c79('0xb')](_0x5df228[a50_0x2c79('0x10')][a50_0x2c79('0xd')]['language'],'info',a50_0x2c79('0x0')),'fields':[{'name':a50_0x2c79('0x29'),'value':a50_0x2c79('0x15')+Object[a50_0x2c79('0x28')](_0x2b7e52)['map'](_0x3457bf=>strings[a50_0x2c79('0x5')](_0x3457bf))['join']('\x0a')+a50_0x2c79('0x1f')},{'name':a50_0x2c79('0x2d'),'value':this[a50_0x2c79('0xe')][a50_0x2c79('0x1a')][a50_0x2c79('0xb')](_0x5df228[a50_0x2c79('0x10')][a50_0x2c79('0xd')]['language'],'info','commandsWebsite')}],'footer':{'text':this[a50_0x2c79('0xe')][a50_0x2c79('0x1a')]['getString'](_0x5df228['guild'][a50_0x2c79('0xd')][a50_0x2c79('0x34')],a50_0x2c79('0x22'),a50_0x2c79('0x2'),this[a50_0x2c79('0x2a')][a50_0x2c79('0x20')][a50_0x2c79('0x11')])}}})[a50_0x2c79('0x7')](()=>{});};}};