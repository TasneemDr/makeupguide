import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import "./questions.css";
import data from '../data.json'
const Questions = ({ setResult }) => {
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(`${e.target.price.value} \n${e.target.hautton.value}\n${e.target.hauttyp.value}\n${e.target.brand.value}`)
        const found = data.foundations.filter(i => {
            if (i.hautton == e.target.hautton.value && i.hauttyp == e.target.hauttyp.value && e.target.brand.value == 'all'? true : i.brand == e.target.brand.value){
                
                return i
            }
        })
        setResult(found)
        // Daten in den Local Storage schreiben
        // localStorage.setItem('quest', JSON.stringify(quest));

        navigate('/product')

    };

    return (
        <>
            <div className='questions-container'>
                <div className="questions">
                    <h2>Umfrage zu Ihren Bedürfnissen und Vorlieben beim Make-up</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="hautton">Welchen Hautton haben Sie?</label>
                            <br></br>


                            <select
                                name="hautton"
                            >
                                <option value=""> </option>

                                <option value="hell"> Hell</option>
                                <option value="mittel">  Mittel</option>
                                <option value="dunkel"> Dunkel </option>
                                <option value="sehr dunkel">Sehr dunkel</option>
                            </select>




                        </div>

                        {/* <div className="form-group">
                            <label htmlFor="cost"> Wie viel sind Sie bereit, für Make-up-Produkte auszugeben?</label>
                            <br></br>
                            <input className='inputt'
                                type="text"
                                name="price"
                            />
                        </div> */}

                        <div className="form-group">
                            <label htmlFor="skinType">Welchen Hauttyp haben Sie? </label>
                            <br></br>
                            <select
                                name="hauttyp"

                            >
                                <option value=""> </option>

                                <option value="trocken"> Trocken</option>
                                <option value="olig"> Ölig</option>
                                <option value="mischhaut">Mischhaut (trockene und ölige Bereiche)</option>
                                <option value="normal">Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="marke">Welche Marken von Make-up-Produkten mochten Sie?</label><br></br>
                            <select
                                name="brand"

                            >
                                <option value=""> </option>

                                <option value="fitme">Fitme</option>
                                <option value="maybeline">Maybeline</option>
                                <option value="L'orial">L'orial</option>
                                <option value="Siphora">Sephora</option>
                                <option value="Tahseen Beauty">Tahseen Beauty</option>
                                <option value="Huda Beauty">Huda Beauty</option>
                                <option value="all">All</option>
                            </select>
                        </div>


                        <button type='submit'>Go</button>


                    </form>
                </div>
            </div>
        </>
    );
};

export default Questions;



