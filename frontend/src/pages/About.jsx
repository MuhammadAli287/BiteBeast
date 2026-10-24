import { Link } from "react-router-dom";
import storyImage from "./storyabout.png.png";
import Footer from "../components/Footer";

function About() {
    return (
        <>
            <section>
                <img
                    src={storyImage}
                    alt="Our Story"
                    className="w-full h-[210px] md:h-[510px] object-cover"
                />


            </section>
            <section className="bg-gray-50">
                <div className="p-10 text-center">
                    <h2 className="text-green-900">~~ OUR VALUES ~~</h2>
                    <h1 className="text-3xl md:text-4xl text-green-900 font-bold font-serif">The Craving<i> <span className="text-yellow-500">Promise</span></i></h1>
                    <p className="text-gray-700">The little things that make a dining experience specials.</p>
                </div>

                <div className="p-10 grid md:grid-cols-3 gap-6 text-center">
                    <div className="border-r-2 border-r-gray-300 ">
                        <h1 className="text-green-900 text-2xl font-bold font-serif">Fresh Ingredients</h1>
                        <p className="text-gray-700">We believe great meals begin with fresh, carefully selected ingredients.</p>
                    </div>
                    <div className="border-r-2 border-r-gray-300 ">
                        <h1 className="text-green-900 text-2xl font-bold font-serif">Made with Love</h1>
                        <p className="text-gray-700">Every dish is prepared with care, attention and a passion for good food.</p>
                    </div>
                    <div className="border-r-2 border-r-gray-300 ">
                        <h1 className="text-green-900 text-2xl font-bold font-serif">Quality First</h1>
                        <p className="text-gray-700">We focus on a flavor, consistency and a welcoming dining experience.</p>
                    </div>
                </div>

            </section>

            <section>
                <div className="p-6 grid gap-6 ">
                    <div className="p-6 bg-green-950 rounded-2xl grid md:grid-cols-2 gap-4 md:gap-0  justify-around">
                        <div className="flex justify-center items-center">
                            <img className="rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSezyOrqjfI-3opWCX57sIhRjWab7NR-fmH1p9zTImYmg&s=10" width={300} ></img>
                        </div>
                        <div >
                            <h3 className="text-yellow-500">OUR TEAM ~~~</h3>
                            <h1 className="text-white mt-2 text-3xl font-bold font-serif">
                                Passionate<i><span className="text-yellow-500"> People</span></i>
                            </h1>
                            <p className="text-white mt-4 mb-6">
                                Craving was created around a simple idea: good food should <br /> bring people
                                closer together. We celebrate familiar favorities,<br />  fresh flavors and   the joy
                                of sharing a meal.<br />
                                Whether you're meeting friends, enjoying family time or treating yourself.

                            </p>

                        </div>

                    </div>

                    <div className="bg-yellow-100 text-center rounded-2xl p-6">
                        <h1 className="text-5xl text-yellow-500">"</h1>
                        <h2 className="text-xl font-semibold"><i>"Good food creates<br /> happy moments."</i></h2>
                        <p className="mt-4">__ Craving Team</p>
                    </div>

                </div>

            </section>

            <section>
                <div className="bg-green-950 p-8 text-center">
                    <h1 className="text-3xl text-white mb-6 font-serif">Your table is <span className="text-yellow-400">waiting.</span></h1>
                    <Link className="bg-yellow-500 px-4 py-2 rounded-3xl mt-4 text-white " to="/reserve">Reserve Table</Link>
                </div>
            </section>

              <Footer />
        </>
    )
}
export default About;