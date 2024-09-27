import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";

// Register ScrollTrigger plugin with gsap
gsap.registerPlugin(ScrollTrigger);

const Herosection = () => {
  useEffect(() => {
    // Set the initial position of photos (except the first one) to be off-screen at the bottom
    gsap.set(".photo:not(:first-child)", { opacity: 1, y: "100%" });

    // Animate the opacity and the 'y' position to move photos upwards into view
    const animation = gsap.to(".photo:not(:first-child)", {
      opacity: 1,
      y: 0, // Move from 100px (bottom) to 0px (top)
      duration: 1,
      stagger: {
        amount: 2, // Total time taken for all elements to finish animating
        onStart: (el) => {
          // Increase the zIndex of the current element to bring it on top
          gsap.set(el, { zIndex: 1 });
        },
        onComplete: (el) => {
          // Lower the zIndex of the previous element to keep the new one on top
          gsap.set(el, { zIndex: 0 });
        },
      },
    });

    // ScrollTrigger configuration to pin and scrub the animation
    ScrollTrigger.create({
      trigger: ".gallery",
      start: "top top",
      end: "bottom bottom",
      pin: ".rightblock",
      animation: animation,
      scrub: true,
      markers: true,
    });

    // Cleanup
    return () => {
      ScrollTrigger.kill(); // Kill ScrollTrigger when component unmounts
    };
  }, []);

  return (
    <React.Fragment>
      <Box className="gallery" sx={{ display: "flex", width: "100vw" }}>
        <Box
          className="left"
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            textAlign: "left",
            overflow: "hidden",
            "& .details": {
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "60vw",
              padding: "10%",
              fontSize: "4rem",
            },
          }}
        >
          <Box className="details">
            <div className="text-[100px] font-serif text-gray-800 space-y-0">
              Elevate Your Style with Voguify
              <p className="text-3xl text-gray-600 ">
                Lorem ipsum dolor sit amet consectetur. Urna cum felis faucibus
                id egestas erat. Fermentum ut elementum odio mollis sed sociis
                volutpat mollis sed sociis volutpat.
              </p>
            </div>
          </Box>
          <Box className="details font-serif text-gray-700">
            <div className="text-[100px] font-serif text-gray-800 space-y-0">
              Elevate Your Style with Voguify
              <p className="text-3xl text-gray-600 ">
                Lorem ipsum dolor sit amet consectetur. Urna cum felis faucibus
                id egestas erat. Fermentum ut elementum odio mollis sed sociis
                volutpat mollis sed sociis volutpat.
              </p>
            </div>
          </Box>
        </Box>
        <Box
          className="rightblock"
          sx={{
            width: "40%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="p-5 ">
            <Box
              sx={{
                width: "30vw",
                height: "40vw",
                position: "relative",
                backgroundColor: "green",
                paddingRight: "100px",
                "& .photo": {
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  "& img": {
                    height: "100%",
                    width: "100%",
                  },
                },
              }}
            >
              <Box className="photo">
                <img
                  src="https://uiparadox.co.uk/templates/voguify/assets/media/cetagorie/image.png"
                  alt="img-1"
                />
              </Box>
              <Box className="photo">
                <img
                  src="https://uiparadox.co.uk/templates/voguify/assets/media/cetagorie/image-2.png"
                  alt="img-2"
                />
              </Box>
            </Box>
          </div>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Herosection;
