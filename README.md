# Group Git Best Practices

### A quick review

Git was created in 2005,

### Review

### You do

Your team has just been assigned to make a few updates to the Shady Acres website, you have a tight deadline and this site is in desperate need of a few bug fixes and an update to the Navbar. Below you will find the tasks that need to be finished before this site can go live, divided up by team member.

#### Setup

Decide as a group who will be in charge of the repo. This person will be your Git Czar.

### Git Czar does

1. **Fork** and **clone** this repo from SEI-Apollo.
1. In GitHub, click on the **Settings** tab, and then navigate to **Collaborators & Teams**.
1. Add your teammates as collaborators. You will need their Enterprise usernames.
1. Share the link for your new repo with your teammates.

### All members do

1. Using your Git Czar's link, **clone** their repo. **Do not fork**.
1. Run `$ npm i` to install all needed Node packages.
1. Run `$ npm start` to start the react app.
1. Decide who will be completing each set of tasks outlined below. There should be one person assigned to each set of tasks.
1. Complete your and **ONLY** your assigned set of tasks for the day.

<details open>
<summary> Member 1 tasks</summary>
<br>
You have been assigned to fix a small problem with the Navbar and add a new link.

1. In your terminal, create a new branch `git checkout -b update-header`.
1. Type `git branch -a` to see your branches and remotes. The branch you are currently on should have an asterisk next to it. It should look something like this:
```  
  master
* update-header
  remotes/origin/HEAD -> origin/master
  remotes/origin/master 
```

You can also check which branch you are on by running a `git status` which should give you something like this:
```
On branch update-header
nothing to commit, working tree clean
```

Complete the rest of your tasks on this new branch. **Do not work directly on the master branch!**

3. Navigate into `./components/Navbar`
1. Your client wants everything pixel-perfect! Change the margin of the h1 to `margin: 0 4px;`
1. We also need a link that allows users to view photos of the properties. Add a new link to the Navbar. The link should read "Photos" and for now it can just have an `href="#"` property.

At this point your tasks have been completed, you can now push your changes to GitHub:

6. `$ git add .`
1. `$ git commit -m 'Updated Navbar'`
1. `$ git push origin update-header`
1. In GitHub, create a new pull request with a brief explanation of what you did.
1. If you are the Git Czar, wait until your teammates have let you know they have new changes ready to merge. If not, let your Git Czar know your pull request is ready. 

</details>

<details>
<summary> Member 2 tasks</summary>
<br>
You have been assigned to fix a typo and add a little styling to the Main component.

1. In your terminal, create a new branch `git checkout -b update-main`.
1. Type `git branch -a` to see your branches and remotes. The branch you are currently on should have an asterisk next to it. It should look something like this:
```  
  master
* update-main
  remotes/origin/HEAD -> origin/master
  remotes/origin/master 
```

You can also check which branch you are on by running a `git status` which should give you something like this:
```
On branch update-main
nothing to commit, working tree clean
```

Complete the rest of your tasks on this new branch. **Do not work directly on the master branch!**

3. Navigate into `./components/Main`
1. Did you catch the typo? Delete the last 'r' from the word 'Reserve' in the first div.
1. Make the text more readable. Add the line `flex-direction: column;` to the end of your Div styles.
1. Center the text with `text-align: center;`

At this point your tasks have been completed, you can now push your changes to GitHub:

7. `$ git add .`
1. `$ git commit -m 'Updated Navbar'`
1. `$ git push origin update-header`
1. In GitHub, create a new pull request with a brief explanation of what you did.
1. If you are the Git Czar, wait until your teammates have let you know they have new changes ready to merge. If not, let your Git Czar know your pull request is ready. 
</details>

<details>
<summary> Member 3 tasks</summary>
<br>
</details>
