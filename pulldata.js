const myHeaders = new Headers();

myHeaders.append("Accept", "application/json, text/javascript, */*; q=0.01");

myHeaders.append(
  "Content-Type",
  "application/x-www-form-urlencoded; charset=UTF-8",
);

const raw = "year=2024&county=";

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch("https://hiv-dashboards.nascop.org/site/home-page-data", requestOptions)
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.error(error));
