<img src="https://avatars.githubusercontent.com/u/200509271?s=400&u=52ffb95ce0884ad2c717719266626c6e1548c041&v=4" alt="Mustackable" width="100"/>

## Intro

This is the source code for our website - https://mustackable.dev. It is a React 19 app built on top of Next.js.

If you like the structure of the project, feel free to use it as scaffolding for your own projects.

We have included some of our preferred IDE/project/linting settings in the repo to help out people who share our frustration with this topic. 👍👍👍🐷🐷🐷

## Hosting

We host our website as a Node.js app operated via cPanel on Namecheap. We needed to create a special GitHub action/workflow in order to automate the deployment.

The tricky part was getting the Node.js app to restart after FTP transfer finished, but we found a way to achieve this.

Feel free to copy this Github Action/Workflow, if you have to deploy your own Node.js project to a cPanel host 👍🐷
