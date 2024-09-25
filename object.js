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

    console.log([plhiv,incidence,hivDeaths,pmtct])
  })
  .catch((error) => console.error(error));