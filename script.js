var names=new Array();
names[0]="Jen";
names[1]="John";
names[2]="Yaakov";
names[3]="jason";
names[4]="paul";
names[5]="frank";
names[6]="larry";
names[7]="jim";
names[8]="laura";
names[9]="paul";
for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}