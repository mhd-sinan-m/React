import React, {Component} from "react";

class loop extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = { 
        data :[
            {
                id:12,
                name:"sinan",
                age:12
            },
            {
                id:10,
                name:"jhon",
                age:15
            }
        ]

     }
    render() { 
        return ( 
            <div>
                <ul>
                    {
                        this.state.data.map( (val,i)=>{
                            return <li key={i}>{val.name} - {val.age}
                            {console.log(i)}
                            </li>
                        })
                    }
                </ul>
            </div>
         )
    }
}
 
export default loop;