// const phone = () => {
//     let choice = 'name';
//     let search = "9574521452";
//     let searchForName = "samarth";
//     let obj = {
//         samarth: "9574521452" ,
//         subham: "7548885212" ,
//         max: "6222357412" ,
//         john: "7411452365" ,
//         stephen: "8854152633" ,
//     }
//     for (let keys in obj) {
//         switch (choice) {
//             case 'name':
//                 if (searchForName == keys) {
//                     console.log("His phone no : " + obj[keys]);
//                 }    
//                 break;
//             case 'phone':
//                 if (search == obj[keys]) {
//                     console.log("Name " + keys + " : " + obj[keys]);
//                 }
//                 break;
//             default:
//                 console.log("Please enter choice for operation.");
//                 break;
//          }
//     }
// }
// phone();

const directory = () => {
    let obj = {
        samarth: "9574521452" ,
        subham: "7548885212" ,
        max: "6222357412" ,
        john: "7411452365" ,
        stephen: "8854152633" ,
    }
    for (let keys in obj) {
        localStorage.setItem(`${keys}` ,`${obj[keys]}`);
    }
    let choice = 'name';
    let searchForName = 'samarth';
    for (let keys in obj) {
        switch (choice) {
            case 'name':
                if (searchForName == keys) {
                    console.log("His phone no : " + obj[keys]);
                }    
                break;
            case 'phone':
                if (search == obj[keys]) {
                    console.log("Name " + keys + " : " + obj[keys]);
                }
                break;
            default:
                console.log("Please enter choice for operation.");
                break;
        }
    }
}
directory();