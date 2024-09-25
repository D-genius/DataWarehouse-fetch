const myHeader = new Headers();
const div = document.querySelector('.statistics-inner');
if (div) {
  const spans = div.getElementsByClassName('number');
  myHeader.append("Cookie", "_csrf=xt_5tuR-2huTO2iqhJq36o8m");

  const requestOption = {
    method: "GET",
    headers: myHeader,
    redirect: "follow"
  };

  fetch("https://dwh.nascop.org/api/care-treatment/viralLoadCascade", requestOption)
    .then((response) => response.json())
    .then((result) => {
      let txCurr = result.TX_CURR;
      let eligiblevl = result.Eligible4VL;
      let last12month = result.Last12MonthVL;
      let last12sup = result.Last12MVLSup;

      if (spans.length >= 4) {
        spans[0].innerHTML = txCurr;
        spans[1].innerHTML = eligiblevl;
        spans[2].innerHTML = last12month;
        spans[3].innerHTML = last12sup;
      } else {
        console.error("Not enough span elements found.");
      }
    })
    .catch((error) => console.error('Fetch error:', error));
} else {
  console.error('Div with class "statistics-inner" not found.');
}