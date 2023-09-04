---
prev:
  text: 'What is it?'
  link: '/guide/aboutcom'
next:
    text: 'Community Guidelines'
    link: '/guide/guidelines'
---
# How to contribute

Contributing on these site can be hectic and vegious so you don't follow the steps properly.

## How we made these site

These site is made from Vitepress, Vitepress is build up on vite which is a javascript framework use to build frontend. 


## How to make changes to the site.

**Note that you have installed [node.js](https://nodejs.org/en/download) and [git](https://git-scm.com/downloads) on your pc.**

Check these, site on the information on how to make your first contribution on github.

Do the following as shown in the above site, and make the changes as per your according.

### When you have the folder in your desktop do the following in your codingClub folder

``` bash
npm init
npm install --save-dev vitepress
```

after these commands you are good to go to make the changes in the application

to check the changes in the site, run the following command in your terminal

``` bash
npm run docs:dev
```

after editing, push the code to the github repository by 


``` bash
git add guide/index.md #address of the file that is changed
git commit -m "your message here"
git push origin main
```

Your changes will be soon reviewed by a senior developer.