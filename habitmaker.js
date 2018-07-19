var rewards = [
	"have a snack",
	"look at twitter (5 min)",
	"look at social media (5 min)",
	"look at facebook (5 min)",
	"stand up and stretch",
	"go get a coffee",
	"get something from the vending machine",
	"pick a youtube video to watch (don't dawdle)",
	"art break! doodle something on a piece of paper",
	"read an article you've put aside",
	"take a 15 minute break and do anything you want",
	"talk to your study companion for 5 min / check social media for 5 min",
	"look at instagram (5 min)",
	"watch one person's instagram story"
];

// submit click
document.querySelector("button").addEventListener("click", function(){

	var message = ""; // message to be returned
	var random = Math.floor((Math.random() * 10)); // draw a random number

	// if number even, pull something from rewards (random index)
	if (random % 2 === 0 || random === 9) { // 9 in there to increase odds of reward
		document.getElementById("message").classList.add("success","p-3");
		message = rewards[Math.floor((Math.random() * 13))];
	} else {
	// if number odd, don't return a reward (but be encouraging)
		document.getElementById("message").classList.remove("success","p-3");
		message = "No reward right now. Keep up the good work!";
	}

	// return the message
	document.getElementById("message").textContent = message;
});