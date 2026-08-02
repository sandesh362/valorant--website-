import { useNavigate } from "react-router-dom";
import { socialMedia } from "../../constants";
import { riotlogogray } from "../../assets";
import styles from "../../style";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-white/10 pb-8 bg-[#0f1923]">
      <ul className="pt-8 pb-4 flex flex-row items-center justify-center">
        {socialMedia.map((social) => (
          <li key={social.id} className="m-2 p-3 cursor-pointer bg-[#292929] rounded-[10px] border border-white/5 transition hover:-translate-y-0.5 hover:bg-[#3a3a3a]">
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              <img src={social.icon} alt={social.name} />
            </a>
          </li>
        ))}
      </ul>
      <div className="flex justify-center align-center px-6 py-5">
        <ul className="flex sm:flex-row flex-col justify-center align-center gap-1">
          <li className="font-poppins font-semibold transition-all ease-in duration-300 relative cursor-pointer text-center text-[13px] hover:bg-white/10 px-4 py-2 rounded-[8px] uppercase text-white">
            <button onClick={() => navigate("/privacy")}>PRIVACY NOTICE</button>
          </li>
          <li className="font-poppins font-semibold transition-all ease-in duration-300 relative cursor-pointer text-center text-[13px] hover:bg-white/10 px-4 py-2 rounded-[8px] uppercase text-white">
            <button onClick={() => navigate("/TermsAndServices")}>TERMS OF SERVICE</button>
          </li>
          <li className="font-poppins font-semibold transition-all ease-in duration-300 relative cursor-pointer text-center text-[13px] hover:bg-white/10 px-4 py-2 rounded-[8px] uppercase text-white">
            <button onClick={() => navigate("/CookiePreference")}>COOKIE PREFERENCES</button>
          </li>
        </ul>
      </div>
      <div className={`py-4 ${styles.flexCenter}`}>
        {/* You can add additional content here */}
      </div>
      <div className="mx-auto text-center max-w-[640px]">
        <p className="mx-auto text-[#7e7e7e] text-[13px]">
          {/* Footer text goes here */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
