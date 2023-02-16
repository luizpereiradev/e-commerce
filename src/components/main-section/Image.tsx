function Image({
  category,
}: {
  category: {
    name: string;
    img: string;
  };
}) {
  return (
    <>
      <div
        id={category.name}
        className="
      container-center
      h-48
      relative
      lg:h-full
      sm:w-full
      sm:h-full
      "
      >
        <div className="bg-white opacity-30 absolute w-full h-full top-0"/>
        <img
          src={category.img}
          className="
          w-screen
          max-h-96
          object-cover
          md:min-w-full
          sm:h-full
          "
        />
        <h3
          className="absolute
      top-5
      left-5
      lg:top-8
      lg:left-8
      text-black
      xs:text-2xl
      text-lg
      "
        >
          Latest trending
        </h3>
        <h3
          className="absolute
          top-12
          left-5
          lg:top-16
          lg:left-8
          text-black
          xs:text-3xl
          text-xl
          font-semibold
          "
        >
          {category.name} Items
        </h3>
        <button
          className="absolute
      top-28
          left-5
          lg:top-32
          lg:left-8
          bg-white
          hover:bg-blue-500
          text-blue-500
          hover:text-white
          font-bold py-2
          px-4
          rounded-lg
          "
        >
          Learn More
        </button>
      </div>
      <div
        className="container-right
      hidden
      lg:flex
      w-1/5
      flex-col
      gap-2
      "
      >
        <div
          className="container-login
          bg-[#E3F0FF]
          text-black
          flex
          flex-col
          p-3
          rounded-md
          gap-2
          "
        >
          <div
            className="container-avatar
                  flex
                  gap-2
                  justify-center
                  items-center
                  "
          >
            <div className="avatar">
              <div
                className="
                          w-12
                          h-12
                          rounded-full"
              >
                <img src="https://www.w3schools.com/w3images/avatar6.png" />
              </div>
            </div>
            <div
              className="container-user-text
                      text-sm
                      lg:w-44
                      "
            >
              <p>Hi, user</p>
              <p>let`s get started</p>
            </div>
          </div>
          <button
            className="
          bg-blue-700
          text-white
          border-none
          hover:bg-blue-500
          rounded-md
          h-7
          "
          >
            Join now
          </button>
          <button
            className="
          bg-white
          text-blue-700
          border-none
          hover:bg-blue-200
          rounded-md
          h-7
          "
          >
            Log in
          </button>
        </div>
        <div
          className="container-discount
          bg-[#F38332]
          text-white
          p-3
          rounded-md
          h-full
          "
        >
          Get U$ off with a new supplier
        </div>
        <div
          className="container-quotes
          bg-[#55BDC4]
          text-white
          p-3
          rounded-md
          "
        >
          Send quotes with supplier preferences
        </div>
      </div>
    </>
  );
}

export default Image;
