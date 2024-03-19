import { Carousel } from "flowbite-react";
import Image from "next/image";

const teamCarousel = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
      <Carousel>
        <div>
          <Image
            src="/sales.jpg"
            width={560}
            height={620}
            alt="Team Member 1"
            className="block md:hidden"
          />
          <p className="legend">Team Member 1</p>
        </div>
        <div>
          <Image
            src="/Images/1.jpg"
            alt="Team Member 2"
            width={500}
            height={500}
          />
          <p className="legend">Team Member 2</p>
        </div>
        <div>
          <Image
            src="/sales.jpg"
            alt="Team Member 3"
            width={500}
            height={500}
          />
          <p className="legend">Team Member 3</p>
        </div>
        {/* Add more images as needed */}
      </Carousel>
    </div>
  );
};

export default teamCarousel;
