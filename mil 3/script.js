var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var Name = document.getElementById('Name').value;
    var Email = document.getElementById('Email').value;
    var Phone = document.getElementById('Phone').value;
    var Experience = document.getElementById('Experience').value;
    var Skills = document.getElementById('Skills').value;
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b>".concat(Name, "</p>\n<p><b>Email:</b>").concat(Email, "</p>\n<p><b>Phone:</b>").concat(Phone, "</p>\n\n<h3>Skills</h3>\n<p>").concat(Skills, "</p>\n");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
