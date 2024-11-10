
type WatchProps = {
    hours?: string
    minutes?: string
    seconds?: string
}

const Watch = ({ hours = "14", minutes = "24", seconds = "14" }: WatchProps) => {
	return (
		<div className="text-2xl font-bold p-4 border-2 border-black dark:border-white  rounded-lg">
			{hours}:{minutes}:
			<span className="dark:text-pink-700">{seconds}</span>
		</div>
	);
};

export default Watch;
