class Student{

    async Build(name, lastName, age){
        
        if(isNaN(name) && isNaN(lastName) && !isNaN(age)){
            return {
                name,
                lastName,
                completeName: `${name} ${lastName}`,
                age
            }
        }else{
            return false
        }
    }
    
}

module.exports = new Student()
