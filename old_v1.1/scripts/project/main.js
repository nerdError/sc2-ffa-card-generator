
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));

	const callbacks = []

	document.querySelectorAll('.slider').forEach(slider => {
		const updateProgress = () => {
			const min = +slider.min || 0;
			const max = +slider.max || 100;
			const percent = ((slider.value - min) / (max - min)) * 100;
				slider.style.setProperty('--progress', percent + '%');
		};

		slider.addEventListener('input', updateProgress);
		slider.addEventListener('change', updateProgress);
		updateProgress(); // начальное значение
		callbacks.push(updateProgress)
	});

	runtime.updateSliders = () => {
		callbacks.forEach(i => i());
	}
}

function Tick(runtime)
{
	// Code to run every tick
}