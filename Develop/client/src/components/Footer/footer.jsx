function Footer() {
  const styles = {
    footerStyle: {
      // position: "absolute",
      bottom: 0,
      width: "100%",
    },
    divStyle: {
      background: "black",
      color: "white",
    },
  };
  return (
    <>
      <footer style={styles.footerStyle}>
        <div className="card text-center" style={styles.divStyle}>
          <div className="card-body">
            <p className="card-text">Every collar is handmade</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
