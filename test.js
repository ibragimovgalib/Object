





// let date = new Date(2023,2,28,13,30)
let date1 = new Date('2023-03-27 6:53:01')
let date2 = new Date('2023-03-28 7:55:33')

function rezDate(firstDate, lastDate) {
    let rez = (lastDate.getTime()-firstDate.getTime())
    return rez / (24*60*60*1000*)
}
console.log(rezDate(date1, date2));
