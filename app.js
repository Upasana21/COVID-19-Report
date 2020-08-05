const covid = new COVID;
const time_series = new COVID;
const ui = new UI;
const states = document.getElementById('states');


covid.getCovidReport(1)
  .then(data => {
    const stateData = data.statewise;
    //console.log(stateData);
    let StateOutput = ''
    stateData.map((state) => {
      // console.log(state)
      StateOutput += `<h5 id="${state.statecode}" style="cursor:pointer;background-color:#4c595c;color:white;
      width:250px;height:50px;border:1px solid #DADFE0;padding:3px;text-align:center">${state.state}</h5>`
      const stateId = StateOutput.id;
    })
    states.innerHTML = StateOutput;
  })

states.addEventListener('click', (e) => {
  const StateId = e.target.id;
  covid.getCovidReport(1)
    .then(data => {
      const stateData = data.statewise;

      let StateOutput = ''
      stateData.map((state) => {
        if (state.statecode === StateId) {
          ui.showReport(state);
        }
      })

    })
})



const getTime = document.getElementById('date');

getTime.addEventListener('input', (e) => {
  const timeEnter = e.target.value;
  // console.log(timeEnter);
  //console.log(typeof(timeEnter))
  const splitTime = timeEnter.split('-');
  //console.log(splitTime);

  let day = splitTime[2];
  let month = splitTime[1];
  let year = splitTime[0];
  
  let mon;
  switch (month) {
    case '01': mon = 'January';
      break;
    case '02': mon = 'February';
      break;
    case '03': mon = 'March';
      break;
    case '04': mon = 'April';
      break;
    case '05': mon = 'May';
      break;
    case '06': mon = 'June';
      break;
    case '07': mon = 'July';
      break;
    case '08': mon = 'August';
      break;
    case '09': mon = 'September';
      break;
    case '10': mon = 'October';
      break;
    case '11': mon = 'November';
      break;
    case '12': mon = 'December';
      break;

  }

  //console.log('month:',mon)
  const dateEnter = day + ' ' + mon + ' '; ////get the date in api format date
  //console.log(dateEnter)

  var today = new Date();
  var Today_month = today.getMonth() + 1;
  var Today_date = today.getDate();
  var Today_year = today.getFullYear();
  var Current_date = Today_date + " " + Today_month;
  const present_date = Today_year * 10000 + Today_month * 100 + Today_date;


  const input_date = year + month + day;
  //console.log(input_date);

  if (parseInt(input_date) < present_date) {
    //console.log('passed');
    time_series.getCovidReport(2)
      .then(day =>
        day.map(everyday => {
          //console.log(everyday)
          if (dateEnter === everyday.date) {
            //console.log(everyday);
            ui.dailyReport(everyday);
          }
        })
      )

  } else {
    //alert
    //console.log(alert("Enter correct date"))
    const msg = `Data is not available for this date. Enter Correct date!!!`
    ui.showAlert(msg, 'alert alert-danger')
    ui.removeData();
  }

})