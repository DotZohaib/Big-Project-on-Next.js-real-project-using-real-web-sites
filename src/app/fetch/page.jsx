import React from "react";

const fetch = () => {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    let value = await fetch("https://jsonplaceholder.typicode.com/posts");
    let newValue = await value.json();
    setCards(newValue);
    console.log(newValue);

    useEffect(() => {
      fetchData();
    }, []);
  };
  return (
    <div>
      {cards.map((card) => {
        return (
          <div key={card.id}>
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>{card.userId}</span>
          </div>
        );
      })}
    </div>
  );
};

export default fetch;
