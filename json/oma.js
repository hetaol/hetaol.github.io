fetch('oma.json')

// Muunnetaan vastaus JSON muotoon
.then(function (response) { return response.json();
})

// Käsitellään muunnettu (eli JSON muotoinen) vastaus
.then(function (responseJson) {
 
// Testataan onnistuuko json-luku
// jos onnistuu päivitetään tähän json-datan käsittelevän funktion kutsu 
document.getElementById("vastaus").innerHTML =
"<p>Jatketaan harjoitusta</p>";
})

// Jos tuli jokin virhe
.catch(function (error) { document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
})



// Luo funktio, joka hakee JSON-dataa
//async function haeJsonData(url) {
    //try {
   //   const response = await fetch('oma.json'); // Hae data annetusta URL-osoitteesta
   //   const data = await response.json(); // Muunna vastaus JSON-muotoon
   //   console.log(data); // Tulosta data konsoliin (voit muokata tätä osaa tarpeidesi mukaan)
    //  return data; // Palauta data
   // } catch (error) {
   //   console.error('Virhe JSON-datan haussa:', error); // Tulosta virheilmoitus konsoliin
    //  return null; // Palauta null virhetilanteessa
    //}
  //}
  
  // Käytä funktiota esimerkiksi seuraavasti:
  //const apiUrl = 'https://esimerkki.com/api/data'; // Korvaa osoite haluamallasi API-osoitteella
  //const jsonTulos = await haeJsonData(apiUrl);
  //if (jsonTulos) {
    // Käsittele JSON-data tässä (esim. näytä se sivulla tai tee muuta logiikkaa)
  //} else {
    // Käsittely virhetilanteessa
 // }