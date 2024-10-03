const requestOptions = {
  method: "GET",
  redirect: "follow"
};
// const localProxy = "http://localhost:3000";
const proxy ="https://hiv-dashboard.free.beeceptor.com";
const fullProxy = proxy + '/site/home-page-data';
// const url = "https://hiv-dashboards.nascop.org/site/home-page-data"

fetch(fullProxy, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    let plhiv = result[0].value;
    let incidence = result[2].value;
    let hivDeaths = result[4].value;
    let pmtct = result[5].value;

    console.log({plhiv,incidence,hivDeaths,pmtct})
  })
  .catch((error) => console.error(error));