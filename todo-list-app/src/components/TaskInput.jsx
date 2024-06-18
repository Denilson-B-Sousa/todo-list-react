/* eslint-disable react/prop-types */

import { useState } from "react"

export function TaskInput({onAddTask}) {

    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        if(input.trim()) {
            onAddTask(input);
            setInput("");
        }
    }

    return( 
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={input}
                placeholder="Adicione uma nova tarefa"
                onChange={(e) => setInput(e.target.value)}

            />
            <button type="submit">Adicionar</button>
        </form>
    )
}