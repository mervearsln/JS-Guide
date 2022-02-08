export const ObjectOperations = () => {
    return (
        <div className="App">
            {"ObjectOperations"}
            {compare()}
            {usethisForObjectReferences()}
        </div>
    );
}


const compare = () => {
    let obj = {}
    obj.id = 12;
    obj.type = "P"

    let obj2 = {
        name: "Merve",
        surname: "Arslan",
        id: "13"
    }
    //1.objeye 2.objeyi mergeyerek yazıyor, ortak field varsa 2.den update alıyor 
    Object.assign(obj2, obj)
    console.log(obj2)
}

const usethisForObjectReferences = () => {
    const Student = {
        name: "Merve",
        age: 26
    }
    function getAge() {
        console.log("age:", this.age)
    }
    // add getAge function to object
    Student.getAge = getAge;

    Student.getAge();
}
