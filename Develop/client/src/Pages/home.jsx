function Home() {
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        backgroundImage: "url(./IMG_4662.png)",
        minHeight: "85vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="card mb-3 mt-5 p-5"
        style={{
          width: "80%",
        }}
      >
        <img
          src="./IMG_6719.png"
          className="card-img-top"
          alt="..."
          style={{
            width: "200px",
            height: "200px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "100px",
          }}
        />
        <div className="card-body">
          <h3 className="card-title"></h3>
          <img src="../../assets/dogwood-main" alt="..." />
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
