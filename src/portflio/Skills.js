import Progress from "./Progress"
import './Skills.css'
export default function Skills()
{
    return(
        <div className="all">
            <div className="container">
            <br/> <br/>
            <h1 className="top">
                Skills
            </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                 It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged  It was popularised in the 1960s with the release of Letraset sheets 
                containing Lorem Ipsum passages  and 
                more recently with desktop publishing software </p>
             </div>   
             <br/><br/>
           <div className="container">
            <div className="row">  
           <div className="col-5 px-5">
            <p>My Focus</p> 
            <p>ui/ux design</p>
            <p>Responsive design</p>
            <p>mobile App design</p>
            <p>web design</p>
           </div>
           <div className="col-5">
            <Progress value="90" name="HTML"/> <br/>
            <Progress value="90" name="CSS"/> <br/>
            <Progress value="70" name="javaScript"/> <br/>
            <Progress value="70" name="React"/> <br/>
            <Progress value="90" name="photoshop"/> <br/>
            <Progress value="70" name="Adobe XD"/> <br/>
            <Progress value="60" name="Node js"/> <br/>
            <Progress value="50" name="word press"/> <br/>
           </div>
           </div>  
           </div>
        </div>
    )
}