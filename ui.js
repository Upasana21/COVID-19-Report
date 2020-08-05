class UI{
    constructor(){
        this.caseReport=document.getElementById('CaseReport');
        this.eachDayReport= document.getElementById('eachDayReport');
    }
     
    showReport(x){
        //console.log(x)
        //console.log(this.caseReport)

        this.caseReport.innerHTML=`
       <ul>
       <h4 align="text-center">${x.state}</h4>
        <li style="list-style:none;">Active: ${x.active}</li>
        <li style="list-style:none;">Confirmed: ${x.confirmed}</li>
        <li style="list-style:none;">Deaths: ${x.deaths}</li>
        <li style="list-style:none;">Recovered: ${x.recovered}</li>
        </ul>
       `
    }
 
    dailyReport(daily){
      this.eachDayReport.innerHTML=`
      <ul>
      <h5 align="text:center"> ${daily.date} 2020</h5>
      <li  style="list-style:none;">Daily Confirmed: ${daily.dailyconfirmed}</li>
      <li style="list-style:none;">Daily Deceased:${daily.dailydeceased}</li>
      <li style="list-style:none;">Daily Recovered:${daily.dailyrecovered}</li>
      <li style="list-style:none;">Total Confirmed:${daily.totalconfirmed}</li>
      <li style="list-style:none;">Total Deaths:${daily.totaldeceased}</li>
      <li style="list-style:none;">Total  Recovered:${daily.totalrecovered}</li>
      
      </ul>
      `
    }
    removeAlert(){
      const alertPre= document.querySelector('.alert');
      if(alertPre){
        alertPre.remove();
      }
    }
   

    showAlert(msg,alertbox){
      //redAlert.remove();
      this.removeAlert();
      const cont=document.getElementById('xyz');  
      const card=document.getElementById('childxyz');

      const alertMessage=document.createElement('div');
      
      alertMessage.className=alertbox;
      alertMessage.appendChild(document.createTextNode(msg));
      
     const redAlert= cont.insertBefore(alertMessage,card);
       
     setTimeout(() => {
           this.removeAlert();
        }, 5000);
    }

   

   removeData(){
    this.eachDayReport.innerHTML='';
   }
    
    
}