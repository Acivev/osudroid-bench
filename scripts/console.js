const loadStf = setTimeout(loadStuff, 1);
const scrLoad = setTimeout(scriptLoad, 2500);

function loadStuff() {
  console.log("please wait while some scripts are loading...")
}
function scriptLoad() {
  console.log("scripts finished loading, have fun :)")
}
