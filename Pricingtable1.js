import { FaCheck } from 'react-icons/fa';

function Pricingtable1(props) {
  return (

    <div style={{ display: "inline-block" }}>
    <div className="card" style={{ width: "18rem", borderRadius: "10px", backgroundColor: "white", marginLeft: "60px" }}>
    <div className="card-body" >
    <h5 className="card-title text-muted text-uppercase text-center" style={{marginLeft: "120px",fontSize: "0.9rem", fontWeight: " bold", padding: "5px"
          }}>{props.id}</h5>
    <h6 className="card-price text-center" style={{ marginLeft: "90px", fontSize: "50px", marginTop: "15px", marginBottom: "15px" }}>{props.id1}<span classname="period" style={{ paddingTop: "10px", fontSize: "15px", fontWeight: "lighter" }}>{props.name}</span></h6>
    <hr />
    <ul className="FaCheck">
      <p><FaCheck /> {props.li}</p>
      <p ><FaCheck /> {props.li2}</p>
      <p ><FaCheck /> {props.li3}</p>
      <p ><FaCheck /> {props.li4}</p>

      <p > <span>{props.logo}</span> <span className="gray">{props.li55}</span> <span>{props.logo2}</span>{props.li5}</p>
      <p ><span>{props.logo}</span><span className="gray">{props.li66}</span> <span>{props.logo2}</span> {props.li6}</p>
      <p ><span>{props.logo}</span> <span className="gray">{props.li77}</span><span>{props.logo2}</span>{props.li7}</p>
      <p ><span>{props.logo}</span><span>{props.logo1}</span><span className="gray">{props.li88}</span> {props.li8}</p>
    </ul>
    <button className="btn btn-primary">BUTTON</button>
    </div>
    </div>
    </div>


  )
}
export default Pricingtable1;
