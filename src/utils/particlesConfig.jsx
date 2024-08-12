const particlesConfig = {
    autoPlay: true,
    background: {
        color: {
            value: "#191b1d",
        },
        image: "",
        position: "",
        repeat: "1",
        size: "",
        opacity: 1,
    },
    // backgroundMask: {
    //     composite: "destination-out",
    //     cover: {
    //         color: {
    //             value: "#1f2937",
    //         },
    //         opacity: 0.3,
    //     },
    //     enable: true,
    // },
    backgroundMode: {
        enable: true,
        zIndex: -1,
    },
    detectRetina: true,
    fpsLimit: 120,
    infection: {
        cure: false,
        delay: 0,
        enable: false,
        infections: 0,
        stages: [],
    },
    interactivity: {
        detectsOn: "window",
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onDiv: {
                selectors: [],
                enable: false,
                mode: [],
                type: "circle",
            },
            onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                    enable: false,
                    force: 3,
                    smooth: 200,
                },
            },
            resize: true,
        },
        modes: {
            attract: {
                distance: 200,
                duration: 0.4,
                speed: 1,
            },
            bounce: {
                distance: 200,
            },
            bubble: {
                distance: 200,
                duration: 0.4,
            },
            connect: {
                distance: 80,
                links: {
                    opacity: 0.5,
                },
                radius: 60,
            },
            grab: {
                distance: 100,
                links: {
                    blink: false,
                    consent: false,
                    opacity: 1,
                },
            },
            light: {
                area: {
                    gradient: {
                        start: {
                            value: "#ffffff",
                        },
                        stop: {
                            value: "#000000",
                        },
                    },
                    radius: 1000,
                },
                shadow: {
                    color: {
                        value: "#000000",
                    },
                    length: 2000,
                },
            },
            push: {
                quantity: 4,
            },
            remove: {
                quantity: 2,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
                speed: 1,
            },
            slow: {
                factor: 3,
                radius: 200,
            },
            trail: {
                delay: 0.005,
                quantity: 5,
                particles: {
                    color: {
                        value: "#ff0000",
                        animation: {
                            enable: true,
                            speed: 400,
                            sync: true,
                        },
                    },
                    collisions: {
                        enable: false,
                        bounce: {
                            horizontal: {
                                random: {},
                            },
                            vertical: {
                                random: {},
                            },
                        },
                    },
                    links: {
                        enable: false,
                        shadow: {},
                        triangles: {},
                    },
                    move: {
                        outMode: "destroy",
                        speed: 5,
                        angle: {},
                        attract: {
                            rotate: {},
                        },
                        gravity: {},
                        noise: {
                            delay: {
                                random: {},
                            },
                        },
                        outModes: {},
                        trail: {},
                    },
                    size: {
                        value: 5,
                        animation: {
                            enable: true,
                            speed: 5,
                            minimumValue: 1,
                            sync: true,
                            startValue: "min",
                            destroy: "max",
                        },
                        random: {},
                    },
                    bounce: {
                        horizontal: {
                            random: {},
                        },
                        vertical: {
                            random: {},
                        },
                    },
                    life: {
                        delay: {
                            random: {},
                        },
                        duration: {
                            random: {},
                        },
                    },
                    number: {
                        density: {},
                    },
                    opacity: {
                        animation: {},
                        random: {},
                    },
                    rotate: {
                        animation: {},
                    },
                    shadow: {
                        offset: {},
                    },
                    shape: {},
                    stroke: {
                        color: {
                            value: "",
                            animation: {
                                enable: false,
                                speed: 0,
                                sync: false,
                            },
                        },
                    },
                    twinkle: {
                        lines: {},
                        particles: {},
                    },
                },
            },
        },
    },
    manualParticles: [],
    motion: {
        disable: false,
        reduce: {
            factor: 4,
            value: true,
        },
    },
    particles: {
        bounce: {
            horizontal: {
                random: {
                    enable: false,
                    minimumValue: 0.1,
                },
                value: 1,
            },
            vertical: {
                random: {
                    enable: false,
                    minimumValue: 0.1,
                },
                value: 1,
            },
        },
        collisions: {
            bounce: {
                horizontal: {
                    random: {
                        enable: false,
                        minimumValue: 0.1,
                    },
                    value: 1,
                },
                vertical: {
                    random: {
                        enable: false,
                        minimumValue: 0.1,
                    },
                    value: 1,
                },
            },
            enable: true,
            mode: "bounce",
        },
        color: {
            value: "#f43f5e",
            animation: {
                enable: false,
                speed: 50,
                sync: false,
            },
        },
        life: {
            count: 0,
            delay: {
                random: {
                    enable: false,
                    minimumValue: 0,
                },
                value: 0,
                sync: false,
            },
            duration: {
                random: {
                    enable: false,
                    minimumValue: 0.0001,
                },
                value: 0,
                sync: false,
            },
        },
        links: {
            blink: false,
            color: {
                value: "#ffffff",
            },
            consent: false,
            distance: 100,
            enable: true,
            frequency: 0.65,
            opacity: 1,
            shadow: {
                blur: false,
                color: {
                    value: "#0c69e4",
                },
                enable: false,
            },
            triangles: {
                enable: true,
                frequency: 0.64,
                opacity: 0.14,
                color: {
                    value: "#6a6a81",
                },
            },
            width: 1,
            warp: false,
        },
        move: {
            angle: {
                offset: 45,
                value: 90,
            },
            attract: {
                enable: false,
                rotate: {
                    x: 3000,
                    y: 3000,
                },
            },
            direction: "none",
            distance: 0,
            enable: true,
            gravity: {
                acceleration: 9.81,
                enable: false,
                maxSpeed: 50,
            },
            noise: {
                delay: {
                    random: {
                        enable: false,
                        minimumValue: 0,
                    },
                    value: 0,
                },
                enable: false,
            },
            outModes: {
                default: "out",
            },
            random: false,
            size: false,
            speed: 1,
            straight: false,
            trail: {
                enable: false,
                length: 10,
                fillColor: {
                    value: "#000000",
                },
            },
            vibrate: false,
            warp: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
                factor: 700,
            },
            limit: 0,
            value: 120,
        },
        opacity: {
            random: {
                enable: true,
                minimumValue: 0.3,
            },
            value: 0.8,
            animation: {
                enable: true,
                minimumValue: 0.3,
                speed: 0.5,
                sync: false,
            },
        },
        reduceDuplicates: true,
        rotate: {
            random: true,
            value: 0,
            animation: {
                enable: false,
                speed: 0,
                sync: false,
            },
            direction: "clockwise",
            path: false,
        },
        shadow: {
            blur: 50,
            color: {
                value: "#e00000",
            },
            enable: false,
            offset: {
                x: 0,
                y: 0,
            },
        },
        shape: {
            options: {},
            type: "circle",
        },
        size: {
            random: {
                enable: true,
                minimumValue: 1,
            },
            value: 3,
            animation: {
                destroy: "none",
                enable: true,
                minimumValue: 1,
                speed: 3,
                startValue: "max",
                sync: false,
            },
        },
        stroke: {
            width: 0,
            color: {
                value: "#ffffff",
                animation: {
                    enable: false,
                    speed: 0,
                    sync: false,
                },
            },
        },
        twinkle: {
            lines: {
                enable: true,
                frequency: 0.005,
                opacity: 0.5,
                color: {
                    value: "#F43F5E",
                },
            },
            particles: {
                enable: true,
                frequency: 1,
                opacity: 1,
                color: {
                    value: "#F43F5E",
                },
            },
        },
    },
    pauseOnBlur: false,
    pauseOnOutsideViewport: false,
    themes: [],
};

export default particlesConfig;
