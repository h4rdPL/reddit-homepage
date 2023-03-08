import arrow from "../../../assets/images/icon-down.svg";
import gaming from "../../../assets/images/gaming.svg";
import sport from "../../../assets/images/bicycle.svg";
import barChart from "../../../assets/images/bar-chart.svg";
import wallet from "../../../assets/images/wallet.svg";
import tv from "../../../assets/images/tv.svg";
import star from "../../../assets/images/star.svg";
import more from "../../../assets/images/more.svg";
import settings from "../../../assets/images/settings.svg";
import download from "../../../assets/images/download.svg";
import popular from "../../../assets/images/popular.svg";
import "./sidebar.scss";
interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar(props: SidebarProps) {
  const toggleSubmenu = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const submenu = e.currentTarget.nextElementSibling;
    submenu?.classList.toggle("submenu--active");
  };

  return (
    <div className={props.isOpen ? "sidebar sidebar--active" : "sidebar"}>
      <ul className="sidebar__list">
        <span className="sidebar__theme">Feeds</span>
        <li>
          <span onClick={toggleSubmenu} className="sidebar__wrapper">
            <span>
              <img src={popular} alt="popular" />
              <a href="#"> Popular</a>
            </span>
          </span>
        </li>
        <span className="sidebar__theme">Topics</span>
        <li>
          <span onClick={toggleSubmenu} className="sidebar__wrapper">
            <span>
              <img src={gaming} alt="gaming" />
              <a href="#">Gaming</a>
            </span>
            <span>
              <img src={arrow} alt="arrow" />
            </span>
          </span>
          <ul className="submenu">
            <li>
              <a href="#">AskReddit</a>
            </li>
            <li>
              <a href="#">NoStupidQuestions</a>
            </li>
            <li>
              <a href="#">DestinyTheGame</a>
            </li>
            <li>
              <a href="#">Explainlikeimfive</a>
            </li>
            <li>
              <a href="#">AskMen</a>
            </li>

            <li>
              <a href="#">Leagueoflegends</a>
            </li>
            <li>
              <a href="#">Minecraft</a>
            </li>
            <li>
              <a href="#">See more</a>
            </li>
          </ul>
        </li>
        <li>
          <span onClick={toggleSubmenu} className="sidebar__wrapper">
            <span>
              <img src={sport} alt="sport" />
              <a href="#">Sport</a>
            </span>
            <span>
              <img src={arrow} alt="arrow" />
            </span>
          </span>

          <ul className="submenu">
            <li>
              <a href="#">AskReddit</a>
            </li>
            <li>
              <a href="#">NoStupidQuestions</a>
            </li>
            <li>
              <a href="#">DestinyTheGame</a>
            </li>
            <li>
              <a href="#">Explainlikeimfive</a>
            </li>
            <li>
              <a href="#">AskMen</a>
            </li>

            <li>
              <a href="#">Leagueoflegends</a>
            </li>
            <li>
              <a href="#">Minecraft</a>
            </li>
            <li>
              <a href="#">See more</a>
            </li>
          </ul>
        </li>
        <li>
          <span onClick={toggleSubmenu} className="sidebar__wrapper">
            <span>
              <img src={barChart} alt="barChart" />
              <a href="#"> Business, Economics</a>
            </span>
            <span>
              <img src={arrow} alt="arrow" />
            </span>
          </span>
        </li>
        <li>
          <span onClick={toggleSubmenu} className="sidebar__wrapper">
            <span>
              <img src={wallet} alt="wallet" />
              <a href="#"> Crypto</a>
            </span>
            <span>
              <img src={arrow} alt="arrow" />
            </span>
          </span>
        </li>
        <li>
          <span onClick={toggleSubmenu} className="sidebar__wrapper">
            <span>
              <img src={tv} alt="tv" />
              <a href="#"> Television</a>
            </span>
            <span>
              <img src={arrow} alt="arrow" />
            </span>
          </span>
        </li>

        <li>
          <span onClick={toggleSubmenu} className="sidebar__wrapper">
            <span>
              <img src={star} alt="star" />
              <a href="#"> Celebrity</a>
            </span>
            <span>
              <img src={arrow} alt="arrow" />
            </span>
          </span>
        </li>
        <li>
          <span onClick={toggleSubmenu} className="sidebar__wrapper">
            <span>
              <img src={more} alt="more" />
              <a href="#"> More Topics</a>
            </span>
            <span>
              <img src={arrow} alt="arrow" />
            </span>
          </span>
        </li>
      </ul>
      <ul className="sidebar__account ">
        <li>
          <span onClick={toggleSubmenu} className="sidebar__wrapper">
            <span>
              <img src={settings} alt="settings" />
              <a href="#"> settings</a>
            </span>
            <span>
              <img src={arrow} alt="arrow" />
            </span>
          </span>
        </li>
        <li>
          <span onClick={toggleSubmenu} className="sidebar__wrapper">
            <span>
              <img src={download} alt="download" />
              <a href="#"> Get app</a>
            </span>
          </span>
        </li>
      </ul>
    </div>
  );
}
