const Stateli = document.getElementById('state');
const Districtli =document.getElementById('district');
const CaseOutput= document.getElementById('output');

//console.log(Stateli);
const stateDistrict= new State_District;

let stateId='';

//http call
stateDistrict.getStateDistrict()
.then((report)=>{
   // console.log(report) // object 
  //console.log(report[stateId]); 
   const State = Object.keys(report);
    //console.log(State);
   
  let stateUI ='';
  State.map((stateName)=>{
     stateUI += `<li id="${stateName}" class="mlr-1 p-2" style="border-style:outset; border-radius:5px;margin:5px 10px;
     min-width:150px;text-align:center;background-color:#4fa899;list-style: none; ">${stateName}</li>`
  })
   
  Stateli.innerHTML=stateUI;
  //console.log(stateUI);
   
 })

////////////////////////////////////////////////////////
Stateli.addEventListener('click',(e)=>{
   stateId=e.target.id;
   //console.log(stateId);
   CaseOutput.innerHTML='';
   stateDistrict.getStateDistrict()
   .then(rep=>{

      //console.log(rep[stateId])
      const districtObj=rep[stateId];
      //console.log(Object.entries(districtObj)[0][1])
      //const districtList=Object.entries(districtObj)[0][1];
      //console.log(districtList);
      //console.log(Object.keys(districtList))// district name arr
      const districtNameArray=Object.keys(districtObj.districtData);
          


      let districtUI=''
      districtNameArray.map(distName=>{
         districtUI +=`<li id='${distName}' class="mlr-1 p-2" style="border-style:outset;border-radius:5px;margin:5px 10px;
         min-width:150px;text-align:center;background-color:#adc9c5;list-style: none;">${distName}</li>`
      })  
      Districtli.innerHTML=districtUI;   
   })    
   
})

////////////////////////////////////////////

Districtli.addEventListener('click',(e)=>{
   const DistrictName=e.target.id;
   //console.log(distId);
   stateDistrict.getStateDistrict()
   .then(repo=>{
      
      //console.log(repo[stateId].districtData[DistrictName])
      const distCovidInfo=repo[stateId].districtData[DistrictName];

      const distCase=`<h5 class="text-align:center";style="color: white;padding-left:20px;background-color:black;">${DistrictName}</h5>
                  <div style="background-color:black;opacity:0.9;border-radius:5px;">
                  <li style="list-style: none;color: yellow; padding-left:20px;">Active Cases: ${distCovidInfo.active}</li>
                  <li style="list-style: none;color: white; padding-left:20px;">Confirmed: ${distCovidInfo.confirmed}</li>
                  <li style="list-style: none;color: red; padding-left:20px;">Deceased:${distCovidInfo.deceased}</li>
                  <li style="list-style: none;color: green; padding-left:20px;">Recovered:${distCovidInfo.recovered}</li>
                  </div>`
   
    CaseOutput.innerHTML=distCase;
     
   })
})
