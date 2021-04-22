var xhr = new XMLHttpRequest();

// Add lunch button
top_bar_icons = document.getElementsByClassName(
    "_2trRU _2K08O fSqCh _1tpub"
)[1];
new_icon = document.createElement("li");
new_icon.setAttribute("class", "_24avl _3Rh90 _349XD");
new_icon.innerHTML = `
<a href="https://schoology.harker.org/lunch">
    <button aria-label="Lunch" class="_1SIMq _2kpZl _3OAXJ _13cCs _3_bfp _2M5aC _24avl _3v0y7 _2s0LQ _3ghFm _3LeCL _31GLY _9GDcm _1D8fw util-height-six-3PHnk util-fill-current-color-2w3fJ Header-header-button-active-state-3AvBm Header-header-button-1EE8Y fjQuT uQOmx" aria-expanded="false" aria-haspopup="true">
        <img src="https://docs.google.com/drawings/d/e/2PACX-1vTMzmSuOBlwCS_Q8NsLf6LvXZLasbqIA0OvvZXpC114YWfTsJT_MBAhfrV6codBNhX6PGXySW_CHeix/pub?w=673&h=611" legnth=25 width=25>
    </button>
</a>
`;
top_bar_icons.insertBefore(new_icon, top_bar_icons.childNodes[0]);

var but = document.getElementsByClassName(
    "_1SIMq _2kpZl _3OAXJ _13cCs _3_bfp _2M5aC _24avl _3v0y7 _2s0LQ _3ghFm _3LeCL _31GLY _9GDcm _1D8fw util-height-six-3PHnk Header-header-button-active-state-3AvBm Header-header-button-1EE8Y Z_KgC fjQuT uQOmx"
)[0];

function k() {
    var userMenu = document.getElementsByClassName(
        "_2T2dA Header-header-drop-menu-3SaYV util-min-width-twenty-two-2a0Y- util-max-width-twenty-six-1OJjn _38KgL _35hYo _2mWUT _2ue1O les2- util-box-shadow-dropdown-2Bl9b util-margin-top-negative-point-four-3GRLY _3Xw3k _2trRU j17AQ S42JQ VSOiH _3RmDr fjQuT uQOmx"
    )[0];

    if (userMenu == undefined) {
        setTimeout(k, 5);
        return;
    }

    for (i = 0; i < userMenu.children.length; i++) {
        if (userMenu.children[i].id == "infCamp") {
            return;
        }
    }

    // create schedule element
    var li = document.createElement("li");
    var ddelem = document.createElement("a");
    ddelem.className =
        "_2JX1Q _3VHSs _1k0yk _3_bfp _1tpub dVlNp _3v0y7 _3eD4l _3ghFm _3LeCL _3lLLU _2gJbx util-text-decoration-none-1n0lI Header-header-button-active-state-3AvBm Header-header-drop-menu-3SaYV Header-header-drop-menu-item-3d3IZ";
    li.id = "infCamp";
    li.role = "presentation";
    ddelem.textContent = "Schedule";
    ddelem.href = "/schedule";
    userMenu.insertBefore(li, userMenu.childNodes[4]);

    // create zoom links element
    var zoom_li = document.createElement("li");
    var zoom_ddelem = document.createElement("a");
    zoom_ddelem.className =
        "_2JX1Q _3VHSs _1k0yk _3_bfp _1tpub dVlNp _3v0y7 _3eD4l _3ghFm _3LeCL _3lLLU _2gJbx util-text-decoration-none-1n0lI Header-header-button-active-state-3AvBm Header-header-drop-menu-3SaYV Header-header-drop-menu-item-3d3IZ";
    zoom_li.id = "zoomLinks";
    zoom_li.role = "presentation";
    zoom_ddelem.textContent = "Zoom Links";
    zoom_ddelem.href = "/zoom_links";
    userMenu.insertBefore(zoom_li, userMenu.childNodes[5]);

    setTimeout(
        function (elem1, elem2) {
            li.appendChild(elem1);
            zoom_li.appendChild(elem2);
        },
        30,
        ddelem,
        zoom_ddelem
    );
}

