document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  
  document.getElementById("response").innerText = 
    `Thanks, ${name}! We'll contact you at ${email}.`;
});
