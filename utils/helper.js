export const getDiscountedPrice = (originalPrice, discountedPrice) => {
    const discount = originalPrice - discountedPrice
    const discountedPercentage  = (discount/discountedPrice) * 100 
    return discountedPercentage.toFixed(0)
}