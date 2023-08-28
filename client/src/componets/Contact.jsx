import React,{useEffect,useState} from 'react'
import '../style/contact.css';
import axios from 'axios';
const Contact = () => {
    const [userData , setUserData] = useState();
    const [message , setMessage] = useState({
        name:"",
        email:"",
        phone:"",
        message:""
    })
  

    const handleValue = (event) =>{
        const {name,value} = event.target;
        setMessage((pre)=>({
            ...pre,
            [name]:value
    }))
    }

    const handleSubmit =async (event) =>{
        event.preventDefault();
        try{
            await axios.post('http://localhost:400/message',message);

            //resest the message
            setMessage({
                name:"",
                email:"",
                phone:"",
                message:""
            })
            alert("message send succesfull");
        }catch(error){
            console.error('Error sending message:', error);
        }
    }


    useEffect(() => {
      const fetchData = async () => {
        const { data } = await axios.get("http://localhost:400/getdata");
        setUserData(data);
      }
      fetchData();
    }, [])

    return (
        <div className='contact'>
            <div className="upper">
                <div className="info">
                    <h2>Phone</h2>
                    <p>{userData && userData[0] ? userData[0].phone:"Unknow"}</p>
                </div>
                
                <div className="info">
                    <h2>email</h2>
                    <p>{userData && userData[0] ? userData[0].email:"Unknow"}</p>
                </div>
                <div className="info">
                    <h2>Address</h2>
                    <p>new delhi india</p>
                </div>
            </div>
            <div className="lower">
                <h1>Get in Touch</h1>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder='Your Name' name="name" value={message.name} onChange={handleValue}/>
                    <input type="text" placeholder='Your Email' name="email" value={message.email} onChange={handleValue}/>
                    <input type="text" placeholder='Your Phone Number' name="phone" value={message.phone} onChange={handleValue}/>
                    <textarea name='message' value={message.message} placeholder='message'onChange={handleValue} >message</textarea>
                    <button type='submit'>Send Message</button>
                </form>
            </div>

        </div>
    )
}

export default Contact