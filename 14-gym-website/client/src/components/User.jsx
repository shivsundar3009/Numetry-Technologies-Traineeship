// User.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import backgroundImage from '../assets/user.jpg';

const User = () => {
    const [dietPlans, setDietPlans] = useState([]);
    const [exercisePlans, setExercisePlans] = useState([]);
    const [showDietPlans, setShowDietPlans] = useState(false);
    const [showExercisePlans, setShowExercisePlans] = useState(false);
    const [dashboardHeight, setDashboardHeight] = useState('h-screen');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const dietPlansResponse = await axios.get('http://localhost:3000/api/v2/');
            const exercisePlansResponse = await axios.get('http://localhost:3000/api/v3/');

            setDietPlans(dietPlansResponse.data);
            setExercisePlans(exercisePlansResponse.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const toggleShowDietPlans = () => {
        setShowDietPlans(!showDietPlans);
        setDashboardHeight(showDietPlans ? 'h-screen' : 'h-full');
    };

    const toggleShowExercisePlans = () => {
        setShowExercisePlans(!showExercisePlans);
        setDashboardHeight(showExercisePlans ? 'h-screen' : 'h-full');
    };

    return (
        <>
            <Header />
            <div className={`${dashboardHeight}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
                <h1 className="text-2xl font-bold">User Dashboard</h1>
                <div className="flex justify-around items-center">
                    <div className="">
                        <h2 className="text-xl font-bold my-4">Diet Plans</h2>
                        <button onClick={toggleShowDietPlans} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">
                            {showDietPlans ? 'Hide Diet Plans' : 'Show Diet Plans'}
                        </button>
                        {showDietPlans && (
                            <ul>
                                {dietPlans.map((dietPlan) => (
                                    <li key={dietPlan._id} className="mb-4 bg-white rounded-xl p-4 shadow-md">
                                        <div>Name: {dietPlan.name}</div>
                                        <div>Description: {dietPlan.description}</div>
                                        <div>Age Group: {dietPlan.ageGroup}</div>
                                        <div>Menu: {dietPlan.menu.map((item, index) => (
                                            <span key={index}>{item.mealName}, </span>
                                        ))}</div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="w-1/3">
                        <h2 className="text-xl font-bold my-4">Exercise Plans</h2>
                        <button onClick={toggleShowExercisePlans} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">
                            {showExercisePlans ? 'Hide Exercise Plans' : 'Show Exercise Plans'}
                        </button>
                        {showExercisePlans && (
                            <ul>
                                {exercisePlans.map((exercisePlan) => (
                                    <li key={exercisePlan._id} className="mb-4 bg-white rounded-xl p-4 shadow-md">
                                        <div>Name: {exercisePlan.name}</div>
                                        <div>Description: {exercisePlan.description}</div>
                                        <div>Age Group: {exercisePlan.ageGroup}</div>
                                        <div>Exercises: {exercisePlan.exercises.map((exercise, index) => (
                                            <span key={index}>{exercise.name}, </span>
                                        ))}</div>
                                        <div>Prices: {JSON.stringify(exercisePlan.prices)}</div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;
