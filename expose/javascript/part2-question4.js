// Question 4
function discountPrices(prices, discount) {
    var discounted = [];
    var finalPrice = 0;
  
    for (var i = 0; i < prices.length; i++) {
      var discountedPrice = prices[i] * (1 - discount);
      discounted.push(finalPrice);
    }
  
    return discounted;
  }
  
  discountPrices([100, 200, 300], 0.5);
  