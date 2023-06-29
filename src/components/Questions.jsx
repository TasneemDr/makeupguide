import { useState } from 'react';
import "./questions.css";

const Questions = () => {

    const [quest, setQuest] = useState({
        hautton: "",
        cost: "",
        skinType: "",
        marke: ""
    });

    function handlechange(e) {
        setQuest({...quest,[e.target.name]:e.target.value})
        console.log(quest)
        }
    

    
    

    const handleSubmit = (e) => {
        e.preventDefault();

        // Daten in den Local Storage schreiben
        localStorage.setItem('data', quest.toString());
        

        // setHautton('');
        // setCost('');
        // setSkinType('');
        // setMarke('');
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
                        <input className='inputt'
                            type="text"
                            name="hautton"
                            value={quest.hautton}
                            onChange={handlechange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cost"> Wie viel sind Sie bereit, für Make-up-Produkte auszugeben?</label>
                        <br></br>
                        <input className='inputt'
                            type="text"
                            name="cost"
                            value={quest.cost}
                            onChange={handlechange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="skinType"> Welchen Hauttyp haben Sie? </label>
                        <br></br>
                        <select
                            name="skinType"
                            value={quest.skinType}
                            onChange={handlechange}
                        >

                            <option value=" Trocken"> Trocken</option>
                            <option value=" Ölig"> Ölig</option>
                            <option value="Mischhaut">Mischhaut (trockene und ölige Bereiche)</option>
                            <option value="Normal">Normal</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="marke">Welche Marken von Make-up-Produkten haben Sie bereits verwendet und mochten Sie?</label><br></br>
                        <input className='inputt'
                            type="text"
                            name="marke"
                            value={quest.marke}
                            onChange={handlechange}
                        />
                    </div>
                    <button type="submit">Click</button>
                </form>
            </div>
            </div>
        </>
    );
};

export default Questions;



