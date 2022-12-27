let startIntv = "";
$(document).ready(function() {
    if(getUserBday() !== "" && getUserBday() !== null && getUserBday() !== undefined)
    {
        $("#birth-date").val(getUserBday());
        calculateAge();
    }
});

$("#calculate-birth-date").on("click", function(){
    calculateAge();
});

function calculateAge()
{
    let results = '';
    let birthDate = $("#birth-date").val();
    if(!isValidDate(birthDate))
    { 
        alert("Please Enter Valid Birthdate");
    }
    else
    {
        birthDate = new Date(Date.parse(birthDate));
        const ageInYears = (new Date() - birthDate) / 1000 / 60 / 60 / 24 / 365.25;
        const ageInMarsYears = ageInYears / 1.88;
        const ageInVenusYears = ageInYears / 0.62;
        const ageInMercuryYears = ageInYears / 0.24;
        const ageInJupiterYears = ageInYears / 11.86;
        const ageInSaturnYears = ageInYears / 29.46;
        const ageInUranusYears = ageInYears / 84.01;
        const ageInNeptuneYears = ageInYears / 164.8;
        const ageInPlutoYears = ageInYears / 248.09;
        if (isNaN(ageInYears))
        {
            alert("Failure In Calculating Results");
        } 
        else
        {
            let shareableLink = location.protocol + '//' + location.host + location.pathname + "?data=" + btoa($("#birth-date").val()).replaceAll("=", "");
            results = results + '<p class="mt-4">';
            results = results + '<b>Age on Earth:  </b> ' + ageInYears + ' years<br/>';
            results = results + '<b>Age on Mercury:  </b> ' + ageInMercuryYears + ' mercurian years<br/>';
            results = results + '<b>Age on Venus:  </b> ' + ageInVenusYears + ' venusian years<br/>';
            results = results + '<b>Age on Mars:  </b> ' + ageInMarsYears + ' martian years<br/>';
            results = results + '<b>Age on Jupiter:  </b> ' + ageInJupiterYears + ' jovian years<br/>';
            results = results + '<b>Age on Saturn:  </b> ' + ageInSaturnYears + ' saturnian years<br/>';
            results = results + '<b>Age on Uranus:  </b> ' + ageInUranusYears + ' uranian years<br/>';
            results = results + '<b>Age on Neptune:  </b> ' + ageInNeptuneYears + ' neptunian years<br/>';
            results = results + '<b>Age on Pluto:  </b> ' + ageInPlutoYears + ' plutoian years<br/>';
            results = results + '</p>';
            results = results + '<div class="input-group" id="shareDialog">';
            results = results + '<input type="text" readonly="" class="form-control" placeholder="Share Your Planetary Age with Others" id="share_planetary_age_link" value="' + shareableLink + '" />';
            results = results + '<button class="btn btn-warning btn-sm" type="button" id="share_planetary_age_btn" onclick="share_pl_age()"> Share </button>';
            results = results + '</div>';
            
            $("#age-display").html(results);
        }
    }
}

function share_pl_age()
{
    let shareUrl = $("#share_planetary_age_link").val();
    navigator.clipboard.writeText(shareUrl);
    alert("Sharing Link Copied");
}

function getUserBday()
{
    let dxn = ""; let qxn = ""; let fullURL = ""; let usrdata = "";
    if(window.location.search !== "" && window.location.search !== null && window.location.search !== undefined)
    {
        fullURL = window.location.search;
    }
    if(fullURL.indexOf("data=") !== -1)
    {
        dxn = fullURL.split("data=");
    }
    if(dxn[1] !== "" && dxn[1] !== null && dxn[1] !== undefined)
    {
        if(dxn[1].indexOf("&") !== -1)
        {
            qxn = dxn[1].split("&");
            if(qxn[0] !== "" && qxn[0] !== null && qxn[0] !== undefined)
            {
                usrdata = qxn[0];
            }
        }
        else { usrdata = dxn[1]; }
    }
    if(usrdata !== "") {
        usrdata = atob(usrdata);
        if(isValidDate(usrdata)){ return usrdata; }else { return ""; }
    }
}

function isValidDate(dateString)
{
  var regEx = /^\d{4}-\d{2}-\d{2}$/;
  dateString = dateString.toString();
  if(!dateString.match(regEx)) return false;
  var d = new Date(dateString);
  var dNum = d.getTime();
  if(!dNum && dNum !== 0) return false;
  return d.toISOString().slice(0,10) === dateString;
}