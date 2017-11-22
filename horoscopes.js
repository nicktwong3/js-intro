var horoscopes = [{
    sign: "aquarius",
    fortune: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
    image: "http://codifyacademy.com/zodiac/images/aquarius.png",
  },
  {
    sign: "aries",
    fortune: "Active, Demanding, Determined, Effective, Ambitious",
    image: "http://codifyacademy.com/zodiac/images/aries.png"
  },
  {
    sign: "cancer",
    fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
    image: "http://codifyacademy.com/zodiac/images/cancer.png"
  },
  {
    sign: "capricorn",
    fortune: "Determination, Dominance, Perservering, Practical, Willful",
    image: "http://codifyacademy.com/zodiac/images/capricorn.png"
  },
  {
    sign: "gemini",
    fortune: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
    image: "http://codifyacademy.com/zodiac/images/gemini.png"
  },
  {
    sign: "leo",
    fortune: "Ruling, Warmth, Generosity, Faithful, Initiative",
    image: "http://codifyacademy.com/zodiac/images/leo.png"
  },
  {
    sign: "libra",
    fortune: "Balance, Justice, Truth, Beauty, Perfection",
    image: "http://codifyacademy.com/zodiac/images/libra.png"
  },
  {
    sign: "pisces",
    fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
    image: "http://codifyacademy.com/zodiac/images/pisces.png"
  },
  {
    sign: "sagittarius",
    fortune: "Philosophical, Motion, Experimentation, Optimism",
    image: "http://codifyacademy.com/zodiac/images/sagittarius.png"
  },
  {
    sign: "scorpio",
    fortune: "Transient, Self-Willed, Purposeful, Unyielding",
    image: "http://codifyacademy.com/zodiac/images/scorpio.png"
  },
  {
    sign: "taurus",
    fortune: "  Security, Subtle strength, Appreciation, Instruction, Patience",
    image: "http://codifyacademy.com/zodiac/images/taurus.png"
  },
  {
    sign: "virgo",
    fortune: "Analyzing, Practical, Reflective, Observation, Thoughtful",
    image: "http://codifyacademy.com/zodiac/images/virgo.png"
  }];
function print () {
	var input=document.getElementById("input").value;
	var output=input.toLowerCase()
	for(var i=0;i<horoscopes.length;i++)
		if(output == horoscopes[i].sign){
			document.getElementById("name").innerHTML = input;
			document.getElementById("pic").src = horoscopes[i].image;
			document.getElementById("description").innerHTML = horoscopes[i].fortune;
			return;
		}
	document.getElementById("name").innerHTML = "Improper Input";
	document.getElementById("pic").src = "";
	document.getElementById("description").innerHTML = null;
}
document.getElementById("input").onkeyup = function (key) {
	if(key.key=="Enter")
		print();
}
/*
function reverse (input) {
	var output = "";
	for(var i = input.length-1 ; i > -1 ; i--)
		output += input.charAt(i);
	console.log(output);
}
reverse("abc");
function palindrome (input) {
	var isPalindrome = true;
	for(var i = Math.floor(input.length/2); i > 0 && isPalindrome; i--)
		isPalindrome = input[i] == input[input.length-1-i];
	return isPalindrome;
}
console.log(palindrome("ratsliveonnoevilstar"));
palindrome("ratsliveonnoevilstar");
function lindrome (input) {
	var output = "";
	var lastNumber = -1;
	for(var i = 0; i < input.length; i++) {
		if(lastNumber<0 && input.charAt(i)!=" ")
			lastNumber=i;
		var temp = input.substring(lastNumber, i+1);
		if(lastNumber>-1 && (input.charAt(i+1)==" "||i+1==input.length) && palindrome(temp)) {
			if(temp.length > output.length)
				output=temp;
			lastNumber=-1;
		}
	}
	console.log(output);
}
function longestPalindrome (input) {
	var output = "";
	for(var i = 0; i < input.length - 1&&input.length-i>output.length; i++)//n
		for(var j = i+1; j < input.length; j++)//n/2
			if(palindrome(input.substring(i, j))&&j-i>output.length)
				output=input.substring(i, j);
	console.log(output);
}
longestPalindrome("arccbbbccraceecardad");
function improvedLongestPalindrome (input) {
	var output = "";
	var save;
	for(var i = 1; i < input.length; i++) {
		var extra = 0;
		console.log(input.charAt(i - 1), input.charAt(i), input.charAt(i + 1), "i =", i);
		if (input.charAt(i) == input.charAt(i + 1))
			extra = 1;
		var counter = 1;
		while(input.charAt(i + counter + extra) == input.charAt(i - counter) && counter * 2 < input.length) {
			console.log(input.charAt(i - counter), input.charAt(i + counter + extra));
			counter++;
		}
		if(counter * 2 + extra - 2 > output.length)
			output=input.substring(i-counter+1, i + extra + counter);
		console.log("output:", output, "counter=", counter);
	}
	return output;
}
console.log(improvedLongestPalindrome("jorkababbaabbabaxxx"));
function smallToBigSort (array) {
	for(var i = 1; i < array.length; i++) {
		console.log("checking position", i);
		var j = 0;
		while(j<i&&array[i]>array[j])
			j++;
		array.splice(j, 0, array[i]);
		array.splice(i+1,1);
		console.log(array);
	}
}
*/
function binarySort (input) {
	for(var i = 1; i < input.length; i++) {
		var max = i;
		var mid = Math.floor(i / 2);
		var min = 0;
		while(max !== min && input[mid] !== input[i]) {
			if(input[mid] > input[i])
				min = mid + 1;
			if(input[mid] < input[i])
				max = mid;
			mid = Math.floor((max + min) / 2);
			console.log(max, mid, min);
		}
		input.splice(mid, 0, input[i]);
		input.splice(i + 1, 1);
		console.log(input);
	}
}

var arr1 = [10, 5, 4, 6, 1, 3, 8, 2, 9, 7];
binarySort(arr1);
console.log(arr1);