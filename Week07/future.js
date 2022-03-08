var numKids = [3,2,1];
var spouse = ["Jane","Isabelle","Scarlet"];
var city = ["Plano","Denton","Dallas","Frisco"];
var job = ["Carpator","Programmer","Mechanic"];

var xx= Math.floor(Math.random() * 3)

function Fortune(job,city,spouse,numKids){
document.write("You will be a " + job + " in " + city + ", and married to " + spouse + " with " + numKids + " kids.");
}

Fortune(job[xx],city[xx],spouse[xx],numKids[xx])
