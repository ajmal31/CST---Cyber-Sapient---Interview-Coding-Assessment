import { useEffect, useState } from "react";
import BookCard from "./BookCard";

function App() {
  const [books, setBooks] = useState([]);
  const [showIndex,setShowIndex]=useState(null)

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://mocki.io/v1/6c6e1d2d-51c8-4ce7-8113-2f6a2b873227"
      );
      const data = await response.json();
      setBooks(data?.books);
    } catch (error) {
      console.log("error occured while calling api", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>

        <div style={{ border: "", marginTop: "30px" }}>
          {books.map((value, index) => {
            return (
              <>
                <BookCard
                  title={value.title}
                  author={value.author}
                  key={index}
                  showCard={showIndex===index}
                  index={index}
                  setShowIndex={setShowIndex}
                  showIndex={showIndex}

                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
