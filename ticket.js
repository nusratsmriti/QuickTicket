document.querySelectorAll("#seat-section .seat").forEach((button) => {
  button.addEventListener("click", function (event) {
    const allSeat = event.target.id;
    allActionInOne(allSeat);
    
    const selectedSeat = getElementTextById("selected-seat");
    const totalPrice = 550 * selectedSeat;
    setElementText("total-price", totalPrice);

    const bonusPrice = getElementTextById("bonus-Price");
    const grandPrice = totalPrice - bonusPrice;
    setElementText("grand-total", grandPrice);
    
    const seat1element = document.getElementById('seat1');
    const seat2element = document.getElementById('seat2');
    const seat3element = document.getElementById('seat3');
    const seat4element = document.getElementById('seat4');
    if (selectedSeat === 1) {
      seat1element.innerText = allSeat;
    }
    else if (selectedSeat === 2) {
      seat2element.innerText = allSeat;
    }
    else if (selectedSeat ===3 ) {
      seat3element.innerText = allSeat;
    }
    else if (selectedSeat === 4) {
      seat4element.innerText = allSeat;
    }

    const applyBtn = document.getElementById("apply-btn");
    if (selectedSeat === 4) {
      applyBtn.removeAttribute("disabled");
    } 
    else if (selectedSeat > 4) {
      alert(
        "You have selected more than 4 seats. Please double-check your selection to ensure it's correct before proceeding"
      );
    }

    

    document.getElementById("apply-btn").addEventListener("click", function () {
      const couponCode = document.getElementById("coupon-code").value.trim(); 
      if (couponCode === "NEW15") {
        const bonus = totalPrice * 0.15;
        setElementText('bonus-Price', bonus);
        const newGrandTotal = totalPrice - bonus;
        setElementText("grand-total", newGrandTotal);
        const couponElement = document.getElementById("coupon-section");
        couponElement.classList.add('hidden');   
      }
      else if (couponCode === "Couple20") {
        const bonus = totalPrice * 0.2;
        setElementText("bonus-Price", bonus);
        const newGrandTotal = totalPrice - bonus;
        setElementText("grand-total", newGrandTotal);
        const couponElement = document.getElementById("coupon-section");
        couponElement.classList.add("hidden");
      }
      else if (couponCode !== "Couple20" || "NEW15") {
        alert("Oops! This is not a valid coupon code. Please try again.");
        document.getElementById("coupon-code").value = "";
      }
    });
        
    
  
    
    const phoneInput = document.getElementById("input-number");
    const nextButton = document.getElementById("next-btn");

    function checkValidation() {
      if (selectedSeat >= 1 && phoneInput.value !== "") {
        nextButton.removeAttribute("disabled");
      } else {
        nextButton.setAttribute("disabled", "true");
      }
    }

    phoneInput.addEventListener("input", checkValidation);
    document.querySelectorAll(".seat").forEach((seat) =>
      seat.addEventListener("click", () => {
        selectedSeat = 1; 
        checkValidation();
      })
    );
      event.target.removeEventListener("click", arguments.callee);
  });
});




      

function allActionInOne(elementId) {
    addBackgroundColorByID(elementId);
    
    const totalSeat = getElementTextById('total-seat');
    const presentSeat = totalSeat - 1;
    setElementText("total-seat", presentSeat);

    const selectOldSeat = getElementTextById('selected-seat');
    const selectedSeat = selectOldSeat + 1;
    setElementText("selected-seat", selectedSeat);

    
  
}

