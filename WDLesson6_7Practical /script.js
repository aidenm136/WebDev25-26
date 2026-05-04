let data, info;

async function init(){   
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    build += `<div class="fitted card">
                 <h3>${collision.borough}</h3>
                 
                 <p>${collision.zip_code}</p>
                 <p>${collision.vehicle_type_code1}</p>
                 <p>${collision.vehicle_type_code2}
                 <p>${collision.on_street_name}</p>
                 <p>${collision.collision_id}
              </div>`    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.borough == borough){
    build += `<div class="fitted card">
                 <h3>${collision.borough}</h3>
                 
                 <p>${collision.zip_code}</p>
                 <p>${collision.vehicle_type_code1}</p>
                 <p>${collision.vehicle_type_code2}
                 <p>${collision.on_street_name}</p>
                 <p>${collision.collision_id}</p>
              </div>`    
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.
function filterByzipcode(){
  let output = document.getElementById("output");
  let zipcode = document.getElementById("zipcode").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.zip_code == zipcode){
    build += `<div class="fitted card">
                 <h3>${collision.borough}</h3>
                 
                 <p>${collision.zip_code}</p>
                
                 <p>${collision.vehicle_type_code1}</p>
                 <p>${collision.vehicle_type_code2}
                 <p>${collision.on_street_name}</p>
                 <p>${collision.collision_id}</p>
              </div>`    
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.

function filterBycollision(){
  let output = document.getElementById("output");
  let crash = document.getElementById("crash_id").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.collision_id == crash){
    build += `<div class="fitted card">
                 <h3>${collision.borough}</h3>
                 
                 <p>${collision.zip_code}</p>
                
                 <p>${collision.vehicle_type_code1}</p>
                 <p>${collision.vehicle_type_code2}
                 <p>${collision.on_street_name}</p>
                 <p>${collision.collision_id}</p>
              </div>`    
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByCar1(){
  let output = document.getElementById("output");
  let crash = document.getElementById("Car1").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let Car1 = data[i];
    if(collision.vehicle_type_code1 == Car1){
    build += `<div class="fitted card">
                 <h3>${collision.borough}</h3>
                 
                 <p>${collision.zip_code}</p>
                
                 <p>${collision.vehicle_type_code1}</p>
                 <p>${collision.vehicle_type_code2}
                 <p>${collision.on_street_name}</p>
                 <p>${collision.collision_id}</p>
              </div>`    
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
function filterByCar2(){
  let output = document.getElementById("output");
  let Car2 = document.getElementById("Car2").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let Car2 = data[i];
    if(collision.vehicle_type_code2 == Car2){
    build += `<div class="fitted card">
                 <h3>${collision.borough}</h3>
            
                 <p>${collision.zip_code}</p>
                
                 <p>${collision.vehicle_type_code1}</p>
                 <p>${collision.vehicle_type_code2}
                 <p>${collision.on_street_name}</p>
                 <p>${collision.collision_id}</p>
              </div>`    
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByStreet(){
  let output = document.getElementById("output");
  let Street = document.getElementById("Street").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.on_street_name == Street){
    build += `<div class="fitted card">
                 <h3>${collision.borough}</h3>
                 
                 <p>${collision.zip_code}</p>
                
                 <p>${collision.vehicle_type_code1}</p>
                 <p>${collision.vehicle_type_code2}
                 <p>${collision.on_street_name}</p>
                 <p>${collision.collision_id}</p>
              </div>`    
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
