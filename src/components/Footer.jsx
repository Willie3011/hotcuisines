import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiChefHatFill } from "react-icons/pi";
import { IoIosSend } from "react-icons/io";




const Footer = () => {
  return (
    <footer className="bg-background min-h-72">
      <section className="h-full max-w-7xl m-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-wrap flex-col gap-12 md:gap-4 sm:flex-row justify-between items-start md:items-center">
        <div className="flex flex-col items-start">
          <h1 className="flex items-center text-2xl font-bold mb-4"><PiChefHatFill className="text-4xl me-2 text-mauve-200"/> Hot Cuisines</h1>
          <p className="max-w-70 text-balance mb-4">Deliver the best cuisines to your doorstep. Making your dining experience exceptional.</p>
          <p className="text-gray-400 mb-4">© 2026 Hot Cuisines. All rights reserved.</p>
          <div className="flex space-x-4"/>
      </div>
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-bold mb-4">Company</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <a className="hover:underline transition-all duration-150" href="#">Home</a>
            </li>
            <li>
              <a className="hover:underline transition-all duration-150" href="#">About Us</a>
            </li>
            <li>
              <a className="hover:underline transition-all duration-150" href="#">Services</a>
            </li>
            <li>
              <a className="hover:underline transition-all duration-150" href="#">Contact Us</a>
            </li>
          </ul>
      </div>
        <div className="">
          <h2 className="text-xl font-bold mb-4">Customers Help</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <a className="hover:underline transition-all duration-150" href="#">Our Services</a>
            </li>
            <li>
              <a className="hover:underline transition-all duration-150" href="#">Our Menu</a>
            </li>
            <li>
              <a className="hover:underline transition-all duration-150" href="#">Customer Services</a>
            </li>
            <li>
              <a className="hover:underline transition-all duration-150" href="#">Delivery Services</a>
            </li>
          </ul>
      </div>
        <div className="">
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#">
                <FaFacebook className="text-2xl hover:text-blue-600 transition-all duration-150"/>
              </a>
            </li>
            <li>
              <a href="#">
                <RiInstagramFill className="text-2xl hover:text-pink-600 transition-all duration-150"/>
              </a>
            </li>
            <li>
              <a href="#">
                <FaXTwitter className="text-2xl hover:text-blue-400 transition-all duration-150"/>
              </a>
            </li>
            <li>
              <a href="#">
                <IoLogoWhatsapp className="text-2xl hover:text-green-500 transition-all duration-150"/>
              </a>
            </li>
          </ul>
      </div>
        <div className="">
          <h2 className="text-xl font-bold mb-4">Stay in the Heat</h2>
          <p className="text-gray-400 max-w-70 mb-4">Subscribe to get the latest spicy recipes, hot cuisine tips, and mouth-watering dishes delivered straight to your inbox.</p>
          <div className="border border-gray-700 rounded-full h-12 w-full flex items-center">
            <input type="email" placeholder="Enter your email" className="bg-transparent outline-none px-4 text-white w-[85%]"/>
            <button className="flex items-center justify-center bg-mauve-200 text-gray-900 h-full p-4 rounded-full hover:bg-mauve-300 transition-all duration-150 text-xl"><IoIosSend/></button>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer