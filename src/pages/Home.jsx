import { Link } from "react-router-dom";
import CueLink from "@/components/ui/CueLink";
import placeholderPortrait from "@/assets/images/placeholders/placeholder-portrait.jpg";
import placeholderLandscape from "@/assets/images/placeholders/placeholder-landscape.jpg";

export default function Home() {
    return (
        <>
            <section id="home" className="layout bg-base-200 border-b border-current/25">
                <div className="layout-rail flex">
                    <div className="flex lg:flex-col gap-1 ">
                        <span>01</span>
                        <span className="inline lg:hidden">/</span>
                        <span className="lg:opacity-75">HOME</span>
                    </div>

                    <div className="badge badge-primary lg:hidden ms-auto">HELLO I'M</div>
                </div>

                <div className="layout-panel flex flex-col lg:py-32">
                    <div className="space-y-8 lg:space-y-16">
                        <div className="space-y-2 lg:space-y-4">
                            <div className="badge badge-primary badge-lg hidden lg:block">HELLO I'M</div>
                            <h1 className="text-6xl md:text-8xl">Michæl.</h1>
                            <h3 className="font-subheading text-2xl md:text-4xl italic">I like making things work.</h3>
                        </div>

                        <p className="text-base md:text-xl">
                            I build full-stack applications from the interface to the underlying systems, with a focus on solving problems and creating useful experiences.
                        </p>

                        <div className="md:flex items-end justify-between">
                            <div className="flex flex-col gap-2 md:gap-4 sm:flex-row">
                                <Link
                                    to="/showcase"
                                    className="btn md:btn-lg bg-purple-700 text-white hover:bg-purple-900 w-full sm:w-auto"
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

            <section id="about" className="layout bg-base-200">

            </section>
        </>
    );
}