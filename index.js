let div = document.createElement("div");
let innerdiv = document.createElement("div");
let img = document.createElement("img");
let college = document.createElement("span");
let collegediv = document.createElement("div");
let college1 = document.createElement("span");
let college2 = document.createElement("span");
let name = document.createElement("h2");
let namediv = document.createElement("div");
let mecdiv = document.createElement("div");
let mec = document.createElement("span");
let mec1 = document.createElement("span");
let mec2 = document.createElement("span");
let branch = document.createElement("h2");
let rollno = document.createElement("h1");

function addDiv() {
  div.style.height = "300px";
  div.style.width = "400px";
  div.style.border = "2px solid black";
  div.style.borderRadius = "10px";
  div.style.marginTop = "15px";
  div.style.backgroundImage =
    "url(https://www.solidbackgrounds.com/images/1920x1080/1920x1080-navy-blue-solid-color-background.jpg)";
  div.style.backgroundSize = "40%";
  div.style.backgroundPosition = "top";
  div.style.backgroundRepeat = "repeat-x";
  document.body.append(div);
  innerdiv.style.height = "150px";
  innerdiv.style.width = "130px";
  innerdiv.style.border = "2px solid black";
  innerdiv.style.marginLeft = "10px";
  innerdiv.style.marginTop = "120px";
  div.append(innerdiv);
  img.setAttribute("src", "./img4.png");
  img.style.height = "150px";
  img.style.width = "130px";
  innerdiv.append(img);
  div.append(collegediv);
  college.innerHTML = "GAYATRI VIDYA PARISHAD";
  college.style.fontSize = "18px";
  college.style.fontFamily = "calibri";
  college.style.margin = "5px";
  college.style.padding = "10px";
  college.style.textAlign = "center";
  college.style.color = "white";
  collegediv.append(college);
  div.append(collegediv);
  collegediv.style.marginTop = "-260px";
  collegediv.style.textAlign = "center";
  college1.innerHTML = "COLLEGE OF ENGINEERING (Autonomous)";
  college1.style.fontSize = "18px";
  college1.style.fontFamily = "calibri";
  college1.style.margin = "5px";
  college1.style.textAlign = "center";
  college1.style.color = "white";
  college1.style.display = "block";
  collegediv.append(college1);
  college2.innerHTML = "Madhurawada Visakhapatnam-48";
  college2.style.fontSize = "12px";
  college2.style.fontFamily = "calibri";
  college2.style.margin = "5px";
  college2.style.textAlign = "center";
  college2.style.color = "white";
  college2.style.display = "block";
  collegediv.append(college2);
  name.innerHTML = "A.S.V.SAI";
  name.style.fontFamily = "calibri";
  name.style.fontSize = "20px";
  name.style.marginTop = "50px";
  name.style.marginLeft = "180px";
  div.append(name);
  branch.innerHTML = "B.Tech";
  branch.style.fontFamily = "calibri";
  branch.style.fontSize = "25px";
  branch.style.marginTop = "20px";
  branch.style.marginLeft = "210px";
  div.append(branch);
  rollno.innerHTML = "20131A0306";
  rollno.style.fontFamily = "calibri";
  rollno.style.fontSize = "30px";
  rollno.style.marginTop = "20px";
  rollno.style.marginLeft = "160px";
  div.append(rollno);
  mecdiv.append(mec);
  mecdiv.style.backgroundColor = "green";
  mecdiv.style.height = "210px";
  mecdiv.style.width = "65px";
  mecdiv.style.marginLeft = "335px";
  mecdiv.style.marginTop = "-190px";
  mecdiv.style.borderBottomRightRadius = "10px";
  mecdiv.style.backgroundPosition = "right";
  mecdiv.style.backgroundRepeat = "repeat-y";
  div.append(mecdiv);
  mec.innerText = "M";
  mec.style.fontSize = "45px";
  mec.style.color = "white";
  mec.style.marginLeft = "15px";
  mec.style.marginTop = "20px";
  mec.style.fontFamily = "calibri";
  mec.style.fontWeight = "bold";
  mecdiv.append(mec1);
  mec1.innerText = "E";
  mec1.style.fontSize = "45px";
  mec1.style.color = "white";
  mec1.style.marginLeft = "15px";
  mec1.style.marginTop = "20px";
  mec1.style.display = "block";
  mec1.style.fontFamily = "calibri";
  mec1.style.fontWeight = "bold";
  mecdiv.append(mec2);
  mec2.innerText = "C";
  mec2.style.fontSize = "45px";
  mec2.style.color = "white";
  mec2.style.marginLeft = "15px";
  mec2.style.marginTop = "20px";
  mec2.style.display = "block";
  mec2.style.fontFamily = "calibri";
  mec2.style.fontWeight = "bold";
}
