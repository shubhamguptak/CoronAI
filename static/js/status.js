let newsAccordion = document.getElementById("newsAccordion");

// const xhr = new XMLHttpRequest();
const xhr = new XMLHttpRequest();
xhr.open("GET", `https://api.covid19api.com/summary`, true);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let globl = json.Global;
    let articles = json.Countries;
    articles.sort(function (a, b) {
      return b.TotalConfirmed - a.TotalConfirmed;
    });
    console.log(globl);

    console.log(articles);
    let newsHtnl = "";

    articles.forEach(function (element, index) {
      let news = `<tbody><tr>  <td style='width:16%'> ${element["Country"]} </td> </td> <td style="color:purple"> ${element["NewConfirmed"]} </td> <td> ${element["TotalConfirmed"]} </td>  </td><td style="color:red"> ${element["NewDeaths"]}</td><td> ${element["TotalDeaths"]} </td><td style="color:green">  ${element["NewRecovered"]} </td><td>${element["TotalRecovered"]}</td><td td style='width:10%'>  ${element["Date"]} </td></tr> </tbody>`;

      newsHtnl += news;
    });

    let newGlobal = `<tbody><tr style="color:darkgrey">  <td>World </td> </td> <td style="color:purple"> ${globl.NewConfirmed} </td> <td> ${globl.TotalConfirmed} </td>  </td><td style="color:red"> ${globl.NewDeaths}</td><td > ${globl.TotalDeaths} </td><td style="color:green">  ${globl.NewRecovered} </td><td >${globl.TotalRecovered}</td></tr> </tbody>`;

    console.log(newGlobal);

    let row = `<tbody><tr>  <td style='width:16%'>Country </td> <td style="color:purple">NewConfirmed </td> <td>TotalConfirmed </td><td style="color:red">NewDeaths</td><td>TotalDeaths </td><td style="color:green">NewRecovered </td><td>TotalRecovered</td><td td style='width:10%'>Date </td></tr> </tbody > `;

    newsAccordion.innerHTML = row + newGlobal + newsHtnl;
  } else {
    console.log("some error ocuured");
  }
};

xhr.send();
