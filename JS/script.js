let cardContent = JSON.parse(cardTasks);
console.log(cardContent)

function updateHTML(arr) {
    document.getElementById("importance").innerHTML = "";
    for (let x of arr) {
        document.getElementById("importance").innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12 gap-3 mb-3">
        <div class="card" style="width: 18rem;">
        <img src="${x.taskImage}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">${x.taskName}</h5>
            <p class="card-text text-center">${x.taskDescription}</p>
            <hr>
            <p class="card-text"><i class="fa-solid fa-triangle-exclamation me-2"></i>Priority Level: <a class="btn-imp btn" id="imp-btn"><span class="importance">${x.importance}</span></a></p>
            <p class="card-text"><i class="fa-solid fa-calendar-days me-2"></i>Deadline: 21.06.2022</p>
            <hr>
            <a class="btn btn-danger"><i class="fa-solid fa-trash-can me-2"></i>Delete</a>
            <a class="btn btn-success"><i class="fa-solid fa-circle-check me-2"></i></i>Done</a>
        </div>
    </div>
    </div>`;
    }
    likeAction();
}

function likeAction() {
    let btns = document.getElementsByClassName("btn-imp");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            cardContent[i].importance++;
            document.getElementsByClassName("importance")[i].innerHTML = cardContent[i].importance;

            var sortedArray = cardContent.sort((a, b) => a.likes - b.likes);
            updateHTML(sortedArray);
        });
    }
}


updateHTML(cardContent);
// likeAction();