import img1 from "../assets/main-slogan.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    navigate("/product");
    window.scrollTo(0, 0);
  };
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        backgroundImage: { img1 },
        minHeight: "85vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#803809",
        color: "white",
      }}
    >
      <div
        className="text-center p-5"
        style={{
          width: "80%",
          borderRadius: "10px",
          boxShadow: "none",
        }}
      >
        <img
          src={img1}
          className="img-fluid"
          alt="Dogwood main image and slogan"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
          }}
        />
        <div className="text-center mt-4">
          <p className="card-text">
            Give your pet the perfect blend of style, comfort and durability
            with our hand-crafted dog collars. Designed by me with functionality
            and enjoyment at the forefront of my mind, these collars feature
            hand-dyed Maple beads and military grade paracord with a 550lb
            tensile strength- enough for any adventure while staying lightweight
            and comfortable for movement and every day ware.
            <br />
            <br />
            The slip fit design makes Dogwood Collars easy to put on and take
            off, and they are fully leash-compatible for walks, training or
            playtime. The martingale feature of the collar allows it to fit
            loose and free like a necklace, but when engaged by a leash it
            cinches up just enough to lose the ability to move over the head.
            While there are standard sizes available (X-Small- Large), for
            custom orders it is important to measure your pets head to ensure a
            perfect fit. See our measurement guide tab prior to ordering.
            <br />
            <br />
            <button
              type="button"
              className="btn btn-outline-info btn-lg"
              style={{
                marginTop: "20px",
              }}
              onClick={handleBuyNowClick}
            >
              Buy Now!
            </button>
            <br />
            <br />
          </p>
          <p className="card-text">
            <small className="text-body-secondary"></small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
