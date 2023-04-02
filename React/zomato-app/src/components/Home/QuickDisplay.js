const QuickDisplay = (props) => {
  const listMeal = ({ mealData }) => {
    if (mealData) {
      return mealData.map((item) => {
        return (
          <div class="tileContainer">
            <div class="tileItem1">
              <img src={item.meal_image} alt={item.mealtype} />
            </div>
            <div class="tileItem2">
              <div class="tileheading">{item.mealtype}</div>
              <div class="tilesubHeading">{item.content}</div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <>
      <div class="mainTileContainer">{listMeal(props)}</div>
    </>
  );
};

export default QuickDisplay;
