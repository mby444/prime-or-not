const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
function prompt(text){
	return new Promise((res, rej) => {
		rl.question(text, (ans) => {
			res(ans);
        });
    });
}
async function main(){
	let x = await prompt("Enter start of range: ");
	let y = await prompt("Enter end of range: ");
	rl.close();
	x = +(x);
	y = +(y);
	if (x > y || x < 0 || y < 0 || isNaN(x) || isNaN(y)) throw Error("Invalid number");
	let table = [];
	for (let i = x; i <= y; i++){
		let isPrime = true;
		for (let j = 2; j < i; j++){
			if (i % j == 0){
				isPrime = false;
			}
		}
		let itsPrime = isPrime ? "Yes" : "No";
		table.push({number: i, prime: itsPrime});
	}
	console.table(table);
}
main();