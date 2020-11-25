let totalCash = prompt('Сумма наличных')
let watchesCount = prompt('Количество золотых часов')
let earringsCount = prompt('Количество сережек с бриллиантами')
let watchesSum = +prompt('Цена часов') * +watchesCount
let earringsSum = +prompt('Цена сережек') * +earringsCount
alert(+totalCash >= watchesSum + earringsSum)