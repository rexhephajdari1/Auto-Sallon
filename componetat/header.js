export function inheader(div){
    div.innerHTML=`
    <nav class="navbar navbar-expand-lg  bg-dark" > 
    <div class="container">
      <a class="navbar-brand" href="#"><img src="./img/logo-car.png" style="width: 150px;"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto me-5">
          <li class="nav-item ">
            <a class="nav-link active text-light " aria-current="page" href="index.html">Home</a>
          </li>
        
          <li class="nav-item dropdown ">
            <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Account
            </a>
            <ul class="dropdown-menu bg-secondary">
              <li><a class="dropdown-item text-dark" href="login.html">Log in</a></li>
              <li><a class="dropdown-item  text-dark" href="register.html">Register</a></li>

       
             
              </ul>      
      
              
             <li class="nav-item text-dark d-flex justify-content-between" >
             <a class="nav-link active  " aria-current="page" href="contact.html"><button type="button"  class="btn btn-outline-primary"> Contact </button></a>
             <button id="add-to-favourites" class="btn btn-outline-primary" style="width:40px;" >
             <i class="bi bi-bookmark-check-fill"></i>
             </button>
             </li>
         
            
          
          
      
       
      
        </form>
      </div>
    </div>
  </nav>`
}
