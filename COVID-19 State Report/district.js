class State_District{
    
    async getStateDistrict(){

        const Data= await fetch('https://api.covid19india.org/state_district_wise.json');

        const  getData= await Data.json();

       //console.log('dataFetched',getData);

        return getData;
    }
}