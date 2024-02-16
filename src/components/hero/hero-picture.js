function HeroPicture() {
  return (
    <div className="col-auto text-center lg:text-left">
      <picture>
        <source srcSet="img/hero.webp" type="image/webp" />
        <source srcSet="img/hero-min.png" type="image/png" />

        <img
          src="img/hero-min.png"
          className="hero-img"
          alt="Woman enjoying food, meals in storage container, and food bowls on a table"
        />
      </picture>
    </div>
  );
}

export default HeroPicture;
