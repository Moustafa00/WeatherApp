import { useEffect, useState } from "react";
import Search from "../search";
import { ArrowPathIcon, CloudArrowUpIcon, SunIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function Weather() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    async function fetchWeatherData(param) {
        setLoading(true);
        try {

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=21c43473b147de85e3d3b64923e8219a`);

            const data = await response.json();

            console.log(data, "data");
            if (data) {
                setWeatherData(data);
                setLoading(false);
            }
        }
        catch (e) {
            console.log(e);
        }

    }

    function getCurrentDate() {
        return new Date().toLocaleDateString('en-us',
            {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            }
        )
    }

    function handleSearch() {

        fetchWeatherData(search);
    }

    useEffect(() => {
        fetchWeatherData('beirut')
    }, []);

    console.log(weatherData);

    return (
        <div className="bg-gradient-to-br from-sky-700 via-blue-600 to-purple-400 p-8 rounded-xl">
            <div className="max-w-md mx-auto space-y-6">
                <Search
                    search={search}
                    setSearch={setSearch}
                    handleSearch={handleSearch}
                />

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <ArrowPathIcon className="h-12 w-12 text-white animate-spin" />
                    </div>
                ) : weatherData?.cod === 200 ? (
                    <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-white">
                        <div className="text-center space-y-4">
                            <h2 className="text-2xl font-bold">
                                {weatherData?.name}, <span className="font-medium">{weatherData?.sys?.country}</span>
                            </h2>
                            <p className="text-sm opacity-80">{getCurrentDate()}</p>

                            <div className="flex items-center justify-center gap-4">
                                <CloudArrowUpIcon className="h-16 w-16" />
                                <div>
                                    <p className="text-5xl font-bold">
                                        {Math.round(weatherData?.main?.temp - 273.15)}°C
                                    </p>
                                    <p className="capitalize">
                                        {weatherData.weather?.[0]?.description}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="bg-white/20 p-4 rounded-xl text-center">
                                    <SunIcon className="h-6 w-6 mx-auto mb-2" />
                                    <p className="text-xl font-semibold">
                                        {weatherData?.wind?.speed} m/s
                                    </p>
                                    <p className="text-sm">Wind Speed</p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-xl text-center">
                                    <HeartIcon className="h-6 w-6 mx-auto mb-2" />
                                    <p className="text-xl font-semibold">
                                        {weatherData?.main?.humidity}%
                                    </p>
                                    <p className="text-sm">Humidity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-8 text-white font-medium">
                        City not found. Please try again.
                    </div>
                )}
            </div>
        </div>
    )
}