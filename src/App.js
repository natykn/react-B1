import logo from './logo.svg';
import './App.css';
import restaurant from "./imagentest.png";
import { useEffect, useState, useReducer } from 'react';
import { Routes, Route } from "react-router-dom";
import { Home, About, Events, Contact, Whoops404, Service, CompanyHistory, Location } from "./Pages";

const dishes = [
  "Macarroni and Cheese",
  "Salmon",
  "Tofu",
  "bread"
];

//convert a array into a object, to be displayed in a ul
const dishObject = dishes.map((dish, i) => ({ id: i, title: dish }));
console.log(dishObject);


// example 2 using 

function SecretComponent() {
  return <h1>Secret information for authorized user only.</h1>
}
function RegularComponent(props) {
  return <h1>Everyone can see this component.</h1>
}


function App({ authorized, login }) {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="service" element={<Service />} />
          <Route path="companyHistory" element={<CompanyHistory />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Whoops404 />} />
      </Routes>
      <h1>Hello Naty testing Library</h1>
    </div>
  )

  const [emotion, setEmotion] = useState("Happy");

  // const [checked, setChecked] = useState(false); line replaced by useReducer
  const [checked, toggle] = useReducer((checked) => !checked, false);

  // function toggle(){
  //   setChecked((checked)=>!checked)
  // }

  //side effects that are not related to the component's render
  useEffect(() => {
    console.log(`it is ${emotion} around here`)
  }, [emotion])



  console.log(`${login} `)

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);

    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);
  console.log(error);
  console.log("---------" + JSON.stringify(error, null, 2));

  if (loading) return <h1>Loading ... </h1>

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  if (!data) return null;



  if (data) {
    //return<>{JSON.stringify(data)}</>
    return (
      <div>

        <h1>data.name</h1>
        <h1>data.location</h1>
        <img alt={data.login} src={data.avatar_url} />
      </div>
    );
  }

  return <div>No user available</div>



  //useeffect example
  // return (
  //   <>
  //   {authorized ?<SecretComponent/> :<RegularComponent/>}
  //   <h1>Current emotion is {emotion} </h1>
  //   <button onClick={()=> setEmotion("frustated")} >Frustate</button>
  //   <button onClick={()=> setEmotion("Happy")} >Happy</button>

  //   <input type="checkbox" 
  //         value={checked} 
  //         onChange={toggle} />
  //   <p>{checked ? "checked" : "not checked" }</p>



  //   </>
  // )
}


// function Header(props) {
//   //props hold all the different properties for a component
//   console.log(props);
//   return (
//     <header>
//       <h1>{props.name}'s restaurant</h1>
//     </header>
//   );
// }

// function Main(props) {
//   return (
//     <section>
//       <p>We serve the most {props.adjective} food around.</p>
//       <img src={restaurant} height={300} alt="napkin and fork an restaurant" />
//       <ul style={{ textAlign: "left" }}>
//         {props.dishes.map((dish, i) => (
//           <li key={dish.id}>{dish.title}</li>
//         ))}
//       </ul>
//     </section>
//   );
// }


// function Footer(props) {
//   return (
//     <footer><p>it is true {props.year}</p></footer>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//     <Header name="Naty"/>
//     <Main  adjective="amaizing" dishes={dishObject}/>
//     <Footer year={new Date().getFullYear()}/>
//      <h2>hello</h2>
//      <h3>buy</h3>
//     </div>
//   );
// }

export default App;
