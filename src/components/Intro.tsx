import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Intro1Svg from "../assets/intro/1.svg";
import Intro2Svg from "../assets/intro/2.svg";
import Intro3Svg from "../assets/intro/3.svg";
import { IonButton, IonText } from "@ionic/react";
import "swiper/css";
import "./intro.css";

interface ContainerProps {
  onFinish: () => void;
}

const SwiperButtonNext = ({ children }: any) => {
  const swiper = useSwiper();
  return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>;
};
const Intro: React.FC<ContainerProps> = ({ onFinish }) => {
  return (
    <Swiper slidesPerView={1}>
      <SwiperSlide>
        <img src={Intro1Svg} alt="" />
        <IonText>
          <h3>Build Awesome Apps with ionic</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Intro2Svg} alt="" />
        <IonText>
          <h3>Easily with just javascript</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Intro3Svg} alt="" />
        <IonText>
          <h3>for all platforms</h3>
        </IonText>
        <IonButton onClick={onFinish}>Finsih</IonButton>
      </SwiperSlide>
    </Swiper>
  );
};

export default Intro;