try {
    but.onclick = function () {
        setTimeout(k, 50);
    };
} catch (err) {}

//GETTING PW AND USERNAME
if (location.pathname.includes("/login")) {
    document.getElementById("s-user-login-form").onsubmit = function () {
        chrome.storage.local.set({
            scUser: document.getElementById("edit-mail").value,
        });
        chrome.storage.local.set({
            scPass: document.getElementById("edit-pass").value,
        });
    };
}

// zoom links
if (location.pathname.split("/")[1] == "zoom_links") {
    document.getElementById("main-content-wrapper").innerHTML = `
    <br>
    <center>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vSYNgfaPwFrWQAg8kAu8ykdUf1MbfMocKmGQDQVn1nW86djCHkJFBnxog7O58JOUxCuxHxs-uloESpa/pub" height=700 width=100% style="border: 1px solid black"></iframe>
    </center>
	`;
}

//SCHEDULE
if (location.pathname.split("/")[1] == "schedule") {
    try {
        document.getElementById("content-wrapper").innerHTML = `
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

		.daySched{
			margin-bottom:20px;
			background-color:rgb(255,255,255);
			border: 1px solid rgb(199,199,199);
		}

		.selDay {
			border: 1px solid rgb(199,199,30);
		}

		.dayName {
			margin-left:10px;
			margin-top:5px;
			margin-bottom:5px;
			font-size:2em;
		}

		.courseName{
			margin-left:10px;
			margin-top:10px;
			margin-bottom:10px;
			font-size:1.25em;
		}

		.mnctnt {
			background-color:rgb(240,240,239);
			padding:30px;
			margin: 0px;
		}

		.wrap {
			width:374px;
			height:265px;
			margin-bottom:20px;
			padding-top:10px;
			background-color:rgb(255,255,255);
			border:none;
			border-radius:2px;
			-wekbit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
			-moz-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
			-ms-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
			-o-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
			margin-left:auto;
			margin-right:auto;
		}

		.mg {
			font-size:1.25em;
			margin-left: auto;
			margin-right:auto;
			margin-top:10px;
			text-align:center;
		}

		.inpINFL1 {
			width:200px !important;
			height:30px !important;
			margin-left: calc(50% - 100px) !important;
			padding:0px !important;
			background-color: rgb(255,255,255) !important;
			border-width: 1px !important;
			border-color: rgb(0,0,0) !important;
		}

		input:-webkit-autofill,
		input:-webkit-autofill:hover,
		input:-webkit-autofill:focus textarea:-webkit-autofill,
		textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
		select:-webkit-autofill,
		select:-webkit-autofill:hover,
		select:-webkit-autofill:focus {
			-webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
		}

		.sTime {
			margin-left:10px;
		}

		.bINFL1:hover {
			background-color: rgb(245,245,245);
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
		<div id="schedLoader">
		<p style="margin-left:5px;" id="loadingtxt">Loading...</p>
		<div class="loader" id="loadingsc"></div>
		</div>
		`;
    } catch (err) {}

    //changing infinite campus schedule
    if (location.pathname == "/schedule/inf") {
        var contentdiv = document.getElementById("schedLoader");
        contentdiv.innerHTML = `
		<div id="mnctnt" class="mnctnt">
		<div class="wrap" id="cntWrap">
		<form id="fUP">
		<p class="mg">Infinite Campus Credentials</p>
		<p id="userDef" class="mg">Loading...</p>
		<input id="userInp" class="mg inpINFL1"></input>
		<p id="passDef" class="mg">Loading...</p>
		<input id="passInp" class="mg inpINFL1" type="password"></input>
		<button id="submit" class="mg inpINFL1 bINFL1" style="color: rgb(0,0,0) !important;">Submit</button>
		</form>
		</div>
		</div>
		`;

        var cont = function (data, t) {
            if (data == {} || data == undefined) {
                if (t == 1) {
                    chrome.storage.local.get("scUser", (data) =>
                        cont(data["scUser"], 0)
                    );
                } else {
                    try {
                        document.querySelectorAll(".logout")[0].click();
                    } catch (err) {
                        k = document.getElementsByClassName(
                            "_1SIMq _2kpZl _3OAXJ _13cCs _3_bfp _2M5aC _24avl _3v0y7 _2s0LQ _3ghFm _3LeCL _31GLY _9GDcm _1D8fw fjQuT uQOmx"
                        )[5];
                        k.click();
                        document.querySelectorAll(".logout")[0].click();
                    }
                }
            }
            document.getElementById("userDef").textContent = String(
                "Username: " + data
            );
        };
        chrome.storage.local.get("infUser", (data) => cont(data["infUser"], 1));
        var cont2 = function (data, t) {
            if (data == {} || data == undefined) {
                if (t == 1) {
                    chrome.storage.local.get("scPass", (data) =>
                        cont2(data["scPass"], 0)
                    );
                } else {
                    try {
                        document.querySelectorAll(".logout")[0].click();
                    } catch (err) {
                        k = document.getElementsByClassName(
                            "_1SIMq _2kpZl _3OAXJ _13cCs _3_bfp _2M5aC _24avl _3v0y7 _2s0LQ _3ghFm _3LeCL _31GLY _9GDcm _1D8fw fjQuT uQOmx"
                        )[5];
                        k.click();
                        document.querySelectorAll(".logout")[0].click();
                    }
                }
            }
            document.getElementById("passDef").textContent = String(
                "Password: " + data
            );
        };
        chrome.storage.local.get("infPass", (data) =>
            cont2(data["infPass"], 1)
        );

        var submitForm = function () {
            chrome.storage.local.set({
                infUser: document.getElementById("userInp").value,
            });
            chrome.storage.local.set({
                infPass: document.getElementById("passInp").value,
            });
        };

        document.getElementById("fUP").onsubmit = submitForm;
    } else {
        var formCallback3 = function () {
            chrome.runtime.sendMessage(
                {
                    type: "url",
                    cors: true,
                    url:
                        "https://harkerca.infinitecampus.org/campus/resources/portal/roster?_expand=%7BsectionPlacements-%7Bterm%7D%7D",
                },
                (data) => schedCB(data)
            );
        };
        var formCallBack2 = function (pData) {
            try {
                var samltok = pData.match(
                    '<input type="hidden" name="SAMLResponse" value="(.*)" /><'
                )[1];
                chrome.runtime.sendMessage(
                    {
                        type: "urlPost",
                        url:
                            "https://harkerca.infinitecampus.org/campus/SSO/harker/SIS/",
                        rawData: {
                            SAMLResponse: samltok,
                            RelayState: "/harker/SIS/",
                        },
                    },
                    (data) => formCallback3()
                );
            } catch (err) {
                formCallback3();
            }
        };
        var formCallBack = function (pData) {
            chrome.runtime.sendMessage(
                {
                    type: "url",
                    url:
                        "https://harkerca.infinitecampus.org/campus/SSO/harker/SIS/",
                },
                (data) => formCallBack2(data)
            );
        };

        function getSched() {
            var next = function (p) {
                var username = p;
                var nexttwo = function (q) {
                    var pass = q;
                    chrome.runtime.sendMessage(
                        {
                            type: "urlPost",
                            url:
                                "https://www.harker.org/fs/auth/finalsite/callback",
                            formData: {
                                username: username,
                                password: pass,
                            },
                        },
                        (data) => formCallBack(data)
                    );
                };
                var pass = chrome.storage.local.get("infPass", function (k) {
                    if ("infPass" in k) {
                        nexttwo(k.infPass);
                    } else {
                        var pass = chrome.storage.local.get(
                            "scPass",
                            function (k) {
                                if ("scPass" in k) {
                                    nexttwo(k.scPass);
                                } else {
                                    try {
                                        document
                                            .querySelectorAll(".logout")[0]
                                            .click();
                                    } catch (err) {
                                        k = document.getElementsByClassName(
                                            "_1SIMq _2kpZl _3OAXJ _13cCs _3_bfp _2M5aC _24avl _3v0y7 _2s0LQ _3ghFm _3LeCL _31GLY _9GDcm _1D8fw fjQuT uQOmx"
                                        )[5];
                                        k.click();
                                        document
                                            .querySelectorAll(".logout")[0]
                                            .click();
                                    }
                                }
                            }
                        );
                    }
                });
            };
            chrome.storage.local.get("infUser", function (k) {
                if ("infUser" in k) {
                    next(k.infUser);
                } else {
                    chrome.storage.local.get("scUser", function (k) {
                        if ("scUser" in k) {
                            next(k.scUser);
                        } else {
                            try {
                                document.querySelectorAll(".logout")[0].click();
                            } catch (err) {
                                k = document.getElementsByClassName(
                                    "_1SIMq _2kpZl _3OAXJ _13cCs _3_bfp _2M5aC _24avl _3v0y7 _2s0LQ _3ghFm _3LeCL _31GLY _9GDcm _1D8fw fjQuT uQOmx"
                                )[5];
                                k.click();
                                document.querySelectorAll(".logout")[0].click();
                            }
                        }
                    });
                }
            });
        }

        try {
            if (location.pathname.split("/")[2] == "update") {
                try {
                    getSched();
                } catch (err) {
                    getSched();
                }
            } else {
                chrome.storage.local.get("schedData", function (k) {
                    if ("schedData" in k) {
                        try {
                            schedCB(k.schedData);
                        } catch (err) {
                            getSched();
                        }
                    } else {
                        getSched();
                    }
                });
            }
        } catch (err) {}

        var schedCB = function (rawData) {
            //Schedule function
            var data = JSON.parse(rawData);
            try {
                document.getElementById("loadingsc").remove();
                document.getElementById("loadingtxt").remove();
            } catch (err) {}
            var content_div = document.getElementById("schedLoader");
            var settings_div = document.getElementById("center-top");

            settings_div.innerHTML = `
	<button style="margin-top:0px;margin-bottom:0px;height:30px;font-size:1.1em;"><span style="margin-left:5px;
	margin-right:5px;" id="updateSched">Update Schedule</span></button>
	<button style="margin-top:0px;margin-bottom:0px;margin-left:5px;height:30px;font-size:1.1em;"><span style="margin-left:5px;
	margin-right:5px;" id="changeInfPW">Use Different Username and Password</span></button>

	`;

            function updateAllScheds() {
                location.pathname = "/schedule/update";
            }
            document.getElementById("updateSched").onclick = updateAllScheds;
            function changeInfPW() {
                location.pathname = "/schedule/inf";
            }
            document.getElementById("changeInfPW").onclick = changeInfPW;

            chrome.storage.local.set({ schedData: rawData });

            var today = new Date();
            var psn = { 1: "M", 2: "T", 3: "W", 4: "R", 5: "F" };
            var psNames = {
                M: "Monday",
                T: "Tuesday",
                W: "Wednesday",
                R: "Thursday",
                F: "Friday",
            };

            var curDay = psn[today.getDay()];

            for (dy in psn) {
                var day = psn[dy];
                var crsList = [];
                for (crs in data) {
                    var course = data[crs];
                    var sections = data[crs].sectionPlacements;
                    for (sec = 0; sec < sections.length; sec++) {
                        var section = sections[sec];
                        if (section.periodScheduleName !== day) {
                            continue;
                        }
                        var startDate = new Date(section.term.startDate);
                        var endDate = new Date(section.term.endDate);
                        var spTime = section.startTime.split(":");
                        var stime = new Date(
                            2000,
                            0,
                            0,
                            spTime[0],
                            spTime[1],
                            spTime[2],
                            0
                        );
                        var epTime = section.endTime.split(":");
                        var etime = new Date(
                            2000,
                            0,
                            0,
                            epTime[0],
                            epTime[1],
                            epTime[2],
                            0
                        );
                        if (startDate < today && today < endDate) {
                            for (crsI = 0; crsI < crsList.length; crsI++) {
                                var spTime2 = crsList[crsI].startTime.split(
                                    ":"
                                );
                                var stime2 = new Date(
                                    2000,
                                    0,
                                    0,
                                    spTime2[0],
                                    spTime2[1],
                                    spTime2[2],
                                    0
                                );
                                if (spTime < spTime2) {
                                    break;
                                }
                            }
                            crsList.splice(crsI, 0, section);
                        }
                    }
                }

                var dayDiv = document.createElement("div");
                dayDiv.className = "daySched";
                if (day == curDay) {
                    dayDiv.className += " selDay";
                }
                var tempP = document.createElement("p");
                tempP.className = "dayName";
                tempP.textContent = psNames[day];
                dayDiv.appendChild(tempP);

                for (i = 0; i < crsList.length; i++) {
                    dayDiv.innerHTML += "<hr>";
                    var p = document.createElement("p");
                    var b = document.createElement("b");
                    var stspan = document.createElement("span");
                    var stspan2 = document.createElement("span");
                    var stspanb = document.createElement("span");
                    stspan.className = "sTime";
                    stspan2.className = "eTime";
                    stspanb.className = "bTime";
                    p.className = "courseName";
                    b.textContent = crsList[i].courseName;
                    var parseTime = function (t) {
                        var tm = t.split(":");
                        var apm = "am";
                        if (tm[0][0] == "0") {
                            tm[0] = tm[0].slice(1);
                        }
                        var pt = parseInt(tm[0]);
                        if (pt > 12) {
                            pt -= 12;
                            apm = "pm";
                        }
                        tm[0] = String(pt);
                        tm.pop();
                        tm = tm.join(":");
                        tm += " " + apm;
                        return tm;
                    };
                    stspan.textContent = parseTime(crsList[i].startTime);
                    stspan2.textContent = parseTime(crsList[i].endTime);
                    stspanb.textContent = " - ";
                    p.appendChild(b);
                    p.appendChild(stspan);
                    p.appendChild(stspanb);
                    p.appendChild(stspan2);
                    dayDiv.appendChild(p);
                }
                content_div.appendChild(dayDiv);
            }
        };
    }
}

