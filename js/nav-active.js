var home = document.getElementByID("home");
var repos = document.getElementByID("repos");

//Possible Page Names: home, repo
//var.className = var.className + " active"
function getActiveTab(var nameOfPage){
	if(nameOfPage.equals("home")){
		home.className = home.className + " active"
	}else if(nameOfPage.equals("repo")){
		repos.className = repos.className + " active"
	}
}