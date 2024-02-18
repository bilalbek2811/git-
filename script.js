const cards = document.querySelector(".cards");
const btnCreate = document.querySelector(".btnCreate");
const btnContact = document.querySelector(".btnContact");
const inputName = document.querySelector(".inputName");
const inputEmail = document.querySelector(".inputEmail");
const inputImg = document.querySelector(".inputImg");
const boxcreate = document.querySelector(".create");
const ul = document.querySelector(".ul");
const ull = document.querySelector(".ul");

function create() {
  boxcreate.innerHTML = "";
  const task = JSON.parse(localStorage.getItem("task")) || [];
  task.map((el) => {
    boxcreate.innerHTML += `
    <ul class = "ul">
    <h4 class ="">1</h4>
    <h4>
    <img src="${el.image}" alt="img" width="50"
    </h4>
    <h4>${el.name}</h4>
    <h4>99$ ${el.email}</h4>
  <button class="del-btn btn btn-danger">Delete</button>
  </ul>

    `;
  });
  deleteTask();
}
create();
btnCreate.addEventListener("click", () => {
  if (
    inputName.value.trim() === "" &&
    inputEmail.value.trim() === "" &&
    inputImg.value.trim() === ""
  ) {
    alert("err");
  } else {
    let task = JSON.parse(localStorage.getItem("task")) || [];
    const newTask = {
      id: 2,
      name: inputName.value,
      email: inputEmail.value,
      image: inputImg.value,
    };
    if (
      !task.some(
        (el) =>
          el.name === inputName.value &&
          el.emil === inputEmail.value &&
          el.image === inputImg.value
      )
    ) {
      let res = [...task, newTask];
      localStorage.setItem("task", JSON.stringify(res));
    }
    create();
  }
});

function deleteTask() {
  let task = JSON.parse(localStorage.getItem("task")) || [];
  const buttons = document.querySelectorAll(".del-btn");
  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      task = task.filter((el, idx) => {
        return idx !== index;
      });
      localStorage.setItem("task", JSON.stringify(task));
      create();
    });
  });
}

deleteTask();

btnContact.addEventListener("click", () => {});
