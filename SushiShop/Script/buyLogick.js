var totalPrice = 0;
var basket = new Set();

function Item(name, imgPath, description, price) {
    this.name = name;
    this.plusId = name.toLowerCase() + "Plus";
    this.minusId = name.toLowerCase() + "Minus";
    this.counterId = name.toLowerCase() + "Counter";
    this.counter = 0;
    this.imgPath = imgPath;
    this.description = description;
    this.price = price;

    this.addToBasket = function (item) {
        totalPrice += this.price;
        basket.add(item);
    }

    this.removeFromBasket = function () {
        totalPrice -= this.price;
    }
}

var syake = new Item("Syake", "Style/Image/Image/Sushi_Syake_Kunsei.jpg", "Сякэ с лососем", 75);
var unagi = new Item("Unagi", "Style/Image/Image/Sushi_Unagi.jpg", "Унаги с копчёным угрём", 110);
var maguro = new Item("Maguro", "Style/Image/Image/Sushi_Maguro.jpg", "Мангуро с тунцом", 95);
var ebi = new Item("Ebi", "Style/Image/Image/Sushi_Ebi.jpg", "Эби с криветкой", 85);
var abokado = new Item("Abokado", "Style/Image/Image/Sushi_abokado.jpg", "Абокадо с авокадо", 55);
var philadelphiya = new Item("Philadelphiya", "Style/Image/Image/Roll_Philadelphiya.jpg", "Филодельфия с лососем", 435);
var rollSyake = new Item("RollSyake", "Style/Image/Image/Roll_Syake.jpg", "Сякэ ролл с лососем", 210);
var rollTeka = new Item("RollTeka", "Style/Image/Image/Roll_Tekka.jpg", "Тэкка ролл с тунцом", 245);
var rollUnagi = new Item("RollUnagi", "Style/Image/Image/Roll_Unagi.jpg", "Унаги ролл с угрём", 245);
var rollTalat = new Item("RollTalat", "Style/Image/Image/Roll_Talat.jpg", "Яки хамачи с жариным желтохвостиком", 55);

var items = [syake, unagi, maguro, ebi, abokado,
    philadelphiya, rollSyake, rollTeka, rollUnagi, rollTalat];


function plusOnClick(plusId) {
    for (var i = 0; i< items.length; i++){
        if (items[i].plusId == plusId){
            items[i].addToBasket(items[i])
            items[i].counter++;
            document.getElementById(items[i].counterId).innerText = items[i].counter;
            document.getElementById("buyButtonText").innerText = totalPrice.toString() + " ₽";
            var billCounterID = "bill" + items[i].counterId;
            var billCounter = document.getElementById(billCounterID);
            if (billCounter != null){
               billCounter.innerText = items[i].counter;
               document.getElementById("billPrice").innerText = totalPrice.toString() + " ₽";
            }
        }
    }
}

function minusOnClick(minusId) {
    for (var i = 0; i< items.length; i++){
        if (items[i].minusId == minusId){
            if (!(items[i].counter == 0)) {
                items[i].removeFromBasket();
                items[i].counter--;
                document.getElementById(items[i].counterId).innerText = items[i].counter;
                document.getElementById("buyButtonText").innerText = totalPrice.toString() + " ₽"
                var billCounterID = "bill" + items[i].counterId;
                var billCounter = document.getElementById(billCounterID);
                if (billCounter != null){
                    billCounter.innerText = items[i].counter;
                    document.getElementById("billPrice").innerText = totalPrice.toString() + " ₽";
                }
            }else{
                alert("Хотите подарить нам суши?)")
            }
        }
    }
}

function getBill() {
    document.getElementById("bill").style.display = "block"
    document.getElementById("billPrice").innerHTML = totalPrice.toString() + " ₽";
    fillBasket();
}

