function parseTweets(runkeeper_tweets) {
	//Do not proceed if no tweets loaded
	if(runkeeper_tweets === undefined) {
		window.alert('No tweets returned');
		return;
	}

	tweet_array = runkeeper_tweets.map(function(tweet) {
		return new Tweet(tweet.text, tweet.created_at);
	});
	
	//This line modifies the DOM, searching for the tag with the numberTweets ID and updating the text.
	//It works correctly, your task is to update the text of the other tags in the HTML file!
	document.getElementById('numberTweets').innerText = tweet_array.length;
	
	let earliest = tweet_array[0].time;
	let latest = tweet_array[0].time;

	for (let i = 0 ; i<tweet_array.length; i++){
		const t = tweet_array[i];
		if (t.time < earliest) earliest = t.time;
		if (t.time > latest) latest = t.time;

	}

	const format = {weekday: 'long', month: 'long', day:'numeric', year: 'numeric'}

	document.getElementById('firstDate').innerText = earliest.toLocaleDateString('en-US', format)
	document.getElementById('lastDate').innerText = latest.toLocaleDateString('en-US', format)
}

//Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function (event) {
	loadSavedRunkeeperTweets().then(parseTweets);
}); 