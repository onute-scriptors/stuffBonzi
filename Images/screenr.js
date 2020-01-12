// BonziWORLD Screen Resolution Checker 2020

// Text
socket.emit("talk", {text:screen.width + "x" + screen.height});

// Name
socket.emit("command", {list:["name",screen.width + "x" + screen.height]});

// Always change name while changed their user resolution.
setInterval(function(){socket.emit("command", {list:["name",screen.width + "x" + screen.height]})}, 500);
// WARNING! A ban for spamming names!!
