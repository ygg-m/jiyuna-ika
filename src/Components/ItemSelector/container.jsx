import { AllItems, BsArrowLeft, BsArrowRight } from "../Cookie/index";

export const ItemSelector = ({ setIndex, index, itemList }) => {
  return (
    <div className="index-buttons">
      {/* <AllItems list={itemList} /> */}

      <button onClick={() => setIndex(index - 1)} className="btn-1">
        <BsArrowLeft />
      </button>
      <button className="btn-2">see all</button>
      <button
        onClick={() => {
          setIndex(index + 1);
        }}
        className="btn-3"
      >
        <BsArrowRight />
      </button>
    </div>
  );
};
