# Art of code <button id="submit-btn" onclick= "window.location.href = '/submit.html';"> Submit Solution</button>
## Problem Statement

You have created a html file having name index.html. Your task is to display all the text written in the html file as
plain text on the webpage.

## Constraints

All the html tags used in the webpage should also be seen as plain text on the webpage.

## Input

```Html client
<html>

<head>
    <title>Printing the source code</title>
</head>

<body>
    <p>These is a contest by the ACET Coding Club</p>
    <p>Check our Website
        <a href="acet-codingclub.web.app">Click here</a>
    </p>
</body>

</html>
```
## Output

<!-- <img src="/docs/public/output.png"> -->
<!-- </div> -->
<div class="outputx">
    <div class="card">
        <div class="tools">
            <div class="circle">
                <span class="red box"></span>
            </div>
            <div class="circle">
                <span class="yellow box"></span>
            </div>
            <div class="circle">
                <span class="green box"></span>
                <span
                    style="font-size: 14px; margin-left: 190px; padding: 5px; background: rgb(255, 255, 255); border-radius: 50px;">&nbsp;&nbsp;&nbsp;&nbsp;index.html&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
        </div>
        <div class="card__content">
            <!-- <img id="output" src="/docs/public/outputx.png" alt=""> -->
            <textarea disabled >
<html>

<head>
    <title>Printing the source code</title>
</head>

<body>
    <p>These is a contest by the ACET Coding Club</p>
    <p>Check our Website
        <a href="acet-codingclub.web.app">Click here</a>
    </p>
</body>

</html>
            </textarea>
        </div>
    </div>
</div>

<style>
    .card {
        width: 600px;
        height: 380px;
        background-color: #efefef;
        border-radius: 8px;
        z-index: 1;
        box-shadow: 2px 2px 10px rgba(92, 91, 91, 0.349);
    }

    .tools {
        display: flex;
        align-items: center;
        padding: 9px;
    }

    .circle {
        padding: 0 4px;
    }

    .box {
        display: inline-block;
        align-items: center;
        width: 10px;
        height: 10px;
        padding: 1px;
        border-radius: 50%;
    }

    .red {
        background-color: #ff605c;
    }

    .yellow {
        background-color: #ffbd44;
    }

    .green {
        background-color: #00ca4e;
    }
    card__content{
        padding: 10px;
    }
    textarea{
        margin: 20px;
        width: 500px;
        height: 300px;
        resize: none;
        outline: none;
    }
    #submit-btn{
        width: 140px;
        height: 50px;
        background:#10b981;
        color: white;
        font-weight: 800;
        float: right;
        border-radius: 10px;
    }
</style>