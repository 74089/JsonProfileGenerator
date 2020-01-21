fetch("generated.json")
.then((resp) => resp.json()) // Transform the data into json
.then(function(data) {
  //console.log(data);
  // console.log(resp);
  //data.forEach(element => console.log(element));
  let elementName = 'name';
  let elementPicture = 'picture';
  let elementAbout = 'about';
  //let elementState = 'address.state'
  data.forEach(function(element)  {
    //document.getElementById("namen").innerHTML += ` <li class="namenitem">${element[elementName]}</li>`;

    //profile stuff (DIT WAS VAN HOE IK HET WILDE DOEN)
    // document.getElementById("profileBox").innerHTML += `<div class="profile">`;
    // document.getElementById("name").innerHTML += ` <h1 class="nameText">${element[elementName]}</h1>`;
    // document.getElementById("profilePic").innerHTML += ` <img src="${element[elementPicture]}">`;
    // document.getElementById("about").innerHTML += ` <h4 class="nameText">${element[elementAbout]}</h4>`;
    // document.getElementById("profileBox").innerHTML += ` </div>`;

    //prfile stuff 2
    document.getElementById("profileBox").innerHTML += `<div class="profile"><h1 class="nameText">${element[elementName]}</h1><img src="${element[elementPicture]}"><h4 class="nameText">${element[elementAbout]}</h4><h2>${element['address']['state']}</h2></div>`;
  });
  // Create and append the li's to the ul
  })
