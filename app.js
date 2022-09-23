
// let submitPost = document.getElementById('btn').value;


let allPosts = [];

function post(){

    let myName = document.getElementById('name').value;
    let postTitle = document.getElementById('postTitle').value;
    let discription = document.getElementById('discription').value;
    let container = document.getElementById('container');
    allPosts.unshift(myName, postTitle, discription);
    console.log(allPosts);
    // container.innerHTML = "";

    for(let i = 0; i<1; i++){
    container.innerHTML+=
    `<div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
        <div class="shadow rounded">
            <form class="form ">
                <div class="row m-2 ">


                    <div class="col-6 mt-4">
                        <div class="d-flex">
                            <div class="avatar  border rounded-pill bg-primary text-white">${myName[0]}</div>
                        <div><h3 class="" id="myName">${myName}</h3></div>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4">
                        <h5 class="" id="myTitle">${postTitle}</h5>
                    </div>
                </div>
                <div class="row m-2">
                    <div class="col-12 boxImg border">
                        <div class="">
                            <img src="./images/Apple-iPhone-11-Pro-Max.jpg" class="w-100" alt="" id="myImg">
                        </div>
                    </div>
                </div>
                <div class="row m-2">
                    <div class="col-12 ">
                        <p class="" id="myDisc">${discription}</p>
                    </div>
                </div>
                <div class="row m-2">
                    
                    <div class="col-2 mb-4">
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="button" id="btn"
                                onclick="like()">Like</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="col-md-3"></div>
</div> `;
    }

    myName = "";
    postTitle = "";
    discription = "";
    
}

function like(){
    alert("Liked");
}
