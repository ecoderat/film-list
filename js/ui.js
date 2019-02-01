class UI {
    static addFilmToUI(newFilm){
        /*
         <!-- <tr style="border-top: 2px solid rgb(255, 220, 255)">
                  <td><img src="harry.jpeg"></td>
                  <td>Harry Potter</td>
                  <td>David Yates</td>
                  <td><button type="submit" id="deleteButton">Filmi Sil</button></td>
                </tr> -->
        */

        const filmList = document.getElementById("film-table");

        filmList.innerHTML += `

        <tr style="border-top: 2px solid rgb(255, 220, 255)">
            <td><img src="${newFilm.url}"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><button type="submit" id="deleteButton">Filmi Sil</button></td>
        </tr>
        
        `;
    }
    static clearInputs(element1,element2,element3){
        element1.value = "";
        element2.value = "";
        element3.value = "";
    }
    static loadAllFilms(films){
        const filmList = document.getElementById("film-table");

        films.forEach(function(film){
            filmList.innerHTML += `
            <tr style="border-top: 2px solid rgb(255, 220, 255)">
                <td><img src="${film.url}"></td>
                <td>${film.title}</td>
                <td>${film.director}</td>
                <td><button type="submit" id="deleteButton">Filmi Sil</button></td>
            </tr>
            `;
        });
    }
    static deleteFilmFromUI(element){
        element.parentElement.parentElement.remove();
    }
    static clearAllFilmsFromUI(){
        const filmList = document.getElementById("film-table");

        filmList.innerHTML = `
                <tr>
                  <th style="width:50%">Film Afişi</th>
                  <th style="width:18%">Film İsmi</th> 
                  <th style="width:18%">Yönetmen</th>
                </tr>
                `;
    }
    static showAlert(type,message){
        const mesageList = document.createElement("li");
        
        if(type === "success"){
            mesageList.style.backgroundColor = "#88E584";
        }
        else{
            mesageList.style.backgroundColor = "#FF9050";
        }
    
        mesageList.appendChild(document.createTextNode(message));
        form.appendChild(mesageList);
    
        setTimeout(function(){
            mesageList.remove();
    
        },1000)
    }
}