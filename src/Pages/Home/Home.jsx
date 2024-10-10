import Footer from "../../Components/Footer/Footer";

import Slider from "../../Components/SwiperSlider/Slider";

const Home = () => {
    return (
        <div>
            <div className="my-8">
                <Slider></Slider>
            </div>
            <div className="mb-4">
                <h1 className="text-4xl text-center text-black font-bold">কেন এই সোসাইটি?</h1>
                <p className="text-2xl mx-12 mt-4 font-semibold text-purple-500">কোড ইনোভেটরস ক্লাব হলো সব স্তরের প্রোগ্রামারদের জন্য একটি প্রাণবন্ত কমিউনিটি। আমাদের লক্ষ্য হলো কোডিংয়ের মাধ্যমে সৃজনশীলতা, সহযোগিতা, এবং উদ্ভাবনকে উৎসাহিত করা। আপনি যদি একদম নতুন হন বা একজন অভিজ্ঞ কোডার হন, আমাদের ক্লাবে আপনি শেখার, শেয়ার করার, এবং অসাধারণ প্রকল্প তৈরি করার সুযোগ পাবেন। কোডিং ওয়ার্কশপ থেকে শুরু করে বাস্তব প্রকল্পে কাজ করার সুযোগসহ, আমরা হাতেকলমে শেখার, সমস্যা সমাধানের এবং একই চিন্তাধারার ব্যক্তিদের সঙ্গে নেটওয়ার্ক তৈরির সুযোগ প্রদান করি। আমাদের সঙ্গে যোগ দিন আপনার কোডিং দক্ষতা উন্নত করতে, রোমাঞ্চকর চ্যালেঞ্জে অংশ নিতে, এবং প্রযুক্তির ভবিষ্যত গঠনের অংশ হতে!</p>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;