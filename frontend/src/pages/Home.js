import { useEffect, useState } from 'react'

//components
import WorkoutDetails from '../components/WorkoutDetails'


const Home = () => {
    //updating local states
    //creating state
    const [workouts, setWorkouts] = useState(null);

    //useEffect HOOK - to fetch all the database
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts');  //fetch API
            const json = await response.json(); //passes json so that we can have an array of objects, each object represents a workout

            //checking if the response is ok
            if (response.ok) {
                //updating the workouts
                setWorkouts(json);
            }
        };

        fetchWorkouts();
    }, []); //[] - means that we only want to fire the function once {an empty array}

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    // <p key={workout._id}>{workout.title}</p>
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
        </div>
    );
};

export default Home;