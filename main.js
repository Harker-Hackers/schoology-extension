var but=document.getElementsByClassName("_1SIMq _2kpZl _3OAXJ _13cCs _3_bfp _2M5aC _24avl _3v0y7 _2s0LQ _3ghFm _3LeCL _31GLY _9GDcm _1D8fw util-height-six-3PHnk Header-header-button-active-state-3AvBm Header-header-button-1EE8Y Z_KgC fjQuT uQOmx")[0];

function k(){
var userMenu=document.getElementsByClassName("_2T2dA Header-header-drop-menu-3SaYV util-min-width-twenty-two-2a0Y- util-max-width-twenty-six-1OJjn _38KgL _35hYo _2mWUT _2ue1O les2- util-box-shadow-dropdown-2Bl9b util-margin-top-negative-point-four-3GRLY _3Xw3k _2trRU j17AQ S42JQ VSOiH _3RmDr fjQuT uQOmx")[0];
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
ddelem.textContent="BADLINK"
li.appendChild(ddelem);
userMenu.appendChild(li);
};

but.onclick=function(){setTimeout(k,30)};