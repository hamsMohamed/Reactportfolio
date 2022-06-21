import ProgressBar from 'react-bootstrap/ProgressBar';
export default function Progress(props)
{
   return(<>
       <label for="file">{props.name}</label>
       <ProgressBar variant="secondary" now={props.value} />
   </>

   ) 
}