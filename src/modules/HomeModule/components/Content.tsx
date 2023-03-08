import popular from "../../../assets/images/popular.svg";
import arrow from "../../../assets/images/icon-down.svg";
import more from "../../../assets/images/more.svg";
import profile from "../../../assets/images/profile.png";
import hogwarts from "../../../assets/images/Hogwarts-legacy.png";

export const Content = () => {
  return (
    <>
      <section className="content">
        <h1 className="content__heading">Popular</h1>
        <div className="content__popular">
          <div className="content__tag">
            <img src={popular} alt="popular" />
            <h2 className="content__heading--gray">Popular</h2>
            <img src={arrow} alt="arrow" />
          </div>
          <div className="content__more">
            <img src={more} alt="more" />
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="box">
          <div className="box__vote">
            <img className="box__arrow" src={arrow} alt="arrow" />
            <span>2</span>
            <img className="box__arrow" src={arrow} alt="arrow" />
          </div>
          <div className="box__inner">
            <div className="box__bio">
              <span className="box__profile">
                <img src={profile} alt="profile" />
                <h2>VideoGames</h2>
              </span>
              <span>5 minutes ago</span>
            </div>
            <h2>
              What do you think about the new game based on the Harry Potter
              books and movies?
            </h2>
            <img src={hogwarts} alt="hogwarts" />
            <div className="comments"></div>
          </div>
        </div>
      </section>
    </>
  );
};
