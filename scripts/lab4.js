/**
 * 
 * @param {*} num1, first number to add. 
 * @param {*} num2, second number to add. 
 * @param {*} add, boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true, or false otherwise.
 */
function sumValues(num1, num2, add) {
    if (add) {
        // use let so we can assign below
        let result = num1 + num2;
        return result;
    } else {
        // tests expect exactly false when add is false
        return false;
    }
}

/**
 * 
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number between 0–1 to represent the discount. 
 * @returns An array of each price’s new price, after the discount is applied, rounded 
 * to two decimals; or false if prices array is empty.
 */
function discountPrices(prices, discount) {
    if (!Array.isArray(prices) || prices.length === 0) {
        return false;
    }

    const discounted = [];

    for (let i = 0; i < prices.length; i++) {
        // compute each independently (not cumulative)
        const newPrice = Math.round(prices[i] * (1 - discount) * 100) / 100;
        discounted.push(newPrice);
    }

    return discounted;
}

module.exports = { sumValues, discountPrices };
