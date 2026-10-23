
function Contact (){
    return(
        <>
        <section>
            <div className="bg-green-950 p-10 md:p-20 ">
                <h2 className="text-3xl text-yellow-600 font-serif">GET IN TOUCH</h2>
                <h1 className="text-5xl text-white">Contact<span className="text-yellow-600"> Us</span></h1>
                <p className="text-white mt-6">Have a question or want to plan a visit? Send us a message <br/>
                and our team will be happy to help.</p>
                <h1 className="text-yellow-600 text-3xl">________</h1>
            </div>
        </section>

        <section>
            <div className=" p-10  ">
                <h2 className="text-2xl text-yellow-600 font-serif">Our Details</h2>
                <h1 className="text-4xl text-green-950">Visit Us or<span className="text-yellow-600"> Reach Out</span></h1>
                <p className="text-gray-600 mt-6">We'd love to hear from you. Wether you have a question,<br/>
                feedback, or want to make a reservation, feel free to contact us<br/> 
                using the information below.</p>
               
            </div>
            <div className="p-10 grid gap-4 md:grid-cols-2 items-center">
                <div className="flex items-center gap-4 bg-yellow-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 rounded-lg p-4">
                    <div className="text-3xl  ">📍</div>
                    <div>
                        <h1 className="text-green-950 text-2xl font-serif">Our Location</h1>
                        <p className="text-gray-600">Main Boulevard, Lahore, Pakistan</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-yellow-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 rounded-lg p-4">
                    <div className="text-3xl  ">📞</div>
                    <div>
                        <h1 className="text-green-950 text-2xl font-serif">Phone Number</h1>
                        <p className="text-gray-600">+92 321 9456250</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-yellow-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 rounded-lg p-4">
                    <div className="text-3xl  ">📧</div>
                    <div>
                        <h1 className="text-green-950 text-2xl font-serif">Email Address</h1>
                        <p className="text-gray-600">Cravingby.ali@gmail.com<br/>
                        Cravingfood@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-yellow-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 rounded-lg p-4">
                    <div className="text-3xl  ">⏳</div>
                    <div>
                        <h1 className="text-green-950 text-2xl font-serif">Opening Hours</h1>
                        <p className="text-gray-600">Monday - Sunday<br/>
                        12:00 PM - 2:00 AM</p>
                    </div>
                </div>

            </div>
            <div className="p-6 flex justify-center">
                <img className="rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCM-7TSrQ77R3Blt4z85aapI2MSROqTPBXSSONAFSJQg&s=10" width={300} ></img>
            </div>
        </section>
        </>
    )
}
export default Contact;