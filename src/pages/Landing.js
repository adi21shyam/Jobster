import { Logo } from "../components";
import main from "../assets/images/main.svg"
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

function Landing() {
    return (
      <Wrapper>
        <nav>
         <Logo />
        </nav>
        <div className="container page">
        {/*info*/}
          <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.</p>
          <Link to='/register' className='btn btn-hero'>
            Login / Register
          </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    );
  }

 
  
  export default Landing;
  