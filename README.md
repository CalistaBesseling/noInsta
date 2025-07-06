I deleted Instagram on my phone so I would stop using it... then I just started going on Instagram on my laptop. 
So this is a chrome extension that checks if I've completed a Leetcode problem that day. 
Once I complete a Leetcode problem, then I'm allowed to go on Instagram. 

This extention uses the alfa leetcode api - https://github.com/alfaarghya/alfa-leetcode-api?tab=readme-ov-file 
to check my leetcode caledar, and if it shows 0 submissions for the day, it will redirect to Leetcode.

If you want to use this extension for yourself, you'll just have to replace my leetcode username with your own in the Content.js file line 10
fetch("https://alfa-leetcode-api.onrender.com/YOUR_USERNAME/calendar");
Then zip the files and upload them to your extensions. 
