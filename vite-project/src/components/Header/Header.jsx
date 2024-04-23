/* eslint-disable react/prop-types */
import ToggleTheme from '../ToggleTheme/ToggleTheme'

const Header = ({user}) => {
    return(
        <div className="flex h-20  bg-sky-950 justify-between  items-center dark:bg-gray-600 px-5 sm:rounded-xl sm:m-5">
            <span className="text-slate-100">Olá, {user?.name  || "Usuário"}</span>
            <h1 className="text-slate-100 text-xl">Grid Newsletter</h1>
            <ToggleTheme/>
        </div>
    )
}

export default Header