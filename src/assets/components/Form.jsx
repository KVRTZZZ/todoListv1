import React,{useState} from 'react'

const Form = () => {
    
    const [itemList, setItemList] = useState([]);
    const [tarefa, setTarefa] = useState('');
    
    function HandleChangeInput(e) {
        const inputTarefa = e.target.value;
        setTarefa(inputTarefa)
    }
    
    function handleAddItemlist(e) {
        e.preventDefault();
        
        if (!tarefa) {
            return
        }
        setItemList([...itemList, tarefa])
        setTarefa('')
        
    }
    
    
    
  return (
    <div className='todo'>
        <h1>Todo List</h1>
        <form onSubmit={handleAddItemlist}>
            <input type="text" placehold="Adicione alguma tarefa" onChange={HandleChangeInput} value={tarefa} />
            <button type="submit">Adicionar</button>
        </form>
        
        <ul className="todo-list">
        {itemList.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Form