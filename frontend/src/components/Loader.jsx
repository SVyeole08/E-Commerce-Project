import React from "react";
import { motion } from "framer-motion";

const style = {
    width: 15,
    height: 15,
    opacity: 1,
    margin: 5,
    borderRadius: 50,
    display: "inline-block",
    background: "#3489f1",
}
  
const variants = {
    start: {
        scale: 0.2,
        rotate: 0,
    },
    end: {
        scale: 1,
        rotate: 360,
    },
}

export default function Loader(props) {
    return (
        <div>
          <motion.div
                    style={style}
                    variants={variants}
                    initial={"start"}
                    animate={"end"}
                    transition={{    
                      repeat: "Infinity",
                      repeatType: "reverse",
                      ease: "circInOut",
                      duration: 1.2, 
                      delay: 0
                    }}
                />
          <motion.div
                    style={style}
                    variants={variants}
                    initial={"start"}
                    animate={"end"}
                    transition={{    
                      repeat: "Infinity",
                      repeatType: "reverse",
                      ease: "circInOut",
                      duration: 1.2, 
                      delay: 0.3
                    }}  
                />
          <motion.div
                    style={style}
                    variants={variants}
                    initial={"start"}
                    animate={"end"}
                    transition={{    
                      repeat: "Infinity",
                      repeatType: "reverse",
                      ease: "circInOut",
                      duration: 1.2, 
                      delay: 0.6
                    }}
                />
          <motion.div
                    style={style}
                    variants={variants}
                    initial={"start"}
                    animate={"end"}
                    transition={{    
                      repeat: "Infinity",
                      repeatType: "reverse",
                      ease: "circInOut",
                      duration: 1.2, 
                      delay: 0.9
                    }}
                />    
        </div>
    )
}