export const AllItems = ({ itemList, itemIndex }) => {
  return (
    <div className="all-cookies">
      {itemList.map((cookie, index) => {
        const { img } = cookie;
        return (
          <>
            <div className={index === itemIndex ? "cookie active" : "cookie"}>
              <div className="img">
                <img src={img} className="img-fit" alt="" />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