function fillBasket() {
    var container = document.getElementById("billContainer");
    var basketArr = Array.from(basket);
    var temporaryContainer = document.createElement("div");
    var tempId = document.createAttribute("id")
    tempId.value = "tempCont";
    temporaryContainer.setAttributeNode(tempId);
    container.insertAdjacentElement('beforeend', temporaryContainer);
    for (var i = 0; i < basketArr.length; i++) {
        var element = document.createElement("div");
        element.className = 'bill-element';
        var elementId = document.createAttribute("id")
        elementId.value = basketArr[i].name;
        element.setAttributeNode(elementId);
        /*------------------------------------------*/
        var elementImg = document.createElement("div");
        elementImg.className = 'bill-element-img';
        /*------------------------------------------*/
        var img = document.createElement("img");
        img.src = basketArr[i].imgPath
        img.className = 'element-image'
        /*------------------------------------------*/
        var elementDesc = document.createElement("div");
        elementDesc.innerText = basketArr[i].description;
        elementDesc.className = 'element-description';
        /*------------------------------------------*/
        var elementCountButton = document.createElement("div");
        elementCountButton.className = 'element-countButton'
        /*------------------------------------------*/
        var elementButtonMinus = document.createElement("div");
        elementButtonMinus.innerText = "-";
        elementButtonMinus.onclick = minusOnClick;
        var attrMinus = document.createAttribute("onclick")
        attrMinus.value = 'minusOnClick(\''+ basketArr[i].minusId +'\')';
        elementButtonMinus.setAttributeNode(attrMinus);
        /*------------------------------------------*/
        var elementCounter = document.createElement("div");
        elementCounter.innerText = basketArr[i].counter;
        var attrCounter = document.createAttribute("id")
        attrCounter.value = "bill" + basketArr[i].counterId;
        elementCounter.setAttributeNode(attrCounter);
        /*------------------------------------------*/
        var elementButtonPlus = document.createElement("div");
        elementButtonPlus.innerText = "+";
        var attrPlus = document.createAttribute("onclick")
        attrPlus.value = 'plusOnClick(\''+ basketArr[i].plusId +'\')';
        elementButtonPlus.setAttributeNode(attrPlus);
        /*------------------------------------------*/
        var elementPrice = document.createElement("div");
        elementPrice.innerText = basketArr[i].price.toString() + " P";
        elementPrice.className = 'element-description';
        elementPrice.className = 'element-price'
        /*------------------------------------------*/
        var removeImg = document.createElement("i");
        removeImg.className = "fas fa-times-circle element-removeImg";
        var imgId = document.createAttribute("id")
        imgId.value = basketArr[i].name + "Remove";
        removeImg.setAttributeNode(imgId);
        var attrClick = document.createAttribute("onclick")
        attrClick.value = 'mouseOnClick(\''+ basketArr[i].name + "Remove" +'\')';
        removeImg.setAttributeNode(attrClick);
        /*------------------------------------------*/
        var attrOver = document.createAttribute("onmouseover")
        attrOver.value = 'mouseOverRemove(\''+ basketArr[i].name + "Remove" +'\')';
        element.setAttributeNode(attrOver);
        var attrOut = document.createAttribute("onmouseout")
        attrOut.value = 'mouseOutRemove(\''+ basketArr[i].name + "Remove" +'\')';
        element.setAttributeNode(attrOut);
        /*------------------------------------------*/
        temporaryContainer.insertAdjacentElement('beforeend', element);
        element.insertAdjacentElement('beforeend', elementImg);
        elementImg.insertAdjacentElement('beforeend', img);
        elementImg.insertAdjacentElement('afterbegin', removeImg);
        element.insertAdjacentElement('beforeend', elementDesc);
        element.insertAdjacentElement('beforeend', elementCountButton);
        elementCountButton.insertAdjacentElement('beforeend', elementButtonMinus)
        elementCountButton.insertAdjacentElement('beforeend', elementCounter)
        elementCountButton.insertAdjacentElement('beforeend', elementButtonPlus)
        element.insertAdjacentElement('beforeend', elementPrice);

    }
}

function mouseOverRemove(idElement) {
    document.getElementById(idElement).style.visibility = "visible"
}

function mouseOutRemove(idElement) {
    document.getElementById(idElement).style.visibility = "hidden"
}

function mouseOnClick(idElement) {
    var basketArr = Array.from(basket);
    for (var i = 0; i < basketArr.length; i++) {
        if (idElement == basketArr[i].name + "Remove") {
            totalPrice = totalPrice - (basketArr[i].price * basketArr[i].counter);
            basketArr[i].counter = 0;
            document.getElementById(items[i].counterId).innerText = items[i].counter;
            document.getElementById("buyButtonText").innerText = totalPrice.toString() + " ₽";
            document.getElementById("billPrice").innerText = totalPrice.toString() + " ₽";
            var billCounterID = "bill" + items[i].counterId;
            var billCounter = document.getElementById(billCounterID);
            if (billCounter != null){
                billCounter.innerText = items[i].counter;
            }
            basket.delete(basketArr[i]);
            document.getElementById(basketArr[i].name).remove();
        }
    }
}


function cancelBill() {
    var container = document.getElementById("tempCont");
    if (container != null) {
        container.remove();
    }
    basket.clear;
    document.getElementById("bill").style.display = "none"
}

