const url = 'http://ergast.com/api/f1/2022/drivers.json';

async function getDriverList(){
    const response = await fetch(url);
    const data = await response.json();
    

    console.log(data.MRData.DriverTable.Drivers);
  
    
}

getDriverList();