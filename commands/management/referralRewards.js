const a74_0x4413=['apply','join','roles','PLATINUM','Constants','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','send','referralRewards','GOLD','RED','\x20Referrals','tag','Page\x20','IRIS','COLORS','keys','roleReferralsSet','MAX_SAFE_INTEGER','document','LIMITED_PREMIUM_MEMBERSHIP','name','constructor','page','MANAGE_GUILD','resolver','find','guild','membershipLimitInviteRoles','getString','role','items','cache','INVITE_REWARDS','resolveRole','return\x20/\x22\x20+\x20this\x20+\x20\x22/','clamp','referralRewards\x20-n\x20NUMBER\x20--role\x20ROLE','client','../../utils/constants','It\x20allows\x20you\x20set\x20roles\x20as\x20rewards\x20for\x20referrals\x20(inviting\x20other\x20users\x20to\x20the\x20server).','remove','paginate','../../utils/errors','test','../../models/Role','info','length','referralRewards\x20-n\x20NUMBER\x20--remove','LIMITS','PremiumTier','user','../../utils/numbers','GREEN','Referral\x20Rewards','channel','BASTION_ERROR_TYPE','language','errors','roleNotFound','referralRewards\x20--page\x20NUMBER','Command','roleReferralsClear','referrals','ROLE_NOT_FOUND','catch','map','default','../../utils/pagination','@bastion/tesseract','locale','DiscordError','NO_REFERRAL_REWARDS'];(function(_0x181502,_0x4413d4){const _0xcb20c1=function(_0x39449f){while(--_0x39449f){_0x181502['push'](_0x181502['shift']());}},_0xe263c1=function(){const _0x455236={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5d635b,_0x5bcf9e,_0x51d208,_0x5c56df){_0x5c56df=_0x5c56df||{};let _0x46c4f0=_0x5bcf9e+'='+_0x51d208,_0x1b9b0b=0x0;for(let _0x1dfe1e=0x0,_0x4b9ca8=_0x5d635b['length'];_0x1dfe1e<_0x4b9ca8;_0x1dfe1e++){const _0x29b6ec=_0x5d635b[_0x1dfe1e];_0x46c4f0+=';\x20'+_0x29b6ec;const _0x2943cb=_0x5d635b[_0x29b6ec];_0x5d635b['push'](_0x2943cb),_0x4b9ca8=_0x5d635b['length'],_0x2943cb!==!![]&&(_0x46c4f0+='='+_0x2943cb);}_0x5c56df['cookie']=_0x46c4f0;},'removeCookie':function(){return'dev';},'getCookie':function(_0x250728,_0x111474){_0x250728=_0x250728||function(_0x5aee86){return _0x5aee86;};const _0x40d7ad=_0x250728(new RegExp('(?:^|;\x20)'+_0x111474['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x42a379=function(_0x1419b2,_0x54ad95){_0x1419b2(++_0x54ad95);};return _0x42a379(_0xcb20c1,_0x4413d4),_0x40d7ad?decodeURIComponent(_0x40d7ad[0x1]):undefined;}},_0x29f595=function(){const _0x2cab7b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2cab7b['test'](_0x455236['removeCookie']['toString']());};_0x455236['updateCookie']=_0x29f595;let _0x202ad0='';const _0x237c4f=_0x455236['updateCookie']();if(!_0x237c4f)_0x455236['setCookie'](['*'],'counter',0x1);else _0x237c4f?_0x202ad0=_0x455236['getCookie'](null,'counter'):_0x455236['removeCookie']();};_0xe263c1();}(a74_0x4413,0xc9));const a74_0xcb20=function(_0x181502,_0x4413d4){_0x181502=_0x181502-0x0;let _0xcb20c1=a74_0x4413[_0x181502];return _0xcb20c1;};const a74_0x455236=function(){let _0x202ad0=!![];return function(_0x237c4f,_0x5d635b){const _0x5bcf9e=_0x202ad0?function(){if(_0x5d635b){const _0x51d208=_0x5d635b[a74_0xcb20('0xf')](_0x237c4f,arguments);return _0x5d635b=null,_0x51d208;}}:function(){};return _0x202ad0=![],_0x5bcf9e;};}(),a74_0x39449f=a74_0x455236(this,function(){const _0x5c56df=function(){const _0x46c4f0=_0x5c56df['constructor'](a74_0xcb20('0x31'))()[a74_0xcb20('0x24')](a74_0xcb20('0x14'));return!_0x46c4f0[a74_0xcb20('0x3a')](a74_0x39449f);};return _0x5c56df();});a74_0x39449f();'use strict';const tesseract_1=require(a74_0xcb20('0xb')),Role_1=require(a74_0xcb20('0x3b')),constants=require(a74_0xcb20('0x35')),errors=require(a74_0xcb20('0x39')),numbers=require(a74_0xcb20('0x42')),omnic=require('../../utils/omnic'),pagination=require(a74_0xcb20('0xa'));module['exports']=class ReferralRewardsCommand extends tesseract_1[a74_0xcb20('0x3')]{constructor(){super(a74_0xcb20('0x16'),{'description':a74_0xcb20('0x36'),'triggers':[],'arguments':{'alias':{'referrals':['n'],'page':['p']},'array':[a74_0xcb20('0x2c')],'boolean':['remove'],'string':['role'],'number':[a74_0xcb20('0x5'),a74_0xcb20('0x25')],'coerce':{'referrals':_0x1b9b0b=>numbers[a74_0xcb20('0x32')](_0x1b9b0b,0x1,Number[a74_0xcb20('0x20')])}},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a74_0xcb20('0x26')],'userPermissions':[],'syntax':[a74_0xcb20('0x16'),a74_0xcb20('0x2'),a74_0xcb20('0x33'),a74_0xcb20('0x3e')]}),this['exec']=async(_0x1dfe1e,_0x4b9ca8)=>{if(_0x4b9ca8[a74_0xcb20('0x5')]){if(_0x4b9ca8[a74_0xcb20('0x2c')]){if(constants['isPublicBastion'](this[a74_0xcb20('0x34')][a74_0xcb20('0x41')])){const _0x42a379=await omnic['fetchPremiumTier'](_0x1dfe1e[a74_0xcb20('0x29')])[a74_0xcb20('0x7')](()=>{}),_0x5aee86=await Role_1[a74_0xcb20('0x9')]['countDocuments']({'guild':_0x1dfe1e[a74_0xcb20('0x29')]['id'],'referrals':{'$exists':!![],'$ne':null}});if(_0x42a379){if(_0x42a379===omnic[a74_0xcb20('0x40')]['GOLD']&&_0x5aee86>=constants[a74_0xcb20('0x3f')][a74_0xcb20('0x17')]['INVITE_REWARDS'])throw new errors[(a74_0xcb20('0xd'))](errors[a74_0xcb20('0x46')]['LIMITED_PREMIUM_MEMBERSHIP'],this[a74_0xcb20('0x34')][a74_0xcb20('0xc')]['getString'](_0x1dfe1e[a74_0xcb20('0x29')][a74_0xcb20('0x21')][a74_0xcb20('0x47')],'errors',a74_0xcb20('0x2a'),constants[a74_0xcb20('0x3f')][a74_0xcb20('0x17')][a74_0xcb20('0x2f')]));else{if(_0x42a379===omnic[a74_0xcb20('0x40')][a74_0xcb20('0x12')]&&_0x5aee86>=constants[a74_0xcb20('0x3f')][a74_0xcb20('0x12')][a74_0xcb20('0x2f')])throw new errors[(a74_0xcb20('0xd'))](errors['BASTION_ERROR_TYPE'][a74_0xcb20('0x22')],this[a74_0xcb20('0x34')][a74_0xcb20('0xc')][a74_0xcb20('0x2b')](_0x1dfe1e[a74_0xcb20('0x29')][a74_0xcb20('0x21')]['language'],a74_0xcb20('0x0'),a74_0xcb20('0x2a'),constants[a74_0xcb20('0x3f')]['PLATINUM'][a74_0xcb20('0x2f')]));}}else{if(_0x5aee86>=constants[a74_0xcb20('0x3f')][a74_0xcb20('0x2f')])throw new errors[(a74_0xcb20('0xd'))](errors['BASTION_ERROR_TYPE']['PREMIUM_MEMBERSHIP_REQUIRED'],this[a74_0xcb20('0x34')][a74_0xcb20('0xc')]['getString'](_0x1dfe1e[a74_0xcb20('0x29')][a74_0xcb20('0x21')][a74_0xcb20('0x47')],a74_0xcb20('0x0'),'premiumInviteRoles',constants[a74_0xcb20('0x3f')][a74_0xcb20('0x2f')]));}}const _0x111474=this[a74_0xcb20('0x34')][a74_0xcb20('0x27')][a74_0xcb20('0x30')](_0x1dfe1e['guild'],_0x4b9ca8[a74_0xcb20('0x2c')][a74_0xcb20('0x10')]('\x20'));if(!_0x111474)throw new errors[(a74_0xcb20('0xd'))](errors[a74_0xcb20('0x46')][a74_0xcb20('0x6')],this[a74_0xcb20('0x34')][a74_0xcb20('0xc')]['getString'](_0x1dfe1e[a74_0xcb20('0x29')][a74_0xcb20('0x21')]['language'],'error',a74_0xcb20('0x1')));let _0x40d7ad=await _0x111474['fetchDocument']();return!_0x40d7ad&&(_0x40d7ad=await _0x111474['createDocument']()),_0x40d7ad[a74_0xcb20('0x5')]=_0x4b9ca8[a74_0xcb20('0x5')],await _0x40d7ad['save'](),await _0x1dfe1e['channel'][a74_0xcb20('0x15')]({'embed':{'color':tesseract_1[a74_0xcb20('0x13')][a74_0xcb20('0x1d')][a74_0xcb20('0x43')],'description':this[a74_0xcb20('0x34')][a74_0xcb20('0xc')][a74_0xcb20('0x2b')](_0x1dfe1e[a74_0xcb20('0x29')]['document'][a74_0xcb20('0x47')],a74_0xcb20('0x3c'),a74_0xcb20('0x1f'),_0x1dfe1e['author'][a74_0xcb20('0x1a')],_0x111474[a74_0xcb20('0x23')],_0x4b9ca8[a74_0xcb20('0x5')])}});}if(_0x4b9ca8[a74_0xcb20('0x37')])return await Role_1[a74_0xcb20('0x9')]['updateMany']({'guild':_0x1dfe1e['guild']['id'],'referrals':_0x4b9ca8[a74_0xcb20('0x5')]},{'$unset':{'referrals':0x1}}),await _0x1dfe1e[a74_0xcb20('0x45')][a74_0xcb20('0x15')]({'embed':{'color':tesseract_1[a74_0xcb20('0x13')][a74_0xcb20('0x1d')][a74_0xcb20('0x18')],'description':this[a74_0xcb20('0x34')][a74_0xcb20('0xc')]['getString'](_0x1dfe1e[a74_0xcb20('0x29')][a74_0xcb20('0x21')][a74_0xcb20('0x47')],a74_0xcb20('0x3c'),a74_0xcb20('0x4'),_0x1dfe1e['author'][a74_0xcb20('0x1a')],_0x4b9ca8[a74_0xcb20('0x5')])}});}const _0x29b6ec=await Role_1[a74_0xcb20('0x9')][a74_0xcb20('0x28')]({'guild':_0x1dfe1e[a74_0xcb20('0x29')]['id'],'referrals':{'$exists':!![],'$ne':null}});if(!_0x29b6ec[a74_0xcb20('0x3d')])throw new Error(a74_0xcb20('0xe'));const _0x2943cb={};for(const _0x1419b2 of _0x29b6ec){_0x1419b2[a74_0xcb20('0x5')]in _0x2943cb?_0x2943cb[_0x1419b2[a74_0xcb20('0x5')]]['push'](_0x1419b2['id']):_0x2943cb[_0x1419b2[a74_0xcb20('0x5')]]=[_0x1419b2['id']];}const _0x250728=pagination[a74_0xcb20('0x38')](Object[a74_0xcb20('0x1e')](_0x2943cb)['map'](_0x54ad95=>({'name':_0x54ad95+a74_0xcb20('0x19'),'value':_0x2943cb[_0x54ad95][a74_0xcb20('0x8')](_0x2cab7b=>_0x1dfe1e[a74_0xcb20('0x29')][a74_0xcb20('0x11')]['cache']['has'](_0x2cab7b)?_0x1dfe1e['guild'][a74_0xcb20('0x11')][a74_0xcb20('0x2e')]['get'](_0x2cab7b)['name']:_0x2cab7b)[a74_0xcb20('0x10')](',\x20')})),_0x4b9ca8[a74_0xcb20('0x25')]);return await _0x1dfe1e['channel'][a74_0xcb20('0x15')]({'embed':{'color':tesseract_1[a74_0xcb20('0x13')][a74_0xcb20('0x1d')][a74_0xcb20('0x1c')],'title':a74_0xcb20('0x44'),'fields':_0x250728[a74_0xcb20('0x2d')],'footer':{'text':a74_0xcb20('0x1b')+_0x250728[a74_0xcb20('0x25')]+'\x20of\x20'+_0x250728['pages']}}});};}};