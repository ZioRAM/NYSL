const header = document.querySelector
('.main-header');

window.addEventListener('scroll', () =>{
    const scrollPos = window.scrollY;
    if(scrollPos > 10){
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
});

data[0].games.forEach(element => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${element.day}</td>
        <td>${element.vsName} <br> <a href="${element.location.linkGM}">${element.location.name}</a></td>
        <td>${element.times}</td>`;
    document.getElementById("tbody1").appendChild(tr);
});

data[1].games.forEach(element => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${element.day}</td>
        <td>${element.vsName} <br> <a href="${element.location.linkGM}">${element.location.name}</a></td>
        <td>${element.times}</td>`;
    document.getElementById("tbody2").appendChild(tr);
});

