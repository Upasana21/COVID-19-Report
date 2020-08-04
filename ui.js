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
        <li>Active: ${x.active}</li>
        <li>Confirmed: ${x.confirmed}</li>
        <li>Deaths: ${x.deaths}</li>
        <li>Recovered: ${x.recovered}</li>
        </ul>
       `
    }
 
    dailyReport(daily){
      this.eachDayReport.innerHTML=`
      <ul>
      <h5 align="text:center"> ${daily.date} 2020</h5>
      <li>Daily Confirmed: ${daily.dailyconfirmed}</li>
      <li>Daily Deceased:${daily.dailydeceased}</li>
      <li>Daily Recovered:${daily.dailyrecovered}</li>
      <li>Total Confirmed:${daily.totalconfirmed}</li>
      <li>Total Deaths:${daily.totaldeceased}</li>
      <li>Total  Recovered:${daily.totalrecovered}</li>
      
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