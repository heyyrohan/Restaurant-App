function navbar(){
    return `<nav class="navbar navbar-expand-lg navbar-light" id="navbarhead">
    <div class="container-fluid">
      <img id="logoimg" src="https://www.pngitem.com/pimgs/m/38-387291_transparent-background-chef-logo-png-png-download.png" alt="">
      <a class="navbar-brand" href="index.html">Foodhub</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav link me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="feature.html">Feature</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#" id="Indian-Food">Indian-Food</a></li>
              <li><a class="dropdown-item" href="#" id="Canadian-Food">Canadian-Food</a></li>
              <li><a class="dropdown-item" href="#" id="Spanish-Food">Spanish-Food</a></li>
              <li><a class="dropdown-item" href="#" id="Italian-Food">Italian-Food</a></li>
              
              <!-- <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li> -->
            </ul>
          </li>
        </ul>
        <form class="d-flex search_box">
          <input class="form-control me-2" id="searchbox" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" id="search_id" type="submit">Search</button>
        </form>
        <ul class="navbar-nav ls mb-2 mb-sm-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="login.html">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="signup.html">SignUp</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="cart.html">Cart</a>
            </li>
        </ul>
      </div>
    </div>
  </nav>`
}
export default navbar();
// console.log(navbar);