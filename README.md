# Group Git Best Practices

### A quick review

Git was created in 2005,

### Review

### You do

Your team has just been assigned to make a few updates to the Shady Acres website, you have a tight deadline and this site is in desperate need of a few bug fixes and an update to the Navbar. Below you will find the tasks that need to be finished before this site can go live, divided up by team member.

#### Setup

1. Decide as a group who will be in charge of the repo. This person will be your Git Czar.

### Git Czar does

2. **Fork** and **clone** this repo from SEI-Apollo.
3. In GitHub, click on the **Settings** tab, and then navigate to **Collaborators & Teams**.
4. Add your teammates as collaborators. You will need their Enterprise usernames.
5. Share the link for your new repo with your teammates.

### All members do

6. Using your Git Czar's link, **clone** their repo. **Do not fork**.
7. Run `$ npm i` to install all needed Node packages.
8. Run `$ npm start` to start the react app.
9. Decide who will be completing each set of tasks outlined below. There should be one person assigned to each set of tasks.
10. Complete your and **ONLY** your assigned set of tasks for the day.

<details open>
<summary> Member 1 tasks</summary>
<br>
You have been assigned to fix a small problem with the header and add a new link

1. Create a new branch `git checkout -b update-header`
2. Navigate into `./components/Header`
3. Change the margin of the h1 to `margin: 0 4px;`
4. Add a new link to the navbar. The link should read "Photos" and for now it can just have an `href="#"` property.

At this point your tasks have been completed, you can now push your changes to git hub

1. `$ git add .`
2. `$ git commit -m 'Updated Navbar`
3. `$ git push origin update-header`

</details>

<details>
<summary> Member 2 tasks</summary>
<br>
</details>

<details>
<summary> Member 3 tasks</summary>
<br>
</details>
