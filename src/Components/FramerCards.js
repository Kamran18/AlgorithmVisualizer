export default {
    framerContainer : {
                        hidden: {},
                        visible: {
                        transition: {
                            when: "beforeChildren",
                            staggerChildren: .05
                        }
                        }
                      },
        framerItem : {
            hidden: { y: 40, opacity: 0 },
            visible: { 
            y: 0,
            opacity: 1,
            transition: {
                duration: .8
            }
            }
        }
    }
