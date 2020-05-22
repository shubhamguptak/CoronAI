let showDetailList = document.getElementById("showDetailList");
let newsAccordion = document.getElementById("demo");
const request = new XMLHttpRequest();
var url = "https://api.covid19india.org/resources/resources.json";
request.open("GET", url, true);

request.onload = function () {
  var data = JSON.parse(request.responseText);

  var cityLoc = data.resources;
  let stateId = document.getElementById("stateList");
  let cityId = document.getElementById("cityList");
  let optionDemo = document.getElementsByClassName("option");

  let namesSet = new Set(cityLoc.map((item) => item.state));
  var arrSat = [...namesSet];


  var arrAddCity = [];
  let arrAddState = [];
  for (let index = 0; index < cityLoc.length; index++) {
    if (cityLoc[index].state == arrSat[0]) {
     

      let stateIteration = ` <option value="index" class="option">${arrSat[index]}</option>`;
     
    }
    stateId.innerHTML = arrAddState;

    
  }
 

  let arrState = [];
  for (let index = 0; index < arrSat.length; index++) {
    var stateIteration = ` <option value="index" onclick="f1()">${arrSat[index]}</option>`;
    arrState += stateIteration;
  }
  var chooseState = `<option value="index">choose state</option>`;
  stateId.innerHTML = chooseState + arrState;

  $("#stateList").click(function () {
    var arrCityName = [];
    var open = $(this).data("isopen");
    if (open) {
      var ex = document.getElementById("stateList");
      var str = ex.options[ex.selectedIndex].text;

      for (let index = 0; index < cityLoc.length; index++) {
        if (cityLoc[index].state == str) {
          arrCityName.push(cityLoc[index].city);
        }
      }
      var str;
      var cityIteration = [];
      var uniqueNames = [];
      var strCity;

      $.each(arrCityName, function (i, el) {
        if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
      });
      arrAddCity = [];
      for (let index = 0; index < uniqueNames.length; index++) {
        cityIteration = ` <option value="index" class="option">${uniqueNames[index]}</option>`;

        arrAddCity += cityIteration;
      }
      var chooseCity = `<option value="index">choose city</option>`;
      cityId.innerHTML = chooseCity + arrAddCity;
    }
    $(this).data("isopen", !open);
  });
  var uniqueCatName = [];
  var uniqueCatorieName = [];
  var buttonArray = [];
  var btnRemoveArr = [];
  var cardAdd = [];
  var btnhtm = document.getElementById("grpbtn");

  document.getElementById("submitbtn").addEventListener("click", () => {
    for (let index = 0; index < uniqueCatName.length; index++) {
      if (uniqueCatName != []) {

        document.getElementById(`${uniqueCatName[index]}`).remove();
      } else {
        break;
      }
    }
    var foo = document.getElementById("fooBar");

    var exCity = document.getElementById("cityList");
    strCity = exCity.options[exCity.selectedIndex].text;
    var ex = document.getElementById("stateList");
    str = ex.options[ex.selectedIndex].text;
    uniqueCatorieName = [];
    uniqueCatName = [];

    for (let index = 0; index < cityLoc.length; index++) {
      if (str == cityLoc[index].state) {
        if (strCity == cityLoc[index].city) {
          uniqueCatorieName.push(cityLoc[index].category);
        }
      }
    }

    $.each(uniqueCatorieName, function (i, el) {
      if ($.inArray(el, uniqueCatName) === -1) uniqueCatName.push(el);
    });


    for (let index = 0; index < uniqueCatName.length; index++) {
      var element = document.createElement("button");
      element.type = "button";
      element.value = `${uniqueCatName[index]}`; // Really? You want the default value to be the type string?
      element.title = `${uniqueCatName[index]}`;
      element.href = "javascript:void()";
      element.className = "demobtn";
      element.id = `${uniqueCatName[index]}`;

      element.innerHTML = `${uniqueCatName[index]}`;

      element.onclick = function () {
        // Note this is a function
        showDetail(uniqueCatName[index]);

      };

    

      foo.appendChild(element);

      switch (`${uniqueCatName[index]}`) {
        case "Free Food":
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundImage = "url('/static/images/images-essentials/freefoodimg.png')";
          document.getElementById(`${uniqueCatName[index]}`).style.width =
            "169px";
          document.getElementById(`${uniqueCatName[index]}`).style.height =
            "89px";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundSize = "169px 89px";

          break;

        case "Ambulance":
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundImage = "url('/static/images/images-essentials/ambulance.png')";
          document.getElementById(`${uniqueCatName[index]}`).style.width =
            "169px";
          document.getElementById(`${uniqueCatName[index]}`).style.height =
            "89px";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundSize = "169px 89px";


          

          break;
        case "Police":
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundImage = "url('/static/images/images-essentials/police.png')";
          document.getElementById(`${uniqueCatName[index]}`).style.width =
            "169px";
          document.getElementById(`${uniqueCatName[index]}`).style.height =
            "89px";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundSize = "169px 89px";

          break;
        case "Fire Brigade":
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundImage = "url('/static/images/images-essentials/firebrigade.png')";
          document.getElementById(`${uniqueCatName[index]}`).style.width =
            "169px";
          document.getElementById(`${uniqueCatName[index]}`).style.height =
            "89px";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundSize = "169px 89px";

          break;
        case "Transportation":
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundImage = "url('/static/images/images-essentials/transport.png')";
          document.getElementById(`${uniqueCatName[index]}`).style.width =
            "169px";
          document.getElementById(`${uniqueCatName[index]}`).style.height =
            "89px";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundSize = "169px 89px";

          break;

        case "CoVID-19 Testing Lab":
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundImage = "url('/static/images/images-essentials/covidlabs.png')";
          document.getElementById(`${uniqueCatName[index]}`).style.width =
            "169px";
          document.getElementById(`${uniqueCatName[index]}`).style.height =
            "89px";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundSize = "169px 89px";

          break;
        case "Accommodation and Shelter Homes":
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundImage = "url('/static/images/images-essentials/homeshelter.png')";
          document.getElementById(`${uniqueCatName[index]}`).style.width =
            "169px";
          document.getElementById(`${uniqueCatName[index]}`).style.height =
            "89px";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundSize = "169px 89px";

          break;
        case "Quarantine Facility":
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundImage = "url('/static/images/images-essentials/quarantinecenter.png')";
          document.getElementById(`${uniqueCatName[index]}`).style.width =
            "169px";
          document.getElementById(`${uniqueCatName[index]}`).style.height =
            "89px";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundSize = "169px 89px";

          break;

        case "Delivery [Vegetables, Fruits, Groceries, Medicines, etc.]":
          document.getElementById(`${uniqueCatName[index]}`).style.width =
            "169px";
          document.getElementById(`${uniqueCatName[index]}`).style.height =
            "89px";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundImage = "url('/static/images/images-essentials/deliveryimg.png') ";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundSize = "169px 89px";
          break;
        case "Other":
          document.getElementById(`${uniqueCatName[index]}`).style.width =
            "169px";
          document.getElementById(`${uniqueCatName[index]}`).style.height =
            "89px";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundImage = "url('/static/images/images-essentials/otherimg.png') ";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundSize = "169px 89px";

          break;

        case "Fundraisers":
          document.getElementById(`${uniqueCatName[index]}`).style.width =
            "169px";
          document.getElementById(`${uniqueCatName[index]}`).style.height =
            "89px";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundImage = "url('/static/images/images-essentials/fund raiserimg.png') ";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundSize = "169px 89px";

          break;
        case "Hospitals and Centers":
          document.getElementById(`${uniqueCatName[index]}`).style.width =
            "169px";
          document.getElementById(`${uniqueCatName[index]}`).style.height =
            "89px";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundImage = "url('/static/images/images-essentials/hospitalsimg.png') ";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundSize = "169px 89px";

          break;
        case "Community Kitchen":
          document.getElementById(`${uniqueCatName[index]}`).style.width =
            "169px";
          document.getElementById(`${uniqueCatName[index]}`).style.height =
            "89px";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundImage = "url('/static/images/images-essentials/kitchenimg.png') ";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundSize = "169px 89px";

          break;

        case "Government Helpline":
          document.getElementById(`${uniqueCatName[index]}`).style.width =
            "169px";
          document.getElementById(`${uniqueCatName[index]}`).style.height =
            "89px";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundImage = "url('/static/images/images-essentials/helplineimg.png') ";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundSize = "169px 89px";

          break;
        case "Mental well being and Emotional Support":
          document.getElementById(`${uniqueCatName[index]}`).style.width =
            "169px";
          document.getElementById(`${uniqueCatName[index]}`).style.height =
            "89px";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundImage = "url('/static/images/images-essentials/mental healthimg.png') ";
          document.getElementById(
            `${uniqueCatName[index]}`
          ).style.backgroundSize = "169px 89px";

          break;

        default:
          break;
      }

    }
  });

  function showDetail(tempCatName) {
    for (let index = 0; index < cityLoc.length; index++) {
      if (str == cityLoc[index].state) {
        if (strCity == cityLoc[index].city) {
          if (tempCatName == cityLoc[index].category) {
           
            showDetailsList();
            function showDetailsList() {
              let cardDetails = `<center><div class="alert alert-success w-60" role="alert">
  <h4 class="alert-heading">${cityLoc[index].category}</h4>
  <p><b>Name of the organisation</b>:${cityLoc[index].nameoftheorganisation}</p>
  <p><b>Description:</b>${cityLoc[index].descriptionandorserviceprovided}</p>
  <hr />
  <p class="mb-0">
    <b>Phone number:</b>${cityLoc[index].phonenumber}
  </p>
</div></center>
`;
              
cardAdd += cardDetails;
            }
          }
        }
      }
    }
    showDetailList.innerHTML = cardAdd;
    cardAdd = [];
  }

 
};
request.send();