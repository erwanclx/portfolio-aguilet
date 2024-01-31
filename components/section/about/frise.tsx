import Section from "../section";
import { PrimaryButton } from "@/components/button/button";
import Angle from "@/components/frise/angle";
import FullCol from "@/components/frise/full-col";
import Label from "@/components/frise/label";
import IndLabel from "@/components/frise/indLabel";
import Intersec from "@/components/frise/intersec";

export default function Frise() {
    return (
        <Section id="parcours" className="
        h-auto
        min-h-[100dvh]">

            <div className="w-full text-center">
                <h2 className="text-3xl font-bold text-center">Mon parcours</h2>
                <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
                {/* <div className="flex gap-8 mt-4">
                    <div className="w-1/2 bg-blue-500 text-white py-2">
                        <p className="text-3xl font-bold text-center">Professionel</p>
                    </div>
                    <div className="w-1/2 bg-sky-950 text-white py-2">
                        <p className="text-3xl font-bold text-center">Études et certifications</p>
                    </div>
                </div> */}

                                
                <div className="w-full flex flex-col lg:flex-row gap-24 lg:gap-8 mt-8">

                    <div className="w-full  lg:w-1/2 relative about-grid mt-4">

                     
                        <div className="bg-blue-500 text-white py-2 h-5/6 flex justify-center items-center fill-first-row">
                            <p className="text-3xl font-bold">Professionel</p>
                        </div>

                            <div className="col-1 bg-blue-500 w-full fill-col grid text-white justify-center px-4" >
                                <p className="w-fit mt-2">Now- <br/>2023 </p>
                                <p className="w-fit mt-2">2023- <br/>2021 </p>
                                <p className="w-fit mt-2">2021- <br/>2021 </p>
                            </div>

                            <div className="col-2 h-40 w-full relative" >
                                <Label>
                                    <p>Flowlines by SCC</p>
                                </Label>
                            </div>

                            <div className="col-2 w-full" >
                                <Label>
                                    <p>La Sauvegardes des Yvelines</p>
                                </Label>
                            </div>

                            <div className="col-2 relative w-full" >
                                <Intersec>
                                    <p>Ministère de l'intérieur</p>
                                </Intersec>
                            </div>

                            <div className="col-3 row-2" >
                                <Label>
                                    <p>EI Arthur Guilet</p>
                                </Label>
                            </div>

                            <div className="col-3 row-3" >
                                <FullCol />
                            </div>

                            <div className="col-3 row-4" >
                                <Angle />
                            </div>


                    </div>

                    <div className="w-full lg:w-1/2 relative about-grid-secondary mt-4">

                        <div className="bg-sky-950 text-white py-2 h-5/6 flex justify-center items-center fill-first-row">
                            <p className="text-3xl font-bold">Études et certifications</p>
                        </div>

                            <div className="col-1 h-40 justify-self-start" >
                                <Label secondary>
                                    <p>Licence Informatique Générale - CNAM</p>
                                </Label>
                            </div>

                            <div className="col-1 justify-self-start" >
                                <Label secondary>
                                    <p>BTS SIO - Système, Réseau et Cybersécurité</p>
                                </Label>
                            </div>

                            <div className="col-1 justify-self-start relative" >
                                <Label secondary>
                                    <p>Bac Générale Maths et NSI</p>
                                </Label>
                            </div>

                            <div className="col-2 row-1 justify-self-start" >

                            </div>

                            <div className="col-2 row-3 justify-self-start" >
                                <IndLabel secondary>
                                    <p>Mooc ANSSI<br/>Mooc RGPD CNIL</p>
                                </IndLabel>
                            </div>


                    </div>

                </div>

            </div>
            
            {/* <div className="w-fit relative about-grid mt-4">

                    <div className="col-1 bg-blue-500 w-full fill-col grid text-white justify-center px-4" >
                        <p className="w-fit mt-2">2023- </p>
                        <p className="w-fit mt-2">2023- <br/>2021 </p>
                        <p className="w-fit mt-2">2021 </p>
                    </div>

                    <div className="col-2" >
                        <Label>
                            <p>Flowlines by SCC</p>
                        </Label>
                    </div>

                    <div className="col-2" >
                    <Label>
                            <p>La Sauvegardes des Yvelines</p>
                        </Label>
                    </div>

                    <div className="col-2" >
                        <Intersec>
                            <p>Ministère de l'intérieur</p>
                        </Intersec>
                    </div>

                    <div className="col-3 row-1" >
                        <Label>
                            <p>EI Arthur Guilet</p>
                        </Label>
                    </div>

                    <div className="col-3 row-2" >
                        <FullCol />
                    </div>

                    <div className="col-3 row-3" >
                        <Angle />
                    </div>
                
                        
            </div> */}

        </Section>
    )
}