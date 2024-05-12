  var donateButton = document.querySelector(".Submit");

  donateButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    var fullName = document.querySelector('input[name="fullname"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var address = document.querySelector('input[name="address"]').value;
    var city = document.querySelector('input[name="city"]').value;
    var state = document.querySelector('input[name="state"]').value;
    var country = document.querySelector('input[name="country"]').value;
    var postcode = document.querySelector('input[name="postcode"]').value;
    var cardName = document.querySelector('input[name="cardname"]').value;
    var cardNumber = document.querySelector('input[name="cardnumber"]').value;
    var expMonth = document.querySelector('input[name="expmonth"]').value;
    var expYear = document.querySelector('input[name="expyear"]').value;
    var cvv = document.querySelector('input[name="cvv"]').value;
    alert("Thank you " + fullName + ", for your donation!");  
  });
//
