import FooterLogo from '../assets/image/logo-footer.png';
import './Footer.css';

const MainFooter = () => {
  return (
    <div className="mt-56">
      <footer class="relative bg-slate-800  p-16">
        <div className=" absolute -top-36 left-64 border rounded-lg p-5 w-8/12 mx-auto ">
          <div className="opacity-100 cart text-center  py-20  text-black space-y-6 rounded-lg">
            <h3 className="text-4xl font-bold">Subscribe to our Newsletter</h3>
            <p>Get the latest updates and news right in your inbox!</p>
            <div>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered input-info w-full max-w-xs"
              />
              <button class="ml-3 btn bg-[#F5FEA9] join-item">Subscribe</button>
            </div>
          </div>
        </div>

        <img className="w-[220px] mx-auto pt-44" src={FooterLogo} alt="" />

        <div class=" text-white  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8">
          <nav className="flex flex-col gap-2">
            <h6 class="footer-title">Services</h6>
            <a class="link link-hover">Branding</a>
            <a class="link link-hover">Design</a>
            <a class="link link-hover">Marketing</a>
            <a class="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col gap-2">
            <h6 class="footer-title">Company</h6>
            <a class="link link-hover">About us</a>
            <a class="link link-hover">Contact</a>
            <a class="link link-hover">Jobs</a>
            <a class="link link-hover">Press kit</a>
          </nav>
          <nav className="flex flex-col gap-2">
            <h6 class="footer-title">Legal</h6>
            <a class="link link-hover">Terms of use</a>
            <a class="link link-hover">Privacy policy</a>
            <a class="link link-hover">Cookie policy</a>
          </nav>
          <form className="flex flex-col gap-2">
            <h6 class="footer-title">Newsletter</h6>
            <fieldset class="form-control w-80">
              <label class="label">
                <span class="label-text">Enter your email address</span>
              </label>
              <div class="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  class="input input-bordered join-item"
                />
                <button class="btn bg-[#E7FE29] join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default MainFooter;
