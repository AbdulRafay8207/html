document.getElementById("submit")?.addEventListener("click", async (a) => {
    a.preventDefault()
    const nameInput = document.getElementById("Name") as HTMLInputElement;
    const majorInput = document.getElementById("Major") as HTMLInputElement;

    const body: {name: string; major: string } = {
        name : nameInput.value, 
        major: majorInput.value
    }

    const response = await fetch("http://localhost:3000/users", {
        method : "POST",
        headers : {"Content-type" : "application/json"},
        body: JSON.stringify(body)
    })
    const json = await response.json() 
    // alert("User added")
    console.log(json)
    loadUsers()
})

const loadUsers = async () => {
    const response = await fetch("http://localhost:3000/users")
    const json =  await response.json()
    const JTSA = UserIntoHtml(json) 
    document.getElementById("input")!.innerHTML = JTSA
}

const UserIntoHtml = (users:{id:string; name:string, major:string }[]) => users.map(user => `
    <tr id="${user.id}">
    <td>${user.name}</td>
    <td>${user.major}</td>
    <td><button class="editBtn" onclick="editUser('${user.id}')">Edit</button> <button class="deleteBtn" onclick="deleteUser('${user.id}')">Delete</button>
  </tr>`).join("")
  

  const deleteUser = async (id: string) => {
    await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE"
    })
    // alert("User Deleted")
    loadUsers()
  }

  const editUser = (id:string) => {
    const row = document.getElementById(`${id}`)
    if(!row) return;

    const nameTD = row.children[0] as HTMLTableCellElement
    const majorTD = row.children[1] as HTMLTableCellElement
    const actionTD = row.children[2] as HTMLTableCellElement

    nameTD.innerHTML = `<input type="text" id="editName${id}" value="${nameTD.textContent}">`
    majorTD.innerHTML = `<input type="text" id="editMajor${id}" value="${majorTD.textContent}">`
    actionTD.innerHTML = `<button class="saveBtn" onclick="saveUser('${id}')">Save</button> <button class="cancelBtn" onclick="loadUsers()">Cancel </button>` 
  }

  const saveUser = async (id:string) => {
    const newName = document.getElementById(`editName${id}`) as HTMLInputElement
    const newMajor = document.getElementById(`editMajor${id}`) as HTMLInputElement
    
    await fetch(`http://localhost:3000/users/${id}`, {
        method : "PUT",
        headers: {"Content-type" : "application/json"},
        body : JSON.stringify({name: newName.value, major: newMajor.value})
    })
    // alert("User Updated")
    loadUsers()
  }

  loadUsers()