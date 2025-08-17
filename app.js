let inputValue = document.getElementById('value');
    let arr = [];

    // Function to render list
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

    // Add new fruit
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

    // Edit fruit using splice
    function edit(index) {
      let updated = prompt("Enter new fruit:", arr[index]);

      if (updated !== null && updated.trim() !== "") {
        arr.splice(index, 1, updated.trim());
        renderList();
       
      }
      
    }

    // Delete fruit using splice
    function del(index) {
      arr.splice(index, 1);
      renderList();
    }

    // Clear all fruits
    document.getElementById('clear').addEventListener('click', function() {
      arr.splice(0, arr.length); // empty the array using splice
      renderList();
    });

    // Initial render
    renderList();
