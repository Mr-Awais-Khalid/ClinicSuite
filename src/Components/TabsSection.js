import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ServicesSection from './ServicesSection';
import ProductTab from './ProductTab';

function TabsSection() {
    const [activeTab, setActiveTab] = useState('bar-with-underline-1');
    const [prevTab, setPrevTab] = useState('bar-with-underline-1');
    const intervalRef = useRef(null);
    const servicesRef = useRef(null);
    const productsRef = useRef(null);

    const handleTabClick = (tabId) => {
        if (tabId !== activeTab) {
            setPrevTab(activeTab);
            setActiveTab(tabId);
        }
    };

    useEffect(() => {
        // Function to switch tabs
        const switchTab = () => {
            setPrevTab(activeTab);
            setActiveTab(prevTab === 'bar-with-underline-1' ? 'bar-with-underline-3' : 'bar-with-underline-1');
        };

        // Set interval to switch tab every 5 seconds
        intervalRef.current = setInterval(switchTab, 5000);

        // Clear interval on component unmount
        return () => {
            clearInterval(intervalRef.current);
        };
    }, [activeTab, prevTab]);

    useEffect(() => {
        if (activeTab === 'bar-with-underline-1' && servicesRef.current) {
            gsap.fromTo(
                servicesRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5 }
            );
        } else if (activeTab === 'bar-with-underline-3' && productsRef.current) {
            gsap.fromTo(
                productsRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5 }
            );
        }
    }, [activeTab]);

    return (
        <div className='max-w-[80rem] mx-auto mt-24 '>
            <div className="flex flex-wrap -mx-4 mb-8 items-center">
                <div className="w-full lg:w-2/3 xl:w-1/2 px-4 mb-12 lg:mb-0">
                    <div>
                        <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
                            Saas & Paas
                        </span>
                        <h1 className="font-heading mb-4 logo text-5xl xs:text-5xl md:text-6xl font-bold text-gray-900">
                            <span>Solutions & Offerings</span>
                        </h1>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 xl:w-1/2 px-4">
                    <div className="max-w-sm lg:ml-auto">
                        <p className="text-lg text-gray-500">
                            Explore our comprehensive range of services and products tailored to meet your needs and drive success.
                        </p>
                    </div>
                </div>
            </div>

            <nav className="relative z-0 flex border rounded-xl overflow-hidden" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                <button
                    type="button"
                    className={`relative min-w-0 flex-1 logo bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-md font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 ${activeTab === 'bar-with-underline-1' ? 'border-b-blue-600 text-gray-900' : ''
                        }`}
                    onClick={() => handleTabClick('bar-with-underline-1')}
                    aria-selected={activeTab === 'bar-with-underline-1'}
                    role="tab"
                >
                    Services Catalog
                </button>
                <button
                    type="button"
                    className={`relative min-w-0 flex-1 logo text-md bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 ${activeTab === 'bar-with-underline-3' ? 'border-b-blue-600 text-gray-900' : ''
                        }`}
                    onClick={() => handleTabClick('bar-with-underline-3')}
                    aria-selected={activeTab === 'bar-with-underline-3'}
                    role="tab"
                >
                    Products Catalog
                </button>
            </nav>

            <div className="mt-3">
                <div id="bar-with-underline-1" role="tabpanel" aria-labelledby="bar-with-underline-item-1" className={activeTab === 'bar-with-underline-1' ? '' : 'hidden'}>
                    <div ref={servicesRef}>
                        <ServicesSection />
                    </div>
                </div>

                <div id="bar-with-underline-3" role="tabpanel" aria-labelledby="bar-with-underline-item-3" className={activeTab === 'bar-with-underline-3' ? '' : 'hidden'}>
                    <div ref={productsRef}>
                        <ProductTab />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabsSection;
