# Group Git Best Practices

### A quick review

Git was created in 2005,

### Review

### You do

Your team has just been assigned to make a few updates to the Shady Acres website, you have a tight deadline and this site is in desperate need of a few bug fixes and a update to the Navbar. Bellow you will find each person on the teams tasks that need to be finished before this site can go live.

#### Setup

1. Team member one should fork and clone this repo from SEI-Apollo
2. Every other member of the team should fork and clone Team Member 1's repo.
3. Run `$ npm i` to install all needed Node packages
4. Run `$ npm start` to start the react app
5. Each member should complete theirs and ONLY their set of tasks for the day

<details open>
<summary> Member 1 tasks</summary>
<br>
You have been assigned to fix a small problem with the header and add a new link

1. create a new branch `git checkout -b update-header`
2. Go into `./components/Header`
3. Change the margin of the h1 to `margin: 0 4px;`
4. add a new link to the navbar the link should read "Photos" and for now it can just have a `href="#"` property.

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
