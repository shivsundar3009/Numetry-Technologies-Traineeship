import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-blue-600 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Resume Builder</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Services</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                {/* Swiper Slider */}
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    pagination={{ clickable: true }}
                    className="my-8"
                >
                    <SwiperSlide className="bg-green-500 flex justify-center items-center h-64">
                        <h2 className="text-white text-2xl">Slide 1</h2>
                    </SwiperSlide>
                    <SwiperSlide className="bg-blue-500 flex justify-center items-center h-64">
                        <h2 className="text-white text-2xl">Slide 2</h2>
                    </SwiperSlide>
                    <SwiperSlide className="bg-red-500 flex justify-center items-center h-64">
                        <h2 className="text-white text-2xl">Slide 3</h2>
                    </SwiperSlide>
                </Swiper>

                {/* Why Choose Us Section */}
                <section className="mt-10 container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Quality</h3>
                            <p>We ensure top-notch quality in our resume building service, helping you stand out from the competition.</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                            <p>Our team consists of experienced professionals who understand what recruiters are looking for.</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Support</h3>
                            <p>We provide 24/7 support to ensure all your questions and concerns are addressed promptly.</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-blue-600 text-white p-4 mt-8">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
