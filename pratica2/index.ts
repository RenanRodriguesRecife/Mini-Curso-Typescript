//boolean (true/ false)
let isOpen: boolean
isOpen = true

//string ('foo', "foo", `foo`)
let massage: string
message = `foo ${isOpen}`

//number (int, float, hex, binary)
let total: number
total = 0xff0

//array (type[])
let items: string[]
items = ["foo", "bar"]

let values: Array<number>
values = [1, 2, 3]

//tuple
//tupla é um array que você
//sabe o número de elementos e os
//tipos deles.
let title: [number, string, string]
tittle = [1, "foo", "bar"]

//enum
//enum é um enumerator que você cria um
//conjunto de chave e valor
enum Color {
    white = '#fff',
    black = '#000'
}

//any (qualquer coisa) Não é bom
//(ele mata a idéia do typpescript)
let coisa: any;
coisa = [1];

//void (vazio)
//não retorna nada
//void é usado para tipar funções
//que você sabe que não retorna nada
function logger(): void {
    console.log('foo')
}

//null | undefined
//null e undefined não tem diferença na prática
type Bla = string | undefined //(| - ou)

//não faz sentido atribuir um valor null
//a uma variável
let variable : null

//never
//valor de algo que nunca vai retornar
throw new Error("error");
function error(): never {
    throw new Error("error");
}

//object
//qualquer coisa que não é do tipo primitivo
//é um objeto
//objeto padrão javascript
let cart: object;
cart = {
    key: "fi"
}