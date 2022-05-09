import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import styles from './App.module.scss';

import {useRef} from "react";
import { Navigation } from "swiper";

function LazyMails() {
    return (
        <>
            <li><img className={styles.lazymailsLogo} height={46} src={process.env.PUBLIC_URL + '/img/lazymailslogo.svg'} alt="lazymails logo"/></li>
            <li className={styles.headerTitle}>Lazy Mails</li>
        </>
    )
}

function Card(props) {
    return (
        <li className={`${styles.card} ${props.extraClass}`}>
            <h3>Gmail</h3>
            <ul className={styles.card_items}>
                <li>Instant delivery</li>
                <li>Warmed</li>
                <li>All Regions</li>
                <li>Phone Verified</li>
            </ul>
            <p className={styles.price}>$0.00</p>
            <a href='https://discord.gg/phPNvUfFVX'><button className={styles.purchase_btn}>Purchase</button></a>
        </li>
    )
}

function App() {
    const myRef = useRef(null)
    const scrollToProducts = () => myRef.current.scrollIntoView();

  return (
    <div className={styles.app}>
      <header className={styles.app_header}>
          <ul className={styles.header_wrapper}>
              <li>
                  <ul className={styles.left_header}>
                      <LazyMails/>
                  </ul>
              </li>
              <li>
                  <ul  className={styles.right_header}>
                      <li className={styles.discord}>
                          <a href='https://discord.gg/phPNvUfFVX'>
                              <img height={33} src={process.env.PUBLIC_URL + '/img/rectanglediscord.svg'} alt="rectangle discord"/>
                              <img className={styles.discordLogo} height={14} src={process.env.PUBLIC_URL + '/img/discord.svg'} alt="discord logo"/>
                          </a>
                      </li>
                      <li>
                          <a href='https://twitter.com/LazyMails'>
                              <img height={33} src={process.env.PUBLIC_URL + '/img/rectangletwitter.svg'} alt="rectangle twitter"/>
                              <img className={styles.twitterLogo} height={14} src={process.env.PUBLIC_URL + '/img/twitterlogo.svg'} alt="twitter logo"/>
                          </a>
                      </li>
                  </ul>
              </li>
          </ul>
      </header>
        <body  className={styles.app_body}>
            <div className={styles.intro}>
                <h2>Welcome to Lazy Mails</h2>
                <h1>The <span className={styles.orange}>MOST</span> Reliable Mails <span className={styles.orange}>EVER</span></h1>
                <p>We deliver the highest quality mails for the best prices on the market.</p>
                <button className={styles.explore_btn} onClick={scrollToProducts}>Explore products</button>
            </div>
            <div className={styles.background_logo_wrapper}><img className={styles.background_logo} src={process.env.PUBLIC_URL + '/img/backgroundLazy.png'} alt="background logo"/></div>
            <div ref={myRef} className={styles.products}>
                <h2>Our inventory</h2>
                <Swiper
                    spaceBetween={0}
                    loop={true}
                    modules={[Navigation]}
                    navigation={{clickable: true}}
                    className={styles.mySwiper}
                    centeredSlides={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        650: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide><Card /></SwiperSlide>
                    <SwiperSlide><Card /></SwiperSlide>
                    <SwiperSlide><Card /></SwiperSlide>
                    <SwiperSlide><Card /></SwiperSlide>
                    <SwiperSlide><Card /></SwiperSlide>
                </Swiper>
            </div>
        </body>
      <footer className={styles.app_footer}>
          <ul className={styles.footerWrapper}>
              <li className={styles.leftFooter}>
                  <ul>
                      <LazyMails />
                  </ul>
              </li>
              <li className={styles.rightFooter}>
                  <ul>
                      <li><a href="/">Terms and Conditions</a></li>
                      <li className={styles.separator}>|</li>
                      <li><a href="/">Privacy Policy</a></li>
                  </ul>
              </li>
          </ul>
      </footer>
    </div>
  );
}

export default App;
