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
     stateUI += `<li id="${stateName}">${stateName}</li>`
  })
  StateDiv.innerHTML=stateUI;
  //console.log(stateUI);
   
 })

////////////////////////////////////////////////////////
StateDiv.addEventListener('click',(e)=>{
   stateId=e.target.id;
   //console.log(stateId);

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
         districtUI +=`<li id='${distName}'>${distName}</li>`
      })  
      DistrictDiv.innerHTML=districtUI;   
   })    
   
})

////////////////////////////////////////////
//let districtId=''
DistrictDiv.addEventListener('click',(e)=>{
   const distId=e.target.id;
   //console.log(distId);
   stateDistrict.getStateDistrict()
   .then(repo=>{
      
      //console.log(repo[stateId].districtData[distId])
      const distCovidInfo=repo[stateId].districtData[distId];

     const distCase=` <li>Active Cases: ${distCovidInfo.active}</li>
                     <li>Confirmed: ${distCovidInfo.confirmed}</li>
                     <li>Deceased:${distCovidInfo.deceased}</li>
                     <li>Recovered:${distCovidInfo.recovered}</li>`
   
    CaseOutput.innerHTML=distCase;
     
   })
})
