import React from 'react'
import SignupImg from '../assets/signup.png';
import Template from '../components/Template';



const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1 = "Build skills for today, tomorrow, and beyond."
      desc2 = "Education to future-proof your career"
      image={SignupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup