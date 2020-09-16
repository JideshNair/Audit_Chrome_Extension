


document.addEventListener('DOMContentLoaded', () => {

	var isExtensionOn = false;
    const infoDisplay = document.getElementById('acc');   
    const infoctid=document.getElementById('ctid') ;
    const run_me=document.getElementById('run_me');
    const gta=document.getElementById('gta');
    const serviceworker=document.getElementById('serviceworker');
    window.addEventListener('DOMContentLoaded', function () {
    	
 chrome.storage.local.get("datanew", function(data) {
	console.log(JSON.stringify(data.datanew.account.id));
    if(typeof data == "undefined") {
        console.log("error");
    } else {
     infoDisplay.innerHTML = data.datanew.account.id;
     infoctid.innerHTML=data.datanew.clevertapid;
     serviceworker.innerHTML="Service worker is "+data.datanew.worker;
     run_me.style.background="#FF0000";
	run_me.innerText="Ct Debugger is  OFF";
     run_me.addEventListener("click", turnon);
     gta.addEventListener("click",function(){gotoaccount(data.datanew.account.id)},false);
      //searches for and detects the input element from the 'myButton' id
//acc.value = JSON.stringify(data.datanew.account.id);
//console.log(JSON.stringify(data.datanew.account.id));

    }
});
    });
function turnon()
{
	run_me.style.background="#008000";
	run_me.innerText="Ct Debugger is ON"
chrome.tabs.executeScript(null, {
    code: "sessionStorage['WZRK_D'] = '';document.location.reload(true);"
});
chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
    chrome.tabs.reload(arrayOfTabs[0].id);
});
}

});
function gotoaccount(e)
{

window.open("https://eu1.dashboard.clevertap.com/"+e+"/main", '_blank');

};
function hello() {
  chrome.tabs.executeScript({
    file: 'swchecker.js'
  }); 
}



