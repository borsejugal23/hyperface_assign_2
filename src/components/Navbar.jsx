import Spinner from "./Spinner"


const Navbar=()=>{
 return <div>
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-around", marginTop:"10px"}}>
    <span style={{fontSize:"30px"}}>Social</span>
    <div style={{display:"flex",width:"50%",justifyContent:"space-around"}}>
        <span style={{color:"blueviolet", fontWeight:"bold"}}>Feature</span>
        <span style={{color:"blueviolet", fontWeight:"bold"}}>Discover</span>
        <span style={{color:"blueviolet", fontWeight:"bold"}}>Stories</span>
        <span style={{color:"blueviolet", fontWeight:"bold"}}>Community</span>
        <span style={{color:"blueviolet", fontWeight:"bold"}}>Block</span>
    </div>
    <div style={{display:"flex",width:"20%",  alignItems:"center",justifyContent:"space-evenly"}}>
        <span>Login</span>
        <button style={{borderRadius:"15px", backgroundColor:"#B388FF", color:"white", border:"none", margin:"2px", padding:"10px"}}>See details</button>
    </div>
 </div>
 
 
  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' ,justifyContent:"space-between",width:"60%",margin:"auto"}}>
      <input
        type="text"
        placeholder="Entry1, Entry2, ..."
        style={{
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          outline: 'none',
          marginBottom:"400px"
        }}
      />
      <button
        style={{
          padding: '8px 12px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom:"400px"

        }}
      >
        Add
      </button>
      <Spinner/>
  </div>

 </div>
}
export default Navbar