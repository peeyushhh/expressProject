const submitBtn=document.getElementById("submitBtn");
const cityName=document.getElementById("cityName");
const city_name=document.getElementById("city_name");
const tempp=document.getElementById("tempp");
const temp=document.getElementById("temp");
const icon=document.getElementById("temp_status");
const din=document.getElementById("day");
const date=new Date();
const day=date.getDay();
const month=date.getMonth();
const today_data=document.getElementById("today_data");
var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const gg=date.getDate();
today_data.innerText=(`${gg} ${months[month]}`);
din.innerText=`${days[day]}`;
const getInfo=async (e)=>{
    e.preventDefault();
    let cityVal=cityName.value;
 if(cityVal === ""){
city_name.innerText=`Plz write the name before Search`;
temp.style.visibility="hidden";
icon.style.visibility="hidden";
 }
 else{
     try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=baa283088470ebe31f2f01503359868f`;
    let response=await fetch(url);
    let mainData=await response.json(); 
    city_name.innerText=mainData.name;
    tempp.innerText=mainData.main.temp;
    const iconn=mainData.weather[0].main;
    temp.style.visibility="visible";
    icon.style.visibility="visible";
    if (iconn == "Sunny") {
        icon.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
      } else if (iconn == "Clouds") {
        icon.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
      }
      else if (iconn == "Clear") {
        icon.innerHTML =
          "<i class='fas fa-sun'  style='color: #eccc68;' ></i>";
      }
       else if (iconn == "Rainy") {
        icon.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        icon.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
      }

     }
     catch(err)  
     {
        city_name.innerText=`Plz enter the City name properly`;
        temp.style.visibility="hidden";
icon.style.visibility="hidden";
     }
 }
}
submitBtn.addEventListener("click",getInfo);