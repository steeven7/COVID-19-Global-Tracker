
axios.get("https://covid19-api.com/totals?format=json")
  .then(({ data }) => {
    for (let total of data) {

      //Elements
      const confirmData = document.querySelector('#confirmData')
      const recoverData = document.querySelector('#recoverData');
      const criticalData = document.querySelector("#criticalData");
      const deathsData = document.querySelector("#deathsData");
      const updateData = document.querySelector("#updateData");
      const lastUpdate = new Date(total.lastUpdate).toLocaleString();

      //Data 
      const totalConfirm = total.confirmed.toLocaleString();
      const totalRecover = total.recovered.toLocaleString();
      const totalCritical = total.critical.toLocaleString();
      const totalDeaths = total.deaths.toLocaleString();
      
      //Insert Data
      confirmData.innerHTML = `${totalConfirm}`;
      recoverData.innerHTML = `${totalRecover}`;
      criticalData.innerHTML = `${totalCritical}`;
      deathsData.innerHTML = `${totalDeaths}`;
      updateData.innerHTML = `${lastUpdate}`;


    }
  })
  .catch(function (error) {
    console.log(error);
  })