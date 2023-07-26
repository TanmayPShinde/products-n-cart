const Footer = () => {
  return (
    <div className="text-center mt-14 mb-4">
      <p className="text-sm">
        made with <span className="text-red-500">❤</span> in React and Redux
        Toolkit
      </p>
      <p className="text-xs">
        Github URL -{" "}
        <a
          href="https://github.com/TanmayPShinde/products-n-cart"
          rel="noreferrer"
          target="_blank"
          className="italic cursor-pointer hover:underline"
        >
          Click here
        </a>
      </p>
    </div>
  );
};

export default Footer;
