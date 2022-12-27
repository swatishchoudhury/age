// Check if the page was loaded with birth date in the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const birthDateParam = urlParams.get('birth-date');
if (birthDateParam) {
  // Set the birth date in the form and calculate the age
  document.querySelector('#birth-date').value = birthDateParam;
  calculateAge();
}

$("#calculate-birth-date").on("click", function(){
    calculateAge();
});
   
function calculateAge()
{
    let birthDate = new Date(Date.parse($("#birth-date").val()));
    const ageInYears = (new Date() - birthDate) / 1000 / 60 / 60 / 24 / 365.25;
    const ageInMarsYears = ageInYears / 1.88;
    const ageInVenusYears = ageInYears / 0.62;
    const ageInMercuryYears = ageInYears / 0.24;
    const ageInJupiterYears = ageInYears / 11.86;
    const ageInSaturnYears = ageInYears / 29.46;
    const ageInUranusYears = ageInYears / 84.01;
    const ageInNeptuneYears = ageInYears / 164.8;
    const ageInPlutoYears = ageInYears / 248.09;
    if (isNaN(ageInYears)) {
        alert('Please enter a valid birth date');
      } else {
      document.querySelector('#age-display').innerHTML = `
        <br>Age in Earth: ${ageInYears} years.<br><br>
        
        Age in Mercury: ${ageInMercuryYears} mercury years.<br>
        Age in Venus: ${ageInVenusYears} venus years.<br>
        Age in Earth: ${ageInYears} years<br>
        Age in Mars: ${ageInMarsYears} mars years.<br>
        Age in Jupiter: ${ageInJupiterYears} jupiter years.<br>
        Age in Saturn: ${ageInSaturnYears} saturn years.<br>
        Age in Uranus: ${ageInUranusYears} uranus years.<br>
        Age in Neptune: ${ageInNeptuneYears} neptune years.<br>
        Age in Pluto: ${ageInPlutoYears} pluto years.<br><br>
      `;
      }
        // Update the shareable link
        const shareLink = document.querySelector('#share-link');
        const shareUrl = `http://swatishchoudhury.github.io/age/?birth-date=${encodeURIComponent(birthDate.toISOString().substr(0, 10))}`;
        shareLink.innerHTML = `<input type="text" style="width: 350px;" value="${shareUrl}" readonly><button onclick="copyUrl()">Copy</button>`;
        }

        function copyUrl() {
        const shareUrl = document.querySelector('#share-link input').value;
        navigator.clipboard.writeText(shareUrl);
        alert('Shareable link copied to clipboard!');
        }