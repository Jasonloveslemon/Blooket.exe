var _0x6895=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x62\x6C\x6F\x6F\x6B\x65\x74\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x75\x73\x65\x72\x73\x2F\x76\x65\x72\x69\x66\x79\x2D\x74\x6F\x6B\x65\x6E\x3F\x74\x6F\x6B\x65\x6E\x3D\x4A\x57\x54\x2B","\x6A\x73\x6F\x6E","\x6E\x61\x6D\x65","\x48\x6F\x77\x20\x6D\x61\x6E\x79\x20\x74\x6F\x6B\x65\x6E\x73\x20\x64\x6F\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x61\x64\x64\x20\x74\x6F\x20\x79\x6F\x75\x72\x20\x61\x63\x63\x6F\x75\x6E\x74\x3F\x20\x28\x35\x30\x30\x20\x64\x61\x69\x6C\x79\x29","\x4A\x57\x54\x20","\x73\x70\x6C\x69\x74","\x74\x6F\x6B\x65\x6E","\x59\x6F\x75\x20\x63\x61\x6E\x20\x61\x64\x64\x20\x75\x70\x20\x74\x6F\x20\x35\x30\x30\x20\x74\x6F\x6B\x65\x6E\x73\x20\x64\x61\x69\x6C\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x62\x6C\x6F\x6F\x6B\x65\x74\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x75\x73\x65\x72\x73\x2F\x61\x64\x64\x2D\x72\x65\x77\x61\x72\x64\x73","\x50\x55\x54","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x62\x6C\x6F\x6F\x6B\x65\x74\x2E\x63\x6F\x6D\x2F","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x73\x74\x61\x74\x75\x73","","\x20\x61\x64\x64\x65\x64\x20\x74\x6F\x20\x79\x6F\x75\x72\x20\x61\x63\x63\x6F\x75\x6E\x74\x21","\x41\x6E\x20\x65\x72\x72\x6F\x72\x20\x6F\x63\x63\x75\x72\x65\x64\x2E"];async function getName(_0x87fex2){const _0x87fex3= await fetch(_0x6895[0]+ _0x87fex2);const _0x87fex4= await _0x87fex3[_0x6895[1]]();return _0x87fex4[_0x6895[2]]}async function addTokens(){const _0x87fex6=Number(prompt(_0x6895[3]));const _0x87fex7=localStorage[_0x6895[6]][_0x6895[5]](_0x6895[4])[1];if(_0x87fex6> 500){alert(_0x6895[7])};const _0x87fex3= await fetch(_0x6895[8],{method:_0x6895[9],headers:{"\x72\x65\x66\x65\x72\x65\x72":_0x6895[10],"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":_0x6895[11],"\x61\x75\x74\x68\x6F\x72\x69\x7A\x61\x74\x69\x6F\x6E":localStorage[_0x6895[6]]},body:JSON[_0x6895[12]]({addedTokens:_0x87fex6,addedXp:300,name: await getName(_0x87fex7)})});if(_0x87fex3[_0x6895[13]]== 200){alert(`${_0x6895[14]}${_0x87fex6}${_0x6895[15]}`)}else {alert(_0x6895[16])}}addTokens()
