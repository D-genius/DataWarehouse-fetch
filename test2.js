const myHeader = new Headers();

myHeader.append("Accept", "application/json, text/javascript, */*; q=0.01");

myHeader.append(
  "Content-Type",
  "application/x-www-form-urlencoded; charset=UTF-8",
);
myHeader.append("cookie","hiv-dashboard=j7dcv7iojig5is2m30t1bo8e56; _csrf-backend=b928a714cda8b1655e8933d654dbd2aedefcf74dc1f8b5983be8100e664cfcb7a%3A2%3A%7Bi%3A0%3Bs%3A13%3A%22_csrf-backend%22%3Bi%3A1%3Bs%3A32%3A%22dYRDew6sxx_iq5gkR1l_ArqCTXuE2KuY%22%3B%7D");

myHeader.append("Access-Control-Allow-Origin", "https://hiv-dashboards.nascop.org/site/home-page-data");
// myHeader.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
// myHeader.append("Access-Control-Allow-Headers", "Content-Type, Authorization");
// myHeader.append("Access-Control-Allow-Credentials", "true");

const yearNow = new Date().getFullYear() - 1;
const raw = `year=${yearNow}&county=`;
const requestOptions = {
  method: "POST",
  headers: myHeader,
  // referrerPolicy: "strict-origin-when-cross-origin",
  body: raw,
  redirect: "follow",
};

fetch("https://hiv-dashboards.nascop.org/site/home-page-data", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    let plhiv = result[0].value;
    let incidence = result[2].value;
    let hivDeaths = result[4].value;
    let pmtct = result[5].value;

    console.log({ plhiv, incidence, hivDeaths, pmtct, yearNow });
  })
  .catch((error) => console.error(error));
