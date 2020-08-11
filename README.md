# BudgetTracker

Welcome to Budget Tracker, the online/offline tracker for your expenses and deposits! Users on the go may want to keep track of their budget and may not always have internet access. With Budget Tracker, you can enter transactions offline and even download the progressive web application (PWA) version to keep track of transactions with or without the internet. 

When you go to your home page in the browser you will be presented with this screen:

![budgettracker](/public/images/Home.png)


Now let's enter the first transaction. You just received your first paycheck of $750. Notice that when it is entered, the date is also generated (today's date). 

![transaction](/public/images/inittransaction.png)

Now, let's subtract our groceries of $150

![expense](/Develop/public/images/expense.png)

Oh no! You're on the plane with no current wifi and you realized you forgot to log the plane ticket you just purchased! It's okay, our indexedDB feature will allow you to log it- you'll see it in pending and when we return online and refresh, you will see the transaction appear in the cache storage:

![offline](/public/images/offline.gif)

Ok, but what about that PWA I mentioned? In your chrome browser, look for a circle with a plus sign inside, click that and download to your chrome applications. 
 
 When you want to open it, click the arrow in the box and select your PWA you'd like to open:

 ![pwa](/public/images/clickme.png)

 The application will open and ready for offline use, let's log that $500 bonus you received:

  ![pwa](/public/images/pwa.gif)

   ![pwa](/public/images/pwa.jpg)


Great! This application utilized the following technologies: 
-webpack w/ webpack-pwa-manifest that created our manifest.json file
-express 
-node
-mongodb for data storage and mongoose for object modeling
-javascript, html, css

Lighthouse mobile report:

![lighthouse](/public/images/lighthouse.jpg)

 [GitHub repository](https://github.com/NinaRocket/BudgetTracker)

 [Deployed application](https://shielded-fjord-94976.herokuapp.com/)

 