Aarav - I have parsed the schedule a bit so now it looks like this:
```
Monday

8 Expository Writing08:05:0008:47:00

8 US History S208:52:0009:34:00

School Meeting09:39:0009:59:00

Break09:59:0010:10:00

8 Honors Science S210:15:0010:57:00

8 Advanced Core English S211:02:0011:44:00

8 Boys PE S212:49:0013:31:00

Honors Spanish 2M S213:36:0014:18:00

Honors Algebra 2/Trig S214:23:0015:05:00

PM Block15:05:0015:35:00

Tuesday

8 Expository Writing08:05:0008:47:00

8 US History S208:52:0009:34:00

Break09:34:0009:47:00

Advisory Class of 202509:52:0010:10:00

8 Honors Science S210:15:0010:57:00

8 Advanced Core English S211:02:0011:44:00

8 Boys PE S212:49:0013:31:00
```
Each of the classes, like `8 Boys PE` or `Advisory Class of 2025` have a class name called courseName. The start times (09:52:00) have a class name called sTime, and the end times have a class name called eTime. In the main.js, there is a piece of code with some html in it. It is under the `//SCHEDULE` comment, and looks like this:
```javascript
document.getElementById("content-wrapper").innerHTML=`
<style>
.loader {
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #3498db;
  width: 25px;
  height: 25px;
  margin-left:10px;
  margin-top:10px;
  margin-bottom:10px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
<div id="schedLoader" style="background-color:rgb(255,255,255);border: 1px solid rgb(199,199,199);">
<p style="margin-left:5px;" id="loadingtxt">Loading...</p>
<div class="loader" id="loadingsc"></div>
</div>
`;
} catch (err){};
```
You add to the `<style></style>` blocks with code and it will change how the schedule looks.



Aarush - Instead of LocalStorage, switch to the Chrome Storage thingy. Even though its async, it (i thnk) can be used in incog. also graph
