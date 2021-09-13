class UI{


     getAllUsers(name, gender, age, location, email, phone){
          

          let newUser = document.createElement("div");
          newUser.className = "col-12 col-md-4 mb-3";
          if( gender === "male"){
                    newUser.innerHTML = `
                    <div class="card">
                         <div class="card-header w-100 py-2 d-flex justify-content-center align-items-center">
                              <img class="w-25" src="images/fav-icon.png" alt="">
                         </div>
                         <div class="card-body">
                              <p><strong>Name:</strong>  ${name}</p>
                              <p><strong>Gender:</strong> ${gender}</p>
                              <p><strong>Age:</strong> ${age}</p>
                              <p><strong>Location:</strong> ${location}</p>
                              <p><strong>e-mail:</strong> ${email}</p>
                              <p><strong>Phone:</strong> ${phone}</p>
                         </div>
                         <div class="card-footer py-3 d-flex justify-content-center align-items-center">
                              <button class="btn btn-danger delete-user-button" style=" width: 150px !important">Delete User</button>
                         </div>
                    </div>
                    `;
          }
          else{
                    newUser.innerHTML = `
                    <div class="card">
                         <div class="card-header w-100 py-2 d-flex justify-content-center align-items-center">
                              <img class="w-25" src="images/backend.svg" alt="">
                         </div>
                         <div class="card-body">
                              <p><strong>Name:</strong>  ${name}</p>
                              <p><strong>Gender:</strong> ${gender}</p>
                              <p><strong>Age:</strong> ${age}</p>
                              <p><strong>Location:</strong> ${location}</p>
                              <p><strong>e-mail:</strong> ${email}</p>
                              <p><strong>Phone:</strong> ${phone}</p>
                         </div>
                         <div class="card-footer py-3 d-flex justify-content-center align-items-center" >
                              <button class="btn btn-danger delete-user-button" >Delete User</button>
                         </div>
                    </div>
                    `;
          }

          userContainer.appendChild(newUser);
     }
}