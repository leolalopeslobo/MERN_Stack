import { useEffect } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
    // Global context
    const { workouts, dispatch } = useWorkoutsContext();

    // useEffect HOOK - to fetch all the database
    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await fetch('/api/workouts');
                if (!response.ok) {
                    throw new Error('Failed to fetch workouts');
                }
                const json = await response.json();
                dispatch({ type: 'SET_WORKOUTS', payload: json });
            } catch (error) {
                console.error('Error fetching workouts:', error.message);
                // Optionally, you can dispatch an error action here
            }
        };

        fetchWorkouts();
    }, [dispatch]); // Include dispatch in the dependency array

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    );
};

export default Home;