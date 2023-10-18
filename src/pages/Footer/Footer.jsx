const Footer = () => {
  return (
    <div className="bg-base-200 text-base-content py-10">
      <footer className="footer grid-cols-2 md:grid-cols-4 lg:gap-32 max-w-7xl mx-auto px-14 md:px-4 lg:px-0">
        <aside className="col-span-2 md:col-span-4 lg:col-span-1">
          <p>
            <span className="text-lg font-semibold block">
              <span className="text-5xl block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-[#404040]">
                NexGen
              </span>
              Gadgets Ltd.
            </span>
            Reliable Technology Company since 2016
          </p>
          <p>
            <small className="text-xs">
              Copyright &copy; 2023 - All right reserved
            </small>
          </p>
        </aside>
        <nav className="">
          <header className="footer-title">Services</header>
          <a className="link link-hover">Find a Store</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping</a>
          <a className="link link-hover">FAQs</a>
        </nav>
        <nav className="hidden md:flex flex-col">
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Gift Voucher</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">EMI Policy</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Warranty Policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
