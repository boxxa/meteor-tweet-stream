Package.describe({
	name: "boxxa:tweet-stream",
	summary: "A twitter module to hook into the public filter streaming, seamlessly updating the tracking keywords in meteor",
	author: "Boxxa",
	version: "1.0.0",
	git: "https://github.com/boxxa/meteor-tweet-stream.git"
});

Npm.depends({'node-tweet-stream': '1.8.1'});

Package.on_use(function(api){
	api.versionsFrom('METEOR@0.9.1.1');

	api.add_files(['tweet-stream.js'], 'server');
	
	if(api.export)
		api.export('Stream');
});
