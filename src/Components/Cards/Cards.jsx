import './Card.css'
import icon1 from '../../../public/Image/icon-1.png'
import icon2 from '../../../public/Image/icon-2.png'
import icon3 from '../../../public/Image/icon-3.png'
import icon4 from '../../../public/Image/icon-4.png'
import icon5 from '../../../public/Image/icon-5.png'
import icon6 from '../../../public/Image/icon-6.png'
const Cards = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-blueviolet to-lightgreen p-4 md:p-16 pb-24">
                <h1 className="text-center mb-5 text-purple-500 text-5xl pb-4 drop-shadow-lg"> We will Learn Together</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white text-center p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:border-purple-300 border-2">
                        <img src={icon1} alt="HTML 5" className="h-20 mx-auto" />
                        <h3 className="text-gray-800 text-2xl py-2">HTML 5</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?
                        </p>
                        <a href="#" className="inline-block mt-4 bg-gray-800 text-white text-lg py-2 px-6 rounded hover:tracking-wide">
                            EXPLORE
                        </a>
                    </div>

                    <div className="bg-white text-center p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:border-purple-300 border-2">
                        <img src={icon2} alt="CSS 3" className="h-20 mx-auto" />
                        <h3 className="text-gray-800 text-2xl py-2">CSS 3</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?
                        </p>
                        <a href="#" className="inline-block mt-4 bg-gray-800 text-white text-lg py-2 px-6 rounded hover:tracking-wide">
                            EXPLORE
                        </a>
                    </div>

                    <div className="bg-white text-center p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:border-purple-300 border-2">
                        <img src={icon3} alt="JavaScript" className="h-20 mx-auto" />
                        <h3 className="text-gray-800 text-2xl py-2">JavaScript</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?
                        </p>
                        <a href="#" className="inline-block mt-4 bg-gray-800 text-white text-lg py-2 px-6 rounded hover:tracking-wide">
                            EXPLORE
                        </a>
                    </div>

                    <div className="bg-white text-center p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:border-purple-300 border-2">
                        <img src={icon4} alt="SASS" className="h-20 mx-auto" />
                        <h3 className="text-gray-800 text-2xl py-2">SASS</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?
                        </p>
                        <a href="#" className="inline-block mt-4 bg-gray-800 text-white text-lg py-2 px-6 rounded hover:tracking-wide">
                            EXPLORE
                        </a>
                    </div>

                    <div className="bg-white text-center p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:border-purple-300 border-2">
                        <img src={icon5} alt="JQuery" className="h-20 mx-auto" />
                        <h3 className="text-gray-800 text-2xl py-2">JQuery</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?
                        </p>
                        <a href="#" className="inline-block mt-4 bg-gray-800 text-white text-lg py-2 px-6 rounded hover:tracking-wide">
                            EXPLORE
                        </a>
                    </div>

                    <div className="bg-white text-center p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:border-purple-300 border-2">
                        <img src={icon6} alt="React.js" className="h-20 mx-auto" />
                        <h3 className="text-gray-800 text-2xl py-2">React.js</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?
                        </p>
                        <a href="#" className="inline-block mt-4 bg-gray-800 text-white text-lg py-2 px-6 rounded hover:tracking-wide">
                            EXPLORE
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;