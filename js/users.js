class User{

     constructor(url){
          this.url = url
     }
     async pullUserData(){

          const jsonData = await fetch(this.url);
          const myData = await jsonData.json()

          return myData
     }


}