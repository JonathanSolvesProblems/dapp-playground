// import ListGroup from './components/ListGroup';
import Button from './components/Button';
import Alert from './components/Alert';
import { useState } from 'react';

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

*/
