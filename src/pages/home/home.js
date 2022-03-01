import React from "react";
import "./home.css"
import Character from "../../Components/character/character";
import Http from "../../lib/request";

class Home extends React.Component{
    state={
        title:"Rick and Morty X React",
        characters:[],
    };
    
    componentDidMount = () => {
        this.getData(URL)
    };
    
    getData = async(api_url) => {
        const response = await Http.instance.get_characters()
        console.log(response)
        this.setState({ characters: response });
    };

    render(){
        return(
            <React.Fragment>
                <div className="back">
                    <div className="logoHolder">
                        <img className="logo" src="https://www.eggplante.com/wp-content/uploads/2020/06/Rick-Morty-Logo-1-1200x520.jpg" alt="Rick and Morty"/>
                    </div>
                    <div className="Characters">
                        {this.state.characters.map((character) => {
                            return <Character character = {character} />
                        } )}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
