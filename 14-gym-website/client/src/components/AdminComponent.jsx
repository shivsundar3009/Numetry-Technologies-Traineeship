// AdminComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import adminImage from '../assets/admin.jpg';

const AdminComponent = () => {
    const [dietPlans, setDietPlans] = useState([]);
    const [exercisePlans, setExercisePlans] = useState([]);

    const [newDietPlan, setNewDietPlan] = useState({
        name: '',
        description: '',
        ageGroup: '',
        menu: [],
    });

    const [newExercisePlan, setNewExercisePlan] = useState({
        name: '',
        description: '',
        ageGroup: '',
        exercises: [],
        prices: {},
    });

    const [showNewDietPlanForm, setShowNewDietPlanForm] = useState(false);
    const [showNewExercisePlanForm, setShowNewExercisePlanForm] = useState(false);

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

    const handleNewDietPlanChange = (e) => {
        const { name, value } = e.target;
        setNewDietPlan({ ...newDietPlan, [name]: value });
    };

    const handleNewExercisePlanChange = (e) => {
        const { name, value } = e.target;
        setNewExercisePlan({ ...newExercisePlan, [name]: value });
    };

    const createDietPlan = async () => {
        try {
            await axios.post('http://localhost:3000/api/v2/create', newDietPlan);
            setNewDietPlan({
                name: '',
                description: '',
                ageGroup: '',
                menu: [],
            });
            setShowNewDietPlanForm(false);
            fetchData();
        } catch (error) {
            console.error('Error creating diet plan:', error);
        }
    };

    const createExercisePlan = async () => {
        try {
            await axios.post('http://localhost:3000/api/v3/create', newExercisePlan);
            setNewExercisePlan({
                name: '',
                description: '',
                ageGroup: '',
                exercises: [],
                prices: {},
            });
            setShowNewExercisePlanForm(false);
            fetchData();
        } catch (error) {
            console.error('Error creating exercise plan:', error);
        }
    };

    return (
        <>
            <Header />
            <div className="w-full" style={{ backgroundImage: `url(${adminImage})`, backgroundSize: 'cover' }}>
                <div className="flex justify-around items-center">
                    <div className="">
                        <h1 className="text-2xl font-bold my-4">Diet Plans</h1>
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
                    </div>
                    <div className="w-1/3">
                        <h1 className="text-2xl font-bold my-4">Exercise Plans</h1>
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
                    </div>
                </div>
                <div className="flex justify-center gap-5">
                    <button onClick={() => setShowNewDietPlanForm(!showNewDietPlanForm)} className="bg-green-500 text-white p-4 rounded-xl border-2 border-transparent hover:border-green-500 hover:bg-white hover:text-green-500">Create New Diet Plan</button>
                    {showNewDietPlanForm && (
                        <div className="w-1/3 bg-white rounded-xl p-4 shadow-md">
                            <input type="text" name="name" placeholder="Name" value={newDietPlan.name} onChange={handleNewDietPlanChange} className="block w-full mb-2 p-2 border border-gray-300 rounded-md" />
                            <input type="text" name="description" placeholder="Description" value={newDietPlan.description} onChange={handleNewDietPlanChange} className="block w-full mb-2 p-2 border border-gray-300 rounded-md" />
                            <input type="text" name="ageGroup" placeholder="Age Group" value={newDietPlan.ageGroup} onChange={handleNewDietPlanChange} className="block w-full mb-2 p-2 border border-gray-300 rounded-md" />
                            {newDietPlan.menu.map((item, index) => (
                                <input key={index} type="text" placeholder={`Menu Item ${index + 1}`} value={item} onChange={(e) => handleMenuChange(e, index)} className="block w-full mb-2 p-2 border border-gray-300 rounded-md" />
                            ))}
                            <button onClick={createDietPlan} className="bg-green-500 text-white p-2 rounded-md hover:bg-white hover:text-green-500 hover:border-green-500 border-2 border-transparent">Create Diet Plan</button>
                        </div>
                    )}
                    <button onClick={() => setShowNewExercisePlanForm(!showNewExercisePlanForm)} className="bg-blue-500 text-white p-4 rounded-xl border-2 border-transparent hover:border-blue-500 hover:bg-white hover:text-blue-500">Create New Exercise Plan</button>
                    {showNewExercisePlanForm && (
                        <div className="w-1/3 bg-white rounded-xl p-4 shadow-md">
                            <input type="text" name="name" placeholder="Name" value={newExercisePlan.name} onChange={handleNewExercisePlanChange} className="block w-full mb-2 p-2 border border-gray-300 rounded-md" />
                            <input type="text" name="description" placeholder="Description" value={newExercisePlan.description} onChange={handleNewExercisePlanChange} className="block w-full mb-2 p-2 border border-gray-300 rounded-md" />
                            <input type="text" name="ageGroup" placeholder="Age Group" value={newExercisePlan.ageGroup} onChange={handleNewExercisePlanChange} className="block w-full mb-2 p-2 border border-gray-300 rounded-md" />
                            {newExercisePlan.exercises.map((item, index) => (
                                <input key={index} type="text" placeholder={`Exercise Name ${index + 1}`} value={item} onChange={(e) => handleExerciseChange(e, index)} className="block w-full mb-2 p-2 border border-gray-300 rounded-md" />
                            ))}
                            <button onClick={createExercisePlan} className="bg-blue-500 text-white p-2 rounded-md hover:bg-white hover:text-blue-500 hover:border-blue-500 border-2 border-transparent">Create Exercise Plan</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default AdminComponent;
