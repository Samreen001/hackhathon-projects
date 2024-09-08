// TypeScript code to enhance the resume functionality
document.addEventListener('DOMContentLoaded', function () {
    var skills = document.querySelectorAll('.skills li');
    skills.forEach(function (skill) {
        skill.addEventListener('click', function () {
            alert("You clicked on skill: ".concat(skill.textContent));
        });
    });
});
