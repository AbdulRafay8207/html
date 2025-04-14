"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
(_a = document.getElementById("submit")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (a) => __awaiter(void 0, void 0, void 0, function* () {
    a.preventDefault();
    const nameInput = document.getElementById("Name");
    const majorInput = document.getElementById("Major");
    const body = {
        name: nameInput.value,
        major: majorInput.value
    };
    const response = yield fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body)
    });
    const json = yield response.json();
    // alert("User added")
    console.log(json);
    loadUsers();
}));
const loadUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("http://localhost:3000/users");
    const json = yield response.json();
    const JTSA = UserIntoHtml(json);
    document.getElementById("input").innerHTML = JTSA;
});
const UserIntoHtml = (users) => users.map(user => `
    <tr id="${user.id}">
    <td>${user.name}</td>
    <td>${user.major}</td>
    <td><button class="editBtn" onclick="editUser('${user.id}')">Edit</button> <button class="deleteBtn" onclick="deleteUser('${user.id}')">Delete</button>
  </tr>`).join("");
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE"
    });
    // alert("User Deleted")
    loadUsers();
});
const editUser = (id) => {
    const row = document.getElementById(`${id}`);
    if (!row)
        return;
    const nameTD = row.children[0];
    const majorTD = row.children[1];
    const actionTD = row.children[2];
    nameTD.innerHTML = `<input type="text" id="editName${id}" value="${nameTD.textContent}">`;
    majorTD.innerHTML = `<input type="text" id="editMajor${id}" value="${majorTD.textContent}">`;
    actionTD.innerHTML = `<button class="saveBtn" onclick="saveUser('${id}')">Save</button> <button class="cancelBtn" onclick="loadUsers()">Cancel </button>`;
};
const saveUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const newName = document.getElementById(`editName${id}`);
    const newMajor = document.getElementById(`editMajor${id}`);
    yield fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name: newName.value, major: newMajor.value })
    });
    // alert("User Updated")
    loadUsers();
});
loadUsers();
