import React,{Component} from 'react';
import QuickDisplay from './DisplayComponent';

const url = "https://zomatoajulypi.herokuapp.com/quicksearch";

class Home extends Component {

    constructor(){
        super()

        this.state={
            keyword:'React App',
            mealType:''
        }
    }

    render(){
        return(
            <div>
                <QuickDisplay mealData={this.state.mealType}/>
            </div>
        )
    }

    ///api calling
    componentDidMount(){
        console.log('componentDidMount')
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.setState({mealType:data})
        })
    }
}

export default Home;