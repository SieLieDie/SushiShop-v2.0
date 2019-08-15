
/*Labels*/
function mouseOver(idElement) {
    document.getElementById(idElement).style.color = "#fd1c44";
}

function mouseOut(idElement) {
    document.getElementById(idElement).style.color = "#484848";
}

function mouseDown(idElement) {
    document.getElementById(idElement).style.color = "#ed143a";
}


/*Buttons*/


function mouseOverButton(idElement) {
    document.getElementById(idElement).style.backgroundColor = "#ff3f5f";
}

function mouseOutButton(idElement) {
    document.getElementById(idElement).style.backgroundColor = "#fd1c44";
}

function mouseDownButton(idElement) {
    document.getElementById(idElement).style.backgroundColor = "#ed143a";
}


/*SocialLinks*/


function mouseOverSocial(idElement) {
    document.getElementById(idElement).style.color = "#ff3f5f";
}

function mouseOutSocial(idElement) {
    document.getElementById(idElement).style.color = "#fd1c44";
}


/*NavSelectBar*/


function mouseOverSelect(idElement) {
    document.getElementById(idElement).style.backgroundColor = "#fd1c44";
    document.getElementById(idElement).style.color = "#ffffff";
    document.getElementById(idElement + "Img").style.filter = "brightness(0) invert(1)";
    document.getElementById(idElement).style.paddingBottom = "3.4rem";
    document.getElementById(idElement).style.paddingTop = "1.7rem";
    document.getElementById(idElement + "Name").style.display = "block";
}

function mouseOutSelect(idElement) {
    document.getElementById(idElement).style.backgroundColor = "#ffffff";
    document.getElementById(idElement).style.color = "#484848";
    document.getElementById(idElement + "Img").style.filter = "brightness(1)";
    document.getElementById(idElement).style.paddingBottom = "1.4rem";
    document.getElementById(idElement).style.paddingTop = "1.4rem";
    document.getElementById(idElement + "Name").style.display = "none";
}

function mouseDownSelect(idElement) {
    document.getElementById(idElement).style.backgroundColor = "#ed143a";
}


/*CancelBill*/


function mouseOverCancel(idElement) {
    document.getElementById(idElement).style.boxShadow = "0 1px 40px 0px lightgray"
    document.getElementById(idElement).style.backgroundColor = "#f0f0f0"
}

function mouseOutCancel(idElement) {
    document.getElementById(idElement).style.boxShadow = "none"
    document.getElementById(idElement).style.backgroundColor = "#ffffff"
}
