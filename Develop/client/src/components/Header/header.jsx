import Nav from "../Nav/nav.jsx";

function Header() {
  return (
    <>
      <header
        className="d-flex justify-content-between align-items-center"
        style={{
          backgroundImage: "url(./IMG_0400.JPG)",
          color: "white",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="m-4">
          <a className="navbar-brand" style={{ color: "black" }}>
            Dogwood Collars LLC
          </a>
        </h1>
        <Nav />
      </header>
    </>
  );
}

export default Header;
