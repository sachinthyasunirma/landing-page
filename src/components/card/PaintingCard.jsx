import styles from "@/styles/Card.module.css";

function PaintingCard(props) {
  const { id, image_url, description, price, artist } = props;
  return (
    <div className="d-flex flex-column align-items-center align-items-sm-start mb-2 p-1">
      <div className={styles.image}>
        <img className="img-fluid" src={image_url} alt="image" />
      </div>
      <div className="d-flex flex-wrap mt-2 justify-content-center justify-content-sm-between align-items-center w-100 gap-3 gap-sm-0">
        <div className={styles.drawing_des}>{description}</div>
        <div className={styles.drawing_price}>
          {price?.toLocaleString("en-US")}
        </div>
      </div>
      <div className={styles.darwing_text}>{artist}</div>
    </div>
  );
}

export default PaintingCard;
