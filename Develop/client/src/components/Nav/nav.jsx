function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="/"
              >
                Home
              </a>
              <a className="nav-link active text-light" href="/product">
                Product
              </a>
              <a className="nav-link active text-light" href="/cart">
                Cart
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
