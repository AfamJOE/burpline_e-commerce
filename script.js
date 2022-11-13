const productList = [
  {
    index: 1,
    id: 'p1',
    name: 'Samsung TV',
    price: 250,
    img: "./Images/product1.png",
  },
  {
    index: 2,
    id: 'p2',
    name: 'Pixel 4a',
    price: 1500,
    img: "./Images/product2.png",
  },
  {
    index: 3,
    id: 'p3',
    name: 'PS 5',
    price: 500,
    img: "./Images/product3.png",
  },
  {
    index: 4,
    id: 'p4',
    name: 'MacBook Air',
    price: 600,
    img: "./Images/product4.png",
  },
  {
    index: 5,
    id: 'p5',
    name: 'Apple Watch',
    price: 200,
    img: "./Images/product5.png",
  },
  {
    index: 6,
    id: 'p6',
    name: 'Air Pods',
    price: 800,
    img: "./Images/product6.png",
  },
  {
    index: 7,
    id: 'p7',
    name: 'Apple Mouse',
    price: 1500,
    img: "./Images/product7.png",
  },
  {
    index: 8,
    id: 'p8',
    name: 'X-Box pad',
    price: 310,
    img: "./Images/product8.png",
  },
  {
    index: 9,
    id: 'p9',
    name: 'Oculus Quest',
    price: 1700,
    img: "./Images/product9.png",
  },
  {
    index: 10,
    id: 'p10',
    name: 'Ray-Ban Smart-Lens accessories',
    price: 700,
    img: "./Images/product10.png",
  },
  {
    index: 11,
    id: 'p11',
    name: 'Alienware Aurora 2021',
    price: 900,
    img: "./Images/product11.png",
  },
  {
    index: 12,
    id: 'p12',
    name: 'HP Omen Spacer Wireless Keyboard',
    price: 6500,
    img: "./Images/product12.png",
  },
  {
    index: 13,
    id: 'p13',
    name: 'Apple 1 Pencil Silicone Case',
    price: 650,
    img: "./Images/product13.png",
  },
  {
    index: 14,
    id: 'p14',
    name: 'LG Pl5 Xboom G Speaker',
    price: 450,
    img: "./Images/product14.png",
  },
  {
    index: 15,
    id: 'p15',
    name: 'DJIMavic 2 Zoom',
    price: 1300,
    img: "./Images/product15.png",
  },
];



// 0. NAV BAR & CART BAR
cartArray = [];
var navCartImg = document.getElementById("nav-cart-img");
var blackCover = document.getElementById("black-cover");
var blackCover01 = document.getElementById("black-cover-01");
var continueShopping = document.getElementById("continue-shopping");
navCartImg.onclick = displayShoppingFormFunction;
blackCover.onclick = continueShoppingFunction;
continueShopping.onclick = continueShoppingFunction;


function displayShoppingFormFunction() {
// cartArray = [];
if (cartArray.length > 0 ) {
    
    formSection.classList.remove("hidden")
    blackCover.classList.remove("hidden")
    // console.log("On")
    formSection.style.backgroundColor = "white"
    // console.log(cartArray.length, cartCount.innerHTML)
    finalValidation();

  } else {
            alert(       `                       CART IS EMPTY. 
                ADD AT LEAST ONE ITEM`)
                deactivateCheckOutBtn()
  }
}

function continueShoppingFunction () {
  formSection.classList.add("hidden");
  blackCover.classList.add("hidden");
  // console.log("Off")
}

//1. SHOP SECTION - LAYOUT

var shopSection = document.getElementById("shop-section")
for (let index = 0; index < productList.length; index++) {
  var element = productList[index];
  let productItem = document.createElement('div');
  productItem.classList.add("product-slot");
  productItem.index = `${element.index}`
  productItem.id = `${element.id}`
  productItem.innerHTML = `
  <div class="price-background">
  <img src="${element.img}" alt="item-image" class="price-display"/>
	<div class ="price-text"><p>PRICE</p> $ ${element.price}</div>
  </div>
  <p class="product-label">${element.name}</p>
  <button class="active-btn addOrRemoveFromCart add" id="${index}id">ADD TO CART</button>
  `
  shopSection.appendChild(productItem)
}

