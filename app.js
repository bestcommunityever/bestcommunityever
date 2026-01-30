// Animaciones
document.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-100){
      el.classList.add("active");
    }
  });
});

// Convoys dinámicos
fetch("data/convoys.json")
.then(r=>r.json())
.then(data=>{
  const c=document.getElementById("convoy-list");
  data.forEach(e=>{
    c.innerHTML+=`
    <div class="card">
      <h3>${e.title}</h3>
      <p>${e.route}</p>
      <p>${e.server}</p>
      <p>${new Date(e.date).toLocaleString()}</p>
    </div>`;
  });
});

// Rangos
fetch("data/ranks.json")
.then(r=>r.json())
.then(data=>{
  const r=document.getElementById("rank-list");
  data.forEach(e=>{
    r.innerHTML+=`<div class="card">${e}</div>`;
  });
});

// Formulario
document.getElementById("applyForm").onsubmit=e=>{
  e.preventDefault();
  alert("Solicitud enviada correctamente. El staff la revisará.");
};
