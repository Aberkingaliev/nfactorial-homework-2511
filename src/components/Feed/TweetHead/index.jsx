import GenerateIcon from '../../Icons/GenerateIcon'
import './index.css'

const TweetHead = () =>{
    return(
        <>
            <div className="Tweet-head">
                <p style={{fontSize: "20px", fontWeight: "700"}}>Home</p>
                <GenerateIcon Name="TwitterStars" Size="24px"/>
            </div>
        </>
    )
}

export default TweetHead