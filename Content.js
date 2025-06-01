// get todays date
const today = new Date();
today.setUTCHours(0, 0, 0, 0);
const time = Math.floor(today.getTime() / 1000);
console.log("time:" + time);

(async () => {
    // get leetcode submissions for today
    try{
        const response = await fetch("https://alfa-leetcode-api.onrender.com/Calista_Besseling/calendar");
        const outer = await response.json(); 
        const inner = JSON.parse(outer.submissionCalendar);

        const submissionsToday = inner[time];
        console.log(submissionsToday)

        // if 0 or undefined, redirect
        if (!submissionsToday){
            console.log("noooooo no instagram no!");
            window.location.replace("https://leetcode.com/problemset/");
        } else{
            console.log("yay! Instagram!");
        }

    }catch(err){
        console.error("Uh oh! ", err);
    }
})();
