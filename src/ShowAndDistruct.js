function Box({content}) {
  return <div>{content}</div>
}
export default function ShowAndDistruct() {

 const array = [1, 2, 3, 4, true, false, [], 'string'];
  return (
    <div>
   {JSON.stringify(array)}
   <br />
   <h1>Distruct</h1>
   <Box content='string1' />
    </div>
  );
}