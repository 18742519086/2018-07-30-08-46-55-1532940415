module.exports = function main(input) {
    // Write your code here
	var a;
	var sum = 0;
	var b = input;
	for(var i = 0; i < input.length; i++){
		a = b % 10; 
		sum = sum + a;
		b = (b - a) / 10;
	}
	return sum;
};
