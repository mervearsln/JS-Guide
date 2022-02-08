/**
 * null -> boş değer anlamına gelen bir özel değerdir.
 * typeof null --> bize nesne döndürür
 * 
 * undefined -> değişken bildirilmiş ama değeri henüz atanmamış demektir.
 * typeof undefined --> undefined döndürür
 * 
 * Yani JS asla null değeri atamaz, eğer bir elemanın değeri null ise bu program tarafından atanmıştır.
 */

/**
 * null !== undefined but null == undefined
 * null and undefined are falsy values
 * null and undefined are both primitives. However an error shows that typeof null = object.
 * 
 * In JavaScript, a double equals tests for loose equality and preforms type coercion. 
 * This means we compare two values after converting them to a common type.
 */

/**
 * NaN --> not a number
 */
export const getUndefinedAndNullDifference = () => {

    let undefinedValue = undefined;
    let nullValue = null;

    console.log("isEqual", undefinedValue == nullValue) // true
    console.log("isEqual", undefinedValue === nullValue) // false
}


export const getVariables = () => {


}