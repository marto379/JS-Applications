async function getInfo() {
    const stopInfoElement = document.getElementById('stopId');
    let stopId = stopInfoElement.value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    const stopNameElement = document.getElementById('stopName');
    const busesList = document.getElementById('buses');

    busesList.innerHTML = "";
    stopId = '';

    try{
        const response = await fetch(url);
    const data = await response.json();

    stopNameElement.textContent = data.name;
    Object.entries(data.buses).forEach(([busNum,timeArrive]) => {
        const li = document.createElement('li');
        li.textContent = `Bus ${busNum} arrives in ${timeArrive} minutes`;
        busesList.appendChild(li);
    });
    } catch(error){
        stopNameElement.textContent = "Error";
    }

    
     
    
}