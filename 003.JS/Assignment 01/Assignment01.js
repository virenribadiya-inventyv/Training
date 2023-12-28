(function () {
    arr = [1, 2, 3, 4, 5];
    [first, ...rest] = arr; //rest
    arr = rest;
    fun2(first, arr);
})();

function fun2(first, arr) {
    var sum = 0;
    arr2 = [6,7,8,9];
    arr2 = [first, ...arr2, ...arr]; //spread
    console.log("New Array:", arr2);
    for (i of arr2) {
        sum = sum + i;
    }
    console.log("sum:",sum);

    let myPromise = new Promise((resolve,reject)=>{
        let imageUrls = [];
        if (sum>30) {
            fetch("https://api.unsplash.com/photos/?client_id=_N50ND1lMi7cT8zqAkBzXnuoObj0ayuH_FLYGx3M4cI&per_page=" + sum)
        .then(response => response.json())
        .then(data => {
            for(i of data){
                imageUrls.push(i.urls.raw);
            }
            resolve(imageUrls);  
        });
        } else {
            reject("rejected");
        }
    });

    myPromise.then(imageUrls=>{
        console.table(imageUrls);
    })
    .catch(err => {
        console.log(err);
    } )

};