function overdueAssignmentFixer(context, mClass) {
    mClass = mClass.replaceAll(" :", ":");
    $(".upcoming-events-wrapper:not(.sEventUpcoming-processed)", context)
        .addClass("sEventUpcoming-processed")
        .each(function () {
            $(this).on("click", "a.expander", function (e) {
                var subeventObj = $(
                    ".events-hidden",
                    $(this).closest(".upcoming-event")
                );
                if (subeventObj.is(":hidden")) subeventObj.show();
                else subeventObj.hide();

                e.preventDefault();
            });
        });

    // Filters out past events (or not yet overdue submissions) and excess future events.
    // This allows HTTP caching to be used while still displaying the correct upcoming events.
    $(".upcoming-list .date-header:not(.sEventUpcoming-processed)", context)
        .addClass("sEventUpcoming-processed")
        .each(function () {
            let isOverdueSubmissionsList =
                context.attr !== undefined &&
                context.attr("id") === "overdue-submissions";

            // Per requirements of SGY-10439:
            // The events are grouped by days - the last day returned should contain all of the events of that day
            // even if this exceeds the number of events that should normally be returned.
            const maxEvents = 10;
            if (
                !isOverdueSubmissionsList &&
                $(".upcoming-event:not(.hidden):not(.nested)", context)
                    .length >= maxEvents
            ) {
                return;
            }

            let now = convertJsTimestampToPhp(Date.now());
            let dateHeader = $(this);
            let event = dateHeader.next(".upcoming-event");
            while (event.length) {
                let start = event.data("start");
                let locked = event.data("locked");
                let assignmentClass = event[0].childNodes[0].childNodes[0]
                    .getAttribute("aria-label")
                    .replaceAll(" :", ":");

                if (assignmentClass == mClass) {
                    if (isOverdueSubmissionsList) {
                        if (
                            (start === "" || start <= now) &&
                            (!locked || now < locked)
                        ) {
                            dateHeader.removeClass("hidden");
                            event.removeClass("hidden");
                        }
                    } else {
                        if (start === "" || start > now) {
                            dateHeader.removeClass("hidden");
                            event.removeClass("hidden");
                        }
                    }
                }
                event = event.next(".upcoming-event");
            }
        });

    function convertJsTimestampToPhp(timestamp) {
        return timestamp / 1000;
    }
}

