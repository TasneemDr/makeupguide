
import './Product.css'
 

function Product({result}) {
    console.log(result);
    return (
      
        <div className='card-container'>
            {result && result.map(i =>
            <div className='card-item'>
                <img src={i.pic} alt="" />
                <dir className="card-content">
                    <h2>{i.name}</h2>
                    <p>{i.description}</p>
                </dir>


            </div>)}

            
        </div>  )}





export default Product
