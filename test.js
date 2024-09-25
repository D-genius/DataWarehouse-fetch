const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://hiv-dashboards.nascop.org/site/home-page-data", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    let plhiv = result[0].value;
    let incidence = result[2].value;
    let hivDeaths = result[4].value;
    let pmtct = result[5].value;

    const div = document.getElementsByClassName('statistics-inner')[0];
    if (div) {
      const spans = div.getElementsByClassName('number');
      if (spans.length >= 4) {
        spans[0].innerHTML = plhiv;
        spans[1].innerHTML = incidence;
        spans[2].innerHTML = hivDeaths;
        spans[3].innerHTML = pmtct;
      } else {
        console.error("Not enough spans in the statistics-inner div.");
      }
    } else {
      console.error("statistics-inner div not found.");
    }
    console.log(result)
  })
  .catch((error) => console.error(error));