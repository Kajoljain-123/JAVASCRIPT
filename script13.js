const URL= " https://api.thecatapi.com/v1/images/search?limit=10";
//const factPara = document.querySelector("body");


// const getFacts = async()=>{
//     console.log("getting data......");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data[0].url);
    
// };

function getFacts(){
    fetch(URL)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data);
        });
}
