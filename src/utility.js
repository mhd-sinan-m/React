exports.handleChange = (event,component)=>{
    component.setState({
      [event.target.name]: event.target.value
    })
}
exports.storeItem = (event,component) =>{
    event.preventDefault()
    const {input,items} = component.state
 
    component.setState({
       items:[...items , input],
       input:""
    })  
 }
 exports.deleteItem = (key,component) =>{
   const {items} = component.state
   component.setState({
     items: items.filter((val,i)=> i !== key)
    })
 }