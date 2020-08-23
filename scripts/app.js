window.onload = function() {
    var localStorageKeyName = 'data';
    CargarLocalStorage();

    document.querySelector("#btn-agregar").addEventListener('click', function() {
        var campeon = document.getElementById("campeon"),
            raza = document.getElementById("raza");

        if (campeon.value.length == 0 || raza.value.length == 0) return;

        var user = {
            campeon: campeon.value,
            raza: raza.value

        };
        campeon.value = '';
        raza.value = '';

        AgregarLocalStorage(user);
    })

    function AgregarLocalStorage(obj) {
        var users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        if (dataInLocalStorage !== null) {
            users = JSON.parse(dataInLocalStorage);
        }

        users.push(obj);

        localStorage.setItem(localStorageKeyName, JSON.stringify(users));

        CargarLocalStorage();
    }

    function CargarLocalStorage() {
        var users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName),
            gridBody = document.querySelector("#grid tbody");

        if (dataInLocalStorage !== null) {
            users = JSON.parse(dataInLocalStorage);
        }

        gridBody.innerHTML = '';

        users.forEach(function(x, i) {
            var tr = document.createElement("tr"),
                tdCampeon = document.createElement("td"),
                tdRaza = document.createElement("td"),
                tdEdit = document.createElement("td"),
                tdRemove = document.createElement("td"),
                btnEdit = document.createElement("button");
            btnRemove = document.createElement("button");


            tdCampeon.innerHTML = x.campeon;
            tdRaza.innerHTML = x.raza;


            btnEdit.textContent = 'Editar';
            btnEdit.className = 'btn-editar';
            btnEdit.addEventListener('click', function() {
                EditarLocalStorage(i);
            });

            btnRemove.textContent = 'Eliminar';
            btnRemove.className = 'btn-eliminar';
            btnRemove.addEventListener('click', function() {
                EliminarLocalStorage(i);
            });

            tdEdit.appendChild(btnEdit);
            tdRemove.appendChild(btnRemove);


            tr.appendChild(tdCampeon);
            tr.appendChild(tdRaza);
            tr.appendChild(tdEdit);
            tr.appendChild(tdRemove);


            gridBody.appendChild(tr);
        });
    }

    function EliminarLocalStorage(index) {
        var users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        users = JSON.parse(dataInLocalStorage);

        users.splice(index, 1);

        localStorage.setItem(localStorageKeyName, JSON.stringify(users));

        CargarLocalStorage();
    }

    function EditarLocalStorage() {





    }
}