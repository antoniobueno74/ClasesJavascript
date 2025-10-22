//let mySetFalso = new Set("Aritz","Antonio","Juan")// no se declara así
//console.log(mySetFalso)
let mySet = new Set(["Aritz","Antonio","Juan",33])
console.log(mySet)

// como añado, pues con add y borro con delete
mySet.add("Isra")
console.log(mySet)

// como vimos en el video no permite duplicados
console.log("------metemos duplicado y pasa de mi------")
mySet.add("Aritz")
console.log(mySet)

// borro
console.log("------borramos------")
mySet.delete("33") // no borra pues no es mismo tipo
mySet.delete(33) // ahora si
console.log(mySet)

//convierto array en set-- quita los duplicado
let myArray2 = new Array(3)// poco uso

myArray2[0] ="a"
myArray2[1] ="a"
myArray2[2] ="a"

myArray2[3] ="b"
console.log(myArray2)

let mySet2= new Set(myArray2)
console.log(mySet2)

//¿no los muestra o los elimna, los duplicados?
// veamos la longitud
console.log(mySet2.size)

//es sensitive case
mySet.add("A")
console.log(mySet2)








