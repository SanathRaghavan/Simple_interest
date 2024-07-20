
import './App.css'
import Button from '@mui/material/Button';
import { useState } from 'react';
import ReactSpeedometer from "react-d3-speedometer";



function App() {
  const [principle , setPrinciple] = useState(0)
  const [rate , setRate] = useState(0)
  const [interest , setInterest] = useState(0)
  const [isPrinciple , setIsPrinciple] = useState(true)
  const [isRate , setIsRate] = useState(true)


  const validate = (e)=>{
   const name = e.target.name
   const value = e.target.value
   
    if(!!value.match(/^[0-9]*$/)){
    if(name=='principle'){
      setPrinciple(value)
      setIsPrinciple(true)
    }else if(name=='rate'){
      setRate(value)
      setIsRate(true)
    }
   }else{
    if(name=='principle'){
      setPrinciple(value)
      setIsPrinciple(false)
    }else if(name=='rate'){
      setRate(value)
       setIsRate(false)
    }

   }
    
   


     
  }



  const handleReset = ()=>{
   setPrinciple(0)
   setRate(0)
   setIsPrinciple(true)
   setIsRate(true)
  }

  const handleCalculate =(e)=>{
    e.preventDefault()
    if(principle=="" || rate==""){
      alert('pleas fill the form completely')
    }else{
      setInterest(Math.floor(principle / ((rate * rate) / 10000)))
    }
  }

  return (
    <>
      <div >
        <div className='container' style={{backgroundColor:'black' , height:'100vh'}}>
        <div className='row ' >
              



        <div className='col-md-6'>
          
            <div className='row ms-5'>
              <div className='col-md-4 ' >

          <h1 style={{marginTop:'100px', color:'white'}}>BMI Calculator</h1>
          <h5 style={{color:'white'}}>Calculate Your bodymassindex</h5>
          <div className='d-flex mt-4'>
            <Button variant="outlined" className='border-white  text-white' >Male</Button>
            
            <Button variant="outlined"  className='  border-white  text-white ms-2' >Female</Button>

            
            </div>
            
          </div>
          <div className='col-md-2 mt-5 ' >
          <ReactSpeedometer
              width={300}
              needleHeightRatio={0.65}
              value={interest}
              segments={4}
              customSegmentStops={[0, 18, 25, 30, 58]}
              minValue={0}
              maxValue={58}
              currentValueText="BMI"
              customSegmentLabels={[
                {
                  text: "under",
                  position: "INSIDE",
                  color: "#555"
                },
                {
                  text: "healthy",
                  position: "INSIDE",
                  color: "#555"
                },
                {
                  text: "over",
                  position: "INSIDE",
                  color: "#555",
                  
                },
                {
                  text: "Obesity",
                  position: "INSIDE",
                  color: "#555"
                },

              ]}
              ringWidth={47}
              needleTransitionDuration={3333}
              needleTransition="easeElastic"
              needleColor={"#90f2ff"}
              textColor={"#d8dee9"}

            /> 

            <div>

              
            </div>
          </div>
         
        </div>
          
          
       
         
        
          <form style={{marginLeft:'60px'}} onSubmit={handleCalculate}>
            
            <div className='mb-3 '>
            
             
            <input type="Weight"  value={principle ||""} style={{width:'90%', height:'50px' ,borderColor:'white' , backgroundColor:'black'  }} className='rounded , text-white' name='principle' onChange={(e)=>validate(e)} placeholder= "Weight" />  
                
                  {!isPrinciple &&
                    <p className='text-danger'>*Invalid Input</p>
                    }
                  
                
            </div>

            <div className='mb-3 mt-4 '>
           
            
            <input type="Height"  value={rate ||""} style={{width:'90%' , height:'50px' , borderColor:'white' , backgroundColor:'black'}} className='rounded , text-white' name='rate' onChange={(e)=>validate(e)} placeholder= "Height" />  
                


                {!isRate &&
                  <p className='text-danger'>*Invalid Input</p>
                  }
              
            
            </div>
            
            <div className=' mt-5 ' style={{backgroundColor:'black'}} >
            <Button variant="outlined" className='border-white , text-white' style={{width:'120px',padding:'10px'}} disabled={isPrinciple && isRate? false:true} type='submit'>Calculate</Button>
            
            <Button variant="outlined"  style={{width:'120px',padding:'10px'}} className='ms-3  border-white  text-white' onClick={handleReset}>Reset</Button>
            </div>

            </form>  
          
          </div>
        
        
        <div className='col-md-6 ' style={{marginTop:'100px' , backgroundColor:'black' }}>
       
        <img src="https://keffecttraining.com/static/hero-workout-img-7bce79d31f9410b9fd5169a976689d51.png" alt="" width="60%"/>
             
             <div className='mt-3 ' style={{marginLeft:'100px' }}>
             <h1 style={{color:'white' , fontSize:'300% ' , fontWeight:'700'}}>Your BMI is = {interest} </h1>   
             </div>  
        </div> 
        
      </div>
      </div>
      </div>
    </>
  )
}

export default App






