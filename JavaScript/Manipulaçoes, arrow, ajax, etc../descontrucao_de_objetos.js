let person = {
    namePerson: "Wellington",
    surnamePerson: "Santos",
    age: 19,
    hi : function() {
        return person.namePerson+" Say Hello!";
    },
    socialMedia: {
        instagram: "@WellCoder",
        facebook: "Well Santos"
    }
}

let {namePerson:namee, surnamePerson, age, hi, socialMedia:{instagram}} = person;
console.log(namee, surnamePerson, age, hi(), instagram);