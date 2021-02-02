/*
function startPriceGauge(){	
	//initiate robot
	UiPathRobot.init(10);
	console.log('App.js connected!');
	
	//run PriceGauge process upon opening the website 
	UiPathRobot.getProcesses().then(processes => {
		let process = processes.find (p => p.name.includes('PriceGauge'));
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
}
*/
window.onload = () => {
    let PriceGauge;

    UiPathRobot.init(10);

    UiPathRobot.getProcesses().then(function (results) {
        if (results.length === 0) {
            showError("Robot not connected to Orchestrator or no processes are available")
        }

        // Get the ID for the sample process
        PriceGauge = results.find(e => e.name.includes('PriceGauge'))

        if (PriceGauge) {
            console.log("Process is available")
        } else {
            showError("PriceGauge not found")
        }

    }, function (err) {
        console.log("Something else went wrong", err)
        showError("Something else went wrong " + err)
    });
	const runPriceGauge = () => {
        let arguments = {
			itemArgIn: document.getElementById('input-item').value,
			emailArgIn: document.getElementById('input-email').value
        }
		document.getElementById("submit-btn").disabled = true; 
        //document.getElementById("process-status").innerHTML = "";
        //document.getElementById("process-result").innerHTML = "";

        PriceGauge.start(arguments).then(result => {
            console.log("PriceGauge is finished!");
			document.getElementById("submit-btn").disabled = false; 
		}, err => {
			console.log(err);
		});
    };

    document.querySelector("#user-form").addEventListener("submit", function (event) {
        event.preventDefault();
		
		//form validation
		var x = document.getElementById('input-item').value;
		var y = document.getElementById('input-email').value;
		console.log(x+y);
		if (x == "" || y == "")
			alert("Please fill out both forms!");
		else
			runPriceGauge();
    }, false);
}

	
			