//THIS ONE IS OLDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
fetch("generated.json")
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    //console.log(data);
    // console.log(resp);
    //data.forEach(element => console.log(element));
    let elementName = 'name';
    let elementPicture = 'picture';
    let elementAbout = 'about';
    data.forEach(function(element) {
      //document.getElementById("namen").innerHTML += ` <li class="namenitem">${element[elementName]}</li>`;

      //profile stuff (DIT WAS VAN HOE IK HET WILDE DOEN)
      //document.getElementById("profileBox").innerHTML += `<div class="profile">`;
      let profileDiv = addElement('profile', document.getElementById("profileBox"));

      let nameDiv = addElement("name", profileDiv);
      nameDiv.innerHTML += ` <h1 class="nameText">${element[elementName]}</h1>`;
      nameDiv.innerHTML += ` <h1 class="nameText">${element[elementPicture]}</h1>`;
      nameDiv.innerHTML += ` <h1 class="nameText">${element[elementAbout]}</h1>`;


      let profilePicDiv = addElement('profilePic', profileDiv);
      let aboutDiv = addElement('about', profileDiv);

      // profileDiv.appendChild(nameDiv);
      // profileDiv.appendChild(profilePicDiv);
      // profileDiv.appendChild(aboutDiv);

      // document.getElementById("name").innerHTML += ` <h1 class="nameText">${element[elementName]}</h1>`;
      // document.getElementById("profilePic").innerHTML += ` <img src="${element[elementPicture]}">`;
      // document.getElementById("about").innerHTML += ` <h4 class="nameText">${element[elementAbout]}</h4>`;
      // document.getElementById("profileBox").innerHTML += ` </div>`;

      //prfile stuff 2
      //document.getElementById("profileBox").innerHTML += `<div class="profile"><h1 class="nameText">${element[elementName]}</h1><img src="${element[elementPicture]}"><h4 class="nameText">${element[elementAbout]}</h4></div>`;
    });
    // Create and append the li's to the ul
  })

function addElement(className, parent) {
  let element = document.createElement('div');
  element.classList = className;
  parent.appendChild(element);
  return element;
}