//2. GET CART COUNT
var cartCount = document.getElementById("cartCount");

// 3. CART FORM SECTION - NAV BAR

var formSection = document.getElementById('listed');
formSection.style.border = "2px solid white"
var productTitle = document.createElement('div');
productTitle.innerHTML =`
<div id="cartList">
  <div class="formBody">
    <li class="array-form">S/N</li>
    <li class="array-name array-form">item</li>
    <li class="array-price array-unit-price">unit($)</li>
    <li class="array-price array-form">price($)</li>
    <li class="array-quantity array-form">quantity</li> 
    <div class="array-form array-remove-default">remove</div>
  </div>
</div>
`
formSection.appendChild(productTitle);
var cartList = document.getElementById("cartList");

// 4. ADD/REMOVE FROM CART BTN
var sumArray = []
// console.log(sumArray)
var addOrRemoveFromCart = document.querySelectorAll('.addOrRemoveFromCart')
for (let index = 0; index < addOrRemoveFromCart.length; index++) {
  const element = addOrRemoveFromCart[index];

  function AddRemoveCart() {
    if (element.innerHTML === "ADD TO CART") {
        element.innerHTML ="REMOVE FROM CART";
        cartArray.push(productList[index]);
        sumArray.push( productList[index].price)
        element.classList.add("remove");
        element.classList.remove("add");
        // console.log(cartArray, sumArray.map(i=>Number(i)), typeof sumArray.map(i=>Number(i))[0])
        addToCart()
        sumOfAll()
        
      } else {
        removeFunction()
    } 
    cartCount.innerHTML = cartArray.length;
    
    function addToCart () {
      var defaultCount = 1;
      for (let indexNum = 0; indexNum < cartArray.length; indexNum++) {
        
        var productSlot = document.createElement('div');
        var receiptBlock = document.createElement('div');
        
        productSlot.id = `${index}slot`;
        receiptBlock.id = `${index}receiptBlock`;

        receiptBlock.classList = `receipt-block`;
            
        productSlot.innerHTML =`
        
        
        <div class="formBody listedItems" id ="${index}product">
          <li class="array-index array-form" id="${index}number">${indexNum+1}</li>
          <li class="array-name array-form">${productList[index].name}</li>
          <li class="array-price  array-unit-price" id="${index}price">${productList[index].price}</li>
          <li class="array-price array-form" id="${index}multiply">${productList[index].price}</li>
          <li class="array-quantity array-form">			
          <div class="quantityCount">
          <div class="count-items decrease-count-items" id ="${index}decrease">-</div>
          <div class="count-numbers" id="${index}count">${defaultCount}</div>
          <div class="count-items increase-count-items" id ="${index}increase">+</div>
          </div>
          </li> 
          <div class="array-form array-remove" id ="${index}remove">REMOVE</div>
        </div>
        `

        var receiptNumber = document.createElement('div');
        receiptNumber.innerHTML = `
        <div class="formBody receipt-property" id ="${index}product">
          <li class= "array-index01 array-form" >${indexNum+1}</li>
          <li class="array-name array-form">${productList[index].name}</li>

          <li class="array-quantity array-form">			
          <div class="quantityCount01">
          <div class="count-numbers" id="${index}count01">${defaultCount}</div>
          </div>
          </li> 
        </div>
        `
      }
      
      receiptSummary.appendChild(receiptBlock);
      receiptBlock.appendChild(receiptNumber);

      cartList.appendChild(productSlot);

      var formText = document.getElementsByClassName("listedItems");
      for (let index = 0; index < formText.length; index++) {
        var element = formText[index];
        element.style.backgroundColor = "white"
        
        var removeBtn = document.getElementsByClassName("array-remove");
        for (let index = 0; index < removeBtn.length; index++) {
          var element = removeBtn[index];
          element.style.backgroundColor = "#1283E6"
          element.style.color = "#ffff"
          
        }
        
      }
      
        //GET ITEMS INCREASE & DECREASE COUNT NAV BAR
      
        var itemPrice = document.getElementById(`${index}price`);
        var countNumbers = document.getElementById(`${index}count`);
        var countNumbers01 = document.getElementById(`${index}count01`);
        var itemPriceMultiplied = document.getElementById(`${index}multiply`);
        
        itemPrice.style.backgroundColor = "white"
        countNumbers.style.backgroundColor ="white";
        
        // A. INCREASE ITEMS QUANTITY
        var increaseByIdBtn = document.getElementById(`${index}increase`);
        function addCount() {
          
          countNumbers.innerHTML++
          itemPriceMultiplied.innerHTML = itemPrice.innerHTML * countNumbers.innerHTML;
          function conditionIndex (params) {
            return params.id === productList[index].id
          }
          sumArray.splice(cartArray.findIndex(conditionIndex), 1, itemPriceMultiplied.innerHTML);
          // console.log(cartArray, sumArray.map(i=>Number(i)), typeof sumArray.map(index=>Number(index))[0])
          sumOfAll()
          countNumbers01.innerHTML = countNumbers.innerHTML
        }
        increaseByIdBtn.onclick = addCount
      
        // B. DECREASE ITEMS QUANTITY
        var decreaseByIdBtn = document.getElementById(`${index}decrease`)
        function removeCount() {
          
          if (countNumbers.innerHTML <= 1) {
            alert("You cannot have less than 1 item. If you wish to remove the item click the 'remove' button.")
            decreaseByIdBtn.disabled = true;
          } else {
            countNumbers.innerHTML--
            decreaseByIdBtn.disabled = false;
            itemPriceMultiplied.innerHTML = itemPrice.innerHTML * countNumbers.innerHTML;
            function conditionIndex (params) {
              return params.id === productList[index].id
            }
            sumArray.splice(cartArray.findIndex(conditionIndex), 1, itemPriceMultiplied.innerHTML);
    
            // console.log(cartArray, sumArray.map(i=>Number(i)), typeof sumArray.map(index=>Number(index))[0])
            sumOfAll()
          }
          countNumbers01.innerHTML = countNumbers.innerHTML
        }
        
        decreaseByIdBtn.onclick = removeCount
  
        //  C. REMOVE ITEM FROM CART
        var removeItem = document.getElementById(`${index}remove`);
        function removeOne() {
          removeFunction()
          cartCount.innerHTML = cartArray.length;
        } 
        removeItem.onclick = removeOne
      }
    } 
    
    // console.log(cartCount.innerHTML)
 
    //C. Remove Cart List

    function removeFromCart() {
      var productSlotId = document.getElementById(`${index}slot`);
      productSlotId.remove() 
      
      var receiptBlockId = document.getElementById(`${index}receiptBlock`);
      receiptBlockId.remove() 
    
      for (let indexNum = 0; indexNum < cartArray.length; indexNum++) { 
         indexNum = 1
         var arrayIndexClass = document.querySelectorAll('.array-index');
         for (let index = 0; index < arrayIndexClass.length; index++) {
           var element = arrayIndexClass[index];
           element.innerHTML = indexNum++
           
          }
        }

      for (let indexNum = 0; indexNum < cartArray.length; indexNum++) { 
         indexNum = 1
      var arrayIndexClass01 = document.querySelectorAll('.array-index01');
      for (let index = 0; index < arrayIndexClass01.length; index++) {
          var element = arrayIndexClass01[index];
          element.innerHTML = indexNum++
        
         }
       }
      
      }
    
    element.onclick = AddRemoveCart

    
    function removeFunction() {
      element.innerHTML ="ADD TO CART";
      element.classList.add("add");
      element.classList.remove("remove");
      function conditionIndex (params) {
        return params.id === productList[index].id
      }
      sumArray.splice(cartArray.findIndex(conditionIndex), 1)
      cartArray.splice(cartArray.findIndex(conditionIndex), 1)
      // console.log(cartArray, sumArray.map(i=>Number(i)));
      removeFromCart()
      sumOfAll()
    }
    
    // 5. CHECKOUT

    // a. S/N - total
    var totalItemsSerialNumber = document.createElement('div')
    totalItemsSerialNumber.id = "totalItems"
    totalItemsSerialNumber.classList.add("formBody")
 
    
    // b. Total Price Quantity (TPQ)
    var displaySumTotalItems = document.createElement('div')
    displaySumTotalItems.id = "theItemSum"
    displaySumTotalItems.classList.add("formBody")
    
    
   
    function sumOfAll() {

      // c. S/N function
      totalItemsSerialNumber.innerHTML = `Total Items: ${cartArray.length}`;
      formSection.appendChild(totalItemsSerialNumber);
      // d. TPQ
      sumTotalOfItems = 0;
      for (var i = 0; i < sumArray.map(index=>Number(index)).length; i++) {
        sumTotalOfItems += sumArray.map(i=>Number(i))[i]
      }
      // console.log(sumTotalOfItems)

      displaySumTotalItems.innerHTML = `
      <div class = "flex-class">
      <p>Total Amount to be paid</p>
      <b id= "total_cash">$ ${sumTotalOfItems.toLocaleString()}</b>
      </div>
      
                                           `
      formSection.appendChild(displaySumTotalItems)
      
      document.getElementById("total_cash").value = JSON.parse(sumTotalOfItems);
         
    }
    // Cart Form Validation
    var emailInput =  document.getElementById("emailData");
    var phoneNumberInput =  document.getElementById("phoneNumberData");
    var nameInput =  document.getElementById("nameData");
    var checkOutBtn = document.getElementById('check-out');

    function deactivateCheckOutBtn() {
      checkOutBtn.classList.remove("active-btn");
      checkOutBtn.classList.add("disabled-btn");
    }

    function reactivateCheckOutBtn() {

      if (phoneNumberInput.style.borderColor == "green" && emailInput.style.borderColor == "green" &&  nameInput.style.borderColor === "green" && cartCount.innerHTML > 0) {
      checkOutBtn.classList.add("active-btn");
      checkOutBtn.classList.remove("disabled-btn");
      document.getElementById('check-out').onclick = payWithPaystack; 
      checkOutBtn.disabled = false; 
    } else{
       checkOutBtn.classList.remove("active-btn");
       checkOutBtn.classList.add("disabled-btn");
        checkOutBtn.disabled = true;
      }
    }

    
    //1. name validation

    function nameValidation() {
      var nameError = document.getElementById("nameError")
      nameError.style.color = "red";
      nameError.style.marginTop = "0px";


      if (nameInput.value == "" ) {
        nameInput.style.borderColor = "red";
        nameError.innerHTML = "Please fill in name";
        checkOutBtn.disabled = true;
        deactivateCheckOutBtn()
      } else if (nameInput.value.length < 5 ) {
        nameInput.style.borderColor = "red";
        nameError.innerHTML = "Please characters should NOT be less than 5 characters";
        checkOutBtn.disabled = true;
        deactivateCheckOutBtn()
      } else if (!isNaN(nameInput.value)) {
        nameInput.style.borderColor = "red";
        nameError.innerHTML = "Please characters should NOT be numbers";
        checkOutBtn.disabled = true;
        deactivateCheckOutBtn()

      } else{
        nameInput.style.borderColor = "green";
        nameError.innerHTML = "";
        cartCount.innerHTML > 0;
        reactivateCheckOutBtn()
      }
    }

    //2. email validation
    
    function emailValidation() {
      var emailError = document.getElementById("emailError")
      emailError.style.color = "red"
      emailError.style.marginTop = "0px"
      if (emailInput.value == "" ) {
        emailInput.style.borderColor = "red";
        emailError.innerHTML = "Please fill in email";
        checkOutBtn.disabled = true;
        deactivateCheckOutBtn()
      } else if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
        emailError.innerHTML = "Please include an '@' and '.' in your email";
        emailInput.style.borderColor = "red";
        checkOutBtn.disabled = true;
        deactivateCheckOutBtn()
  
      } else {
        emailInput.style.borderColor = "green";
        emailError.innerHTML = "";
        reactivateCheckOutBtn()
      }
    }
    
    //3. phone validation
    
    function phoneNumberValidation() {
      var phoneNumberError = document.getElementById("phoneNumberError")
      phoneNumberError.style.color = "red"
      phoneNumberError.style.marginTop = "0px"
      if (phoneNumberInput.value == "") {
        phoneNumberInput.style.borderColor = "red";
        phoneNumberError.innerHTML = "Please fill in a phone number";
        checkOutBtn.disabled = true;
        deactivateCheckOutBtn()
      } else if (phoneNumberInput.value.length < 11 ) {
        phoneNumberInput.style.borderColor = "red";
        phoneNumberError.innerHTML = "Characters should NOT be less than 11 numbers";
        checkOutBtn.disabled = true;
        deactivateCheckOutBtn() 
   
      } else {
        phoneNumberInput.style.borderColor = "green";
        phoneNumberError.innerHTML = "";
        // finalValidation();
        reactivateCheckOutBtn()
      }
    }


    //4. Onblur
    
    nameInput.onblur = nameValidation
    emailInput.onblur = emailValidation
    phoneNumberInput.onblur = phoneNumberValidation
    
  }
  


  
  function payWithPaystack(e) {
    e.preventDefault(e);
    formSection.classList.add("hidden");
    var handler = PaystackPop.setup({
      key: 'pk_test_c618483215a437c4e73566da7b3b5dd505787ae3', 
      email: document.getElementById("emailData").value,
      amount: document.getElementById("total_cash").value * 100,
      ref: ''+Math.floor((Math.random() * 1000000000) + 1),
      
      
      

      callback: function(response){
      
        
        // Receipt-page
        blackCover.classList.add("hidden");
        blackCover01.classList.remove("hidden");
        receiptPage.classList.remove('hidden');
        var customersDetails = document.getElementById("customers-details");

        customersDetails.innerHTML = `
        <p> Thank You, <span id ="name-in-receipt">${nameInput.value}</span>, Your order has been Received </p>
        <img src="./Images/check.svg" alt="tick" id= "receipt-tick">
        <p> Summary</p>
        `
        }
        
      });
      

      
      handler.openIframe();
    }
    
    // Receipt Page Summary Items
    
    let receiptPage =  document.getElementById("receipt-page");
    
    receiptPage.innerHTML = `
    <div id= "receipt-data">
    
    <p id = "customers-details"></p>
    
    <div class="formBody receipt-property receipt-block">
    <li class=  "array-form" >S/N</li>
    <li class="array-name array-form">ITEM</li>
    <li class="array-quantity array-form">			
    
    <div class="count-numbers ">QUANTITY</div>
    
    </li> 
    </div>
    <div id="receipt-summary">
    
    
    </div>
    </div>
    <button id="close-receipt" class="active-btn cart-list-btn" onclick = "closeReceiptFunction()">OK</button>
    ` 
    
    var receiptSummary = document.getElementById("receipt-summary");
      
    function closeReceiptFunction() {
      document.getElementById("receipt-page").classList.add("hidden");
      document.getElementById("black-cover-01").classList.add("hidden");
      continueShoppingFunction();
      window.location.reload();
    }



