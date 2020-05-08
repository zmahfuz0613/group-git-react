# Group Git React

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

<details>
<summary> Member 1 tasks</summary>
<br>
You have been assigned to fix a small problem with the Navbar and add a new link.

1. In your terminal, create a new branch `git checkout -b update-navbar`.
1. Type `git branch -a` to see your branches and remotes. The branch you are currently on should have an asterisk next to it. It should look something like this:

```
  master
* update-navbar
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
```

You can also check which branch you are on by running a `git status` which should give you something like this:

```
On branch update-navbar
nothing to commit, working tree clean
```

Complete the rest of your tasks on this new branch. **Do not work directly on the master branch!**

3. Navigate into `./components/Navbar`
1. Your client wants everything pixel-perfect! Change the margin of the h1 to `margin: 0 4px;`
1. We also need a link that allows users to view photos of the properties. Add a new link to the Navbar. The link should read "Photos" and for now it can just have an `href="#"` property.
1. Let's also separate those links a bit so they're easier to read. Add `padding: 0 5px;` to the Anchor styles.

At this point your tasks have been completed, you can now push your changes to GitHub:

7. `$ git add .`
1. `$ git commit -m 'Updated Navbar'`
1. `$ git push origin update-navbar`
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
1. `$ git commit -m 'Updated Main'`
1. `$ git push origin update-main`
1. In GitHub, create a new pull request with a brief explanation of what you did.
1. If you are the Git Czar, wait until your teammates have let you know they have new changes ready to merge. If not, let your Git Czar know your pull request is ready.
</details>

<details>
<summary> Member 3 tasks</summary>
<br>
You have been assigned to add credits and fix a bug in the Footer component.

1. In your terminal, create a new branch `git checkout -b update-footer`.
1. Type `git branch -a` to see your branches and remotes. The branch you are currently on should have an asterisk next to it. It should look something like this:

```
  master
* update-footer
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
```

You can also check which branch you are on by running a `git status` which should give you something like this:

```
On branch update-footer
nothing to commit, working tree clean
```

Complete the rest of your tasks on this new branch. **Do not work directly on the master branch!**

3. Navigate into `./components/Footer`
1. Currently there is no footer. Make sure everyone who looks at this site will know who built it! Add `<span>Shady Acres</span> ©2020 built by name, name, and name.` (replace 'name' with each of your team's names) to `<Credit>`
1. It might look a little better if the text is centered. Add styles to `Credit` to center the text.
1. Let's also give the text a little more padding. Add `padding: 5px;` to `Credit`

At this point your tasks have been completed, you can now push your changes to GitHub:

7. `$ git add .`
8. `$ git commit -m 'Updated Footer'`
9. `$ git push origin update-footer`
10. In GitHub, create a new pull request with a brief explanation of what you did.
11. If you are the Git Czar, wait until your teammates have let you know they have new changes ready to merge. If not, let your Git Czar know your pull request is ready.
</details>

### Code Review

After your pull request have been opened your team should take a few minuets
Make sure every one in your group has had a chance to talk about what changes they have made. Check for conflicts and the "Git Czar" can merge the pull request to the master branch. 

After this step all members should `git checkout master` and run `git pull` at this point you will have all the latest changes to the project! Test it out by running `npm start`

### Merge Conflict

Okay last min changes have came in and we need fix a small issue with the app.
Each member should create a new branch `git checkout -b 'myname'-hotfix`
In this new branch go to `App.js` and change the inital state of year to the year they were born or some other random year.

once you have saved and commited your changes you should be able to go back to GitHub and open a new pull request. At this point you should see that there is a issue and that the changes can not be merged into master until the merge conflit has been resolved. If you can not remeber how to remedy this look back at yesterdays lesson to look for a soulution!

