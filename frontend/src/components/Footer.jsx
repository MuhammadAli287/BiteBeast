
function Footer (){
    return(
         <>
        <hr className="m-6 mt-10" />
       <div className="p-6 text-white bg-green-950 text-center mt-10 grid md:grid-cols-3 justify-center items-center">
        <div>
            <h1 className="text-3xl font-bold font-serif">Craving <span><i>by Ali</i></span></h1>
            <p className="text-gray-200">Accelerating startups from idea to market with rapid food. Turn our taste for your craving  
                in weeks, not months.</p><br />
               <h1 className="text-yellow-700">CravingbyAli@gmail.com</h1>
        </div>
        <div className="mt-8">
            <h1 className="text-3xl font-bold">Services</h1>
            <ol className="text-yellow-600">
                <li>📱 Instagram</li>
                 <li>👥 FaceBook</li>
                  <li>🌐 Google</li>
                   <li>💬 WhatsApp</li>
                    <li>🐼FoodPanda</li>
            </ol>
        </div>
              <div className="mt-8">
            <h1 className="text-3xl font-bold">Get Started</h1>
            <ol className="text-gray-200">
                <li>Our Process</li>
                 <li>What We Build</li>
                  <li>Book a Call</li>
                   <li>Success Stories</li>
            </ol>
        </div>
       
       </div>

        
       </>
    )
}
export default Footer;