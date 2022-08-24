function navbar(){
    return `<ul class="navbarLeft">
    <li>
      <a href="#">
        <img
          src="https://clockify.me/assets/images/clockify-logo.svg"
          alt="error"
        />
      </a>
    </li>
    <li>
      <a href="#">FEATURES</a>
    </li>
    <li>
      <a href="#">DOWNLOAD</a>
    </li>
  </ul>
  <div class="navbarRight">
    <a href="#" id="login">LOG IN</a>
    <a href="#" id="signup">
      <button class="signUp">SIGN UP FREE</button>
    </a>
  </div>
  <i class="fa-solid fa-bars" id="mobileMenuOpen"></i>
  <i class="fa-solid fa-xmark" id="mobileMenuClose"></i>`;
};

function mobNavbar(){
  return `<li><a href="#">FEATURES</a></li>
  <li><a href="#">DOWNLOAD</a></li>
  <li><a href="#" id="mobLogin">LOG IN</a></li>
  <li><button class="mobSignUp">SIGN UP FREE</button></li>`;
};

export  {navbar,mobNavbar}