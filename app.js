
const Sidebar =() =>{
    return(
        <div className ="sidebar">
             <p>DashBoard</p>
             <p>Widget</p>
             <p>Reviews</p>
             <p>Customers</p>
             <p>Online Analysis</p>
             <p>Settings</p>
            
        </div>
    )
}

const Reviews =() =>{
    return (
        <div className ="reviews">
            <p>Reviews</p>
            <p className ="number"> 1,281</p>
        </div>
    )
}

const AverageRating = () =>{
    return (
        <div className ="averages">
            <p>Average Rating</p>
            <p className ="number"> 4.6</p>
        </div>
    )
}

const SentimentAnalysis = () =>{
    return (
        <div className ="sentiments">
            <p>Sentiment Analysis</p>
            <p className ="analysisnums"> 960 </p>
            <p className ="analysisnums"> 122 </p>
            <p className ="analysisnums"> 321 </p>
        </div>
    )
}
const Header =() => {
    return (
        <div className ="header">
            <Reviews />
            <AverageRating />
            <SentimentAnalysis />
        </div>
    )
}
const Footer =() => {
    return (
        <div className ="footer">
           <p>WebSite Visitors </p>
           <p className ="number">821 </p>
           <div className ="chart">

           </div>
        </div>
    )
}

const Mainbar =() =>{
    return(
        <div className ="mainbar">
           <Header />
           <Footer />
       </div>
   )
}
const App =() =>{
    return(
      
         <div className ="container">
            <Sidebar />
            <Mainbar />
        </div>
    )
}

ReactDOM.render(
    <App />,document.querySelector('main')
)

