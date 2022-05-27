import React,{useState,useEffect} from 'react';
import axios from 'axios';

const FetchData = () => {

    const [users,setUsers] = useState([]);
    const URL = "https://api.github.com/users";

    const getUsers = async () => {
        // axios.get(URL)
        //     .then(response => setUsers(response.data));

        const response = await axios.get(URL);
        console.log(response);
        setUsers(response.data);
        //console.log(users);
    }
    useEffect( () => {
        getUsers();
    },[]);

  return (
    <div>
      <h1> Fetch Data Component </h1>
      <ul className='users row'>
        {users.map( el => {
            const {login,id,avatar_url : url, html_url} = el;
            return(
                <li key={id} className='col-4 shadow'>
                    <img src={url}
                    alt={html_url}></img>
                    <div>
                        <h5>{login}</h5>
                        <a href={html_url}>
                            Profile
                        </a>
                    </div>
                </li>
            );
        })}
      </ul>

    </div>
  )
}

export default FetchData
