var sscValue;
var sscmks;
var sscmks1;
var sscradio;
var sscper;
var sscyop;

var interValue;
var intermks;
var intermks1;
var interradio;
var interper;
var interyop;

var techValue;
var techmks;
var techmks1;
var techradio;
var techper;
var techyop;
function getDetails() {
  sscValue=document.getElementById('sscValue').value;
  sscmks=document.getElementById('sscmks');
  sscmks1=document.getElementById('sscmks1');
  sscper=document.getElementById('sscper').value;
sscyop=document.getElementById('sscyop').value;

interValue=document.getElementById('interValue').value;
intermks=document.getElementById('intermks');
intermks1=document.getElementById('intermks1');
interper=document.getElementById('interper').value;
interyop=document.getElementById('interyop').value;

degreeValue=document.getElementById('degreeValue').value;
degreemks=document.getElementById('degreemks');
degreemks1=document.getElementById('degreemks1');
degreeper=document.getElementById('degreeper').value;
degreeyop=document.getElementById('degreeyop').value;
  console.log("sscValue");
  if(sscmks.checked) {
  sscradio=sscrmks.value;
  console.log(sscradio);
  }else {
   sscradio=sscmks.value;
   console.log(sscradio);
 }
   if(intermks.checked) {
    interradio=intermks1.value;
    console.log(interradio);
}
else {
  interradio=intermks1.value;
  console.log(interradio);
}
if(degreemks.checked) {
 degreeradio=degreemks1.value;
 console.log(degreeradio);
}else {
  degreeradio=degreemks1.value;

}

  console.log(sscvalue+" "+sscradio+" "+sscper+" "+sscyop);
  console.log(intervalue+" "+interradio+" "+interper+" "+interyop);
  console.log(degreevalue+" "+degreeradio+" "+degreeper+" "+degreeyop);

  if (!window.indexedDB) {
     console.log("indexed DB is not working...!");
   }
   var request=window.indexedDB.open("svitDB",1)
   request.onerror=e=>{
     console.log(e);
   }

   request.onupgradeneeded=e=>{
     var dbname=e.target.result;
     store=dbname.createObjectStore("cse",{keyPath:"name"});

     console.log("upgraded...!");

   }

   request.onsuccess=e=>{
     var dbname=e.target.result;
   store =dbname.transaction("cse","readwrite").objectStore("cse");
   store.put(

   {
   "name":name,
   "roll":rollno,
   "email":email
   "co":co,
   "eduDetails":{
     "ssc":{

       "ssc": {
      ssscValue,
      sscradio,
       sscper,
       sscyop
  ],
  "inter"; {
    interValue,
    interradio,
    interper,
    interyop
},

};
console.log("success...!");
}

}
}






// var name;
// var rollno;
// var email;
// var store;
// function getDetails() {
//
// name=document.getElementById('name').value;
// rollno=document.getElementById('rollno').value;
// email=document.getElementById('email').value;
// console.log(name+" "+rollno+" "+email);
//
// if (!window.indexedDB) {
//   console.log("indexed DB is not working...!");
// }
// var request=window.indexedDB.open("svitDB",1)
// request.onerror=e=>{
//   console.log(e);
// }
//
// request.onupgradeneeded=e=>{
//   var dbname=e.target.result;
//   store=dbname.createObjectStore("cse",{keyPath:"name"});
//
//   console.log("upgraded...!");
//
// }
//
// request.onsuccess=e=>{
//   var dbname=e.target.result;
// store =dbname.transaction("cse","readwrite").objectStore("cse");
// store.put(
//
// {
// "name":name,
// "roll":rollno,
// "email":email
// }
//
// );
// console.log("success...!");
// }
// }
