import React from "react";
import logoFooter from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <div>
        <div className="bg-[#06091A]">
      <div className=" text-white py-50 text-center">
        <img className="mx-auto" src={logoFooter} alt="" />
        <div className="grid grid-cols-3 mt-10">
          <div>
            <h3 className="font-semibold text-[18px] mb-3">About Us</h3>
            <p className="text-[#FFFFFF]/60">
              We are a passionate team <br /> dedicated to providing the best{" "}
              <br /> services to our customers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[18px] mb-3">quick Links</h3>
            <ol className="text-[#FFFFFF]/60 space-y-2">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ol>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-[18px]">Subscribe</h3>
            <p className="text-[#FFFFFF]/60">
              Subscribe to our newsletter for the <br /> latest updates.
            </p>

            <div className="join">
              <div>
                <label className="input validator join-item">
                  <input className="text-black" type="email" placeholder="Enter your email" required />
                </label>
                <div className="validator-hint hidden">
                  Enter valid email address
                </div>
              </div>
              <button 
              className="btn bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 border-0
              rounded-md rounded-l-none">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
        <div className="divider before:bg-white/20 after:bg-white/20"></div>
        <p className="text-[#FFFFFF]/60 text-center pb-5">@2026 Your Company All Rights Reserved.</p>
        </div>
    </div>
  );
};

export default Footer;
