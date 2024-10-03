const Banner = () => {
  return (
    <section
      className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/Z6WVZXT/animal.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Dark Overlay */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Animal Care
        </h1>
        <p className="text-lg md:text-2xl">
          you can get help or tips from here
        </p>
      </div>
    </section>
  );
};

export default Banner;
