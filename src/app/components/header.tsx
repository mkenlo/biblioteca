import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons'


function TxtLogo(){
    return (
    <div >
        <h1 className="text-4xl font-bold"><a href="#">BIBLIOTECA</a></h1>
    </div>);
}

function SearchBar(){
    return (
        <div className="rounded-lg p-2 bg-stone-50 mx-8 flex flex-row ">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" className="border-none ml-2 " name="keySearch" placeholder="Search name of the book" /> 
        </div>
    );
}

function Profile(){
    return (<div className="flex flex-row justify-between">
        <div className="bg-orange-300 rounded-full border-gray-400 border-solid inline w-100 h-100 p-2">
          <FontAwesomeIcon icon={faUser}/>
        </div>
        <p>Jane Doe <span><FontAwesomeIcon icon={faCaretDown}/></span></p>
        
    </div>);
}

export default function Header(){
    return (
        <div className="flex justify-between">
            <TxtLogo />
            <SearchBar />
            <Profile />
        </div>
    );
}