class Tweet {
	private text:string;
	time:Date;

	constructor(tweet_text:string, tweet_time:string) {
        this.text = tweet_text;
		this.time = new Date(tweet_time);//, "ddd MMM D HH:mm:ss Z YYYY"
	}

	//returns either 'live_event', 'achievement', 'completed_event', or 'miscellaneous'
    get source():string {

        //TODO: identify whether the source is a live event, an achievement, a completed event, or miscellaneous.
        const t = this.text.toLowerCase().replace(/\s+/g, ' ').trim();
        // completed event
        if (t.startsWith('just completed') && t.includes('runkeeper') || t.startsWith('just posted') && t.includes('@runkeeper') || t.includes('completed')){
            return 'completed_event';
        }
        // achievement
        if (t.startsWith('achieved') || t.includes('achieved') || t.includes('personal record') || t.includes('new record') || t.includes('goals') || t.includes('personal best')|| t.includes('set a goal')){
            return 'achievement'
        }
        // live event
        if (t.startsWith('watch my') || t.includes('live') || t.startsWith('i am') || t.startsWith("i'm") || t.startsWith('biking') || t.startsWith('running') || t.startsWith('walking') || t.startsWith('im ')){
            return 'live_event'
        }

        return 'miscellaneous';
    }

    //returns a boolean, whether the text includes any content written by the person tweeting.
    get written():boolean {
        //TODO: identify whether the tweet is written
        return this.text.length > 0;
    }

    get writtenText():string {
        if(!this.written) {
            return "";
        }
        //TODO: parse the written text from the tweet
        return "";
    }

    get activityType():string {
        if (this.source != 'completed_event') {
            return "unknown";
        }
        //TODO: parse the activity type from the text of the tweet
        return "";
    }

    get distance():number {
        if(this.source != 'completed_event') {
            return 0;
        }
        //TODO: prase the distance from the text of the tweet
        return 0;
    }

    getHTMLTableRow(rowNumber:number):string {
        //TODO: return a table row which summarizes the tweet with a clickable link to the RunKeeper activity
        return "<tr></tr>";
    }
}