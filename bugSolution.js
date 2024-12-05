```javascript
// Correct usage of useState hook to prevent unnecessary rerenders
const [items, setItems] = useState([]);

const initialItems = [];
for (let i = 0; i < 10; i++) {
  initialItems.push({ id: i, value: `Item ${i}` });
}

useEffect(() => {
  setItems(initialItems);
}, []);
```