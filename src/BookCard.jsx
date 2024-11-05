const BookCard = ({ title, author, showCard, setShowIndex, index,showIndex }) => {

  const handleCard = () => {
    if(index===showIndex)setShowIndex(null)
      else setShowIndex(index);
    
  };
  
  return (
    <div style={{ border: "solid 1px" }}>
      <button onClick={handleCard}>{showCard ? "open" : "close"}</button>
      {showCard ? (
        <div>
          <h1>Title : {title}</h1>
          <h1>author : {author} </h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BookCard;
