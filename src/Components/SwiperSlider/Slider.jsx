import img1 from '../../../public/Image/img1.jpg'
import img2 from '../../../public/Image/img2.jpg'
import img3 from '../../../public/Image/img3.jpg'
import img4 from '../../../public/Image/img4.jpg'
import img5 from '../../../public/Image/img5.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import SingleSlide from './SingleSlide'


export default function Slider() {
    return (
        <div className='flex justify-center'>
            <div className='lg:w-[1300px] w-[400px] lg:mx-0 mx-3'>
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{

                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <SingleSlide p={"Where Imagination Meets Innovation Join a community of passionate developers, problem-solvers, and tech enthusiasts ready to explore new programming paradigms and push the boundaries of technology."} text={'Code Innovators Club'} image={img1}></SingleSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleSlide p={"Code. Collaborate. Conquer. If coding challenges and innovative problem-solving are your thing, Hack Masters is the perfect place for you. From building apps to breaking down complex algorithms, this club is about mastering your craft through hands-on learning and collaboration."} text={'Hack Masters'} image={img2}></SingleSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleSlide p={"Experience an extraordinary journey through rich, diverse flavors, where every dish is crafted with passion and served with an unwavering commitment to excellence."} text={'Savor the Flavors of Excellence'} image={img3}></SingleSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleSlide p={"Crafting Tomorrow’s Technology Today Dive into the art of coding, where every line of code is a step toward building something extraordinary. Whether it's web development, AI, or open-source projects, CodeCraft Collective is where creativity and logic come together."} text={'CodeCraft Collective'} image={img4}></SingleSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleSlide p={"Building Ideas, One Byte at a Time A space for developers who love turning ideas into reality. From conceptualization to deployment, Byte Builders Hub provides a collaborative environment for learning, experimenting, and sharing knowledge on all things tech."} text={'Byte Builders Hub'} image={img5}></SingleSlide>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}