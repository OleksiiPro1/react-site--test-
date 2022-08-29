const FruitsObjects = [
  {id: 1, name: 'Banana'},
  {id: 2, name: 'apple'},
  {id: 3, name: 'orange'},
  {id: 4, name: 'kiwi'},
  {id: 5, name: 'mango'}
];
export default function MapOverArrays() {

    const listOfFruits = FruitsObjects.map((FruitsObject) => {
    return(
      <li key={FruitsObject.id}>
        {FruitsObject.name}
      </li>
   
    )
    });
  return (
    <ul>
  {listOfFruits}
    </ul>
  );
}