import background from '../../assets/background-1-container.jpeg';

function Section1() {
    return (
        <>
            <div className="h-48 relative">
                <img src={background} className="w-screen"/>
                <h3 className="absolute
                top-5
                left-5
                text-black
                text-xl
                ">Latest trending</h3>
                <h3 className="absolute
                top-12
                left-5
                text-black
                text-xl
                font-semibold
                "
                >Eletronic Items</h3>
                <button
                className="absolute
                top-28
                left-5
                bg-white
                hover:bg-blue-500
                text-blue-500
                hover:text-white
                font-bold py-2
                px-4
                rounded-lg
                "
                >Learn More</button>
            </div>
        </>
    );
}

export default Section1;