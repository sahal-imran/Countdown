import Hero from "../component/Hero";
import Collection from "../component/Collection";
import Team from "../component/Team";
import Footer from "../component/Footer";
import {Countdown} from '../component/Countdown';

export default function Main() {
  return (
    <>
    <Hero />
    <Countdown timeTillDate="05 26 2019, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />
    <Collection />
    <Team />
    <Footer />
    </>
  )
}