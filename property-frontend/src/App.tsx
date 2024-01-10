import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Property from './components/Property';
import { useState, useEffect } from 'react';
import * as propertyData from '../metadata/homes.json';

function App() {
  const [properties, setProperties] = useState([]);

  const loadData = async () => {
    const totalProperties = 1;
    const holdProperties = [];
    for (let i = 0; i < totalProperties; i++) {
      const getMetadata = propertyData;
      holdProperties.push(getMetadata);
    }

    //  setProperties(holdProperties);

    // setProperties(holdProperties);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <NavBar />
      <SearchBar />
    </div>
  );
}

export default App;

/*

<ListGroup
items={items}
heading="Places"
onSelectItem={handleSelectedItem}
/>
   
const items = ['New York', 'Quebec', 'Toronto'];
const handleSelectedItem = (item: string) => {
console.log(item);
};

<Alert>
<span>Hello World</span>
<h1>Hello</h1>
</Alert>

function App() {
  const [alertVisible, setAlertVisibile] = useState(false);
  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibile(false)}>My alert</Alert>
      )}
      <Button
        text={'Hello There'}
        onClick={() => setAlertVisibile(true)}
        color="primary"
      ></Button>
    </>
  );
}

*/
