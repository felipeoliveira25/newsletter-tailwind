/* eslint-disable react/prop-types */
const Form = ({onSubmit}) => {
    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value
        const email = event.target[1].value
        onSubmit({name, email})
        console.log(`O email é ${email} e o nome é ${name}`)
    }
    
    return(
        <form className="h-full flex flex-col items-center justify-center gap-10 -mt-20" onSubmit={safeSubmit}>
            <input type="text" placeholder="Insira seu nome..."/>
            <input type="email" placeholder="Insira seu e-mail..." />
            <button type="submit" className="px-7 py-2 text-gray-100 rounded-full bg-sky-950 dark:bg-gray-500 hover:bg-gradient-to-r hover:from-sky-600 hover:to-sky-800">Seguir</button>
        </form>
    )
}

export default Form