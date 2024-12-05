```javascript
// Incorrect usage of useState hook inside a loop
const [items, setItems] = useState([]);

for (let i = 0; i < 10; i++) {
  setItems((prevItems) => [...prevItems, { id: i, value: `Item ${i}` }]);
}
```