let inputValue = document.getElementById('value');
    let arr = [];

    function renderList() {
      let ul = document.getElementById('ul');
      ul.innerHTML = "";

      for (let i = 0; i < arr.length; i++) {
        ul.innerHTML += `
          <li class="fruit-item">
            ${arr[i]}
            <button onclick="edit(${i})">Edit</button>
            <button onclick="del(${i})">Delete</button>
          </li>
        `;
      }

      if (arr.length === 0) {
        ul.innerHTML = "<p>No fruits in the list.</p>";
      }
    }

    function add() {
      let value = inputValue.value.trim();

      if (value === "") {
        alert("Please fill the input");
        return;
      }

      arr.push(value);
      inputValue.value = "";
      renderList();
    }
    function edit(index) {
      let updated = prompt("Enter new fruit:", arr[index]);

      if (updated !== null && updated.trim() !== "") {
        arr.splice(index, 1, updated.trim());
        renderList();
       
      }
      
    }

    function del(index) {
      arr.splice(index, 1);
      renderList();
    }

    document.getElementById('clear').addEventListener('click', function() {
      arr.splice(0, arr.length); 
      renderList();
    });


    renderList();
