var make_sandwich = (arr) => {
    console.log("\n\n********I'll make you a great sandwich:************")
    for (let i = 0 ; i < arr.length ; i++) {
        console.log("  ...adding " + arr[i] + " to your sandwich.");
        
    }console.log('Your sandwich is ready')
}
const item_toadd = ['roast beef', 'cheddar cheese', 'lettuce', 'honey dijon']
const item_toadd1 = ['turkey', 'apple slices', 'honey mustard'];
const item_toadd2 =  ['peanut butter', 'strawberry jam']
make_sandwich(item_toadd);

console.log('\n\t /////********************** adding things to your 2nd pizza ***********');
make_sandwich(item_toadd1);
console.log('\n\t /////********************** adding things to your 3nd pizza ***********')
make_sandwich(item_toadd2)
// var show_magicians = function (arr) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// };