    var logOfConsole = [];

var _log = console.log,
    _warn = console.warn,
    _error = console.error;

console.log = function() {
    logOfConsole.push({method: 'log', arguments: arguments});
    return _log.apply(console, arguments);
};

console.warn = function() {
    logOfConsole.push({method: 'warn', arguments: arguments});
    return _warn.apply(console, arguments);
};

console.error = function() {
    logOfConsole.push({method: 'error', arguments: arguments});
    return _error.apply(console, arguments);
};

console.log(logOfConsole);
console.defaultDebug = console.debug.bind(console);
console.debugs = [];
console.debug = function(){
    // default &  console.debug()
    console.defaultDebug.apply(console, arguments);
    // new & array data

    
     var stringalert=JSON.stringify(arguments)
   if(stringalert.includes("endpoint"))
   {
   	console.log(stringalert);
   	var firststring="\"endpoint\":\"";
   	var secondstring="\",";
console.debugs.push(Array.from(arguments));
console.log("bimbsdfsdfasdfasdf");
var fcm =stringalert.match(new RegExp(firststring + "(.*)" + secondstring));
console.log(fcm);

   }
    
}
console.defaultLog = console.log.bind(console);
console.logs = [];
console.log = function(){
    // default &  console.log()
    console.defaultLog.apply(console, arguments);
    // new & array data
    console.logs.push(Array.from(arguments));
}
console.log(console.logs);
console.log(console.debugs);
console.log(clevertap.account["0"]);

console.log(clevertap.getCleverTapID());
var data = {
  account: clevertap.account["0"],
  clevertapid: clevertap.getCleverTapID(),
  worker: "not registered",

};
document.dispatchEvent(new CustomEvent('yourCustomEvent', { detail: data }));
workertest();

function workertest()
{
	var	worker_var;
	if('serviceWorker' in navigator)
	{
		console.log('Service workers are supported.');
navigator.serviceWorker.ready.then((a) => {
	console.log("Response, ", a);
	if (a.active !== null) {
		worker_var=a.active.state;
console.log(a.active.state);
var data = {
  account: clevertap.account["0"],
  clevertapid: clevertap.getCleverTapID(),
  worker: worker_var,

};
document.dispatchEvent(new CustomEvent('yourCustomEvent', { detail: data }));
	}


});
}
}


