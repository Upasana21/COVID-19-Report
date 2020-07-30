class COVID{

    async getCovidReport(type){
     const covidReport = await fetch('https://api.covid19india.org/data.json');
     const timeReport =await fetch('https://api.covid19india.org/data.json');
     
     const Report= await covidReport.json();
     const time_series= await timeReport.json();
        //console.log(Report.statewise)
        //console.log(time_series.cases_time_series)
   
     if(type===1){
         return Report.statewise;
     }
    else if(type ===2){
        return time_series.cases_time_series;
    }
        
    }
    
        

}