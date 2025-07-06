const h1 = React.createElement(
  "h1",
  { style: { color: "blue", textAlign: "center" }, className: "greeting" },
  "Hello, World!"
);

//first method for insert data in page
//ReactDOM.render(h1, document.getElementById('root'));

//second method for insert data in page
//ReactDOM.createRoot(document.getElementById('root')).render(h1);

//third method for insert data in page
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);