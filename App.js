import "./styles.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");
  const [instruction, setInstruction] = useState("");
  const [pepproni, setPepproni] = useState("");
  const [glutenfree, setGlutenfree] = useState("");

  const handler = () => {
    const order = `<h2>Order for ${quantity} ${size} pizza(s) that are ${
      pepproni ? `have pepproni` : `not pepproni`
    }
    and
    ${glutenfree ? `have gluten-free` : `not gluten-free`}  for ${name}</h2>
                <h1>Instructions: ${instruction}</h1>`;
    document.getElementById("root").innerHTML = order;
  };

  return (
    <form onSubmit={handler}>
      <h1>Wellcome to Pizza Hut</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8VDTrnpjUPbfYkTkU8oswyKANmPRE7WA4w&usqp=CAU" />
      <div>
        <label>
          Enter the name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Size:
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option>Large</option>
            <option>Medium</option>
            <option>Small</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Pepproni
          <input
            type="checkbox"
            value={pepproni}
            onChange={(e) => setPepproni(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Gluten Free
          <input
            type="checkbox"
            value={glutenfree}
            onChange={(e) => setGlutenfree(e.target.value)}
          />
        </label>
      </div>
      <div id="quantity">
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
      </div>
      <div>
        <p>Addtitional Instructions</p>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          class="box message"
          placeholder="message"
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
        ></textarea>
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
}
