@@ -3,13 +3,14 @@ import '../styles/App.css';

const App = () => {
  return (
    <div id="main"></div>
    <h1 data-ns-test="project-namr"> Online food selling App</h1>
    <dl data-ns-test="project-description">
    <dd>Sellling Sea Food , fishes nad meats  online</dd>
    <dl>
  )
}
    <>
      <h1 data-ns-test="project-name"> Online Food Selling App </h1>
      <dl data-ns-test="project-description">
        <dd>Selling Sea food, fishes and meats in online </dd>
      </dl>
    </>
  );
};


export default App;
