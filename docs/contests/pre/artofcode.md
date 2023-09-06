# Reflecting on the "Art of Code" Contest
_Held on teachers day(5th September in CC lab)_
## Introduction

The "Art of Code" contest was an exciting journey into the world of coding and creativity. Inspired by Leon Bambrick's insightful article, ["Creating a Quine in HTML is Useless, But It's a Beautiful Art of Code"](https://secretgeek.github.io/html_wysiwyg/html.html), this contest pushed the boundaries of what's possible in HTML and coding as a form of artistic expression.

## The Beauty of a Quine

At the heart of the "Art of Code" contest was the concept of a quine. A quine is a self-replicating program that generates its own source code as output. While quines may seem impractical from a traditional programming perspective, they reveal the inherent elegance and artistry within code.

## The Contest Solution

During the contest, participants were challenged to create their own quines in HTML. The task may have appeared daunting at first, given HTML's primary role as a markup language, but the results were awe-inspiring.

Here's a simplified example of a quine in HTML, and the solution of the contest. These solution is one of the easiest solution and it was excepted by the contest participants.
#### Input
```html
<html>
<head>
<style>
html { margin: 16px; height: 1% }
* { display: block; font-family: monospace }
html:before { content: '<html>' } html:after { content: '</html>' }
head:before { content: '<head>' } head:after { content: '</head>' }
body:before { content: '<body>' } body:after { content: '</body>' }
title:before { content: '<title>' } title:after { content: '</title>' }
style:before { content: '<style>' } style:after { content: '<\/style>' }
style { white-space: pre-wrap }
p:before { content: '<p>' } p:after { content: '</p>' }
a:before { content: '<a>' } a:after { content: '</a>' }
a[href]:before { content: "<a href='" attr(href) "'>" }
</style>
<title>Printing the source code</title>
</head>

  <body>
  <p>These is a contest by ACET Coding Club.</p>

  <p>Check our Website 
  <a href='acet-codingclub.web.app'>Click here</a>
  </p>

  </body>

</html>
```
Output

[Click here to see the output](/output.html){target="_self"}