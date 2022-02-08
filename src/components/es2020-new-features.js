

let person = {
    name: "Merve",
    surname: "Arslan",
    job: {
        name: "developer"
    }
}

export const checkOptionalChaining = () => {
    if (person?.job?.name) {
        console.log("Name information")
    }
}


export const checkNullishValue = () => {

    var nullValue = null
    var undefinedValue
    var numberValue = 1
    var zeroValue = 0
    var emptyValue = ""
    var falseValue = false

    console.log("geliyor")
    console.log("nullValue", nullValue ?? "varsayılan deger")                 // "varsayılan deger" basar çünkü bu değişken null
    console.log("undefinedValue", undefinedValue ?? "varsayılan deger")    // "varsayılan deger" basar çünkü bu değişken undefined
    console.log("zeroValue", zeroValue ?? 11)                                // 0 değerini basar çünkü 0 değeri null/undefined değil
    console.log("emptyValue", emptyValue ?? "varsayılan deger")       // boş karakter basar çünkü boş karakter null/undefined değil
    console.log("falseValue", falseValue ?? true)                       // false basar çünkü false değeri null/undefined değil
}

