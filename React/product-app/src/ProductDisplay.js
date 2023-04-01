export const ProductDisplay = (props) => {
  console.log(props);
  return (
    <div className="product-data">
      {props.prodData.map((item) => {
        return (
          <div className="card">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Rs.{item.cost}</p>
              <p>{item.uses}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
