(function() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", [_bpLoader.baseURL, _bpLoader.scriptsJSON].join(""), false);
	xhr.send();

	var sources = (typeof JSON === "object" ? JSON.parse : eval).call(this, xhr.responseText),
	scripts = [];

	var type = function(src) {
		return "text/javascript";
};

var now = Date.now ? Date.now() : +(new Date);
for (var i = sources.length - 1; i >= 0; --i) {
	scripts.unshift(["<script type=", type(sources[i]), " src=", [_bpLoader.baseURL, sources[i].replace(/\.coffee$/, ".js"), "?_=", now].join(""), "></script>"].join("\""));
	console.info("added %s", sources[i]);
}
document.write(scripts.join("\n"));
console.info("added %i scripts to DOM\n---", scripts.length);
})();
