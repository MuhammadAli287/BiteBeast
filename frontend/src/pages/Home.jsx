import { Link } from "react-router-dom";

function Home (){
    return(
        <>
        <section className="p-6 bg-green-950/90 bg-#173D30">
            <div className="ml-8 grid md:grid-cols-3 justify-around gap-8">
                <div className="mt-16 text-center">
                    <h1 className=" text-3xl md:text-5xl font-semibold font-serif text-white">Make A Moment<br/> With <span className="text-orange-500 animate-pulse"> Craving </span></h1>
                    <p className="text-white mt-6 font-serif">Embark on a gastronomic journey with Craving.<br/>
                    Our curated selection of international flavours will tantalize<br/> your taste trasport. </p>
                    <button className="px-4 py-2 text-xs mt-8 bg-orange-500 text-white rounded-3xl">Book a Moment</button>
                </div>
                <div className="p-4 md:p-12 flex justify-center"  >
                    <img className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGQMXvmFDGk85YZEYMSAl1Sh8-bGFNPVmWFv-2nm9vA&s=10" width={350}></img>
                </div>
                <div className="ml-20 md:ml-0">
                <div className="" >
                    <h1 className="text-5xl text-orange-500 font-bold">"</h1>
                    <p className="text-white">"I've been coming to Craving for<br/> years, and i've never been<br/> disapply pointed. The food is<br/> always fresh and flavourful, and<br/> the services.</p>
                </div>
                <div>
                    <img className="rounded-2xl mt-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFqHPOFgogqB1hzXPsNr8CYpA32RrxmTxOU6dnAGHU4g&s=10" width={150}></img>
                </div>
   </div>
                
            </div>


            
            <div className=" p-10 grid gap-8 md:grid-cols-4 justify-center">
                <div className="text-white  font-serif">
                    <h1 className="font-semibold text-3xl">400+</h1>
                    <p>Restaurants</p>
                </div>
                <div className="text-white  font-serif">
                    <h1 className="font-semibold text-3xl">100+</h1>
                    <p>Fresh Ingeridents</p>
                </div>
                <div className="text-white  font-serif">
                    <h1 className="font-semibold text-3xl">5</h1>
                    <p>Star Rating</p>
                </div>
                <div className="text-white  font-serif">
                    <h1 className="font-semibold text-3xl">300+</h1>
                    <p>Customer Reviews</p>
                </div>
            </div>

            <h1 className="text-white mt-10 text-center text-3xl font-serif font-bold"><i>Food<span className="text-2xl text-orange-500"> Items</span></i></h1>
            <div className="grid justify-center md:grid-cols-3 gap-4 p-6 ">
                <img className="rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR64XJzueYiTIMXr3hAkie6Y5R08W25QRwHdYC4fCNW5Q&s=10" width={350}></img>
                <img className="rounded-2xl ml-4"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEiigtcaisR1htfultugVLSvlqd8wOENkFraslL19q1Q&s=10" width={320}></img>
                <img className="rounded-2xl"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmx9WttQE21RzBzSG78E_TKjaa069HX5zlBTjoWuyHQ&s=10" width={350}></img>
            </div>

            <div className="text-center mt-6">
            <Link className="px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg animate-pulse text-center " to="/menu">View Menu</Link>
        </div>

        
        </section>
        <section>
                <div className="bg-green-950 p-8 text-center">
                    <h1 className="text-3xl text-white mb-6 font-serif">Your table is <span className="text-yellow-400">waiting.</span></h1>
                    <Link className="bg-yellow-500 px-4 py-2 rounded-3xl mt-4 text-white " to="/reserve">Reserve Table</Link>
                </div>
            </section>
        </>
    )
}
export default Home;