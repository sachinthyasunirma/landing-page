import PaintingCard from "../card/PaintingCard";

function PaintingGallery(props) {
  const { data } = props;
  return (
    <div className="d-flex d-block d-inline-flex flex-column flex-sm-row flex-wrap flex-md-nowrap justify-content-evenly">
      {data.map((el) => (
        <PaintingCard key={el.id} {...el} />
      ))}
    </div>
  );
}

export default PaintingGallery;