import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "@/styles/PaintingView.module.css";
function PaintingView() {
  return (
    <>
      <div className="row p-0 m-0">
        <div className="col-sm-7">
          <div className={styles.painting_text_content}>
            <div className={styles.painting_text_header}>
              <div data-aos="fade-right" data-aos-delay={1200} className={styles.text_header_top}>Odio morbi</div>
              <div data-aos="fade-left" data-aos-delay={1200} className={styles.text_header_main}>Urna aliquam tinc</div>
              <div data-aos="fade-right" data-aos-delay={1200} className={styles.text_header_bottom}>
                Aliquam pellentesque
              </div>
            </div>
            <div data-aos="fade-right" data-aos-delay={1200} className="d-flex flex-column flex-sm-row">
              <div className="col-sm-3"></div>
              <div className="col-sm-9">
                Sed nunc nunc sagittis nulla varius. Vitae justo volutpat dolor
                ac. Elementum sed aliquet lorem sapien volutpat. In sed velit
                pretium sed. In quisque adipiscing congue faucibus. Enim orci
                feugiat mattis ultricies enim arcu cras mattis aliquet.
                Consequat amet amet mauris ac at est erat. Diam egestas volutpat
                purus accumsan nulla tellus faucibus. Viverra eleifend amet
                egestas tincidunt posuere
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay={1200} className="col-sm-5 p-0 m-0 py-4">
          <LazyLoadImage className="img-fluid" src="/assets/img9.png" alt="image09" />
        </div>
      </div>
    </>
  );
}

export default PaintingView;
