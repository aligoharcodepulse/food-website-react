import Burger from './assets/burger.png'
import Pizza from './assets/pizza.png'
import French from './assets/french.png'

const App = () => {
  return (
    <div>

      {/* Header */}
        <div className="header">
          <input type="text" placeholder="Search Item" />
          <button>Search</button>
        </div>

        {/* Explore Foods */}
        <h1 style={{textAlign:'center', margin:'30px'}}>Explore Foods</h1>
        <div className='exploreFoods'>
          <img className='img-box' src={Burger}/>
          <img className='img-box' src={Pizza}/>
          <img className='img-box' src={French} />
        </div>

      {/* Food Menu */}
      <div className='FoodMenu'>
        <h1 style={{marginTop:30,marginBottom:30}}>Food menu</h1>
        <div className='row'>
        <div style={{display:'flex',width:'100%',border:'1px solid transparent',borderRadius:'7px',backgroundColor:'#fff', padding:10, margin:10}}>
        <img src={Burger} style={{width:70,height:70,marginRight:20, border:'1px solid transparent',borderRadius:'5px'}} />
            <div className='details'>
              <h3>Food Title</h3>
              <p>$2.3</p>
              <p>Made with italian sauce, chicken, and organice vegetables.</p>
              <button style={{padding:5, marginTop:5, backgroundColor:"crimson", color:'#fff',border:'0px solid transparent',borderRadius:'3px',cursor:'pointer'}}>Order Now</button>
            </div>
        </div>
              <div style={{display:'flex',width:'100%',border:'1px solid transparent',borderRadius:'7px',backgroundColor:'#fff', padding:10, margin:10}}>
        <img src={Burger} style={{width:70,height:70,marginRight:20, border:'1px solid transparent',borderRadius:'5px'}} />
            <div className='details'>
              <h3>Food Title</h3>
              <p>$2.3</p>
              <p>Made with italian sauce, chicken, and organice vegetables.</p>
              <button style={{padding:5, marginTop:5, backgroundColor:"crimson", color:'#fff',border:'0px solid transparent',borderRadius:'3px',cursor:'pointer'}}>Order Now</button>
            </div>
        </div>
        </div>


        <div className='row'>
        <div style={{display:'flex',width:'100%',border:'1px solid transparent',borderRadius:'7px',backgroundColor:'#fff', padding:10, margin:10}}>
        <img src={Burger} style={{width:70,height:70,marginRight:20, border:'1px solid transparent',borderRadius:'5px'}} />
            <div className='details'>
              <h3>Food Title</h3>
              <p>$2.3</p>
              <p>Made with italian sauce, chicken, and organice vegetables.</p>
              <button style={{padding:5, marginTop:5, backgroundColor:"crimson", color:'#fff',border:'0px solid transparent',borderRadius:'3px',cursor:'pointer'}}>Order Now</button>
            </div>
        </div>
              <div style={{display:'flex',width:'100%',border:'1px solid transparent',borderRadius:'7px',backgroundColor:'#fff', padding:10, margin:10}}>
        <img src={Burger} style={{width:70,height:70,marginRight:20, border:'1px solid transparent',borderRadius:'5px'}} />
            <div className='details'>
              <h3>Food Title</h3>
              <p>$2.3</p>
              <p>Made with italian sauce, chicken, and organice vegetables.</p>
              <button style={{padding:5, marginTop:5, backgroundColor:"crimson", color:'#fff',border:'0px solid transparent',borderRadius:'3px',cursor:'pointer'}}>Order Now</button>
            </div>
        </div>
        </div>


        <div className='row'>
        <div style={{display:'flex',width:'100%',border:'1px solid transparent',borderRadius:'7px',backgroundColor:'#fff', padding:10, margin:10}}>
        <img src={Burger} style={{width:70,height:70,marginRight:20, border:'1px solid transparent',borderRadius:'5px'}} />
            <div className='details'>
              <h3>Food Title</h3>
              <p>$2.3</p>
              <p>Made with italian sauce, chicken, and organice vegetables.</p>
              <button style={{padding:5, marginTop:5, backgroundColor:"crimson", color:'#fff',border:'0px solid transparent',borderRadius:'3px',cursor:'pointer'}}>Order Now</button>
            </div>
        </div>
        <div style={{display:'flex',width:'100%',border:'1px solid transparent',borderRadius:'7px',backgroundColor:'#fff', padding:10, margin:10}}>
        <img src={Burger} style={{width:70,height:70,marginRight:20, border:'1px solid transparent',borderRadius:'5px'}} />
            <div className='details'>
              <h3>Food Title</h3>
              <p>$2.3</p>
              <p>Made with italian sauce, chicken, and organice vegetables.</p>
              <button style={{padding:5, marginTop:5, backgroundColor:"crimson", color:'#fff',border:'0px solid transparent',borderRadius:'3px',cursor:'pointer'}}>Order Now</button>
            </div>
        </div>
          
        </div>
      </div>
    </div>
  )
}

export default App
