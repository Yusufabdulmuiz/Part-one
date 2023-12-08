import { useState } from 'react'
// import Button from "./Button";


const Display = ({header})=> {
    return (<>
    <h1>{header.title}</h1>
    </>)

} 
const StatisticLine = (props) => {
  return(
<tr><th>{props.text}{props.value}{props.sign}</th></tr>
  )
}

const Statistic = (props)=>{
 if ( props.good === 0 && props.bad===0 && props.neutral ===0 ){return( <h1>No Feedback Given</h1>) }
return (
  <div>

  
  <h2>Statistic</h2>
  <table>
   <tbody>
    <StatisticLine text="good" value={props.good}/>
    <StatisticLine text="bad" value={props.bad}/>
    <StatisticLine text="neutral" value={props.neutral}/>
    <StatisticLine text="average" value={props.average}/>
    <StatisticLine text="total" value={props.total}/>
    <StatisticLine text="positive" value={props.positive} sign="%"/>
    </tbody>
    
    
    </table>
    </div>
)
}


const App = () => {
 
  const content = { title:"give feedback",}
   
  
   const [good, setLeft] = useState(0)
  const [bad, setRight] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [average, setAverage] = useState(0)
  // const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    // setAll(allClicks.concat('Good'))
    const updateGood = good + 1;
    setLeft(updateGood)
    setTotal(updateGood + bad + neutral)
    setAverage(updateGood - bad/total)
    setPositive((updateGood / total) * 100)
  }

  const handleBad = () => {
    // setAll(allClicks.concat('Bad'))
        const updateBad = bad + 1;

    setRight(updateBad)
    setTotal(good + updateBad + neutral )
    setAverage((good - updateBad)/ total)

  }

  const handleNeutral = () => {
    // setAll(allClicks.concat('Neutral'),{neutral})
        const updateNeutral = neutral + 1;
    setNeutral(updateNeutral + 1)
    setTotal(good + bad + updateNeutral)
  }

  
  

  return (
    <div>
      <Display header={content}/>
      
      <button onClick={handleGood}>Good</button>
      <button onClick={handleBad}>Bad</button>
      <button onClick={handleNeutral}>Neutral</button>
    <Statistic neutral={neutral} good={good} bad={bad} average ={average} total={total} positive={positive}/>
    </div>
  )
}

export default App