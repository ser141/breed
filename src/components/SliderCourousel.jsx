import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SliderCourousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <section className="w-96">
      <Slider {...settings}>
        <h1>test</h1>
        <h5 className="name">name</h5>
        <p className="title">title</p>
        <p className="text">text</p>
      </Slider>
    </section>
  );
}
export default SliderCourousel;
