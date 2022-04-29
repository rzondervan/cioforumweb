'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8469b9530708115addbda53136660061",
"index.html": "b6ee729cbc03b4b8a9dcbaafd3b5f851",
"/": "b6ee729cbc03b4b8a9dcbaafd3b5f851",
"CNAME": "d7e81eaad66498b45ed02de3c795e74a",
"main.dart.js": "e6479ca585dc85256b78c49035e6fa08",
"README.md": "7b5a6c1e5ef43bf450412c532f6c3e0c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fc96ae9aa1cb8a1ff2f8accbedf92bf5",
".git/config": "d16f25cbac52a87ae07379064f94acba",
".git/objects/61/0bc260e49d37635086ca825126416556206fcd": "61e2e51451d4b829ed4f8a86e5b37248",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/51a754657f1069ebd5d13353048dfc54318fd4": "57b7703cc32a79f452633b7ec9f3ada3",
".git/objects/66/fc77004d3f5e2609e3d4780a1d76392c4869f8": "db40904e7970ca97cf04271071409b3c",
".git/objects/50/400de5d4004b73cf85933f6b07d8f37cb0b19f": "5addba4789928ddafff3eb4712459ef4",
".git/objects/6a/d521ea232a33bae3ab239006698e584550983d": "ed8c7dc4b24375a2447aa7a01322ac0a",
".git/objects/6a/4654bf79fc6055003e503ff11f9148f89132f3": "f97d55af92406a9a191334953c696b7a",
".git/objects/35/781c0b7bb87671bedf8de5f4c532e771d5f071": "68fdff750256c440a0a00069b4d68da4",
".git/objects/35/b993a30284bc5f18b2723bbd2387d04596ef5b": "c1d2ed6dc292fb2a2d6896589f786306",
".git/objects/51/e9930b55c842fb83c884c7a60aa9ba53f2310a": "dbf51820923248640efe63f056e0af35",
".git/objects/93/c29e82cfdd87c42ce92b4c82d807e5bf6367c6": "25dec54da06aa1c1482e19446aa3f6fa",
".git/objects/34/05bae715152c27c64de0e3f157dba6c92464e3": "a0ccea24bacdd86614dd1013e95e4cc9",
".git/objects/5f/760d525194ca51d0f492949b5b52cf2ca274c8": "100637810da7f17b199672aafc3c9c3a",
".git/objects/5f/9fdfaa66509f72163379fce3ae3d03fcc32c3d": "a3323325d2fe7c7cc0bb71f0ba3d3665",
".git/objects/a4/92b2d1ab49c8f731f0f9562e195c66af998a32": "def86c4c7ee39a4f4d70ed11f4bace28",
".git/objects/d9/85bd3530c3060ffa1bf4caaa82b7f35f0158e9": "83bde15d6af5b9c6d43b43dc9465bc19",
".git/objects/d9/098a09314eae622c72fd4363efe1f61a16c8af": "0fb01d65bcdf6afe8e57983d3dc8e082",
".git/objects/b3/659f71fa313a9706cce6218d6c46723b81d62a": "23104e3c0929416beb37c404735a85ce",
".git/objects/df/97b7999960cb654a51faf002c39277123e0781": "15c814f6b9d8aafda655033496f6e718",
".git/objects/df/09144484aee293f36b44884ac6303d2cc710cc": "9be72dd08eb4b1225e851bc8e9ada330",
".git/objects/b4/7c520ef7d80871ad313d101acf2feb1cbbb70d": "f541b3cfe6c57e78c7e31f6549ce4a31",
".git/objects/b4/864d9e9e7100439f61dfed59a2903834b17faa": "08aa5f09cc751f7c8b543fe0bcd4b3fb",
".git/objects/a5/3d27792c3e646dbc7219f12bfa5dab6cd3da33": "e6e28e7d0094f369d4898b3360ab630f",
".git/objects/d6/2702230410c36deae166679cca5866a46bf27a": "0ac16286fb81b8eb51f56f959cd4e061",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a9df854782c2688dcbfb50c829b34dc288b38e": "a102ccb40faa9675ed001ad790434111",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/a13278dda75c1329a159f84f38cddae011cf2f": "5001cdc044232108898a7a339ce02786",
".git/objects/c9/876ba6c28a68b27eebb70d33c64d518f8ec706": "558bfd94030a844a0e24a15145dc9767",
".git/objects/fc/d60796708e07e7fe1a57ff7f1bd274855579a8": "3ad962dda34e11bd72d0fe4be866695d",
".git/objects/c6/f65a1c8c91308b95f6e0218401ef8dcef79fd7": "df8cee177980c4e3d642c3985579be4f",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/18/1efa0a8518312c78b2777f09b0c67f48704206": "aab85aff37a9b87b343530a6057e537f",
".git/objects/27/cb76d3c56debd3b059bbeaaf635ebed38c074b": "b8e3b534d7db84fa0abe60cf7b1fdc8c",
".git/objects/4b/990504cc37653dde723c166f95e417faf52cfd": "70c414bd28e0dcd7391e7cb7eac1e66f",
".git/objects/7c/045f460244974f8f16f9f168d70cb21e71f953": "652bdc70fa2b41423f69643b8073516d",
".git/objects/80/9c9b2f07ade91fb7081f4b28058306d7ff8dbe": "5846d8e37d5315a3ec39a4ef1cb1c74a",
".git/objects/28/34292c26d7122492e319eac657fbdb8e6e076b": "84b2ed745ef6533521d210c54c787623",
".git/objects/28/3513d6b0d198d35ba2ee29eba436bc02fc5522": "eedc1e8ed5498bd34e7c1a57cbe69e86",
".git/objects/8f/139ef3ad0ec8c8e19ed9967f7b7d254f49082a": "4c9a4ff56614312ef91c567103e80c8f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/1221dfb511cdf60f2f551dd64bc0adb379846d": "d2b724f73195a19a96f24ffa33517e0d",
".git/objects/10/83f753832200cbf123a62f935e5587b5b6ebd4": "c33f8991572f3280b3d410f22907adbf",
".git/objects/21/7786fc45c56cca4c4a3880b9d1d862707c6d4d": "5200abd8d1997e63a9b7cca5be41f5d9",
".git/objects/21/96313db8a67583fe7abd172f22d69ca51e00b2": "83818e2926efa6db39e41ad39bf7811b",
".git/objects/75/28c36a136276516f71d3515f4b23dfa9b3174a": "2923aa80124deeec33a6da780741bb84",
".git/objects/75/03ca6698833aa73e7365ee699040ada30d7c0e": "b48b75d34e8a4a3435c1b1783dddae75",
".git/objects/86/19846840280088f6f2bb637aee853c8d16a2ce": "6d8229275b7f7913399ff853185dafda",
".git/objects/2a/68e2aac52a1a93bda0008d2bd353d5313699ed": "658d8eeb51df9c08b353e89ade2f2036",
".git/objects/88/0d2ecb031adc327cd37eead7364ee708e035db": "4984b1b2a54e730379a437ee76678be5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/a411ca61dab6de40051e36fd525661e97f7bb2": "d23e5b3ec1461d6e3ef1a0a2fab32a3f",
".git/objects/6b/ad344910a17f4e1d54873784846d190296bae9": "d07ad67429eaba7078853efb3f13a52d",
".git/objects/38/1e0c3879f0fd2b33fd3e4472227dfeadbb9eb0": "bbb633c2e718987eb3631dff2ec7e8bd",
".git/objects/62/64a0030e60eb26b6f5d8f833ba1ef9af6ecc6b": "32428d643a90ee7bf90797ed63632927",
".git/objects/54/fc3f4004345f48bf7a51cf7f605c56e59bb01c": "517f679012f6ef8f0d6406803bf7f538",
".git/objects/98/473f6a8bf31982dc5f91f005dcfb483853b140": "2de7899ab1543f04d1f0a055a6a8797b",
".git/objects/30/3651b9d8fb67a10f1131df73805b134a2992f3": "5fefbb1309cd77d61b74744ae1a28df3",
".git/objects/5e/bc74ee5b1b8a65829d4bb254841b7e6872d7a6": "7dfbbd8e241c1d6576b75f76b51a0981",
".git/objects/5b/61740073dcd098c31312cdb6e3340908af2cbe": "c7e6c2b3d59d1dc6b5f4da29eab0a796",
".git/objects/39/c8d746ae42217463db8ac1508fd2727c6334e3": "42b086d39647a73a6e9d174242fded0d",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/55/93cfb3aa35a92f9921936b907ecd460036233b": "29e93b158b66af27bf3a5a9ff2e6c40f",
".git/objects/97/a2de2b1fd08f4f0b7986a09f9cf5df53a584e5": "7edae150312af1d80a964e95eb8829bf",
".git/objects/d4/1a46665d66a0e8c7bcf811c989b658a02a59c5": "16257c8c26c36fd8fa91bbb6f3b52fdf",
".git/objects/dc/3006820fcff1f2433722c5cc2f6dc123536f21": "ee7a0d5add26309a5ea51d2121c9b620",
".git/objects/b7/8a0bb4d8793e870c38ed85dfc56ce839ac9dd9": "4b13f42ab7fb9ceaa0186737c35dd0ac",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/18b0fc9611b90f600525015b86686db4d96a41": "c425ea11907d2202d05230a433dcaf08",
".git/objects/a1/a4c9133b06074748cf54718960197a31e88ecf": "d14b3cf477ce1c50d7395d70f21af4d3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/c3a205bda3ef8014fe06f997b65e2953e8fabf": "fab5110a81f874f94606c6c2e057eb32",
".git/objects/cd/5dd548dc380df7d940701691ab3963bd9b867f": "de2184310f2cfb624f2d835dad298bfd",
".git/objects/cc/98681d17a3821df963330366e7e06d99ddaf6a": "5cd2fc8d42e11a2ecb531324655923de",
".git/objects/e6/d36d66dbf38a7c6c25e2e6a16742339d8e2c72": "a8ab628cfde1fdb864c62fa0c598bccf",
".git/objects/e8/44b2ac7551645d1c6cb7950480ebc060575995": "e764960b3e425f0a6e1be4aa7caaca30",
".git/objects/ff/403d8f5cb239b4a2226c1e084951585d61f597": "9ecc23535cef2c8cf4ff3e279c022b30",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ce/6c2009cf0b68a7c95e7fdabc00da44d20cb0da": "3db3bd0db171d678dcac80218e462ed2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/5e0f6ce3b1ab575aca92a36f9c1a930ced11b5": "9c44b6ebb0b52ac7401f96e770e94e3c",
".git/objects/79/6d72fb7403bf7657efc9ee03d58612a35573ac": "b17b319dd62a1d1a21e044a48e16a43e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/4fbe498d1649ce6543250efdb3037e8b100ef8": "02d9e46e5a0dcec3493978e347fc864f",
".git/objects/41/10ec2baefe90dbe5cda5b356ad20dd20629f81": "0b401cce21b742fbec8e3922933fbc3a",
".git/objects/4a/50b1bb07580ff2b2e6ccd84ae41ae6f24458f0": "2e20967b11ba9ba497e068b8d1129484",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/71/226150603ced575182caaffedcb0f40aa550bf": "d2f0f839a21fb9cac03fb566ecf18b5b",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/2e/6ef792b6b07bee6f5344e0a9a135868a70c6f1": "cb1a22be090dbffbb1db3ca29eeeeb3b",
".git/objects/47/4e4f16144581d52fef541d35b21e437f8b6077": "67082d8fc7942c3ef98858d58788a87f",
".git/objects/7a/65bb0e74c729abfa45967f1e2f7e56afda690e": "7afb33be4df807763d44623643bb3c1e",
".git/objects/8e/c11519818bbc9f5290f50421c9e4e1e4ea9fc3": "0b3d43071c5d96a4bf340edb51a733fb",
".git/objects/8e/2a031f79eb04b8eb32f5239dff3e6609011088": "2ff71c106980de9e28a6c9b597f3747d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2687e4f1b026ae7777138e9e1d36cfd9",
".git/logs/refs/heads/main": "2687e4f1b026ae7777138e9e1d36cfd9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "76d7b1d43a3b449ad6752727e28808dc",
".git/index": "fa6e4510501fc6956ea10cb3521ff1a0",
".git/FETCH_HEAD": "7f321ef4a2b6d93953bafeb7ca722de4",
"assets/AssetManifest.json": "b30538a6cb7dbea82cbbe36b20312488",
"assets/NOTICES": "98569fe73592fc4f6c6d81068b624142",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/Ellipse%25207.png": "2c0f3e09f7dc91ee2976a443f6cff773",
"assets/assets/Vector_(1).png": "fb53e01d9ccf8995cc310f4367783508",
"assets/assets/Rectangle%252022.png": "206f4e61d6ff15dda638e98bea1452e5",
"assets/assets/Ellipse%25206.png": "77b1b5abd433fc9d1a4fed51a3afcc9c",
"assets/assets/Ellipse_45.png": "d5c16e579b5dc6da11fd10ae54d6270c",
"assets/assets/Ellipse%25205.png": "d2322fbdb1b7b49217e5cd103b3b1f0e",
"assets/assets/Rectangle_2.png": "6b8aab53f19b5411a1ec8fef5a26e32f",
"assets/assets/Rectangle_28.png": "eff23a4e7982d0e5d24324f694e47db6",
"assets/assets/sun_1.png": "82feb0fbdd83dec09ad6e8ffd8fe5aff",
"assets/assets/Rectangle_28_(1).png": "26d493a40d3aa386231a9012d96ba6b1",
"assets/assets/Rectangle%252025.png": "94bb4b908ce821fba34b98dc53432b6d",
"assets/assets/qinas-logo_1.png": "74b2d02b27652de0ef57dc89515a0341",
"assets/assets/image_12.png": "aa8c9c65d8ac4d18dea087014c0d462d",
"assets/assets/Rectangle_17.png": "13e9dda87adc6146f6819115180db3dd",
"assets/assets/Rectangle_5.png": "067b6560ea54e5b0b2df282604949969",
"assets/assets/image_10.png": "b4e88448ae0bb2945e1de87fb317f70d",
"assets/assets/quotes_end.png": "e03e47772f5d020b3dade3a9aca46e8a",
"assets/assets/Rectangle%252027.png": "f6315c9b88f16ae59c734f0cb169ec49",
"assets/assets/image%25203%2520(1).png": "aa35464759a39f19ac88a3cbb08e0e15",
"assets/assets/Ellipse_18.png": "ba4e2e74622484e91447a26f58f857d3",
"assets/assets/Group_1.png": "a8f2fd78bff1f624bc2938210c3e25b5",
"assets/assets/image_8.png": "88626f0ce8e3cc6d727b4e8b114275b1",
"assets/assets/Vector.png": "b73bce7a5fd2e485b7f5536323a01060",
"assets/assets/Frame_1_(1).png": "ee3e4faf41807296563cec431bab5853",
"assets/assets/quotes_start.png": "f92e9217c8b98206a889ceb1e4a83d88",
"assets/assets/comenius-rgb%25201.png": "809e73f6f51206e65dc5a66aa3bea9f3",
"assets/assets/CVO%2520t%2520Gooi%2520RGB%25201.png": "969239b97285590b6a97acba31c4d4e9",
"assets/assets/Rectangle_22_(1).png": "3f166259c409e0640b089a98f75226b8",
"assets/assets/Frame_1.png": "61d496def68e51d31f54685257719d1f",
"assets/assets/Ellipse_20.png": "63b784592fe7ff3bf3d2bb159cdbef23",
"assets/assets/image%25202%2520(1).png": "07e9248ccba0720b88c84aa0f5817b17",
"assets/assets/Group_4.png": "abe0bdae0dd091a4313774ebe68d3412",
"assets/assets/sun%25201.png": "82feb0fbdd83dec09ad6e8ffd8fe5aff",
"assets/assets/image_1.png": "6599648e19134d519d9a0c573e1ff892",
"assets/assets/image_9_(1).png": "ef876c5f9fc565597e95af9f7d587d1d",
"assets/assets/image_4.png": "2163f7c213136850c329755496dc5365",
"assets/assets/twitter.png": "fb53e01d9ccf8995cc310f4367783508",
"assets/assets/Rectangle%25202.png": "6b8aab53f19b5411a1ec8fef5a26e32f",
"assets/assets/Rectangle_27.png": "f6315c9b88f16ae59c734f0cb169ec49",
"assets/assets/Untitled.png": "e7ad0ee9ebf46a6196de19daeb168530",
"assets/assets/Rectangle%252017.png": "13e9dda87adc6146f6819115180db3dd",
"assets/assets/Rectangle_26.png": "205bd262285531d3a592021d9d89d5f2",
"assets/assets/Rectangle_32.png": "4c17f815bac3415f03cd15f37d2473a3",
"assets/assets/image_3_(1).png": "aa35464759a39f19ac88a3cbb08e0e15",
"assets/assets/Rectangle_30.png": "28cfb3e9a74b89cb80963b8f64cb1625",
"assets/assets/Rectangle%252028.png": "eff23a4e7982d0e5d24324f694e47db6",
"assets/assets/image%25204.png": "2163f7c213136850c329755496dc5365",
"assets/assets/Rectangle_25.png": "94bb4b908ce821fba34b98dc53432b6d",
"assets/assets/LC-Logo-Geel-RGB%2520-%2520light%2520theme%25201.png": "a4788277df5a708414475c52b489649b",
"assets/assets/image_2_(1).png": "07e9248ccba0720b88c84aa0f5817b17",
"assets/assets/Ellipse_5.png": "d2322fbdb1b7b49217e5cd103b3b1f0e",
"assets/assets/image%25201.png": "6599648e19134d519d9a0c573e1ff892",
"assets/assets/Rectangle%25205.png": "067b6560ea54e5b0b2df282604949969",
"assets/assets/Rectangle_22.png": "206f4e61d6ff15dda638e98bea1452e5",
"assets/assets/Ellipse_7.png": "2c0f3e09f7dc91ee2976a443f6cff773",
"assets/assets/Ellipse_6.png": "77b1b5abd433fc9d1a4fed51a3afcc9c",
"assets/assets/Vector%2520(1).png": "fb53e01d9ccf8995cc310f4367783508",
"assets/assets/erfgooierscollege_1.png": "bcd3c2b09f13d64162bda8d488b37452",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
