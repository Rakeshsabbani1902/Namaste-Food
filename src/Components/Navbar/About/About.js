import React from "react";

const About = () => {
  return (
    <div>
     
      <div className="grid m-8 place-items-center  ">
      <img  className="h-80 rounded-xl"
        src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80"
        alt="food"
      />
       
      <p className="w-2/3"> <h1 className="font-bold text-3xl my-8">About Us</h1>
        Our mission is to elevate the quality of life for the urban consumer
        with unparalleled convenience. Convenience is what makes us tick. It's
        what makes us get out of bed and say, "Let's do this.
        <br /> We are full-service suppliers of various food items. We serve
        North Indian and South Indian cuisine. Our brand focuses mostly on
        providing excellent customer service and delicious, authentic meals.
        Bless those who produce and supply food is what the phrase "Anna data
        Sukhi Bhava" means. The brand's mission and values are embodied by the
        phrase "The only vital component for life.
      </p>
      </div>
    </div>
  );
};

export default About;
