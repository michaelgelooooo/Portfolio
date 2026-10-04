import { Link } from "react-router-dom";
import CueLink from "@/components/ui/CueLink";
import { HOME, ABOUT } from "@/data/home";
import placeholderPortrait from "@/assets/images/placeholders/placeholder-portrait.jpg";
import placeholderLandscape from "@/assets/images/placeholders/placeholder-landscape.jpg";

export default function Home() {
    return (
        <>
            <section id="home" className="layout bg-base-200 border-b border-current/25">
                <div className="layout-rail flex lg:flex-col gap-1">
                    <span>01</span>
                    <span className="inline lg:hidden">/</span>
                    <span className="lg:opacity-75">HOME</span>
                </div>

                <div className="layout-panel flex flex-col lg:py-32">
                    <div className="space-y-8 lg:space-y-16">
                        <div className="space-y-1 md:space-y-2 lg:space-y-4">
                            <div className="badge badge-primary badge-xs md:badge-sm lg:badge-md">HELLO I'M</div>
                            <h1 className="text-6xl md:text-8xl">{HOME.heading}</h1>
                            <h3 className="font-subheading text-2xl md:text-4xl italic">{HOME.subheading}</h3>
                        </div>

                        <p className="text-base md:text-xl opacity-75">{HOME.text}</p>

                        <div className="md:flex items-end justify-between">
                            <div className="flex flex-col gap-2 md:gap-4 sm:flex-row">
                                <Link
                                    to="/showcase"
                                    className="btn md:btn-lg bg-violet-800 text-white hover:bg-violet-900 w-full sm:w-auto"
                                >
                                    View Showcase <i className="fas fa-arrow-right"></i>
                                </Link>

                                <Link
                                    to="/contact"
                                    className="btn md:btn-lg btn-outline w-full sm:w-auto"
                                >
                                    Contact Me
                                </Link>
                            </div>

                            <div className="hidden md:inline lg:hidden">
                                <CueLink to="#about">
                                    MORE ABOUT ME
                                </CueLink>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:inline lg:mt-auto">
                        <CueLink to="#about">
                            MORE ABOUT ME
                        </CueLink>
                    </div>
                </div>

                <div className="layout-panel flex flex-col-reverse lg:flex-col justify-center lg:justify-start items-center gap-4 py-4 md:py-8 lg:py-16">
                    <div className="flex w-full justify-between">
                        <div className="w-full md:hidden text-xs">
                            <CueLink to="#about">
                                MORE ABOUT ME
                            </CueLink>
                        </div>

                        <div className="flex flex-row lg:flex-col justify-end items-end gap-2 lg:gap-0 text-xs md:text-sm w-full">
                            <span className="opacity-50">BASED IN</span>
                            <span>LEYTE</span>
                        </div>
                    </div>
                    <div className="w-full lg:flex-1 lg:min-h-0 lg:@container-size">
                        <div className="corner-frame corner-frame-fit p-4">
                            <div className="bg-base-100 border border-current/25 p-2 w-full h-fit lg:h-full">
                                <picture>
                                    <source media="(min-width: 1024px)" srcSet={placeholderPortrait} />
                                    <img
                                        className="w-full h-auto lg:h-full object-cover"
                                        src={placeholderLandscape}
                                        alt=""
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="layout bg-base-300">
                <div className="layout-rail flex lg:flex-col gap-1">
                    <span>02</span>
                    <span className="inline lg:hidden">/</span>
                    <span className="lg:opacity-75">ABOUT</span>
                </div>

                <div className="layout-panel flex flex-col justify-center gap-4">
                    <div className="space-y-1 md:space-y-2 block lg:hidden">
                        <div className="badge badge-primary badge-xs md:badge-sm">MORE ABOUT ME</div>
                        <h1 className="text-4xl md:text-6xl">{ABOUT.heading}</h1>
                    </div>
                    <div className="w-full">
                        <div className="corner-frame p-4">
                            <div className="bg-base-100 border border-current/25 p-2">
                                <img
                                    className="object-cover"
                                    src={placeholderLandscape}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="layout-panel py-4 md:py-8 lg:py-16">
                    <div className="h-full flex flex-col justify-center gap-2 md:gap-4 lg:gap-8">
                        <div className="space-y-4 hidden lg:block">
                            <div className="badge badge-primary badge-md">MORE ABOUT ME</div>
                            <h1 className="text-6xl">{ABOUT.heading}</h1>
                        </div>

                        <div className="text-sm md:text-base lg:text-lg opacity-80 space-y-1 md:space-y-2 lg:space-y-4">
                            {ABOUT.text.map((text, i) => (
                                <p key={i}>{text}</p>
                            ))}
                        </div>

                        <div className="divider m-0"></div>

                        <div className="flex gap-4 items-center">
                            <div className="size-12 shrink-0 flex items-center justify-center bg-base-100 border border-current/25">
                                <i className="fa-solid fa-mug-hot opacity-80"></i>
                            </div>

                            <p className="text-sm md:text-base lg:text-md opacity-60">{ABOUT.note}</p>
                        </div>

                        <div className="text-xs lg:text-sm mt-8 lg:mt-0">
                            <CueLink to="/showcase" icon="fa-arrow-right">
                                MORE ABOUT MY BACKGROUND
                            </CueLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}