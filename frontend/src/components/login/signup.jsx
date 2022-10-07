import {useState, useEffect }from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector , useDispatch } from 'react-redux';
function signup(){
    const [formData, setFormData] = useState({
       name: '',
       email: '',
       password: '',
       password2: '',
    });
    const{name, email, password, password2} = formData;
    
}