window.onload = () => {
	
	/* app.use(function(req, res, next){
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
		next();
	}); */
	
	UiPathRobot.init(10);
	console.log('App.js connected!');
	
	UiPathRobot.getProcesses().then(processes => {
		console.log('PriceGauge launched...');
		processes = processes.find (p => p.name.includes('PriceGauge'));
		process.start().then(result => {
			console.log('PriceGauge starting...');
		}, 
		err => {
			console.log(err);
		})
	},
	err => {
		console.log(err);
	});
	
	function startPriceGauge(){
		console.log('Process launched!');
		
	}
}

	
		