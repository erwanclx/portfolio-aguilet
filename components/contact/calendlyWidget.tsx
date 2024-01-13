import React, { useEffect } from "react";

export default function CalendlyWidget() {

    useEffect(() => {
        // Load Calendly script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;

        const entry = document.getElementsByTagName('script')[0];
        if (entry.parentNode) {
            entry.parentNode.insertBefore(script, entry);
        }

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };

    }, []);

    return (
        <>
            <div className="calendly-inline-widget" data-url="https://calendly.com/aguilet/premiere-prise-de-contact"></div>
        
            <style jsx>{`        
                      
                      .calendly-inline-widget {
                        width: 100%;
                        min-height: 700px;
                        height: 100%;
                      }

                      @media (max-width: 1760px) {
                        .calendly-inline-widget {
                          height: 1100px;
                        }
                      }

                      
                      @media (min-width: 1261px) {
                        .calendly-inline-widget {
                          height: 700px;
                        }
                      }

            `}</style>
        </>
    )
}
