var xmlhttp = new XMLHttpRequest();
var dataUrl = "data/data.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myData = JSON.parse(this.responseText);
        generateResume(myData);
    }
};

xmlhttp.open("GET", dataUrl, true);
xmlhttp.send();

function generateResume(myData){
   var basics = myData.basics;
   var works = myData.work;
   var education = myData.education;
   var awards = myData.awards;
   var publications = myData.publications;
   var skills= myData.skills;
   var languages = myData.languages;
   var interests = myData.interests;
   
   basicDetail(basics);
   experience(works);
   educations(education);
   award(awards);
   publication(publications);
   skill(skills);
   language(languages);
   interest(interests); 
}

function basicDetail(basics){
    profileData = "";
    
    basics.profiles.forEach(function(x) {
        profileData += ` ${x.network}: ${x.url} |`;
    })
	
  document.getElementById('basic').innerHTML=
   `<h2 style="text-align:center">${basics.name}</h2>
    <h4 style="text-align:center">Designation : ${basics.label}</h4>
    <h4 style="text-align:center">Email : ${basics.email}</h4>
    <h4 style="text-align:center"> Mobile:  ${basics.phone}</h4>
    <h5 style="text-align:center">${basics.location.address}, ${basics.location.city}, ${basics.location.region} - ${basics.location.postalCode}.</h5>
    <h5 style="text-align:center"> ${profileData} </h5>`;
}

function experience(works){
    workDetail = "";
    works.forEach(function(x){
        workDetail += `<b> ${x.company} </b><br>  Duration:  </b><span style="">${x.startDate} - ${x.endDate}</span><br>
          Position : ${x.position}<br> ${x.summary}<br><br>`
    })

    document.getElementById('work_exp').innerHTML=
    `<div style="background-color:#9a9a9a; padding:5px; font-size: 17px; font-weight: bold;">Work Experience</div><br> ${workDetail}<br><br>`;

}

function educations(education){
    educationDetail = "";
    education.forEach(function(x){
        educationDetail += ` <b> ${x.institution} (${x.studyType}) - Duration: </b>
        <span style="">${x.startDate} - ${x.endDate}</span><br>
       Pursuied ${x.area} and GPA score is ${x.gpa}.</br></br>`
    })
  document.getElementById('education').innerHTML=`
    <div style="background-color:#9a9a9a; padding:5px; font-size: 17px; font-weight: bold;">Education</div> <br> ${educationDetail}<br>`
}

function award(awards){
    award = "<ul>";
    awards.forEach(function(x){
        award +=  '<li> Got the '  + x.title +' Award on ' + x.date + ' from ' + x.awarder +'.</li>'
    })
    document.getElementById('achievement').innerHTML =`
    <div style="background-color:#9a9a9a; padding:5px; font-size: 17px; font-weight: bold;">Award</div> ${award}<br>`
}

function publication(publications){  
    publication = "<ul>";
    publications.forEach(function(x) {
        publication += `<li>Published "${x.name}" on ${x.releaseDate}, by ${x.publisher} company. Get it on <a href="${x.website}">${x.website}</a>.</li>`;
    })
  
    document.getElementById('publication').innerHTML =
      `<div style="background-color:#9a9a9a; padding:5px; font-size: 17px; font-weight: bold;">Publication </div> ${publication}<br>`
}
function skill(skills){
    skill = "";
    skills.forEach(function(x){
        skill += `<p><b>${x.name}</b> <br> Level : ${x.level} <br>Technology Used:  ${x.keywords}.</p>`;
    })
    document.getElementById('skills').innerHTML =
    `<div style="background-color:#9a9a9a; padding:5px; font-size: 17px; font-weight: bold;">Skills</div> ${skill}<br>`
}

function language(languages){
    language = "", 
    
    languages.forEach(function(x) {
        language += `<p><b>${x.language},  Fluency: </b> ${x.fluency}.</p>`
    });

    document.getElementById('language').innerHTML =
    `<div style="background-color:#9a9a9a; padding:5px; font-size: 17px; font-weight: bold;">Languages<br>
    </div> ${language}<br>`;
}

function interest(interests){
    hobbies = "";
    interests.forEach(function(x) {
        hobbies += `<p><b>${x.name} </b>-  ${x.keywords}.</P>`
    });

    document.getElementById('interest').innerHTML =
    `<div style="background-color:#9a9a9a; padding:5px; font-size: 17px; font-weight: bold;"> Hobbies and Interest</div>
     ${hobbies}
    <br>`
}