function getOverdueAssignments() {
    chrome.runtime.sendMessage(
        {
            type: "url",
            url: "https://schoology.harker.org/home/overdue_submissions_ajax",
        },
        (data) =>
            (function (data) {
                data = JSON.parse(data).html;
                var cDoc = document.getElementById("right-column-inner");
                cDoc.innerHTML =
                    `<div id="overdue-submissions" class="overdue-submissions overdue-submissions-wrapper"><div class="overdue-submissions-list"></div></div>` +
                    cDoc.innerHTML;
                document.getElementById("overdue-submissions").innerHTML = data;
                overdueAssignmentFixer(
                    $("#overdue-submissions"),
                    document.querySelectorAll(".page-title ")[0].childNodes[0]
                        .textContent
                );
            })(data)
    );
}
if (location.pathname != "/home" && location.pathname != "/") {
    try {
        var cont = true;
        document
            .getElementById("right-column-inner")
            .childNodes.forEach((data) =>
                (function (data) {
                    if (data.id == "course-events" && cont == true) {
                        getOverdueAssignments();
                        cont = false;
                    }
                })(data)
            );
    } catch (err) {}
}

//Grades are deactivated
if (location.pathname.includes("/grades/grades")) {
    var courseHeaders = document.getElementsByClassName(
        "gradebook-course hierarchical-grading-report show-title interactive sGradesGradebook-processed sGradeHierarchicalReport-processed"
    );

    var courseBodies = document.getElementsByClassName(
        "gradebook-course-grades"
    );

    var parseTime = function (k) {
        k = k.split("/");
        return new Date(
            parseInt("20" + k[2]),
            parseInt(k[0]) - 1,
            parseInt(k[1])
        );
    };

    for (var i = 0; i < courseBodies.length; i++) {
        var crsList = courseBodies[i];
        var myChart = document.createElement("canvas");
        myChart.style = "height:500px;width:500px;";
        //crsList.appendChild(myChart);
        var ctx = myChart.getContext("2d");
        myChart.height = window.innerHeight / 3;
        myChart.width = window.innerWidth / 2;
        var gradeList = crsList.querySelectorAll(".report-row");
        var avg = {};
        var weight = 0;
        var bList = [];
        var weights = [];
        var cont = true;

        for (var k = 0; k < gradeList.length; k++) {
            var grd = gradeList[k];
            if (grd.tabIndex == 0) {
                if (
                    grd.querySelectorAll(".visually-hidden")[0].textContent !==
                    "Category"
                ) {
                    continue;
                }
                if (grd.dataset.parentId == "0") {
                    continue;
                }
                try {
                    weights[weight + 1] = {
                        weight: parseFloat(
                            grd
                                .querySelectorAll(".percentage-contrib")[0]
                                .textContent.replace("%", "")
                                .replace("(", "")
                                .replace(")", "")
                        ),
                        tot1: 0,
                        tot2: 0,
                    };
                    weight += 1;
                    cont = true;
                } catch (err) {
                    cont = false;
                }
            } else {
                if (!cont) {
                    continue;
                }
                try {
                    var frac = parseFloat(
                        grd.querySelectorAll(".awarded-grade")[0].childNodes[0]
                            .textContent
                    );
                    var tot = parseFloat(
                        grd
                            .querySelectorAll(".max-grade")[0]
                            .textContent.split("/")[1]
                    );
                    var dat = grd
                        .querySelectorAll(".due-date")[0]
                        .textContent.replace("Due ", "")
                        .split(" ")[0];
                    bList.push({
                        grade1: frac,
                        grade2: tot,
                        date: parseTime(dat),
                        wc: weight,
                    });
                } catch (err) {}
            }
        }

        //ordering bList
        bList.sort(function (a, b) {
            if (a.date.getTime() > b.date.getTime()) {
                return 1;
            } else if (a.date.getTime() < b.date.getTime()) {
                return -1;
            } else {
                return 0;
            }
        });
        var fDate = 0;
        var eDate = 0;
        console.log("NEW SUBJECT");
        for (var k = 0; k < bList.length; k++) {
            var grade = bList[k];
            var wc = weights[grade.wc];
            try {
                wc.tot1 += grade.grade1;
                wc.tot2 += grade.grade2;
            } catch (err) {
                continue;
            }
            console.log(
                "Grade: " +
                    grade.grade1 / grade.grade2 +
                    "   \nDate: " +
                    grade.date
            );
            var avgT = 0.0;
            for (var l in weights) {
                if (weights[l].tot1 == 0) {
                    var avgW = 1;
                } else {
                    var avgW = weights[l].tot1 / weights[l].tot2;
                }
                var avgW = avgW * weights[l].weight;
                avgT = avgT + avgW;
            }
            var gd = grade.date;
            gd.setMilliseconds(0);
            gd.setSeconds(0);
            gd.setMinutes(0);
            gd.setHours(0);
            if (fDate == 0) {
                fDate = gd;
            }
            eDate = gd;
            avg[gd] = avgT;
        }

        Date.prototype.addDays = function (days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        };

        var cGrad = 0;
        if (fDate == 0) {
        } else {
            var distTime = fDate.getTime() - eDate.getTime();
            distTime = Math.abs(distTime);
            var avgN = {};
            distTime = Math.ceil(distTime / (60 * 60 * 24 * 1000));
            for (var iter = 0; iter <= distTime; iter++) {
                var grd = fDate.addDays(iter);
                if (grd in avg) {
                    avgN[grd] = avg[grd];
                    cGrad = avg[grd];
                } else {
                    avgN[grd] = cGrad;
                }
            }

            var avgList = Object.keys(avgN);
            var dt = Object.values(avgN);

            var prLD = [];

            var myChart = new Chart(ctx, {
                type: "line",
                data: {
                    labels: avgList,
                    datasets: [
                        {
                            label: "Grade Average",
                            fill: false,
                            borderColor: "#bae755",
                            data: dt,
                            borderWidth: 3,
                            pointRadius: prLD,
                            pointHitRadius: 3,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    scales: {
                        xAxes: [
                            {
                                ticks: {
                                    callback: function (value, index, values) {
                                        var value = new Date(value);
                                        if (value.getDay() == 0) {
                                            var gd =
                                                value.getUTCFullYear() +
                                                "/" +
                                                String(
                                                    parseInt(
                                                        value.getUTCMonth()
                                                    ) + 1
                                                ) +
                                                "/" +
                                                value.getUTCDate();
                                            return gd;
                                        } else {
                                            return;
                                        }
                                    },
                                },
                            },
                        ],
                    },
                },
            });

            var pastGrade = 0;
            for (
                var iter = 0;
                iter < myChart.data.datasets[0].data.length;
                iter++
            ) {
                var iterData = myChart.data.datasets[0].data[iter];
                if (iterData == pastGrade) {
                    prLD.push(0);
                } else {
                    prLD.push(2);
                    pastGrade = iterData;
                }
            }
        }
    }
}
