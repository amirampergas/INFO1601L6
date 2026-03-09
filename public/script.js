//function MUST be declared async
async function getData(url){
   try{
     let response = await fetch(url);//1. Send http request and get response
     let result = await response.json();//2. Get data from response
     drawTable(result);// 3. Do something with the data
  }catch(e){
      console.log(e);//catch and log any errors
  }
}
getData("https://api.openbrewerydb.org/breweries/search?query=harry")