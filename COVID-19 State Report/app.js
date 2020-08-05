const StateDiv = document.getElementById('state');
const DistrictDiv =document.getElementById('district');
const CaseOutput= document.getElementById('output');

//console.log(StateDiv);
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
     stateUI += `<div id="${stateName}" class="mlr-1 p-2" style="border-style:outset;border-radius:5px;margin:5px 10px;
     min-width:150px;text-align:center;background-color:#4fa899;">${stateName}</div>`
  })
   
  StateDiv.innerHTML=stateUI;
  //console.log(stateUI);
   
 })

////////////////////////////////////////////////////////
StateDiv.addEventListener('click',(e)=>{
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
         districtUI +=`<div id='${distName}' class="mlr-1 p-2" style="border-style:outset;border-radius:5px;margin:5px 10px;
         min-width:150px;text-align:center;background-color:#adc9c5;">${distName}</div>`
      })  
      DistrictDiv.innerHTML=districtUI;   
   })    
   
})

////////////////////////////////////////////

DistrictDiv.addEventListener('click',(e)=>{
   const DistrictName=e.target.id;
   //console.log(distId);
   stateDistrict.getStateDistrict()
   .then(repo=>{
      
      //console.log(repo[stateId].districtData[DistrictName])
      const distCovidInfo=repo[stateId].districtData[DistrictName];

      const distCase=`<h5 class="text-align:center";style="color: white;background-color:black;">${DistrictName}</h5>
                     <div style="color: white;background-color:black; padding-left:20px;">Active Cases: ${distCovidInfo.active}</div>
                     <div style="color: white;background-color:black; padding-left:20px;">Confirmed: ${distCovidInfo.confirmed}</div>
                     <div style="color: white;background-color:black; padding-left:20px;">Deceased:${distCovidInfo.deceased}</div>
                     <div style="color: white;background-color:black; padding-left:20px;">Recovered:${distCovidInfo.recovered}</div>`
   
    CaseOutput.innerHTML=distCase;
     
   })
})
