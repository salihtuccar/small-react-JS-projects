const MenuItem = ({ item }) => {
  return (
    <div className="menuList">
      <div className="menuItem">
        <div>
          <img src={item.image} alt="" />
          <h3>{item.name}</h3>
          <p>{item.price} TL</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
