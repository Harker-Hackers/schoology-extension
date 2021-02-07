var xhr = new XMLHttpRequest();

var but=document.getElementsByClassName("_1SIMq _2kpZl _3OAXJ _13cCs _3_bfp _2M5aC _24avl _3v0y7 _2s0LQ _3ghFm _3LeCL _31GLY _9GDcm _1D8fw util-height-six-3PHnk Header-header-button-active-state-3AvBm Header-header-button-1EE8Y Z_KgC fjQuT uQOmx")[0];

function k(){
var userMenu=document.getElementsByClassName("_2T2dA Header-header-drop-menu-3SaYV util-min-width-twenty-two-2a0Y- util-max-width-twenty-six-1OJjn _38KgL _35hYo _2mWUT _2ue1O les2- util-box-shadow-dropdown-2Bl9b util-margin-top-negative-point-four-3GRLY _3Xw3k _2trRU j17AQ S42JQ VSOiH _3RmDr fjQuT uQOmx")[0];

if (userMenu==undefined){
	setTimeout(k,5);
	return;
};

for (i=0;i<userMenu.children.length;i++){
	console.log(userMenu.children[i].id);
    if (userMenu.children[i].id=="infCamp"){
		return;
	};
}
var li=document.createElement("li");
var ddelem=document.createElement("a")
ddelem.className="_2JX1Q _3VHSs _1k0yk _3_bfp _1tpub dVlNp _3v0y7 _3eD4l _3ghFm _3LeCL _3lLLU _2gJbx util-text-decoration-none-1n0lI Header-header-button-active-state-3AvBm Header-header-drop-menu-3SaYV Header-header-drop-menu-item-3d3IZ";
li.id="infCamp";
ddelem.textContent="Schedule"
ddelem.href="/schedule";
li.appendChild(ddelem);
userMenu.insertBefore(li, userMenu.childNodes[4]);
};

try{
but.onclick=k;
} catch(err){};

//GETTING PW AND USERNAME
if (location.pathname.includes("/login")){
document.getElementById("s-user-login-form").onsubmit=function(){
	localStorage.setItem("scUser", document.getElementById("edit-mail").value);
	localStorage.setItem("scPass", document.getElementById("edit-pass").value);
}
};

//SCHEDULE
if (location.pathname=="/schedule"){
try{
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
var formCallback3 = function(){
	chrome.runtime.sendMessage(
	{type:"url",cors:true,url:"https://harkerca.infinitecampus.org/campus/resources/portal/roster?_expand=%7BsectionPlacements-%7Bterm%7D%7D"},
	data => schedCB(data))
}
var formCallBack2 = function(pData){
	try{
	var samltok=pData.match("<input type=\"hidden\" name=\"SAMLResponse\" value=\"(.*)\" /><")[1];
	chrome.runtime.sendMessage(
	 {type:"urlPost",url:"https://harkerca.infinitecampus.org/campus/SSO/harker/SIS/", rawData:{
		 SAMLResponse:samltok,
		 RelayState:"/harker/SIS/"
	 }},
     data => formCallback3()
	)
	} catch(err){formCallback3()}
}
var formCallBack=function(pData){
	chrome.runtime.sendMessage(
	{type:"url",url:"https://harkerca.infinitecampus.org/campus/SSO/harker/SIS/"},
	data => formCallBack2(data));
}

var username=localStorage.getItem("scUser");
var pass=localStorage.getItem("scPass");
chrome.runtime.sendMessage(
	 {type:"urlPost",url:"https://www.harker.org/fs/auth/finalsite/callback", formData:{
		 username:username,
		 password:pass,
	 }},
     data => formCallBack(data)
)

var schedCB=function(rawData){



//Schedule function
var data=JSON.parse(rawData);
document.getElementById("loadingsc").remove();
document.getElementById("loadingtxt").remove();
var content_div=document.getElementById("schedLoader");

localStorage.setItem("schedData",data);

var today=new Date();
var psn={1:"M",2:"T",3:"W",4:"R",5:"F"}
var psNames={"M":"Monday","T":"Tuesday","W":"Wednesday","R":"Thursday","F":"Friday"};

for (dy in psn){
	
	var day = psn[dy];
	var crsList=[];
	for (crs in data){

		var course = data[crs];
		var sections=data[crs].sectionPlacements;
		for (sec=0;sec<sections.length;sec++){
			
			var section = sections[sec]
			if (section.periodScheduleName!==day){continue};
			var startDate=new Date(section.term.startDate);
			var endDate=new Date(section.term.endDate);
			var spTime=section.startTime.split(":");
			var stime=new Date(2000,0,0,spTime[0],spTime[1],spTime[2],0);
			var epTime=section.endTime.split(":");
			var etime=new Date(2000,0,0,epTime[0],epTime[1],epTime[2],0);
			if (startDate<today && today<endDate){
				
				for (crsI=0;crsI<crsList.length;crsI++){

					var spTime2=crsList[crsI].startTime.split(":");
					var stime2=new Date(2000,0,0,spTime2[0],spTime2[1],spTime2[2],0);
					if (spTime<spTime2){break};

				}
				crsList.splice(crsI,0,section);

			}

		}

	}
	
	var dayDiv=document.createElement("div");
	dayDiv.className="daySched";
	var tempP=document.createElement("p");
	tempP.className="dayName";
	tempP.textContent=psNames[day];
	dayDiv.appendChild(tempP);
	
	for (i=0;i<crsList.length;i++){
		var p = document.createElement("p");
		var stspan=document.createElement("span");
		var stspan2=document.createElement("span");
		stspan.className="sTime";
		stspan2.className="eTime";
		p.className="courseName";
		p.textContent=crsList[i].courseName;
		stspan.textContent=crsList[i].startTime;
		stspan2.textContent=crsList[i].endTime;
		p.appendChild(stspan);
		p.appendChild(stspan2);
		dayDiv.appendChild(p);
	}
	content_div.appendChild(dayDiv);
}





}

}